import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Tag, ShieldAlert } from 'lucide-react';
import type { PortfolioProject } from '../types';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onInquireProject?: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquireProject
}) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!project) return null;

  const currentDisplayImage = activeImage || project.image;
  const allImages = [project.image, ...(project.additionalImages || [])];

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-brand-charcoal/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-brand-light-gray flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-white border-b border-brand-light-gray p-4 sm:p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full bg-brand-light text-brand-blue font-bold text-xs">
              {project.category}
            </span>
            {project.isDemo ? (
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-semibold">
                <ShieldAlert className="w-3 h-3" />
                <span>Demonstration Showcase Placeholder</span>
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                Showcase Archive
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-brand-light text-brand-charcoal transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Main Showcase Hero Image */}
          <div className="space-y-4">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-brand-charcoal/5 border border-brand-light-gray flex items-center justify-center">
              <img
                src={currentDisplayImage}
                alt={project.title}
                className="w-full h-full object-contain sm:object-cover transition-all duration-300"
              />
            </div>

            {/* Gallery Thumbnails if additional images exist */}
            {allImages.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      currentDisplayImage === img ? 'border-brand-blue scale-105' : 'border-brand-light-gray opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Header Info */}
          <div>
            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal">
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-brand-charcoal/60 mt-1">
              Sector / Client Domain: <span className="text-brand-blue">{project.client}</span>
            </p>
            <p className="mt-3 text-base text-brand-charcoal/80 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-brand-light-gray">
            <div className="p-5 rounded-2xl bg-brand-light/70 border border-brand-light-gray space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-bold text-brand-charcoal flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue" />
                <span>The Challenge</span>
              </h4>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-light/70 border border-brand-light-gray space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-bold text-brand-charcoal flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                <span>The Creative Solution</span>
              </h4>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-brand-charcoal mb-3 flex items-center space-x-2">
              <Tag className="w-3.5 h-3.5 text-brand-blue" />
              <span>Project Deliverables</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.deliverables.map((item, dIdx) => (
                <span
                  key={dIdx}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-brand-light-gray text-xs font-medium text-brand-charcoal shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-brand-light/80 border-t border-brand-light-gray flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-brand-charcoal/60">
            Interested in similar branding, advertising or campaign solutions?
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-brand-charcoal hover:bg-white rounded-full transition-colors"
            >
              Back to Portfolio
            </button>
            <button
              type="button"
              onClick={() => {
                if (onInquireProject) onInquireProject(project.title);
                onClose();
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold shadow-brand hover:shadow-brand-lg transition-all flex items-center justify-center space-x-2"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
