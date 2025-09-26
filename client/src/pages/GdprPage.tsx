export default function GdprPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            GDPR Compliance
          </h1>
          
          <div className="text-muted-foreground mb-6">
            <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights Under GDPR</h2>
              <p className="mb-4">
                Under the General Data Protection Regulation (GDPR), you have specific rights 
                regarding your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Subject Rights</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Right to be informed about data processing</li>
                <li>Right of access to your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Lawful Basis for Processing</h2>
              <p className="mb-4">
                We process personal data based on legitimate interests, contract performance, 
                legal obligations, and your consent where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Protection Officer</h2>
              <p className="mb-4">
                For any GDPR-related inquiries or to exercise your rights, please contact us at 
                info@hobotnika.com with "GDPR Request" in the subject line.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}