import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react"

export default function Footer() {

  return (
    <footer className="bg-muted/50 border-t border-border pt-16 pb-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold font-[Poppins] text-primary mb-4" >
              I-Tech Systems
            </h3>
            <p className="text-white mb-4">
              Transforming careers through comprehensive full stack development education. 
              Join thousands of successful graduates working at top tech companies.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('Facebook')}
                className="p-2 rounded-lg bg-background hover-elevate transition-all duration-200"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('Twitter')}
                className="p-2 rounded-lg bg-background hover-elevate transition-all duration-200"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('LinkedIn')}
                className="p-2 rounded-lg bg-background hover-elevate transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('Instagram')}
                className="p-2 rounded-lg bg-background hover-elevate transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  className="text-white/90 hover:text-primary transition-colors text-left"
                >
                  Curriculum
                </button>
              </li>
              <li>
                <button 
                  className="text-white/90 hover:text-primary transition-colors text-left"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button 
                  className="text-white/90 hover:text-primary transition-colors text-left"
                >
                  Free Demo
                </button>
              </li>
              <li>
                <button 
                  className="text-white/90 hover:text-primary transition-colors text-left"
                >
                  Certification
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-white flex-shrink-0" />
                <a href="tel:+919876543210" className="text-white/90">
                  <span>9422248005, 9834975865</span>
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-white flex-shrink-0" />
                <a href="mailto:info@techmasteracademy.com" className="text-white/90">
                  <span>info@itechnasik.com</span>
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-white flex-shrink-0 mt-1" />
                <span className="text-white/90" >
                  Sumangal Luxuria, 3rd Floor, <br />
                  Beside Westside Mall, College Road, Nashik-422005
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-white">
              <span >
                © 2025 I-Tech Systems. All rights reserved.
              </span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white md:justify-end">
              <button className="hover:text-foreground transition-colors" >
                Privacy Policy
              </button>
              <button className="hover:text-foreground transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-foreground transition-colors" >
                Refund Policy
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <Card className="mt-8 bg-card border-card-border">
          <CardContent className="p-6 text-center">
            <h4 className="font-semibold mb-3" >
              Trusted Learning Partner
            </h4>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                <span>DUNS Registered</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                <span>UGAC</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                <span>MSME</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  )
}