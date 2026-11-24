import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Layers, Megaphone, CalendarCheck, Compass } from 'lucide-react';
import type { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForProject?: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectServiceForProject
}) => {
  if (!service) return null;

  const getIcon = (name: string) => {
    switch (name) {
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
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-brand-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-brand-light-gray"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-brand-charcoal to-brand-charcoal-dark text-white p-6 sm:p-8 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-4 mb-3">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md">
              {getIcon(service.iconName)}
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                Agency Service Scope
              </span>
              <h3 id="modal-service-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                {service.title}
              </h3>
            </div>
          </div>
          <p className="text-sm text-white/80 font-medium">{service.tagline}</p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-brand-charcoal/60 mb-2">Overview</h4>
            <p className="text-brand-charcoal text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Specific Service Breakdown */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-brand-charcoal/60 mb-3">
              Included Capabilities & Solutions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.offerings.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-brand-charcoal/80">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="p-4 rounded-2xl bg-brand-light border border-brand-light-gray">
            <div className="flex items-center space-x-2 mb-2 text-xs uppercase tracking-wider font-bold text-brand-charcoal">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span>Standard Deliverables & Production Assets</span>
            </div>
            <ul className="space-y-1.5 text-xs text-brand-charcoal/75">
              {service.deliverables.map((del, dIdx) => (
                <li key={dIdx} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          {service.caseStudyHighlight && (
            <div className="text-xs text-brand-charcoal/70 italic border-l-2 border-brand-blue pl-3 py-1">
              <strong>Proven Track Record:</strong> {service.caseStudyHighlight}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-brand-light/70 border-t border-brand-light-gray flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-brand-charcoal hover:bg-white rounded-full transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              if (onSelectServiceForProject) {
                onSelectServiceForProject(service.title);
              }
              onClose();
              const contactEl = document.getElementById('contact');
              if (contactEl) {
                contactEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold shadow-brand hover:shadow-brand-lg transition-all flex items-center justify-center space-x-2"
          >
            <span>Request Proposal for this Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
