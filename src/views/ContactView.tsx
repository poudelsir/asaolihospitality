import React, { useState } from 'react';
import { Mail, Phone, MapPin, Building2, Check, ArrowUpRight, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company.ts';
import { validateInquiry, type PartnershipInquiry } from '../utils/validation.ts';
import { submitContactInquiry, createDirectMailtoUrl, type ContactSubmissionResponse } from '../utils/api.ts';

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
  const [submissionResult, setSubmissionResult] = useState<ContactSubmissionResponse | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateInquiry(formData);
    if (!result.isValid) {
      setFormErrors(result.errors);
      return;
    }

    setLoading(true);
    const response = await submitContactInquiry(formData);
    setSubmissionResult(response);
    setLoading(false);
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'What is the relationship between ASA Hospitality and Tuk Tuk Wok Bar?',
      a: 'ASA Hospitality (ASA OLI HOSPITALITY LIMITED) is the parent hospitality operating company. Tuk Tuk Wok Bar is one of its operated restaurant brands, managed through an exclusive regional franchise agreement in Cork, Ireland.',
    },
    {
      q: 'Where is the operating restaurant located?',
      a: 'The franchised outlet operates at Centre Park Road, Marina Market, Cork, Cork County, Ireland (T12 YX76). Full consumer menus and updates are available on their official website: tuktukwokbar.ie.',
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

            <div className="p-8 bg-[#0B1E16] border border-[#10B981]/40 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#10B981] font-semibold block">
                  Operating Franchise Outlet
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <div className="text-xs text-[#C5E1D4] space-y-1">
                  <p className="font-serif text-lg text-[#F5F1E9] font-medium">Tuk Tuk Wok Bar</p>
                  <p className="font-medium text-[#A7F3D0]">Centre Park Road, Marina Market</p>
                  <p>Cork, Cork County, Ireland (T12 YX76)</p>
                  <div className="pt-2">
                    <a
                      href="https://tuktukwokbar.ie/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#10B981] hover:text-[#34D399] underline underline-offset-2"
                    >
                      <span>Official Franchise Website: tuktukwokbar.ie</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
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
              <div className="p-8 sm:p-12 bg-[#141412] border border-[#B89B72] text-center space-y-5 animate-in fade-in">
                <div className="w-14 h-14 rounded-full border border-[#B89B72] bg-[#B89B72]/10 flex items-center justify-center mx-auto text-[#B89B72]">
                  <Check className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#B89B72] font-semibold block mb-1">
                    DELIVERY CONFIRMED
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9]">Sent to info@asaolihospitality.ie</h3>
                </div>
                <div className="p-4 bg-[#0F0F0E] border border-[#2A2A26] text-left text-xs space-y-2 max-w-lg mx-auto">
                  <div className="flex items-center justify-between text-[#9E998F] border-b border-[#222220] pb-2">
                    <span>Corporate Inbox</span>
                    <span className="font-mono text-[#B89B72] font-semibold">info@asaolihospitality.ie</span>
                  </div>
                  <div className="flex items-center justify-between text-[#9E998F] border-b border-[#222220] pb-2">
                    <span>From</span>
                    <span className="text-[#F5F1E9]">{formData.fullName} ({formData.businessEmail})</span>
                  </div>
                  <div className="flex items-center justify-between text-[#9E998F]">
                    <span>Tracking Reference</span>
                    <span className="font-mono text-[#E8E0D4]">{submissionResult?.messageId || 'MSG-DISPATCHED'}</span>
                  </div>
                </div>
                <p className="text-xs text-[#9E998F] max-w-md mx-auto leading-relaxed">
                  Every inquiry submitted through our website is delivered straight to <span className="text-[#F5F1E9] font-medium">info@asaolihospitality.ie</span>. A director of ASA OLI HOSPITALITY LIMITED will review your inquiry and follow up directly.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <a
                    href={createDirectMailtoUrl(formData)}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider text-[#F5F1E9] border border-[#B89B72]/50 hover:bg-[#B89B72]/10 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#B89B72]" />
                    <span>Open in Email App (info@asaolihospitality.ie)</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        company: '',
                        businessEmail: '',
                        phoneNumber: '',
                        enquiryType: 'General Corporate Enquiry',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-widest text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] font-medium transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
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
