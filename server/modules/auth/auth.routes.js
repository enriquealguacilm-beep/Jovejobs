import express from 'express';
import authController from './auth.controller.js';


const router = express.Router();



router.post('/registerCandidate', authController.registerCandidate);


export default router;