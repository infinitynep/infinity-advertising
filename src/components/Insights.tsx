import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar, Sparkles } from 'lucide-react';
import { ARTICLES } from '../data/companyData';
import type { ArticleItem } from '../types';
import { ArticleModal } from './ArticleModal';

export const Insights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const categories = [
    'All',
    'Branding',
    'Advertising',
    'Digital Marketing',
    'Creative Thinking',
    'Event Management',
    'Industry Insights'
  ];

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const listArticles = ARTICLES.filter((a) => {
    const matchesCat = selectedCategory === 'All' || a.category === selectedCategory;
    return matchesCat;
  });

  return (
    <section id="insights" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
              <span className="w-6 h-0.5 bg-brand-blue"></span>
              <span>Thought Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Insights & Perspectives
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
              Analysis, market trends, and creative strategy insights from the advertising ecosystem in Kathmandu, Nepal.
            </p>
          </div>
        </div>

        {/* Featured Article Card */}
        {featuredArticle && selectedCategory === 'All' && (
          <div 
            onClick={() => setActiveArticle(featuredArticle)}
            className="mb-14 group cursor-pointer rounded-3xl overflow-hidden bg-brand-light/50 border border-brand-light-gray hover:border-brand-blue/30 shadow-card hover:shadow-brand transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            <div className="lg:col-span-6 relative aspect-[16/10] lg:h-full overflow-hidden bg-brand-charcoal/5">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-brand-blue text-white text-[11px] font-bold shadow-sm flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 text-brand-cyan" />
                  <span>Featured Analysis</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="flex items-center space-x-3 text-xs text-brand-charcoal/60">
                <span className="font-bold text-brand-blue uppercase">{featuredArticle.category}</span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featuredArticle.readTime}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{featuredArticle.publishDate}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors leading-snug">
                {featuredArticle.title}
              </h3>

              <p className="text-sm sm:text-base text-brand-charcoal/75 leading-relaxed">
                {featuredArticle.summary}
              </p>

              <div className="pt-2">
                <span className="inline-flex items-center space-x-2 text-sm font-bold text-brand-blue group-hover:text-brand-cyan transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
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

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listArticles.map((article) => {
            return (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-brand-light/50 border border-brand-light-gray hover:border-brand-blue/30 shadow-card hover:shadow-brand transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-charcoal/5">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-brand-charcoal text-[11px] font-bold shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-[11px] text-brand-charcoal/60 mb-2">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </span>
                      <span>•</span>
                      <span>{article.publishDate}</span>
                    </div>

                    <h3 className="text-lg font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-brand-charcoal/70 line-clamp-2 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-brand-blue group-hover:text-brand-cyan transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Article Reader Modal */}
        <ArticleModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
          onSelectArticle={(art) => setActiveArticle(art)}
        />

      </div>
    </section>
  );
};
