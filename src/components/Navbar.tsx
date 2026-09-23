import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Laptop, Tablet, Smartphone, Maximize2 } from 'lucide-react';
import { CurrentRoute, ViewportMode } from '../types';

interface NavbarProps {
  currentRoute: CurrentRoute;
  onNavigate: (route: CurrentRoute) => void;
  onOpenDemo: (productName?: string) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  viewportMode: ViewportMode;
  onSetViewportMode: (mode: ViewportMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenDemo,
  onOpenAbout,
  onOpenContact,
  viewportMode,
  onSetViewportMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNav = (action: () => void) => {
    setIsMobileMenuOpen(false);
    action();
  };

  return (
    <>
      {/* Interactive Device Viewport Mode Switcher Bar (For UX Prototype Evaluation) */}
      <aside aria-label="Prototype Viewport Controls" className="sticky top-0 z-[60] bg-[#070a10] border-b border-white/10 px-3 py-1.5 flex items-center justify-between text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline text-slate-300">PROTOTYPE EVALUATION TOOLBAR</span>
          <span className="sm:hidden text-slate-300">DEVICE PREVIEW</span>
        </div>

        <div className="flex items-center gap-1 bg-white/[0.04] p-0.5 rounded-lg border border-white/5">
          <button
            onClick={() => onSetViewportMode('responsive')}
            title="Fluid Auto Responsive"
            className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
              viewportMode === 'responsive'
                ? 'bg-[#ff6a3d] text-white font-semibold'
                : 'hover:text-white text-slate-400'
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Auto</span>
          </button>
          <button
            onClick={() => onSetViewportMode('desktop')}
            title="Desktop 1440px Canvas"
            className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
              viewportMode === 'desktop'
                ? 'bg-[#ff6a3d] text-white font-semibold'
                : 'hover:text-white text-slate-400'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Desktop (1440px)</span>
          </button>
          <button
            onClick={() => onSetViewportMode('tablet')}
            title="Tablet 768px Canvas"
            className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
              viewportMode === 'tablet'
                ? 'bg-[#ff6a3d] text-white font-semibold'
                : 'hover:text-white text-slate-400'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Tablet (768px)</span>
          </button>
          <button
            onClick={() => onSetViewportMode('mobile')}
            title="Mobile 390px Canvas"
            className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
              viewportMode === 'mobile'
                ? 'bg-[#ff6a3d] text-white font-semibold'
                : 'hover:text-white text-slate-400'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Mobile (390px)</span>
          </button>
        </div>
      </aside>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-[37px] z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b0f17]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.6)] py-3'
            : 'bg-[#0b0f17]/60 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Logo & Title (Clickable -> Home) */}
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              {/* Logo Emblem */}
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff6a3d] to-[#ff4500] p-0.5 shadow-lg shadow-[#ff6a3d]/20 transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#0b0f17] rounded-[10px] flex items-center justify-center overflow-hidden">
                  <div className="w-4 h-4 rounded-full border-2 border-[#ff6a3d] flex items-center justify-center relative">
                    <span className="absolute -bottom-1 -right-1 w-2 h-0.5 bg-[#ff6a3d] rotate-45 transform" />
                  </div>
                </div>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display tracking-tight text-white group-hover:text-[#ff6a3d] transition-colors leading-none">
                  Qurinom
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#00a9bc] uppercase font-semibold leading-tight mt-0.5">
                  Solutions
                </span>
              </div>
            </div>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <button
                onClick={() => onNavigate('home')}
                className={`transition-colors relative py-1 ${
                  currentRoute === 'home'
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Home</span>
                {currentRoute === 'home' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6a3d] rounded-full" />
                )}
              </button>

              <button
                onClick={() => onNavigate('products')}
                className={`transition-colors relative py-1 ${
                  currentRoute === 'products' || currentRoute.startsWith('product-')
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Products</span>
                {(currentRoute === 'products' || currentRoute.startsWith('product-')) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6a3d] rounded-full" />
                )}
              </button>

              <button
                onClick={onOpenAbout}
                className="text-slate-400 hover:text-white transition-colors relative py-1"
              >
                <span>About</span>
              </button>

              <button
                onClick={onOpenContact}
                className="text-slate-400 hover:text-white transition-colors relative py-1"
              >
                <span>Contact</span>
              </button>
            </nav>

            {/* Zone 3: Primary Actions (Desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => onOpenDemo()}
                className="px-4 py-2 bg-[#ff6a3d] hover:bg-[#ff7e55] active:scale-[0.98] text-white font-medium text-xs rounded-lg uppercase tracking-wider font-mono flex items-center gap-2 transition-all shadow-md shadow-[#ff6a3d]/25"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                <span>Request a Demo</span>
              </button>
            </div>

            {/* Mobile Actions: Demo Quick CTA + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => onOpenDemo()}
                className="px-3 py-1.5 bg-[#ff6a3d] text-white text-xs font-mono uppercase tracking-wider rounded-md font-semibold"
              >
                Demo
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-[#ff6a3d]"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/70 backdrop-blur-md transition-opacity duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed top-[37px] right-0 bottom-0 w-72 max-w-[80vw] bg-[#10141e] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#ff6a3d] flex items-center justify-center font-bold text-white text-xs">
                    Q
                  </div>
                  <span className="font-display font-bold text-white text-base">Qurinom</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <div className="flex flex-col gap-2 py-6">
                <button
                  onClick={() => handleMobileNav(() => onNavigate('home'))}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    currentRoute === 'home'
                      ? 'bg-[#ff6a3d]/15 text-[#ff6a3d] font-semibold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>Home</span>
                  {currentRoute === 'home' && <ArrowRight className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => handleMobileNav(() => onNavigate('products'))}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    currentRoute === 'products' || currentRoute.startsWith('product-')
                      ? 'bg-[#ff6a3d]/15 text-[#ff6a3d] font-semibold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>Products</span>
                  {(currentRoute === 'products' || currentRoute.startsWith('product-')) && (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>

                <button
                  onClick={() => handleMobileNav(onOpenAbout)}
                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                >
                  About
                </button>

                <button
                  onClick={() => handleMobileNav(onOpenContact)}
                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => handleMobileNav(() => onOpenDemo())}
                className="w-full py-3 px-4 bg-[#ff6a3d] hover:bg-[#ff7e55] active:scale-[0.98] text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-[#ff6a3d]/25 transition-transform"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] font-mono text-center text-slate-500 uppercase">
                Qurinom Platform Engine // v4.8
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
