export default function handler(req, res) {
  res.status(200).json({
    FIREBASE_API_KEY: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY || !!process.env.VITE_FIREBASE_API_KEY,
    FIREBASE_PROJECT_ID: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || !!process.env.VITE_FIREBASE_PROJECT_ID,
    STRIPE_SECRET_KEY: !!process.env.STRIPE_SECRET_KEY,
  });
}
