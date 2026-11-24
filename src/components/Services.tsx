import React, { useState } from 'react';
import { 
  Compass, 
  Megaphone, 
  CalendarCheck, 
  ArrowRight, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';
import { SERVICES } from '../data/companyData';
import type { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-8 h-8 text-brand-blue" />;
      case 'Megaphone':
        return <Megaphone className="w-8 h-8 text-brand-cyan" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-8 h-8 text-brand-blue" />;
      default:
        return <Layers className="w-8 h-8 text-brand-blue" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-brand-light/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
              <span className="w-6 h-0.5 bg-brand-blue"></span>
              <span>Our Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Our Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
              We provide full-spectrum advertising, strategic brand formulation, and on-ground experiential management engineered to maximize your return on investment.
            </p>
          </div>
          <div className="shrink-0">
            <span className="text-xs font-semibold px-4 py-2 rounded-full bg-white border border-brand-light-gray shadow-card text-brand-charcoal/80">
              3 Comprehensive Agency Pillars
            </span>
          </div>
        </div>

        {/* 3 Premium Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-8 shadow-card border border-brand-light-gray hover:border-brand-blue/40 hover:shadow-brand transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top service header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-charcoal/40">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-cyan mt-1 mb-4 uppercase tracking-wider">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-brand-charcoal/75 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Service Specific Offerings Checklist */}
                  <div className="border-t border-brand-light-gray/70 pt-5 space-y-2.5 mb-8">
                    <div className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2">
                      Key Capabilities:
                    </div>
                    {service.offerings.slice(0, 5).map((offering, oIdx) => (
                      <div key={oIdx} className="flex items-start space-x-2.5 text-xs text-brand-charcoal/80">
                        <Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                        <span>{offering}</span>
                      </div>
                    ))}
                    {service.offerings.length > 5 && (
                      <div className="text-[11px] text-brand-blue font-semibold pl-6 pt-1">
                        + {service.offerings.length - 5} more capabilities included
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-brand-light-gray/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-brand-blue group-hover:text-brand-cyan transition-colors"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <Sparkles className="w-4 h-4 text-brand-cyan/40 group-hover:text-brand-cyan transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Modal */}
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectServiceForProject={onSelectService}
        />

      </div>
    </section>
  );
};
