import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Building2, 
  Printer, 
  Video, 
  Palette, 
  TrendingUp, 
  Award, 
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { COMPANY_INFO, SISTER_FACILITIES } from '../data/companyData';

interface AboutProps {
  onLearnMore?: () => void;
}

export const About: React.FC<AboutProps> = () => {
  const [showSisterEntities, setShowSisterEntities] = useState(false);

  const pillars = [
    {
      title: "Strategic Thinking",
      desc: "Deep analysis of market position, competitors, and audience behavior before creative inception.",
      icon: TrendingUp,
      color: "text-brand-blue"
    },
    {
      title: "Creative Ideas",
      desc: "Original, memorable concepts that cut through advertising noise and forge meaningful connection.",
      icon: Sparkles,
      color: "text-brand-cyan"
    },
    {
      title: "Brand Communication",
      desc: "Unified messaging architecture that speaks with clarity, consistency, and cultural resonance.",
      icon: Award,
      color: "text-brand-charcoal"
    },
    {
      title: "Advertising Solutions",
      desc: "Targeted ATL, BTL, and digital deployment engineered to achieve maximum reach and recall.",
      icon: Layers,
      color: "text-brand-blue"
    },
    {
      title: "Technical Execution",
      desc: "Precision in audio-visual production, creative styling, and high-fidelity campaign execution.",
      icon: Printer,
      color: "text-brand-cyan"
    },
    {
      title: "Business-Focused Results",
      desc: "A steadfast commitment to driving sales, qualified leads, and sustainable profitability for clients.",
      icon: CheckCircle2,
      color: "text-brand-charcoal"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
            <span className="w-6 h-0.5 bg-brand-blue"></span>
            <span>About Infinity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Who We Are
          </h2>
          <p className="mt-4 text-lg text-brand-charcoal-light leading-relaxed">
            <strong className="text-brand-charcoal font-semibold">Infinity Advertising Pvt. Ltd.</strong> is a full-fledged advertising agency involved in creating, planning and managing advertising and promotional strategies.
          </p>
        </div>

        {/* Core Narrative & Agency Methodology */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6 text-brand-charcoal/80 text-base leading-relaxed">
            <p>
              We provide a better platform to display a precise brand recognition of our clients' products and services. We deliver valuable advertising solutions with our original strategic methods and creative thinking, backed up by execution and technical excellence.
            </p>
            <p>
              Providing organizations with our sales-driven inspirations has helped them achieve all their marketing objectives. Through our careful and innovative sellable creative work, we inspire brand loyalty, impress target audiences with original designs, and enhance brand equity.
            </p>

            {/* 6 Core Competencies Grid */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-brand-light/60 hover:bg-brand-light border border-brand-light-gray transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3 mb-1.5">
                      <IconComponent className={`w-5 h-5 ${pillar.color}`} />
                      <h4 className="font-bold text-sm text-brand-charcoal">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-brand-charcoal/70 leading-normal pl-8">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Toggle to view Sister Production Facilities */}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => setShowSisterEntities(!showSisterEntities)}
                className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-blue hover:text-brand-cyan transition-colors"
              >
                <span>{showSisterEntities ? 'Hide Audio-Visual Studio Facility' : 'Explore Dedicated Audio-Visual Studio Facility'}</span>
                {showSisterEntities ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Right Column: Visual Infographic & Agency Profile Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-brand-charcoal to-brand-charcoal-dark text-white p-8 shadow-card relative overflow-hidden">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 -translate-y-6 translate-x-6 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold">Agency Credentials</span>
                  <span className="text-xs text-white/60">Kathmandu, Nepal</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Building2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-white/60">Registered Office</div>
                      <div className="text-sm font-medium text-white">{COMPANY_INFO.address}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Palette className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-white/60">Core Expertise</div>
                      <div className="text-sm font-medium text-white">Brand Development • ATL & BTL Advertising • Event Management</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Video className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-white/60">Production Ecosystem</div>
                      <div className="text-sm font-medium text-white">Dedicated Audio-Visual Studio & Creative Production Facilities</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="italic text-xs text-white/70">
                    "{COMPANY_INFO.tagline}"
                  </div>
                </div>
              </div>
            </div>

            {/* Factual Disclaimer Card */}
            <div className="p-4 rounded-xl bg-brand-light border border-brand-light-gray text-xs text-brand-charcoal/70">
              <strong className="text-brand-charcoal font-semibold block mb-1">Authentic Agency Profile</strong>
              Information on this website is drawn strictly from Infinity Advertising Pvt. Ltd.'s official records and verified corporate documentation.
            </div>
          </div>

        </div>

        {/* Collapsible Sister Facilities Section */}
        {showSisterEntities && (
          <div className="mt-12 pt-8 border-t border-brand-light-gray transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-brand-charcoal">Audio-Visual Production & Studio Setup</h3>
              <p className="text-sm text-brand-charcoal/70">
                To guarantee uncompromising audio-visual fidelity, TVC production, and commercial photography:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SISTER_FACILITIES.map((facility, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white border border-brand-light-gray shadow-card hover:border-brand-blue/30 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-base text-brand-charcoal">{facility.name}</h4>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-brand-light text-brand-blue font-semibold">
                      {facility.location}
                    </span>
                  </div>
                  <p className="text-xs text-brand-charcoal/75 leading-relaxed">
                    {facility.specialty}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
