import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { ProductFeature } from '../types';

interface FeatureDetailModalProps {
  feature: ProductFeature | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo: (productName?: string) => void;
}

export const FeatureDetailModal: React.FC<FeatureDetailModalProps> = ({
  feature,
  isOpen,
  onClose,
  onOpenDemo,
}) => {
  if (!isOpen || !feature) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-all duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl bg-[#131823] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-[#dfe2f1] my-8 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#00a9bc]/15 rounded-full blur-3xl pointer-events-none -mr-10 -mt-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Close feature details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Pill */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00a9bc] uppercase tracking-wider">
            {feature.category || 'QHR Core Feature'}
          </span>
          <span className="text-xs text-slate-500 font-mono">Module Specification</span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#ff6a3d]/15 border border-[#ff6a3d]/30 flex items-center justify-center text-[#ff6a3d] shrink-0">
            <span className="material-symbols-outlined text-[26px]">{feature.icon}</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-display text-white tracking-tight">
              {feature.title}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">{feature.shortDesc}</p>
          </div>
        </div>

        {/* Full Detailed Description */}
        <div className="bg-[#0b0f17] border border-white/5 rounded-xl p-4 mb-5 text-sm text-slate-300 leading-relaxed">
          {feature.fullDesc}
        </div>

        {/* Key Operational Benefits */}
        {feature.benefits && feature.benefits.length > 0 && (
          <div className="mb-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Key Architectural Capabilities:
            </h4>
            <div className="space-y-2">
              {feature.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <span className="w-4 h-4 rounded-full bg-[#ff6a3d]/20 text-[#ff6a3d] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Operational Metrics */}
        {feature.metrics && (
          <div className="p-3 bg-white/[0.03] border border-white/5 rounded-lg flex items-center justify-between text-xs font-mono text-slate-300 mb-6">
            <span className="text-slate-500 uppercase">Impact Metric:</span>
            <span className="text-[#00a9bc] font-semibold">{feature.metrics}</span>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onOpenDemo(`QHR - ${feature.title}`);
            }}
            className="w-full sm:flex-1 py-2.5 px-4 bg-[#ff6a3d] hover:bg-[#ff7e55] active:scale-[0.98] text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition-all shadow-md shadow-[#ff6a3d]/20"
          >
            <span>Schedule Demo for this Feature</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-2.5 px-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
