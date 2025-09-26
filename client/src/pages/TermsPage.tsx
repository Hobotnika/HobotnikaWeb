export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="text-muted-foreground mb-6">
            <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily use our services for personal, non-commercial 
                transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
              <p className="mb-4">
                We strive to maintain service availability but do not guarantee uninterrupted access 
                to our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-4">
                Questions about the Terms of Service should be sent to us at info@hobotnika.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}