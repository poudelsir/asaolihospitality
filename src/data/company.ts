/**
 * ASA HOSPITALITY (ASA OLI HOSPITALITY LIMITED)
 * Corporate Master Data & Information Model
 */

export interface MenuItem {
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface RestaurantBrand {
  id: string;
  name: string;
  logoUrl?: string;
  websiteUrl?: string;
  tagline: string;
  category: string;
  status: 'Operating' | 'Development' | 'Concept Incubator';
  themeColor: 'emerald' | 'gold';
  description: string;
  location: {
    venue: string;
    street: string;
    district: string;
    city: string;
    county: string;
    eircode: string;
    country: string;
    display: string;
  };
  highlights: string[];
  features: string[];
  menuItems?: MenuItem[];
  galleryImages: {
    url: string;
    caption: string;
  }[];
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
    logoUrl: 'https://tuktukwokbar.ie/wp-content/uploads/2024/05/Screenshot_65-removebg-preview-1.png',
    websiteUrl: 'https://tuktukwokbar.ie/',
    tagline: 'Authentic Flavours · Fresh Ingredients · Asian Street Food',
    category: 'Asian Street Food & Wok Bar',
    status: 'Operating',
    themeColor: 'emerald',
    description: 'Tuk Tuk Wok Bar brings vibrant Asian-inspired flavours and an exciting dining experience to Cork, Ireland. Operated under a franchise arrangement by ASA Hospitality, it combines sizzling open-flame wok theatre with fresh Irish produce, signature Asian curries, noodles, and authentic street food dishes.',
    location: {
      venue: 'Marina Market',
      street: 'Centre Park Road',
      district: 'Marina Market, Centre Park Road',
      city: 'Cork',
      county: 'Cork County',
      eircode: 'T12 YX76',
      country: 'Ireland',
      display: 'Centre Park Road, Marina Market, Cork, Cork County, Ireland (T12 YX76)',
    },
    highlights: [
      'High-heat authentic wok cookery tossed fresh to order',
      'Signature Crispy Chilli, Pad Thai, Satay Skewers & Spice Box',
      'Slow-cooked Massaman curry, Crispy Duck & traditional Tiffin bowls',
      'Flagship franchise outlet in Cork’s iconic Marina Market',
    ],
    features: [
      'Fresh Irish market vegetables & premium marinated meats',
      'Authentic Asian wok recipes & signature secret sauces',
      'Takeaway, dine-in at Marina Market, and digital delivery',
      'Strict adherence to Tuk Tuk franchisor culinary standards',
    ],
    menuItems: [
      {
        name: 'Crispy Chilli Chicken',
        category: 'Best Sellers',
        description: 'Tender chicken strips coated in a light crispy batter, wok-tossed with peppers, scallions, and signature sweet chilli glaze.',
        imageUrl: 'https://tuktukwokbar.ie/wp-content/uploads/2026/03/crispy-duck-1.webp',
        tag: 'Signature',
      },
      {
        name: 'Traditional Pad Thai',
        category: 'Noodles',
        description: 'Classic wok-fired flat rice noodles with egg, bean sprouts, crushed roasted peanuts, fresh lime, and homemade tamarind sauce.',
        imageUrl: 'https://tuktukwokbar.ie/wp-content/uploads/2024/05/TUk-TUK-23-copy-1.png',
        tag: 'Popular',
      },
      {
        name: 'Tuk Tuk Spice Box',
        category: 'Street Food',
        description: 'Crispy shredded chicken, salt & chilli chips, wok-charred onions, peppers, and spicy seasoning blend.',
        imageUrl: 'https://tuktukwokbar.ie/wp-content/uploads/2024/06/TUk-TUK-10-copy.png',
        tag: 'Customer Favourite',
      },
      {
        name: 'Aromatic Massaman Curry',
        category: 'Curries',
        description: 'Mild, rich coconut curry infused with lemongrass, cardamom, potatoes, roasted shallots, and fragrant jasmine rice.',
        imageUrl: 'https://tuktukwokbar.ie/wp-content/uploads/2026/03/massaman-1.webp',
        tag: 'Chef Special',
      },
      {
        name: 'Artisanal Tiffin Bowl',
        category: 'Bowls',
        description: 'Balanced layered Asian street food bowl with steamed jasmine rice, wok vegetables, and choice of glazed protein.',
        imageUrl: 'https://tuktukwokbar.ie/wp-content/uploads/2026/03/tiffin-1.webp',
        tag: 'Healthy Craft',
      },
      {
        name: 'Satay Skewers with Peanut Glaze',
        category: 'Starters',
        description: 'Char-grilled marinated chicken skewers served with rich Indonesian peanut satay dip and pickled cucumber relish.',
        imageUrl: 'https://tuktukwokbar.ie/wp-content/uploads/2025/07/cosmoco-1.webp',
        tag: 'Classic',
      },
    ],
    galleryImages: [
      {
        url: 'https://tuktukwokbar.ie/wp-content/uploads/2026/03/Marina-market.webp',
        caption: 'Tuk Tuk Wok Bar at Marina Market, Cork',
      },
      {
        url: 'https://tuktukwokbar.ie/wp-content/uploads/2026/03/ssddd.webp',
        caption: 'Authentic Wok Kitchen & Theatrical Open Flames',
      },
      {
        url: 'https://tuktukwokbar.ie/wp-content/uploads/2026/03/crispy-duck-1.webp',
        caption: 'Signature Crispy Duck & Street Food Craft',
      },
      {
        url: 'https://tuktukwokbar.ie/wp-content/uploads/2026/03/massaman-1.webp',
        caption: 'Slow-Simmered Massaman Coconut Curry',
      },
      {
        url: 'https://tuktukwokbar.ie/wp-content/uploads/2026/03/tiffin-1.webp',
        caption: 'Fresh Tiffin Rice & Vegetable Bowls',
      },
      {
        url: 'https://tuktukwokbar.ie/wp-content/uploads/2024/05/TUk-TUK-23-copy-1.png',
        caption: 'Fresh Wok Tossed Noodles Prepared to Order',
      },
    ],
    franchiseModel: 'Operated in Cork under an official franchise agreement by ASA OLI HOSPITALITY LIMITED.',
    imageUrl: 'https://tuktukwokbar.ie/wp-content/uploads/2026/03/Marina-market.webp',
    accentColor: '#10B981',
  },
  {
    id: 'concept-pipeline-02',
    name: 'EUROPEAN BISTRO & APÉRITIF',
    tagline: 'Refined Casual European Dining (Concept Pipeline)',
    category: 'Casual Contemporary Dining',
    status: 'Development',
    themeColor: 'gold',
    description: 'Part of ASA Hospitality’s long-term multi-brand vision. A contemporary European bistro concept currently in research and site assessment, designed for prime urban high-street destinations in Ireland.',
    location: {
      venue: 'Selected Urban High Street',
      street: 'Strategic Commercial Destination',
      district: 'City Centre',
      city: 'Cork / Dublin',
      county: 'Ireland',
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
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
        caption: 'European Bistro Interior Concept',
      },
      {
        url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Warm Timber and Brass Dining Ambiance',
      },
    ],
    franchiseModel: 'Proprietary concept under active development by ASA Hospitality.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
    accentColor: '#B89B72',
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
