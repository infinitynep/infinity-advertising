import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  Calendar, 
  Share2, 
  Check, 
  ArrowLeft, 
  ArrowRight, 
  Bookmark, 
  ChevronRight,
  User,
  MessageCircle
} from 'lucide-react';
import { ARTICLES } from '../data/companyData';
import { SEO } from '../components/SEO';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-extrabold text-brand-charcoal mb-4">Article Not Found</h1>
        <p className="text-sm text-brand-charcoal/70 mb-6">
          The requested insight article could not be located.
        </p>
        <Link
          to="/insights"
          className="px-6 py-2.5 rounded-full bg-brand-blue text-white text-xs font-bold shadow-brand"
        >
          Return to Insights
        </Link>
      </div>
    );
  }

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`${article.title} - Read on Infinity Advertising: ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${article.title} — Insights`}
        description={article.summary}
        canonicalPath={`/insights/${article.slug}`}
        ogType="article"
      />

      {/* Top Breadcrumb Bar */}
      <div className="border-b border-brand-light-gray/60 bg-brand-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <nav className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal/60" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/insights" className="hover:text-brand-blue transition-colors">Insights</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-blue truncate max-w-[200px] sm:max-w-none">{article.title}</span>
          </nav>

          <Link
            to="/insights"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-blue hover:text-brand-cyan transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </Link>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="pt-10 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header Metadata & Title */}
          <header className="space-y-4">
            <div className="flex items-center space-x-3 text-xs font-semibold">
              <span className="px-3.5 py-1 rounded-full bg-brand-light text-brand-blue">
                {article.category}
              </span>
              <span className="text-brand-charcoal/40">•</span>
              <span className="text-brand-charcoal/60 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              {article.title}
            </h1>

            {/* Author & Share Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-brand-light-gray text-xs text-brand-charcoal/70">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-blue">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-brand-charcoal">{article.author}</div>
                  <div className="text-[11px] text-brand-charcoal/50 flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{article.publishDate}</span>
                  </div>
                </div>
              </div>

              {/* Social Share Options */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-brand-light hover:bg-brand-blue hover:text-white transition-colors text-xs font-semibold"
                  title="Copy article link"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Share'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="p-1.5 rounded-full bg-brand-light hover:bg-emerald-500 hover:text-white text-brand-charcoal transition-colors"
                  title="Share on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>

          {/* Large Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-brand-light border border-brand-light-gray shadow-card">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Lead Summary */}
          <div className="p-6 rounded-2xl bg-brand-light/60 border-l-4 border-brand-blue text-base sm:text-lg text-brand-charcoal font-medium leading-relaxed italic">
            {article.summary}
          </div>

          {/* Formatted Article Content */}
          <div className="space-y-6 text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Article Topic Tags */}
          <div className="pt-6 border-t border-brand-light-gray">
            <div className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal/60 mb-3">
              <Bookmark className="w-3.5 h-3.5" />
              <span>Related Subjects</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3.5 py-1 rounded-full bg-brand-light border border-brand-light-gray text-xs font-medium text-brand-charcoal"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="pt-12 border-t border-brand-light-gray">
              <h2 className="text-xl font-bold text-brand-charcoal mb-6">
                Related Reading & Perspectives
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/insights/${rel.slug}`}
                    className="p-5 rounded-2xl bg-brand-light/50 hover:bg-brand-light border border-brand-light-gray transition-all space-y-2 block"
                  >
                    <span className="text-[10px] font-bold text-brand-blue uppercase">{rel.category}</span>
                    <h3 className="text-sm font-bold text-brand-charcoal hover:text-brand-blue transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <div className="text-[11px] text-brand-charcoal/50 flex items-center justify-between pt-2">
                      <span>{rel.readTime}</span>
                      <span className="font-semibold text-brand-blue flex items-center">
                        Read <ArrowRight className="w-3 h-3 ml-0.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Return CTA */}
          <div className="pt-8 flex justify-center">
            <Link
              to="/insights"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white border border-brand-light-gray hover:border-brand-blue text-xs font-bold text-brand-charcoal hover:text-brand-blue shadow-sm transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to All Insights</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
};
