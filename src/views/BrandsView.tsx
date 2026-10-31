import React, { useState } from 'react';
import { MapPin, ArrowUpRight, Flame, UtensilsCrossed, Clock, CheckCircle2, X, ExternalLink, Sparkles } from 'lucide-react';
import { RESTAURANT_BRANDS, COMPANY_INFO } from '../data/company.ts';
import { ImageWithFallback } from '../components/ImageWithFallback.tsx';

interface BrandsViewProps {
  onNavigate: (tab: string) => void;
  selectedBrandId?: string;
}

export const BrandsView: React.FC<BrandsViewProps> = ({ onNavigate }) => {
  const [activeBrandModal, setActiveBrandModal] = useState<string | null>(null);
  const [activeMenuTab, setActiveMenuTab] = useState<string>('All');

  const selectedBrand = RESTAURANT_BRANDS.find((b) => b.id === activeBrandModal);
  const tukTukBrand = RESTAURANT_BRANDS[0];

  const menuCategories = ['All', 'Best Sellers', 'Noodles', 'Curries', 'Street Food', 'Bowls'];

  const filteredMenuItems = tukTukBrand.menuItems
    ? activeMenuTab === 'All'
      ? tukTukBrand.menuItems
      : tukTukBrand.menuItems.filter((item) => item.category === activeMenuTab)
    : [];

  return (
    <div className="w-full pt-28 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.28em] text-[#B89B72] font-semibold">
              Brand Portfolio
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#F5F1E9] leading-[1.08] [text-wrap:balance]">
            A Curated Collection
            <br />
            <span className="italic text-[#E8E0D4]">of Dining Concepts.</span>
          </h1>

          <div className="w-24 h-[1px] bg-[#B89B72]/50 my-6" />

          <p className="text-lg sm:text-xl text-[#D4BD9B] font-light leading-relaxed max-w-3xl">
            ASA Hospitality operates and develops restaurant concepts defined by character, operational consistency, and culinary integrity. Discover our active franchise operation in Cork and developing pipeline.
          </p>
        </div>
      </section>

      {/* =========================================================================
          FEATURED BRAND: TUK TUK WOK BAR (GREEN THEME & OFFICIAL BRANDING)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-28">
        <div className="bg-[#0B1E16] border border-[#10B981]/40 shadow-2xl overflow-hidden relative">
          {/* Top Emerald Green Accent Banner */}
          <div className="bg-[#071912] px-8 py-3.5 border-b border-[#123824] flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="text-[#10B981] font-semibold tracking-widest uppercase text-[11px]">
                OFFICIAL FRANCHISE OUTLET · GREEN SIGNATURE THEME
              </span>
              <span className="text-[#86AA9A]">·</span>
              <span className="text-[#E8E0D4]">Operated by ASA OLI HOSPITALITY LIMITED</span>
            </div>
            <a
              href="https://tuktukwokbar.ie/"
              target="_blank"
              rel="noreferrer"
              className="text-[#A7F3D0] hover:text-[#10B981] flex items-center gap-1 font-mono transition-colors"
            >
              <span>tuktukwokbar.ie</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Media Gallery from Official Website */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-[#081510]">
              <div className="relative group overflow-hidden">
                <ImageWithFallback
                  src="https://tuktukwokbar.ie/wp-content/uploads/2026/03/Marina-market.webp"
                  alt="Tuk Tuk Wok Bar official Marina Market Cork outlet"
                  aspectRatioClass="aspect-[16/10]"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 p-2 bg-[#064E3B]/90 backdrop-blur-md border border-[#10B981]/40 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="text-[10px] uppercase tracking-wider text-[#A7F3D0] font-medium">
                    Marina Market, Cork
                  </span>
                </div>
              </div>

              {/* Official Food Photography Strip */}
              <div className="grid grid-cols-3 gap-2 p-2 bg-[#06120D] border-t border-[#123824]">
                <div className="relative group overflow-hidden">
                  <ImageWithFallback
                    src="https://tuktukwokbar.ie/wp-content/uploads/2026/03/crispy-duck-1.webp"
                    alt="Crispy Duck and Street Food"
                    aspectRatioClass="aspect-[4/3]"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/75 p-1 text-center">
                    <span className="text-[10px] text-[#A7F3D0] font-sans">Crispy Specialities</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden">
                  <ImageWithFallback
                    src="https://tuktukwokbar.ie/wp-content/uploads/2026/03/ssddd.webp"
                    alt="Live Wok Kitchen Fire"
                    aspectRatioClass="aspect-[4/3]"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/75 p-1 text-center">
                    <span className="text-[10px] text-[#A7F3D0] font-sans">Wok Master Theatre</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden">
                  <ImageWithFallback
                    src="https://tuktukwokbar.ie/wp-content/uploads/2026/03/massaman-1.webp"
                    alt="Massaman Curry"
                    aspectRatioClass="aspect-[4/3]"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/75 p-1 text-center">
                    <span className="text-[10px] text-[#A7F3D0] font-sans">Aromatic Curries</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Story & Spec Sheet with Official Logo */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-[#0D241B]">
              <div className="space-y-6">
                {/* Official Logo Emblem & Heading */}
                <div className="flex items-center gap-4 pb-4 border-b border-[#1A4230]">
                  <div className="w-16 h-16 rounded-xl bg-[#071912] border border-[#10B981]/50 p-2 flex items-center justify-center shrink-0 shadow-xl">
                    <img
                      src="https://tuktukwokbar.ie/wp-content/uploads/2024/05/Screenshot_65-removebg-preview-1.png"
                      alt="Tuk Tuk Wok Bar Official Logo"
                      className="max-h-full max-w-full object-contain filter drop-shadow"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#10B981]">
                      <Flame className="w-3.5 h-3.5" />
                      <span>Award-Winning Asian Street Food</span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9] tracking-wide mt-1">
                      {tukTukBrand.name}
                    </h2>
                  </div>
                </div>

                <p className="font-serif italic text-base text-[#A7F3D0]">
                  "{tukTukBrand.tagline}"
                </p>

                <p className="text-sm text-[#D1E7DD] leading-relaxed font-sans">
                  {tukTukBrand.description}
                </p>

                {/* Exact Requested Location Card */}
                <div className="p-4 bg-[#081812] border border-[#10B981]/40 space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#10B981] block">
                        Franchised Outlet Location
                      </span>
                      <p className="text-sm text-[#F5F1E9] font-medium leading-snug mt-1">
                        Central Park Road, Marina Market
                      </p>
                      <p className="text-xs text-[#9EBFB0] leading-snug">
                        Cork, Cork County, Ireland · T12 YX76
                      </p>
                    </div>
                  </div>
                </div>

                {/* Culinary Characteristics */}
                <div className="space-y-2.5">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#10B981] font-semibold block">
                    Signature Culinary Offerings
                  </span>
                  <div className="grid grid-cols-1 gap-2 text-xs text-[#C5E1D4]">
                    <div className="flex items-center gap-2">
                      <UtensilsCrossed className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Crispy Chilli, Pad Thai, Satay Skewers, and Spice Boxes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Theatrical high-heat wok toss with fresh Irish vegetables</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Freshly prepared to order for market dine-in, collection & delivery</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#1A4230] space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setActiveBrandModal('tuk-tuk-wok-bar')}
                    className="py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#0A1610] bg-[#10B981] hover:bg-[#34D399] transition-colors cursor-pointer text-center flex items-center justify-center gap-2"
                  >
                    <span>VIEW FULL DOSSIER</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <a
                    href="https://tuktukwokbar.ie/"
                    target="_blank"
                    rel="noreferrer"
                    className="py-3.5 text-xs uppercase tracking-[0.16em] font-medium text-[#A7F3D0] border border-[#10B981]/50 hover:bg-[#10B981]/20 transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5"
                  >
                    <span>OFFICIAL WEBSITE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-[11px] text-[#86AA9A] text-center">
                  Franchise operated exclusively in Cork by {COMPANY_INFO.legalName}
                </p>
              </div>
            </div>
          </div>

          {/* Authentic Menu Showcase Strip (Green Theme) */}
          <div className="p-8 sm:p-12 bg-[#081510] border-t border-[#123824]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.22em] text-[#10B981] font-semibold block mb-1">
                  Culinary Highlights
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9]">
                  Signature Dishes from Tuk Tuk Wok Bar
                </h3>
              </div>

              {/* Interactive Category Filter */}
              <div className="flex flex-wrap gap-2">
                {menuCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveMenuTab(cat)}
                    className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                      activeMenuTab === cat
                        ? 'bg-[#10B981] text-[#0A1610] font-semibold'
                        : 'bg-[#0E241A] text-[#9EBFB0] hover:text-[#F5F1E9] border border-[#123824]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMenuItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#0B1E16] border border-[#10B981]/20 hover:border-[#10B981]/50 transition-all duration-300 p-5 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <ImageWithFallback
                        src={item.imageUrl}
                        alt={item.name}
                        aspectRatioClass="aspect-[16/10]"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] uppercase tracking-wider bg-[#064E3B]/90 text-[#A7F3D0] border border-[#10B981]/40">
                        {item.tag}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#10B981] block">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-lg text-[#F5F1E9] mt-0.5">
                        {item.name}
                      </h4>
                    </div>

                    <p className="text-xs text-[#9EBFB0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#123824] flex items-center justify-between text-xs text-[#A7F3D0]">
                    <span>Wok-Fired Fresh</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                  </div>
                </div>
              ))}
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

      {/* Brand Details Modal (Emerald Green Theme for Tuk Tuk) */}
      {selectedBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0A1812] border border-[#10B981]/50 shadow-2xl flex flex-col text-[#E8E0D4] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-[#123824] bg-[#071912]">
              <div className="flex items-center gap-3">
                {selectedBrand.logoUrl && (
                  <div className="w-12 h-12 rounded-lg bg-[#05110C] border border-[#10B981]/40 p-1 flex items-center justify-center shrink-0">
                    <img
                      src={selectedBrand.logoUrl}
                      alt={selectedBrand.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#10B981] font-semibold block">
                    OFFICIAL OPERATIONAL PROFILE
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F1E9] mt-0.5">{selectedBrand.name}</h3>
                </div>
              </div>
              <button
                onClick={() => setActiveBrandModal(null)}
                className="p-2 text-[#9EBFB0] hover:text-[#F5F1E9] border border-transparent hover:border-[#10B981]/40 transition-colors cursor-pointer"
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
                <p className="text-sm text-[#D1E7DD] leading-relaxed">
                  {selectedBrand.description}
                </p>
              </div>

              {/* Exact Location Card */}
              <div className="p-4 bg-[#06120D] border border-[#10B981]/30 space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#10B981] font-semibold block">
                  Official Franchised Outlet Location
                </span>
                <p className="text-sm text-[#F5F1E9] font-serif">{selectedBrand.location.display}</p>
                <p className="text-xs text-[#86AA9A] pt-1 border-t border-[#123824]">
                  {selectedBrand.franchiseModel}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif text-lg text-[#F5F1E9]">Operational Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#C5E1D4]">
                  {selectedBrand.features.map((feat, i) => (
                    <div key={i} className="p-3 bg-[#081812] border border-[#123824] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedBrand.websiteUrl && (
                <div className="p-4 bg-[#0B2217] border border-[#10B981]/40 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#10B981] block">Official Franchise Website</span>
                    <span className="text-xs text-[#C5E1D4]">Explore full consumer menus, drone delivery & reviews</span>
                  </div>
                  <a
                    href={selectedBrand.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-xs uppercase tracking-wider bg-[#10B981] text-[#0A1610] font-semibold hover:bg-[#34D399] transition-colors flex items-center gap-1.5"
                  >
                    <span>tuktukwokbar.ie</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            <div className="p-4 bg-[#071912] border-t border-[#123824] flex justify-end">
              <button
                onClick={() => setActiveBrandModal(null)}
                className="px-6 py-2 text-xs uppercase tracking-[0.18em] font-medium bg-[#10B981] hover:bg-[#34D399] text-[#0A1610] transition-colors cursor-pointer"
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
