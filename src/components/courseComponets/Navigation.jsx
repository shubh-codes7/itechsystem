'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"



export default function Navigation({ onDemoClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log('Mobile menu toggled:', !isMenuOpen)
  }

  const handleNavClick = (section) => {
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
    console.log('Navigation clicked:', section)
  }

  const handleDemoClick = () => {
    console.log('Demo booking clicked from nav')
    onDemoClick?.()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold font-[Poppins] text-primary" data-testid="text-nav-logo">
              TechMaster Academy
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => handleNavClick('curriculum')}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-nav-curriculum"
              >
                Curriculum
              </button>
              <button 
                onClick={() => handleNavClick('showcase')}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-nav-showcase"
              >
                Success Stories
              </button>
              <button 
                onClick={() => handleNavClick('demo')}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-nav-demo"
              >
                Free Demo
              </button>
              <button 
                onClick={() => handleNavClick('certification')}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-nav-certification"
              >
                Certification
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <a href="tel:+919876543210" className="flex items-center hover:text-primary transition-colors">
                <Phone className="w-4 h-4 mr-1" />
                <span data-testid="text-nav-phone">+91 98765 43210</span>
              </a>
            </div>
            <Button 
              onClick={handleDemoClick} 
              size="sm"
              data-testid="button-nav-demo-cta"
            >
              Book Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              data-testid="button-nav-mobile-menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border" data-testid="div-mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => handleNavClick('curriculum')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-mobile-nav-curriculum"
              >
                Curriculum
              </button>
              <button 
                onClick={() => handleNavClick('showcase')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-mobile-nav-showcase"
              >
                Success Stories
              </button>
              <button 
                onClick={() => handleNavClick('demo')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-mobile-nav-demo"
              >
                Free Demo
              </button>
              <button 
                onClick={() => handleNavClick('certification')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-mobile-nav-certification"
              >
                Certification
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-mobile-nav-contact"
              >
                Contact
              </button>
              <div className="px-3 py-2 border-t border-border mt-2">
                <div className="flex flex-col space-y-2">
                  <a href="tel:+919876543210" className="flex items-center text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    <span data-testid="text-mobile-nav-phone">+91 98765 43210</span>
                  </a>
                  <Button 
                    onClick={handleDemoClick} 
                    size="sm" 
                    className="w-full"
                    data-testid="button-mobile-nav-demo-cta"
                  >
                    Book Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}