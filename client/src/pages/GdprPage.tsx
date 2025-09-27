export default function GdprPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Data Protection and Privacy
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
            Your Rights Under GDPR
          </h2>
          
          <div className="text-muted-foreground mb-8">
            <p className="text-sm font-medium">Effective Date: January 1, 2025</p>
            <p className="text-sm font-medium">Last Updated: January 1, 2025</p>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <p className="text-sm leading-relaxed">
              At Hobotnika OÜ, we are committed to protecting your personal data and respecting your privacy rights under the General Data Protection Regulation (GDPR) and Estonian data protection law. This page explains your rights and how we comply with data protection requirements.
            </p>
          </div>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. OUR COMMITMENT TO DATA PROTECTION</h2>
              <p className="mb-3">Hobotnika OÜ takes data protection seriously. As an Estonian company serving global clients, we comply with:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>General Data Protection Regulation (EU) 2016/679 (GDPR)</li>
                <li>Estonian Personal Data Protection Act (PDPA)</li>
                <li>International data protection standards</li>
                <li>Industry best practices for data security</li>
              </ul>
              <p className="mb-4">
                We process personal data lawfully, fairly, and transparently, implementing appropriate measures to protect your information throughout its lifecycle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. YOUR RIGHTS AS A DATA SUBJECT</h2>
              <p className="mb-4">Under GDPR, you have comprehensive rights regarding your personal data:</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">2.1 Right to Access (Article 15)</h3>
                  <p className="mb-2">You can request:</p>
                  <ul className="list-disc pl-6 mb-3 space-y-1">
                    <li>Confirmation of whether we process your personal data</li>
                    <li>A copy of your personal data we hold</li>
                    <li>Information about how we process it, including purposes, categories, recipients, retention periods, and your rights</li>
                  </ul>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>How to exercise:</strong> Submit a data access request via email to <a href="mailto:privacy@hobotnika.com" className="text-primary hover:underline">privacy@hobotnika.com</a> with proof of identity.</p>
                    <p className="text-sm mt-1"><strong>Timeline:</strong> We respond within 30 days (extendable by 2 months for complex requests).</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">2.2 Right to Rectification (Article 16)</h3>
                  <p className="mb-3">You can request correction of inaccurate personal data or completion of incomplete data.</p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>How to exercise:</strong> Contact us with specific corrections needed and supporting documentation if applicable.</p>
                    <p className="text-sm mt-1"><strong>Timeline:</strong> Corrections made without undue delay.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">2.3 Right to Erasure/"Right to be Forgotten" (Article 17)</h3>
                  <p className="mb-2">You can request deletion of your personal data when:</p>
                  <ul className="list-disc pl-6 mb-3 space-y-1">
                    <li>Data is no longer necessary for original purposes</li>
                    <li>You withdraw consent (where consent is the legal basis)</li>
                    <li>You object to processing and no overriding legitimate grounds exist</li>
                    <li>Data was unlawfully processed</li>
                    <li>Legal obligations require erasure</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    <strong>Exceptions:</strong> We may retain data for legal claims, compliance obligations, or public interest purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">2.4 Right to Restrict Processing (Article 18)</h3>
                  <p className="mb-2">You can request temporary suspension of processing while we:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Verify accuracy of contested data</li>
                    <li>Assess legitimate grounds following an objection</li>
                    <li>Establish, exercise, or defend legal claims</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">2.5 Right to Data Portability (Article 20)</h3>
                  <p className="mb-2">For data processed based on consent or contract, you can:</p>
                  <ul className="list-disc pl-6 mb-3 space-y-1">
                    <li>Receive your data in a structured, machine-readable format</li>
                    <li>Request direct transfer to another controller (where technically feasible)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    <strong>Scope:</strong> Applies only to data you provided and automated processing.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">2.6 Right to Object (Article 21)</h3>
                  <p className="mb-2">You can object to processing based on:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li><strong>Legitimate interests:</strong> We must stop unless we demonstrate compelling legitimate grounds</li>
                    <li><strong>Direct marketing:</strong> Absolute right to object - we will stop immediately</li>
                    <li><strong>Statistical/research purposes:</strong> Unless necessary for public interest tasks</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">2.7 Rights Regarding Automated Decision-Making (Article 22)</h3>
                  <p className="mb-3">You have the right not to be subject to decisions based solely on automated processing that significantly affect you.</p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>Our practice:</strong> We do not currently use fully automated decision-making for significant decisions. Any profiling for business analysis includes human review.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">2.8 Right to Withdraw Consent</h3>
                  <p className="mb-3">Where we rely on consent, you can withdraw it anytime. Withdrawal doesn't affect the lawfulness of prior processing.</p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>How to withdraw:</strong> Use our preference center, email <a href="mailto:privacy@hobotnika.com" className="text-primary hover:underline">privacy@hobotnika.com</a>, or click unsubscribe links in marketing emails.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. HOW WE PROCESS YOUR DATA</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">3.1 Legal Bases for Processing</h3>
                  <p className="mb-3">We process personal data only with valid legal basis:</p>
                  
                  <div className="space-y-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Contract Performance (Article 6(1)(b))</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Delivering consulting services</li>
                        <li>Managing client relationships</li>
                        <li>Processing payments and invoices</li>
                        <li>Fulfilling contractual obligations</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Legitimate Interests (Article 6(1)(f))</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Business development and marketing to existing clients</li>
                        <li>Network security and fraud prevention</li>
                        <li>Internal administration and analysis</li>
                        <li>Improving our services</li>
                      </ul>
                      <p className="text-xs mt-2 text-muted-foreground">We conduct Legitimate Interest Assessments to ensure our interests don't override your rights.</p>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Legal Obligations (Article 6(1)(c))</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Tax and accounting requirements</li>
                        <li>Anti-money laundering compliance</li>
                        <li>Regulatory reporting</li>
                        <li>Court orders and legal proceedings</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Consent (Article 6(1)(a))</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Marketing to prospects</li>
                        <li>Newsletter subscriptions</li>
                        <li>Cookie placement (non-essential)</li>
                        <li>Special category data processing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">3.2 Categories of Data We Process</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Professional Information:</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Name, job title, company</li>
                        <li>Business contact details</li>
                        <li>Professional background</li>
                        <li>Areas of expertise</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Communication Data:</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Email correspondence</li>
                        <li>Meeting notes</li>
                        <li>Consultation records</li>
                        <li>Feedback and evaluations</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Technical Data:</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>IP addresses</li>
                        <li>Browser information</li>
                        <li>Device identifiers</li>
                        <li>Usage analytics</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Financial Data:</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Billing information</li>
                        <li>Payment records</li>
                        <li>Tax identifiers</li>
                        <li>Transaction history</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">3.3 Data Sources</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Directly from you</li>
                    <li>Your employer (for B2B services)</li>
                    <li>Public professional profiles (LinkedIn)</li>
                    <li>Business information databases</li>
                    <li>Website interactions</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. DATA RETENTION</h2>
              <p className="mb-3">We retain personal data only as long as necessary:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-muted">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-muted p-3 text-left">Data Category</th>
                      <th className="border border-muted p-3 text-left">Retention Period</th>
                      <th className="border border-muted p-3 text-left">Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-muted p-3">Client project data</td>
                      <td className="border border-muted p-3">7 years after project completion</td>
                      <td className="border border-muted p-3">Tax and legal requirements</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3">Marketing contacts</td>
                      <td className="border border-muted p-3">Until opt-out + 3 years</td>
                      <td className="border border-muted p-3">Legitimate interests</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3">Employee data</td>
                      <td className="border border-muted p-3">7 years post-employment</td>
                      <td className="border border-muted p-3">Labor law requirements</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3">Financial records</td>
                      <td className="border border-muted p-3">7 years</td>
                      <td className="border border-muted p-3">Estonian accounting law</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3">Website analytics</td>
                      <td className="border border-muted p-3">14 months</td>
                      <td className="border border-muted p-3">Performance analysis</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3">Security logs</td>
                      <td className="border border-muted p-3">6 months</td>
                      <td className="border border-muted p-3">Security and compliance</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3">Cookies</td>
                      <td className="border border-muted p-3">See Cookie Policy</td>
                      <td className="border border-muted p-3">Varies by type</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mt-4">After retention periods expire, data is securely deleted or anonymized.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. DATA SECURITY</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">5.1 Technical Measures</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>AES-256 encryption for data at rest</li>
                    <li>TLS 1.3 for data in transit</li>
                    <li>Multi-factor authentication</li>
                    <li>Regular security updates and patches</li>
                    <li>Intrusion detection systems</li>
                    <li>Regular penetration testing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">5.2 Organizational Measures</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Access control on need-to-know basis</li>
                    <li>Confidentiality agreements for all staff</li>
                    <li>Regular security training</li>
                    <li>Incident response procedures</li>
                    <li>Vendor security assessments</li>
                    <li>Data protection by design and default</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">5.3 Breach Response</h3>
                  <p className="mb-2">If a breach occurs:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>We notify authorities within 72 hours (if required)</li>
                    <li>We inform affected individuals of high-risk breaches</li>
                    <li>We document all breaches internally</li>
                    <li>We implement measures to prevent recurrence</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. HOW TO EXERCISE YOUR RIGHTS</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3">6.1 Making a Request</h3>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="mb-2"><strong>Contact Methods:</strong></p>
                    <ul className="list-disc pl-6 mb-3 space-y-1 text-sm">
                      <li><strong>Via Email:</strong> <a href="mailto:privacy@hobotnika.com" className="text-primary hover:underline">privacy@hobotnika.com</a></li>
                      <li><strong>Via Post:</strong> Narva mnt 5, 10117 Tallinn, Estonia</li>
                      <li><strong>Via Phone:</strong> <a href="tel:+351933679097" className="text-primary hover:underline">+351 933679097</a> (verification required)</li>
                    </ul>
                    
                    <p className="mb-2"><strong>Required Information:</strong></p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Your full name and contact details</li>
                      <li>Specific right(s) you're exercising</li>
                      <li>Information to locate your data</li>
                      <li>Preferred response format</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">6.2 Response Timeline</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li><strong>Acknowledgment:</strong> Within 5 business days</li>
                    <li><strong>Response:</strong> Within 30 days</li>
                    <li><strong>Complex requests:</strong> Up to 2 additional months (with notification)</li>
                    <li><strong>Excessive requests:</strong> May charge reasonable fee or refuse</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">6.3 Complaints</h3>
                  <p className="mb-3">If you're unsatisfied with our response:</p>
                  
                  <div className="space-y-3">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="font-semibold mb-2">First: Contact our Privacy Team for resolution</p>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Second: File a complaint with:</p>
                      <p className="text-sm">Estonian Data Protection Inspectorate</p>
                      <p className="text-sm">Tatari 39, 10134 Tallinn, Estonia</p>
                      <p className="text-sm">Email: <a href="mailto:info@aki.ee" className="text-primary hover:underline">info@aki.ee</a></p>
                      <p className="text-sm">Phone: +372 627 4135</p>
                      <p className="text-sm">Website: <a href="https://www.aki.ee" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aki.ee</a></p>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Your Local Authority:</p>
                      <p className="text-sm">You may also complain to your local supervisory authority.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-muted/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-3">For all privacy-related matters:</p>
              
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