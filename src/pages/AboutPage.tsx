import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  Lightbulb,
  Cpu,
  Layers,
  Rocket,
  Ear,
  Clock,
  Smile,
  MapPin,
  Award,
  Building2,
  Palette,
  Video,
  ArrowUpRight,
  Handshake
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { InfinityBackground } from '../components/InfinityBackground';
import { COMPANY_INFO, PHILOSOPHY_PILLARS, PROCESS_STEPS, PEOPLE_VALUES, CLIENTS } from '../data/companyData';

export const AboutPage: React.FC = () => {
  // Select featured clients for the preview section
  const previewClientNames = [
    'Nepal Telecom',
    'Oxford International Pvt. Ltd.',
    'Presidential Graduate School',
    '3 Sisters Adventure Trekking Pvt. Ltd.',
    'Nepal Coffee Producers Association',
    'Blue Ocean Health Care',
    'Borderlands Resort Pvt. Ltd.',
    'Himalayan Coffee Trading'
  ];

  const previewClients = CLIENTS.filter(c => previewClientNames.includes(c.name));

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "name": COMPANY_INFO.name,
    "alternateName": "Infinity Advertising",
    "url": "https://www.infinityadv.com.np/about",
    "logo": "https://www.infinityadv.com.np/assets/infinity-logo.png",
    "image": "https://www.infinityadv.com.np/assets/infinity-icon.png",
    "description": "Discover Infinity Advertising Pvt. Ltd., a creative advertising agency in Kathmandu, Nepal, delivering strategic brand development, advertising solutions and creative communication.",
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.address,
      "addressLocality": "Kathmandu",
      "addressRegion": "Bagmati",
      "addressCountry": "NP"
    },
    "knowsAbout": [
      "Brand Strategy & Naming",
      "ATL & BTL Advertising Solutions",
      "Television Commercial Production",
      "Print & Radio Advertising",
      "Event Management & Creative Coordination"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Infinity Advertising Pvt. Ltd. | Creative Advertising Agency Nepal"
        description="Discover Infinity Advertising Pvt. Ltd., a creative advertising agency in Kathmandu, Nepal, delivering strategic brand development, advertising solutions and creative communication."
        canonicalPath="/about"
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-brand-light/60 via-white to-white overflow-hidden border-b border-brand-light-gray/60">
        <InfinityBackground variant="hero" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal/60 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-blue">About Us</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                <span>ABOUT INFINITY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-[1.12]">
                We Turn Creative Ideas Into{' '}
                <span className="text-gradient">Meaningful Brand Experiences.</span>
              </h1>

              <p className="text-lg sm:text-xl text-brand-charcoal/75 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                We are a creative advertising agency driven by strategic thinking, innovative ideas and a passion for helping brands move forward.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold text-base shadow-brand-lg hover:shadow-brand hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-3 group"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-charcoal font-semibold text-base border-2 border-brand-charcoal/15 hover:border-brand-blue hover:text-brand-blue hover:bg-brand-light/50 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative rounded-3xl bg-gradient-to-br from-brand-blue/10 via-brand-cyan/10 to-transparent p-6 sm:p-8 border border-white shadow-premium backdrop-blur-sm">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-card flex items-center justify-center p-8 border border-brand-light-gray/60 group">
                    <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
                    
                    <img
                      src="/assets/infinity-icon.png"
                      alt="Infinity Advertising Emblem"
                      className="w-48 sm:w-56 h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-md"
                    />

                    <div className="absolute bottom-4 inset-x-0 text-center">
                      <span className="text-[11px] font-bold text-brand-charcoal/60 uppercase tracking-widest">
                        An Odyssey of Creativity
                      </span>
                    </div>
                  </div>

                  {/* Floating Metric 1 */}
                  <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-brand border border-brand-light-gray flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                      <Target className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-brand-charcoal">Strategic Execution</div>
                      <div className="text-[10px] text-brand-charcoal/60">Sales-Driven Campaigns</div>
                    </div>
                  </div>

                  {/* Floating Metric 2 */}
                  <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-brand border border-brand-light-gray flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/15 flex items-center justify-center text-brand-cyan">
                      <ShieldCheck className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-brand-charcoal">360° Creative Hub</div>
                      <div className="text-[10px] text-brand-charcoal/60">Tripureshwor, Kathmandu</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHO WE ARE                                                            */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Authentic Agency Profile */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue">
                <span className="w-6 h-0.5 bg-brand-blue"></span>
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
                A Creative Partner for Your Brand.
              </h2>

              <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed font-normal">
                <strong>Infinity Advertising Pvt. Ltd.</strong> is a full-fledged advertising agency involved in creating, planning and handling advertising and promotional strategies to build precise brand recognition for clients' products and services.
              </p>

              <p className="text-sm sm:text-base text-brand-charcoal/75 leading-relaxed">
                We combine strategic vision, bold creative ideas, brand communication, multi-platform advertising solutions, and rigorous technical execution into business-focused campaigns that deliver measurable market impact.
              </p>

              {/* Approach Pillars Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: "Original Strategic Methods", desc: "Rigorous research into consumer behavior, audience psychology, and competitive positioning." },
                  { title: "Creative Thinking", desc: "Inventive ideas that cut through clutter and capture public imagination." },
                  { title: "Advertising & Promotional Planning", desc: "Comprehensive ATL & BTL media planning engineered for maximum reach." },
                  { title: "Execution & Technical Excellence", desc: "High-standard design, studio-grade AV production, and flawless deliverables." },
                  { title: "Sales-Driven Creative Solutions", desc: "Creativity focused on driving revenue, market share, and long-term customer loyalty." },
                  { title: "End-to-End Campaign Management", desc: "From concept creation to final broadcast, print, and on-ground deployment." },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-brand-light/50 border border-brand-light-gray flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-brand-charcoal">{item.title}</h3>
                      <p className="text-xs text-brand-charcoal/70 mt-1 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Infographic & Agency Snapshot */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-brand-charcoal via-brand-charcoal to-brand-charcoal-dark text-white p-8 shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-6 translate-x-6 w-36 h-36 bg-brand-blue/25 rounded-full blur-2xl" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold">Agency Credentials</span>
                    <span className="text-xs text-white/60">Verified Profile</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3.5">
                      <Building2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-white/60">Registered Office</div>
                        <div className="text-sm font-semibold text-white">{COMPANY_INFO.address}</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5">
                      <Palette className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-white/60">Core Expertise</div>
                        <div className="text-sm font-semibold text-white">Brand Development • 360° Advertising • Event Management</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5">
                      <Video className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-white/60">Dedicated Audio-Visual Studio</div>
                        <div className="text-sm font-semibold text-white">Dream Vision Studio (Commercial TVC & Sound Recording)</div>
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

              {/* Sister Studio Facility Callout */}
              <div className="p-6 rounded-2xl bg-brand-light border border-brand-light-gray shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm text-brand-charcoal">Studio-Grade Audio-Visual Setup</h3>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue font-semibold">In-House Quality</span>
                </div>
                <p className="text-xs text-brand-charcoal/75 leading-relaxed">
                  Through sister facility Dream Vision Studio, Infinity guarantees TV commercials, radio jingles, and commercial photography with precision fidelity.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR PHILOSOPHY                                                        */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-brand-light/50 border-y border-brand-light-gray/60 relative">
        <InfinityBackground variant="subtle" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
              <span className="w-6 h-0.5 bg-brand-blue"></span>
              <span>Our Philosophy</span>
              <span className="w-6 h-0.5 bg-brand-blue"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Results That Matter. Growth That Lasts.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-charcoal/75 leading-relaxed">
              At Infinity, we believe that creativity without commercial intent is merely decorative. Our core philosophy centers on delivering measurable results that support sustainable and profitable growth.
            </p>
          </div>

          {/* Philosophy Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PHILOSOPHY_PILLARS.map((pillar) => (
              <div 
                key={pillar.number}
                className="group bg-white rounded-3xl p-8 border border-brand-light-gray shadow-card hover:border-brand-blue/30 hover:shadow-brand transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-brand-blue font-mono">
                      {pillar.number}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <TrendingUp className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-light-gray/60 flex items-center text-xs font-semibold text-brand-blue">
                  <span>Client-Centered Value</span>
                </div>
              </div>
            ))}

            {/* Philosophy Highlight Summary Card */}
            <div className="bg-gradient-to-br from-brand-blue to-brand-cyan rounded-3xl p-8 text-white shadow-brand flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-white/80 block mb-3">
                  The Infinity Commitment
                </span>
                <h3 className="text-2xl font-extrabold text-white leading-tight mb-4">
                  Optimum Return on Marketing Investment
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  We interrogate business goals before recommending media channels. By aligning strategic messaging with customer buying behavior, we deliver effective advertising solutions tailored to Nepal's commercial landscape.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Sustainable Growth</span>
                <Sparkles className="w-5 h-5 text-white/90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR APPROACH                                                           */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
              <span className="w-6 h-0.5 bg-brand-blue"></span>
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Creativity Guided by Strategy.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-charcoal/75 leading-relaxed">
              We combine creative thinking with strategic planning and professional execution to solve real business challenges. Four core principles guide every brief we undertake.
            </p>
          </div>

          {/* 4 Visual Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Strategic Thinking",
                subtitle: "Rigorous Business Analysis",
                desc: "We analyze market position, competitors, audience demographics, and commercial hurdles before creative inception.",
                icon: Target,
                color: "text-brand-blue",
                bg: "bg-brand-blue/10"
              },
              {
                step: "02",
                title: "Creative Ideas",
                subtitle: "Inventive Storytelling",
                desc: "We craft unexpected concepts and distinct visual narratives that captivate consumer attention across media channels.",
                icon: Lightbulb,
                color: "text-brand-cyan",
                bg: "bg-brand-cyan/15"
              },
              {
                step: "03",
                title: "Technical Excellence",
                subtitle: "Studio-Grade Craft",
                desc: "From commercial video production to print collateral, our in-house craftsmanship ensures flawless production fidelity.",
                icon: Cpu,
                color: "text-brand-blue",
                bg: "bg-brand-blue/10"
              },
              {
                step: "04",
                title: "Measurable Results",
                subtitle: "Commercial Impact",
                desc: "We focus on revenue generation, brand recall, and measurable return on advertising investment for every partner.",
                icon: TrendingUp,
                color: "text-brand-cyan",
                bg: "bg-brand-cyan/15"
              }
            ].map((principle) => {
              const IconComp = principle.icon;
              return (
                <div
                  key={principle.step}
                  className="rounded-3xl p-7 bg-white border border-brand-light-gray shadow-card hover:shadow-brand hover:border-brand-blue/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${principle.bg} flex items-center justify-center ${principle.color}`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-brand-charcoal/40">
                        {principle.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-brand-charcoal mb-1">
                      {principle.title}
                    </h3>
                    <div className="text-xs font-semibold text-brand-blue mb-3 uppercase tracking-wider">
                      {principle.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR PROCESS                                                           */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-brand-light/40 border-y border-brand-light-gray/60 relative overflow-hidden">
        <InfinityBackground variant="subtle" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
              <span className="w-6 h-0.5 bg-brand-blue"></span>
              <span>Our Process</span>
              <span className="w-6 h-0.5 bg-brand-blue"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              From First Idea to Final Execution.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-charcoal/75 leading-relaxed">
              Our structured 5-step methodology ensures every campaign is strategic, creative, and executed with technical precision on time and within budget.
            </p>
          </div>

          {/* 5-Step Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {PROCESS_STEPS.map((step, index) => {
              const getProcessIcon = (iconName: string) => {
                switch (iconName) {
                  case 'Ear': return <Ear className="w-6 h-6 text-brand-blue" />;
                  case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-brand-cyan" />;
                  case 'Cpu': return <Cpu className="w-6 h-6 text-brand-blue" />;
                  case 'Layers': return <Layers className="w-6 h-6 text-brand-cyan" />;
                  case 'Rocket': return <Rocket className="w-6 h-6 text-brand-blue" />;
                  default: return <Sparkles className="w-6 h-6 text-brand-blue" />;
                }
              };

              return (
                <div 
                  key={step.step}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-light-gray shadow-card hover:border-brand-blue/30 hover:shadow-brand transition-all duration-300 flex flex-col justify-between relative group"
                >
                  <div>
                    {/* Top row with step number and icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center group-hover:scale-110 transition-transform">
                        {getProcessIcon(step.icon)}
                      </div>
                      <span className="text-xs font-mono font-extrabold text-brand-charcoal/40 bg-brand-light px-2.5 py-1 rounded-full">
                        {step.step}
                      </span>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-1">
                      {step.name}
                    </div>

                    <h3 className="text-lg font-bold text-brand-charcoal mb-3">
                      {step.title}
                    </h3>

                    <p className="text-xs text-brand-charcoal/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Flow Indicator Arrow for larger screens */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-brand-light-gray shadow-sm flex items-center justify-center text-brand-blue">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PEOPLE                                                            */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Heading & Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue">
                <span className="w-6 h-0.5 bg-brand-blue"></span>
                <span>Our People</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
                Creative Minds. One Shared Purpose.
              </h2>

              <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed font-normal">
                At Infinity Advertising, our strength lies in a collaborative team of passionate strategists, copywriters, visual artists, and event planners united by a commitment to client growth.
              </p>

              <div className="p-6 rounded-3xl bg-brand-light/60 border border-brand-light-gray space-y-3">
                <div className="flex items-center space-x-2.5 text-brand-blue font-bold text-sm">
                  <Award className="w-5 h-5 text-brand-cyan" />
                  <span>The Infinity Team Culture</span>
                </div>
                <p className="text-xs text-brand-charcoal/75 leading-relaxed">
                  We blend deep localized market know-how with contemporary international creative standards. Our team is accessible, punctual, and driven by tangible outcomes.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-brand-blue hover:text-brand-cyan transition-colors"
                >
                  <span>Connect with Our Strategy Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Team Values Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PEOPLE_VALUES.map((val, idx) => {
                const getValIcon = (iconName: string) => {
                  switch (iconName) {
                    case 'Sparkles': return <Sparkles className="w-5 h-5 text-brand-blue" />;
                    case 'Clock': return <Clock className="w-5 h-5 text-brand-cyan" />;
                    case 'Smile': return <Smile className="w-5 h-5 text-brand-blue" />;
                    case 'MapPin': return <MapPin className="w-5 h-5 text-brand-cyan" />;
                    case 'Award': return <Award className="w-5 h-5 text-brand-blue" />;
                    case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-brand-cyan" />;
                    default: return <Sparkles className="w-5 h-5 text-brand-blue" />;
                  }
                };

                return (
                  <div 
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-brand-light-gray shadow-card hover:border-brand-blue/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center mb-4">
                        {getValIcon(val.icon)}
                      </div>
                      <h3 className="font-bold text-base text-brand-charcoal mb-2">
                        {val.title}
                      </h3>
                      <p className="text-xs text-brand-charcoal/70 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. OUR CLIENTS PREVIEW                                                    */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-brand-light/30 border-y border-brand-light-gray/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
                <span className="w-6 h-0.5 bg-brand-blue"></span>
                <span>Our Clients</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
                Built on Collaboration and Trust.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
                We value every partnership and believe successful brands are built through sustained collaboration, creative integrity, and mutual trust.
              </p>
            </div>

            <Link
              to="/clients"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-hover shadow-brand transition-all"
            >
              <span>View All 24 Clients</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Client Preview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {previewClients.map((client) => (
              <div
                key={client.id}
                className="group p-6 rounded-2xl bg-white border border-brand-light-gray shadow-card hover:border-brand-blue/30 hover:shadow-brand transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-brand-charcoal/40">
                      #{client.id < 10 ? `0${client.id}` : client.id}
                    </span>
                    <Handshake className="w-4 h-4 text-brand-blue/60 group-hover:text-brand-blue transition-colors" />
                  </div>
                  <h3 className="font-bold text-base text-brand-charcoal group-hover:text-brand-blue transition-colors mb-1">
                    {client.name}
                  </h3>
                  <div className="text-[11px] font-semibold text-brand-cyan uppercase tracking-wider">
                    {client.category}
                  </div>
                </div>

                <p className="mt-3 pt-3 border-t border-brand-light-gray/60 text-[11px] text-brand-charcoal/65 leading-tight">
                  {client.highlight}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/clients"
              className="inline-flex items-center space-x-2 text-sm font-bold text-brand-blue hover:text-brand-cyan transition-colors"
            >
              <span>Explore full client list and verified corporate partnerships</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CALL TO ACTION                                                        */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-charcoal via-brand-charcoal to-brand-charcoal-dark text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-cyan text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let's Build Something Extraordinary Together.
          </h2>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-normal">
            Have an idea, a brand or a project in mind? Let's collaborate and bring your vision to life.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold text-base shadow-brand-lg hover:shadow-brand hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-base border border-white/20 hover:bg-white/20 hover:text-brand-cyan transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Our Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Contact Micro-Details */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-white/70">
            <div>
              <span className="text-white/40 block">Phone:</span>
              <span className="font-semibold text-white">{COMPANY_INFO.phone}</span>
            </div>
            <div>
              <span className="text-white/40 block">Direct Email:</span>
              <span className="font-semibold text-white">{COMPANY_INFO.email}</span>
            </div>
            <div>
              <span className="text-white/40 block">Location:</span>
              <span className="font-semibold text-white">Tripureshwor, Kathmandu</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
