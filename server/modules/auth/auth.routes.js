import express from 'express';
import authController from './auth.controller.js';


const router = express.Router();



router.post('/registerCandidate', authController.registerCandidate);
router.post('/registerCompany', authController.registerCompany);


export default router;