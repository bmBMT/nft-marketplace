import { Router } from 'express'
import { body } from 'express-validator'
import authMiddleware from '../middlewares/auth.middleware.js'
import WalletController from '../controllers/wallet.controller.js'

const router = new Router();

router.post('/wallet/increment',
  authMiddleware,
  body('count').isNumeric(),
  WalletController.increment
);

router.post('/wallet/decrement',
  authMiddleware,
  body('count').isNumeric(),
  WalletController.decrement
);

export default router;