import LegalLayout from '@/components/legal/LegalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout 
      title="Terms of Service" 
      description="Terms of Service for ThreadLock - AI-powered evidence management platform"
    >
      <p className="text-sm text-gray-500 mb-6">
        <strong>Effective Date:</strong> October 1, 2025
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using ThreadLock ("the Service"), you agree to be bound by these Terms of Service ("Terms"). 
        If you do not agree to these Terms, do not use the Service.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. Not Legal Advice</h2>
      <p className="mb-4">
        ThreadLock is a technology platform designed to help you organize and manage evidence. We are not a law firm, 
        and the Service does not provide legal advice. Any information provided by the Service, including AI-generated 
        content, is for informational purposes only and should not be considered legal advice.
      </p>
      <p className="mb-4">
        You should consult with a qualified attorney for legal advice specific to your situation.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. User Roles and Responsibilities</h2>
      <p className="mb-4">
        You are responsible for:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Maintaining the confidentiality of your account credentials</li>
        <li>All activities that occur under your account</li>
        <li>Ensuring the accuracy of information you provide</li>
        <li>Complying with all applicable laws and regulations</li>
        <li>Not using the Service for any unlawful purpose</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Acceptable Use Policy</h2>
      <p className="mb-4">
        You agree not to:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Upload false, misleading, or fraudulent information</li>
        <li>Violate any applicable laws or regulations</li>
        <li>Infringe on the intellectual property rights of others</li>
        <li>Attempt to gain unauthorized access to the Service</li>
        <li>Interfere with or disrupt the Service or servers</li>
        <li>Use the Service to harass, abuse, or harm another person</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Subscriptions and Payment</h2>
      <p className="mb-4">
        ThreadLock offers subscription-based access to the Service. By subscribing, you agree to pay the applicable fees.
      </p>
      <p className="mb-4">
        <strong>Monthly Subscriptions:</strong> Billed monthly at $29/month. You may cancel at any time.
      </p>
      <p className="mb-4">
        <strong>Annual Subscriptions:</strong> Billed annually at $290/year (equivalent to 10 months, 2 months free).
      </p>
      <p className="mb-4">
        <strong>Refunds:</strong> We offer a 30-day money-back guarantee for new subscriptions. After 30 days, 
        subscriptions are non-refundable. You may cancel your subscription at any time to prevent future charges.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Ownership and License</h2>
      <p className="mb-4">
        You retain ownership of all data you upload to the Service. By using the Service, you grant ThreadLock a 
        limited license to process, store, and display your data as necessary to provide the Service.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
      <p className="mb-4">
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, THREADLOCK SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
        CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, 
        OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Your use or inability to use the Service</li>
        <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
        <li>Any bugs, viruses, or other harmful code that may be transmitted to or through the Service</li>
        <li>Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">8. Disclaimer of Warranties</h2>
      <p className="mb-4">
        THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
        INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">9. Indemnification</h2>
      <p className="mb-4">
        You agree to indemnify, defend, and hold harmless ThreadLock and its officers, directors, employees, and agents 
        from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected 
        with your access to or use of the Service.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">10. Termination</h2>
      <p className="mb-4">
        We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any 
        reason, including if you breach these Terms.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law</h2>
      <p className="mb-4">
        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where ThreadLock 
        is registered, without regard to its conflict of law provisions.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new 
        Terms on this page and updating the "Effective Date" above. Your continued use of the Service after any changes 
        constitutes acceptance of the new Terms.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Information</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at:
      </p>
      <p className="mb-4">
        <strong>Email:</strong> info@threadlock.ai<br />
        <strong>Address:</strong> 16200 SW Pacific Hwy, Suite H PMB 1046, Tigard, OR 97224, United States
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">14. Related Policies</h2>
      <p className="mb-4">
        Please also review our related policies:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><a href="/privacy" className="text-orange-600 hover:text-orange-700 underline">Privacy Policy</a></li>
        <li><a href="/disclaimer" className="text-orange-600 hover:text-orange-700 underline">Legal Disclaimer</a></li>
        <li><a href="/dpa" className="text-orange-600 hover:text-orange-700 underline">Data Processing Agreement</a></li>
      </ul>
    </LegalLayout>
  );
}
