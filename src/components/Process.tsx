import React from 'react';
import { Ear, Lightbulb, Cpu, Layers, Rocket } from 'lucide-react';
import { PROCESS_STEPS } from '../data/companyData';

export const Process: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ear':
        return <Ear className="w-6 h-6 text-brand-blue" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-brand-cyan" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-brand-blue" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-brand-cyan" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-brand-blue" />;
      default:
        return <Rocket className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <section id="process" className="py-20 lg:py-32 bg-brand-light/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
            <span className="w-6 h-0.5 bg-brand-blue"></span>
            <span>How We Work</span>
            <span className="w-6 h-0.5 bg-brand-blue"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Our Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
            Our process is highly refined, allowing us to complete projects on budget and on time: understand client objectives, develop strategy, execute with technical excellence, and launch the most effective solution.
          </p>
        </div>

        {/* 5-Step Process Flow (LISTEN → THINK → SOLVE → EXECUTE → LAUNCH) */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue -translate-y-8 z-0 opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-brand-light-gray hover:border-brand-blue/30 hover:shadow-brand transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top step badge & icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-blue/10 transition-all">
                        {getStepIcon(item.icon)}
                      </div>
                      <span className="text-xs font-mono font-bold text-brand-charcoal/40 bg-brand-light px-2.5 py-1 rounded-full">
                        STEP {item.step}
                      </span>
                    </div>

                    <div className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan mb-1">
                      {item.name}
                    </div>
                    <h3 className="text-lg font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors mb-3">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-light-gray/60 flex items-center justify-between text-[11px] text-brand-charcoal/50">
                    <span>Phase 0{idx + 1}</span>
                    <span className="font-bold text-brand-blue">
                      {idx === 4 ? 'Impact' : '→ Next Step'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
