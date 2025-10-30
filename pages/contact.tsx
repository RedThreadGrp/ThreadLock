import LegalLayout from '@/components/legal/LegalLayout';

export default function Contact() {
  return (
    <LegalLayout 
      title="Contact Us" 
      description="Get in touch with ThreadLock - Contact information and support"
    >
      <h2 className="text-2xl font-bold mt-8 mb-4">Get in Touch</h2>
      <p className="mb-6">
        We're here to help! If you have questions, feedback, or need assistance, please don't hesitate to reach out.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">General Inquiries</h2>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <p className="mb-3">
          <strong>Email:</strong>{' '}
          <a href="mailto:info@threadlock.ai" className="text-orange-600 hover:text-orange-700 underline">
            info@threadlock.ai
          </a>
        </p>
        <p className="mb-3">
          <strong>Address:</strong><br />
          16200 SW Pacific Hwy, Suite H PMB 1046, Tigard, OR 97224, United States
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Support</h2>
      <p className="mb-4">
        For technical support, account issues, or questions about using ThreadLock:
      </p>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <p className="mb-3">
          <strong>Support Email:</strong>{' '}
          <a href="mailto:info@threadlock.ai" className="text-orange-600 hover:text-orange-700 underline">
            info@threadlock.ai
          </a>
        </p>
        <p className="text-sm text-gray-600">
          We aim to respond to all support inquiries within 24-48 hours during business days.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Security Issues</h2>
      <p className="mb-4">
        If you've discovered a security vulnerability or have security concerns:
      </p>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <p className="mb-3">
          <strong>Security Email:</strong>{' '}
          <a href="mailto:info@threadlock.ai" className="text-orange-600 hover:text-orange-700 underline">
            info@threadlock.ai
          </a>
        </p>
        <p className="text-sm text-gray-600">
          Please see our <a href="/security" className="text-orange-600 hover:text-orange-700 underline">Security Policy</a> for 
          information about responsible disclosure.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Copyright and DMCA</h2>
      <p className="mb-4">
        For copyright infringement notices and DMCA takedown requests:
      </p>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <p className="mb-3">
          <strong>Copyright Agent Email:</strong>{' '}
          <a href="mailto:info@threadlock.ai" className="text-orange-600 hover:text-orange-700 underline">
            info@threadlock.ai
          </a>
        </p>
        <p className="text-sm text-gray-600">
          Please see our <a href="/dmca" className="text-orange-600 hover:text-orange-700 underline">DMCA Policy</a> for 
          detailed instructions on submitting a notice.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Privacy and Data Requests</h2>
      <p className="mb-4">
        For privacy-related inquiries, data access requests, or GDPR requests:
      </p>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <p className="mb-3">
          <strong>Privacy Email:</strong>{' '}
          <a href="mailto:info@threadlock.ai" className="text-orange-600 hover:text-orange-700 underline">
            info@threadlock.ai
          </a>
        </p>
        <p className="text-sm text-gray-600">
          See our <a href="/privacy" className="text-orange-600 hover:text-orange-700 underline">Privacy Policy</a> for 
          information about how we handle your data.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Accessibility</h2>
      <p className="mb-4">
        For accessibility feedback or to request content in an alternative format:
      </p>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <p className="mb-3">
          <strong>Accessibility Email:</strong>{' '}
          <a href="mailto:info@threadlock.ai" className="text-orange-600 hover:text-orange-700 underline">
            info@threadlock.ai
          </a>
        </p>
        <p className="text-sm text-gray-600">
          See our <a href="/accessibility" className="text-orange-600 hover:text-orange-700 underline">Accessibility Statement</a> for 
          more information about our commitment to accessibility.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Business Partnerships</h2>
      <p className="mb-4">
        Interested in partnering with ThreadLock or offering our service to your organization?
      </p>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <p className="mb-3">
          <strong>Partnerships Email:</strong>{' '}
          <a href="mailto:info@threadlock.ai" className="text-orange-600 hover:text-orange-700 underline">
            info@threadlock.ai
          </a>
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Press and Media</h2>
      <p className="mb-4">
        For press inquiries, media requests, or interview opportunities:
      </p>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <p className="mb-3">
          <strong>Press Email:</strong>{' '}
          <a href="mailto:info@threadlock.ai" className="text-orange-600 hover:text-orange-700 underline">
            info@threadlock.ai
          </a>
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Social Media</h2>
      <p className="mb-4">
        Connect with us on social media for updates, tips, and community engagement:
      </p>
      <div className="flex gap-6 mb-6">
        <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
          Facebook
        </a>
        <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
          Twitter
        </a>
        <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn
        </a>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Office Hours</h2>
      <p className="mb-4">
        Our team is available:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Monday - Friday: 9:00 AM - 5:00 PM (EST)</li>
        <li>Saturday - Sunday: Closed</li>
      </ul>
      <p className="text-sm text-gray-600 mb-6">
        Note: Email support is monitored 24/7, but response times may be longer outside of business hours.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Feedback and Suggestions</h2>
      <p className="mb-4">
        We value your feedback! If you have suggestions for improving ThreadLock or want to share your experience, 
        we'd love to hear from you at:
      </p>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <p className="mb-3">
          <strong>Feedback Email:</strong>{' '}
          <a href="mailto:info@threadlock.ai" className="text-orange-600 hover:text-orange-700 underline">
            info@threadlock.ai
          </a>
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">FAQ and Resources</h2>
      <p className="mb-4">
        Before reaching out, you may find answers to common questions in our:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li><a href="/resources" className="text-orange-600 hover:text-orange-700 underline">Resources Page</a></li>
        <li><a href="/terms" className="text-orange-600 hover:text-orange-700 underline">Terms of Service</a></li>
        <li><a href="/privacy" className="text-orange-600 hover:text-orange-700 underline">Privacy Policy</a></li>
      </ul>

      <div className="mt-12 p-6 bg-orange-50 border-l-4 border-orange-600 rounded-r-lg">
        <p className="text-gray-800">
          <strong>Note:</strong> For the fastest response, please ensure you're contacting the appropriate department 
          and include relevant details about your inquiry. We're committed to responding to all messages as quickly as possible.
        </p>
      </div>
    </LegalLayout>
  );
}
