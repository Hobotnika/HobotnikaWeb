export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
            HOBOTNIKA OÜ
          </h2>
          
          <div className="text-muted-foreground mb-8">
            <p className="text-sm font-medium">Effective Date: January 1, 2025</p>
            <p className="text-sm font-medium">Last Updated: January 1, 2025</p>
          </div>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction and controller information</h2>
              <p className="mb-4">
                Hobotnika OÜ ("we," "us," or "our") is committed to protecting your personal information and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, use our business consulting services, or interact with us through any channel.
              </p>
              
              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-3">Data Controller Details:</h3>
                <div className="space-y-1">
                  <p>Hobotnika OÜ</p>
                  <p>Registry Code: 16770728</p>
                  <p>Address: Narva mnt 5, 10117 Tallinn, Estonia</p>
                  <p>Email: <a href="mailto:info@hobotnika.com" className="text-primary hover:underline">info@hobotnika.com</a></p>
                  <p>Phone: <a href="tel:+351933679097" className="text-primary hover:underline">+351 933679097</a></p>
                </div>
                
                <div className="mt-4">
                  <p className="font-semibold">Estonian Data Protection Contact:</p>
                  <p>Email: <a href="mailto:privacy@hobotnika.com" className="text-primary hover:underline">privacy@hobotnika.com</a></p>
                  <p>Phone: <a href="tel:+351933679097" className="text-primary hover:underline">+351 933679097</a></p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Scope and application</h2>
              <p className="mb-3">This Privacy Policy applies to all personal data we process in our capacity as a data controller, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Information collected through our website and online forms</li>
                <li>Data processed in connection with our business consulting services</li>
                <li>Information gathered through marketing and business development activities</li>
                <li>Data collected through Google Analytics, Google Ads, and other marketing technologies</li>
                <li>Information managed in our Customer Relationship Management (CRM) systems</li>
              </ul>
              <p className="mb-4">
                This policy applies regardless of your location, though additional rights may apply based on your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Information we collect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">3.1 Information You Provide Directly</h3>
                  <p className="mb-3">When you request a free consultation or engage our services, we collect:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li><strong>Contact Information</strong>: Name, job title, company name, business email address, phone number</li>
                    <li><strong>Business Information</strong>: Company details, industry sector, business challenges, project requirements</li>
                    <li><strong>Communication Data</strong>: Content of emails, messages, and other communications with us</li>
                    <li><strong>Financial Information</strong>: Billing address, payment details (processed securely by our payment processors)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">3.2 Information Collected Automatically</h3>
                  <p className="mb-3">When you visit our website, we automatically collect:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li><strong>Device and Browser Data</strong>: IP address (anonymized for EU visitors), browser type, operating system, device identifiers</li>
                    <li><strong>Usage Information</strong>: Pages visited, time spent on pages, clicks, referring website, exit pages</li>
                    <li><strong>Location Data</strong>: Country and region (derived from anonymized IP address)</li>
                    <li><strong>Cookie Data</strong>: As detailed in our Cookie Policy</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">3.3 Information from Third Parties</h3>
                  <p className="mb-3">We may receive information about you from:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li><strong>Business Partners</strong>: Referrals and introductions from professional networks</li>
                    <li><strong>Public Sources</strong>: Publicly available business directories and professional profiles</li>
                    <li><strong>Marketing Partners</strong>: Lead generation services (with your consent where required)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Legal bases for processing</h2>
              <p className="mb-3">We process your personal data based on the following legal grounds:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">4.1 Contract Performance (GDPR Article 6(1)(b))</h3>
                  <p className="mb-2">Processing necessary to provide our consulting services, including:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Responding to consultation requests</li>
                    <li>Delivering consulting services</li>
                    <li>Managing client relationships</li>
                    <li>Processing payments and invoices</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">4.2 Legitimate Interests (GDPR Article 6(1)(f))</h3>
                  <p className="mb-2">We process data based on our legitimate business interests, including:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Business development and B2B marketing to relevant prospects</li>
                    <li>Improving our services and website functionality</li>
                    <li>Ensuring network and information security</li>
                    <li>Preventing fraud and maintaining service quality</li>
                    <li>Internal analytics and business intelligence</li>
                  </ul>
                  <p className="mb-4 text-sm text-muted-foreground">
                    We have conducted legitimate interest assessments to ensure our interests do not override your rights and freedoms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">4.3 Consent (GDPR Article 6(1)(a))</h3>
                  <p className="mb-2">With your explicit consent for:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Marketing communications to individuals (where not based on legitimate interest)</li>
                    <li>Non-essential cookies and tracking technologies</li>
                    <li>Sharing data with certain third parties</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">4.4 Legal Obligations (GDPR Article 6(1)(c))</h3>
                  <p className="mb-2">To comply with:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Tax and accounting requirements</li>
                    <li>Anti-money laundering regulations</li>
                    <li>Court orders and legal proceedings</li>
                    <li>Regulatory reporting obligations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. How we use your information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">5.1 Service Delivery</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Providing business consulting services</li>
                    <li>Managing client engagements and projects</li>
                    <li>Communicating about service delivery</li>
                    <li>Processing payments and maintaining accounts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">5.2 Marketing and Business Development</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Sending relevant information about our services</li>
                    <li>Personalizing marketing communications</li>
                    <li>Conducting market research and analysis</li>
                    <li>Managing business relationships</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">5.3 Website and Technology Operations</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Operating and improving our website</li>
                    <li>Analyzing website usage and performance</li>
                    <li>Ensuring security and preventing fraud</li>
                    <li>Providing customer support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">5.4 Legal and Compliance</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Complying with legal obligations</li>
                    <li>Defending legal claims</li>
                    <li>Maintaining business records</li>
                    <li>Conducting internal audits</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your privacy rights</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">6.1 Rights Under GDPR (EU/UK Residents)</h3>
                  <p className="mb-2">You have the right to:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Access your personal data and receive a copy</li>
                    <li>Rectification of inaccurate or incomplete data</li>
                    <li>Erasure ("right to be forgotten") under certain circumstances</li>
                    <li>Restrict processing in specific situations</li>
                    <li>Data Portability to receive data in a structured format</li>
                    <li>Object to processing based on legitimate interests or direct marketing</li>
                    <li>Withdraw Consent at any time where processing is based on consent</li>
                    <li>Not be subject to solely automated decision-making</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">6.2 Rights Under CCPA/CPRA (California Residents)</h3>
                  <p className="mb-2">You have the right to:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Know what personal information we collect, use, share, and sell</li>
                    <li>Access your personal information (twice annually free of charge)</li>
                    <li>Delete your personal information (with certain exceptions)</li>
                    <li>Correct inaccurate personal information</li>
                    <li>Opt-Out of sale or sharing of personal information</li>
                    <li>Limit use of sensitive personal information</li>
                    <li>Non-Discrimination for exercising privacy rights</li>
                  </ul>
                  
                  <div className="bg-muted/30 p-4 rounded-lg mt-4">
                    <p className="text-sm font-medium mb-2">Do Not Sell or Share My Personal Information:</p>
                    <p className="text-sm">
                      California residents can opt out of the sale or sharing of their personal information for cross-context behavioral advertising by visiting our "Do Not Sell or Share My Personal Information" link in the website footer or by enabling Global Privacy Control in your browser.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">6.3 Exercising Your Rights</h3>
                  <p className="mb-4">
                    To exercise any of these rights, contact us at <a href="mailto:privacy@hobotnika.com" className="text-primary hover:underline">privacy@hobotnika.com</a>. We will respond within the timeframes required by applicable law (generally within 30 days). We may request information to verify your identity before processing your request.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Data retention</h2>
              <p className="mb-3">We retain personal data for as long as necessary to fulfill the purposes outlined in this policy:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-muted">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-muted p-3 text-left">Data Type</th>
                      <th className="border border-muted p-3 text-left">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-muted p-3">Client Data</td>
                      <td className="border border-muted p-3">Duration of engagement plus 7-10 years for legal and professional requirements</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3">Consultation Requests</td>
                      <td className="border border-muted p-3">3 years from last meaningful contact</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3">Marketing Contacts</td>
                      <td className="border border-muted p-3">3 years from last interaction, with annual review</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3">Financial Records</td>
                      <td className="border border-muted p-3">7 years for tax and accounting obligations</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3">Cookies</td>
                      <td className="border border-muted p-3">As specified in our cookie banner (maximum 13 months for advertising cookies in EEA/UK)</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3">Legal Claims</td>
                      <td className="border border-muted p-3">Until expiration of applicable limitation periods</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mt-4">We regularly review and securely delete data that is no longer required.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Data security</h2>
              <p className="mb-4">We implement appropriate technical and organizational measures to protect personal data, including:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Technical Measures:</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Encryption of data in transit (TLS 1.3) and at rest (AES-256)</li>
                    <li>Multi-factor authentication for system access</li>
                    <li>Regular security assessments and penetration testing</li>
                    <li>Intrusion detection and prevention systems</li>
                    <li>Secure backup and disaster recovery procedures</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Organizational Measures:</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Staff training on data protection and security</li>
                    <li>Access controls and role-based permissions</li>
                    <li>Confidentiality agreements with all personnel</li>
                    <li>Vendor due diligence and contractual protections</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Data breach notification</h2>
              <p className="mb-3">In the event of a personal data breach, we will:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Notify the Estonian Data Protection Inspectorate within 72 hours (if required)</li>
                <li>Inform affected individuals without undue delay if the breach poses high risk to rights and freedoms</li>
                <li>Document all breaches and maintain records for regulatory compliance</li>
                <li>Implement measures to prevent future incidents</li>
              </ul>
            </section>

            <section className="bg-muted/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-3">For questions about our privacy practices or to exercise your rights:</p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Hobotnika OÜ</p>
                  <p>Data Protection Team</p>
                  <p>Email: <a href="mailto:privacy@hobotnika.com" className="text-primary hover:underline">privacy@hobotnika.com</a></p>
                  <p>Phone: <a href="tel:+351933679097" className="text-primary hover:underline">+351 933679097</a></p>
                  <p>Address: Narva mnt 5, 10117 Tallinn, Estonia</p>
                  <p>Registry Code: 16770728</p>
                  <p>Office Hours: Monday-Friday, 9:00-17:00 EET</p>
                </div>

                <div>
                  <p className="font-semibold">Supervisory Authority:</p>
                  <p>Andmekaitse Inspektsioon</p>
                  <p>Tatari 39, 10134 Tallinn, Estonia</p>
                  <p><a href="mailto:info@aki.ee" className="text-primary hover:underline">info@aki.ee</a> | <a href="https://www.aki.ee" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aki.ee</a></p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}