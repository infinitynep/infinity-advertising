import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  Filter, 
  ShieldAlert, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/companyData';
import { SEO } from '../components/SEO';
import { InfinityBackground } from '../components/InfinityBackground';

export const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Branding',
    'Advertising Campaigns',
    'Digital Campaigns',
    'Event Management',
    'Photography',
    'Videography'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Our Portfolio — Selected Advertising & Branding Work"
        description="Explore Infinity Advertising's creative portfolio across Brand Identity, Print Advertising Campaigns, Digital Marketing, Sports Events, Commercial Photography, and TVCs in Nepal."
        canonicalPath="/portfolio"
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-brand-light/60 via-white to-white overflow-hidden">
        <InfinityBackground variant="hero" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal/60 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-blue">Portfolio</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold tracking-wide mb-4">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Selected Creative Showcase</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
                Our Creativity.{' '}
                <span className="text-gradient">Your Inspiration.</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-brand-charcoal-light leading-relaxed">
                Discover our work across brand strategy, commercial advertising campaigns, digital performance creatives, and experiential event design.
              </p>
            </div>

            {/* Transparent Agency Disclosure notice */}
            <div className="p-4 rounded-2xl bg-brand-light border border-brand-light-gray max-w-sm text-xs text-brand-charcoal/70 shrink-0">
              <div className="flex items-center space-x-1.5 font-bold text-brand-charcoal mb-1">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Showcase Archive & Demonstration Notice</span>
              </div>
              Projects feature authentic agency print work alongside clearly labelled demonstration placeholders that can be updated as new campaigns release.
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Section */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12 scrollbar-none" aria-label="Portfolio Categories">
            <div className="flex items-center pr-2 text-xs font-bold text-brand-charcoal/50 uppercase tracking-wider shrink-0">
              <Filter className="w-3.5 h-3.5 mr-1" />
              <span>Filter Work:</span>
            </div>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
                    isActive
                      ? 'bg-brand-charcoal text-white shadow-card'
                      : 'bg-brand-light text-brand-charcoal/70 hover:bg-brand-light-gray hover:text-brand-charcoal'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Portfolio Masonry / Modern Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              return (
                <Link
                  key={project.id}
                  to={`/portfolio/${project.id}`}
                  className="group block rounded-3xl overflow-hidden bg-brand-light/50 border border-brand-light-gray hover:border-brand-blue/30 shadow-card hover:shadow-brand transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand-charcoal/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      
                      {/* Category Pill */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-brand-charcoal text-[11px] font-bold shadow-sm">
                          {project.category}
                        </span>
                      </div>

                      {/* Demo/Archive Badge */}
                      {project.isDemo && (
                        <div className="absolute top-4 right-4 z-10">
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/90 text-white text-[10px] font-semibold">
                            Demo Showcase
                          </span>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-white uppercase tracking-wider">
                          <span>View Case Study Details</span>
                          <ArrowUpRight className="w-4 h-4 text-brand-cyan" />
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-1">
                        {project.client}
                      </div>
                      <h2 className="text-lg font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors line-clamp-1">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-xs text-brand-charcoal/70 line-clamp-2 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-brand-light-gray/60 flex items-center justify-between text-xs text-brand-charcoal/60">
                    <span>{project.deliverables[0] || 'Deliverable'}</span>
                    <span className="font-bold text-brand-blue group-hover:text-brand-cyan flex items-center space-x-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-brand-light border border-brand-light-gray flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl font-bold text-brand-charcoal">Have a Project in Mind?</h2>
              <p className="text-sm text-brand-charcoal/70 max-w-xl">
                Let's create a customized branding or advertising campaign engineered to move your business forward.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-bold shadow-brand hover:shadow-brand-lg transition-all shrink-0"
            >
              Start Your Project Inquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
