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
                <li>Deliver targeted advertising and measure campaign effectiveness</li>
                <li>Enable social media features and integration</li>
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
                  <p className="mb-3">These cookies help us understand how visitors interact with our website.</p>
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
                          <td className="border border-muted p-3">Identifies unique users</td>
                          <td className="border border-muted p-3">2 years</td>
                          <td className="border border-muted p-3">Google Analytics</td>
                        </tr>
                        <tr>
                          <td className="border border-muted p-3">ga[ID]</td>
                          <td className="border border-muted p-3">Maintains session state</td>
                          <td className="border border-muted p-3">2 years</td>
                          <td className="border border-muted p-3">Google Analytics</td>
                        </tr>
                        <tr>
                          <td className="border border-muted p-3">_gid</td>
                          <td className="border border-muted p-3">Identifies unique users</td>
                          <td className="border border-muted p-3">24 hours</td>
                          <td className="border border-muted p-3">Google Analytics</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">3.4 Marketing Cookies</h3>
                  <p className="mb-3">These cookies track visitors across websites to display relevant advertisements.</p>
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
                          <td className="border border-muted p-3">_gcl_au</td>
                          <td className="border border-muted p-3">Google Ads conversion tracking</td>
                          <td className="border border-muted p-3">3 months</td>
                          <td className="border border-muted p-3">Google Ads</td>
                        </tr>
                        <tr>
                          <td className="border border-muted p-3">_gcl_aw</td>
                          <td className="border border-muted p-3">Conversion tracking</td>
                          <td className="border border-muted p-3">3 months</td>
                          <td className="border border-muted p-3">Google Ads</td>
                        </tr>
                        <tr>
                          <td className="border border-muted p-3">_gcl_dc</td>
                          <td className="border border-muted p-3">DoubleClick remarketing</td>
                          <td className="border border-muted p-3">3 months</td>
                          <td className="border border-muted p-3">Google</td>
                        </tr>
                        <tr>
                          <td className="border border-muted p-3">ads/ga-audiences</td>
                          <td className="border border-muted p-3">Google Ads remarketing</td>
                          <td className="border border-muted p-3">Session</td>
                          <td className="border border-muted p-3">Google</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. GOOGLE SERVICES INTEGRATION</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">4.1 Google Analytics 4</h3>
                  <p className="mb-3">We use Google Analytics 4 to analyze website usage. GA4 uses first-party cookies to:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Track user interactions and sessions</li>
                    <li>Generate statistical data about website usage</li>
                    <li>Help us improve website content and structure</li>
                  </ul>
                  <p className="mb-3">We have implemented:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>IP anonymization</li>
                    <li>Data retention limited to 14 months</li>
                    <li>Google Signals disabled for cross-device tracking</li>
                    <li>No data sharing with Google for advertising purposes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">4.2 Google Consent Mode v2</h3>
                  <p className="mb-3">We implement Google Consent Mode v2 which adjusts how Google tags behave based on your consent choices:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Analytics Storage: Controls analytics cookies</li>
                    <li>Ad Storage: Controls advertising cookies</li>
                    <li>Ad User Data: Controls user data for ads</li>
                    <li>Ad Personalization: Controls personalized advertising</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">4.3 Google Ads</h3>
                  <p className="mb-3">We use Google Ads for:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Conversion tracking to measure campaign effectiveness</li>
                    <li>Remarketing to show relevant ads on other websites</li>
                    <li>Audience insights to improve targeting</li>
                  </ul>
                  <p className="mb-4">
                    You can opt out of Google Ads personalization at: <a href="https://adssettings.google.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://adssettings.google.com</a>
                  </p>
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
                    <li>Accept all cookies</li>
                    <li>Reject all non-essential cookies</li>
                    <li>Customize your preferences by category</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">5.2 Managing Your Preferences</h3>
                  <p className="mb-3">You can manage cookie preferences through:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Our cookie consent banner (click the cookie icon in the footer)</li>
                    <li>Browser settings (see Section 6)</li>
                    <li>Third-party opt-out tools (see Section 7)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">5.3 Consequences of Refusing Cookies</h3>
                  <p className="mb-3">If you refuse cookies:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Strictly necessary cookies will still be used</li>
                    <li>Some website features may not function properly</li>
                    <li>We cannot remember your preferences</li>
                    <li>Analytics data will be limited</li>
                    <li>You will not see personalized advertisements</li>
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
              
              <p className="mb-4 text-sm text-muted-foreground">
                Note: Blocking all cookies will prevent you from using many websites properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. THIRD-PARTY OPT-OUT MECHANISMS</h2>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Industry Tools:</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>EU: <a href="http://www.youronlinechoices.eu" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
                    <li>US: <a href="http://optout.networkadvertising.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">NAI Opt-Out</a></li>
                    <li>Global: <a href="http://optout.aboutads.info" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">DAA WebChoices</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Platform-Specific:</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Google: <a href="https://myaccount.google.com/data-and-privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Privacy Controls</a></li>
                    <li>Facebook: <a href="https://www.facebook.com/ads/preferences" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ad Preferences</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/psettings/advertising" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ad Preferences</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Browser Privacy Signals:</h4>
                  <p className="mb-4">We honor Global Privacy Control (GPC) signals where legally required.</p>
                </div>
              </div>
            </section>

            <section className="bg-muted/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-3">For questions about our cookie practices or to exercise your rights:</p>
              
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
                  <p>Andmekaitse Inspektsioon (Estonian Data Protection Inspectorate)</p>
                  <p>Address: Tatari 39, 10134 Tallinn, Estonia</p>
                  <p>Email: <a href="mailto:info@aki.ee" className="text-primary hover:underline">info@aki.ee</a></p>
                  <p>Website: <a href="https://www.aki.ee" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aki.ee</a></p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}