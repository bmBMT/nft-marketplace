import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose'
import errorMiddleware from './middlewares/error.middleware.js';
import fileUpload from 'express-fileupload';
import path from 'path';
import router from './router/index.js'

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'src', 'static')));
app.use(fileUpload({}))
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();