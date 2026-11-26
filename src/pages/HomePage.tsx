import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Compass, 
  Megaphone, 
  CalendarCheck, 
  Sparkles,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Philosophy } from '../components/Philosophy';
import { Process } from '../components/Process';
import { People } from '../components/People';
import { Testimonials } from '../components/Testimonials';
import { SEO } from '../components/SEO';
import { SERVICES, PORTFOLIO_PROJECTS, CLIENTS, ARTICLES } from '../data/companyData';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Infinity Advertising Pvt. Ltd. | Creative Advertising & Branding Agency | Kathmandu, Nepal"
        description="Infinity Advertising Pvt. Ltd. is a premier creative advertising agency based in Tripureshwor, Kathmandu, Nepal. We provide strategic brand development, 360° advertising solutions, and creative event management that moves brands forward."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Overview Teaser */}
      <section className="py-20 lg:py-28 bg-brand-light/40 border-y border-brand-light-gray/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
                <span className="w-6 h-0.5 bg-brand-blue"></span>
                <span>Our Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
                Our Services
              </h2>
              <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
                Strategic brand formulation, full-spectrum ATL & BTL advertising solutions, and turnkey event coordination.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-sm font-bold text-brand-blue hover:text-brand-cyan transition-colors"
            >
              <span>Explore All Service Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const getIcon = (name: string) => {
                switch (name) {
                  case 'Compass':
                    return <Compass className="w-7 h-7 text-brand-blue" />;
                  case 'Megaphone':
                    return <Megaphone className="w-7 h-7 text-brand-cyan" />;
                  case 'CalendarCheck':
                    return <CalendarCheck className="w-7 h-7 text-brand-blue" />;
                  default:
                    return <Sparkles className="w-7 h-7 text-brand-blue" />;
                }
              };

              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-3xl p-8 shadow-card border border-brand-light-gray hover:border-brand-blue/30 hover:shadow-brand transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center group-hover:scale-110 transition-transform">
                        {getIcon(service.iconName)}
                      </div>
                      <span className="text-xs font-mono font-bold text-brand-charcoal/40">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-cyan mt-1 mb-3 uppercase tracking-wider">
                      {service.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="border-t border-brand-light-gray/70 pt-4 space-y-2 mb-6">
                      {service.offerings.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-brand-charcoal/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-blue group-hover:text-brand-cyan transition-colors pt-4 border-t border-brand-light-gray/60"
                  >
                    <span>Read Full Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Teaser */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
                <span className="w-6 h-0.5 bg-brand-blue"></span>
                <span>Creative Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
                Selected Portfolio
              </h2>
              <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
                A selection of our branding, advertising campaigns, and media productions.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 text-sm font-bold text-brand-blue hover:text-brand-cyan transition-colors"
            >
              <span>View Full Portfolio Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.slice(0, 6).map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group block rounded-3xl overflow-hidden bg-brand-light/50 border border-brand-light-gray hover:border-brand-blue/30 shadow-card hover:shadow-brand transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-charcoal/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-brand-charcoal text-[11px] font-bold shadow-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-white uppercase tracking-wider">
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4 text-brand-cyan" />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-1">
                    {project.client}
                  </div>
                  <h3 className="text-base font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-brand-charcoal/70 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <Philosophy />

      {/* Process Section */}
      <Process />

      {/* People / Culture Section */}
      <People />

      {/* Clients Teaser Grid */}
      <section className="py-20 lg:py-28 bg-brand-light/30 border-y border-brand-light-gray/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
                <span className="w-6 h-0.5 bg-brand-blue"></span>
                <span>Collaborative Network</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
                Our Valuable Clients
              </h2>
              <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
                Trusted by 24 leading public enterprises, educational institutions, healthcare leaders, and commercial innovators across Nepal.
              </p>
            </div>
            <Link
              to="/clients"
              className="inline-flex items-center space-x-2 text-sm font-bold text-brand-blue hover:text-brand-cyan transition-colors"
            >
              <span>View All 24 Partners</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {CLIENTS.slice(0, 12).map((client) => (
              <div
                key={client.id}
                className="p-4 rounded-2xl bg-white border border-brand-light-gray/80 hover:border-brand-blue/30 shadow-card flex flex-col justify-center text-center transition-all"
              >
                <div className="text-[10px] text-brand-charcoal/40 font-mono mb-1">
                  #{client.id < 10 ? `0${client.id}` : client.id}
                </div>
                <div className="text-xs font-bold text-brand-charcoal line-clamp-2">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Insights Teaser */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
                <span className="w-6 h-0.5 bg-brand-blue"></span>
                <span>Thought Leadership</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
                Latest Insights & Perspectives
              </h2>
              <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
                Analysis, market trends, and creative strategy insights from the advertising ecosystem in Nepal.
              </p>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center space-x-2 text-sm font-bold text-brand-blue hover:text-brand-cyan transition-colors"
            >
              <span>Explore All Insights</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.slice(0, 3).map((article) => (
              <Link
                key={article.id}
                to={`/insights/${article.slug}`}
                className="group block rounded-3xl overflow-hidden bg-brand-light/50 border border-brand-light-gray hover:border-brand-blue/30 shadow-card hover:shadow-brand transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-charcoal/5">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-brand-charcoal text-[11px] font-bold shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-[11px] text-brand-charcoal/60 mb-2">
                    {article.publishDate} • {article.readTime}
                  </div>
                  <h3 className="text-base font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs text-brand-charcoal/70 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Bottom CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-brand-charcoal via-brand-charcoal-dark to-brand-charcoal text-white relative overflow-hidden shadow-premium flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold">
                Let's Talk Business
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Create Something Extraordinary.
              </h2>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                Connect directly with our Kathmandu team to discuss your brand strategy, ATL/BTL advertising campaigns, or event management requirements.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-bold shadow-brand hover:shadow-brand-lg transition-all shrink-0 flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
