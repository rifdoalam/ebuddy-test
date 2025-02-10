import { Request, Response, NextFunction } from 'express';
import * as admin from 'firebase-admin';

// Extend the Express Request interface to include `user`
interface AuthenticatedRequest extends Request {
  user?: admin.auth.DecodedIdToken; // Type for the decoded Firebase token
}
export const authMiddleware = async (
  req: AuthenticatedRequest, 
  res: Response, 
  next: NextFunction
): Promise<void> => {
  // Extract token from the Authorization header
  const token = req.headers['authorization']?.split('Bearer ')[1];
  console.log(token);
  // If the token is not found, send an unauthorized error
  if (!token) {
    res.status(401).json({ error: 'Unauthorized. Token is missing.' });
  }

  try {
    // Verify the token with Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token!);
    // Attach the decoded token to the request object
    req.user = decodedToken;

    // Proceed to the next middleware or route handler
    return next();
  } catch (error) {
    console.error('Error verifying token:', error);

    // Send an unauthorized error if the token is invalid or expired
     res.status(401).json({ error: 'Unauthorized. Invalid or expired token.' });
  }
};
