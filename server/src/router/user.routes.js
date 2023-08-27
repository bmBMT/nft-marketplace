import { Router } from 'express'
import { body } from 'express-validator'
import authMiddleware from '../middlewares/auth.middleware.js'
import UserController from '../controllers/user.controller.js'

const router = new Router();

router.post('/user/getUser', body('id').isString(), UserController.getUser);

router.post('/user/follow',
  authMiddleware,
  body('id').isString(),
  UserController.follow
);

router.post('/user/unfollow',
  authMiddleware,
  body('id').isString(),
  UserController.unfollow
);

router.post('/user/changeAvatar',
  authMiddleware,
  body('nftId').isString(),
  UserController.changeAvatar
);

router.post('/user/changePlaceholder',
  authMiddleware,
  body('nftId').isString(),
  UserController.changePlaceholder
);

export default router;
