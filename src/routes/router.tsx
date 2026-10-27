import express from 'express';
import registerController from '../controllers/employee/register.js'
import loginController from '../controllers/employee/login.js';

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);


export default router;
