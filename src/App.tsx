import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { CookieBanner } from './components/CookieBanner.tsx';
import { LegalModals } from './components/LegalModals.tsx';
import { HomeView } from './views/HomeView.tsx';
import { AboutView } from './views/AboutView.tsx';
import { BrandsView } from './views/BrandsView.tsx';
import { ExpertiseView } from './views/ExpertiseView.tsx';
import { PartnershipsView } from './views/PartnershipsView.tsx';
import { ContactView } from './views/ContactView.tsx';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedBrandId, setSelectedBrandId] = useState<string | undefined>(undefined);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'corporate' | 'cookies' | null>(null);

  // Sync hash routing if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'brands', 'expertise', 'partnerships', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBrand = (brandId: string) => {
    setSelectedBrandId(brandId);
    handleNavigate('brands');
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F1E9] flex flex-col font-sans selection:bg-[#B89B72]/30 selection:text-[#F5F1E9]">
      {/* 3-Zone Luxury Navbar */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenContact={() => handleNavigate('contact')}
      />

      {/* Main View Area */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectBrand={handleSelectBrand}
          />
        )}
        {currentTab === 'about' && <AboutView onNavigate={handleNavigate} />}
        {currentTab === 'brands' && (
          <BrandsView
            onNavigate={handleNavigate}
            selectedBrandId={selectedBrandId}
          />
        )}
        {currentTab === 'expertise' && <ExpertiseView onNavigate={handleNavigate} />}
        {currentTab === 'partnerships' && <PartnershipsView onNavigate={handleNavigate} />}
        {currentTab === 'contact' && <ContactView />}
      </main>

      {/* Corporate Dark Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModal(type)}
      />

      {/* GDPR Compliant Cookie Banner */}
      <CookieBanner onOpenPrivacy={() => setLegalModal('privacy')} />

      {/* Legal & Statutory Corporate Modals */}
      <LegalModals
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />
    </div>
  );
}
