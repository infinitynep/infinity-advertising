import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Clock, 
  Calendar, 
  Sparkles, 
  Search, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { ARTICLES } from '../data/companyData';
import { SEO } from '../components/SEO';
import { InfinityBackground } from '../components/InfinityBackground';

export const InsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(6);

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

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const displayedArticles = filteredArticles.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Insights & Perspectives — Creative Advertising Articles"
        description="Explore ideas, creative perspectives and insights from the world of branding, advertising, media planning, and communication in Nepal."
        canonicalPath="/insights"
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-brand-light/60 via-white to-white overflow-hidden">
        <InfinityBackground variant="hero" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal/60 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-blue">Insights</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold tracking-wide mb-4">
              <BookOpen className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Thought Leadership & Industry Trends</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              Ideas. Perspectives.{' '}
              <span className="text-gradient">Inspiration.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-brand-charcoal-light leading-relaxed">
              Explore ideas, creative perspectives and insights from the world of branding, advertising and communication.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Article Card */}
          {featuredArticle && selectedCategory === 'All' && !searchQuery && (
            <div className="mb-16">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-4 flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Featured Perspective</span>
              </div>

              <Link
                to={`/insights/${featuredArticle.slug}`}
                className="group block rounded-3xl overflow-hidden bg-brand-light/60 border border-brand-light-gray hover:border-brand-blue/30 shadow-card hover:shadow-brand transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 relative aspect-[16/10] lg:h-full overflow-hidden bg-brand-charcoal/5">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-brand-blue text-white text-[11px] font-bold shadow-sm">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-4">
                  <div className="flex items-center space-x-3 text-xs text-brand-charcoal/60">
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

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal group-hover:text-brand-blue transition-colors leading-snug">
                    {featuredArticle.title}
                  </h2>

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
              </Link>
            </div>
          )}

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-brand-light-gray">
            
            {/* Category Filter Tabs */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(6);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 ${
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

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-brand-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles & topics..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs bg-brand-light/60 border border-brand-light-gray focus:outline-none focus:bg-white focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((article) => {
              return (
                <Link
                  key={article.id}
                  to={`/insights/${article.slug}`}
                  className="group block rounded-3xl overflow-hidden bg-brand-light/50 border border-brand-light-gray hover:border-brand-blue/30 shadow-card hover:shadow-brand transition-all duration-300 flex flex-col justify-between"
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
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-brand-charcoal text-[11px] font-bold shadow-sm">
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

                      <h2 className="text-lg font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h2>

                      <p className="mt-2.5 text-xs sm:text-sm text-brand-charcoal/70 line-clamp-2 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-brand-blue group-hover:text-brand-cyan transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16 text-sm text-brand-charcoal/60">
              No articles found matching "{searchQuery}".
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < filteredArticles.length && (
            <div className="text-center pt-12">
              <button
                type="button"
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="px-8 py-3.5 rounded-full bg-white border border-brand-light-gray hover:border-brand-blue text-brand-charcoal text-xs font-bold hover:shadow-card transition-all"
              >
                Load More Articles
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
