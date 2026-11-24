import React from 'react';
import { Sparkles, Clock, Smile, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { PEOPLE_VALUES } from '../data/companyData';

export const People: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-brand-blue" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-brand-cyan" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-brand-blue" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-brand-cyan" />;
      case 'Award':
        return <Award className="w-6 h-6 text-brand-blue" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-brand-cyan" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
            <span className="w-6 h-0.5 bg-brand-blue"></span>
            <span>Agency Culture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Creative Minds.{' '}
            <span className="text-gradient">Collaborative Spirit.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
            Our multidisciplinary team brings together strategic acumen, design excellence, technical craft, and deep local market sensibility to elevate your brand.
          </p>
        </div>

        {/* 6 People & Culture Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PEOPLE_VALUES.map((item, idx) => {
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-brand-light/50 border border-brand-light-gray hover:border-brand-blue/30 hover:bg-white hover:shadow-brand transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-card flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-xl font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-brand-charcoal/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Abstract Collaborative Work Statement */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-charcoal to-brand-charcoal-dark text-white shadow-premium flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">An In-House Collaborative Model</h4>
            <p className="text-sm text-white/70 max-w-2xl">
              From creative concept directors and copywriters to pre-press technicians and video editors, our specialists work side-by-side to ensure seamless project delivery.
            </p>
          </div>
          <div className="shrink-0 flex items-center space-x-2 text-xs font-semibold px-4 py-2 rounded-full bg-white/10 text-brand-cyan border border-white/10">
            <span>Kathmandu Based Team</span>
          </div>
        </div>

      </div>
    </section>
  );
};
