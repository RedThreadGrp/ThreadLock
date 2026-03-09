import LegalLayout from '@/components/legal/LegalLayout';

export default function DataProcessingAgreement() {
  return (
    <LegalLayout 
      title="Data Processing Agreement" 
      description="Data Processing Agreement (DPA) for ThreadLock - GDPR compliance and data protection"
    >
      <p className="text-sm text-gray-500 mb-2">
        <strong>Effective Date:</strong> March 9, 2026
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Document version: 1.0 · Published at threadlock.ai/dpa
      </p>

      <p className="mb-4">
        This Data Processing Agreement ("DPA") is entered into between ThreadLock ("Processor"), a legal technology 
        platform operated at 16200 SW Pacific Hwy, Suite H PMB 1046, Tigard, OR 97224, USA, and the Customer 
        ("Controller") who has entered into the ThreadLock Terms of Service or a Master Services Agreement. This DPA is 
        incorporated by reference into those agreements and governs all Processing of Customer Personal Data by ThreadLock 
        in connection with the Services.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. Subject Matter and Scope</h2>
      <p className="mb-4">
        This DPA applies to the Processing of Customer Personal Data by ThreadLock in the course of providing its case 
        management, evidence organisation, and AI-assisted documentation services (the "Services"). The terms of this DPA 
        supplement and do not replace any data protection or confidentiality provisions already agreed between the parties.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. Definitions</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <strong>"Customer Personal Data":</strong> Any personal data processed by ThreadLock on behalf of the Customer 
          in the provision of the Services.
        </li>
        <li>
          <strong>"Data Protection Laws":</strong> All applicable data protection and privacy laws, including without 
          limitation the EU General Data Protection Regulation (GDPR), the UK GDPR, the California Consumer Privacy Act 
          (CCPA), the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs) made thereunder, 
          in each case as amended or superseded from time to time.
        </li>
        <li>
          <strong>"Processing":</strong> Any operation performed on personal data, whether or not by automated means, 
          including collection, recording, storage, retrieval, use, disclosure, erasure, or destruction.
        </li>
        <li>
          <strong>"Subprocessor":</strong> Any third-party data processor engaged by ThreadLock to assist in providing 
          the Services where such engagement involves Processing Customer Personal Data.
        </li>
        <li>
          <strong>"Personal Data Breach":</strong> A breach of security leading to accidental or unlawful destruction, 
          loss, alteration, unauthorised disclosure of, or access to, Customer Personal Data.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Roles and Processing Instructions</h2>
      <p className="mb-4">
        <strong>3.1 Roles:</strong> The Customer is the Data Controller and ThreadLock is the Data Processor with 
        respect to Customer Personal Data. Each party shall comply with its respective obligations under applicable 
        Data Protection Laws.
      </p>
      <p className="mb-4">
        <strong>3.2 Documented Instructions:</strong> ThreadLock shall process Customer Personal Data only on 
        documented instructions from the Customer, including: (a) as set out in this DPA; (b) as required to deliver 
        the Services described in the Agreement and any applicable Order Forms; and (c) as otherwise directed in writing 
        by the Customer. If ThreadLock is required by applicable law to process Customer Personal Data for another 
        purpose, ThreadLock shall notify the Customer of that requirement before such processing, unless prohibited by law.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Obligations of ThreadLock</h2>
      <p className="mb-4">
        <strong>4.1 Confidentiality:</strong> ThreadLock shall ensure that all personnel authorised to process 
        Customer Personal Data are subject to binding confidentiality obligations, whether by contract or statutory 
        duty, and process such data only as necessary to perform the Services.
      </p>
      <p className="mb-4">
        <strong>4.2 Security:</strong> ThreadLock shall implement and maintain appropriate technical and organisational 
        measures to protect Customer Personal Data against accidental or unlawful destruction, loss, alteration, or 
        unauthorised disclosure or access. The minimum security standards maintained by ThreadLock are described in 
        Annex II below.
      </p>
      <p className="mb-4">
        <strong>4.3 Data Subject Rights:</strong> ThreadLock shall provide reasonable assistance to the Customer to 
        fulfil the Customer's obligations to respond to requests from Data Subjects exercising their rights under 
        applicable Data Protection Laws, including rights of access, rectification, erasure, restriction, portability, 
        and objection.
      </p>
      <p className="mb-4">
        <strong>4.4 Data Protection Impact Assessments:</strong> ThreadLock shall provide reasonable assistance to the 
        Customer in carrying out data protection impact assessments and prior consultations with supervisory authorities 
        where required by applicable Data Protection Laws.
      </p>
      <p className="mb-4">
        <strong>4.5 Personal Data Breach Notification:</strong> ThreadLock shall notify the Customer without undue 
        delay, and in any event within 48 hours, after becoming aware of a Personal Data Breach affecting Customer 
        Personal Data. Such notification shall include, to the extent available: (a) a description of the nature of the 
        breach; (b) the categories and approximate number of Data Subjects and records affected; (c) the likely 
        consequences of the breach; and (d) measures taken or proposed to address the breach. ThreadLock shall 
        cooperate fully with the Customer in investigating and remediating any breach. Where the breach may constitute 
        an eligible data breach under Australia's Notifiable Data Breaches scheme (Part IIIC, Privacy Act 1988 (Cth)), 
        ThreadLock shall provide the Customer with sufficient information to enable the Customer to assess its own 
        notification obligations to the Office of the Australian Information Commissioner (OAIC) and affected 
        individuals, and shall provide reasonable assistance in meeting those obligations.
      </p>
      <p className="mb-4">
        <strong>4.6 Audit Rights:</strong> ThreadLock shall make available to the Customer all information reasonably 
        necessary to demonstrate compliance with this DPA and permit the Customer or its appointed auditor to conduct 
        audits of ThreadLock's data processing activities upon reasonable prior written notice and no more than once 
        per calendar year, except where a Personal Data Breach has occurred.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Subprocessing</h2>
      <p className="mb-4">
        The Customer provides general authorisation for ThreadLock to engage the Subprocessors listed in Annex III. 
        ThreadLock shall: (a) impose data protection obligations on each Subprocessor that are no less protective than 
        those set out in this DPA; (b) maintain an up-to-date list of Subprocessors at threadlock.ai/dpa; and 
        (c) notify the Customer at least 14 days in advance of adding or replacing any Subprocessor, giving the 
        Customer the opportunity to object on reasonable grounds related to data protection. ThreadLock remains fully 
        liable to the Customer for the performance of each Subprocessor's obligations under this DPA.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. International Transfers</h2>
      <p className="mb-4">
        Where the Services involve the transfer of Customer Personal Data from the European Economic Area, Switzerland, 
        or the United Kingdom to a country not recognised as providing an adequate level of data protection, the parties 
        agree to be bound by the Standard Contractual Clauses (Module 2: Controller to Processor) adopted by the 
        European Commission by Decision 2021/914, which are incorporated into this DPA by reference. In the event of a 
        conflict between the SCCs and the other provisions of this DPA, the SCCs shall prevail.
      </p>
      <p className="mb-4">
        Where the Services involve the transfer of personal information originating in Australia, ThreadLock 
        contractually commits to handling that information in a manner consistent with the Australian Privacy Principles 
        (APPs) under the Privacy Act 1988 (Cth). This commitment is intended to satisfy the Customer's obligations 
        under APP 8.1 with respect to disclosures to ThreadLock as an overseas recipient. The Customer acknowledges 
        that, absent this contractual commitment, APP 8 would otherwise make the Customer directly accountable for 
        ThreadLock's handling of that information.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">7. Retention and Deletion</h2>
      <p className="mb-4">
        Upon termination or expiry of the Agreement, or upon the Customer's written request, ThreadLock shall, at the 
        Customer's election, securely delete or return all Customer Personal Data within 30 days, and delete all copies 
        unless applicable law requires continued storage. ThreadLock shall provide the Customer with written 
        confirmation of deletion upon request. In all cases, Customer Personal Data shall not be retained by ThreadLock 
        for longer than 90 days following account deletion unless otherwise required by law.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">8. Governing Law and Dispute Resolution</h2>
      <p className="mb-4">
        This DPA shall be governed by the laws of the State of Oregon, USA, without regard to conflict-of-law 
        principles, except to the extent that applicable Data Protection Laws of the European Union, United Kingdom, 
        or other jurisdictions require otherwise. Any dispute arising from this DPA shall be subject to the dispute 
        resolution provisions of the Agreement.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Annex I — Details of Processing</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">A. List of Parties</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-2 text-left"></th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Data Exporter (Controller)</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Data Importer (Processor)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">Entity</td>
              <td className="border border-gray-300 px-4 py-2">The Customer using ThreadLock for case and evidence management.</td>
              <td className="border border-gray-300 px-4 py-2">ThreadLock, 16200 SW Pacific Hwy, Suite H PMB 1046, Tigard, OR 97224, USA.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Role</td>
              <td className="border border-gray-300 px-4 py-2">Controller — determines the purposes and means of processing.</td>
              <td className="border border-gray-300 px-4 py-2">Processor — processes data on the Controller's behalf.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">Contact</td>
              <td className="border border-gray-300 px-4 py-2">As provided in the Customer's account or Order Form.</td>
              <td className="border border-gray-300 px-4 py-2">legal@threadlock.ai</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-3">B. Description of Processing</h3>
      <p className="mb-2">
        <strong>Categories of Data Subjects:</strong> Individuals involved in family law, tribal court, employment, 
        or other civil legal matters; the Customer's authorised platform users (attorneys, paralegals, and 
        self-represented litigants).
      </p>
      <p className="mb-2">
        <strong>Categories of Personal Data:</strong> Names, contact information, personally authored journal entries, 
        legal evidence (documents, images, videos, audio recordings), timestamps, metadata, and AI-assisted 
        classification tags.
      </p>
      <p className="mb-2">
        <strong>Special Categories:</strong> The Services may incidentally process special category data (e.g., health 
        information in personal injury or family law matters) where uploaded by the Customer. Under the Australian 
        Privacy Act 1988 (Cth), such data constitutes 'sensitive information' and is subject to the heightened 
        protections of APPs 3 and 6. ThreadLock will handle any such information consistently with those requirements. 
        The Customer is responsible for ensuring that any upload of sensitive or special category data is supported by 
        a lawful basis.
      </p>
      <p className="mb-2">
        <strong>Nature of Processing:</strong> Storing, organising, and tagging legal evidence; generating 
        chronological timelines; applying AI models for evidence classification; facilitating access by authorised 
        users under the Customer's role-based permissions.
      </p>
      <p className="mb-2">
        <strong>Purpose of Processing:</strong> Delivery of the Services as described in the Agreement.
      </p>
      <p className="mb-6">
        <strong>Duration of Processing:</strong> The term of the Agreement plus 90 days following account deletion, 
        after which all Customer Personal Data is deleted unless law requires otherwise.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Annex II — Technical and Organisational Measures</h2>
      <p className="mb-4">
        ThreadLock maintains the following minimum security standards as of the Effective Date. These measures are 
        reviewed and updated on a regular basis to reflect changes in risk.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50 w-1/3">Encryption in Transit</td>
              <td className="border border-gray-300 px-4 py-3">All data transmitted between clients and ThreadLock infrastructure is encrypted using TLS 1.2 or higher. Connections below TLS 1.2 are rejected.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Encryption at Rest</td>
              <td className="border border-gray-300 px-4 py-3">All Customer Personal Data stored in ThreadLock's cloud infrastructure is encrypted at rest using AES-256 via Google Cloud/Firebase native encryption.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Access Control</td>
              <td className="border border-gray-300 px-4 py-3">Access to Customer Personal Data is enforced through strict role-based access control (RBAC). Administrative access requires multi-factor authentication (MFA). Access is granted on a least-privilege basis and reviewed periodically.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Authentication</td>
              <td className="border border-gray-300 px-4 py-3">Customer accounts are protected by password policies and support MFA. Sessions are time-limited and protected against common web vulnerabilities (OWASP Top 10).</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Audit Logging</td>
              <td className="border border-gray-300 px-4 py-3">Access to and operations on Customer Personal Data are logged. Logs are retained for a minimum of 90 days and are protected against unauthorised modification.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Vulnerability Management</td>
              <td className="border border-gray-300 px-4 py-3">ThreadLock performs regular internal security reviews and automated vulnerability scanning of application code and infrastructure dependencies.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Backups and Resilience</td>
              <td className="border border-gray-300 px-4 py-3">Customer Personal Data is backed up automatically on a daily basis. Backups are geo-redundant and stored in secure cloud infrastructure with verified restore capability.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Incident Response</td>
              <td className="border border-gray-300 px-4 py-3">ThreadLock maintains an incident response procedure that includes detection, containment, notification, and post-incident review. Customer notification of a Personal Data Breach occurs within 48 hours of confirmation.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Subprocessor Security</td>
              <td className="border border-gray-300 px-4 py-3">All Subprocessors are required to maintain security standards materially equivalent to those described in this Annex as a condition of engagement.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Annex III — Authorised Subprocessors</h2>
      <p className="mb-4">
        The following third-party entities are authorised by the Customer to process Customer Personal Data as 
        Subprocessors of ThreadLock as of the Effective Date. ThreadLock will publish updates to this list at 
        threadlock.ai/dpa and provide advance notice of changes as described in Section 5.
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Subprocessor</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Headquarters</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Processing Activity</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Data Protection Framework</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">Google LLC (Firebase / GCP)</td>
              <td className="border border-gray-300 px-4 py-3">USA</td>
              <td className="border border-gray-300 px-4 py-3">Cloud infrastructure, application hosting, Firestore database, and Firebase Analytics.</td>
              <td className="border border-gray-300 px-4 py-3">Google Cloud Data Processing Addendum; EU SCCs where applicable.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3 font-semibold">Stripe, Inc.</td>
              <td className="border border-gray-300 px-4 py-3">USA</td>
              <td className="border border-gray-300 px-4 py-3">Payment processing and billing. Stripe receives only payment instrument data; no case or evidence data is shared.</td>
              <td className="border border-gray-300 px-4 py-3">Stripe Data Processing Agreement; EU SCCs where applicable.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">Google LLC (Gemini API)</td>
              <td className="border border-gray-300 px-4 py-3">USA</td>
              <td className="border border-gray-300 px-4 py-3">AI-assisted writing support and research assistance. Processing is strictly scoped; no Customer Personal Data is used for model training.</td>
              <td className="border border-gray-300 px-4 py-3">Google Cloud Data Processing Addendum; EU SCCs where applicable.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-600 mb-6">
        Note: ThreadLock does not share Customer Personal Data with OpenAI or any other AI provider not listed above. 
        No Customer Personal Data is used to train AI models.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Download This DPA</h2>
      <p className="mb-4">
        Download a copy of this Data Processing Agreement for your records or to meet compliance requirements. 
        To execute the agreement, complete the signature fields and return the signed copy to legal@threadlock.ai 
        for countersignature.
      </p>
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
        <a 
          href="/ThreadLock_Data_Processing_Agreeement.pdf" 
          download
          className="inline-flex items-center gap-2 bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Data Processing Agreement (PDF)
        </a>
        <p className="mt-4 text-sm text-gray-700">
          After downloading, complete the signature fields with your organisation's information, sign the document, 
          and return it to <strong>legal@threadlock.ai</strong> for countersignature.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
      <p className="mb-4">
        For questions about this DPA or data processing:
      </p>
      <p className="mb-4">
        <strong>Email:</strong> legal@threadlock.ai<br />
        <strong>Address:</strong> 16200 SW Pacific Hwy, Suite H PMB 1046, Tigard, OR 97224, USA
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Related Policies</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><a href="/privacy" className="text-orange-600 hover:text-orange-700 underline">Privacy Policy</a></li>
        <li><a href="/security" className="text-orange-600 hover:text-orange-700 underline">Security Policy</a></li>
        <li><a href="/terms" className="text-orange-600 hover:text-orange-700 underline">Terms of Service</a></li>
      </ul>
    </LegalLayout>
  );
}
