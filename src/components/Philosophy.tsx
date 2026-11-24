import React from 'react';
import { PHILOSOPHY_PILLARS } from '../data/companyData';
import { InfinityBackground } from './InfinityBackground';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 lg:py-32 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Subtle Infinity background in dark mode */}
      <InfinityBackground variant="dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-cyan mb-3">
            <span className="w-6 h-0.5 bg-brand-cyan"></span>
            <span>Agency Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Creative Thinking.{' '}
            <span className="text-gradient">Meaningful Results.</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed font-normal">
            We deliver measurable results that mean our clients achieve sustainable, profitable growth. Our philosophy is to apply our services where we can deliver an optimum return on investment.
          </p>
        </div>

        {/* 5 Philosophy Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => {
            return (
              <div
                key={idx}
                className="group relative rounded-3xl p-8 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-brand-cyan/80 group-hover:text-brand-cyan transition-colors">
                      {pillar.number}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs text-white/60">
                      ✦
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-mono">
                  <span>Infinity Core Principle</span>
                  <span>0{idx + 1} / 05</span>
                </div>
              </div>
            );
          })}

          {/* Quote Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-brand-lg flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-white/80 mb-4">
                Our Conviction
              </div>
              <blockquote className="text-lg sm:text-xl font-bold leading-snug italic">
                “We believe that the most successful businesses have focused on ‘results’ brought about by a sales driven campaign.”
              </blockquote>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20 text-xs text-white/80 font-medium">
              Infinity Advertising Pvt. Ltd. — Kathmandu, Nepal
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
