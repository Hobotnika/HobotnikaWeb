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
                <li>Information gathered through professional business development activities</li>
                <li>Data collected through website analytics for business improvement</li>
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
                  <p className="mb-3">When you request a consultation or engage our services, we collect:</p>
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
                    <li><strong>Analytics Data</strong>: Website interaction patterns for business improvement purposes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">3.3 Information from Third Parties</h3>
                  <p className="mb-3">We may receive information about you from:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li><strong>Business Partners</strong>: Referrals and introductions from professional networks</li>
                    <li><strong>Public Sources</strong>: Publicly available business directories and professional profiles</li>
                    <li><strong>Professional Networks</strong>: LinkedIn and similar professional platforms (publicly available information only)</li>
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
                    <li>Professional business development to relevant prospects</li>
                    <li>Improving our services and website functionality</li>
                    <li>Ensuring network and information security</li>
                    <li>Preventing fraud and maintaining service quality</li>
                    <li>Internal business analytics and performance analysis</li>
                  </ul>
                  <p className="mb-4 text-sm text-muted-foreground">
                    We have conducted legitimate interest assessments to ensure our interests do not override your rights and freedoms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">4.3 Consent (GDPR Article 6(1)(a))</h3>
                  <p className="mb-2">With your explicit consent for:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Professional communications where not based on legitimate interest</li>
                    <li>Non-essential website analytics</li>
                    <li>Sharing data with specific business partners</li>
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
                  <h3 className="text-lg font-medium mb-2">5.2 Business Development</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Sending relevant information about our consulting services</li>
                    <li>Professional relationship management</li>
                    <li>Industry analysis and business intelligence</li>
                    <li>Understanding our market and service effectiveness</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">5.3 Website and Technology Operations</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Operating and improving our website</li>
                    <li>Analyzing website usage and performance for business purposes</li>
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
              <h2 className="text-2xl font-semibold mb-4">6. Website analytics and tracking technologies</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">6.1 Google Analytics</h3>
                  <p className="mb-4">We use Google Analytics to understand how visitors use our website so we can improve it and our marketing efforts.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">6.2 Google Services for Our Business</h3>
                  <p className="mb-4">We may use Google services for our business operations, including:</p>
                  
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Google Ads to advertise our company's services</li>
                    <li>Google Workspace for email and document management</li>
                    <li>Other Google APIs for internal business purposes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">6.3 Managing Your Preferences</h3>
                  <p className="mb-4">You can control tracking through:</p>
                  
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Our cookie consent banner</li>
                    <li>Browser settings to refuse cookies</li>
                    <li>Google Analytics Opt-out: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Data sharing and third parties</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">7.1 Categories of Recipients</h3>
                  <p className="mb-3">We share personal data with:</p>
                  
                  <div className="space-y-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Service Providers (Data Processors)</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Cloud storage and hosting services</li>
                        <li>Email and communication platforms</li>
                        <li>Payment processors</li>
                        <li>Website analytics providers (Google Analytics for business purposes only)</li>
                        <li>Customer relationship management systems</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Professional Advisors</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Legal counsel</li>
                        <li>Accountants and auditors</li>
                        <li>Business consultants</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Business Partners (Limited Sharing)</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Strategic consulting partners (with your consent)</li>
                        <li>Referral partners (introduction purposes only)</li>
                        <li>Joint service delivery partners (as joint controllers)</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Legal and Regulatory</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Government authorities when required by law</li>
                        <li>Courts and law enforcement</li>
                        <li>Regulatory bodies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">7.2 International Data Transfers</h3>
                  <p className="mb-3">As an Estonian company serving global clients, we transfer data internationally:</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">From Americas to Estonia (EU)</h4>
                      <ul className="list-disc pl-6 mb-3 space-y-1 text-sm">
                        <li>Transfers from the US rely on Standard Contractual Clauses or EU-US Data Privacy Framework</li>
                        <li>Transfers from Canada benefit from partial adequacy decision for PIPEDA-covered data</li>
                        <li>Transfers from Latin America use Standard Contractual Clauses with supplementary measures</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">From Estonia to Third Countries</h4>
                      <ul className="list-disc pl-6 mb-3 space-y-1 text-sm">
                        <li>We ensure appropriate safeguards through adequacy decisions, SCCs, or specific derogations</li>
                        <li>Transfer impact assessments conducted for high-risk jurisdictions</li>
                        <li>Technical and organizational measures implemented to protect data during transfer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Your privacy rights</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">8.1 Rights Under GDPR (EU/UK Residents)</h3>
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
                  <h3 className="text-xl font-semibold mb-3">8.2 Rights Under CCPA/CPRA (California Residents)</h3>
                  <p className="mb-2">You have the right to:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Know what personal information we collect, use, share</li>
                    <li>Access your personal information (twice annually free of charge)</li>
                    <li>Delete your personal information (with certain exceptions)</li>
                    <li>Correct inaccurate personal information</li>
                    <li>Non-Discrimination for exercising privacy rights</li>
                  </ul>
                  
                  <div className="bg-accent/10 p-4 rounded-lg mt-4">
                    <p className="text-sm font-medium text-accent">
                      <strong>Important:</strong> We do not sell or share personal information for cross-context behavioral advertising.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">8.3 Rights Under PIPEDA (Canadian Residents)</h3>
                  <p className="mb-2">You have the right to:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Access personal information we hold about you</li>
                    <li>Correct inaccuracies in your information</li>
                    <li>Withdraw Consent for certain processing activities</li>
                    <li>File a Complaint with the Office of the Privacy Commissioner</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">8.4 Rights Under LGPD (Brazilian Residents)</h3>
                  <p className="mb-2">You have the right to:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Confirmation of processing and access to data</li>
                    <li>Correction of incomplete or inaccurate data</li>
                    <li>Anonymization, blocking, or deletion of unnecessary data</li>
                    <li>Portability to another service provider</li>
                    <li>Information about sharing with third parties</li>
                    <li>Revocation of consent</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">8.5 Exercising Your Rights</h3>
                  <p className="mb-4">
                    To exercise any of these rights, contact us at <a href="mailto:privacy@hobotnika.com" className="text-primary hover:underline">privacy@hobotnika.com</a>. We will respond within the timeframes required by applicable law (generally within 30 days). We may request information to verify your identity before processing your request.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Data retention</h2>
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
                      <td className="border border-muted p-3">Business Contacts</td>
                      <td className="border border-muted p-3">3 years from last interaction, with annual review</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3">Financial Records</td>
                      <td className="border border-muted p-3">7 years for tax and accounting obligations</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3">Website Analytics</td>
                      <td className="border border-muted p-3">14 months maximum</td>
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
              <h2 className="text-2xl font-semibold mb-4">10. Data security</h2>
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
              <h2 className="text-2xl font-semibold mb-4">11. Data breach notification</h2>
              <p className="mb-3">In the event of a personal data breach, we will:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Notify the Estonian Data Protection Inspectorate within 72 hours (if required)</li>
                <li>Inform affected individuals without undue delay if the breach poses high risk to rights and freedoms</li>
                <li>Document all breaches and maintain records for regulatory compliance</li>
                <li>Implement measures to prevent future incidents</li>
              </ul>
              <p className="mb-4">For US residents, we comply with applicable state breach notification laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Children's privacy</h2>
              <p className="mb-4">
                Our services are intended for businesses and professionals. We do not knowingly collect personal data from individuals under 16 years of age (13 in Estonia for information society services). If we become aware of such collection, we will promptly delete the information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Third-party links</h2>
              <p className="mb-4">
                Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Updates to this policy</h2>
              <p className="mb-3">We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of material changes by:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Posting a notice on our website</li>
                <li>Sending an email to registered users</li>
                <li>Obtaining consent where legally required</li>
              </ul>
              <p className="mb-4">The "Last Updated" date at the top indicates the most recent revision.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">15. Contact information and complaints</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3">15.1 Contact Us</h3>
                  <p className="mb-3">For questions about this Privacy Policy or our privacy practices:</p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p>Email: <a href="mailto:privacy@hobotnika.com" className="text-primary hover:underline">privacy@hobotnika.com</a></p>
                    <p>Phone: <a href="tel:+351933679097" className="text-primary hover:underline">+351 933679097</a></p>
                    <p>Mail: Hobotnika OÜ, Narva mnt 5, 10117 Tallinn, Estonia</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">15.2 Supervisory Authorities</h3>
                  <p className="mb-3">You have the right to lodge a complaint with a data protection authority:</p>
                  
                  <div className="space-y-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Estonian Data Protection Inspectorate</h4>
                      <p className="text-sm">Tatari 39, 10134 Tallinn, Estonia</p>
                      <p className="text-sm">Email: <a href="mailto:info@aki.ee" className="text-primary hover:underline">info@aki.ee</a></p>
                      <p className="text-sm">Phone: +372 627 4135</p>
                      <p className="text-sm">Website: <a href="https://www.aki.ee" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aki.ee</a></p>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">For Other Jurisdictions:</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>EU/UK: Your local data protection authority</li>
                        <li>California: California Privacy Protection Agency (cppa.ca.gov)</li>
                        <li>Canada: Office of the Privacy Commissioner (priv.gc.ca)</li>
                        <li>Brazil: Autoridade Nacional de Proteção de Dados (gov.br/anpd)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">16. International users</h2>
              <p className="mb-4">
                For users outside the EU, we aim to provide similar privacy protections. Contact <a href="mailto:privacy@hobotnika.com" className="text-primary hover:underline">privacy@hobotnika.com</a> for any privacy-related requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">17. Business communications</h2>
              <p className="mb-3">
                By requesting consultation or providing business contact information, you consent to receive information about our consulting services. All communications are for informational purposes only and do not constitute guarantees of results. You may opt-out at any time by:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Clicking the unsubscribe link in our emails</li>
                <li>Emailing <a href="mailto:privacy@hobotnika.com" className="text-primary hover:underline">privacy@hobotnika.com</a></li>
                <li>Calling <a href="tel:+351933679097" className="text-primary hover:underline">+351 933679097</a></li>
              </ul>
              <p className="mb-4">For B2B communications to business contacts, we may also rely on legitimate interests where permitted by law.</p>
            </section>

            <section className="bg-muted/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">18. Data protection contact</h2>
              <p className="mb-4">
                While not legally required to appoint a Data Protection Officer, we have designated a privacy contact to handle data protection matters:
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Privacy Contact</p>
                  <p>Email: <a href="mailto:privacy@hobotnika.com" className="text-primary hover:underline">privacy@hobotnika.com</a></p>
                  <p>Phone: <a href="tel:+351933679097" className="text-primary hover:underline">+351 933679097</a></p>
                </div>

                <div>
                  <p className="text-sm"><strong>Language Availability:</strong> This Privacy Policy is available in Estonian upon request. Please contact <a href="mailto:privacy@hobotnika.com" className="text-primary hover:underline">privacy@hobotnika.com</a> for the Estonian version.</p>
                </div>

                <div>
                  <p className="text-sm"><strong>Accessibility:</strong> If you require this Privacy Policy in an alternative format for accessibility reasons, please contact us.</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-muted">
                <p className="text-sm text-muted-foreground">© 2025 Hobotnika OÜ. All rights reserved.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}