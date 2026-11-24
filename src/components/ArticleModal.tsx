import React, { useState } from 'react';
import { X, Clock, Calendar, Share2, Check, ArrowRight, Bookmark } from 'lucide-react';
import type { ArticleItem } from '../types';
import { ARTICLES } from '../data/companyData';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onSelectArticle: (article: ArticleItem) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onSelectArticle
}) => {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-brand-charcoal/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-article-title"
    >
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-brand-light-gray flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-white border-b border-brand-light-gray p-4 sm:p-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-semibold">
            <span className="px-3 py-1 rounded-full bg-brand-light text-brand-blue">
              {article.category}
            </span>
            <span className="text-brand-charcoal/40">•</span>
            <span className="text-brand-charcoal/60 flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
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

        {/* Article Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
          
          {/* Article Title & Metadata */}
          <div className="space-y-4">
            <h2 id="modal-article-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-charcoal leading-tight">
              {article.title}
            </h2>

            <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-brand-light-gray text-xs text-brand-charcoal/70">
              <div className="flex items-center space-x-4">
                <span>By <strong className="text-brand-charcoal">{article.author}</strong></span>
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.publishDate}</span>
                </span>
              </div>

              {/* Social Share Controls */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-brand-light hover:bg-brand-blue hover:text-white transition-colors text-xs font-semibold"
                  title="Copy link to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Link Copied' : 'Share'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-brand-light border border-brand-light-gray">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Summary Lead */}
          <p className="text-base sm:text-lg text-brand-charcoal font-medium leading-relaxed italic border-l-4 border-brand-cyan pl-4 py-1">
            {article.summary}
          </p>

          {/* Full Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-brand-charcoal/85 leading-relaxed font-normal">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Article Tags */}
          <div className="pt-6 border-t border-brand-light-gray">
            <div className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal/60 mb-3">
              <Bookmark className="w-3.5 h-3.5" />
              <span>Related Topics</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-full bg-brand-light border border-brand-light-gray text-xs font-medium text-brand-charcoal/80"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles Suggestion */}
          {relatedArticles.length > 0 && (
            <div className="pt-6 border-t border-brand-light-gray">
              <h4 className="text-xs uppercase tracking-wider font-bold text-brand-charcoal/60 mb-4">
                Recommended Insights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectArticle(rel)}
                    className="p-4 rounded-2xl bg-brand-light/60 hover:bg-brand-light border border-brand-light-gray cursor-pointer transition-all space-y-1.5"
                  >
                    <span className="text-[10px] font-bold text-brand-blue uppercase">{rel.category}</span>
                    <h5 className="text-xs font-bold text-brand-charcoal hover:text-brand-blue transition-colors line-clamp-2">
                      {rel.title}
                    </h5>
                    <div className="text-[11px] text-brand-charcoal/50 flex items-center justify-between pt-1">
                      <span>{rel.readTime}</span>
                      <span className="font-semibold text-brand-blue flex items-center">
                        Read <ArrowRight className="w-3 h-3 ml-0.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-brand-light/80 border-t border-brand-light-gray flex items-center justify-between">
          <div className="text-xs text-brand-charcoal/60">
            Published by Infinity Advertising Editorial Desk
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-brand-charcoal hover:bg-white rounded-full transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
