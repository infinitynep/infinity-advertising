import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section scrollspy
      const sections = ['home', 'about', 'services', 'portfolio', 'philosophy', 'process', 'clients', 'insights', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Clients', href: '#clients', id: 'clients' },
    { label: 'Insights', href: '#insights', id: 'insights' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top micro-bar for quick phone/email info */}
      <div className="bg-brand-charcoal text-white/80 text-xs py-1.5 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="text-white/60 font-medium">Advertising Agency | Kathmandu, Nepal</span>
            <span className="inline-block w-1 h-1 rounded-full bg-brand-cyan"></span>
            <span className="italic text-brand-cyan/90">{COMPANY_INFO.tagline}</span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} 
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
              title="Call Infinity Advertising"
            >
              <Phone className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
              title="Email Infinity Advertising"
            >
              <Mail className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-premium py-3 border-b border-brand-light-gray/80'
            : 'bg-white/95 py-4 sm:py-5 border-b border-brand-light-gray/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center space-x-3 transition-transform focus:outline-none"
              aria-label="Infinity Advertising Pvt. Ltd. Home"
            >
              <img
                src="/assets/infinity-logo.png"
                alt="Infinity Advertising Pvt. Ltd."
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                      isActive
                        ? 'text-brand-blue font-semibold'
                        : 'text-brand-charcoal/80 hover:text-brand-blue hover:bg-brand-light/60'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA Button: Let's Talk */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="#contact"
                onClick={(e) => {
                  handleNavClick(e, '#contact');
                  if (onOpenContact) onOpenContact();
                }}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-semibold shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-brand-charcoal hover:bg-brand-light transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-blue" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-[500px] border-b border-brand-light-gray bg-white' : 'max-h-0'
          }`}
        >
          <div className="px-5 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-light text-brand-blue font-semibold border-l-4 border-brand-blue'
                      : 'text-brand-charcoal/80 hover:bg-brand-light/60 hover:text-brand-blue'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-brand-light-gray/60 flex flex-col space-y-3">
              <a
                href="#contact"
                onClick={(e) => {
                  handleNavClick(e, '#contact');
                  if (onOpenContact) onOpenContact();
                }}
                className="w-full text-center py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-semibold shadow-brand"
              >
                Let's Talk
              </a>
              <div className="flex items-center justify-center space-x-4 text-xs text-brand-charcoal/70 pt-2">
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center space-x-1">
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <span>•</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center space-x-1">
                  <Mail className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
