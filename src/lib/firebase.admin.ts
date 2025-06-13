import admin, { ServiceAccount } from "firebase-admin";

const serviceAccount: ServiceAccount = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
};

const databaseURL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

if (
  !serviceAccount.projectId ||
  !serviceAccount.clientEmail ||
  !serviceAccount.privateKey
) {
  throw new Error(
    "Firebase service account credentials are not properly set. Please check your environment variables."
  );
}
if (!databaseURL) {
  throw new Error(
    "Firebase database URL is not set. Please check your environment variables."
  );
}

export function getFirebaseAdmin() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL,
    });
  }

  return admin;
}

const firebaseAdmin = getFirebaseAdmin();

const db = firebaseAdmin.firestore();

export { db, firebaseAdmin };
