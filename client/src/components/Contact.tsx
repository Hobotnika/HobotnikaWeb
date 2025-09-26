import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Building,
  Globe
} from "lucide-react";

const contactInfo = [
  {
    icon: Building,
    label: "Company",
    value: "Hobotnika OÜ",
    subvalue: "Global Digital Marketing Consultancy"
  },
  {
    icon: MapPin,
    label: "Global Reach",
    value: "Worldwide Service",
    subvalue: "Remote Service Worldwide"
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@hobotnika.com",
    subvalue: "Response within 24 hours"
  },
  {
    icon: Clock,
    label: "Hours",
    value: "24/7 Available",
    subvalue: "All time zones covered"
  },
  {
    icon: Globe,
    label: "Languages",
    value: "Multi-lingual",
    subvalue: "Major languages supported"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement actual form submission
    console.log("Contact form submitted:", formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your growth journey? Get in touch with our team 
            of experts and let's discuss how we can help your business grow globally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>Get in Touch</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4" data-testid={`contact-info-${index}`}>
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.subvalue}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card>
              <CardHeader>
                <CardTitle>Why Businesses Work With Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">Global Expertise</Badge>
                  <span className="text-sm text-muted-foreground">International market knowledge</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">Proven Results</Badge>
                  <span className="text-sm text-muted-foreground">100+ successful projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">Fast Response</Badge>
                  <span className="text-sm text-muted-foreground">24-hour response time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">Transparent Pricing</Badge>
                  <span className="text-sm text-muted-foreground">No hidden fees</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Your company name"
                    data-testid="input-company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interest
                  </label>
                  <Input
                    id="service"
                    type="text"
                    value={formData.service}
                    onChange={(e) => handleInputChange("service", e.target.value)}
                    placeholder="SEO, Social Media, Google Ads, etc."
                    data-testid="input-service"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project and goals..."
                    className="min-h-[120px]"
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-chart-3 hover:bg-chart-3/90 text-primary"
                  disabled={isSubmitting}
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. 
                  We'll only use your information to respond to your inquiry.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}