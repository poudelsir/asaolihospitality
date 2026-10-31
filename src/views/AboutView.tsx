import React from 'react';
import { ArrowUpRight, ShieldCheck, Check } from 'lucide-react';
import { COMPANY_INFO, VALUES_LIST } from '../data/company.ts';
import { ImageWithFallback } from '../components/ImageWithFallback.tsx';

interface AboutViewProps {
  onNavigate: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-28 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.28em] text-[#B89B72] font-semibold">
              About ASA Hospitality
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#F5F1E9] leading-[1.08] [text-wrap:balance]">
            An Elevated Approach
            <br />
            <span className="italic text-[#E8E0D4]">to Irish Hospitality.</span>
          </h1>

          <div className="w-24 h-[1px] bg-[#B89B72]/50 my-6" />

          <p className="text-lg sm:text-xl text-[#D4BD9B] font-light leading-relaxed max-w-3xl">
            ASA Hospitality is a contemporary Irish hospitality company dedicated to restaurant operations, franchise partnerships, and the creation of distinctive dining experiences.
          </p>
        </div>
      </section>

      {/* Hero Visual Composition */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-28">
        <div className="relative border border-[#B89B72]/20 p-2 sm:p-4 bg-[#161614]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
            alt="European hospitality craftsmanship"
            aspectRatioClass="aspect-[21/9]"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Story & Who We Are (Split Grid) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Col 1: Who We Are */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
              Who We Are
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9]">
              Contemporary Hospitality with European Rigour.
            </h2>
            <div className="w-16 h-[1px] bg-[#B89B72]/40" />
            <p className="text-sm sm:text-base text-[#DCD6CA] leading-relaxed">
              Operating under the corporate entity <strong>{COMPANY_INFO.legalName}</strong> (CRO Registration: {COMPANY_INFO.crn}), ASA Hospitality acts as both an active operator of premier restaurant franchises and an incubator for future food and beverage concepts.
            </p>
            <p className="text-sm text-[#9E998F] leading-relaxed">
              We operate from an understanding that the Irish culinary market is among the most dynamic in Western Europe. Diners in Ireland seek authenticity, vibrant flavours, responsible sourcing, and uncompromising service standards.
            </p>
          </div>

          {/* Col 2: Our Story */}
          <div className="lg:col-span-6 space-y-6 bg-[#161614] p-8 sm:p-10 border border-[#B89B72]/20">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
              Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9]">
              Building an Enduring Foundation.
            </h2>
            <div className="w-16 h-[1px] bg-[#B89B72]/40" />
            <p className="text-sm sm:text-base text-[#DCD6CA] leading-relaxed">
              Founded in Ireland with a commitment to culinary precision and business integrity, ASA Hospitality established its operational footprint by acquiring the franchise rights to operate <strong>Tuk Tuk Wok Bar</strong> at the renowned Marina Market in Cork.
            </p>
            <p className="text-sm text-[#9E998F] leading-relaxed">
              From this strong operational anchor, our leadership identified opportunities to scale. Rather than viewing hospitality as a series of isolated eateries, we built ASA Hospitality as an umbrella enterprise engineered for governance, multi-unit franchise management, and sustainable brand creation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision (Asymmetric Cards) */}
      <section className="bg-[#141412] py-24 border-y border-[#222220] mb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="p-8 sm:p-12 bg-[#1A1A18] border border-[#B89B72]/30 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
                Our Purpose
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9]">
                Our Mission
              </h3>
              <div className="w-12 h-[1px] bg-[#B89B72]/40" />
              <p className="text-sm sm:text-base text-[#DCD6CA] leading-relaxed">
                To deliver consistently exceptional restaurant experiences by uniting authentic culinary recipes, operational discipline, and thoughtful guest hospitality across every concept we operate.
              </p>
              <ul className="space-y-3 pt-4 text-xs text-[#9E998F]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B89B72]" />
                  <span>Uncompromised quality standards in ingredient selection</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B89B72]" />
                  <span>Meticulous adherence to franchisor recipes and culinary integrity</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B89B72]" />
                  <span>Empowered, well-trained kitchen and front-of-house teams</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-12 bg-[#1A1A18] border border-[#B89B72]/30 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
                Our Direction
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9]">
                Our Vision
              </h3>
              <div className="w-12 h-[1px] bg-[#B89B72]/40" />
              <p className="text-sm sm:text-base text-[#DCD6CA] leading-relaxed">
                To establish ASA Hospitality as a respected and progressive hospitality group in Ireland, known for introducing compelling dining concepts and building sustainable commercial partnerships.
              </p>
              <ul className="space-y-3 pt-4 text-xs text-[#9E998F]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B89B72]" />
                  <span>Disciplined multi-unit expansion across key Irish urban hubs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B89B72]" />
                  <span>Collaborative relationships with international franchisors</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B89B72]" />
                  <span>Long-term stewardship of brands with authentic cultural identity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-28">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
            Guiding Ethos
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1E9]">
            Our Values.
          </h2>
          <p className="text-sm sm:text-base text-[#9E998F]">
            The foundational beliefs that shape our operational decisions, our team culture, and our commercial relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES_LIST.map((val, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#161614] border border-[#B89B72]/20 hover:border-[#B89B72]/60 transition-colors space-y-4"
            >
              <span className="font-serif text-2xl text-[#B89B72]">0{idx + 1}</span>
              <h3 className="font-serif text-xl text-[#F5F1E9]">{val.title}</h3>
              <p className="text-xs sm:text-sm text-[#9E998F] leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach to Hospitality */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-28">
        <div className="p-8 sm:p-14 bg-[#181816] border border-[#B89B72]/30 space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
              Philosophy in Practice
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9]">
              Our Approach to Hospitality
            </h2>
            <div className="w-16 h-[1px] bg-[#B89B72]/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#DCD6CA] leading-relaxed">
            <div className="space-y-3">
              <h4 className="font-serif text-xl text-[#F5F1E9]">Quality in Execution</h4>
              <p className="text-xs sm:text-sm text-[#9E998F]">
                Hospitality begins in the prep kitchen before the doors open. We maintain rigorous standards for freshness, temperature control, and presentation across every shift.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-serif text-xl text-[#F5F1E9]">Guest-Centric Atmosphere</h4>
              <p className="text-xs sm:text-sm text-[#9E998F]">
                Dining is an emotional experience. Whether at a bustling market counter like Tuk Tuk Wok Bar or a future seated restaurant, we engineer warmth, speed, and genuine hospitality.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-serif text-xl text-[#F5F1E9]">Transparent Governance</h4>
              <p className="text-xs sm:text-sm text-[#9E998F]">
                We pride ourselves on transparent communication with franchise licensors, regulatory bodies in Ireland, and commercial property owners, creating trust that lasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance & Statutory Transparency */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 bg-[#141412] border border-[#B89B72]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded border border-[#B89B72]/40 flex items-center justify-center bg-[#1A1A18] text-[#B89B72] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#B89B72] font-semibold block">
                Corporate Governance & Registration
              </span>
              <p className="text-sm text-[#F5F1E9]">
                {COMPANY_INFO.legalName} · Ireland CRN: {COMPANY_INFO.crn} · Director: {COMPANY_INFO.director}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium text-[#111111] bg-[#B89B72] hover:bg-[#D4BD9B] transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span>CONNECT WITH LEADERSHIP</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
