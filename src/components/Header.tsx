import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Clients', path: '/clients' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ];

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
            <Link
              to="/"
              className="group flex items-center space-x-3 transition-transform focus:outline-none"
              aria-label="Infinity Advertising Pvt. Ltd. Home"
            >
              <img
                src="/assets/infinity-logo.png"
                alt="Infinity Advertising Pvt. Ltd."
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                        isActive
                          ? 'text-brand-blue font-bold'
                          : 'text-brand-charcoal/80 hover:text-brand-blue hover:bg-brand-light/60'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* CTA Button: Let's Talk */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-semibold shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
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
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-light text-brand-blue font-bold border-l-4 border-brand-blue'
                      : 'text-brand-charcoal/80 hover:bg-brand-light/60 hover:text-brand-blue'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-brand-light-gray/60 flex flex-col space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-semibold shadow-brand"
              >
                Let's Talk
              </Link>
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
