import LegalLayout from '@/components/legal/LegalLayout';

export default function Security() {
  return (
    <LegalLayout 
      title="Security Policy" 
      description="ThreadLock Security Policy - How we protect your data and maintain platform security"
    >
      <p className="text-sm text-gray-500 mb-6">
        <strong>Effective Date:</strong> [EFFECTIVE DATE]
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. Our Commitment to Security</h2>
      <p className="mb-4">
        At ThreadLock, security is a top priority. We understand that you're entrusting us with sensitive personal information, 
        and we take that responsibility seriously. This policy outlines the security measures we've implemented to protect 
        your data and our platform.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. Authentication and Access Control</h2>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">2.1 User Authentication</h3>
      <p className="mb-4">
        We use Firebase Authentication, which provides:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Secure password hashing using industry-standard algorithms</li>
        <li>Multi-factor authentication (MFA) options</li>
        <li>Protection against brute force attacks</li>
        <li>Secure session management</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Role-Based Access Control (RBAC)</h3>
      <p className="mb-4">
        Access to your data is controlled through role-based permissions. Only you (and any users you explicitly authorize) 
        can access your account and data.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Encryption</h2>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Encryption in Transit</h3>
      <p className="mb-4">
        All data transmitted between your device and our servers is encrypted using:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>TLS 1.2 or higher (Transport Layer Security)</li>
        <li>Strong cipher suites</li>
        <li>HTTPS for all web communications</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Encryption at Rest</h3>
      <p className="mb-4">
        All data stored in our databases is encrypted at rest using:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>AES-256 encryption</li>
        <li>Managed encryption keys</li>
        <li>Encrypted backups</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Infrastructure Security</h2>
      <p className="mb-4">
        We leverage industry-leading cloud infrastructure providers:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Firebase/Google Cloud:</strong> For data storage and authentication</li>
        <li><strong>Vercel:</strong> For web hosting and edge network delivery</li>
      </ul>
      <p className="mb-4">
        These providers maintain:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>SOC 2 Type II certification</li>
        <li>ISO 27001 certification</li>
        <li>Regular third-party security audits</li>
        <li>Physical security controls for data centers</li>
        <li>Network security and DDoS protection</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Application Security</h2>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Secure Development Practices</h3>
      <p className="mb-4">
        We follow secure coding practices, including:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Regular dependency updates</li>
        <li>Automated security scanning</li>
        <li>Code review processes</li>
        <li>Input validation and sanitization</li>
        <li>Protection against common vulnerabilities (OWASP Top 10)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">5.2 Security Headers</h3>
      <p className="mb-4">
        We implement security headers to protect against common web vulnerabilities:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Content Security Policy (CSP)</li>
        <li>X-Frame-Options</li>
        <li>X-Content-Type-Options</li>
        <li>Strict-Transport-Security (HSTS)</li>
        <li>Referrer-Policy</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. Monitoring and Incident Response</h2>
      <p className="mb-4">
        We actively monitor our systems for security threats and anomalies:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Real-time logging and monitoring</li>
        <li>Automated alerting for suspicious activity</li>
        <li>Regular security audits and assessments</li>
        <li>Incident response procedures</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Backup and Recovery</h2>
      <p className="mb-4">
        We maintain regular backups of your data to protect against data loss:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Automated daily backups</li>
        <li>Encrypted backup storage</li>
        <li>Geographic redundancy</li>
        <li>Tested disaster recovery procedures</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">8. Third-Party Security</h2>
      <p className="mb-4">
        We carefully vet third-party service providers and ensure they meet our security standards:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Due diligence reviews</li>
        <li>Contractual security requirements</li>
        <li>Regular security assessments</li>
        <li>Data processing agreements (DPAs)</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">9. Employee Access and Training</h2>
      <p className="mb-4">
        We limit and control employee access to user data:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Principle of least privilege</li>
        <li>Background checks for employees with data access</li>
        <li>Regular security training</li>
        <li>Confidentiality agreements</li>
        <li>Access logging and auditing</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">10. Your Security Responsibilities</h2>
      <p className="mb-4">
        Security is a shared responsibility. You can help protect your account by:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Using a strong, unique password</li>
        <li>Enabling multi-factor authentication</li>
        <li>Keeping your login credentials confidential</li>
        <li>Logging out when using shared devices</li>
        <li>Reporting suspicious activity immediately</li>
        <li>Keeping your email account secure</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">11. Responsible Disclosure</h2>
      <p className="mb-4">
        We welcome responsible disclosure of security vulnerabilities. If you discover a security issue, please report it to us at:
      </p>
      <p className="mb-4">
        <strong>Security Email:</strong> [CONTACT EMAIL]
      </p>
      <p className="mb-4">
        Please include:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>A description of the vulnerability</li>
        <li>Steps to reproduce the issue</li>
        <li>Potential impact</li>
        <li>Any suggested remediation</li>
      </ul>
      <p className="mb-4">
        We commit to:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Acknowledging your report within 48 hours</li>
        <li>Providing regular updates on our progress</li>
        <li>Crediting you for responsible disclosure (if desired)</li>
        <li>Not pursuing legal action against good-faith security researchers</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">12. Security Incident Notification</h2>
      <p className="mb-4">
        In the event of a security breach that affects your personal data, we will:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Notify affected users without undue delay</li>
        <li>Provide information about the nature of the breach</li>
        <li>Describe the steps we're taking to address the issue</li>
        <li>Recommend actions you can take to protect yourself</li>
        <li>Comply with all applicable data breach notification laws</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">13. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Security Policy from time to time to reflect changes in our practices or regulatory requirements. 
        We will post any updates on this page with an updated "Effective Date."
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">14. Contact Information</h2>
      <p className="mb-4">
        If you have questions or concerns about security, please contact us at:
      </p>
      <p className="mb-4">
        <strong>Email:</strong> [CONTACT EMAIL]
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">15. Related Policies</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><a href="/privacy" className="text-orange-600 hover:text-orange-700 underline">Privacy Policy</a></li>
        <li><a href="/terms" className="text-orange-600 hover:text-orange-700 underline">Terms of Service</a></li>
      </ul>
    </LegalLayout>
  );
}
