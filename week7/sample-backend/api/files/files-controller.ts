import { Router } from 'express';
import { verifyTokenMiddleware } from '../../middleware/verify-token';

const router = Router();

router.post('/create');
router.get('/:fileId', verifyTokenMiddleware);

export default router;