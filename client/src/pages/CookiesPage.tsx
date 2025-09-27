export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
            HOBOTNIKA OÜ
          </h2>
          
          <div className="text-muted-foreground mb-8">
            <p className="text-sm font-medium">Effective Date: January 1, 2025</p>
            <p className="text-sm font-medium">Last Updated: January 1, 2025</p>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <p className="text-sm leading-relaxed">
              This Cookie Policy explains how Hobotnika OÜ ("Hobotnika," "we," "us," or "our") uses cookies and similar technologies on our website www.hobotnika.ee (the "Website"). This policy should be read together with our Privacy Policy.
            </p>
          </div>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. WHAT ARE COOKIES?</h2>
              <p className="mb-4">
                Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, improve your experience, and provide analytics about how the site is used. Similar technologies include pixels, web beacons, and local storage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. HOW WE USE COOKIES</h2>
              <p className="mb-2">We use cookies to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Ensure our website functions properly</li>
                <li>Remember your preferences and settings</li>
                <li>Analyze how visitors use our website to improve performance</li>
                <li>Understand our audience for business development purposes</li>
                <li>Enable contact forms and consultation requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. TYPES OF COOKIES WE USE</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">3.1 Strictly Necessary Cookies</h3>
                  <p className="mb-3">These cookies are essential for website operation and cannot be disabled.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-muted">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-muted p-3 text-left">Cookie</th>
                          <th className="border border-muted p-3 text-left">Purpose</th>
                          <th className="border border-muted p-3 text-left">Duration</th>
                          <th className="border border-muted p-3 text-left">Provider</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-muted p-3">Session_ID</td>
                          <td className="border border-muted p-3">Maintains user session</td>
                          <td className="border border-muted p-3">Session</td>
                          <td className="border border-muted p-3">Hobotnika</td>
                        </tr>
                        <tr>
                          <td className="border border-muted p-3">Security_Token</td>
                          <td className="border border-muted p-3">CSRF protection</td>
                          <td className="border border-muted p-3">Session</td>
                          <td className="border border-muted p-3">Hobotnika</td>
                        </tr>
                        <tr>
                          <td className="border border-muted p-3">Cookie_Consent</td>
                          <td className="border border-muted p-3">Records consent preferences</td>
                          <td className="border border-muted p-3">12 months</td>
                          <td className="border border-muted p-3">Hobotnika</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">3.2 Functional Cookies</h3>
                  <p className="mb-3">These cookies remember your choices to provide enhanced features.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-muted">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-muted p-3 text-left">Cookie</th>
                          <th className="border border-muted p-3 text-left">Purpose</th>
                          <th className="border border-muted p-3 text-left">Duration</th>
                          <th className="border border-muted p-3 text-left">Provider</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-muted p-3">Language_Pref</td>
                          <td className="border border-muted p-3">Language selection</td>
                          <td className="border border-muted p-3">12 months</td>
                          <td className="border border-muted p-3">Hobotnika</td>
                        </tr>
                        <tr>
                          <td className="border border-muted p-3">Region_Settings</td>
                          <td className="border border-muted p-3">Regional preferences</td>
                          <td className="border border-muted p-3">6 months</td>
                          <td className="border border-muted p-3">Hobotnika</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">3.3 Analytics Cookies</h3>
                  <p className="mb-3">These cookies help us understand how visitors interact with our website for business improvement purposes.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-muted">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-muted p-3 text-left">Cookie</th>
                          <th className="border border-muted p-3 text-left">Purpose</th>
                          <th className="border border-muted p-3 text-left">Duration</th>
                          <th className="border border-muted p-3 text-left">Provider</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-muted p-3">_ga</td>
                          <td className="border border-muted p-3">Identifies unique users for analytics</td>
                          <td className="border border-muted p-3">2 years</td>
                          <td className="border border-muted p-3">Google Analytics</td>
                        </tr>
                        <tr>
                          <td className="border border-muted p-3">_ga_[ID]</td>
                          <td className="border border-muted p-3">Session tracking for analytics</td>
                          <td className="border border-muted p-3">2 years</td>
                          <td className="border border-muted p-3">Google Analytics</td>
                        </tr>
                        <tr>
                          <td className="border border-muted p-3">_gid</td>
                          <td className="border border-muted p-3">Daily user identification</td>
                          <td className="border border-muted p-3">24 hours</td>
                          <td className="border border-muted p-3">Google Analytics</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. GOOGLE ANALYTICS USAGE</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">4.1 Business Analytics Only</h3>
                  <p className="mb-3">We use Google Analytics solely to:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Understand website usage patterns</li>
                    <li>Improve our service offerings</li>
                    <li>Analyze consultation request sources</li>
                    <li>Optimize website performance for business purposes</li>
                  </ul>
                  
                  <p className="mb-3">We have configured Google Analytics with:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>IP anonymization enabled</li>
                    <li>Data retention limited to 14 months</li>
                    <li>Google Signals disabled</li>
                    <li>No data sharing with Google for advertising purposes</li>
                    <li>Demographics and interests reports disabled</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">4.2 Data Collection Limitations</h3>
                  <p className="mb-3">Google Analytics data is used exclusively for:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Internal business analysis</li>
                    <li>Website performance optimization</li>
                    <li>Understanding our consulting market</li>
                    <li>Improving user experience</li>
                  </ul>
                  
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="font-semibold text-accent">No advertising or marketing use:</p>
                    <p className="text-sm mt-1">We do not use Google Analytics data for advertising, remarketing, or cross-site tracking purposes.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">4.3 Google Consent Mode</h3>
                  <p className="mb-3">For visitors from the EEA and UK, we implement Google Consent Mode which adjusts data collection based on consent status:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>analytics_storage: Controls storage of analytics-related data</li>
                    <li>ad_storage: Set to "denied" (we do not use advertising features)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. YOUR CONSENT CHOICES</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">5.1 Consent Management</h3>
                  <p className="mb-3">When you first visit our website, we ask for your consent before placing non-essential cookies. You can:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Accept analytics cookies for website improvement</li>
                    <li>Reject all non-essential cookies</li>
                    <li>Change your preferences at any time</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">5.2 Managing Your Preferences</h3>
                  <p className="mb-3">You can manage cookie preferences through:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Our cookie consent banner</li>
                    <li>Browser settings (see Section 6)</li>
                    <li>Contacting us directly</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">5.3 Consequences of Refusing Cookies</h3>
                  <p className="mb-3">If you refuse analytics cookies:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Strictly necessary cookies will still be used</li>
                    <li>Website functionality remains intact</li>
                    <li>We cannot analyze usage patterns to improve our services</li>
                    <li>All consultation and contact features remain available</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. BROWSER COOKIE CONTROLS</h2>
              <p className="mb-3">Most browsers allow you to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>View what cookies are stored</li>
                <li>Delete cookies individually or entirely</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies</li>
                <li>Set preferences for specific websites</li>
              </ul>
              
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-3">Browser Instructions:</h4>
                <ul className="space-y-1 text-sm">
                  <li><strong>Chrome:</strong> chrome://settings/cookies</li>
                  <li><strong>Firefox:</strong> about:preferences#privacy</li>
                  <li><strong>Safari:</strong> Preferences → Privacy</li>
                  <li><strong>Edge:</strong> edge://settings/privacy</li>
                  <li><strong>Opera:</strong> opera://settings/privacy</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. OPT-OUT MECHANISMS</h2>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Google Analytics Opt-Out:</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Install the Google Analytics Opt-out Browser Add-on</li>
                    <li>Available at: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Browser Privacy Signals:</h4>
                  <p className="mb-4">We honor Global Privacy Control (GPC) signals where legally required</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. BUSINESS PURPOSE CLARIFICATION</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">8.1 Consulting Business Focus</h3>
                  <p className="mb-3">As a professional consulting firm, we use cookies solely for:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Website functionality and security</li>
                    <li>Understanding our business audience</li>
                    <li>Improving our service delivery</li>
                    <li>Analyzing consultation request patterns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">8.2 No Advertising Platform Activities</h3>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="font-semibold mb-2">We explicitly do not engage in:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Cross-site tracking</li>
                      <li>Behavioral advertising</li>
                      <li>Data sales to third parties</li>
                      <li>Remarketing campaigns</li>
                      <li>Ad network participation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. INTERNATIONAL COMPLIANCE</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3">9.1 European Users</h3>
                  <p className="mb-3">For EU/EEA users, we comply with:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>ePrivacy Directive 2002/58/EC</li>
                    <li>General Data Protection Regulation (GDPR)</li>
                    <li>Estonian Electronic Communications Act</li>
                  </ul>
                  <p className="mb-4">We obtain prior consent for all non-essential cookies.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">9.2 Other Jurisdictions</h3>
                  <p className="mb-4">We respect privacy preferences for users in all jurisdictions, applying privacy-by-design principles globally.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. DATA SECURITY AND RETENTION</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3">10.1 Security Measures</h3>
                  <p className="mb-3">We implement security measures for cookie data:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>HTTPS encryption for all data transmission</li>
                    <li>Secure and HttpOnly flags where appropriate</li>
                    <li>SameSite attributes to prevent CSRF attacks</li>
                    <li>Regular security audits</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">10.2 Retention Periods</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Session cookies: Deleted when browser closes</li>
                    <li>Analytics cookies: Maximum 2 years (with 14-month data retention in Google Analytics)</li>
                    <li>Preference cookies: 12 months maximum</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. THIRD-PARTY SERVICES</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3">11.1 Google Analytics</h3>
                  <p className="mb-4">Google Analytics is our only third-party service that uses cookies. We have configured it strictly for business analytics purposes without advertising features.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">11.2 No Other Third-Party Tracking</h3>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="font-semibold mb-2">We do not use:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Social media tracking pixels</li>
                      <li>Advertising networks</li>
                      <li>Cross-site tracking services</li>
                      <li>Marketing automation platforms that track users</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. UPDATES TO THIS POLICY</h2>
              <p className="mb-3">We may update this Cookie Policy to reflect:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Changes in our business practices</li>
                <li>New legal requirements</li>
                <li>Technology updates</li>
              </ul>
              <p className="mb-4">
                We will notify you of material changes through website notices. The "Last Updated" date shows when this policy was last revised.
              </p>
            </section>

            <section className="bg-muted/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">13. CONTACT INFORMATION</h2>
              <p className="mb-3">For questions about our cookie practices:</p>
              
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Data Protection Contact:</p>
                  <p>Hobotnika OÜ</p>
                  <p>Email: <a href="mailto:privacy@hobotnika.com" className="text-primary hover:underline">privacy@hobotnika.com</a></p>
                  <p>Address: Narva mnt 5, 10117 Tallinn, Estonia</p>
                  <p>Phone: <a href="tel:+351933679097" className="text-primary hover:underline">+351 933679097</a></p>
                </div>

                <div>
                  <p className="font-semibold">Estonian Supervisory Authority:</p>
                  <p>Andmekaitse Inspektsioon</p>
                  <p>Address: Tatari 39, 10134 Tallinn, Estonia</p>
                  <p>Email: <a href="mailto:info@aki.ee" className="text-primary hover:underline">info@aki.ee</a></p>
                  <p>Website: <a href="https://www.aki.ee" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aki.ee</a></p>
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