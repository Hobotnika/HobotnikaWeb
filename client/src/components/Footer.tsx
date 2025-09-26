import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Facebook, 
  Twitter,
  ExternalLink
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "SEO Optimization", href: "/services#seo" },
    { name: "Social Media Marketing", href: "/services#social" },
    { name: "Content Marketing", href: "/services#content" },
    { name: "Google Ads Management", href: "/services#ads" },
    { name: "Analytics & Reporting", href: "/services#analytics" },
    { name: "Digital Strategy", href: "/services#strategy" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" }
  ]
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/hobotnika", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com/hobotnika", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/hobotnika", label: "Twitter" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Information */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">H</span>
                </div>
                <span className="font-bold text-xl">Hobotnika OÜ</span>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Estonian digital marketing consultancy delivering intelligent, 
                adaptive solutions for business growth.
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-chart-3" />
                  <span>Tallinn, Estonia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-chart-3" />
                  <span>+372 5123 4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-chart-3" />
                  <span>info@hobotnika.ee</span>
                </div>
              </div>
              
              <div className="flex space-x-2 mt-6">
                <Badge variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground">
                  Google Partner
                </Badge>
                <Badge variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground">
                  Est. 2019
                </Badge>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <span 
                        className="text-primary-foreground/80 hover:text-chart-3 transition-colors text-sm hover-elevate"
                        data-testid={`link-footer-service-${index}`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <span 
                        className="text-primary-foreground/80 hover:text-chart-3 transition-colors text-sm hover-elevate"
                        data-testid={`link-footer-company-${index}`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Newsletter */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Legal</h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <span 
                        className="text-primary-foreground/80 hover:text-chart-3 transition-colors text-sm hover-elevate"
                        data-testid={`link-footer-legal-${index}`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div>
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="bg-primary-foreground/10 hover:bg-chart-3 hover:text-primary"
                      data-testid={`button-social-${social.label.toLowerCase()}`}
                    >
                      <a 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/70">
              © {currentYear} Hobotnika OÜ. All rights reserved. | Registry Code: 14567890 | VAT: EE101234567
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy">
                <span className="text-primary-foreground/70 hover:text-chart-3 transition-colors hover-elevate">
                  Privacy
                </span>
              </Link>
              <Link href="/terms">
                <span className="text-primary-foreground/70 hover:text-chart-3 transition-colors hover-elevate">
                  Terms
                </span>
              </Link>
              <a 
                href="https://www.rik.ee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-chart-3 transition-colors flex items-center space-x-1 hover-elevate"
                data-testid="link-estonian-registry"
              >
                <span>Estonian Business Registry</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}