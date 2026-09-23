import React from 'react';
import { 
  ChevronRight, 
  Calendar, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  ChevronLeft
} from 'lucide-react';
import { Product, CurrentRoute } from '../types';

interface ProductDetailPlaceholderProps {
  product: Product;
  onNavigate: (route: CurrentRoute) => void;
  onOpenDemo: (productName?: string) => void;
}

export const ProductDetailPlaceholder: React.FC<ProductDetailPlaceholderProps> = ({
  product,
  onNavigate,
  onOpenDemo,
}) => {
  return (
    <div className="flex flex-col w-full text-[#dfe2f1]">
      {/* 1. BREADCRUMB & HERO SECTION */}
      <section className="pt-8 pb-16 md:py-20 bg-gradient-to-b from-[#0b0f17] via-[#0d121c] to-[#070a10] border-b border-white/5 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#00a9bc]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <button
              onClick={() => onNavigate('products')}
              className="hover:text-white transition-colors"
            >
              Products
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#ff6a3d] font-semibold">{product.name}</span>
          </nav>

          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#00a9bc]/15 border border-[#00a9bc]/30 text-xs font-mono uppercase tracking-wider text-[#00a9bc] font-semibold">
                  {product.categoryLabel}
                </span>
                <span className="text-xs font-mono text-white bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  {product.version}
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {product.statusBadge}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.12]">
                {product.name}
              </h1>

              <p className="text-xl font-mono text-[#ff6a3d]">
                {product.tagline}
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                {product.longDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenDemo(product.name)}
                  className="px-6 py-3.5 bg-[#ff6a3d] hover:bg-[#ff7e55] active:scale-[0.98] text-white font-medium text-sm rounded-xl uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-xl shadow-[#ff6a3d]/25 transition-all group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Platform Demo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-3.5 bg-[#131823] hover:bg-[#1a2130] active:scale-[0.98] text-slate-200 hover:text-white border border-white/10 font-medium text-sm rounded-xl uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back to All Products</span>
                </button>
              </div>
            </div>

            {/* Right Col: Product Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#131823] border border-white/10 p-4 shadow-2xl overflow-hidden group">
                <div className="relative rounded-xl overflow-hidden border border-white/5 bg-[#0b0f17]">
                  <img
                    src={product.heroImage}
                    alt={`${product.name} Preview`}
                    referrerPolicy="no-referrer"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131823] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-xs font-mono bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-slate-300">
                    <span>{product.name} Live Engine</span>
                    <span className="text-[#00a9bc]">ACTIVE RUNTIME</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. METRICS BAR */}
      <section className="py-10 bg-[#070a10] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {product.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#131823]/50 border border-white/5">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-1">
                  {m.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#ff6a3d]">
                  {m.label}
                </div>
                {m.sub && (
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    {m.sub}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURAL CAPABILITIES */}
      <section className="py-20 md:py-24 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff6a3d] font-semibold">
              PLATFORM SPECIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mt-1">
              Core Capabilities & Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.bulletPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#131823] border border-white/5 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#ff6a3d]/20 text-[#ff6a3d] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {product.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[#131823] border border-white/10 text-xs font-mono text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONVERSION CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#0b0f17] to-[#070a10] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Schedule a Demo of {product.name}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Our solution architects will configure an interactive walkthrough demonstrating how {product.name} integrates with your operational stack.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenDemo(product.name)}
              className="px-8 py-4 bg-[#ff6a3d] hover:bg-[#ff7e55] active:scale-[0.98] text-white font-medium text-sm rounded-xl uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-xl shadow-[#ff6a3d]/30 transition-all mx-auto"
            >
              <Calendar className="w-4 h-4" />
              <span>Request {product.name} Sandbox</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
