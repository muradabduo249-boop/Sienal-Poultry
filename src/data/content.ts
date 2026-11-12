import { Product, NewsArticle, SalesCenter, MediaGalleryItem } from '../types';

export const COMPANY_INFO = {
  name: {
    ar: 'شركة سنال لإنتاج الدواجن المحدودة',
    en: 'Sienal for Poultry Production Co. Ltd.',
  },
  shortName: {
    ar: 'سنال للدواجن',
    en: 'Sienal Poultry',
  },
  slogan: {
    ar: 'جودة تثق بها... ومنتجات أقرب إليك',
    en: 'Quality You Trust... Products Closer to You',
  },
  sloganMobile: {
    ar: 'جودةً تُرى وتُذاق',
    en: 'Quality Seen and Tasted',
  },
  activity: {
    ar: 'إنتاج الدواجن وتوفير كتاكيت عمر يوم والدجاج اللاحم المجمد',
    en: 'Poultry Production, Day-Old Chicks & Frozen Broilers',
  },
  heroIntro: {
    ar: 'نعمل في مجال إنتاج الدواجن وتوفير منتجات تلبي احتياجات السوق، مع الاهتمام بالجودة وسلامة الغذاء وبناء علاقات قائمة على الثقة مع عملائنا وشركائنا.',
    en: 'We operate in poultry production providing products that meet market needs, emphasizing quality, food safety, and trust-based relationships with clients and partners.',
  },
  aboutIntro: {
    ar: 'في سنال، نعمل في قطاع إنتاج الدواجن من خلال توفير كتاكيت عمر يوم ومنتجات الدجاج اللاحم المجمد، واضعين احتياجات عملائنا واهتمامهم بجودة المنتجات في مقدمة أولوياتنا. نسعى إلى تقديم تجربة موثوقة لعملائنا وشركائنا، من خلال منتجات واضحة وخدمات يسهل الوصول إليها.',
    en: 'At Sienal, we operate in the poultry sector supplying day-old chicks and blast-frozen broilers, placing client needs and product quality at the forefront of our priorities.',
  },
  location: {
    ar: 'الخرطوم – السودان',
    en: 'Khartoum – Sudan',
  },
  address: {
    ar: 'الخرطوم - جبرة - شارع الأربعين - السودان',
    en: 'Khartoum - Jabra - 40th Street - Sudan',
  },
  phones: [
    { number: '0912340265', formatted: '0912 340 265', tel: '+249912340265', labelAr: 'الخط الموحد وخدمة العملاء', labelEn: 'Main Hotline' },
    { number: '0120167776', formatted: '0120 167 776', tel: '+249120167776', labelAr: 'مبيعات الكتاكيت والمزارع', labelEn: 'Chicks Sales' },
    { number: '0912509150', formatted: '0912 509 150', tel: '+249912509150', labelAr: 'الإدارة والطلبات التجارية', labelEn: 'Administration' },
  ],
  email: 'Info@seinal-sd.com',
  whatsapp: '249912340265',
  facebookUrl: 'https://web.facebook.com/profile.php?id=61593186693806',
  
  // Official brand assets
  logoIcon: '/assets/aistudio/received_1068402786215474_6ad98288.jpeg',
  logoFull: '/assets/aistudio/received_1096322426337064_535cd50f.jpeg',
  partnershipPoster: '/assets/aistudio/image_d5392b05.png',
  
  // High-res verified assets
  chicksHatcheryImage: '/src/assets/images/hero_chicks_hatchery_1794027907385.jpg',
  frozenBroilerImage: '/assets/aistudio/received_1650203086799138_4b93fc24.jpeg',
  packagedChickenImage: '/assets/aistudio/FB_IMG_1793630636935_850c84f5.jpg',
  farmInteriorImage: '/assets/aistudio/FB_IMG_1793630515463_05ea616e.jpg',
  poultryFarmFacilityImage: '/src/assets/images/modern_poultry_farm_1794403817650.jpg',
  coldStorageImage: '/src/assets/images/poultry_cold_storage_1794027908179.jpg',
  roastedChickenDishImage: '/src/assets/images/delicious_roasted_chicken_1794403837015.jpg',
  qualityInspectionImage: '/src/assets/images/poultry_quality_control_1794403856336.jpg',
};

export const VISION_MISSION_VALUES = {
  vision: {
    title: { ar: 'رؤيتنا', en: 'Our Vision' },
    content: {
      ar: 'أن نكون علامة موثوقة وذات حضور متميز في قطاع إنتاج الدواجن، من خلال تقديم منتجات تلبي احتياجات السوق وتعزز ثقة العملاء.',
      en: 'To be a trusted brand with a prominent presence in poultry production by delivering products that meet market demands and build customer confidence.',
    },
  },
  mission: {
    title: { ar: 'رسالتنا', en: 'Our Mission' },
    content: {
      ar: 'العمل على توفير منتجات دواجن بجودة موثوقة، والاهتمام بسلامة الغذاء، وبناء علاقات مستدامة مع عملائنا وشركائنا.',
      en: 'Providing reliable quality poultry products, emphasizing food safety, and fostering sustainable relationships with our clients and partners.',
    },
  },
  values: {
    title: { ar: 'القيم التي نعمل بها', en: 'Core Values' },
    items: [
      {
        ar: 'الجودة',
        en: 'Quality',
        desc: {
          ar: 'الاهتمام بجودة المنتجات في مختلف مراحل الإنتاج والتجهيز.',
          en: 'Commitment to high product quality across all production and handling phases.',
        },
      },
      {
        ar: 'الثقة',
        en: 'Trust',
        desc: {
          ar: 'بناء علاقات طويلة الأمد مع العملاء والشركاء.',
          en: 'Building long-lasting, transparent relationships with customers and partners.',
        },
      },
      {
        ar: 'المسؤولية',
        en: 'Responsibility',
        desc: {
          ar: 'الالتزام بالمسؤولية تجاه العملاء والمستهلكين.',
          en: 'Upholding strict responsibility towards consumers and market welfare.',
        },
      },
      {
        ar: 'التطوير',
        en: 'Continuous Development',
        desc: {
          ar: 'السعي المستمر لتحسين الأعمال وتطوير الأداء.',
          en: 'Constant pursuit of business enhancement and operational excellence.',
        },
      },
    ],
  },
};

export const PRODUCTS: Product[] = [
  {
    id: 'day-old-chicks',
    name: {
      ar: 'كتاكيت عمر يوم',
      en: 'Day-Old Chicks',
    },
    category: {
      ar: 'قطاع إنتاج الدواجن والمزارع',
      en: 'Hatchery & Farm Sector',
    },
    shortDescription: {
      ar: 'نوفر كتاكيت عمر يوم ضمن نشاط الشركة في إنتاج الدواجن، لخدمة المربين والعاملين في قطاع إنتاج الدواجن.',
      en: 'We provide day-old chicks within the company’s poultry production activities, serving breeders and commercial poultry farms.',
    },
    fullDescription: {
      ar: 'تعمل سنال في إنتاج كتاكيت عمر يوم لخدمة المربين والعاملين في قطاع إنتاج الدواجن، ضمن نشاطها في سلسلة إنتاج الدواجن.',
      en: 'Sienal operates in day-old chick production to support breeders and agribusiness projects across the poultry supply chain.',
    },
    targetAudience: {
      ar: 'المربون ومشروعات إنتاج الدواجن.',
      en: 'Breeders and commercial broiler farm projects.',
    },
    features: {
      ar: [
        'نوع المنتج: كتاكيت عمر يوم.',
        'الفئة المستهدفة: المربون ومشروعات إنتاج الدواجن.',
        'تفاصيل السلالات والتوفر: تُضاف وفق البيانات المعتمدة من الشركة.',
      ],
      en: [
        'Product type: Day-old commercial chicks.',
        'Target audience: Commercial breeders and poultry projects.',
        'Breeds and batch availability: Scheduled as per approved company releases.',
      ],
    },
    image: '/src/assets/images/hero_chicks_hatchery_1794027907385.jpg',
    badge: {
      ar: 'المنتج الأول',
      en: 'Product 1',
    },
  },
  {
    id: 'frozen-broiler-chicken',
    name: {
      ar: 'الدجاج اللاحم المجمد',
      en: 'Frozen Broilers',
    },
    category: {
      ar: 'منتجات الدواجن المجمدة',
      en: 'Frozen Poultry Line',
    },
    shortDescription: {
      ar: 'منتجات الدجاج اللاحم المجمد ضمن مجموعة منتجات سنال الموجهة لتلبية احتياجات السوق.',
      en: 'Frozen broiler poultry products within Sienal’s product portfolio tailored to meet market demand.',
    },
    fullDescription: {
      ar: 'تقدم سنال منتجات الدجاج اللاحم المجمد ضمن مجموعة منتجاتها، لتلبية احتياجات العملاء والسوق.',
      en: 'Sienal offers frozen broiler products within its diversified selection to satisfy market and household requirements.',
    },
    targetAudience: {
      ar: 'الأسر، مراكز البيع، والمستهلكون.',
      en: 'Households, retail outlets, and food service.',
    },
    features: {
      ar: [
        'نوع المنتج: دجاج لاحم مجمد.',
        'طريقة التعبئة: وفق مواصفات المنتج المعتمدة.',
        'الأوزان والأحجام: تُضاف حسب المنتجات المتوفرة.',
      ],
      en: [
        'Product type: Blast-frozen broilers.',
        'Packaging method: As per approved sanitary standards.',
        'Weights & sizes: Offered as per active stock availability.',
      ],
    },
    image: '/assets/aistudio/received_1650203086799138_4b93fc24.jpeg',
    badge: {
      ar: 'المنتج الثاني',
      en: 'Product 2',
    },
  },
  {
    id: 'whole-packaged-chicken',
    name: {
      ar: 'الدجاج الكامل المغلف',
      en: 'Whole Packaged Chicken',
    },
    category: {
      ar: 'منتجات الدجاج المجهزة',
      en: 'Packaged Poultry Line',
    },
    shortDescription: {
      ar: 'دجاج كامل مغلف ضمن منتجات الشركة، مع عرض بيانات المنتج والتعبئة وفق المعلومات المعتمدة.',
      en: 'Whole packaged chicken featuring clear product and packaging labeling according to certified specifications.',
    },
    fullDescription: {
      ar: 'الدجاج الكامل المغلف أحد منتجات سنال، ويُعرض ضمن مجموعة المنتجات الموجهة للسوق.',
      en: 'Whole packaged chicken is a hallmark Sienal product presented to meet consumer preferences in the retail market.',
    },
    targetAudience: {
      ar: 'المطابخ المنزلية، محلات التجزئة، والمطاعم.',
      en: 'Kitchens, grocers, and commercial catering.',
    },
    features: {
      ar: [
        'نوع المنتج: دجاج كامل مغلف.',
        'بيانات الوزن: حسب العبوة.',
        'بيانات التعبئة والتخزين: وفق المعلومات المعتمدة للمنتج.',
      ],
      en: [
        'Product type: Whole packaged poultry.',
        'Weight specifications: Indicated per bag package.',
        'Packaging & storage: In accordance with official product standards.',
      ],
    },
    image: '/assets/aistudio/FB_IMG_1793630636935_850c84f5.jpg',
    badge: {
      ar: 'المنتج الثالث',
      en: 'Product 3',
    },
  },
];

export const SALES_CENTERS: SalesCenter[] = [
  {
    id: 'yemen-mall',
    name: { ar: 'مول اليمن', en: 'Yemen Mall' },
    location: { ar: 'جبرة', en: 'Jabra' },
    phone: '0912340265',
  },
  {
    id: 'al-rahma',
    name: { ar: 'الرحمة', en: 'Al-Rahma Center' },
    location: { ar: 'الدخينات', en: 'Al-Dukheinat' },
    phone: '0912340265',
  },
  {
    id: 'hendo',
    name: { ar: 'هندو', en: 'Hendo Center' },
    location: { ar: 'السوق المركزي', en: 'Central Market' },
    phone: '0912340265',
  },
  {
    id: 'banqa',
    name: { ar: 'بانقا', en: 'Banqa Center' },
    location: { ar: 'السوق المركزي', en: 'Central Market' },
    phone: '0912340265',
  },
  {
    id: 'al-ikhwa',
    name: { ar: 'الإخوة', en: 'Al-Ikhwa Center' },
    location: { ar: 'السوق المركزي', en: 'Central Market' },
    phone: '0912340265',
  },
  {
    id: 'kiki',
    name: { ar: 'كي كي', en: 'Ki-Ki Center' },
    location: { ar: 'الكلاكلة شرق – آخر محطة', en: 'Kalakla East – Final Station' },
    phone: '0912340265',
  },
];

export const STRATEGIC_PARTNERSHIP = {
  title: {
    ar: 'لولي و سنال | لقاء يعزز مسيرة التعاون',
    en: 'LOOLI & Sienal | A Meeting Strengthening Cooperation',
  },
  headline: {
    ar: 'شراكة تجمع بين الجودة والخبرة',
    en: 'A Partnership Combining Quality and Expertise',
  },
  partnerName: {
    ar: 'شركة لولي للصناعات الغذائية المحدودة',
    en: 'LOOLI Food Industries Co. Ltd.',
  },
  field: {
    ar: 'الصناعات الغذائية وتطوير المنتجات وتوحيد الجهود',
    en: 'Food Manufacturing, Product Development & Joint Synergies',
  },
  description: {
    ar: 'في إطار التواصل والتنسيق المستمر بين شركة لولي للصناعات الغذائية المحدودة وشركة سنال لإنتاج الدواجن المحدودة، جاء اللقاء الذي جمع ممثلي الشركتين في أجواء إيجابية عكست روح التفاهم والتكامل، والحرص على تعزيز التعاون والمضي نحو آفاق أوسع من الشراكة.',
    en: 'Within the framework of continuous coordination between LOOLI Food Industries Co. Ltd. and Sienal for Poultry Production Co. Ltd., the meeting between representatives unfolded in a positive atmosphere reflecting mutual understanding and shared commitment to expand partnership horizons.',
  },
  slogan: {
    ar: 'شراكة تجمع بين الجودة والخبرة، وتوحّد الجهود لتقديم منتجات تلبي تطلعات عملائنا، وتسهم في تطوير قطاع الصناعات الغذائية في السودان. ترقبوا… تفاصيل المنتجات قريباً!',
    en: 'A partnership uniting quality and expertise, pooling efforts to deliver products meeting customer expectations and advancing food industries in Sudan. Stay tuned… product details coming soon!',
  },
  partnerPoster: '/assets/aistudio/image_0074ef1a.png',
  objectives: [
    {
      title: { ar: 'تكامل الجودة والخبرة', en: 'Quality & Expertise Synergy' },
      ar: 'توحيد الجهود لتقديم منتجات تلبي تطلعات العملاء والمستهلكين.',
      en: 'Uniting efforts to provide food products meeting client expectations.',
    },
    {
      title: { ar: 'تطوير الصناعات الغذائية', en: 'Advancing Food Industry' },
      ar: 'المساهمة الفاعلة في تطوير قطاع الصناعات الغذائية الوطنية في السودان.',
      en: 'Actively contributing to the growth of Sudan’s national food industries.',
    },
    {
      title: { ar: 'منتجات استراتيجية جديدة', en: 'New Strategic Offerings' },
      ar: 'العمل المشترك لإطلاق وتوزيع منتجات مميزة (ترقبوا تفاصيل المنتجات قريباً!).',
      en: 'Collaborative development of high-quality products (Stay tuned for details!).',
    },
  ],
  contactCta: {
    title: {
      ar: 'نرحب بفرص التعاون والشراكة',
      en: 'We Welcome Partnership & Collaboration Opportunities',
    },
    text: {
      ar: 'إذا كنت ترغب في بناء شراكة تجارية أو التعاون مع شركة سنال، نسعد بتواصلك معنا.',
      en: 'If you wish to build a commercial partnership or collaborate with Sienal, we would be delighted to hear from you.',
    },
  },
};

export const PRODUCTION_JOURNEY_VIDEO = {
  title: {
    ar: 'رحلة منتجات سنال: جودةً تُرى وتُذاق',
    en: 'Sienal Journey: Quality Seen and Tasted',
  },
  subtitle: {
    ar: 'من الفقس ورعاية الكتاكيت حتى مائدتكم',
    en: 'From Hatching & Chick Breeding to Your Table',
  },
  caption: {
    ar: 'يسرّنا أن نشارككم رحلة منتجاتنا؛ رحلة تبدأ من الفقس ورعاية الكتاكيت، مرورًا بمراحل التربية والذبح والتعبئة، وصولًا إليكم بأفضل صورة وأعلى معايير الجودة. في سنال، نعتني بكل مرحلة لنقدّم لكم جودةً تُرى وتُذاق.',
    en: 'We are pleased to share the journey of our products; starting from hatching and chick care, through careful raising, certified processing, and packaging, reaching you with superior quality. At Sienal, we cherish every stage to bring you quality you can see and taste.',
  },
  audienceTitle: {
    ar: 'عملاء شركة سنال لإنتاج الدواجن المحدودة',
    en: 'Valued Customers of Sienal Poultry Production Co. Ltd.',
  },
  videoUrl: '/assets/aistudio/SNAL_9db1526d.mp4',
  posterImage: '/assets/aistudio/image_5a13cf24.png',
};

export const CHICKS_SHOWCASE_VIDEO = {
  title: {
    ar: 'كتاكيت سنال: نرعاها باهتمام ونقدمها بثقة',
    en: 'Sienal Chicks: Raised with Care, Delivered with Confidence',
  },
  caption: {
    ar: 'زبائننا الكرام✨ نشارككم فيديو توضيحي لكتاكيت سنال، لتشاهدوا عن قرب الجودة والحيوية والعناية التي نحرص عليها دائمًا.',
    en: 'Our valued customers✨ We share with you an illustrative video of Sienal chicks, showing the vitality, health, and meticulous care we always maintain.',
  },
  badge: {
    ar: 'تفريخ ورعاية الكتاكيت',
    en: 'Hatchery & Chick Vitality',
  },
  videoUrl: '/assets/aistudio/_____47ab04fe.mp4',
  posterImage: '/src/assets/images/hero_chicks_hatchery_1794027907385.jpg',
};

export const QUALITY_PAGE_DATA = {
  hero: {
    title: {
      ar: 'الجودة تبدأ من الاهتمام بالتفاصيل',
      en: 'Quality Begins with Attention to Detail',
    },
    description: {
      ar: 'نؤمن بأن الاهتمام بالجودة وسلامة الغذاء مسؤولية أساسية في قطاع إنتاج الدواجن.',
      en: 'We believe attention to quality and food safety is a fundamental responsibility in poultry production.',
    },
  },
  productionQuality: {
    title: {
      ar: 'اهتمام يمتد عبر مراحل الإنتاج',
      en: 'Care Extending Across Production Stages',
    },
    text: {
      ar: 'تبدأ جودة المنتج بالاهتمام بمراحل الإنتاج والتجهيز، وتمر بمختلف العمليات التي تساهم في تقديم منتج يلبي متطلبات العملاء.',
      en: 'Product quality begins with care across incubation and processing, adhering to processes that deliver satisfaction.',
    },
  },
  foodSafety: {
    title: {
      ar: 'سلامة الغذاء أولويتنا',
      en: 'Food Safety is Our Priority',
    },
    text: {
      ar: 'نولي اهتماماً بسلامة المنتجات الغذائية باعتبارها عنصراً أساسياً في بناء ثقة المستهلك، ونسعى إلى الالتزام بالممارسات والإجراءات المعتمدة في هذا المجال.',
      en: 'Food safety is vital to earning consumer trust, and we maintain strict compliance with certified sanitary practices.',
    },
  },
  packaging: {
    title: {
      ar: 'عناية بالمنتج حتى وصوله',
      en: 'Care for the Product Until Delivery',
    },
    text: {
      ar: 'تمثل التعبئة والتغليف جزءاً مهماً من تجربة المنتج، وتُعرض في هذا القسم منتجات سنال وعبواتها ومعلوماتها المعتمدة.',
      en: 'Packaging represents an integral part of product integrity, ensuring food freshness until reaching consumer tables.',
    },
  },
  certifications: {
    title: {
      ar: 'الالتزام بالمعايير',
      en: 'Commitment to Standards',
    },
    text: {
      ar: 'يمكن التعرف هنا على شهادات الجودة والتراخيص والاعتمادات الرسمية التي حصلت عليها الشركة وفق المعايير والإجراءات المعتمدة.',
      en: 'Official quality certificates, commercial licenses, and accredited standards adhered to by the company.',
    },
  },
};

export const MEDIA_GALLERY: MediaGalleryItem[] = [
  {
    id: 'gal-1',
    title: { ar: 'كيس دجاج سنال الكامل المعتمد', en: 'Certified Sienal Whole Broiler Bag' },
    category: 'products',
    image: '/assets/aistudio/received_1650203086799138_4b93fc24.jpeg',
    caption: { ar: 'العبوة الرسمية المطبوعة للدجاج اللاحم المجمد من إنتاج سنال.', en: 'Official printed package for Sienal frozen broiler.' },
  },
  {
    id: 'gal-2',
    title: { ar: 'عنابر تفريخ كتاكيت التسمين', en: 'Day-Old Broiler Hatchery' },
    category: 'chicks',
    image: '/src/assets/images/hero_chicks_hatchery_1794027907385.jpg',
    caption: { ar: 'كتاكيت عمر يوم تتمتع بحيوية ونشاط متجانس.', en: 'Uniform vitality day-old chicks at the facility.' },
  },
  {
    id: 'gal-3',
    title: { ar: 'مرافق الإنتاج والعنابر المعزولة', en: 'Production Houses & Farm Facility' },
    category: 'facilities',
    image: '/src/assets/images/broiler_farm_facility_1794027908197.jpg',
    caption: { ar: 'مرافق التربية والتجهيز المجهزة بأنظمة تحكم بيئي متطورة.', en: 'Modern climate-controlled broiler housing facilities.' },
  },
  {
    id: 'gal-4',
    title: { ar: 'دجاج سنال في المطبخ والمائدة', en: 'Sienal Chicken in Kitchen Dishes' },
    category: 'products',
    image: '/assets/aistudio/FB_IMG_1793630636935_850c84f5.jpg',
    caption: { ar: 'أطباق طازجة وشهية تناسب مختلف الوصفات السودانية.', en: 'Prepared dishes reflecting the tenderness of Sienal poultry.' },
  },
  {
    id: 'gal-5',
    title: { ar: 'من هنا تبدأ حكاية الجودة', en: 'Where the Quality Story Begins' },
    category: 'facilities',
    image: '/assets/aistudio/image_5a13cf24.png',
    caption: { ar: 'وحدات التبريد وتجهيز عبوات دجاج سنال وفق أعلى الاشتراطات الصحية.', en: 'Cooling units and poultry processing racks adhering to certified standards.' },
  },
  {
    id: 'gal-6',
    title: { ar: 'إنتاج مستمر... وجودة ثابتة', en: 'Continuous Production... Uncompromising Quality' },
    category: 'facilities',
    image: '/assets/aistudio/image_95c5b440.png',
    caption: { ar: 'عنابر الحفظ والتبريد السريع لضمان جودة وطزاجة الدجاج اللاحم المجمد.', en: 'Cold storage racks ensuring constant availability and freshness.' },
  },
  {
    id: 'gal-7',
    title: { ar: 'لقاء يجمع بين سنال ولولي', en: 'Sienal & LOOLI Alliance Meeting' },
    category: 'facilities',
    image: '/assets/aistudio/image_0074ef1a.png',
    caption: { ar: 'لقاء ممثلي شركة سنال وشركة لولي لتعزيز مسيرة التعاون والشراكة.', en: 'Meeting between Sienal and LOOLI representatives to foster cooperation.' },
  },
  {
    id: 'gal-8',
    title: { ar: 'عنابر التربية والتحكم البيئي المتطورة', en: 'Advanced Climate-Controlled Broiler Facilities' },
    category: 'facilities',
    image: '/src/assets/images/modern_poultry_farm_1794403817650.jpg',
    caption: { ar: 'منظومة تفريخ ورعاية حديثة مزودة بأحدث أنظمة التغذية والتهوية الآلية.', en: 'Modern incubation and housing with automated feeding and ventilation systems.' },
  },
  {
    id: 'gal-9',
    title: { ar: 'دجاج سنال الذهبي - جودة تُرى وتُذاق', en: 'Golden Roasted Sienal Chicken - Quality Seen & Tasted' },
    category: 'products',
    image: '/src/assets/images/delicious_roasted_chicken_1794403837015.jpg',
    caption: { ar: 'دجاج كامل فاخر محمر بأشهى النكهات يعكس طزاجة ونقاء اللحوم البيضاء.', en: 'Golden-roasted whole chicken showcasing tenderness and peak flavor.' },
  },
  {
    id: 'gal-10',
    title: { ar: 'مختبر الرقابة البيطرية وسلامة الغذاء', en: 'Veterinary Biosecurity & Quality Laboratory' },
    category: 'facilities',
    image: '/src/assets/images/poultry_quality_control_1794403856336.jpg',
    caption: { ar: 'فحص دوري واختبارات لسلامة الأغذية وسلسلة التبريد لضمان أعلى معايير الجودة.', en: 'Strict quality assurance and continuous cold chain inspection.' },
  },
];

export const LATEST_NEWS: NewsArticle[] = [
  {
    id: 'news-looli-partnership',
    title: {
      ar: 'لولي و سنال | لقاء يعزز مسيرة التعاون',
      en: 'LOOLI & Sienal | A Meeting Strengthening Cooperation',
    },
    date: '2026',
    category: { ar: 'الشراكات الاستراتيجية', en: 'Strategic Partnerships' },
    summary: {
      ar: 'في إطار التواصل والتنسيق المستمر بين شركة لولي للصناعات الغذائية المحدودة وشركة سنال لإنتاج الدواجن المحدودة، عُقد لقاء مشترك يعزز مسيرة التعاون.',
      en: 'Within the framework of ongoing coordination, a meeting between LOOLI Food Industries and Sienal Poultry took place to enhance cooperation.',
    },
    content: {
      ar: [
        'في إطار التواصل والتنسيق المستمر بين شركة لولي للصناعات الغذائية المحدودة وشركة سنال لإنتاج الدواجن المحدودة، جاء اللقاء الذي جمع ممثلي الشركتين في أجواء إيجابية عكست روح التفاهم والتكامل، والحرص على تعزيز التعاون والمضي نحو آفاق أوسع من الشراكة.',
        'شراكة تجمع بين الجودة والخبرة، وتوحّد الجهود لتقديم منتجات تلبي تطلعات عملائنا، وتسهم في تطوير قطاع الصناعات الغذائية في السودان.',
        'ترقبوا… تفاصيل المنتجات قريباً!',
      ],
      en: [
        'Within the framework of continuous coordination between LOOLI Food Industries Co. Ltd. and Sienal for Poultry Production Co. Ltd., the meeting between representatives unfolded in a positive atmosphere reflecting mutual synergy and commitment to expand partnership horizons.',
        'A partnership uniting quality and expertise, pooling efforts to deliver products meeting customer expectations and advancing food manufacturing in Sudan.',
        'Stay tuned… product details coming soon!',
      ],
    },
    image: '/assets/aistudio/image_0074ef1a.png',
  },
  {
    id: 'news-1',
    title: {
      ar: 'سنال تواصل تزويد المزارع بكتاكيت عمر يوم ذات الحيوية العالية',
      en: 'Sienal Continues Supplying Farms with High-Vitality Day-Old Chicks',
    },
    date: '2026',
    category: { ar: 'إنتاج الدواجن', en: 'Poultry Production' },
    summary: {
      ar: 'ضمن نشاط الشركة في قطاع إنتاج الدواجن، تواصل سنال جدولة وتوزيع كتاكيت عمر يوم لخدمة المربين في مختلف المناطق.',
      en: 'Continuing scheduled dispatches of day-old chicks to support breeders and poultry farmers.',
    },
    content: {
      ar: [
        'تواصل شركة سنال لإنتاج الدواجن المحدودة تلبية احتياجات المربين وأصحاب مشاريع إنتاج الدواجن في السودان.',
      ],
      en: [
        'Sienal Poultry continues satisfying requirements for breeders across Sudan.',
      ],
    },
    image: '/src/assets/images/hero_chicks_hatchery_1794027907385.jpg',
  },
  {
    id: 'news-2',
    title: {
      ar: 'توسيع نطاق التوزيع وتوفير المنتجات في مراكز البيع المعتمدة',
      en: 'Expanding Distribution Across Authorized Sales Centers',
    },
    date: '2026',
    category: { ar: 'التوزيع والتجزئة', en: 'Retail & Distribution' },
    summary: {
      ar: 'تسهيل وصول العملاء إلى منتجات سنال من خلال تعزيز التواجد في مراكز البيع في جبرة والدخينات والسوق المركزي والكلاكلة.',
      en: 'Facilitating customer access to Sienal products through regional sales centers.',
    },
    content: {
      ar: [
        'تعمل الشركة على ضمان انسياب منتجات الدجاج اللاحم المجمد إلى نقاط البيع ومراكز التوزيع لتكون دائماً أقرب للمستهلك.',
      ],
      en: [
        'Ensuring steady availability of blast-frozen broilers at approved customer touchpoints.',
      ],
    },
    image: '/assets/aistudio/received_1650203086799138_4b93fc24.jpeg',
  },
];
