import React from 'react';
import Link from 'next/link';

export default function SecurityPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Security Policy</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2>Introduction</h2>
            <p>
              The Open Source Economic Empowerment Ecosystem (OSEE) is committed to ensuring the security of our platform and the data of our users. 
              This security policy outlines our approach to security and how security researchers can report vulnerabilities.
            </p>

            <h2>Reporting a Vulnerability</h2>
            <p>
              If you believe you've found a security vulnerability in our platform, we encourage you to report it to us. 
              Please send details to <a href="mailto:security@osee-kenya.org" className="text-blue-600 dark:text-blue-400 hover:underline">security@osee-kenya.org</a>.
            </p>
            
            <p>When reporting, please include:</p>
            <ul>
              <li>A description of the vulnerability</li>
              <li>Steps to reproduce the issue</li>
              <li>Potential impact of the vulnerability</li>
              <li>Any suggestions for mitigation</li>
            </ul>

            <h2>Responsible Disclosure</h2>
            <p>
              We follow responsible disclosure principles and ask that you:
            </p>
            <ul>
              <li>Allow us reasonable time to investigate and address the vulnerability before disclosing it publicly</li>
              <li>Make a good faith effort to avoid privacy violations, destruction of data, or interruption of service</li>
              <li>Do not access or modify data of other users without permission</li>
            </ul>

            <h2>Our Commitment</h2>
            <p>
              When a vulnerability is reported, we commit to:
            </p>
            <ul>
              <li>Acknowledge receipt of your report within 48 hours</li>
              <li>Provide an estimated timeframe for addressing the vulnerability</li>
              <li>Notify you when the vulnerability is fixed</li>
              <li>Recognize your contribution if you wish (unless you prefer to remain anonymous)</li>
            </ul>

            <h2>Scope</h2>
            <p>
              This security policy applies to all components of the Open Source Economic Empowerment Ecosystem, including:
            </p>
            <ul>
              <li>Web application at osee-kenya.vercel.app</li>
              <li>Mobile applications</li>
              <li>API endpoints</li>
              <li>USSD and SMS interfaces</li>
            </ul>

            <h2>Out of Scope</h2>
            <p>
              The following are considered out of scope for our security program:
            </p>
            <ul>
              <li>Denial of Service attacks</li>
              <li>Social engineering attacks</li>
              <li>Physical security attacks</li>
              <li>Third-party services not directly under our control</li>
            </ul>

            <h2>Security Measures</h2>
            <p>
              We implement various security measures to protect our platform, including:
            </p>
            <ul>
              <li>Regular security audits and penetration testing</li>
              <li>Secure development practices</li>
              <li>Data encryption in transit and at rest</li>
              <li>Regular security training for our team</li>
              <li>Monitoring and incident response procedures</li>
            </ul>

            <h2>Updates to This Policy</h2>
            <p>
              This security policy may be updated from time to time. The most current version will always be available at this URL.
            </p>

            <h2>Contact</h2>
            <p>
              For any questions about this security policy, please contact us at <a href="mailto:security@osee-kenya.org" className="text-blue-600 dark:text-blue-400 hover:underline">security@osee-kenya.org</a>.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
