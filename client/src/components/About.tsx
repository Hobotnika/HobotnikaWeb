import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, Target, Award } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Technical Excellence",
    description: "We develop sophisticated technical solutions using cutting-edge technologies and industry best practices."
  },
  {
    icon: Users,
    title: "Global Expertise",
    description: "Deep understanding of international business requirements and technical standards, with expertise across diverse industries."
  },
  {
    icon: Target,
    title: "Integrated Solutions",
    description: "Comprehensive technical integration across APIs, databases, cloud infrastructure, and custom software systems."
  },
  {
    icon: Award,
    title: "Proven Delivery",
    description: "Track record of delivering robust technical solutions that enhance operational efficiency and business performance."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Hobotnika
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a global technology solutions provider specializing in API integrations, 
            custom software development, and digital infrastructure for businesses worldwide 
            seeking reliable technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 border border-card-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Why Choose Hobotnika?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">
                    <strong>Technical Expertise:</strong> We understand enterprise technology requirements and system architecture
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">
                    <strong>Scalable Solutions:</strong> Flexible technical architectures that grow and adapt with your business
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">
                    <strong>Clear Documentation:</strong> Comprehensive technical documentation and transparent project communication
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">
                    <strong>Performance-Focused:</strong> Focus on measurable system improvements that enhance operational efficiency
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Our Mission</h4>
              <p className="text-card-foreground mb-6">
                To empower businesses worldwide with robust technical solutions and digital infrastructure that enhance operational efficiency and support sustainable growth.
              </p>
              <h4 className="text-lg font-semibold text-foreground mb-4">Our Vision</h4>
              <p className="text-card-foreground">
                To be the world's most trusted technology solutions provider, known for our technical excellence and unwavering commitment to delivering reliable systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}