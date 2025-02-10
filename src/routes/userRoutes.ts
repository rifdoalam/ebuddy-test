// routes/userRoutes.ts
import { Router } from 'express';
import { updateUser, getUser } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';
const router = Router();


router.put('/update-user-data/:userId', authMiddleware, updateUser);
router.get('/fetch-user-data/:userId', authMiddleware, getUser);

export default router;
