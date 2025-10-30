import LegalLayout from '@/components/legal/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout 
      title="Privacy Policy" 
      description="Privacy Policy for ThreadLock - How we collect, use, and protect your data"
    >
      <p className="text-sm text-gray-500 mb-6">
        <strong>Effective Date:</strong> October 1, 2025
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
      <p className="mb-4">
        ThreadLock ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we 
        collect, use, disclose, and safeguard your information when you use our service.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Account Information</h3>
      <p className="mb-4">
        When you create an account, we collect:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Email address</li>
        <li>Name (optional)</li>
        <li>Password (encrypted)</li>
        <li>Account preferences</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Content and Uploads</h3>
      <p className="mb-4">
        We collect and store the information you provide when using the Service, including:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Journal entries and notes</li>
        <li>Uploaded documents and files</li>
        <li>Timestamps and metadata</li>
        <li>AI-generated suggestions and responses</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">2.3 Usage and Log Data</h3>
      <p className="mb-4">
        We automatically collect certain information when you use the Service:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Device information</li>
        <li>Pages visited and features used</li>
        <li>Time and date of access</li>
        <li>Referring website addresses</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect to:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Provide, operate, and maintain the Service</li>
        <li>Process your subscription and payment</li>
        <li>Generate AI-assisted content and suggestions</li>
        <li>Create tamper-evident timestamps for your entries</li>
        <li>Improve and optimize the Service</li>
        <li>Communicate with you about updates, security alerts, and support</li>
        <li>Detect, prevent, and address technical issues and fraud</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Service Providers</h2>
      <p className="mb-4">
        We use the following third-party service providers to operate the Service:
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Firebase (Google)</h3>
      <p className="mb-4">
        We use Firebase for authentication, data storage, and hosting. Firebase may collect and process data as described 
        in Google's Privacy Policy. Data is stored in Firebase's secure cloud infrastructure.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Stripe</h3>
      <p className="mb-4">
        We use Stripe for payment processing. Stripe collects and processes payment information according to its 
        Privacy Policy. We do not store your full credit card information on our servers.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Legal Bases for Processing (GDPR)</h2>
      <p className="mb-4">
        If you are located in the European Economic Area (EEA), our legal bases for processing your personal data include:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Contract:</strong> Processing necessary to provide the Service you've subscribed to</li>
        <li><strong>Consent:</strong> You have given clear consent for us to process your data for specific purposes</li>
        <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests (e.g., fraud prevention)</li>
        <li><strong>Legal Obligation:</strong> Processing necessary to comply with legal requirements</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
      <p className="mb-4">
        You have the following rights regarding your personal data:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Access:</strong> Request a copy of your personal data</li>
        <li><strong>Correction:</strong> Request correction of inaccurate data</li>
        <li><strong>Deletion:</strong> Request deletion of your data (subject to legal obligations)</li>
        <li><strong>Portability:</strong> Request transfer of your data to another service</li>
        <li><strong>Objection:</strong> Object to processing of your data</li>
        <li><strong>Restriction:</strong> Request restriction of processing</li>
        <li><strong>Withdraw Consent:</strong> Withdraw consent at any time (without affecting prior processing)</li>
      </ul>
      <p className="mb-4">
        To exercise these rights, please contact us at info@threadlock.ai.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Retention</h2>
      <p className="mb-4">
        We retain your personal data for as long as necessary to provide the Service and fulfill the purposes outlined 
        in this Privacy Policy. When you delete your account, we will delete or anonymize your personal data within 90 days, 
        except where we are required to retain it for legal or regulatory purposes.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">8. International Data Transfers</h2>
      <p className="mb-4">
        Your data may be transferred to and processed in countries other than your country of residence. We ensure that 
        appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable law.
      </p>
      <p className="mb-4">
        For EEA users, we rely on Standard Contractual Clauses approved by the European Commission for data transfers 
        outside the EEA. See our <a href="/dpa" className="text-orange-600 hover:text-orange-700 underline">Data Processing Agreement</a> for more details.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">9. Cookies and Tracking Technologies</h2>
      <p className="mb-4">
        We use cookies and similar tracking technologies to enhance your experience. For detailed information about 
        the cookies we use and how to manage them, please see our{' '}
        <a href="/cookies" className="text-orange-600 hover:text-orange-700 underline">Cookie Policy</a>.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">10. Children's Privacy</h2>
      <p className="mb-4">
        The Service is not intended for children under the age of 18. We do not knowingly collect personal information 
        from children under 18. If you believe we have collected information from a child under 18, please contact us 
        immediately.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">11. Data Security</h2>
      <p className="mb-4">
        We implement appropriate technical and organizational security measures to protect your data, including:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Encryption in transit (TLS/SSL)</li>
        <li>Encryption at rest</li>
        <li>Regular security audits</li>
        <li>Access controls and authentication</li>
        <li>Secure backup procedures</li>
      </ul>
      <p className="mb-4">
        However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to 
        protect your data, we cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the 
        new Privacy Policy on this page and updating the "Effective Date." We encourage you to review this Privacy Policy 
        periodically.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Information</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at:
      </p>
      <p className="mb-4">
        <strong>Email:</strong> info@threadlock.ai<br />
        <strong>Address:</strong> 16200 SW Pacific Hwy, Suite H PMB 1046, Tigard, OR 97224, United States
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">14. Related Documents</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><a href="/cookies" className="text-orange-600 hover:text-orange-700 underline">Cookie Policy</a></li>
        <li><a href="/dpa" className="text-orange-600 hover:text-orange-700 underline">Data Processing Agreement</a></li>
        <li><a href="/terms" className="text-orange-600 hover:text-orange-700 underline">Terms of Service</a></li>
      </ul>
    </LegalLayout>
  );
}
