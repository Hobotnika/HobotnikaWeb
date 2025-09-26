import About from "@/components/About";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Hobotnika</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Learn more about our journey, values, and the team behind the world's 
            most adaptive digital marketing consultancy.
          </p>
        </div>
      </div>
      <About />
    </div>
  );
}