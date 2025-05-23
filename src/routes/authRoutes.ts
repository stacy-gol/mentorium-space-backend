import express from 'express';
import { validate } from '../middlewares/validate';
import { registerSchema } from '../validators/authValidators';

const router = express.Router();

// router.post('/register', validate(registerSchema), (req, res) => {
//   res.status(201).json({ success: true, message: 'Пользователь зарегистрирован' });
// });

export default router;
