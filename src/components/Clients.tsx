import React, { useState } from 'react';
import { Search, ShieldCheck, Tag } from 'lucide-react';
import { CLIENTS } from '../data/companyData';

export const Clients: React.FC = () => {
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
    <section id="clients" className="py-20 lg:py-32 bg-brand-light/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
              <span className="w-6 h-0.5 bg-brand-blue"></span>
              <span>Proven Partnerships</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Our Valuable Clients
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
              We are honored to have collaborated with distinguished public enterprises, educational institutions, healthcare leaders, tourism pioneers, and commercial innovators across Nepal.
            </p>
          </div>

          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-brand-light-gray shadow-sm text-xs font-semibold text-brand-charcoal/80 shrink-0">
            <ShieldCheck className="w-4 h-4 text-brand-blue" />
            <span>24 Verified Client Relationships</span>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Categories */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 ${
                    isActive
                      ? 'bg-brand-blue text-white shadow-brand'
                      : 'bg-white border border-brand-light-gray text-brand-charcoal/70 hover:border-brand-blue/30'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-brand-charcoal/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clients..."
              className="w-full pl-9 pr-4 py-2 rounded-full text-xs bg-white border border-brand-light-gray focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
            />
          </div>
        </div>

        {/* Client Typography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredClients.map((client) => {
            return (
              <div
                key={client.id}
                className="group p-5 rounded-2xl bg-white border border-brand-light-gray/80 hover:border-brand-blue/40 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-brand-charcoal/30">
                      #{client.id < 10 ? `0${client.id}` : client.id}
                    </span>
                    <span className="inline-flex items-center space-x-1 text-[10px] px-2 py-0.5 rounded-md bg-brand-light text-brand-blue font-medium">
                      <Tag className="w-2.5 h-2.5" />
                      <span>{client.category}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors leading-snug">
                    {client.name}
                  </h3>
                </div>

                <div className="mt-3 pt-2.5 border-t border-brand-light-gray/50 text-[11px] text-brand-charcoal/60 leading-normal">
                  {client.highlight || 'Strategic Advertising & Creative Partner'}
                </div>
              </div>
            );
          })}
        </div>

        {filteredClients.length === 0 && (
          <div className="text-center py-12 text-sm text-brand-charcoal/60">
            No clients found matching "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
};
