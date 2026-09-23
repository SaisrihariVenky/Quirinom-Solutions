import React from 'react';
import { ArrowRight, Terminal, Globe, Cpu } from 'lucide-react';
import { CurrentRoute } from '../types';

interface FooterProps {
  onNavigate: (route: CurrentRoute) => void;
  onOpenDemo: (productName?: string) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDemo,
  onOpenAbout,
  onOpenContact,
}) => {
  return (
    <footer className="w-full bg-[#070a10] border-t border-white/10 pt-16 pb-12 mt-20 text-[#dfe2f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Creed (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff6a3d] to-[#ff4500] p-0.5">
                <div className="w-full h-full bg-[#0b0f17] rounded-[6px] flex items-center justify-center">
                  <span className="font-display font-bold text-white text-xs">Q</span>
                </div>
              </div>
              <span className="text-xl font-bold font-display text-white">Qurinom Solutions</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#00a9bc]">
                ENTERPRISE TECH
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Architecting next-generation enterprise suites, cloud intelligence, and scalable digital ecosystems designed for real-world impact.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onOpenDemo()}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors border border-white/5"
              >
                <Terminal className="w-3.5 h-3.5 text-[#ff6a3d]" />
                <span>Request Sandbox Access</span>
              </button>
            </div>
          </div>

          {/* Col 2: Proprietary Platforms (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#ff6a3d] font-semibold">
              Proprietary Platforms
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('product-qhr')}
                  className="hover:text-white transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="group-hover:text-[#ff6a3d] transition-colors">QHR Platform</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded">
                    FLAGSHIP
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product-storeflaunt')}
                  className="hover:text-white transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="group-hover:text-white">StoreFlaunt Commerce</span>
                  <span className="text-[10px] font-mono text-slate-500">v2.8</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product-weevids')}
                  className="hover:text-white transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="group-hover:text-white">WeeVids Studio</span>
                  <span className="text-[10px] font-mono text-slate-500">v3.1</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product-my-holy-trip')}
                  className="hover:text-white transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="group-hover:text-white">My Holy Trip</span>
                  <span className="text-[10px] font-mono text-slate-500">v1.9</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product-snapp-buddy')}
                  className="hover:text-white transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="group-hover:text-white">Snapp Buddy AI</span>
                  <span className="text-[10px] font-mono text-slate-500">v2.4</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Enterprise & Connect (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00a9bc] font-semibold">
              Enterprise & Connect
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-white transition-colors text-left"
                >
                  About Company
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Products Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenDemo()}
                  className="hover:text-white transition-colors text-left"
                >
                  Schedule Demo
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors text-left"
                >
                  Engineering Support
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2025 QURINOM SOLUTIONS PVT. LTD. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>RUNTIME 99.98% SLA</span>
            </span>
            <span>·</span>
            <button
              onClick={() => onNavigate('product-qhr')}
              className="text-[#ff6a3d] hover:underline"
            >
              QHR Showcase
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
