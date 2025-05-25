import express from 'express';
import cors from 'cors';

const app = express();


app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
}));

app.use(express.json());

import authRoutes from './routes/authRoutes';
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('Server running on http://127.0.0.1:3000');
});
