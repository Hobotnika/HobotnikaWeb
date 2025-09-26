import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Share2, 
  PenTool, 
  TrendingUp, 
  BarChart, 
  Megaphone,
  Check
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Comprehensive search engine optimization to improve your visibility in Estonian and international markets.",
    features: ["Keyword Research", "Technical SEO", "Content Optimization", "Local SEO"],
    popular: false
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic social media presence that engages your Estonian audience across all major platforms.",
    features: ["Content Strategy", "Community Management", "Paid Social Ads", "Analytics & Reporting"],
    popular: true
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "High-quality content creation in Estonian and English that drives engagement and conversions.",
    features: ["Blog Writing", "Video Content", "Graphic Design", "Brand Storytelling"],
    popular: false
  },
  {
    icon: TrendingUp,
    title: "Google Ads Management",
    description: "Targeted advertising campaigns that maximize ROI and reach your ideal Estonian customers.",
    features: ["Campaign Setup", "Keyword Bidding", "Ad Copy Creation", "Performance Optimization"],
    popular: false
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Comprehensive tracking and analysis to measure success and optimize your marketing efforts.",
    features: ["Goal Tracking", "Custom Dashboards", "Monthly Reports", "Strategy Recommendations"],
    popular: false
  },
  {
    icon: Megaphone,
    title: "Digital Strategy Consulting",
    description: "Strategic guidance to align your digital marketing with Estonian business objectives and market opportunities.",
    features: ["Market Analysis", "Competitor Research", "Strategy Development", "Implementation Planning"],
    popular: false
  }
];

export default function Services() {
  const handleServiceInquiry = (serviceName: string) => {
    console.log(`Inquiry for ${serviceName} service`);
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
            Like an octopus with multiple specialized arms, we offer comprehensive digital marketing 
            services tailored for Estonian businesses ready to grow.
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
                  onClick={() => handleServiceInquiry(service.title)}
                  data-testid={`button-inquire-${index}`}
                >
                  Learn More
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
            Let's discuss how our multi-faceted approach can help your Estonian business 
            reach new heights in the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-chart-3 hover:bg-chart-3/90 text-primary"
              data-testid="button-free-consultation"
            >
              Get Free Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              data-testid="button-view-portfolio"
            >
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}