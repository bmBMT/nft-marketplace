import { Router } from 'express'
import { body } from 'express-validator'
import NftController from '../controllers/nft.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const router = new Router();

router.post('/nft/create',
  authMiddleware,
  body('name').isString(),
  body('description').isString(),
  body('category').isString(),
  // body('tags').isArray(),
  body('price').isNumeric(),

  NftController.create
);

router.post('/nft/buy',
  body('id').isString(),
  authMiddleware,
  NftController.buy
);

router.post('/nft/getNft',
  body('id').isString(),
  authMiddleware,
  NftController.getNft
);

router.post('/nft/getNfts',
  body('ids').isArray(),
  authMiddleware,
  NftController.getNfts
);

export default router;