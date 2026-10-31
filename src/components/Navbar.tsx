import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'brands', label: 'OUR BRANDS' },
    { id: 'expertise', label: 'OUR EXPERTISE' },
    { id: 'partnerships', label: 'PARTNERSHIPS' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    onOpenContact();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111]/92 backdrop-blur-md border-b border-[#B89B72]/20 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-[#111111]/85 via-[#111111]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
            aria-label="ASA Hospitality Home"
          >
            <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-[#F5F1E9] transition-colors group-hover:text-[#B89B72] whitespace-nowrap shrink-0">
              ASA HOSPITALITY
            </span>
          </button>

          {/* Zone 2: 4–5 single-line clean uppercase nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-[0.18em] text-[#E8E0D4]/80">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer hover:text-[#B89B72] ${
                    isActive ? 'text-[#B89B72] font-semibold' : 'text-[#E8E0D4]/80'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B89B72]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={handleContactClick}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#E8E0D4] hover:text-[#B89B72] transition-colors cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Full-Screen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111111]/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B89B72] font-semibold border-b border-[#B89B72]/20 pb-3">
              Navigation
            </span>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-serif text-2xl tracking-wide transition-colors py-1 cursor-pointer ${
                  currentTab === item.id ? 'text-[#B89B72] pl-2 border-l border-[#B89B72]' : 'text-[#F5F1E9]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-[#B89B72]/20 space-y-5">
            <button
              onClick={handleContactClick}
              className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] transition-colors cursor-pointer"
            >
              CONTACT US
            </button>
            <div className="text-center text-xs text-[#9E998F] tracking-wide space-y-1">
              <p>ASA OLI HOSPITALITY LIMITED · IRELAND</p>
              <p className="text-[11px] text-[#B89B72]">CRN: 825046 · Cork & Dublin</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
