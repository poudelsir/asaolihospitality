/**
 * ASA HOSPITALITY (ASA OLI HOSPITALITY LIMITED)
 * Corporate Master Data & Information Model
 */

export interface RestaurantBrand {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: 'Operating' | 'Development' | 'Concept Incubator';
  description: string;
  location: {
    venue: string;
    street: string;
    district: string;
    city: string;
    eircode: string;
    country: string;
    display: string;
  };
  highlights: string[];
  features: string[];
  franchiseModel: string;
  imageUrl: string;
  accentColor: string;
}

export const COMPANY_INFO = {
  brandName: 'ASA HOSPITALITY',
  legalName: 'ASA OLI HOSPITALITY LIMITED',
  country: 'Ireland',
  crn: '825046',
  businessType: 'Private Limited Company',
  director: 'Ankit Oli',
  domain: 'asaolihospitality.ie',
  websiteUrl: 'https://asaolihospitality.ie',
  email: 'info@asaolihospitality.ie',
  phone: '+353 83 380 8675',
  phoneDisplay: '+353 83 380 8675',
  headquarters: 'Cork & Dublin, Ireland',
  tagline: 'Creating Experiences. Building Legacies.',
  heroAlternativeStatement: 'An Elevated Approach to Hospitality.',
  heroSupportingText: 'An independent hospitality company bringing distinctive restaurant concepts and exceptional dining experiences to life.',
  introductionHeadline: 'Hospitality Beyond Expectations.',
  introductionText: 'ASA Hospitality is an Ireland-based hospitality company dedicated to operating distinctive restaurant concepts and building meaningful brand partnerships. Through a commitment to quality, innovation, and customer experience, we aim to contribute to the evolving hospitality landscape.',
  visionStatement: 'Our ambition is to build a respected hospitality group through strong partnerships, thoughtful development, and a commitment to delivering exceptional dining experiences across Ireland and beyond.',
};

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: '01',
    title: 'Excellence',
    subtitle: 'Operational Rigour',
    description: 'A commitment to quality and operational standards. Every restaurant in our portfolio adheres to stringent culinary protocols, quality ingredient sourcing, and seamless guest service.',
  },
  {
    number: '02',
    title: 'Experience',
    subtitle: 'Memorable Moments',
    description: 'Creating memorable experiences through thoughtful hospitality. We curate vibrant atmospheres, authentic flavours, and attentive dining environments that resonate with contemporary diners.',
  },
  {
    number: '03',
    title: 'Growth',
    subtitle: 'Sustainable Expansion',
    description: 'Building sustainable partnerships and expanding distinctive restaurant concepts. We align with ambitious franchise partners and real estate custodians for measured, value-driven scaling.',
  },
];

export const EXPERTISE_PILLARS = [
  {
    id: 'operations',
    number: '01',
    title: 'Restaurant Operations',
    shortDesc: 'Delivering quality-driven restaurant experiences through effective operations.',
    detailedDesc: 'From daily kitchen execution and front-of-house excellence to inventory management, food hygiene certifications, and staff training, we establish high-standard operational rhythms that guarantee consistency and guest satisfaction.',
    deliverables: [
      'Comprehensive day-to-day culinary management',
      'HACCP & Irish health/safety compliance',
      'Guest service protocols & hospitality training',
      'Real-time inventory and supply-chain oversight',
    ],
  },
  {
    id: 'franchise',
    number: '02',
    title: 'Franchise Partnerships',
    shortDesc: 'Building relationships with established restaurant brands and franchise partners.',
    detailedDesc: 'We act as trusted franchise operators in Ireland, translating established international and regional dining concepts into thriving local locations while protecting brand equity, recipes, and identity.',
    deliverables: [
      'Franchise agreement compliance & brand protection',
      'Multi-unit expansion strategy in the Irish market',
      'Strict adherence to franchisor recipes and brand standards',
      'Collaborative operational reporting and audits',
    ],
  },
  {
    id: 'development',
    number: '03',
    title: 'Hospitality Development',
    shortDesc: 'Identifying opportunities to develop and grow hospitality concepts.',
    detailedDesc: 'Our strategic development arm evaluates prime commercial real estate, market demographics, emerging dining trends, and hospitality spaces in Cork, Dublin, and leading Irish metropolitan hubs.',
    deliverables: [
      'Site selection and footfall feasibility studies',
      'Kitchen design, equipment layout, and workflow optimization',
      'Regulatory planning, commercial leasing, and fit-out oversight',
      'Concept adaptation for Irish market dynamics',
    ],
  },
  {
    id: 'expansion',
    number: '04',
    title: 'Brand Expansion',
    shortDesc: 'Exploring opportunities to introduce distinctive restaurant brands into new markets.',
    detailedDesc: 'With a scalable foundation, ASA Hospitality is structured to incubate, launch, and scale fresh restaurant brands across food halls, high-street retail, and destination dining locations.',
    deliverables: [
      'Scalable restaurant concept architecture',
      'Market entry and localized brand positioning',
      'Strategic landlord and commercial partner alliances',
      'Long-term multi-brand portfolio diversification',
    ],
  },
];

export const RESTAURANT_BRANDS: RestaurantBrand[] = [
  {
    id: 'tuk-tuk-wok-bar',
    name: 'TUK TUK WOK BAR',
    tagline: 'Vibrant Asian-Inspired Flavours & Street Food Craft',
    category: 'Fast Casual / Asian Wok',
    status: 'Operating',
    description: 'Tuk Tuk Wok Bar brings vibrant Asian-inspired flavours and an exciting dining experience to Cork, Ireland. Operated under a franchise arrangement, it pairs traditional wok culinary theatre with fresh Irish produce and punchy artisanal sauces.',
    location: {
      venue: 'Marina Market',
      street: 'Centre Park Road',
      district: 'Mahon',
      city: 'Cork',
      eircode: 'T12 YX76',
      country: 'Ireland',
      display: 'Marina Market, Centre Park Road, Mahon, Cork, T12 YX76, Ireland',
    },
    highlights: [
      'High-heat wok cookery prepared fresh to order',
      'Customizable noodle & jasmine rice bowls',
      'Vibrant signature street food appetisers & bao',
      'Located at Cork’s premier cultural food destination',
    ],
    features: [
      'Fast-paced open kitchen environment',
      'Fresh local Irish vegetables and quality proteins',
      'Signature house-blended sauces & spicy seasonings',
      'Dine-in market seating and takeaway available',
    ],
    franchiseModel: 'Operated under an exclusive regional franchise agreement in Cork by ASA OLI HOSPITALITY LIMITED.',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
    accentColor: '#B89B72',
  },
  {
    id: 'concept-pipeline-02',
    name: 'EUROPEAN BISTRO & APÉRITIF',
    tagline: 'Refined Casual European Dining (Concept Pipeline)',
    category: 'Casual Contemporary Dining',
    status: 'Development',
    description: 'Part of ASA Hospitality’s long-term multi-brand vision. A contemporary European bistro concept currently in research and site assessment, designed for prime urban high-street destinations.',
    location: {
      venue: 'Selected Urban High Street',
      street: 'Strategic Commercial Destination',
      district: 'City Centre',
      city: 'Cork / Dublin',
      eircode: 'Planned',
      country: 'Ireland',
      display: 'Prime Urban Locations, Ireland (Site Assessment Stage)',
    },
    highlights: [
      'Seasonal European artisanal plates & charcuterie',
      'Curated organic wines & craft apéritifs',
      'Warm ambient interior with natural timber and brass',
      'All-day dining and evening social gathering',
    ],
    features: [
      'Carefully calibrated casual luxury price point',
      'Chef-led culinary direction and seasonal menus',
      'Scalable operational blueprint for metropolitan centres',
    ],
    franchiseModel: 'Proprietary concept under active development by ASA Hospitality.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
    accentColor: '#A39E93',
  },
];

export const VALUES_LIST = [
  {
    title: 'Authenticity & Craft',
    description: 'We respect culinary heritage and original brand identities, ensuring that every plate reflects integrity, true flavours, and expert technique.',
  },
  {
    title: 'Operational Precision',
    description: 'Behind every warm guest interaction lies disciplined operational management, stringent safety protocols, and meticulous attention to detail.',
  },
  {
    title: 'Enduring Partnerships',
    description: 'We measure success through long-term relationships with franchisors, property developers, local suppliers, and our team members.',
  },
  {
    title: 'Hospitality Stewardship',
    description: 'As an Irish registered company, we actively contribute to Ireland’s vibrant food and beverage ecosystem with ethical and sustainable practices.',
  },
];
