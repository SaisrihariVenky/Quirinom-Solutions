import React from 'react';
import { 
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Zap, 
  CheckCircle, 
  Activity, 
  Users, 
  Clock, 
  Layers, 
  Lock, 
  BarChart3, 
  Smartphone,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CurrentRoute } from '../types';

interface HomePageProps {
  onNavigate: (route: CurrentRoute) => void;
  onOpenDemo: (productName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <div className="flex flex-col w-full text-[#dfe2f1]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:py-24 overflow-hidden border-b border-white/5">
        {/* Subtle radial ambient gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#ff6a3d]/15 via-[#00a9bc]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Prop & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#ff6a3d] animate-ping" />
                <span className="text-[#ff6a3d] font-semibold uppercase tracking-wider">
                  PRODUCT INNOVATION // RUNTIME ACTIVE
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.12]">
                Technology Products Built to Solve{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a3d] via-[#ff8e6d] to-[#00a9bc]">
                  Real-World Problems
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Explore innovative digital platforms from Qurinom Solutions, designed to simplify enterprise workloads, accelerate operational velocity, and tackle complex structural friction.
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-3.5 bg-[#ff6a3d] hover:bg-[#ff7e55] active:scale-[0.98] text-white font-medium text-sm rounded-xl uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-xl shadow-[#ff6a3d]/25 transition-all group"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenDemo()}
                  className="px-6 py-3.5 bg-[#131823] hover:bg-[#1a2130] active:scale-[0.98] text-slate-200 hover:text-white border border-white/10 font-medium text-sm rounded-xl uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#00a9bc]" />
                  <span>Request a Demo</span>
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="flex items-center gap-6 pt-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00a9bc]" />
                  <span>SOC2 & ISO Certified</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#ff6a3d]" />
                  <span>99.98% Uptime SLA</span>
                </span>
              </div>
            </div>

            {/* Right Column: High-Tech Live Telemetry Glass Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#131823]/90 border border-white/10 p-5 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden group hover:border-[#ff6a3d]/30 transition-all">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#ff6a3d] rounded-sm" />
                    <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                      Telemetry Mesh // Live
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#00a9bc] bg-[#00a9bc]/10 px-2 py-0.5 rounded border border-[#00a9bc]/20">
                    QHR-CORE: SYNCED
                  </span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 relative z-10">
                  <div className="bg-[#0b0f17] p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] font-mono text-slate-400 uppercase block">Active Staff</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-2xl font-bold font-display text-white">482</span>
                      <span className="text-xs font-mono text-[#00a9bc]">/ 500</span>
                    </div>
                    <div className="w-full bg-white/5 h-1 rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#ff6a3d] h-full w-[96%]" />
                    </div>
                  </div>

                  <div className="bg-[#0b0f17] p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] font-mono text-slate-400 uppercase block">Attendance SLA</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-2xl font-bold font-display text-[#ff6a3d]">98.4%</span>
                      <span className="text-xs font-mono text-emerald-400">Live</span>
                    </div>
                    <div className="w-full bg-white/5 h-1 rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#00a9bc] h-full w-[98.4%]" />
                    </div>
                  </div>
                </div>

                {/* Sparkline Real-time Activity Graph */}
                <div className="bg-[#0b0f17] p-3 rounded-xl border border-white/5 mb-3 relative z-10">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>Workforce Activity Pulse</span>
                    <span className="text-[#ff6a3d]">Cycle #14 Active</span>
                  </div>
                  <svg className="w-full h-12" fill="none" viewBox="0 0 280 40" preserveAspectRatio="none">
                    <path
                      d="M0 32 L35 28 L70 34 L105 15 L140 22 L175 8 L210 18 L245 4 L280 12"
                      stroke="#ff6a3d"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M0 32 L35 28 L70 34 L105 15 L140 22 L175 8 L210 18 L245 4 L280 12 L280 40 L0 40 Z"
                      fill="url(#hero-telemetry-gradient)"
                      opacity="0.25"
                    />
                    <defs>
                      <linearGradient id="hero-telemetry-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ff6a3d" />
                        <stop offset="100%" stopColor="#ff6a3d" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Multi-Node Live Feed */}
                <div className="flex items-center justify-between bg-white/[0.03] px-3 py-2 rounded-lg border border-white/5 text-xs relative z-10">
                  <div className="flex items-center gap-2 truncate">
                    <Activity className="w-3.5 h-3.5 text-[#00a9bc] shrink-0" />
                    <span className="font-mono text-slate-300 truncate">StoreFlaunt Node: +1.2k stream views</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 font-semibold shrink-0">READY</span>
                </div>

                {/* 3-Stat Horizontal Micro-Grid */}
                <div className="grid grid-cols-3 gap-2 pt-3 mt-3 border-t border-white/5 relative z-10">
                  <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                    <div className="text-lg font-bold font-display text-[#ff6a3d]">5+</div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Flagships</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                    <div className="text-lg font-bold font-display text-[#00a9bc]">100+</div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Innovators</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                    <div className="text-lg font-bold font-display text-[#adc6ff]">99.9%</div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Core SLA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & ENGINEERING CREED */}
      <section className="py-16 md:py-20 bg-[#070a10] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00a9bc] font-semibold">
              ENGINEERING CREED
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white mt-1">
              Built Around Products. Driven by Innovation.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-2">
              We engineer scalable software architectures designed from first principles to eradicate operational complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Creed 1 */}
            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5 hover:border-[#ff6a3d]/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#ff6a3d]/10 text-[#ff6a3d] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2">AI-Powered Systems</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Embedded contextual micro-models that turn unstructured workforce, video, and geo-data into operational assets.
              </p>
            </div>

            {/* Creed 2 */}
            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5 hover:border-[#00a9bc]/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#00a9bc]/10 text-[#00a9bc] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2">Cross-Platform Mesh</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Zero-friction API interop ensuring seamless synchronization across mobile native, web telemetry, and edge endpoints.
              </p>
            </div>

            {/* Creed 3 */}
            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5 hover:border-[#adc6ff]/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#0566d9]/20 text-[#adc6ff] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2">Radical Innovation</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Discarding monolithic inertia in favor of sharp, reactive architectures tailored for next-generation user flows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS DIRECTORY ("EXPLORE OUR PRODUCTS") */}
      <section className="py-20 md:py-24 border-b border-white/5" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ff6a3d]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff6a3d] font-semibold">
                  PROPRIETARY FLEET
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                Explore Our Products
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
                High-performance suite designed for workforce orchestration, video intelligence, and friction-free engagement.
              </p>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-sm font-mono text-[#ff6a3d] hover:text-[#ff8e6d] font-semibold transition-colors"
            >
              <span>View All 5 Platforms</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Product Cards Grid: 3-column on Desktop, adaptable on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => {
              const isQHR = product.id === 'qhr';
              return (
                <div
                  key={product.id}
                  onClick={() => onNavigate(isQHR ? 'product-qhr' : (`product-${product.id}` as CurrentRoute))}
                  className="rounded-2xl bg-[#131823] border border-white/10 hover:border-[#ff6a3d]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#ff6a3d]/10 cursor-pointer overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Status Bar */}
                    <div className="px-5 py-3 bg-[#0b0f17] border-b border-white/5 flex items-center justify-between text-xs font-mono">
                      <span className="text-[#ff6a3d] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#ff6a3d] rounded-full" />
                        {product.categoryLabel}
                      </span>
                      <span className="text-slate-500">{product.version}</span>
                    </div>

                    {/* Product Visual */}
                    <div className="relative h-48 w-full bg-[#0b0f17] overflow-hidden">
                      <img
                        src={product.heroImage}
                        alt={`${product.name} product interface preview`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131823] via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-3 left-3 bg-[#0b0f17]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{product.statusBadge}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold font-display text-white group-hover:text-[#ff6a3d] transition-colors mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {product.shortDescription}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.tags.slice(0, 3).map((tag, idx) => (
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

                  {/* Card Bottom CTA */}
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
        </div>
      </section>

      {/* 4. ARCHITECTURAL MATRIX (6 CAPABILITIES) */}
      <section className="py-20 md:py-24 bg-[#070a10] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff6a3d] font-semibold">
              ARCHITECTURAL MATRIX
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-1">
              Built Around Innovation
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-2">
              Every platform in our ecosystem adheres to unified foundational engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cap 1 */}
            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#ff6a3d]/15 text-[#ff6a3d] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1.5">Intelligent Experiences</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Contextual models responding to user gestures in real time without lag.
              </p>
            </div>

            {/* Cap 2 */}
            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#00a9bc]/15 text-[#00a9bc] flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1.5">Autonomous Workflows</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Repetitive administrative burdens shifted to background system daemons.
              </p>
            </div>

            {/* Cap 3 */}
            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#0566d9]/20 text-[#adc6ff] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1.5">Scalable Cloud Fabric</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Elastic serverless instances built to withstand 10x traffic surges effortlessly.
              </p>
            </div>

            {/* Cap 4 */}
            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1.5">Platform Security</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                SOC-2 readiness with zero-trust token handshakes enforced at every communication layer.
              </p>
            </div>

            {/* Cap 5 */}
            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1.5">Predictive Insights</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Forward-looking analytics that forecast staffing, inventory, and retention trends.
              </p>
            </div>

            {/* Cap 6 */}
            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1.5">User-Centered Craft</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Zero bloat, sub-100ms render cycles, and ruthless UX clarity across desktop and mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FLAGSHIP SPOTLIGHT ON QHR */}
      <section className="py-20 md:py-24 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#131823] to-[#0c1017] border border-[#ff6a3d]/20 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6a3d]/10 rounded-full blur-3xl pointer-events-none -mr-24 -mt-24" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#ff6a3d]/10 border border-[#ff6a3d]/30 text-xs font-mono uppercase tracking-wider text-[#ff6a3d] font-semibold">
                    FLAGSHIP SPOTLIGHT
                  </span>
                  <span className="text-xs font-mono text-slate-400">ENTERPRISE-GRADE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
                  Simplify HR Operations with QHR
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  Designed from the ground up to replace fragmented legacy spreadsheets with one centralized, audit-ready personnel platform. Handles biometric attendance, multi-state payroll, self-service portals, and performance reviews.
                </p>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#0b0f17] border border-white/5 text-center">
                    <span className="text-xs font-mono text-white block font-semibold">Employee Records</span>
                    <span className="text-[10px] font-mono text-[#00a9bc]">Encrypted Vault</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0b0f17] border border-white/5 text-center">
                    <span className="text-xs font-mono text-white block font-semibold">Geo-Attendance</span>
                    <span className="text-[10px] font-mono text-[#ff6a3d]">Biometric Sync</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0b0f17] border border-white/5 text-center">
                    <span className="text-xs font-mono text-white block font-semibold">Leave Tracking</span>
                    <span className="text-[10px] font-mono text-[#adc6ff]">Multi-Tier Rules</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0b0f17] border border-white/5 text-center">
                    <span className="text-xs font-mono text-white block font-semibold">Auto Payroll</span>
                    <span className="text-[10px] font-mono text-emerald-400">Statutory Tax Ready</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <button
                    onClick={() => onNavigate('product-qhr')}
                    className="px-6 py-3.5 bg-[#ff6a3d] hover:bg-[#ff7e55] active:scale-[0.98] text-white font-medium text-sm rounded-xl uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-lg shadow-[#ff6a3d]/25 transition-all"
                  >
                    <span>Explore QHR Platform</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenDemo('QHR')}
                    className="px-6 py-3.5 bg-white/5 hover:bg-white/10 active:scale-[0.98] text-slate-200 hover:text-white border border-white/10 font-medium text-sm rounded-xl uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Book QHR Demo</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Live Audit Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#0b0f17] rounded-2xl border border-white/10 p-6 shadow-xl">
                  <div className="flex justify-between items-center text-xs font-mono pb-3 border-b border-white/10">
                    <span className="text-slate-400 uppercase">NEXT PAYROLL CYCLE:</span>
                    <span className="text-[#ff6a3d] font-bold text-sm">3 Days Left</span>
                  </div>

                  <div className="py-4 space-y-2">
                    <div className="flex justify-between text-xs font-mono text-slate-300">
                      <span>Biometric Shift Validation:</span>
                      <span className="text-emerald-400 font-bold">82% Verified</span>
                    </div>
                    <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#ff6a3d] to-emerald-400 w-[82%]" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 text-right block">
                      Auto-synced with biometric hardware nodes
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/5 text-xs font-mono">
                    <div className="bg-[#131823] p-3 rounded-lg">
                      <span className="text-slate-400 block text-[10px]">PAYROLL RUNTIME</span>
                      <span className="text-white font-bold text-base">&lt; 14 Sec</span>
                    </div>
                    <div className="bg-[#131823] p-3 rounded-lg">
                      <span className="text-slate-400 block text-[10px]">CALCULATION ACCURACY</span>
                      <span className="text-[#00a9bc] font-bold text-base">100.0%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY QURINOM PRODUCTS? (4 PILLARS) */}
      <section className="py-20 md:py-24 bg-[#070a10] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00a9bc] font-semibold">
              WHY QURINOM
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-1">
              Why Qurinom Products?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-2">
              We don't build vaporware. Every product is battle-tested in live commercial workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold font-display text-white">Pragmatic Tech</span>
                  <span className="text-xs font-mono text-[#ff6a3d] font-bold px-2 py-0.5 rounded bg-[#ff6a3d]/10">
                    01
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Architected without unnecessary dependencies or fragile abstractions. We prioritize maintainable, hardened runtimes.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold font-display text-white">Frictionless UX</span>
                  <span className="text-xs font-mono text-[#00a9bc] font-bold px-2 py-0.5 rounded bg-[#00a9bc]/10">
                    02
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Interfaces refined until onboarding overhead drops to zero. Users navigate control planes intuitively without manuals.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold font-display text-white">Effortless Scale</span>
                  <span className="text-xs font-mono text-[#adc6ff] font-bold px-2 py-0.5 rounded bg-[#0566d9]/20">
                    03
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Ready to scale from 10 team members to tens of thousands of concurrent nodes without modifying database schemas.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold font-display text-white">Measurable ROI</span>
                  <span className="text-xs font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10">
                    04
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Direct operational savings: 40% reduction in HR overhead, 3x increase in livestream social basket conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CONVERSION CTA */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-[#ff6a3d]/15 text-[#ff6a3d] flex items-center justify-center mx-auto mb-2 shadow-lg shadow-[#ff6a3d]/10">
            <Zap className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Explore Products Built for Real-World Needs
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of teams orchestrating their future on Qurinom Solutions’ proprietary software stack.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('products')}
              className="w-full sm:w-auto px-8 py-4 bg-[#ff6a3d] hover:bg-[#ff7e55] active:scale-[0.98] text-white font-medium text-sm rounded-xl uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-xl shadow-[#ff6a3d]/30 transition-all"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenDemo()}
              className="w-full sm:w-auto px-8 py-4 bg-[#131823] hover:bg-[#1a2130] active:scale-[0.98] text-slate-200 hover:text-white border border-white/10 font-medium text-sm rounded-xl uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all"
            >
              <Calendar className="w-4 h-4 text-[#00a9bc]" />
              <span>Schedule Platform Demo</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#00a9bc]" />
              <span>Instant Sandbox</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#00a9bc]" />
              <span>Zero Credit Card Required</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
