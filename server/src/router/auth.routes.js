import { Router } from 'express';
import { body } from 'express-validator';
import AuthController from '../controllers/auth.controller.js'

const router = new Router();

router.post('/auth/registration',
  body('username').isLength({ min: 3, max: 16 }),
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  AuthController.registration
);

router.post('/auth/login',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  AuthController.login
);

router.post('/auth/logout', AuthController.logout);
router.get('/auth/refresh', AuthController.refresh);

export default router;
