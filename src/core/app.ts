// core/app.ts
import express, { Request, Response } from 'express';
import userRoutes from '../routes/userRoutes';
const PORT = process.env.PORT || 3300;
const app = express();

app.use(express.json());

// Use routes
app.use('/api/user', userRoutes);

// Basic route for testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


