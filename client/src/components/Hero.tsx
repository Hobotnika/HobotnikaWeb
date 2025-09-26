import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Intelligent Digital Marketing
            <span className="block text-chart-3">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            We deliver comprehensive digital marketing strategies that adapt to your 
            business needs and drive measurable growth in global markets
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="default"
              onClick={scrollToContact}
              data-testid="button-start-project"
              className="bg-chart-3 hover:bg-chart-3/90 text-primary border-0 px-8 py-3 text-lg font-semibold"
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              data-testid="button-our-services"
              className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg backdrop-blur-sm"
            >
              Our Services
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70 text-sm mb-4">Trusted by businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 text-primary-foreground/60">
              <div className="text-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">12+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}