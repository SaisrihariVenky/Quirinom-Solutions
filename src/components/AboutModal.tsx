import React from 'react';
import { X, Building2, Globe, Shield, Sparkles, ArrowRight } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo: () => void;
  onNavigateProducts: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenDemo,
  onNavigateProducts,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-all duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-[#131823] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-[#dfe2f1] my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Close about modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#ff6a3d]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff6a3d]">
            About Qurinom Solutions
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
          Architecting High-Performance Digital Platforms
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          Qurinom Solutions is an enterprise innovation platform dedicated to building proprietary digital software suites. We solve critical structural friction across workforce management, video intelligence, omnichannel commerce, and cultural preservation.
        </p>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-[#0b0f17] border border-white/5 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-[#ff6a3d]/20 text-[#ff6a3d] flex items-center justify-center mb-2.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-1">Product-First</h4>
            <p className="text-xs text-slate-400">Battle-tested in live commercial workflows with sub-100ms render cycles.</p>
          </div>

          <div className="p-4 bg-[#0b0f17] border border-white/5 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-[#00a9bc]/20 text-[#00a9bc] flex items-center justify-center mb-2.5">
              <Globe className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-1">Scalable Fabric</h4>
            <p className="text-xs text-slate-400">Elastic distributed architectures built to support millions of active nodes.</p>
          </div>

          <div className="p-4 bg-[#0b0f17] border border-white/5 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-[#0566d9]/20 text-[#adc6ff] flex items-center justify-center mb-2.5">
              <Shield className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-1">Enterprise Trust</h4>
            <p className="text-xs text-slate-400">SOC-2 readiness, zero-trust token handshakes, and strict compliance.</p>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="bg-[#0b0f17] border border-white/5 rounded-xl p-4 mb-6 flex flex-wrap items-center justify-around gap-4 text-center">
          <div>
            <div className="text-2xl font-bold font-display text-[#ff6a3d]">5+</div>
            <div className="text-[11px] font-mono uppercase text-slate-400">Flagship Products</div>
          </div>
          <div className="w-px h-8 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-2xl font-bold font-display text-[#00a9bc]">100+</div>
            <div className="text-[11px] font-mono uppercase text-slate-400">Platform Engineers</div>
          </div>
          <div className="w-px h-8 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-2xl font-bold font-display text-white">99.98%</div>
            <div className="text-[11px] font-mono uppercase text-slate-400">Core Uptime SLA</div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onNavigateProducts();
            }}
            className="w-full sm:flex-1 py-2.5 px-4 bg-[#ff6a3d] hover:bg-[#ff7e55] text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition-all shadow-md shadow-[#ff6a3d]/20"
          >
            <span>Explore Product Fleet</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenDemo();
            }}
            className="w-full sm:w-auto py-2.5 px-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm rounded-lg transition-colors"
          >
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};
