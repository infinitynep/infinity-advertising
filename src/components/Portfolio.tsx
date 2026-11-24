import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter, ShieldAlert } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/companyData';
import type { PortfolioProject } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

interface PortfolioProps {
  onInquireProject?: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onInquireProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

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
    <section id="portfolio" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
              <span className="w-6 h-0.5 bg-brand-blue"></span>
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Our Portfolio
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
              Explore our creative work across brand strategy, commercial campaigns, and experiential productions.
            </p>
          </div>

          {/* Transparent Agency Disclosure notice */}
          <div className="p-3 rounded-2xl bg-brand-light border border-brand-light-gray max-w-sm text-xs text-brand-charcoal/70">
            <div className="flex items-center space-x-1.5 font-bold text-brand-charcoal mb-0.5">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              <span>Agency Portfolio Notice</span>
            </div>
            Includes genuine agency print archives alongside clearly identified demonstration showcase items easily updated with new campaigns.
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none" aria-label="Portfolio Categories">
          <div className="flex items-center pr-2 text-xs font-bold text-brand-charcoal/50 uppercase tracking-wider shrink-0">
            <Filter className="w-3.5 h-3.5 mr-1" />
            <span>Filter:</span>
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
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-brand-light/50 border border-brand-light-gray hover:border-brand-blue/30 shadow-card hover:shadow-brand transition-all duration-300 flex flex-col"
              >
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
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-brand-charcoal text-[11px] font-bold shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Demo/Archive Badge */}
                  {project.isDemo && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/90 text-white text-[10px] font-semibold">
                        Demo
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-white uppercase tracking-wider">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 text-brand-cyan" />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-1">
                      {project.client}
                    </div>
                    <h3 className="text-lg font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-brand-charcoal/70 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-brand-light-gray/60 flex items-center justify-between text-xs text-brand-charcoal/60">
                    <span>{project.deliverables[0] || 'Agency Deliverable'}</span>
                    <Sparkles className="w-3.5 h-3.5 text-brand-cyan group-hover:rotate-12 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquireProject={onInquireProject}
        />

      </div>
    </section>
  );
};
