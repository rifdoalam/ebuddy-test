// repository/userCollection.ts
import { db } from '../config/firebaseConfig';
import { User } from '../entities/user';
const usersCollection = db.collection('USERS');
export const fetchUserData = async (userId: string): Promise<User | null> => {
  const userDoc = await usersCollection.doc(userId).get();
  if (userDoc.exists) {
    return userDoc.data() as User;
  } else {
    return null;
  }
};
export const updateUserData = async (userId: string, userData: User): Promise<void> => {
  await usersCollection.doc(userId).set(userData, { merge: true });
};
