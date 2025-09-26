export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Cookie Policy
          </h1>
          
          <div className="text-muted-foreground mb-6">
            <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your computer or mobile device when 
                you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <p className="mb-4">
                We use cookies to provide you with a better experience, improve our services, 
                and analyze how our website is used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand usage patterns</li>
                <li>Performance cookies to improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="mb-4">
                You can control and manage cookies through your browser settings. Note that disabling 
                certain cookies may impact functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have questions about our cookie policy, please contact us at info@hobotnika.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}