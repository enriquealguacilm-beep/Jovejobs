import express from 'express';
import authController from './auth.controller.js';
import { verifyToken } from '../../middlewares/verifyToken.js';

const router = express.Router();

router.post('/login', authController.login);
router.get('/userById', verifyToken, authController.userById);

export default router;
