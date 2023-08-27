import { Router } from 'express'
import AuthRoutes from './auth.routes.js'
import UserRoutes from './user.routes.js'
import NftRoutes from './nft.routes.js'
import CollectionRoutes from './collection.routes.js'
import WalletRoutes from './wallet.routes.js'

const router = new Router();

router.use(AuthRoutes);
router.use(UserRoutes);
router.use(WalletRoutes);
router.use(NftRoutes);
router.use(CollectionRoutes);

export default router;