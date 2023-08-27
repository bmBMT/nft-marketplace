import { Router } from 'express';
import { body } from 'express-validator';
import authMiddleware from '../middlewares/auth.middleware.js';
import CollectionController from '../controllers/collection.controller.js';

const router = new Router();

router.post('/collection/create',
  body('name').isString(),
  body('nfts').isArray(),
  authMiddleware,
  CollectionController.create
);

router.post('/collection/getCollection',
  body('id').isString(),
  CollectionController.getCollection
);

export default router;