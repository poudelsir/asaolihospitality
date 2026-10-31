import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, TrendingUp, Sparkles, Building } from 'lucide-react';
import { EXPERTISE_PILLARS, COMPANY_INFO } from '../data/company.ts';
import { ImageWithFallback } from '../components/ImageWithFallback.tsx';

interface ExpertiseViewProps {
  onNavigate: (tab: string) => void;
}

export const ExpertiseView: React.FC<ExpertiseViewProps> = ({ onNavigate }) => {
  const getIconForPillar = (id: string) => {
    switch (id) {
      case 'operations':
        return <Sparkles className="w-5 h-5 text-[#B89B72]" />;
      case 'franchise':
        return <ShieldCheck className="w-5 h-5 text-[#B89B72]" />;
      case 'development':
        return <Building className="w-5 h-5 text-[#B89B72]" />;
      case 'expansion':
        return <TrendingUp className="w-5 h-5 text-[#B89B72]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#B89B72]" />;
    }
  };

  return (
    <div className="w-full pt-28 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase tracking-[0.28em] text-[#B89B72] font-semibold">
            Capabilities & Governance
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#F5F1E9] leading-[1.08] [text-wrap:balance]">
            Disciplined Execution.
            <br />
            <span className="italic text-[#E8E0D4]">Exceptional Hospitality.</span>
          </h1>

          <div className="w-24 h-[1px] bg-[#B89B72]/50 my-6" />

          <p className="text-lg sm:text-xl text-[#D4BD9B] font-light leading-relaxed max-w-3xl">
            Our operational infrastructure bridges the gap between culinary creativity and commercial longevity. We bring institutional discipline to restaurant operations and franchise management across Ireland.
          </p>
        </div>
      </section>

      {/* Editorial Visual Composition */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#161614] border border-[#B89B72]/20 p-4 sm:p-8">
          <div className="lg:col-span-7">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=85"
              alt="Culinary excellence and hospitality operations"
              aspectRatioClass="aspect-[16/9]"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 space-y-4 p-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B89B72] font-semibold block">
              The Irish Hospitality Arena
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9]">
              Built for Sustainable Performance
            </h2>
            <p className="text-sm text-[#DCD6CA] leading-relaxed">
              Operating restaurants in modern Ireland requires high-level adherence to health safety, stringent staff training, supply chain resilience, and consistent customer satisfaction. ASA Hospitality was architected specifically to master these competencies.
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Pillars Detailed Breakdown */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-28 space-y-16">
        {EXPERTISE_PILLARS.map((pillar, index) => (
          <div
            key={pillar.id}
            id={pillar.id}
            className={`p-8 sm:p-14 bg-[#161614] border border-[#B89B72]/30 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
              index % 2 === 1 ? 'lg:bg-[#181816]' : ''
            }`}
          >
            {/* Left description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded border border-[#B89B72]/40 flex items-center justify-center bg-[#1A1A18]">
                  {getIconForPillar(pillar.id)}
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#B89B72] font-semibold block">
                    Pillar {pillar.number}
                  </span>
                  <span className="text-xs text-[#9E998F] font-mono">Expertise Area</span>
                </div>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9]">
                {pillar.title}
              </h2>

              <p className="text-base text-[#D4BD9B] font-light leading-relaxed">
                {pillar.shortDesc}
              </p>

              <p className="text-sm text-[#9E998F] leading-relaxed">
                {pillar.detailedDesc}
              </p>
            </div>

            {/* Right deliverables list */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-[#121210] border border-[#252522] space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B89B72] font-semibold block pb-2 border-b border-[#252522]">
                Key Operational Deliverables
              </span>
              <ul className="space-y-3.5 text-sm text-[#DCD6CA]">
                {pillar.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#B89B72] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm">{deliv}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 mt-4 border-t border-[#252522] flex justify-between items-center text-xs text-[#9E998F]">
                <span>Standardized & Audited</span>
                <span className="text-[#B89B72]">Republic of Ireland</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Operational Assurance & CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 bg-[#1A1A18] border border-[#B89B72]/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
              Operational Inquiries
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9]">
              Explore Hospitality Operations With Us
            </h3>
            <p className="text-xs sm:text-sm text-[#9E998F]">
              Connect with {COMPANY_INFO.director} and the management team at ASA Hospitality to review our operational protocols and franchise management capabilities.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span>SCHEDULE OPERATIONAL CONSULTATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
