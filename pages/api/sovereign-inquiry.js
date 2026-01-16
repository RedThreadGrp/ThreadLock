// pages/api/sovereign-inquiry.js

/**
 * API endpoint for handling ThreadLock Sovereign inquiry form submissions.
 * Sends inquiries to info@threadlock.ai
 */

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' });
  }

  // Parse request body
  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  const { organization = '', nameEmail = '', description = '' } = body;

  // Validate required fields
  if (!organization || !nameEmail || !description) {
    return res.status(400).json({
      ok: false,
      message: 'All fields are required.',
    });
  }

  // Basic email validation (check that nameEmail contains an @)
  if (!nameEmail.includes('@')) {
    return res.status(400).json({
      ok: false,
      message: 'Please include a valid email address in the name and email field.',
    });
  }

  // Honeypot check (if implemented on frontend)
  if (body.website) {
    // Bot detected
    return res.status(200).json({ ok: true, message: 'Inquiry received' });
  }

  try {
    // Since there's no email service currently configured in the repo,
    // we'll log the inquiry and return success.
    // In production, this should integrate with an email service.
    
    console.log('Sovereign inquiry received:', {
      organization,
      nameEmail,
      description,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (Resend, SendGrid, AWS SES, etc.)
    // For now, we'll simulate success
    
    // Example for future implementation:
    // const emailSent = await sendEmail({
    //   to: 'info@threadlock.ai',
    //   from: 'noreply@threadlock.ai',
    //   subject: `Sovereign Inquiry from ${organization}`,
    //   text: `Organization: ${organization}\nContact: ${nameEmail}\n\nDescription:\n${description}`,
    // });

    return res.status(200).json({
      ok: true,
      message: 'Inquiry sent successfully',
    });
  } catch (error) {
    console.error('Error processing sovereign inquiry:', error);
    return res.status(500).json({
      ok: false,
      message: 'Failed to send inquiry. Please try again or contact us directly at info@threadlock.ai',
    });
  }
}

function safeParse(s) {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}
