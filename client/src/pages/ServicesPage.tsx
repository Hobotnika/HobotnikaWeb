import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed specifically 
            for Estonian businesses ready to grow and succeed online.
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
}