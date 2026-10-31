import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company.ts';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'corporate' | 'cookies') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const currentYear = 2026;

  const handleNav = (tab: string) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0C] text-[#E8E0D4] border-t border-[#B89B72]/20 pt-20 pb-12 relative overflow-hidden">
      {/* Subtle background ambient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B89B72]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#222220]">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-serif text-3xl tracking-[0.18em] font-medium text-[#F5F1E9] block">
                ASA HOSPITALITY
              </span>
              <p className="font-serif italic text-lg text-[#B89B72] mt-2 tracking-wide">
                "{COMPANY_INFO.tagline}"
              </p>
            </div>
            <p className="text-sm text-[#9E998F] leading-relaxed max-w-md font-sans">
              An independent Irish hospitality group dedicated to operating distinctive restaurant concepts, nurturing franchise partnerships, and delivering elevated dining experiences.
            </p>
            <div className="pt-2 text-xs text-[#9E998F] space-y-1">
              <div className="flex items-center gap-2 text-[#E8E0D4]">
                <ShieldCheck className="w-4 h-4 text-[#B89B72]" />
                <span className="font-medium text-[#F5F1E9]">{COMPANY_INFO.legalName}</span>
              </div>
              <p className="pl-6 text-[#9E998F]">
                Incorporated in Ireland · Company Registration No. <span className="text-[#B89B72] font-mono">{COMPANY_INFO.crn}</span>
              </p>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#B89B72] transition-colors cursor-pointer text-[#E8E0D4]/80 hover:translate-x-1 duration-200 inline-block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#B89B72] transition-colors cursor-pointer text-[#E8E0D4]/80 hover:translate-x-1 duration-200 inline-block"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('brands')}
                  className="hover:text-[#B89B72] transition-colors cursor-pointer text-[#E8E0D4]/80 hover:translate-x-1 duration-200 inline-block"
                >
                  Our Brands
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('expertise')}
                  className="hover:text-[#B89B72] transition-colors cursor-pointer text-[#E8E0D4]/80 hover:translate-x-1 duration-200 inline-block"
                >
                  Our Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('partnerships')}
                  className="hover:text-[#B89B72] transition-colors cursor-pointer text-[#E8E0D4]/80 hover:translate-x-1 duration-200 inline-block"
                >
                  Partnerships
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#B89B72] transition-colors cursor-pointer text-[#E8E0D4]/80 hover:translate-x-1 duration-200 inline-block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Direct Inquiries Col */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
              Corporate Enquiries
            </h4>
            <div className="space-y-3.5 text-sm text-[#E8E0D4]/90">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 hover:text-[#B89B72] transition-colors group"
              >
                <div className="w-8 h-8 rounded border border-[#B89B72]/20 flex items-center justify-center bg-[#1A1A18] group-hover:border-[#B89B72]">
                  <Mail className="w-4 h-4 text-[#B89B72]" />
                </div>
                <span>{COMPANY_INFO.email}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 hover:text-[#B89B72] transition-colors group"
              >
                <div className="w-8 h-8 rounded border border-[#B89B72]/20 flex items-center justify-center bg-[#1A1A18] group-hover:border-[#B89B72]">
                  <Phone className="w-4 h-4 text-[#B89B72]" />
                </div>
                <span className="font-mono text-sm">{COMPANY_INFO.phoneDisplay}</span>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded border border-[#B89B72]/20 flex items-center justify-center bg-[#1A1A18] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#B89B72]" />
                </div>
                <div>
                  <p className="text-xs text-[#9E998F] uppercase tracking-wider">Restaurant Brand Venue</p>
                  <p className="text-sm text-[#F5F1E9]">Tuk Tuk Wok Bar</p>
                  <p className="text-xs text-[#9E998F]">Marina Market, Cork, T12 YX76, Ireland</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://asaolihospitality.ie"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#B89B72] hover:text-[#D4BD9B] tracking-wider uppercase underline underline-offset-4"
              >
                <span>{COMPANY_INFO.domain}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9E998F]">
          <p>© {currentYear} {COMPANY_INFO.legalName}. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#B89B72] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-[#B89B72] transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#B89B72] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onOpenLegal('corporate')}
              className="hover:text-[#B89B72] transition-colors cursor-pointer"
            >
              Corporate Registration (CRN 825046)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
