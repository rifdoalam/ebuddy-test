// config/firebaseConfig.ts
import * as admin from 'firebase-admin';
const serviceAccount = require('./rifdo-test-firebase-adminsdk-5b3hf-9d0574bfb5.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com',
});
export const db = admin.firestore();
