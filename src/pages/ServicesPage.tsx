import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Megaphone, 
  CalendarCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { InfinityBackground } from '../components/InfinityBackground';

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Our Services — Brand Development, Advertising & Event Management"
        description="Explore the full spectrum of services offered by Infinity Advertising in Kathmandu, Nepal: Strategic Brand Development, 360° ATL & BTL Advertising Solutions, and Turnkey Event Management."
        canonicalPath="/services"
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-brand-light/60 via-white to-white overflow-hidden">
        <InfinityBackground variant="hero" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal/60 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-blue">Services</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold tracking-wide mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Full-Service Agency Capabilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              Creative Solutions.{' '}
              <span className="text-gradient">Powerful Brand Experiences.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-brand-charcoal-light leading-relaxed">
              We combine strategic sales thinking with creative execution and technical excellence to build memorable brands, high-impact campaigns, and successful events across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Service Sections */}
      <div className="space-y-24 lg:space-y-36 pb-28">

        {/* 01. Brand Development */}
        <section id="brand-development" className="relative scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Editorial Information */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Compass className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue">
                      Service Pillar 01
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
                      Brand Development
                    </h2>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed">
                  We provide unique services in developing and identifying new brands, selling techniques used in maximizing revenues, packaging/bundling and brand communication elements. Our objective is to support businesses in achieving measurable commercial targets.
                </p>

                {/* Offerings Checklist */}
                <div className="pt-2">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-brand-charcoal/60 mb-4">
                    Core Capabilities Included:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      "Brand Strategy",
                      "Brand Naming",
                      "Brand Identity and Logo Design",
                      "Slogan Development",
                      "Brand Communication",
                      "Marketing Collateral",
                      "Brochures and Newsletters",
                      "Sales Kits and Presentations"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-brand-light/70 border border-brand-light-gray text-xs sm:text-sm font-medium text-brand-charcoal">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables Summary Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-light to-white border border-brand-light-gray space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-brand-blue uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Tangible Outputs</span>
                  </div>
                  <p className="text-xs text-brand-charcoal/70 leading-relaxed">
                    Brand Identity Manuals, Vector Logo Suites (CMYK, RGB, App Icons), Print-Ready Stationery Sets, Sales Pitch Decks, and Bilingual (Nepali/English) Messaging Frameworks.
                  </p>
                </div>

                {/* Direct CTA */}
                <div className="pt-2">
                  <Link
                    to="/contact?service=Brand%20Development"
                    className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-brand-charcoal hover:bg-brand-blue text-white text-sm font-semibold transition-all duration-300 shadow-sm"
                  >
                    <span>Inquire About Brand Development</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Showcase Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden bg-brand-light border border-brand-light-gray shadow-card group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="/assets/portfolio/1.jpg"
                      alt="Brand Development Showcase"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-white space-y-2">
                    <div className="text-xs font-bold text-brand-blue uppercase tracking-wider">Showcase Focus</div>
                    <div className="font-bold text-base text-brand-charcoal">Corporate Identity & Collateral Architecture</div>
                    <p className="text-xs text-brand-charcoal/70">
                      Cohesive visual systems engineered to build institutional credibility and command price authority in competitive markets.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 02. Advertising Solutions */}
        <section id="advertising-solutions" className="relative scroll-mt-28 bg-brand-light/30 py-20 lg:py-28 border-y border-brand-light-gray/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Visual Showcase Card (Desktop Ordering) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden bg-white border border-brand-light-gray shadow-card group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="/assets/portfolio/4.jpg"
                      alt="Advertising Solutions Showcase"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-white space-y-2">
                    <div className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Showcase Focus</div>
                    <div className="font-bold text-base text-brand-charcoal">360° Out-of-Home & Multimedia Placement</div>
                    <p className="text-xs text-brand-charcoal/70">
                      Synchronized arterial hoardings, national broadsheets, and high-velocity digital campaigns that maximize recall and conversion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Information */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                    <Megaphone className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-cyan">
                      Service Pillar 02
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
                      Advertising Solutions
                    </h2>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed">
                  At Infinity, advertising is considered the main vehicle that carries our sales driven concepts to the target audience. We deliver value to our clients with our original strategic and creative sales thinking, backed up by creative design and technical excellence.
                </p>

                {/* Offerings Checklist */}
                <div className="pt-2">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-brand-charcoal/60 mb-4">
                    Core Capabilities Included:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      "Strategic ATL Campaigns",
                      "Newspaper and Magazine Advertising",
                      "Radio Jingles and Radio Spots",
                      "Television Commercials",
                      "Digital and Social Media Advertising",
                      "Hoardings and Pole Banners",
                      "Point-of-Purchase Materials",
                      "Photography and Videography"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-white border border-brand-light-gray text-xs sm:text-sm font-medium text-brand-charcoal shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="pt-2">
                  <Link
                    to="/contact?service=Advertising%20Solutions"
                    className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-brand-charcoal hover:bg-brand-blue text-white text-sm font-semibold transition-all duration-300 shadow-sm"
                  >
                    <span>Inquire About Advertising Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 03. Event Management */}
        <section id="event-management" className="relative scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Editorial Information */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-charcoal/10 flex items-center justify-center text-brand-charcoal">
                    <CalendarCheck className="w-7 h-7 text-brand-blue" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue">
                      Service Pillar 03
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
                      Event Management
                    </h2>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed">
                  We provide holistic event management solutions tailored directly to institutional and commercial objectives. We blend creative planning, seamless on-ground coordination, and targeted advertising support to deliver memorable live brand engagements.
                </p>

                {/* Offerings Checklist */}
                <div className="pt-2">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-brand-charcoal/60 mb-4">
                    Core Capabilities Included:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {[
                      "Event Management Solutions",
                      "Creative Planning and Coordination",
                      "Promotional Event Support"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-xl bg-brand-light/70 border border-brand-light-gray text-xs sm:text-sm font-semibold text-brand-charcoal">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-brand-light/50 border border-brand-light-gray text-xs text-brand-charcoal/70 leading-relaxed">
                  <strong className="text-brand-charcoal font-semibold block mb-1">Authentic Event Support</strong>
                  From athletic tournaments and national sports leagues to corporate seminars and annual ceremonies, Infinity orchestrates stage backdrops, entry arch fabrication, delegate branding, media briefing coordination, and post-event publicity.
                </div>

                {/* Direct CTA */}
                <div className="pt-2">
                  <Link
                    to="/contact?service=Event%20Management"
                    className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-brand-charcoal hover:bg-brand-blue text-white text-sm font-semibold transition-all duration-300 shadow-sm"
                  >
                    <span>Inquire About Event Management</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Showcase Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden bg-brand-light border border-brand-light-gray shadow-card group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="/assets/portfolio/7.jpg"
                      alt="Event Management Showcase"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-white space-y-2">
                    <div className="text-xs font-bold text-brand-blue uppercase tracking-wider">Showcase Focus</div>
                    <div className="font-bold text-base text-brand-charcoal">Stadium Branding & Tournament Coordination</div>
                    <p className="text-xs text-brand-charcoal/70">
                      Turnkey event design including entrance archways, perimeter banners, stage fabrication, and press backdrops.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* Global Bottom CTA Card */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-brand-charcoal via-brand-charcoal-dark to-brand-charcoal text-white relative overflow-hidden shadow-premium">
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold">
                Start a Collaboration
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to Move Your Brand Forward?
              </h2>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                Whether you need a complete corporate rebranding, a national multimedia advertising campaign, or professional event coordination, our Kathmandu team is ready to discuss your objectives.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-bold shadow-brand hover:shadow-brand-lg transition-all"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/portfolio"
                  className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                >
                  View Selected Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
