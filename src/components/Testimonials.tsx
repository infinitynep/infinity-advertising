import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, ShieldAlert } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay, currentIndex]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
              <span className="w-6 h-0.5 bg-brand-blue"></span>
              <span>Client Perspectives</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Testimonials
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
              How our strategic thinking and creative execution support business growth and brand trust.
            </p>
          </div>

          {/* Placeholder Notice Badge */}
          <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center space-x-2 max-w-sm">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Sample Placeholder Notice:</strong> Demonstrative feedback templates configured for verified partner quotes.
            </span>
          </div>
        </div>

        {/* Testimonial Slider Card */}
        <div 
          className="relative max-w-4xl mx-auto bg-brand-light/60 rounded-3xl p-8 sm:p-12 lg:p-16 border border-brand-light-gray shadow-card"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          {/* Quote Icon Background */}
          <Quote className="absolute top-8 right-8 sm:top-12 sm:right-12 w-16 h-16 sm:w-24 sm:h-24 text-brand-blue/10 pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* Project Sector Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-brand-light-gray text-xs font-semibold text-brand-blue shadow-sm">
              <span>Sector Focus:</span>
              <span className="text-brand-charcoal">{current.projectType}</span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-2xl font-medium text-brand-charcoal leading-relaxed">
              “{current.quote}”
            </blockquote>

            {/* Author Attribution */}
            <div className="pt-6 border-t border-brand-light-gray/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-base text-brand-charcoal">
                  {current.clientName}
                </div>
                <div className="text-xs text-brand-charcoal/60">
                  {current.role} • <strong className="text-brand-blue font-semibold">{current.organization}</strong>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={prev}
                  className="p-3 rounded-full bg-white border border-brand-light-gray hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors shadow-sm focus:outline-none"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center space-x-1.5 px-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === idx ? 'w-6 bg-brand-blue' : 'w-2 bg-brand-light-gray hover:bg-brand-charcoal/40'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={next}
                  className="p-3 rounded-full bg-white border border-brand-light-gray hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors shadow-sm focus:outline-none"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
