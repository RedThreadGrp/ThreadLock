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
        <a href="https://www.youtube.com/@Find.ThreadLock" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          YouTube
        </a>
        <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn
        </a>
        <a href="https://www.instagram.com/find.threadlock/" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 14.8 13 2.8 2.8 0 0 0 12 8.2zM18 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
          Instagram
        </a>
        <a href="https://www.reddit.com/r/thread_lock/" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
          </svg>
          Reddit
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
