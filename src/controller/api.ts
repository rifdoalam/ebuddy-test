// controller/api.ts
import { Request, Response } from 'express';
import { fetchUserData, updateUserData } from '../repository/userCollection';
import { User } from '../entities/user';

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const userData: User = req.body;

  try {
    await updateUserData(userId, userData);
    res.status(200).json({ message: 'User data updated successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user data.' });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  try {
    const user = await fetchUserData(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user data.' });
  }
};
