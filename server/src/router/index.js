import { Router } from 'express'
import { body } from 'express-validator'
import authMiddleware from '../middlewares/auth.middleware.js'
import walletController from '../controllers/wallet.controller.js';
import nftController from '../controllers/nft.controller.js';
import authController from '../controllers/auth.controller.js';
import userController from '../controllers/user.controller.js';

const router = new Router();

// auth
router.post('/auth/registration',
  body('username').isLength({ min: 3, max: 16 }),
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  authController.registration
);
router.post('/auth/login',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  authController.login
);
router.post('/auth/logout', authController.logout);
router.get('/auth/refresh', authController.refresh);

// user
router.post('/user/getUser', body('id').isString(), userController.getUser);
router.post(
  '/user/follow',
  authMiddleware,
  body('id').isString(),
  userController.follow
);
router.post(
  '/user/unfollow',
  authMiddleware,
  body('id').isString(),
  userController.unfollow
);
router.post(
  '/user/changeAvatar',
  authMiddleware,
  body('nftId').isString(),
  userController.changeAvatar
);
router.post(
  '/user/changePlaceholder',
  authMiddleware,
  body('nftId').isString(),
  userController.changePlaceholder
);

// wallet
router.post('/wallet/increment',
  authMiddleware,
  body('count').isNumeric(),
  walletController.increment
);
router.post('/wallet/decrement',
  authMiddleware,
  body('count').isNumeric(),
  walletController.decrement
);

// nft
router.post('/nft/create',
  authMiddleware,
  body('name').isString(),
  body('description').isString(),
  body('categorie').isString(),
  body('tags').isArray(),
  body('price').isNumeric(),
  nftController.create
);
router.post('/nft/buy',
  body('id').isString(),
  authMiddleware,
  nftController.buy
);
router.post('/nft/getNft',
  body('id').isString(),
  authMiddleware,
  nftController.getNft
);

export default router