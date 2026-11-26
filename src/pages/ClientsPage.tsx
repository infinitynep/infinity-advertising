import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Tag, 
  ChevronRight, 
  ArrowRight,
  Handshake
} from 'lucide-react';
import { CLIENTS } from '../data/companyData';
import { SEO } from '../components/SEO';
import { InfinityBackground } from '../components/InfinityBackground';

export const ClientsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Telecom & Tech',
    'Education',
    'Healthcare & Pharma',
    'Tourism & Hospitality',
    'Coffee & Agriculture',
    'Manufacturing & Trade',
    'Corporate'
  ];

  const filteredClients = CLIENTS.filter((client) => {
    const matchesCategory = selectedCategory === 'All' || client.category === selectedCategory;
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (client.highlight && client.highlight.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Our Valuable Clients — Trusted Partnerships Across Nepal"
        description="Infinity Advertising takes immense pride in collaborating with leading telecommunications, education, healthcare, tourism, and manufacturing partners across Nepal."
        canonicalPath="/clients"
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-brand-light/60 via-white to-white overflow-hidden">
        <InfinityBackground variant="hero" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs font-semibold text-brand-charcoal/60 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-blue">Clients</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold tracking-wide mb-4">
              <Handshake className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Proven Industry Collaborations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              Trusted Partnerships.{' '}
              <span className="text-gradient">Lasting Connections.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-brand-charcoal-light leading-relaxed">
              We value every partnership and believe successful brands are built through collaboration, creativity and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Client Directory & Logo Wall Section */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
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
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 ${
                      isActive
                        ? 'bg-brand-blue text-white shadow-brand'
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
                placeholder="Search by client or sector..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs bg-brand-light/60 border border-brand-light-gray focus:outline-none focus:bg-white focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
              />
            </div>
          </div>

          {/* Equal Visual Spacing Logo-Wall Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredClients.map((client) => {
              return (
                <div
                  key={client.id}
                  className="group relative p-6 sm:p-7 rounded-3xl bg-white border border-brand-light-gray/80 hover:border-brand-blue/40 shadow-card hover:shadow-brand transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Pill & ID */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono font-bold text-brand-charcoal/30">
                        #{client.id < 10 ? `0${client.id}` : client.id}
                      </span>
                      <span className="inline-flex items-center space-x-1 text-[10px] px-2.5 py-0.5 rounded-full bg-brand-light text-brand-blue font-semibold">
                        <Tag className="w-2.5 h-2.5" />
                        <span>{client.category}</span>
                      </span>
                    </div>

                    {/* Client Name in Bold Typography */}
                    <h2 className="text-lg font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors leading-snug">
                      {client.name}
                    </h2>
                  </div>

                  {/* Highlight / Sector */}
                  <div className="mt-4 pt-3 border-t border-brand-light-gray/50 text-xs text-brand-charcoal/65 leading-relaxed">
                    {client.highlight || 'Advertising & Branding Client'}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredClients.length === 0 && (
            <div className="text-center py-16 text-sm text-brand-charcoal/60">
              No clients found matching "{searchQuery}".
            </div>
          )}

        </div>
      </section>

      {/* Become Our Next Partner Section (Prompt requirement) */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-brand-charcoal via-brand-charcoal-dark to-brand-charcoal text-white relative overflow-hidden shadow-premium text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold">
                Join Our Esteemed Client Network
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Become Our Next Partner
              </h2>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                Whether you are an established enterprise seeking market expansion or an emerging innovator aiming to redefine your brand, we are here to support your growth.
              </p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-bold shadow-brand hover:shadow-brand-lg transition-all shrink-0 flex items-center space-x-2"
            >
              <span>Let's Work Together</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
