import React, { useState } from 'react';
import { ArrowUpRight, Check, CheckCircle2, Handshake, Building2, Utensils, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company.ts';
import { validateInquiry, type PartnershipInquiry } from '../utils/validation.ts';

interface PartnershipsViewProps {
  onNavigate: (tab: string) => void;
}

export const PartnershipsView: React.FC<PartnershipsViewProps> = () => {
  const [formData, setFormData] = useState<PartnershipInquiry>({
    fullName: '',
    company: '',
    businessEmail: '',
    phoneNumber: '',
    enquiryType: 'Franchise Brand Operator',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateInquiry(formData);
    if (!result.isValid) {
      setFormErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const partnerTypes = [
    {
      icon: <Utensils className="w-5 h-5 text-[#B89B72]" />,
      title: 'International & Regional Brands',
      subtitle: 'Franchise Operating Model',
      description: 'Restaurant concept owners looking for an experienced operator in the Republic of Ireland. We safeguard brand integrity, culinary standardisation, and customer loyalty.',
      offerings: ['Multi-unit operational execution', 'Irish regulatory compliance', 'Brand fidelity and quality control'],
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#B89B72]" />,
      title: 'Commercial Landlords & Developers',
      subtitle: 'Prime Hospitality Real Estate',
      description: 'Property owners and destination retail developers seeking reliable, high-performing food & beverage tenants for high-street, shopping centre, and food hall locations.',
      offerings: ['Long-term commercial leases', 'Turnkey fit-out coordination', 'High footfall activation'],
    },
    {
      icon: <Truck className="w-5 h-5 text-[#B89B72]" />,
      title: 'Irish Food & Beverage Suppliers',
      subtitle: 'Supply Chain Alliances',
      description: 'Producers, farms, and specialty distributors offering premium meats, poultry, produce, spices, and sustainable packaging aligned with our quality standards.',
      offerings: ['Reliable volume purchasing', 'Prompt settlement terms', 'Long-term mutual growth'],
    },
    {
      icon: <Handshake className="w-5 h-5 text-[#B89B72]" />,
      title: 'Hospitality Entrepreneurs',
      subtitle: 'Collaborative Concept Development',
      description: 'Culinary founders and innovators with distinctive concepts seeking an operational partner to scale their idea into an established hospitality enterprise.',
      offerings: ['Operational mentoring & back-office support', 'Scaling architecture', 'Irish market rollout'],
    },
  ];

  return (
    <div className="w-full pt-28 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase tracking-[0.28em] text-[#B89B72] font-semibold">
            Business Development & Alliances
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#F5F1E9] leading-[1.08] [text-wrap:balance]">
            Partnerships Built
            <br />
            <span className="italic text-[#E8E0D4]">on Mutual Excellence.</span>
          </h1>

          <div className="w-24 h-[1px] bg-[#B89B72]/50 my-6" />

          <p className="text-lg sm:text-xl text-[#D4BD9B] font-light leading-relaxed max-w-3xl">
            We collaborate with ambitious brand owners, real estate custodians, and quality suppliers to expand distinctive dining concepts across the Republic of Ireland.
          </p>
        </div>
      </section>

      {/* 4 Audience Channels Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerTypes.map((channel, i) => (
            <div
              key={i}
              className="p-8 sm:p-10 bg-[#161614] border border-[#B89B72]/20 hover:border-[#B89B72]/50 transition-all duration-300 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#252522]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded border border-[#B89B72]/30 flex items-center justify-center bg-[#1A1A18]">
                      {channel.icon}
                    </div>
                    <span className="text-xs uppercase tracking-wider text-[#B89B72] font-semibold">
                      {channel.subtitle}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#9E998F]">0{i + 1}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#F5F1E9]">
                  {channel.title}
                </h3>

                <p className="text-sm text-[#DCD6CA] leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#252522] space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#9E998F] block">
                  Core Partnership Value
                </span>
                <ul className="space-y-1.5 text-xs text-[#9E998F]">
                  {channel.offerings.map((off, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B72] shrink-0" />
                      <span>{off}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Development Inquiry Form */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-28">
        <div className="bg-[#181816] border border-[#B89B72]/30 p-8 sm:p-14 shadow-2xl">
          <div className="max-w-3xl mb-10 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
              Formal Proposal Submission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9]">
              Initiate a Commercial Dialogue
            </h2>
            <p className="text-sm text-[#9E998F]">
              Submit your inquiry or brand proposal. All commercial dialogues are conducted under mutual non-disclosure and professional discretion.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-10 bg-[#141412] border border-[#B89B72] text-center space-y-4 animate-in fade-in">
              <div className="w-12 h-12 rounded-full border border-[#B89B72] flex items-center justify-center mx-auto text-[#B89B72]">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#F5F1E9]">Commercial Proposal Logged</h3>
              <p className="text-sm text-[#9E998F] max-w-lg mx-auto">
                Thank you for reaching out, <span className="text-[#F5F1E9] font-medium">{formData.fullName}</span>. An executive representative of {COMPANY_INFO.legalName} has received your dossier and will arrange an introductory conversation.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 text-xs uppercase tracking-widest text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] transition-colors cursor-pointer"
                >
                  Submit Another Dossier
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                    Executive Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Eleanor Vance"
                    className={`w-full bg-[#121210] border ${
                      formErrors.fullName ? 'border-red-400' : 'border-[#333330] focus:border-[#B89B72]'
                    } px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#666660] focus:outline-none transition-colors`}
                  />
                  {formErrors.fullName && (
                    <p className="text-xs text-red-400 mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                    Corporate Entity / Brand Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Artisan Dining Group Ltd."
                    className="w-full bg-[#121210] border border-[#333330] focus:border-[#B89B72] px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#666660] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    placeholder="executive@domain.ie"
                    className={`w-full bg-[#121210] border ${
                      formErrors.businessEmail ? 'border-red-400' : 'border-[#333330] focus:border-[#B89B72]'
                    } px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#666660] focus:outline-none transition-colors`}
                  />
                  {formErrors.businessEmail && (
                    <p className="text-xs text-red-400 mt-1">{formErrors.businessEmail}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                    Telephone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+353 83 000 0000"
                    className={`w-full bg-[#121210] border ${
                      formErrors.phoneNumber ? 'border-red-400' : 'border-[#333330] focus:border-[#B89B72]'
                    } px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#666660] focus:outline-none transition-colors`}
                  />
                  {formErrors.phoneNumber && (
                    <p className="text-xs text-red-400 mt-1">{formErrors.phoneNumber}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                  Partnership Category *
                </label>
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleInputChange}
                  className="w-full bg-[#121210] border border-[#333330] focus:border-[#B89B72] px-4 py-3 text-sm text-[#F5F1E9] focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="Franchise Brand Operator">Franchise Brand Operator / Ireland Expansion</option>
                  <option value="Commercial Landlord / Real Estate">Commercial Landlord / Prime Retail Location</option>
                  <option value="Food & Beverage Supplier">Food & Beverage Supplier / Irish Producer</option>
                  <option value="Culinary Founder / Incubator">Culinary Founder / Concept Co-Development</option>
                  <option value="Other Corporate Collaboration">Other Strategic Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                  Proposal Overview *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Detail your proposed restaurant brand, commercial location specifications, or partnership scope..."
                  className={`w-full bg-[#121210] border ${
                    formErrors.message ? 'border-red-400' : 'border-[#333330] focus:border-[#B89B72]'
                  } px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#666660] focus:outline-none transition-colors resize-none`}
                />
                {formErrors.message && (
                  <p className="text-xs text-red-400 mt-1">{formErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-xs uppercase tracking-[0.22em] font-semibold text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{isSubmitting ? 'DISPATCHING PROPOSAL...' : 'SUBMIT PARTNERSHIP PROPOSAL'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
