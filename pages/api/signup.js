// pages/api/signup.js
export default function handler(req, res) {
  // allow CORS preflight
  if (req.method === 'OPTIONS') return res.status(200).end();

  // accept GET for smoke tests; POST for forms
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' });
  }

  let body = {};
  if (req.method === 'POST') {
    body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  }

  const { email = null, name = null } = body;

  // TEMP: always succeed, no external deps
  return res.status(200).json({
    ok: true,
    message: 'Signup accepted',
    email,
    name,
  });
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
