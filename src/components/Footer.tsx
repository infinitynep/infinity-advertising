import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Phone, Mail, MapPin, ExternalLink, Shield, FileText } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Portfolio Gallery', path: '/portfolio' },
    { label: 'Valuable Clients', path: '/clients' },
    { label: 'Insights & Blog', path: '/insights' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Logo & Agency Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/assets/infinity-logo.png"
                alt="Infinity Advertising Pvt. Ltd."
                className="h-12 w-auto object-contain bg-white/95 px-3 py-1.5 rounded-xl shadow-sm"
              />
            </Link>

            <div className="italic text-brand-cyan text-sm font-semibold tracking-wide">
              "{COMPANY_INFO.tagline}"
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Infinity Advertising Pvt. Ltd. is a full-fledged creative advertising agency based in Kathmandu, Nepal. We combine strategic thinking, original creative ideas, and technical execution to deliver measurable sales results for your brand.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-white/50">
              <span>Tripureshwor, Kathmandu</span>
              <span>•</span>
              <span>EST. Nepal</span>
              <span>•</span>
              <span>Commercial Registration</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-brand-cyan">
              Pages
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-brand-cyan">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services#${s.id}`}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services#advertising-solutions"
                  className="hover:text-brand-cyan transition-colors"
                >
                  ATL & BTL Campaigns
                </Link>
              </li>
              <li>
                <Link
                  to="/services#event-management"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Turnkey Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-brand-cyan">
              Headquarters
            </h4>
            
            <div className="space-y-3 text-xs text-white/75">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              >
                <span>Request Consultation</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors flex items-center space-x-1"
            >
              <Shield className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Privacy Policy</span>
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors flex items-center space-x-1"
            >
              <FileText className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Terms of Service</span>
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-brand-blue hover:text-white text-white/70 transition-colors shadow-sm"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
