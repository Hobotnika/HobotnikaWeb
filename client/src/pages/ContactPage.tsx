import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to start your digital marketing journey? Let's discuss how we can 
            help your Estonian business reach new heights.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}