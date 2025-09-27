import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, Target, Award } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Strategic Expertise",
    description: "We provide strategic guidance and business intelligence to help organizations navigate complex challenges and opportunities."
  },
  {
    icon: Users,
    title: "Global Experience",
    description: "Deep understanding of international business environments and market dynamics across diverse industries and regions."
  },
  {
    icon: Target,
    title: "Integrated Approach",
    description: "Comprehensive consulting methodology that addresses strategic, operational, and organizational aspects of business performance."
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of helping organizations achieve measurable improvements in performance, efficiency, and market position."
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
            We are a professional consulting firm helping businesses optimize operations 
            and achieve growth objectives worldwide through strategic guidance and 
            proven methodologies.
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
                    <strong>Business Expertise:</strong> We understand complex business challenges and strategic requirements
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">
                    <strong>Adaptable Strategies:</strong> Flexible business strategies that evolve and grow with your organization
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">
                    <strong>Clear Communication:</strong> Transparent reporting and comprehensive project management throughout engagements
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">
                    <strong>Results-Driven:</strong> Focus on measurable business outcomes that enhance organizational performance
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Our Mission</h4>
              <p className="text-card-foreground mb-6">
                To empower businesses worldwide with strategic guidance and business solutions that enhance operational effectiveness and drive sustainable growth.
              </p>
              <h4 className="text-lg font-semibold text-foreground mb-4">Our Vision</h4>
              <p className="text-card-foreground">
                To be the world's most trusted business consulting firm, known for our strategic expertise and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}