import LegalLayout from '@/components/legal/LegalLayout';

export default function Accessibility() {
  return (
    <LegalLayout 
      title="Accessibility Statement" 
      description="ThreadLock's commitment to accessibility and compliance with WCAG standards"
    >
      <p className="text-sm text-gray-500 mb-6">
        <strong>Effective Date:</strong> [EFFECTIVE DATE]
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. Our Commitment</h2>
      <p className="mb-4">
        ThreadLock is committed to ensuring digital accessibility for people with disabilities. We are continually improving 
        the user experience for everyone and applying the relevant accessibility standards.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. Accessibility Standards</h2>
      <p className="mb-4">
        We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines 
        explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Measures We Take</h2>
      <p className="mb-4">
        ThreadLock takes the following measures to ensure accessibility:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Include accessibility as part of our design and development process</li>
        <li>Conduct regular accessibility audits and testing</li>
        <li>Train our team on accessibility best practices</li>
        <li>Use semantic HTML and ARIA attributes where appropriate</li>
        <li>Ensure sufficient color contrast ratios</li>
        <li>Provide text alternatives for non-text content</li>
        <li>Enable keyboard navigation throughout the Service</li>
        <li>Design for screen reader compatibility</li>
        <li>Avoid content that could cause seizures or physical reactions</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Accessibility Features</h2>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Keyboard Navigation</h3>
      <p className="mb-4">
        All interactive elements and functionality can be accessed using a keyboard alone, without requiring a mouse.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Screen Reader Support</h3>
      <p className="mb-4">
        We use semantic HTML and ARIA labels to ensure compatibility with screen readers like JAWS, NVDA, and VoiceOver.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Visual Design</h3>
      <p className="mb-4">
        Our design includes:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>High contrast color schemes that meet WCAG AA standards</li>
        <li>Clear, readable fonts with adjustable sizes</li>
        <li>Responsive design that works on different screen sizes and orientations</li>
        <li>Consistent navigation and layout</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">4.4 Alternative Text</h3>
      <p className="mb-4">
        All meaningful images include descriptive alternative text for users who cannot see them.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">4.5 Forms and Input</h3>
      <p className="mb-4">
        Forms include:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Clear labels for all input fields</li>
        <li>Error messages that are clearly identified and described</li>
        <li>Instructions and help text where needed</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Known Limitations</h2>
      <p className="mb-4">
        Despite our best efforts, some areas of the Service may not yet be fully accessible. Known limitations include:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Some third-party integrations may have accessibility limitations beyond our control</li>
        <li>PDF exports may require additional accessibility enhancements</li>
        <li>Some complex interactive features are still being improved for accessibility</li>
      </ul>
      <p className="mb-4">
        We are actively working to address these limitations and improve the overall accessibility of the Service.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. Browser and Assistive Technology Compatibility</h2>
      <p className="mb-4">
        ThreadLock is designed to be compatible with the following technologies:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Recent versions of Chrome, Firefox, Safari, and Edge</li>
        <li>Screen readers including JAWS, NVDA, and VoiceOver</li>
        <li>Browser zoom and text resizing features</li>
        <li>Voice control software</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">7. Third-Party Content</h2>
      <p className="mb-4">
        Some content on our Service may be provided by third parties. While we encourage our third-party providers to 
        provide accessible content, we may not have control over the accessibility of content they provide.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">8. Ongoing Improvements</h2>
      <p className="mb-4">
        Accessibility is an ongoing effort. We are continually:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Testing our Service with users who have disabilities</li>
        <li>Incorporating accessibility feedback into our development process</li>
        <li>Updating our practices based on new accessibility guidelines and technologies</li>
        <li>Training our team on the latest accessibility best practices</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">9. Feedback and Contact</h2>
      <p className="mb-4">
        We welcome your feedback on the accessibility of ThreadLock. If you encounter accessibility barriers or have 
        suggestions for improvement, please let us know:
      </p>
      <div className="bg-gray-100 p-6 rounded-lg mb-4">
        <p className="mb-2">
          <strong>Email:</strong> [CONTACT EMAIL]
        </p>
        <p className="mb-2">
          <strong>Subject Line:</strong> Accessibility Feedback
        </p>
      </div>
      <p className="mb-4">
        When reporting accessibility issues, please include:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>A description of the accessibility barrier</li>
        <li>The page or feature where you encountered the issue</li>
        <li>What assistive technology you were using (if applicable)</li>
        <li>What browser and operating system you were using</li>
      </ul>
      <p className="mb-4">
        We aim to respond to accessibility feedback within 5 business days and to provide a resolution or alternative 
        within 10 business days.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">10. Alternative Access</h2>
      <p className="mb-4">
        If you are unable to access certain features or content due to accessibility barriers, please contact us. We will 
        work with you to provide the information or functionality in an alternative accessible format.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">11. Accessibility Resources</h2>
      <p className="mb-4">
        For more information about web accessibility, we recommend the following resources:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Web Content Accessibility Guidelines (WCAG) - <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">W3C WAI</a></li>
        <li>WebAIM - <a href="https://webaim.org/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Web Accessibility In Mind</a></li>
        <li>Section 508 Standards - <a href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Section508.gov</a></li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">12. Formal Complaints</h2>
      <p className="mb-4">
        If you are not satisfied with our response to your accessibility concern, you may file a formal complaint with:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Your local disability rights organization</li>
        <li>The U.S. Department of Justice (if you are in the United States)</li>
        <li>Your national or regional accessibility authority</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">13. Updates to This Statement</h2>
      <p className="mb-4">
        We may update this Accessibility Statement from time to time to reflect changes in our practices or accessibility 
        improvements. Any updates will be posted on this page with an updated "Effective Date."
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">14. Contact Information</h2>
      <p className="mb-4">
        For accessibility-related questions or concerns:
      </p>
      <p className="mb-4">
        <strong>Email:</strong> [CONTACT EMAIL]<br />
        <strong>Address:</strong> [COMPANY ADDRESS]
      </p>
    </LegalLayout>
  );
}
