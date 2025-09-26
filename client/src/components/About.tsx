import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, Target, Award } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Strategy",
    description: "Like an octopus adapting to its environment, we create flexible strategies that evolve with your market and goals."
  },
  {
    icon: Users,
    title: "Global Expertise",
    description: "Deep understanding of international business culture and digital landscapes, combined with global best practices."
  },
  {
    icon: Target,
    title: "Multi-Armed Approach",
    description: "Simultaneous execution across SEO, social media, content marketing, and paid advertising for maximum impact."
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of helping businesses worldwide grow their digital presence and achieve measurable results."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Hobotnika OÜ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a global digital marketing consultancy that combines the intelligence 
            and adaptability of an octopus with the professionalism and reliability that 
            businesses worldwide demand.
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
                    <strong>Global Expertise:</strong> We understand international market dynamics and business culture
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">
                    <strong>Adaptive Solutions:</strong> Flexible strategies that grow and change with your business
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">
                    <strong>Transparent Communication:</strong> Clear reporting and honest partnership approach
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">
                    <strong>Results-Driven:</strong> Focus on measurable outcomes that impact your bottom line
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Our Mission</h4>
              <p className="text-card-foreground mb-6">
                To empower businesses worldwide with intelligent, adaptive digital marketing strategies that evolve with their growth and market demands.
              </p>
              <h4 className="text-lg font-semibold text-foreground mb-4">Our Vision</h4>
              <p className="text-card-foreground">
                To be the world's most trusted digital marketing consultancy, known for our octopus-like adaptability and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}