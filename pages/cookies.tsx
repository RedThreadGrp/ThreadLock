import LegalLayout from '@/components/legal/LegalLayout';

export default function CookiePolicy() {
  return (
    <LegalLayout 
      title="Cookie Policy" 
      description="Cookie Policy for ThreadLock - How we use cookies and tracking technologies"
    >
      <p className="text-sm text-gray-500 mb-6">
        <strong>Effective Date:</strong> October 1, 2025
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files that are stored on your device when you visit a website. They help websites remember 
        information about your visit, making it easier to use the site and allowing us to tailor the experience to your preferences.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Cookies</h2>
      <p className="mb-4">
        We use cookies and similar technologies to:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Keep you signed in to your account</li>
        <li>Remember your preferences and settings</li>
        <li>Understand how you use our Service</li>
        <li>Improve the performance and functionality of the Service</li>
        <li>Provide security features and prevent fraud</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Types of Cookies We Use</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Essential Cookies</h3>
      <p className="mb-4">
        These cookies are necessary for the Service to function properly. They enable core functionality such as security, 
        authentication, and network management. You cannot opt out of these cookies.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Authentication:</strong> Keep you logged in to your account</li>
        <li><strong>Security:</strong> Protect against malicious activity and CSRF attacks</li>
        <li><strong>Session Management:</strong> Remember your session across page loads</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Non-Essential Cookies</h3>
      <p className="mb-4">
        These cookies help us improve the Service and understand how it's being used. You can choose to accept or reject 
        these cookies through our cookie banner.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Analytics:</strong> Help us understand how visitors use the Service (e.g., pages visited, time spent)</li>
        <li><strong>Performance:</strong> Measure and improve the performance of the Service</li>
        <li><strong>Preferences:</strong> Remember your choices and preferences (e.g., language, region)</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Cookies</h2>
      <p className="mb-4">
        We use the following third-party services that may set cookies:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Firebase Analytics:</strong> Helps us understand how users interact with the Service</li>
        <li><strong>Stripe:</strong> Processes payments and may set cookies for fraud prevention</li>
        <li><strong>Vercel Analytics:</strong> Provides performance and usage analytics</li>
      </ul>
      <p className="mb-4">
        These third parties have their own privacy policies that govern their use of cookies.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Managing Cookies</h2>
      <p className="mb-4">
        You can manage your cookie preferences in several ways:
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Cookie Banner</h3>
      <p className="mb-4">
        When you first visit our site, you'll see a cookie banner where you can choose to accept or reject non-essential cookies.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">5.2 Browser Settings</h3>
      <p className="mb-4">
        Most web browsers allow you to control cookies through their settings. You can:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Block all cookies</li>
        <li>Delete existing cookies</li>
        <li>Allow cookies only from specific websites</li>
        <li>Receive notifications when cookies are set</li>
      </ul>
      <p className="mb-4">
        Please note that blocking essential cookies may prevent you from using certain features of the Service.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">5.3 Browser-Specific Instructions</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
        <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
        <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
        <li><strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. Do Not Track</h2>
      <p className="mb-4">
        Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. 
        Because there is no common understanding of how to interpret the DNT signal, we do not currently respond to DNT signals.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to This Cookie Policy</h2>
      <p className="mb-4">
        We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated 
        "Effective Date."
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Information</h2>
      <p className="mb-4">
        If you have any questions about our use of cookies, please contact us at:
      </p>
      <p className="mb-4">
        <strong>Email:</strong> info@threadlock.ai
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">9. More Information</h2>
      <p className="mb-4">
        For more information about how we handle your data, please see our:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><a href="/privacy" className="text-orange-600 hover:text-orange-700 underline">Privacy Policy</a></li>
        <li><a href="/terms" className="text-orange-600 hover:text-orange-700 underline">Terms of Service</a></li>
      </ul>
    </LegalLayout>
  );
}
