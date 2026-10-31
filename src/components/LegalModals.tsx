import React from 'react';
import { X, ShieldCheck, Building2, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company.ts';

interface LegalModalsProps {
  type: 'privacy' | 'terms' | 'corporate' | 'cookies' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#161614] border border-[#B89B72]/40 shadow-2xl flex flex-col text-[#E8E0D4] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2A2A26] bg-[#1A1A18]">
          <div className="flex items-center gap-3">
            {type === 'corporate' && <Building2 className="w-5 h-5 text-[#B89B72]" />}
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-[#B89B72]" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-[#B89B72]" />}
            {type === 'cookies' && <ShieldCheck className="w-5 h-5 text-[#B89B72]" />}
            <h3 className="font-serif text-2xl tracking-wide text-[#F5F1E9]">
              {type === 'corporate' && 'Statutory Corporate Information'}
              {type === 'privacy' && 'Privacy Policy & GDPR Statement'}
              {type === 'terms' && 'Terms & Conditions of Service'}
              {type === 'cookies' && 'Cookie Policy'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#9E998F] hover:text-[#F5F1E9] border border-transparent hover:border-[#B89B72]/40 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with smooth scrolling */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm leading-relaxed text-[#DCD6CA]">
          {type === 'corporate' && (
            <div className="space-y-6">
              <div className="p-4 bg-[#1F1F1C] border border-[#B89B72]/20 space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#B89B72] font-semibold block">
                  Companies Registration Office (CRO) Ireland
                </span>
                <p className="text-base font-serif text-[#F5F1E9]">{COMPANY_INFO.legalName}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#9E998F]">
                  <div>
                    <span className="block text-[#E8E0D4] font-medium">Company Registration Number</span>
                    <span className="font-mono text-[#B89B72]">{COMPANY_INFO.crn}</span>
                  </div>
                  <div>
                    <span className="block text-[#E8E0D4] font-medium">Jurisdiction</span>
                    <span>Ireland (EU)</span>
                  </div>
                  <div>
                    <span className="block text-[#E8E0D4] font-medium">Entity Type</span>
                    <span>{COMPANY_INFO.businessType}</span>
                  </div>
                  <div>
                    <span className="block text-[#E8E0D4] font-medium">Director</span>
                    <span>{COMPANY_INFO.director}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif text-lg text-[#F5F1E9]">Corporate Structure & Operations</h4>
                <p>
                  ASA OLI HOSPITALITY LIMITED is an independent Irish hospitality holding and operating enterprise. The company holds official franchise rights to operate Tuk Tuk Wok Bar located at Marina Market, Centre Park Road, Mahon, Cork, T12 YX76, Ireland.
                </p>
                <p>
                  All business partnerships, commercial supply contracts, and brand expansion agreements are governed exclusively under the laws of the Republic of Ireland.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#2A2A26] text-xs text-[#9E998F]">
                <p>Official Corporate Domain: <span className="text-[#B89B72]">{COMPANY_INFO.domain}</span></p>
                <p>Official Enquiries: <span className="text-[#B89B72]">{COMPANY_INFO.email}</span></p>
              </div>
            </div>
          )}

          {type === 'privacy' && (
            <div className="space-y-5">
              <p className="text-xs text-[#B89B72] uppercase tracking-wider">
                Last Updated: October 2026 · Compliant with GDPR (EU 2016/679) & Irish Data Protection Act 2018
              </p>
              <h4 className="font-serif text-lg text-[#F5F1E9]">1. Identity of the Data Controller</h4>
              <p>
                The data controller is {COMPANY_INFO.legalName}, registered in Ireland under CRN {COMPANY_INFO.crn}. You can contact us regarding any privacy matters at {COMPANY_INFO.email}.
              </p>

              <h4 className="font-serif text-lg text-[#F5F1E9]">2. Information We Collect</h4>
              <p>
                We collect personal information that you voluntarily submit through our corporate contact and partnership enquiry forms (name, corporate affiliation, business email address, contact telephone, and message content).
              </p>

              <h4 className="font-serif text-lg text-[#F5F1E9]">3. Purpose and Legal Basis</h4>
              <p>
                We process your data strictly to respond to business development enquiries, evaluate franchise cooperation, and communicate regarding hospitality operations based on legitimate business interests and explicit consent.
              </p>

              <h4 className="font-serif text-lg text-[#F5F1E9]">4. Your Rights Under GDPR</h4>
              <p>
                Under EU and Irish law, you retain the right to request access to, rectification of, or erasure of your personal data, as well as the right to restrict or object to processing. You may contact us at any time at {COMPANY_INFO.email}.
              </p>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-5">
              <p className="text-xs text-[#B89B72] uppercase tracking-wider">
                Governing Terms for asaolihospitality.ie
              </p>
              <h4 className="font-serif text-lg text-[#F5F1E9]">1. Corporate Ownership</h4>
              <p>
                This website is owned and operated by {COMPANY_INFO.legalName} ({COMPANY_INFO.brandName}). All trademarks, logos, brand names (including Tuk Tuk Wok Bar under franchise license), and editorial materials are protected by intellectual property laws.
              </p>

              <h4 className="font-serif text-lg text-[#F5F1E9]">2. Information Accuracy</h4>
              <p>
                ASA Hospitality makes every effort to ensure information regarding its restaurant brands, menus, operational hours, and corporate governance is accurate and up to date.
              </p>

              <h4 className="font-serif text-lg text-[#F5F1E9]">3. Applicable Law</h4>
              <p>
                These terms are governed by and construed in accordance with the laws of Ireland. The courts of Ireland have exclusive jurisdiction over any disputes arising from this website.
              </p>
            </div>
          )}

          {type === 'cookies' && (
            <div className="space-y-5">
              <h4 className="font-serif text-lg text-[#F5F1E9]">Our Approach to Cookies</h4>
              <p>
                ASA Hospitality adheres to a quiet luxury philosophy, meaning we minimize tracking and data collection to essential functionality.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-[#1B1B18] border border-[#B89B72]/20 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B89B72] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-[#F5F1E9] block">Strictly Necessary Cookies</span>
                    <span className="text-xs text-[#9E998F]">Essential for session continuity, navigation routing, and form security.</span>
                  </div>
                </div>
                <div className="p-3 bg-[#1B1B18] border border-[#B89B72]/20 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B89B72] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-[#F5F1E9] block">Analytical Performance Cookies</span>
                    <span className="text-xs text-[#9E998F]">Aggregated, anonymised telemetry that helps us evaluate device compatibility across Ireland and Europe.</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#141412] border-t border-[#2A2A26] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 text-xs uppercase tracking-[0.18em] font-medium bg-[#B89B72] hover:bg-[#D4BD9B] text-[#111111] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
