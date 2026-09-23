import React, { useState, useEffect } from 'react';
import { CurrentRoute, ProductFeature, ViewportMode } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RequestDemoModal } from './components/RequestDemoModal';
import { FeatureDetailModal } from './components/FeatureDetailModal';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailsQHR } from './pages/ProductDetailsQHR';
import { ProductDetailPlaceholder } from './pages/ProductDetailPlaceholder';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<CurrentRoute>('home');
  const [viewportMode, setViewportMode] = useState<ViewportMode>('responsive');

  // Modals state
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoProductTarget, setDemoProductTarget] = useState<string>('QHR');
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<ProductFeature | null>(null);

  // Scroll to top on route change
  const handleNavigate = (route: CurrentRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDemo = (productName: string = 'QHR') => {
    setDemoProductTarget(productName);
    setIsDemoModalOpen(true);
  };

  // Helper for other product pages
  const getProductForRoute = (route: CurrentRoute) => {
    if (route === 'product-storeflaunt') return PRODUCTS.find((p) => p.id === 'storeflaunt');
    if (route === 'product-weevids') return PRODUCTS.find((p) => p.id === 'weevids');
    if (route === 'product-my-holy-trip') return PRODUCTS.find((p) => p.id === 'my-holy-trip');
    if (route === 'product-snapp-buddy') return PRODUCTS.find((p) => p.id === 'snapp-buddy');
    return null;
  };

  // Viewport mode wrapper styling
  const getViewportWrapperStyle = () => {
    if (viewportMode === 'desktop') {
      return 'max-w-[1440px] mx-auto border-x border-white/10 shadow-2xl min-h-screen bg-[#0b0f17]';
    }
    if (viewportMode === 'tablet') {
      return 'max-w-[768px] mx-auto border-x border-white/10 shadow-2xl min-h-screen bg-[#0b0f17]';
    }
    if (viewportMode === 'mobile') {
      return 'max-w-[390px] mx-auto border-x border-white/10 shadow-2xl min-h-screen bg-[#0b0f17]';
    }
    return 'w-full min-h-screen bg-[#0b0f17]';
  };

  const currentPlaceholderProduct = getProductForRoute(currentRoute);

  return (
    <div className="min-h-screen bg-[#05080e] text-[#dfe2f1] font-sans antialiased selection:bg-[#ff6a3d] selection:text-white">
      {/* Viewport Frame Container */}
      <div className={getViewportWrapperStyle()}>
        {/* Navigation Bar */}
        <Navbar
          currentRoute={currentRoute}
          onNavigate={handleNavigate}
          onOpenDemo={handleOpenDemo}
          onOpenAbout={() => setIsAboutModalOpen(true)}
          onOpenContact={() => setIsContactModalOpen(true)}
          viewportMode={viewportMode}
          onSetViewportMode={setViewportMode}
        />

        {/* Page Content View Router */}
        <main className="w-full">
          {currentRoute === 'home' && (
            <HomePage onNavigate={handleNavigate} onOpenDemo={handleOpenDemo} />
          )}

          {currentRoute === 'products' && (
            <ProductsPage onNavigate={handleNavigate} onOpenDemo={handleOpenDemo} />
          )}

          {currentRoute === 'product-qhr' && (
            <ProductDetailsQHR
              onNavigate={handleNavigate}
              onOpenDemo={handleOpenDemo}
              onSelectFeature={(feat) => setSelectedFeature(feat)}
            />
          )}

          {currentPlaceholderProduct && (
            <ProductDetailPlaceholder
              product={currentPlaceholderProduct}
              onNavigate={handleNavigate}
              onOpenDemo={handleOpenDemo}
            />
          )}
        </main>

        {/* Global Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenDemo={handleOpenDemo}
          onOpenAbout={() => setIsAboutModalOpen(true)}
          onOpenContact={() => setIsContactModalOpen(true)}
        />
      </div>

      {/* Reusable Modals */}
      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultProduct={demoProductTarget}
      />

      <FeatureDetailModal
        feature={selectedFeature}
        isOpen={Boolean(selectedFeature)}
        onClose={() => setSelectedFeature(null)}
        onOpenDemo={handleOpenDemo}
      />

      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onOpenDemo={() => handleOpenDemo('Enterprise Overview')}
        onNavigateProducts={() => {
          setIsAboutModalOpen(false);
          handleNavigate('products');
        }}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onOpenDemo={() => handleOpenDemo('General Inquiry')}
      />
    </div>
  );
}
