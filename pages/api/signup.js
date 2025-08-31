export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const { name, email } = req.body || {};
    if (!name || !email) {
      res.status(400).json({ message: 'Name and email are required.' });
      return;
    }

    // TODO: persist to your DB / mailing list / email service
    // await db.signup.create({ name, email });

    res.status(200).json({ message: 'Thanks! You’re on the list.' });
  } catch (e) {
    console.error('Signup error:', e);
    res.status(500).json({ message: 'Internal server error.' });
  }
}
