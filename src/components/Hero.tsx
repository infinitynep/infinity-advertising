import React from 'react';
import { ArrowRight, Sparkles, Target, Compass, Megaphone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { InfinityBackground } from './InfinityBackground';

interface HeroProps {
  onExploreWork?: () => void;
  onStartProject?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onStartProject }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 lg:py-24 overflow-hidden bg-gradient-to-b from-brand-light/50 via-white to-white">
      {/* Background Vector Art & Infinity Glow */}
      <InfinityBackground variant="hero" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Agency Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span>Full-Service Creative Advertising Agency • Kathmandu</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-brand-charcoal leading-[1.08]">
              Creativity That{' '}
              <span className="relative whitespace-nowrap">
                <span className="text-gradient">Moves Brands</span>
                {/* Flowing curve accent underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-brand-cyan"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9C60 3 190 2 247 9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              Forward.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-brand-charcoal-light/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {COMPANY_INFO.heroSubheadline}
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <button
                type="button"
                onClick={() => {
                  if (onExploreWork) onExploreWork();
                  else scrollTo('portfolio');
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold text-base shadow-brand-lg hover:shadow-brand hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onStartProject) onStartProject();
                  else scrollTo('contact');
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-charcoal font-semibold text-base border-2 border-brand-charcoal/15 hover:border-brand-blue hover:text-brand-blue hover:bg-brand-light/50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Let's Start a Project</span>
              </button>
            </div>

            {/* Agency Value Highlights */}
            <div className="pt-8 border-t border-brand-light-gray/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider font-semibold text-brand-blue">Strategic</div>
                <div className="text-xs text-brand-charcoal/70">Brand Development</div>
              </div>
              <div className="text-left border-l border-brand-light-gray pl-4">
                <div className="text-xs uppercase tracking-wider font-semibold text-brand-cyan">360° ATL & BTL</div>
                <div className="text-xs text-brand-charcoal/70">Advertising Solutions</div>
              </div>
              <div className="text-left border-l border-brand-light-gray pl-4">
                <div className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal">Experiential</div>
                <div className="text-xs text-brand-charcoal/70">Event Management</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Official Brand Asset & Floating Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              {/* Outer decorative card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-brand-blue/5 via-brand-cyan/10 to-transparent p-6 sm:p-8 border border-white/80 shadow-premium backdrop-blur-sm">
                
                {/* Center official emblem display */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-card flex items-center justify-center p-8 border border-brand-light-gray/60 group">
                  <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
                  
                  {/* Infinity emblem */}
                  <img
                    src="/assets/infinity-icon.png"
                    alt="Infinity Emblem"
                    className="w-48 sm:w-56 h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-md"
                  />

                  {/* Subtle tagline overlay */}
                  <div className="absolute bottom-4 inset-x-0 text-center">
                    <span className="text-[11px] font-semibold text-brand-charcoal/60 uppercase tracking-widest">
                      An Odyssey of Creativity
                    </span>
                  </div>
                </div>

                {/* Floating Badge 1: Strategic Thinking */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-brand border border-brand-light-gray flex items-center space-x-3 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-charcoal">Strategic Thinking</div>
                    <div className="text-[10px] text-brand-charcoal/60">Insight-driven campaigns</div>
                  </div>
                </div>

                {/* Floating Badge 2: Business Results */}
                <div 
                  className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-brand border border-brand-light-gray flex items-center space-x-3 animate-float"
                  style={{ animationDelay: '3s' }}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-charcoal">Measurable ROI</div>
                    <div className="text-[10px] text-brand-charcoal/60">Sales-focused outcomes</div>
                  </div>
                </div>

                {/* Floating Badge 3: 360 Advertising */}
                <div 
                  className="absolute top-1/2 -right-6 -translate-y-1/2 hidden sm:flex bg-white/95 backdrop-blur-md rounded-xl py-2 px-3 shadow-card border border-brand-light-gray items-center space-x-2 text-xs font-medium text-brand-charcoal"
                >
                  <Megaphone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>ATL • BTL • Digital</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
