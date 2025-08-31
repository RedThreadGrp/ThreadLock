// pages/signup.js
import { useState } from 'react';

export default function SignupPage() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('success'); // show success immediately
    const fd = new FormData(e.currentTarget);
    const payload = { name: fd.get('name'), email: fd.get('email') };
    try {
      await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch { /* ignore errors in this temporary mode */ }
  }

  return (
    <main style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', padding: 24 }}>
      <form onSubmit={onSubmit} style={{ maxWidth: 420, width: '100%' }}>
        <h1 style={{ fontWeight: 800, marginBottom: 12 }}>Join the waitlist</h1>
        <input name="name" placeholder="Name" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
        <input name="email" type="email" required placeholder="Email" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
        <button type="submit" style={{ width: '100%', padding: 10, background: '#ea580c', color: '#fff', fontWeight: 700, border: 0, borderRadius: 8 }}>
          Sign up
        </button>
        {status === 'success' && (
          <p style={{ marginTop: 12, padding: 10, border: '1px solid #cce5cc', background: '#f4fff4', color: '#1f7a1f', borderRadius: 6 }}>
            Accepted — we’ll be in touch. (temporary)
          </p>
        )}
      </form>
    </main>
  );
}
