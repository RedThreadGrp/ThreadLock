import LegalLayout from '@/components/legal/LegalLayout';

export default function DataProcessingAgreement() {
  return (
    <LegalLayout 
      title="Data Processing Agreement" 
      description="Data Processing Agreement (DPA) for ThreadLock - GDPR compliance and data protection"
    >
      <p className="text-sm text-gray-500 mb-6">
        <strong>Effective Date:</strong> [EFFECTIVE DATE]
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
      <p className="mb-4">
        This Data Processing Agreement ("DPA") forms part of the Terms of Service between you ("Customer," "Data Controller") 
        and ThreadLock ("Processor," "we," "us," "our") and sets forth the terms under which we process personal data on your behalf.
      </p>
      <p className="mb-4">
        This DPA applies to the processing of personal data in connection with the ThreadLock service and is designed to 
        comply with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. Definitions</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person that you upload or submit to the Service.</li>
        <li><strong>"Processing"</strong> means any operation performed on Personal Data, including collection, storage, retrieval, use, transmission, and deletion.</li>
        <li><strong>"Data Subject"</strong> means the individual to whom Personal Data relates.</li>
        <li><strong>"Sub-processor"</strong> means any third party engaged by ThreadLock to process Personal Data.</li>
        <li><strong>"GDPR"</strong> means the General Data Protection Regulation (EU) 2016/679.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Scope and Role of the Parties</h2>
      <p className="mb-4">
        <strong>3.1 Controller and Processor:</strong> You are the Data Controller and ThreadLock is the Data Processor 
        with respect to Personal Data processed through the Service.
      </p>
      <p className="mb-4">
        <strong>3.2 Customer Instructions:</strong> ThreadLock will process Personal Data only in accordance with your 
        documented instructions as set forth in this DPA and the Terms of Service, unless required to do so by law.
      </p>
      <p className="mb-4">
        <strong>3.3 Scope of Processing:</strong> ThreadLock processes Personal Data to:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Provide the Service as described in the Terms of Service</li>
        <li>Store and organize your journal entries and evidence</li>
        <li>Generate AI-assisted content and suggestions</li>
        <li>Create tamper-evident timestamps</li>
        <li>Export documents in various formats</li>
        <li>Ensure security and prevent fraud</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Subject Rights</h2>
      <p className="mb-4">
        <strong>4.1 Assistance:</strong> ThreadLock will assist you in responding to Data Subject requests to exercise 
        their rights under applicable data protection laws, including:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Access to Personal Data</li>
        <li>Rectification of inaccurate data</li>
        <li>Erasure of data ("right to be forgotten")</li>
        <li>Data portability</li>
        <li>Restriction of processing</li>
        <li>Objection to processing</li>
      </ul>
      <p className="mb-4">
        <strong>4.2 Customer Responsibility:</strong> You are responsible for responding to Data Subject requests. 
        ThreadLock will provide reasonable assistance and access to relevant Personal Data within 10 business days of your request.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Sub-processors</h2>
      <p className="mb-4">
        <strong>5.1 Current Sub-processors:</strong> You authorize ThreadLock to engage the following Sub-processors:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Google Cloud Platform (Firebase):</strong> Cloud hosting, database, authentication, and storage services</li>
        <li><strong>Stripe:</strong> Payment processing services</li>
        <li><strong>Vercel:</strong> Web hosting and content delivery</li>
      </ul>
      <p className="mb-4">
        <strong>5.2 Sub-processor Requirements:</strong> ThreadLock ensures that all Sub-processors are bound by 
        contractual obligations at least as protective as those in this DPA, including appropriate data protection and security measures.
      </p>
      <p className="mb-4">
        <strong>5.3 Changes to Sub-processors:</strong> We will notify you of any intended changes to Sub-processors 
        via email at least 30 days in advance. If you object to a new Sub-processor on reasonable data protection grounds, 
        you may terminate the Service without penalty.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. Security Measures</h2>
      <p className="mb-4">
        ThreadLock implements appropriate technical and organizational measures to protect Personal Data, including:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Encryption in transit (TLS 1.2+)</li>
        <li>Encryption at rest (AES-256)</li>
        <li>Access controls and authentication</li>
        <li>Regular security audits and testing</li>
        <li>Employee training and confidentiality obligations</li>
        <li>Incident response procedures</li>
        <li>Secure backup and recovery processes</li>
      </ul>
      <p className="mb-4">
        For more details, see our <a href="/security" className="text-orange-600 hover:text-orange-700 underline">Security Policy</a>.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Breach Notification</h2>
      <p className="mb-4">
        <strong>7.1 Notification:</strong> ThreadLock will notify you without undue delay (and in any event within 72 hours) 
        upon becoming aware of a Personal Data breach affecting your data.
      </p>
      <p className="mb-4">
        <strong>7.2 Information Provided:</strong> The notification will include:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Description of the nature of the breach</li>
        <li>Categories and approximate number of Data Subjects affected</li>
        <li>Categories and approximate number of Personal Data records affected</li>
        <li>Likely consequences of the breach</li>
        <li>Measures taken or proposed to address the breach and mitigate harm</li>
      </ul>
      <p className="mb-4">
        <strong>7.3 Cooperation:</strong> ThreadLock will cooperate with you in investigating and resolving the breach, 
        including providing reasonable assistance with any required notifications to Data Subjects or regulatory authorities.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">8. International Data Transfers</h2>
      <p className="mb-4">
        <strong>8.1 Transfer Mechanisms:</strong> Personal Data may be transferred to and processed in countries outside 
        the European Economic Area (EEA). ThreadLock ensures appropriate safeguards are in place for such transfers, including:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
        <li>Adequacy decisions where applicable</li>
        <li>Contractual obligations with Sub-processors requiring equivalent protection</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">9. Audits and Compliance</h2>
      <p className="mb-4">
        <strong>9.1 Records:</strong> ThreadLock maintains records of processing activities as required by Article 30 of the GDPR.
      </p>
      <p className="mb-4">
        <strong>9.2 Audit Rights:</strong> You have the right to audit ThreadLock's compliance with this DPA. Upon reasonable 
        advance notice (at least 30 days), ThreadLock will:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Provide relevant documentation and information</li>
        <li>Allow access to relevant systems and personnel</li>
        <li>Cooperate with reasonable audit requests</li>
      </ul>
      <p className="mb-4">
        Audits must not unreasonably interfere with our operations and are limited to once per year unless required by 
        a regulatory authority or in response to a data breach.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">10. Data Retention and Deletion</h2>
      <p className="mb-4">
        <strong>10.1 Retention:</strong> ThreadLock retains Personal Data as long as necessary to provide the Service 
        and as required by law.
      </p>
      <p className="mb-4">
        <strong>10.2 Deletion:</strong> Upon termination of your account or at your request, ThreadLock will delete or 
        anonymize your Personal Data within 90 days, except where:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Required by law to retain the data</li>
        <li>Data is stored in backup systems (which are deleted according to our backup retention schedule)</li>
        <li>Needed for legitimate business purposes (e.g., fraud prevention, billing disputes)</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">11. Confidentiality</h2>
      <p className="mb-4">
        ThreadLock ensures that all personnel authorized to process Personal Data:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Are subject to confidentiality obligations</li>
        <li>Receive appropriate training on data protection</li>
        <li>Access Personal Data only as necessary to perform their duties</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">12. Liability and Indemnification</h2>
      <p className="mb-4">
        Each party's liability under this DPA is subject to the limitation of liability provisions in the Terms of Service.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">13. Term and Termination</h2>
      <p className="mb-4">
        This DPA remains in effect for as long as ThreadLock processes Personal Data on your behalf. Upon termination:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>ThreadLock will cease processing Personal Data</li>
        <li>At your choice, ThreadLock will return or delete all Personal Data</li>
        <li>Deletion certificates can be provided upon request</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">14. DPA Template Download</h2>
      <p className="mb-4">
        If you need a fully executed Data Processing Agreement for your records or to meet compliance requirements, 
        you can download our DPA template:
      </p>
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
        <a 
          href="/legal/ThreadLock-DPA-template.pdf" 
          download
          className="inline-flex items-center gap-2 bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download DPA Template (PDF)
        </a>
        <p className="mt-4 text-sm text-gray-700">
          After downloading, please complete the template with your organization's information, sign it, and return it 
          to [CONTACT EMAIL] for countersignature.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">15. Contact Information</h2>
      <p className="mb-4">
        For questions about this DPA or data processing:
      </p>
      <p className="mb-4">
        <strong>Email:</strong> [CONTACT EMAIL]<br />
        <strong>Address:</strong> [COMPANY ADDRESS]
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">16. Related Policies</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><a href="/privacy" className="text-orange-600 hover:text-orange-700 underline">Privacy Policy</a></li>
        <li><a href="/security" className="text-orange-600 hover:text-orange-700 underline">Security Policy</a></li>
        <li><a href="/terms" className="text-orange-600 hover:text-orange-700 underline">Terms of Service</a></li>
      </ul>
    </LegalLayout>
  );
}
