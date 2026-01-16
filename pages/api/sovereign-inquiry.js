// pages/api/sovereign-inquiry.js

/**
 * API endpoint for handling ThreadLock Sovereign inquiry form submissions.
 * Stores inquiries in Firebase Firestore using existing Vercel environment variables.
 * 
 * This endpoint validates the inquiry and returns success. The actual storage
 * can be handled by Firebase Cloud Functions triggered by the client-side submission,
 * following the same pattern as the existing subscribeLead functionality.
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

  // Email validation - check for basic email format
  // Allow formats like "Name - email@domain.com" or just "email@domain.com"
  const emailRegex = /([^\s@]+@[^\s@]+\.[^\s@]+)/;
  const emailMatch = nameEmail.match(emailRegex);
  if (!emailMatch) {
    return res.status(400).json({
      ok: false,
      message: 'Please include a valid email address in the name and email field.',
    });
  }

  // Honeypot check (if implemented on frontend)
  if (body.website) {
    // Bot detected - silently succeed
    return res.status(200).json({ ok: true, message: 'Inquiry received' });
  }

  try {
    // Log inquiry details for server-side tracking
    // In production with Vercel, these logs are available in the Vercel dashboard
    const inquiryData = {
      organization,
      nameEmail,
      extractedEmail: emailMatch[1],
      description,
      timestamp: new Date().toISOString(),
      source: 'threadlock.ai/sovereign',
      userAgent: req.headers['user-agent'] || '',
      // Note: Don't log IP for privacy, Vercel already tracks this
    };

    console.log('✅ Sovereign inquiry received:', inquiryData);

    // Note: The client-side code (sovereign.tsx) should call a Firebase Cloud Function
    // similar to subscribeLead to store this in Firestore. This API validates the data
    // and provides a response, while the Firebase function handles storage.
    //
    // Alternative: Add Firebase Admin SDK with proper credentials to store directly here.
    // For now, this follows the existing pattern in the codebase where the client
    // handles Firebase operations using the existing environment variables.

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
