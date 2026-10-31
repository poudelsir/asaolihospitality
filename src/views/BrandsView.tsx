import React, { useState } from 'react';
import { MapPin, ArrowUpRight, Flame, UtensilsCrossed, Clock, CheckCircle2, X } from 'lucide-react';
import { RESTAURANT_BRANDS, COMPANY_INFO } from '../data/company.ts';
import { ImageWithFallback } from '../components/ImageWithFallback.tsx';

interface BrandsViewProps {
  onNavigate: (tab: string) => void;
  selectedBrandId?: string;
}

export const BrandsView: React.FC<BrandsViewProps> = ({ onNavigate }) => {
  const [activeBrandModal, setActiveBrandModal] = useState<string | null>(null);

  const selectedBrand = RESTAURANT_BRANDS.find((b) => b.id === activeBrandModal);

  return (
    <div className="w-full pt-28 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase tracking-[0.28em] text-[#B89B72] font-semibold">
            Brand Portfolio
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#F5F1E9] leading-[1.08] [text-wrap:balance]">
            A Curated Collection
            <br />
            <span className="italic text-[#E8E0D4]">of Dining Concepts.</span>
          </h1>

          <div className="w-24 h-[1px] bg-[#B89B72]/50 my-6" />

          <p className="text-lg sm:text-xl text-[#D4BD9B] font-light leading-relaxed max-w-3xl">
            ASA Hospitality operates and develops restaurant concepts defined by character, operational consistency, and culinary integrity. Explore our active operations and developing portfolio.
          </p>
        </div>
      </section>

      {/* Featured Primary Brand: TUK TUK WOK BAR */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-28">
        <div className="bg-[#161614] border border-[#B89B72]/40 shadow-2xl overflow-hidden">
          {/* Top Banner Tag */}
          <div className="bg-[#1F1F1C] px-8 py-3.5 border-b border-[#2A2A26] flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="text-[#B89B72] font-semibold tracking-widest uppercase text-[11px]">
                FEATURED OPERATING BRAND
              </span>
              <span className="text-[#9E998F]">·</span>
              <span className="text-[#E8E0D4]">Franchise Operation by ASA Hospitality</span>
            </div>
            <span className="text-[#9E998F] font-mono">Cork, Ireland</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Media Gallery */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="relative group overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85"
                  alt="Tuk Tuk Wok Bar Cork wok presentation"
                  aspectRatioClass="aspect-[16/10]"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Secondary Food Photography Strip */}
              <div className="grid grid-cols-2 gap-2 p-2 bg-[#121210] border-t border-[#2A2A26]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=85"
                  alt="Fresh Asian wok noodles"
                  aspectRatioClass="aspect-[16/9]"
                  className="w-full h-full object-cover"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=85"
                  alt="Artisanal wok tossed ingredients"
                  aspectRatioClass="aspect-[16/9]"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Brand Story & Spec Sheet */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-[#181816]">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89B72] mb-1">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Asian-Inspired Street Dining</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9] tracking-wide">
                    TUK TUK WOK BAR
                  </h2>
                  <p className="font-serif italic text-base text-[#D4BD9B] mt-1">
                    Vibrant flavours, high heat, and authentic wok craft.
                  </p>
                </div>

                <p className="text-sm text-[#DCD6CA] leading-relaxed">
                  Tuk Tuk Wok Bar brings vibrant Asian-inspired flavours and an exciting dining experience to Cork, Ireland. Combining the theatrical spectacle of open-flame wok cooking with fresh Irish vegetables and premium proteins, the concept has earned a dedicated following in the heart of Cork’s bustling culinary scene.
                </p>

                {/* Location Card */}
                <div className="p-4 bg-[#141412] border border-[#B89B72]/20 space-y-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#B89B72] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#F5F1E9] block">
                        Location & Venue
                      </span>
                      <p className="text-xs text-[#9E998F] leading-snug mt-1">
                        Marina Market, Centre Park Road, Mahon, Cork, T12 YX76, Ireland
                      </p>
                    </div>
                  </div>
                </div>

                {/* Operational Details */}
                <div className="space-y-2.5">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#B89B72] font-semibold block">
                    Culinary Characteristics
                  </span>
                  <div className="grid grid-cols-1 gap-2 text-xs text-[#9E998F]">
                    <div className="flex items-center gap-2">
                      <UtensilsCrossed className="w-3.5 h-3.5 text-[#B89B72]" />
                      <span>Customizable wok bowls (noodles, jasmine rice, rice noodles)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="w-3.5 h-3.5 text-[#B89B72]" />
                      <span>Signature Asian street food sides, gyoza, and steamed bao</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#B89B72]" />
                      <span>Fast casual speed with artisanal made-to-order quality</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#252522] space-y-3">
                <button
                  onClick={() => setActiveBrandModal('tuk-tuk-wok-bar')}
                  className="w-full py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] transition-colors cursor-pointer text-center flex items-center justify-center gap-2"
                >
                  <span>VIEW FULL OPERATIONAL DOSSIER</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-[#9E998F] text-center">
                  Operated exclusively in Cork by {COMPANY_INFO.legalName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Development Pipeline & Future Concepts */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-28">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.28em] text-[#B89B72] font-semibold">
            Concept Development Pipeline
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9]">
            The Scalable Portfolio Model
          </h2>
          <p className="text-sm text-[#9E998F] leading-relaxed">
            ASA Hospitality provides an institutional platform for introducing, operating, and expanding restaurant brands across the Republic of Ireland. Below is an overview of concept archetypes currently in active development or evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Concept 2: European Contemporary Bistro */}
          <div className="bg-[#161614] border border-[#B89B72]/20 hover:border-[#B89B72]/50 transition-all duration-300 p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#252522]">
                <span className="text-xs uppercase tracking-widest text-[#B89B72] font-semibold">
                  CONCEPT INCUBATOR · IN DEVELOPMENT
                </span>
                <span className="text-[11px] font-mono text-[#9E998F]">PIPELINE 02</span>
              </div>
              <h3 className="font-serif text-2xl text-[#F5F1E9]">
                Contemporary European Bistro & Bar
              </h3>
              <p className="text-sm text-[#DCD6CA] leading-relaxed">
                An all-day relaxed luxury European bistro concept pairing seasonal Irish produce with French and Mediterranean culinary techniques. Designed for high-street urban locations in Cork and Dublin.
              </p>
              <div className="space-y-2 pt-2 text-xs text-[#9E998F]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B72]" />
                  <span>Targeted at vibrant city-centre retail and cultural quarters</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B72]" />
                  <span>Curated natural wine list, craft cocktails, and small-plate dining</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#252522]">
              <button
                onClick={() => onNavigate('partnerships')}
                className="text-xs uppercase tracking-wider text-[#B89B72] hover:text-[#D4BD9B] font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Inquire About Location Partnerships</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Concept 3: Artisanal Bakery & Espresso Atelier */}
          <div className="bg-[#161614] border border-[#B89B72]/20 hover:border-[#B89B72]/50 transition-all duration-300 p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#252522]">
                <span className="text-xs uppercase tracking-widest text-[#B89B72] font-semibold">
                  CONCEPT INCUBATOR · IN DEVELOPMENT
                </span>
                <span className="text-[11px] font-mono text-[#9E998F]">PIPELINE 03</span>
              </div>
              <h3 className="font-serif text-2xl text-[#F5F1E9]">
                Artisanal Morning & Afternoon Atelier
              </h3>
              <p className="text-sm text-[#DCD6CA] leading-relaxed">
                A morning-to-afternoon specialty coffee and laminated pastry atelier, bringing European bakery precision and relaxed daytime gathering to Irish office and residential districts.
              </p>
              <div className="space-y-2 pt-2 text-xs text-[#9E998F]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B72]" />
                  <span>High-efficiency morning footfall and premium take-away model</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B72]" />
                  <span>Partnerships with specialty Irish coffee roasters and dairy farms</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#252522]">
              <button
                onClick={() => onNavigate('partnerships')}
                className="text-xs uppercase tracking-wider text-[#B89B72] hover:text-[#D4BD9B] font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Propose Commercial Space</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Partnership Callout */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 bg-[#1A1A18] border border-[#B89B72]/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
              For International & European Franchisors
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9]">
              Expand Your Brand in the Irish Market
            </h3>
            <p className="text-xs sm:text-sm text-[#9E998F]">
              ASA Hospitality provides a turnkey operational partnership for franchisors seeking experienced operators who strictly safeguard brand recipes, visual identities, and operational integrity.
            </p>
          </div>

          <button
            onClick={() => onNavigate('partnerships')}
            className="px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            DISCUSS FRANCHISE PARTNERSHIP
          </button>
        </div>
      </section>

      {/* Brand Details Modal */}
      {selectedBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#161614] border border-[#B89B72]/50 shadow-2xl flex flex-col text-[#E8E0D4] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-[#2A2A26] bg-[#1A1A18]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B72] font-semibold block">
                  BRAND OPERATIONAL PROFILE
                </span>
                <h3 className="font-serif text-2xl text-[#F5F1E9] mt-0.5">{selectedBrand.name}</h3>
              </div>
              <button
                onClick={() => setActiveBrandModal(null)}
                className="p-2 text-[#9E998F] hover:text-[#F5F1E9] border border-transparent hover:border-[#B89B72]/40 transition-colors cursor-pointer"
                aria-label="Close brand profile"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
              <div className="relative">
                <ImageWithFallback
                  src={selectedBrand.imageUrl}
                  alt={selectedBrand.name}
                  aspectRatioClass="aspect-[16/9]"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-xl text-[#F5F1E9]">Brand Overview</h4>
                <p className="text-sm text-[#DCD6CA] leading-relaxed">
                  {selectedBrand.description}
                </p>
              </div>

              <div className="p-4 bg-[#141412] border border-[#B89B72]/20 space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#B89B72] font-semibold block">
                  Official Venue & Operation
                </span>
                <p className="text-sm text-[#F5F1E9] font-serif">{selectedBrand.location.display}</p>
                <p className="text-xs text-[#9E998F] pt-1 border-t border-[#252522]">
                  {selectedBrand.franchiseModel}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif text-lg text-[#F5F1E9]">Operational Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#9E998F]">
                  {selectedBrand.features.map((feat, i) => (
                    <div key={i} className="p-3 bg-[#1A1A18] border border-[#2A2A26] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B89B72] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#141412] border-t border-[#2A2A26] flex justify-end">
              <button
                onClick={() => setActiveBrandModal(null)}
                className="px-6 py-2 text-xs uppercase tracking-[0.18em] font-medium bg-[#B89B72] hover:bg-[#D4BD9B] text-[#111111] transition-colors cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
