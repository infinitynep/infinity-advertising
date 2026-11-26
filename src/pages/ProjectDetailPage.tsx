import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Tag, 
  ShieldAlert, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/companyData';
import { SEO } from '../components/SEO';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.id === id);
  const project = PORTFOLIO_PROJECTS[projectIndex];

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-extrabold text-brand-charcoal mb-4">Project Not Found</h1>
        <p className="text-sm text-brand-charcoal/70 mb-6">
          The requested portfolio project could not be located.
        </p>
        <Link
          to="/portfolio"
          className="px-6 py-2.5 rounded-full bg-brand-blue text-white text-xs font-bold shadow-brand"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? PORTFOLIO_PROJECTS[projectIndex - 1] : null;
  const nextProject = projectIndex < PORTFOLIO_PROJECTS.length - 1 ? PORTFOLIO_PROJECTS[projectIndex + 1] : null;

  const allImages = [project.image, ...(project.additionalImages || [])];
  const displayImage = selectedImage || project.image;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${project.title} — Portfolio`}
        description={project.summary}
        canonicalPath={`/portfolio/${project.id}`}
      />

      {/* Top Breadcrumb & Navigation Bar */}
      <div className="border-b border-brand-light-gray/60 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <nav className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal/60" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/portfolio" className="hover:text-brand-blue transition-colors">Portfolio</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-blue truncate max-w-[200px] sm:max-w-none">{project.title}</span>
          </nav>

          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-blue hover:text-brand-cyan transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Work</span>
          </Link>
        </div>
      </div>

      {/* Project Main Showcase */}
      <article className="pt-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Project Title & Key Metadata */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-brand-light text-brand-blue font-bold text-xs">
                {project.category}
              </span>
              {project.isDemo ? (
                <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Demonstration Showcase Placeholder</span>
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                  Showcase Archive
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              {project.title}
            </h1>

            <div className="flex items-center space-x-4 text-xs sm:text-sm text-brand-charcoal/70 pt-1">
              <span>Client / Sector: <strong className="text-brand-charcoal">{project.client}</strong></span>
              <span>•</span>
              <span>Year: <strong className="text-brand-charcoal">{project.year || 'Showcase'}</strong></span>
            </div>
          </div>

          {/* Hero Image Showcase */}
          <div className="space-y-4">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden bg-brand-charcoal/5 border border-brand-light-gray shadow-card flex items-center justify-center">
              <img
                src={displayImage}
                alt={project.title}
                className="w-full h-full object-contain sm:object-cover transition-all duration-300"
              />
            </div>

            {/* Gallery Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      displayImage === img ? 'border-brand-blue scale-105 shadow-sm' : 'border-brand-light-gray opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6 border-t border-brand-light-gray">
            
            {/* Left 8 Cols: Narrative, Challenge, Solution */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-brand-charcoal mb-3">Project Summary</h2>
                <p className="text-base text-brand-charcoal/80 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-brand-light/60 border border-brand-light-gray space-y-2">
                  <div className="text-xs font-bold text-brand-blue uppercase tracking-wider flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-brand-blue" />
                    <span>The Challenge</span>
                  </div>
                  <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-brand-light/60 border border-brand-light-gray space-y-2">
                  <div className="text-xs font-bold text-brand-cyan uppercase tracking-wider flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                    <span>The Creative Solution</span>
                  </div>
                  <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Deliverables & Inquiry CTA */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-brand-light-gray shadow-card space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-charcoal flex items-center space-x-2">
                  <Tag className="w-4 h-4 text-brand-blue" />
                  <span>Delivered Assets</span>
                </div>
                <div className="space-y-2">
                  {project.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2.5 text-xs text-brand-charcoal/80">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-brand-light-gray">
                  <Link
                    to={`/contact?project=${encodeURIComponent(project.title)}`}
                    className="w-full py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold shadow-brand flex items-center justify-center space-x-2"
                  >
                    <span>Request Similar Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Next / Previous Project Navigation */}
          <div className="pt-10 border-t border-brand-light-gray flex items-center justify-between">
            {prevProject ? (
              <Link
                to={`/portfolio/${prevProject.id}`}
                className="flex items-center space-x-2 text-xs font-bold text-brand-charcoal hover:text-brand-blue transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous: {prevProject.title}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : <div />}

            {nextProject && (
              <Link
                to={`/portfolio/${nextProject.id}`}
                className="flex items-center space-x-2 text-xs font-bold text-brand-charcoal hover:text-brand-blue transition-colors ml-auto"
              >
                <span className="hidden sm:inline">Next: {nextProject.title}</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>

        </div>
      </article>
    </div>
  );
};
