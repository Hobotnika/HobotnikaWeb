import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Laptop, 
  Database, 
  Cloud, 
  Zap, 
  Settings,
  Check
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "API Integration & Development",
    description: "Custom API development and seamless integration solutions to connect your systems and enhance functionality.",
    features: ["RESTful API Design", "Third-party Integrations", "Microservices Architecture", "API Documentation"],
    popular: false
  },
  {
    icon: Laptop,
    title: "Custom Software Solutions",
    description: "Tailored software development that meets your specific business requirements and workflows.",
    features: ["Web Applications", "Desktop Software", "Mobile Apps", "System Integration"],
    popular: true
  },
  {
    icon: Database,
    title: "Database Management & Analytics",
    description: "Comprehensive database design, optimization, and analytics solutions for data-driven insights.",
    features: ["Database Design", "Performance Optimization", "Data Analytics", "Reporting Systems"],
    popular: false
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure Setup",
    description: "Scalable cloud architecture and infrastructure deployment for modern business operations.",
    features: ["Cloud Migration", "Infrastructure Design", "Security Implementation", "Performance Monitoring"],
    popular: false
  },
  {
    icon: Zap,
    title: "Business Process Automation",
    description: "Streamline operations and increase efficiency through intelligent automation solutions.",
    features: ["Workflow Automation", "Process Optimization", "Integration Solutions", "Performance Analytics"],
    popular: false
  },
  {
    icon: Settings,
    title: "Technical Consulting & Support",
    description: "Expert technical guidance and ongoing support to optimize your technology infrastructure.",
    features: ["System Architecture", "Technology Assessment", "Implementation Support", "Ongoing Maintenance"],
    popular: false
  }
];

export default function Services() {
  const handleServiceInquiry = (serviceName: string) => {
    // TODO: Implement contact form with pre-selected service
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive IT solutions and technical expertise 
            to transform your business operations and drive digital innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover-elevate transition-all duration-300 relative ${
                service.popular ? 'border-chart-3 shadow-lg' : ''
              }`}
              data-testid={`card-service-${index}`}
            >
              {service.popular && (
                <Badge 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-chart-3 text-primary"
                  data-testid="badge-popular"
                >
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-chart-3 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full"
                  variant={service.popular ? "default" : "outline"}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  data-testid={`button-inquire-${index}`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-card rounded-lg p-8 border border-card-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">
            Ready to Grow Your Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our multi-faceted approach can help your business 
            reach new heights in the global digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-chart-3 hover:bg-chart-3/90 text-primary"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="button-free-consultation"
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}