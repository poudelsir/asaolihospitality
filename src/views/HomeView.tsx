import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, MapPin, Check, Mail, Phone, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, PHILOSOPHY_PRINCIPLES, EXPERTISE_PILLARS, RESTAURANT_BRANDS } from '../data/company.ts';
import { ImageWithFallback } from '../components/ImageWithFallback.tsx';
import { validateInquiry, type PartnershipInquiry } from '../utils/validation.ts';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onSelectBrand?: (brandId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectBrand }) => {
  // Partnership Form State
  const [formData, setFormData] = useState<PartnershipInquiry>({
    fullName: '',
    company: '',
    businessEmail: '',
    phoneNumber: '',
    enquiryType: 'Franchise Partnership',
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateInquiry(formData);
    if (!result.isValid) {
      setFormErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate realistic luxury dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const tukTukBrand = RESTAURANT_BRANDS[0];

  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 1 — HERO SECTION
          Full-screen cinematic visual with dark overlay, quiet luxury typography
         ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A09]">
        {/* Cinematic Background with Measured Scrim */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85"
            alt="ASA Hospitality Luxury European Dining Ambiance"
            aspectRatioClass="h-full w-full"
            className="h-full w-full object-cover scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Multi-layered cinematic gradient scrim for absolute legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/85" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#111111]/40 to-[#111111]/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-32 text-center flex flex-col items-center">
          {/* Small Heading */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#B89B72]">
              ASA HOSPITALITY | IRELAND
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F5F1E9] leading-[1.08] mb-8 max-w-4xl [text-wrap:balance]">
            Creating Experiences.
            <br />
            <span className="italic font-light text-[#E8E0D4]">Building Legacies.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#D4BD9B]/90 font-light max-w-2xl leading-relaxed mb-12">
            {COMPANY_INFO.heroSupportingText}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('about')}
              className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap"
            >
              EXPLORE OUR COMPANY
            </button>
            <button
              onClick={() => onNavigate('brands')}
              className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium text-[#F5F1E9] border border-[#B89B72]/50 hover:border-[#B89B72] hover:bg-[#B89B72]/10 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              DISCOVER OUR BRANDS
            </button>
          </div>

          {/* Subtle Trust Line */}
          <div className="mt-14 text-xs tracking-[0.16em] uppercase text-[#9E998F]/70">
            <span>Parent Company of Tuk Tuk Wok Bar · Cork, Ireland</span>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#B89B72]/70 hover:text-[#B89B72] transition-colors pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — INTRODUCTION (Editorial Split Layout)
         ========================================================================= */}
      <section className="py-28 md:py-36 bg-[#141412] border-b border-[#222220] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Editorial Statement */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
                  About ASA Hospitality
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F1E9] leading-tight [text-wrap:balance]">
                  {COMPANY_INFO.introductionHeadline}
                </h2>
              </div>

              <div className="w-16 h-[1px] bg-[#B89B72]/40" />

              <p className="text-base sm:text-lg text-[#DCD6CA] leading-relaxed font-light">
                {COMPANY_INFO.introductionText}
              </p>

              <p className="text-sm text-[#9E998F] leading-relaxed">
                Headquartered in Ireland, our governance structure connects rigorous operational management with an acute appreciation for food culture. We partner with franchise founders and brand creators who demand flawless execution in the Irish market.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B89B72] hover:text-[#D4BD9B] font-medium transition-colors cursor-pointer"
                >
                  <span>Learn About Our Heritage & Team</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right: Premium Editorial Visual Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative p-2 sm:p-4 border border-[#B89B72]/20 bg-[#1A1A18]/50">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85"
                  alt="Elevated restaurant dining interior and hospitality service"
                  aspectRatioClass="aspect-[4/3]"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 p-6 bg-[#161614] border border-[#B89B72]/30 max-w-xs shadow-2xl hidden sm:block">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B72] block">
                    Strategic Focus
                  </span>
                  <p className="font-serif text-lg text-[#F5F1E9] mt-1 leading-snug">
                    An independent Irish hospitality group shaping premier dining experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — OUR PHILOSOPHY
          Where Vision Meets Hospitality (01 Excellence, 02 Experience, 03 Growth)
         ========================================================================= */}
      <section className="py-28 md:py-36 bg-[#111111] border-b border-[#222220]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
              Foundational Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1E9] [text-wrap:balance]">
              Where Vision Meets Hospitality.
            </h2>
            <div className="w-16 h-[1px] bg-[#B89B72]/40 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {PHILOSOPHY_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="group relative p-8 sm:p-10 bg-[#161614] border border-[#B89B72]/20 hover:border-[#B89B72]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-[#252522]">
                    <span className="font-serif text-3xl sm:text-4xl text-[#B89B72] font-light">
                      {principle.number}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#9E998F]">
                      {principle.subtitle}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#F5F1E9] mb-4 group-hover:text-[#B89B72] transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-[#9E998F] leading-relaxed font-sans">
                    {principle.description}
                  </p>
                </div>
                <div className="pt-8 mt-6 border-t border-[#252522]/50 flex items-center justify-between text-xs text-[#B89B72]/80 group-hover:text-[#B89B72]">
                  <span className="uppercase tracking-widest text-[10px]">Principle {principle.number}</span>
                  <div className="w-6 h-[1px] bg-[#B89B72]/40 group-hover:w-10 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — OUR BRANDS (Featuring Tuk Tuk Wok Bar, Cork)
         ========================================================================= */}
      <section className="py-28 md:py-36 bg-[#141412] border-b border-[#222220]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
                Brand Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1E9]">
                A Collection of Experiences.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('brands')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B89B72] hover:text-[#D4BD9B] font-medium transition-colors cursor-pointer self-start md:self-end"
            >
              <span>View Complete Portfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Marquee Featured Brand: TUK TUK WOK BAR */}
          <div className="bg-[#1A1A18] border border-[#B89B72]/30 overflow-hidden shadow-2xl mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Brand Imagery Col */}
              <div className="lg:col-span-7 relative group overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1400&q=85"
                  alt="Tuk Tuk Wok Bar Fresh Asian Cooking"
                  aspectRatioClass="aspect-[16/10] lg:aspect-auto lg:h-full"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 p-3 bg-[#111111]/90 backdrop-blur-md border border-[#B89B72]/30">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
                    Operating Brand
                  </span>
                </div>
              </div>

              {/* Brand Information Col */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-[#161614]">
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#9E998F] block mb-2">
                      Asian-Inspired Fast Casual · Cork
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9] tracking-wide">
                      {tukTukBrand.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#DCD6CA] leading-relaxed">
                    {tukTukBrand.description}
                  </p>

                  {/* Location Card */}
                  <div className="p-4 bg-[#1F1F1C] border border-[#B89B72]/20 space-y-2">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#B89B72] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F1E9] block">
                          Restaurant Location
                        </span>
                        <p className="text-xs text-[#9E998F] leading-snug mt-1">
                          {tukTukBrand.location.display}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights without pills */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#B89B72] font-semibold block">
                      Concept Highlights
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#9E998F]">
                      {tukTukBrand.highlights.map((hl, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72]" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#252522]">
                  <button
                    onClick={() => {
                      if (onSelectBrand) onSelectBrand(tukTukBrand.id);
                      onNavigate('brands');
                    }}
                    className="w-full py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] transition-colors cursor-pointer text-center"
                  >
                    EXPLORE BRAND DETAILS
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Scalable Multi-Brand Pipeline Preview */}
          <div className="p-8 sm:p-10 border border-[#B89B72]/20 bg-[#161614]/60 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
                Scalable Portfolio Expansion
              </span>
              <h4 className="font-serif text-2xl text-[#F5F1E9]">
                Developing Future Hospitality Concepts
              </h4>
              <p className="text-xs text-[#9E998F] max-w-xl">
                ASA Hospitality is actively assessing strategic locations across Ireland for upcoming casual dining and franchise developments.
              </p>
            </div>
            <button
              onClick={() => onNavigate('partnerships')}
              className="px-6 py-3 text-xs uppercase tracking-[0.18em] font-medium text-[#F5F1E9] border border-[#B89B72]/40 hover:border-[#B89B72] hover:bg-[#B89B72]/10 transition-colors whitespace-nowrap cursor-pointer"
            >
              PROPOSE A LOCATION OR BRAND
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — WHAT WE DO / OUR EXPERTISE
         ========================================================================= */}
      <section className="py-28 md:py-36 bg-[#111111] border-b border-[#222220]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
              Capabilities & Focus
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1E9]">
              Our Expertise.
            </h2>
            <p className="text-sm sm:text-base text-[#9E998F] leading-relaxed">
              We operate across four specialized hospitality vectors, enabling franchise brands to flourish with operational integrity in Ireland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EXPERTISE_PILLARS.map((item) => (
              <div
                key={item.id}
                className="p-8 sm:p-10 bg-[#161614] border border-[#B89B72]/20 hover:border-[#B89B72]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl text-[#B89B72]">{item.number}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E998F]">Pillar</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#F5F1E9] group-hover:text-[#B89B72] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#DCD6CA] leading-relaxed">
                    {item.shortDesc}
                  </p>
                  <p className="text-xs text-[#9E998F] leading-relaxed font-sans pt-1">
                    {item.detailedDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#252522]">
                  <ul className="space-y-2 text-xs text-[#9E998F]">
                    {item.deliverables.slice(0, 2).map((deliv, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B89B72] shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('expertise')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B89B72] hover:text-[#D4BD9B] font-medium transition-colors cursor-pointer"
            >
              <span>Explore Operational Governance in Depth</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — OUR VISION (Cinematic Dark Statement)
         ========================================================================= */}
      <section className="relative py-32 md:py-44 bg-[#0A0A09] text-center overflow-hidden border-b border-[#222220]">
        <div className="absolute inset-0 z-0 opacity-25">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
            alt="European Architecture and Hospitality"
            aspectRatioClass="h-full w-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0A09]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
            Long-Term Ambition
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F5F1E9] leading-tight font-light [text-wrap:balance]">
            "Driven by Vision.
            <br />
            <span className="italic text-[#E8E0D4]">Defined by Experience."</span>
          </h2>

          <div className="w-20 h-[1px] bg-[#B89B72]/50 mx-auto" />

          <p className="text-base sm:text-lg text-[#D4BD9B]/90 font-light max-w-2xl mx-auto leading-relaxed">
            {COMPANY_INFO.visionStatement}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-8 text-xs text-[#9E998F] tracking-widest uppercase">
            <span>Operational Integrity</span>
            <span className="text-[#B89B72]">·</span>
            <span>Sustainable Growth</span>
            <span className="text-[#B89B72]">·</span>
            <span>Irish Enterprise</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — PARTNERSHIPS & ENQUIRY FORM
         ========================================================================= */}
      <section className="py-28 md:py-36 bg-[#141412] border-b border-[#222220]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Proposal pitch */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
                Strategic Collaboration
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1E9] leading-tight [text-wrap:balance]">
                Let's Build Something Exceptional.
              </h2>
              <div className="w-16 h-[1px] bg-[#B89B72]/40" />
              <p className="text-sm sm:text-base text-[#DCD6CA] leading-relaxed">
                We welcome conversations with restaurant brands, franchise partners, suppliers, and businesses interested in exploring opportunities within the hospitality industry.
              </p>

              <div className="space-y-4 pt-4 text-xs text-[#9E998F]">
                <div className="p-4 bg-[#1A1A18] border border-[#B89B72]/20 space-y-1.5">
                  <span className="font-semibold text-[#F5F1E9] block">Franchise Brands</span>
                  <p>International and UK/EU restaurant concepts seeking an experienced, compliant operator for the Republic of Ireland.</p>
                </div>
                <div className="p-4 bg-[#1A1A18] border border-[#B89B72]/20 space-y-1.5">
                  <span className="font-semibold text-[#F5F1E9] block">Commercial Landlords</span>
                  <p>Property owners and retail asset managers with prime high-footfall spaces in Cork, Dublin, and regional hubs.</p>
                </div>
                <div className="p-4 bg-[#1A1A18] border border-[#B89B72]/20 space-y-1.5">
                  <span className="font-semibold text-[#F5F1E9] block">Artisanal Irish Suppliers</span>
                  <p>High-grade produce, meat, and beverage purveyors sharing our commitment to culinary excellence.</p>
                </div>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="lg:col-span-7 bg-[#181816] p-8 sm:p-12 border border-[#B89B72]/30 shadow-2xl">
              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.2em] text-[#B89B72] font-medium block">
                  Confidential Inquiry
                </span>
                <h3 className="font-serif text-2xl text-[#F5F1E9] mt-1">
                  Discuss a Partnership
                </h3>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-[#1B1B18] border border-[#B89B72] text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full border border-[#B89B72] flex items-center justify-center mx-auto text-[#B89B72]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#F5F1E9]">Inquiry Received</h4>
                  <p className="text-sm text-[#9E998F] max-w-md mx-auto">
                    Thank you, <span className="text-[#F5F1E9] font-medium">{formData.fullName}</span>. Your enquiry has been routed directly to corporate leadership at ASA Hospitality ({COMPANY_INFO.legalName}). A director will respond within 1–2 business days.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: '',
                        company: '',
                        businessEmail: '',
                        phoneNumber: '',
                        enquiryType: 'Franchise Partnership',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 text-xs uppercase tracking-widest text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. John McCarthy"
                        className={`w-full bg-[#121210] border ${
                          formErrors.fullName ? 'border-red-400' : 'border-[#333330] focus:border-[#B89B72]'
                        } px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#666660] focus:outline-none transition-colors`}
                      />
                      {formErrors.fullName && (
                        <p className="text-xs text-red-400 mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. European Brands Ltd."
                        className="w-full bg-[#121210] border border-[#333330] focus:border-[#B89B72] px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#666660] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Business Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        className={`w-full bg-[#121210] border ${
                          formErrors.businessEmail ? 'border-red-400' : 'border-[#333330] focus:border-[#B89B72]'
                        } px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#666660] focus:outline-none transition-colors`}
                      />
                      {formErrors.businessEmail && (
                        <p className="text-xs text-red-400 mt-1">{formErrors.businessEmail}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                        Phone Number *
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

                  {/* Type of Enquiry */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                      Type of Enquiry *
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleInputChange}
                      className="w-full bg-[#121210] border border-[#333330] focus:border-[#B89B72] px-4 py-3 text-sm text-[#F5F1E9] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Franchise Partnership">Franchise Brand Partnership / Ireland Entry</option>
                      <option value="Commercial Real Estate / Landlord">Commercial Real Estate / Landlord Proposal</option>
                      <option value="Supplier & Logistics">Supplier / Irish Food & Beverage Purveyor</option>
                      <option value="Restaurant Operations">Restaurant Operations & Management</option>
                      <option value="General Corporate Enquiry">General Corporate & Press Enquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E8E0D4] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please outline the nature of your proposed partnership or enquiry..."
                      className={`w-full bg-[#121210] border ${
                        formErrors.message ? 'border-red-400' : 'border-[#333330] focus:border-[#B89B72]'
                      } px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#666660] focus:outline-none transition-colors resize-none`}
                    />
                    {formErrors.message && (
                      <p className="text-xs text-red-400 mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs uppercase tracking-[0.22em] font-semibold text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? 'TRANSMITTING INQUIRY...' : 'DISCUSS A PARTNERSHIP'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-[#9E998F] text-center">
                    Submissions are treated with strict confidentiality under Irish & EU commercial privacy standards.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — CONTACT & STATUTORY TOUCHPOINTS
         ========================================================================= */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1E9]">
              Start a Conversation.
            </h2>
            <p className="text-sm text-[#9E998F]">
              Direct contact channels for executive leadership, operational management, and brand inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Corporate Entity Card */}
            <div className="p-8 bg-[#161614] border border-[#B89B72]/20 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B72] font-semibold block">
                Registered Office
              </span>
              <h3 className="font-serif text-xl text-[#F5F1E9]">{COMPANY_INFO.legalName}</h3>
              <p className="text-xs text-[#9E998F] leading-relaxed">
                Incorporated in Ireland<br />
                Company Registration No. <span className="text-[#B89B72] font-mono">{COMPANY_INFO.crn}</span><br />
                Director: {COMPANY_INFO.director}
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-xs text-[#B89B72] hover:underline"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Direct Telephone Card */}
            <div className="p-8 bg-[#161614] border border-[#B89B72]/20 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B72] font-semibold block">
                Telephone & Direct Inquiries
              </span>
              <h3 className="font-serif text-xl text-[#F5F1E9]">Corporate Desk</h3>
              <p className="text-xs text-[#9E998F] leading-relaxed">
                Monday to Friday: 09:00 – 18:00 IST<br />
                Direct Line:
              </p>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="font-mono text-base text-[#B89B72] hover:text-[#D4BD9B] block"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>
              <p className="text-[11px] text-[#9E998F]">
                Website: {COMPANY_INFO.domain}
              </p>
            </div>

            {/* Operating Restaurant Venue */}
            <div className="p-8 bg-[#161614] border border-[#B89B72]/20 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B72] font-semibold block">
                Operating Brand Venue
              </span>
              <h3 className="font-serif text-xl text-[#F5F1E9]">Tuk Tuk Wok Bar</h3>
              <p className="text-xs text-[#9E998F] leading-relaxed">
                Marina Market, Centre Park Road<br />
                Mahon, Cork, T12 YX76<br />
                Republic of Ireland
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('brands')}
                  className="text-xs text-[#B89B72] hover:underline cursor-pointer"
                >
                  View Restaurant Brand Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
