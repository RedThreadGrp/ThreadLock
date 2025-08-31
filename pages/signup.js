// TEMP STUB: accepts every signup so the build/deploy succeeds.
// Remove this once real storage/email + ratelimiting are wired.

export default async function handler(req, res) {
  // allow GET for smoke tests and OPTIONS for preflight
  if (req.method === 'OPTIONS') return res.status(200).end();

  // Best-effort body parse (Next usually parses JSON already)
  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  const { email = null, name = null } = body;

  // Always report success (no external services called)
  return res.status(200).json({
    ok: true,
    message: 'Signup accepted',
    email,
    name,
    // NOTE: nothing is persisted in this stub.
  });
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
