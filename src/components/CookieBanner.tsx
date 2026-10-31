import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('asa_cookie_consent');
    if (!consent) {
      // Delay display slightly for quiet luxury feel
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('asa_cookie_consent', 'accepted_all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('asa_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-50 p-5 bg-[#141412]/95 backdrop-blur-md border border-[#B89B72]/30 shadow-2xl rounded-none text-xs text-[#E8E0D4] space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-[#B89B72]">
          <ShieldCheck className="w-4 h-4" />
          <span className="font-serif text-sm font-semibold tracking-wider text-[#F5F1E9]">
            PRIVACY & COOKIES
          </span>
        </div>
        <button
          onClick={acceptEssential}
          className="text-[#9E998F] hover:text-[#F5F1E9] p-1 cursor-pointer"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-[#9E998F] leading-relaxed">
        ASA Hospitality respects your privacy in compliance with Irish and EU GDPR regulations. We use essential cookies to maintain secure site performance and analytical cookies to refine our corporate presentation.
      </p>

      <div className="flex items-center justify-between pt-1 gap-2">
        <button
          onClick={onOpenPrivacy}
          className="text-[11px] text-[#B89B72] hover:underline cursor-pointer tracking-wider uppercase"
        >
          Read Policy
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={acceptEssential}
            className="px-3 py-1.5 text-[11px] uppercase tracking-wider text-[#E8E0D4] border border-[#B89B72]/30 hover:border-[#B89B72] transition-colors cursor-pointer"
          >
            Essential Only
          </button>
          <button
            onClick={acceptAll}
            className="px-3 py-1.5 text-[11px] uppercase tracking-wider text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] font-medium transition-colors cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};
