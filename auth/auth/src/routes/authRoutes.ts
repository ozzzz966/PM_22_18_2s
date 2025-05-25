import { Router } from 'express';
import { register, login } from '../controllers/authController';
import { Request, Response } from 'express';

const router = Router();
router.post('/register', async (req: Request, res: Response) => {
    try {
        await register(req, res);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/login', async (req: Request, res: Response) => {
    try {
        await login(req, res);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
