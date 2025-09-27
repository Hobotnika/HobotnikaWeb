import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  BarChart, 
  Search, 
  Users, 
  Settings,
  Check
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Comprehensive strategic guidance to align your business objectives with market opportunities and growth initiatives.",
    features: ["Goal Setting", "Strategic Framework", "Implementation Roadmap", "Performance Metrics"],
    popular: false
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description: "Drive sustainable growth through market expansion, partnership development, and revenue optimization strategies.",
    features: ["Market Expansion", "Partnership Strategy", "Revenue Growth", "Competitive Positioning"],
    popular: true
  },
  {
    icon: Settings,
    title: "Process Optimization",
    description: "Streamline operations and enhance efficiency through systematic process improvement and workflow optimization.",
    features: ["Workflow Analysis", "Efficiency Improvement", "Cost Reduction", "Quality Enhancement"],
    popular: false
  },
  {
    icon: BarChart,
    title: "Digital Strategy",
    description: "Navigate digital transformation with strategic guidance tailored to your industry and business objectives.",
    features: ["Digital Transformation", "Technology Strategy", "Change Management", "Innovation Planning"],
    popular: false
  },
  {
    icon: Search,
    title: "Market Analysis",
    description: "In-depth market research and competitive analysis to inform strategic decisions and identify opportunities.",
    features: ["Market Research", "Competitive Intelligence", "Industry Trends", "Risk Assessment"],
    popular: false
  },
  {
    icon: Users,
    title: "Operational Consulting",
    description: "Expert guidance on organizational structure, resource allocation, and operational excellence initiatives.",
    features: ["Organizational Design", "Resource Planning", "Performance Management", "Operational Excellence"],
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
            We provide strategic consulting services designed to optimize 
            business performance and drive sustainable growth across industries.
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