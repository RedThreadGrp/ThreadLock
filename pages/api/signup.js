// pages/api/signup.js
import { Resend } from 'resend'
import { ratelimiter } from '@/lib/ratelimit'

// existing Supabase import if you’re storing signups durably
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
)

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Get client IP (works behind proxies on Vercel)
    const ip =
      (req.headers['x-forwarded-for']?.split(',')[0]?.trim()) ||
      req.headers['x-real-ip'] ||
      req.socket?.remoteAddress ||
      '0.0.0.0'

    // 🔒 Rate limit check
    const { success } = await ratelimiter.limit(`signup:ip:${ip}`)
    if (!success) {
      return res.status(429).json({ message: 'Too many attempts. Please try again later.' })
    }

    // --- continue with your signup logic ---
    const { name, email } = req.body

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email required.' })
    }

    // Example Supabase insert (with unique email index)
    const { error } = await supabase
      .from('waitlist_signups')
      .insert({ name, email })
    if (error && !/duplicate/i.test(error.message)) {
      console.error('Supabase insert error:', error)
      return res.status(500).json({ message: 'Internal server error.' })
    }

    // Notify yourself via Resend
    await resend.emails.send({
      from: 'ThreadLock <notify@threadlock.ai>',
      to: ['info@threadlock.ai'],
      subject: 'New waitlist signup',
      text: `Name: ${name}\nEmail: ${email}\nIP: ${ip}`,
    })

    return res.status(200).json({ message: 'Thanks! You’re on the list.' })
  } catch (e) {
    console.error('Signup error:', e)
    return res.status(500).json({ message: 'Internal server error.' })
  }
}
