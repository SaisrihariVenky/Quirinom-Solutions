import React, { useState } from 'react';
import { 
  ChevronRight, 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Star, 
  Users, 
  Clock, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  ExternalLink,
  ChevronLeft,
  Activity,
  Layers,
  Sparkles,
  BarChart3,
  FileText,
  Building
} from 'lucide-react';
import { QHR_FEATURES, QHR_HOW_IT_WORKS, QHR_SCREENSHOTS, QHR_FAQS } from '../data/products';
import { CurrentRoute, ProductFeature } from '../types';

interface ProductDetailsQHRProps {
  onNavigate: (route: CurrentRoute) => void;
  onOpenDemo: (productName?: string) => void;
  onSelectFeature: (feature: ProductFeature) => void;
}

export const ProductDetailsQHR: React.FC<ProductDetailsQHRProps> = ({
  onNavigate,
  onOpenDemo,
  onSelectFeature,
}) => {
  // State for interactive How It Works
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // State for interactive Screenshots gallery
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);

  // State for FAQ Accordion
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    if (openFaqIndices.includes(index)) {
      setOpenFaqIndices(openFaqIndices.filter((i) => i !== index));
    } else {
      setOpenFaqIndices([...openFaqIndices, index]);
    }
  };

  const currentScreenshot = QHR_SCREENSHOTS[activeScreenshotIndex];

  return (
    <div className="flex flex-col w-full text-[#dfe2f1]">
      {/* 1. BREADCRUMB & HERO SECTION */}
      <section className="pt-8 pb-16 md:py-20 bg-gradient-to-b from-[#0b0f17] via-[#0d121c] to-[#070a10] border-b border-white/5 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#ff6a3d]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation (Home / Products / QHR) */}
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
            <span className="text-[#ff6a3d] font-semibold">QHR</span>
          </nav>

          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Product Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#ff6a3d]/15 border border-[#ff6a3d]/30 text-xs font-mono uppercase tracking-wider text-[#ff6a3d] font-semibold">
                  ENTERPRISE WORKFORCE OS
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  PRODUCTION v4.2
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.12]">
                Simplify HR Operations. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a3d] to-[#00a9bc]">
                  Empower Your Workforce.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                QHR is an enterprise-grade HR management and automated payroll platform. We eliminate fragmented spreadsheets by unifying attendance, leave policies, statutory deductions, and employee self-service into one audit-ready cloud architecture.
              </p>

              {/* Dual Primary CTAs: Book a Demo & Get Started */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenDemo('QHR - Book a Demo')}
                  className="px-6 py-3.5 bg-[#ff6a3d] hover:bg-[#ff7e55] active:scale-[0.98] text-white font-medium text-sm rounded-xl uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-xl shadow-[#ff6a3d]/25 transition-all group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenDemo('QHR - Get Started')}
                  className="px-6 py-3.5 bg-[#131823] hover:bg-[#1a2130] active:scale-[0.98] text-slate-200 hover:text-white border border-white/10 font-medium text-sm rounded-xl uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all"
                >
                  <span>Get Started</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-white">4.9/5</span>
                  <span>Trust Score</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#00a9bc]" />
                  <span className="font-semibold text-white">50k+</span>
                  <span>Active Personnel</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>SOC-2 & GDPR Certified</span>
                </div>
              </div>
            </div>

            {/* Right Col: High-Fidelity QHR Hero Graphic & Telemetry Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#131823] border border-white/10 p-5 shadow-2xl overflow-hidden relative group hover:border-[#ff6a3d]/30 transition-all">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-xs font-mono">
                  <span className="text-white font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>QHR CLOUD NODE // SYNCED</span>
                  </span>
                  <span className="text-[#ff6a3d]">SUB-20MS</span>
                </div>

                {/* Hero Graphic Image */}
                <div className="relative rounded-xl overflow-hidden mb-4 border border-white/5 bg-[#0b0f17]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_NH-9dGOqhERA-LwplvzF_0MuBs2YEVFofW5H9aR0mPbvQfzTo_09C6JoUlAiWwVi5rinOc95hJVqweOZNAxmkJbXBujEfVjeHwsNmtwF0gTfvoZfznnY9lUvIXr-LN57kBPrFaqCB34thQrf0u1uyZN-jrmJt92ziOw8u1fz1gU7LYw36U4JSjigUg3ZFBrP0Cpi1igagMxjaUpLrziqd3Oax3Pkxkzgklq4MFM8zI6U59sODD2z"
                    alt="QHR Enterprise Interface"
                    referrerPolicy="no-referrer"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131823] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[10px] font-mono bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-slate-300">
                    <span>LIVE BIOMETRIC FEED</span>
                    <span className="text-emerald-400">99.8% VERIFIED</span>
                  </div>
                </div>

                {/* Live Shift Radar Data */}
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-300">
                    <span>Attendance Rate Today:</span>
                    <span className="text-white font-bold">482 / 500 (96.4%)</span>
                  </div>
                  <div className="w-full h-2 bg-[#0b0f17] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#ff6a3d] to-[#00a9bc] w-[96.4%]" />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                    <span>Remote: 114</span>
                    <span>On-Premise: 368</span>
                    <span className="text-amber-400">On Leave: 18</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARCHITECTURAL IMPACT METRICS */}
      <section className="py-10 bg-[#070a10] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-[#131823]/50 border border-white/5">
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-[#ff6a3d] mb-1">
                -70%
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Payroll Processing Time
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#131823]/50 border border-white/5">
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-[#00a9bc] mb-1">
                99.8%
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Attendance Log Accuracy
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#131823]/50 border border-white/5">
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-1">
                4.2 Days
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Average Org Onboarding
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#131823]/50 border border-white/5">
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-400 mb-1">
                100%
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Tax Compliance Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MODULAR CAPABILITIES (8 INTERACTIVE FEATURE CARDS) */}
      <section className="py-20 md:py-24 border-b border-white/5" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ff6a3d]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff6a3d] font-semibold">
                MODULAR CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Eight Pillars of Modern HR Orchestration
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Each module is engineered to operate independently or harmonize in a single consolidated control plane. Click any capability to view operational workflows.
            </p>
          </div>

          {/* 8 Feature Cards Grid (4 cols desktop, 2 cols tablet, 1 col mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QHR_FEATURES.map((feature) => (
              <div
                key={feature.id}
                onClick={() => onSelectFeature(feature)}
                className="p-6 rounded-2xl bg-[#131823] border border-white/10 hover:border-[#ff6a3d]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ff6a3d]/10 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#ff6a3d]/10 text-[#ff6a3d] border border-[#ff6a3d]/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#ff6a3d] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[24px]">{feature.icon}</span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#00a9bc] block mb-1">
                    {feature.category}
                  </span>

                  <h3 className="text-lg font-bold font-display text-white group-hover:text-[#ff6a3d] transition-colors mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {feature.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  <span className="text-[11px] uppercase tracking-wider">Inspect Specs</span>
                  <ChevronRight className="w-4 h-4 text-[#ff6a3d] transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW QHR WORKS (4 INTERACTIVE STEPS) */}
      <section className="py-20 md:py-24 bg-[#070a10] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00a9bc] font-semibold">
              OPERATIONAL WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-1">
              How QHR Works
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-2">
              From zero configuration to automated enterprise payroll in four transparent stages.
            </p>
          </div>

          {/* Step Selector Tabs (Desktop / Mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {QHR_HOW_IT_WORKS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                    isActive
                      ? 'bg-[#131823] border-[#ff6a3d] shadow-lg shadow-[#ff6a3d]/15'
                      : 'bg-[#0e131d] border-white/5 hover:border-white/20 text-slate-400'
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 left-0 h-1 w-full bg-[#ff6a3d]" />
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#ff6a3d]">{step.step}</span>
                    <span className="material-symbols-outlined text-[18px] text-slate-400">{step.icon}</span>
                  </div>
                  <h4 className={`text-sm font-bold font-display ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {step.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Panel */}
          {QHR_HOW_IT_WORKS[activeStepIndex] && (
            <div className="rounded-2xl bg-[#131823] border border-white/10 p-6 sm:p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#ff6a3d] font-bold">
                    STAGE {QHR_HOW_IT_WORKS[activeStepIndex].step} OF 04
                  </span>
                  <span className="text-xs text-slate-500 font-mono">· Active Configuration</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {QHR_HOW_IT_WORKS[activeStepIndex].title}
                </h3>
                <p className="text-xs font-mono text-[#00a9bc]">
                  {QHR_HOW_IT_WORKS[activeStepIndex].tagline}
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {QHR_HOW_IT_WORKS[activeStepIndex].desc}
                </p>

                <div className="space-y-2 pt-2">
                  {QHR_HOW_IT_WORKS[activeStepIndex].highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                      <span className="w-4 h-4 rounded-full bg-[#ff6a3d]/20 text-[#ff6a3d] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => onOpenDemo(`QHR Workflow - Step ${QHR_HOW_IT_WORKS[activeStepIndex].step}`)}
                    className="px-5 py-2.5 bg-[#ff6a3d] hover:bg-[#ff7e55] text-white font-mono text-xs uppercase tracking-wider rounded-lg transition-colors inline-flex items-center gap-2"
                  >
                    <span>Request Walkthrough for Step {QHR_HOW_IT_WORKS[activeStepIndex].step}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Graphic Representation for Step */}
              <div className="lg:col-span-5 bg-[#0b0f17] border border-white/5 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
                  <span className="text-slate-400">TELEMETRY PREVIEW</span>
                  <span className="text-emerald-400">REALTIME</span>
                </div>

                {activeStepIndex === 0 && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="p-3 bg-[#131823] rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">POLICY DEFINITION</span>
                      <span className="text-white">Casual Leave: 12 days / yr (Accrued monthly)</span>
                    </div>
                    <div className="p-3 bg-[#131823] rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">TAX COMPLIANCE SLABS</span>
                      <span className="text-emerald-400">Section 80C, 80D Auto-Calculated</span>
                    </div>
                  </div>
                )}

                {activeStepIndex === 1 && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="p-3 bg-[#131823] rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">IDENTITY INGESTION</span>
                      <span className="text-white">Active Directory & Biometric Terminals: 100% Synced</span>
                    </div>
                    <div className="p-3 bg-[#131823] rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">CREDENTIALS ISSUED</span>
                      <span className="text-[#00a9bc]">500 Instant Employee PWA Logins</span>
                    </div>
                  </div>
                )}

                {activeStepIndex === 2 && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="p-3 bg-[#131823] rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">LIVE CLOCK-IN PIPELINE</span>
                      <span className="text-white">Geofenced GPS Checkins: 142 Today</span>
                    </div>
                    <div className="p-3 bg-[#131823] rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">APPROVAL BOT</span>
                      <span className="text-emerald-400">Zero Unresolved Overtime Conflicts</span>
                    </div>
                  </div>
                )}

                {activeStepIndex === 3 && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="p-3 bg-[#131823] rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">PAYROLL RUN VERIFICATION</span>
                      <span className="text-white">Batch Disbursal NEFT/RTGS File: GENERATED</span>
                    </div>
                    <div className="p-3 bg-[#131823] rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">ENCRYPTED PAYSLIPS</span>
                      <span className="text-[#ff6a3d]">482 Secure PDFs Dispatched via Email</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. PRODUCT SCREENSHOTS / TELEMETRY GALLERY */}
      <section className="py-20 md:py-24 border-b border-white/5" id="screenshots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff6a3d] font-semibold">
                SYSTEM INTERFACES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mt-1">
                Interactive Interface Showcase
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
                Explore the actual user experience across executive, administrator, and employee workflows.
              </p>
            </div>

            {/* Gallery Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setActiveScreenshotIndex((prev) =>
                    prev === 0 ? QHR_SCREENSHOTS.length - 1 : prev - 1
                  )
                }
                className="p-2.5 rounded-lg bg-[#131823] border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Previous interface screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-slate-400 px-2">
                0{activeScreenshotIndex + 1} / 0{QHR_SCREENSHOTS.length}
              </span>
              <button
                onClick={() =>
                  setActiveScreenshotIndex((prev) =>
                    prev === QHR_SCREENSHOTS.length - 1 ? 0 : prev + 1
                  )
                }
                className="p-2.5 rounded-lg bg-[#131823] border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Next interface screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Screenshot Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {QHR_SCREENSHOTS.map((s, idx) => {
              const isActive = activeScreenshotIndex === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveScreenshotIndex(idx)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#ff6a3d] text-white font-semibold shadow-md shadow-[#ff6a3d]/20'
                      : 'bg-[#131823] text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  {s.title}
                </button>
              );
            })}
          </div>

          {/* Primary Screenshot Display Window */}
          <div className="rounded-2xl bg-[#131823] border border-white/10 overflow-hidden shadow-2xl">
            {/* Top Window Bar */}
            <div className="px-5 py-3 bg-[#0b0f17] border-b border-white/10 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-slate-400 ml-2">qhr.qurinomsolutions.app/console/{currentScreenshot.id}</span>
              </div>
              <span className="text-[#00a9bc]">{currentScreenshot.tagline}</span>
            </div>

            {/* Interface Content Visual */}
            <div className="p-6 sm:p-8 bg-[#0b0f17]">
              {currentScreenshot.type === 'executive' && (
                <div className="space-y-6">
                  {/* Top Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-[#131823] p-4 rounded-xl border border-white/5">
                      <span className="text-xs font-mono text-slate-400 uppercase">Headcount</span>
                      <div className="text-2xl font-bold font-display text-white mt-1">482</div>
                      <span className="text-[10px] font-mono text-emerald-400">+12 this month</span>
                    </div>
                    <div className="bg-[#131823] p-4 rounded-xl border border-white/5">
                      <span className="text-xs font-mono text-slate-400 uppercase">Present Rate</span>
                      <div className="text-2xl font-bold font-display text-[#ff6a3d] mt-1">98.4%</div>
                      <span className="text-[10px] font-mono text-slate-400">Biometric Verified</span>
                    </div>
                    <div className="bg-[#131823] p-4 rounded-xl border border-white/5">
                      <span className="text-xs font-mono text-slate-400 uppercase">On Leave Today</span>
                      <div className="text-2xl font-bold font-display text-[#00a9bc] mt-1">18</div>
                      <span className="text-[10px] font-mono text-slate-400">Scheduled Leaves</span>
                    </div>
                    <div className="bg-[#131823] p-4 rounded-xl border border-white/5">
                      <span className="text-xs font-mono text-slate-400 uppercase">Est. Payroll</span>
                      <div className="text-2xl font-bold font-display text-emerald-400 mt-1">₹42.8L</div>
                      <span className="text-[10px] font-mono text-slate-400">Cycle closes in 3d</span>
                    </div>
                  </div>

                  {/* Simulated Chart */}
                  <div className="bg-[#131823] p-5 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center mb-4 text-xs font-mono">
                      <span className="text-white font-semibold">Department Headcount & Allocation</span>
                      <span className="text-slate-400">Engineering (45%) · Operations (25%) · Sales (20%) · Admin (10%)</span>
                    </div>
                    <div className="w-full h-8 bg-[#0b0f17] rounded-lg overflow-hidden flex">
                      <div className="h-full bg-[#ff6a3d]" style={{ width: '45%' }} title="Engineering 45%" />
                      <div className="h-full bg-[#00a9bc]" style={{ width: '25%' }} title="Operations 25%" />
                      <div className="h-full bg-[#0566d9]" style={{ width: '20%' }} title="Sales 20%" />
                      <div className="h-full bg-emerald-500" style={{ width: '10%' }} title="Admin 10%" />
                    </div>
                  </div>
                </div>
              )}

              {currentScreenshot.type === 'directory' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-slate-400 uppercase">Personnel Records (Showing 4 of 482)</span>
                    <span className="text-[#ff6a3d]">ROLE: SUPERADMIN ACCESS</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'Dr. Ananya Rao', role: 'Chief Technology Architect', dept: 'Engineering', status: 'Active (Punch In 09:02 AM)' },
                      { name: 'Vikramaditya Bose', role: 'VP, Enterprise Operations', dept: 'Operations', status: 'Active (Punch In 08:55 AM)' },
                      { name: 'Sameer Kulkarni', role: 'Staff Software Engineer', dept: 'Core Platform', status: 'Remote (Geo-Verified 09:14 AM)' },
                      { name: 'Kavita Sundaram', role: 'HR Operations Lead', dept: 'People Team', status: 'Active (Punch In 09:00 AM)' },
                    ].map((person, i) => (
                      <div key={i} className="p-3 bg-[#131823] rounded-lg border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <span className="font-bold text-white text-sm block">{person.name}</span>
                          <span className="text-slate-400 text-xs">{person.role} · {person.dept}</span>
                        </div>
                        <span className="text-emerald-400 text-[11px] bg-emerald-500/10 px-2 py-1 rounded w-fit">
                          {person.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentScreenshot.type === 'attendance' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-slate-400 uppercase">Biometric Gateway Stream (Hardware ID: HYD-TERM-04)</span>
                    <span className="text-emerald-400 font-semibold animate-pulse">GATEWAY ONLINE</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 bg-[#131823] rounded-xl border border-white/5">
                      <span className="text-[11px] text-slate-400 uppercase">Total Logged Hours</span>
                      <div className="text-2xl font-bold font-display text-white mt-1">3,842 hrs</div>
                      <span className="text-emerald-400 text-[10px]">Zero unresolved discrepancies</span>
                    </div>
                    <div className="p-4 bg-[#131823] rounded-xl border border-white/5">
                      <span className="text-[11px] text-slate-400 uppercase">Overtime Tracked</span>
                      <div className="text-2xl font-bold font-display text-[#ff6a3d] mt-1">146.5 hrs</div>
                      <span className="text-slate-400 text-[10px]">Approved by managers</span>
                    </div>
                    <div className="p-4 bg-[#131823] rounded-xl border border-white/5">
                      <span className="text-[11px] text-slate-400 uppercase">Geofence Perimeter</span>
                      <div className="text-2xl font-bold font-display text-[#00a9bc] mt-1">500m</div>
                      <span className="text-slate-400 text-[10px]">GPS Radius Active</span>
                    </div>
                  </div>
                </div>
              )}

              {currentScreenshot.type === 'payroll' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-slate-400 uppercase">September Salary Settlement Cycle</span>
                    <span className="text-amber-400 font-semibold">PRE-DISBURSAL AUDIT</span>
                  </div>
                  <div className="bg-[#131823] p-4 rounded-xl border border-white/5 space-y-3">
                    <div className="flex justify-between text-slate-300">
                      <span>Gross Salary Disbursal Commitment:</span>
                      <span className="text-white font-bold">₹44,20,500</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Total Statutory Withholding (TDS, PF, ESI):</span>
                      <span className="text-rose-400 font-bold">- ₹5,30,460</span>
                    </div>
                    <div className="flex justify-between text-slate-300 pt-2 border-t border-white/5">
                      <span>Net Bank Disbursal Batch Amount:</span>
                      <span className="text-emerald-400 font-bold text-sm">₹38,90,040</span>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onOpenDemo('QHR - Payroll Disbursal Flow')}
                      className="px-4 py-2 bg-[#ff6a3d] hover:bg-[#ff7e55] text-white rounded-lg text-xs font-semibold"
                    >
                      Inspect Bank Export File
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Caption */}
            <div className="px-6 py-4 bg-[#10141e] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <p className="text-slate-300">{currentScreenshot.description}</p>
              <button
                onClick={() => onOpenDemo(`QHR - Full Sandbox for ${currentScreenshot.title}`)}
                className="text-[#ff6a3d] hover:underline font-mono uppercase whitespace-nowrap font-semibold"
              >
                Launch Sandbox View
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHO USES QHR? (ORGANIZATIONAL FIT) */}
      <section className="py-20 md:py-24 bg-[#070a10] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00a9bc] font-semibold">
              ORGANIZATIONAL FIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-1">
              Engineered for Every Stakeholder
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-2">
              From executive oversight to individual contributor transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#ff6a3d]/15 text-[#ff6a3d] flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1.5">HR & People Teams</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Eliminate manual data entry, automate compliance reporting, and run monthly payroll in 3 clicks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#00a9bc]/15 text-[#00a9bc] flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1.5">C-Suite & Founders</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Live visibility into labor burn, retention velocity, department headcount, and statutory audits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#0566d9]/20 text-[#adc6ff] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1.5">Team Managers</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                One-tap leave approvals, shift roster management, and overtime authorization on mobile.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#131823] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1.5">Employees</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Instant access to payslips, investment declarations, attendance punch records, and time-off balances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="py-20 md:py-24 border-b border-white/5" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff6a3d] font-semibold">
              FAQ ACCORDION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
              Everything you need to know about adopting QHR across your organization.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {QHR_FAQS.map((faq, index) => {
              const isOpen = openFaqIndices.includes(index);
              return (
                <div
                  key={index}
                  className="rounded-xl bg-[#131823] border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold font-display text-white">
                      {faq.question}
                    </span>
                    <div className="p-1 rounded bg-white/5 text-slate-400 shrink-0 ml-4">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FINAL CONVERSION BANNER (READY TO SIMPLIFY HR MANAGEMENT?) */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#0b0f17] to-[#070a10] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6a3d]/15 border border-[#ff6a3d]/30 text-xs font-mono uppercase tracking-wider text-[#ff6a3d] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSFORM WORKFORCE OPERATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Ready to Simplify HR Management?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Provision your tailored sandbox in minutes. Experience how QHR eliminates payroll errors and empowers your workforce.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenDemo('QHR - Book a Demo (Bottom CTA)')}
              className="w-full sm:w-auto px-8 py-4 bg-[#ff6a3d] hover:bg-[#ff7e55] active:scale-[0.98] text-white font-medium text-sm rounded-xl uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-xl shadow-[#ff6a3d]/30 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Demo</span>
            </button>

            <button
              onClick={() => onOpenDemo('QHR - Get Started (Bottom CTA)')}
              className="w-full sm:w-auto px-8 py-4 bg-[#131823] hover:bg-[#1a2130] active:scale-[0.98] text-slate-200 hover:text-white border border-white/10 font-medium text-sm rounded-xl uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all"
            >
              <span>Get Started</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Free Guided Migration</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Zero Setup Fees</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
