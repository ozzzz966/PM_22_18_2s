import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { getUserByEmail, createUser } from '../models/userModel';

export const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const userExists = await getUserByEmail(email);
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(email, hashedPassword);

    res.status(201).json({ message: 'User created successfully' });
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);
    if (!user) {
        return res.status(400).json({ message: 'User does not exist' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful' });
};
