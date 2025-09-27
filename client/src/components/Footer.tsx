import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import Logo from "@/components/Logo";
import { 
  MapPin, 
  Mail
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" }
  ]
};


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Information */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo className="text-primary-foreground" />
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Professional business consulting firm delivering strategic guidance 
                and operational excellence to organizations worldwide.
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-chart-3" />
                  <span>Global Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-chart-3" />
                  <span>info@hobotnika.com</span>
                </div>
              </div>
              
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
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/70">
              © {currentYear} Hobotnika. All rights reserved.
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
              <span className="text-primary-foreground/70">
                Global Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}