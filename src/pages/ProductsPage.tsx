import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  ChevronRight, 
  SlidersHorizontal, 
  ExternalLink, 
  Sparkles, 
  Code2, 
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CurrentRoute, ProductCategory } from '../types';

interface ProductsPageProps {
  onNavigate: (route: CurrentRoute) => void;
  onOpenDemo: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onOpenDemo }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');

  const categories = [
    { id: 'all' as ProductCategory, label: 'All Products' },
    { id: 'hr' as ProductCategory, label: 'HR & Workforce' },
    { id: 'business' as ProductCategory, label: 'Business & Commerce' },
    { id: 'social' as ProductCategory, label: 'Social & Video' },
    { id: 'travel' as ProductCategory, label: 'Travel & Culture' },
    { id: 'events' as ProductCategory, label: 'Events & AI' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.categoryLabel.toLowerCase().includes(q) ||
        product.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="flex flex-col w-full text-[#dfe2f1]">
      {/* 1. HEADER & BREADCRUMB */}
      <section className="pt-10 pb-12 bg-gradient-to-b from-[#0b0f17] to-[#070a10] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#ff6a3d] font-semibold">Products</span>
          </nav>

          {/* Page Title */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#00a9bc]" />
              <span className="text-[#00a9bc] font-semibold uppercase tracking-wider">
                PROPRIETARY PRODUCT FLEET // 5 ACTIVE PLATFORMS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Proprietary Platforms Built for Enterprise Velocity
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore our production-grade software platforms engineered for automated workforce operations, video intelligence, omnichannel commerce, and cultural preservation.
            </p>
          </div>

          {/* 2. SEARCH & FILTER CONTROLS */}
          <div className="mt-10 space-y-4">
            {/* Search Input Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, capability, or tag (e.g. payroll, live video, camera)..."
                className="w-full pl-11 pr-10 py-3.5 bg-[#131823] border border-white/10 rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#ff6a3d] focus:ring-1 focus:ring-[#ff6a3d] transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white rounded-md hover:bg-white/10 transition-colors"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none">
              <SlidersHorizontal className="w-4 h-4 text-slate-500 shrink-0 mr-1 hidden sm:block" />
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#ff6a3d] text-white font-semibold shadow-md shadow-[#ff6a3d]/25'
                        : 'bg-[#131823] text-slate-400 hover:text-white hover:bg-[#1a2130] border border-white/5'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG GRID */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Active Filter Summary */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5 text-xs font-mono text-slate-400">
            <span>
              SHOWING <strong className="text-white">{filteredProducts.length}</strong> OF {PRODUCTS.length} PLATFORMS
            </span>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={handleResetFilters}
                className="text-[#ff6a3d] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const isQHR = product.id === 'qhr';
                return (
                  <div
                    key={product.id}
                    onClick={() => onNavigate(isQHR ? 'product-qhr' : (`product-${product.id}` as CurrentRoute))}
                    className="rounded-2xl bg-[#131823] border border-white/10 hover:border-[#ff6a3d]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#ff6a3d]/10 cursor-pointer overflow-hidden flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="px-5 py-3 bg-[#0b0f17] border-b border-white/5 flex items-center justify-between text-xs font-mono">
                        <span className="text-[#ff6a3d] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#ff6a3d] rounded-full" />
                          {product.categoryLabel}
                        </span>
                        <span className="text-slate-500">{product.version}</span>
                      </div>

                      {/* Image Preview */}
                      <div className="relative h-48 w-full bg-[#0b0f17] overflow-hidden">
                        <img
                          src={product.catalogImage}
                          alt={`${product.name} dashboard`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#131823] via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-3 left-3 bg-[#0b0f17]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>{product.statusBadge}</span>
                        </div>
                      </div>

                      {/* Info & Metrics */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold font-display text-white group-hover:text-[#ff6a3d] transition-colors mb-1">
                          {product.name}
                        </h3>
                        <p className="text-xs font-mono text-[#00a9bc] mb-3">{product.tagline}</p>

                        <p className="text-sm text-slate-300 leading-relaxed mb-5">
                          {product.shortDescription}
                        </p>

                        {/* 3 Metrics Micro-Grid */}
                        <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-[#0b0f17] rounded-xl border border-white/5 mb-5 text-center">
                          {product.metrics.map((m, idx) => (
                            <div key={idx} className="truncate">
                              <span className="text-[10px] font-mono text-slate-500 block uppercase truncate">
                                {m.label}
                              </span>
                              <span className="text-sm font-bold font-display text-white block mt-0.5">
                                {m.value}
                              </span>
                              {m.sub && (
                                <span className="text-[9px] font-mono text-[#00a9bc] block">
                                  {m.sub}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {product.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-md bg-[#0b0f17] border border-white/5 text-[11px] font-mono text-slate-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Row */}
                    <div className="px-6 py-4 bg-[#0e131d] border-t border-white/5 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-300 group-hover:text-white transition-colors">
                      <span className="font-semibold group-hover:text-[#ff6a3d] transition-colors">
                        {isQHR ? 'View Details' : 'Explore Platform'}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#ff6a3d] transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* EMPTY STATE */
            <div className="py-20 text-center bg-[#131823] border border-white/10 rounded-2xl p-8 max-w-xl mx-auto space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-slate-400 mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">No Products Found</h3>
              <p className="text-sm text-slate-400">
                No proprietary platform matched your search query{' '}
                {searchQuery ? <span className="text-[#ff6a3d] font-mono">"{searchQuery}"</span> : ''}{' '}
                {selectedCategory !== 'all' ? `in category "${selectedCategory}"` : ''}.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-[#ff6a3d] hover:bg-[#ff7e55] text-white font-mono text-xs uppercase tracking-wider rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <span>Clear All Filters</span>
              </button>
            </div>
          )}

          {/* 4. BESPOKE ARCHITECTURE CARD */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#131823] via-[#10141e] to-[#0b0f17] border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#00a9bc]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#00a9bc] font-semibold">
                  BESPOKE ARCHITECTURE
                </span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                Need a Custom Enterprise Operating System?
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Our platform architects construct high-throughput microservice fabrics tailored specifically for complex industrial workflows and multi-country regulatory boundaries.
              </p>
            </div>

            <button
              onClick={() => onOpenDemo('Custom Platform Architecture')}
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold whitespace-nowrap transition-colors flex items-center gap-2"
            >
              <span>Consult Product Architects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. CONVERSION BANNER */}
      <section className="py-16 bg-[#070a10] border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Ready to Modernize Your Operations?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Book a personalized walkthrough with our platform architects and inspect live sandbox instances.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenDemo()}
              className="px-8 py-3.5 bg-[#ff6a3d] hover:bg-[#ff7e55] active:scale-[0.98] text-white font-medium text-xs font-mono uppercase tracking-wider rounded-xl shadow-lg shadow-[#ff6a3d]/25 transition-all inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Platform Demo</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
