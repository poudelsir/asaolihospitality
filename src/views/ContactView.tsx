import React, { useState } from 'react';
import { Mail, Phone, MapPin, Building2, Check, ArrowUpRight, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company.ts';
import { validateInquiry, type PartnershipInquiry } from '../utils/validation.ts';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState<PartnershipInquiry>({
    fullName: '',
    company: '',
    businessEmail: '',
    phoneNumber: '',
    enquiryType: 'General Corporate Enquiry',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const faqs = [
    {
      q: 'What is the relationship between ASA Hospitality and Tuk Tuk Wok Bar?',
      a: 'ASA Hospitality (ASA OLI HOSPITALITY LIMITED) is the parent hospitality operating company. Tuk Tuk Wok Bar is one of its operated restaurant brands, managed through an exclusive regional franchise agreement in Cork, Ireland.',
    },
    {
      q: 'Where is the operating restaurant located?',
      a: 'Tuk Tuk Wok Bar operates at the Marina Market, Centre Park Road, Mahon, Cork, T12 YX76, Republic of Ireland.',
    },
    {
      q: 'Does ASA Hospitality partner with new franchise concepts?',
      a: 'Yes. ASA Hospitality actively evaluates reputable international, European, and UK restaurant brands seeking an experienced, compliant operating partner for the Republic of Ireland.',
    },
    {
      q: 'Who directs ASA Hospitality?',
      a: 'The company is led by Director Ankit Oli, registered under Irish company registration number 825046.',
    },
  ];

  return (
    <div className="w-full pt-28 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase tracking-[0.28em] text-[#B89B72] font-semibold">
            Executive Inquiries
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#F5F1E9] leading-[1.08] [text-wrap:balance]">
            Start a Conversation.
          </h1>

          <div className="w-24 h-[1px] bg-[#B89B72]/50 my-6" />

          <p className="text-lg sm:text-xl text-[#D4BD9B] font-light leading-relaxed max-w-3xl">
            Whether inquiring about corporate governance, restaurant operations, or franchise development, our executive desk is at your disposal.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Cards + Contact Form */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#161614] border border-[#B89B72]/30 space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B89B72] font-semibold block">
                Corporate Entity
              </span>
              <div>
                <h3 className="font-serif text-2xl text-[#F5F1E9]">{COMPANY_INFO.legalName}</h3>
                <p className="text-xs text-[#9E998F] mt-1">
                  Private Limited Company Incorporated in Ireland<br />
                  Registration Number: <span className="text-[#B89B72] font-mono">{COMPANY_INFO.crn}</span><br />
                  Director: {COMPANY_INFO.director}
                </p>
              </div>
            </div>

            <div className="p-8 bg-[#161614] border border-[#B89B72]/30 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B89B72] font-semibold block">
                Direct Contact Channels
              </span>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3.5 hover:text-[#B89B72] transition-colors group"
                >
                  <div className="w-9 h-9 rounded border border-[#B89B72]/30 flex items-center justify-center bg-[#1A1A18] group-hover:border-[#B89B72]">
                    <Mail className="w-4 h-4 text-[#B89B72]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#9E998F] block">Electronic Mail</span>
                    <span className="text-sm text-[#F5F1E9]">{COMPANY_INFO.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 hover:text-[#B89B72] transition-colors group"
                >
                  <div className="w-9 h-9 rounded border border-[#B89B72]/30 flex items-center justify-center bg-[#1A1A18] group-hover:border-[#B89B72]">
                    <Phone className="w-4 h-4 text-[#B89B72]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#9E998F] block">Telephone Line</span>
                    <span className="text-sm font-mono text-[#F5F1E9]">{COMPANY_INFO.phoneDisplay}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded border border-[#B89B72]/30 flex items-center justify-center bg-[#1A1A18]">
                    <Building2 className="w-4 h-4 text-[#B89B72]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#9E998F] block">Corporate Presence</span>
                    <span className="text-sm text-[#F5F1E9]">{COMPANY_INFO.headquarters}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#161614] border border-[#B89B72]/30 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B89B72] font-semibold block">
                Operating Restaurant Venue
              </span>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B89B72] shrink-0 mt-1" />
                <div className="text-xs text-[#9E998F] space-y-1">
                  <p className="font-serif text-base text-[#F5F1E9]">Tuk Tuk Wok Bar</p>
                  <p>Marina Market, Centre Park Road</p>
                  <p>Mahon, Cork, T12 YX76, Ireland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-[#181816] border border-[#B89B72]/30 p-8 sm:p-12 shadow-2xl">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B89B72] font-semibold block">
                Direct Dispatch
              </span>
              <h2 className="font-serif text-3xl text-[#F5F1E9] mt-1">
                Send a Formal Message
              </h2>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#141412] border border-[#B89B72] text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full border border-[#B89B72] flex items-center justify-center mx-auto text-[#B89B72]">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#F5F1E9]">Message Transmitted</h3>
                <p className="text-sm text-[#9E998F] max-w-md mx-auto">
                  Thank you, <span className="text-[#F5F1E9] font-medium">{formData.fullName}</span>. Your message has been sent to our corporate inbox at <span className="text-[#B89B72]">{COMPANY_INFO.email}</span>. We will respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs uppercase tracking-widest text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Liam O'Connor"
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
                      Organization / Entity
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Name (optional)"
                      className="w-full bg-[#121210] border border-[#333330] focus:border-[#B89B72] px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#666660] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleInputChange}
                      placeholder="name@example.ie"
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
                      Telephone *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+353 83 380 8675"
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
                    Enquiry Subject *
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleInputChange}
                    className="w-full bg-[#121210] border border-[#333330] focus:border-[#B89B72] px-4 py-3 text-sm text-[#F5F1E9] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="General Corporate Enquiry">General Corporate & Press Enquiry</option>
                    <option value="Franchise Partnership">Franchise Partnership & Brand Inquiry</option>
                    <option value="Commercial Landlord">Commercial Real Estate / Landlord Opportunity</option>
                    <option value="Supplier Partnership">Supplier & Produce Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can ASA Hospitality assist you?"
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
                  disabled={loading}
                  className="w-full py-4 text-xs uppercase tracking-[0.22em] font-semibold text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{loading ? 'SENDING MESSAGE...' : 'DISPATCH MESSAGE'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Answered Questions (Quiet Luxury Accordion) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>Corporate FAQ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9]">
            Frequently Addressed Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 bg-[#161614] border border-[#B89B72]/20 space-y-2">
              <h3 className="font-serif text-lg text-[#F5F1E9]">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-[#9E998F] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
