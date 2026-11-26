import type { ServiceItem, ClientItem, PortfolioProject, TestimonialItem, ArticleItem } from '../types';

export const COMPANY_INFO = {
  name: "Infinity Advertising Pvt. Ltd.",
  shortName: "Infinity Advertising",
  legalName: "Infinity Advertising Pvt. Ltd.",
  tagline: "An Odyssey of Creativity...",
  heroHeadline: "Creativity That Moves Brands Forward.",
  heroSubheadline: "We transform ideas into impactful brand experiences through strategic thinking, creative advertising and innovative communication.",
  address: "Blue Star Complex, 6th Floor (609), Tripureshwor, Kathmandu, Nepal",
  locationName: "Tripureshwor, Kathmandu",
  phone: "+977-1-5347277",
  altPhone: "+977-1-4247277",
  email: "infinity.nep@gmail.com",
  altEmail: "adv_infinity@yahoo.com",
  websiteUrl: "https://www.infinityadv.com.np",
  workingHours: "Sunday – Friday: 9:30 AM – 6:00 PM (Saturday: Closed)",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7482833076135!2d85.31110777598852!3d27.694154976191068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b48c7be867%3A0xc48ad1828bf7f5f!2sBlue%20Star%20Complex%2C%20Tripureshwor%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp",
};

export const SISTER_FACILITIES = [
  {
    name: "Dream Vision Studio",
    location: "Thamel, Kathmandu",
    specialty: "Audio-visual production, commercial photography, TVC studio setups and digital reel recording."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "brand-development",
    title: "Brand Development",
    tagline: "Strategic Brand Identity & Commercial Collateral",
    description: "We provide unique services in developing and identifying new brands, selling techniques used in maximizing revenues, packaging/bundling and brand communication elements.",
    iconName: "Compass",
    accentColor: "#0877B9",
    offerings: [
      "Brand Strategy & Positioning",
      "Brand Naming & Architecture",
      "Logo & Complete Brand Identity",
      "Slogan & Tagline Development",
      "Brand Communication Guidelines",
      "Brochures & Marketing Collateral",
      "Corporate Newsletters & Periodicals",
      "Sales Kits, Presentations & Pitch Decks"
    ],
    deliverables: [
      "Comprehensive Brand Identity Guidelines Book",
      "Vector Logo Suites (CMYK, RGB, Monochrome, App Icons)",
      "Print-ready Corporate Stationery & Business Kits",
      "Sales Enablement Collateral & Pitch Presentations",
      "Bilingual Brand Messaging (Nepali & English)"
    ],
    caseStudyHighlight: "Assisted premier educational and healthcare brands establish cohesive, authoritative brand presence across Nepal."
  },
  {
    id: "advertising-solutions",
    title: "Advertising Solutions",
    tagline: "Full-Spectrum 360° ATL, BTL & Digital Campaigns",
    description: "At Infinity, advertising is considered the main vehicle that carries our sales driven concepts to the target audience. We deliver value to our clients with our original strategic and creative sales thinking, backed up by creative design and technical excellence.",
    iconName: "Megaphone",
    accentColor: "#08A9E0",
    offerings: [
      "Strategic Advertising Campaigns (ATL & BTL)",
      "Print Advertising (Daily National Newspapers & Magazines)",
      "Radio Jingles & Radio Commercial Spots",
      "Television Commercials (TVCs & Storyboarding)",
      "Digital & Social Media Advertising",
      "Hoardings, Billboards & Pole Banners",
      "Point-of-Purchase (POP) & Retail Branding Materials",
      "Commercial Photography & Cinematic Videography"
    ],
    deliverables: [
      "Media Planning & Direct Placement across Leading Media Houses",
      "Creative Concepts, Scriptwriting & Professional Voiceover Jingles",
      "High-Impact Out-of-Home (OOH) Hoarding Designs & Fabrication",
      "Meta Ads, YouTube Campaigns & Targeted Digital Content",
      "Point-of-Sale Merchandising & Retail Kiosks"
    ],
    caseStudyHighlight: "Nationwide multimedia rollouts for institutional telecommunication campaigns and FMCG commercial launches."
  },
  {
    id: "event-management",
    title: "Event Management",
    tagline: "End-to-End Creative Planning, Coordination & Promotion",
    description: "Delivering holistic event management solutions tailored to business objectives. We blend creative planning, seamless on-ground coordination, and targeted advertising & promotional support to maximize audience engagement.",
    iconName: "CalendarCheck",
    accentColor: "#29292D",
    offerings: [
      "Event Management Solutions",
      "Creative Planning & Coordination",
      "Advertising & Promotional Support for Events",
      "Stage Design & Experiential Brand Spaces",
      "Press Briefings & PR Amplification",
      "Post-Event Impact Reporting & Media Coverage"
    ],
    deliverables: [
      "Concept Development & Thematic Event Identity",
      "Signage, Entrance Gates, Backdrops & Stage Fabrication",
      "Event Collateral (Delegate Kits, Badges, Certificates)",
      "Multi-channel Promotional Campaign Pre- & Post-Event",
      "On-site Audio-Visual Recording & Live Stream Feeds"
    ],
    caseStudyHighlight: "Turnkey coordination for corporate meets, national sports leagues, and institutional convocations."
  }
];

export const CLIENTS: ClientItem[] = [
  { id: 1, name: "Nepal Telecom", category: "Telecom & Tech", highlight: "National Telecommunications Provider" },
  { id: 2, name: "Presidential Graduate School", category: "Education", highlight: "Premier Business & Management School" },
  { id: 3, name: "Oxford International Pvt. Ltd.", category: "Education", highlight: "International Education & Abroad Studies" },
  { id: 4, name: "Oxford Education Pvt. Ltd.", category: "Education", highlight: "Education & Career Advisory" },
  { id: 5, name: "Fortuna Health Care", category: "Healthcare & Pharma", highlight: "Pharmaceutical Distribution & Healthcare" },
  { id: 6, name: "TSN Corporation", category: "Corporate", highlight: "Commercial Trading & Business Network" },
  { id: 7, name: "3 Sisters Adventure Trekking Pvt. Ltd.", category: "Tourism & Hospitality", highlight: "Pioneering Female Trekking Guides in the Himalayas" },
  { id: 8, name: "Empowering Women of Nepal", category: "Tourism & Hospitality", highlight: "Social Enterprise & Community Development" },
  { id: 9, name: "Borderlands Resort Pvt. Ltd.", category: "Tourism & Hospitality", highlight: "Premier Adventure Resort & Leadership Center" },
  { id: 10, name: "Ultimate Descents Nepal", category: "Tourism & Hospitality", highlight: "Award-winning White Water Rafting & Kayaking" },
  { id: 11, name: "Nature-Treks.com", category: "Tourism & Hospitality", highlight: "Eco Trekking & Himalayan Expeditions" },
  { id: 12, name: "Sunkoshi Beach Camp", category: "Tourism & Hospitality", highlight: "River Beach Resort & Wilderness Tourism" },
  { id: 13, name: "Nepal Coffee Producers Association", category: "Coffee & Agriculture", highlight: "National Apex Body for Organic Himalayan Coffee" },
  { id: 14, name: "Multi Care Surgical Pvt. Ltd.", category: "Healthcare & Pharma", highlight: "Medical Equipment & Surgical Supplies" },
  { id: 15, name: "Blue Ocean Health Care", category: "Healthcare & Pharma", highlight: "Medical Services & Healthcare Solutions" },
  { id: 16, name: "Global Link Technology", category: "Telecom & Tech", highlight: "IT Infrastructure & Technology Services" },
  { id: 17, name: "Medibulls Pharma", category: "Healthcare & Pharma", highlight: "Pharmaceutical Formulations & Marketing" },
  { id: 18, name: "Planet Infosys Pvt. Ltd.", category: "Telecom & Tech", highlight: "Software Solutions & Systems Integration" },
  { id: 19, name: "Himalayan Coffee Trading", category: "Coffee & Agriculture", highlight: "Specialty Roasted Beans & Commercial Espresso Systems" },
  { id: 20, name: "DreamNext Education Foundation", category: "Education", highlight: "Educational Foundation & Academic Pathways" },
  { id: 21, name: "Mount Everest Organic Coffee", category: "Coffee & Agriculture", highlight: "Export-Grade Himalayan Organic Coffee" },
  { id: 22, name: "Mustang Coffee", category: "Coffee & Agriculture", highlight: "High-Altitude Artisan Coffee Brand" },
  { id: 23, name: "Famous Home Steel & Appliances", category: "Manufacturing & Trade", highlight: "Home Appliances & Stainless Steel Products" },
  { id: 24, name: "Human Kind Health Care", category: "Healthcare & Pharma", highlight: "Community Health & Clinical Care" }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "Measurable Results",
    description: "Every campaign is engineered with clear performance indicators. We focus on tangible business outcomes, customer acquisition, and market brand uplift rather than abstract metrics."
  },
  {
    number: "02",
    title: "Sustainable & Profitable Growth",
    description: "We partner with businesses to build long-term equity. Our creative solutions build customer trust and drive sustainable repeat patronage."
  },
  {
    number: "03",
    title: "Optimum Return on Investment",
    description: "Our philosophy is to apply our services where we can deliver the highest ROI for our clients, ensuring prudent media deployment and maximum market reach."
  },
  {
    number: "04",
    title: "Deep Business Understanding",
    description: "The most effective advertising solutions stem from a rigorous understanding of our clients' business model, target audience behavior, and competitive landscape."
  },
  {
    number: "05",
    title: "Sales-Driven Creative Execution",
    description: "Creativity without commercial purpose is merely decoration. At Infinity, creativity is the powerful engine that propels sellable concepts into customer action."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    name: "LISTEN",
    title: "Discovery & Objective Mapping",
    description: "We begin by looking closely at your objectives, understanding what you are trying to achieve, studying customer demographics, and evaluating your competitive positioning.",
    icon: "Ear"
  },
  {
    step: "02",
    name: "THINK",
    title: "Strategy & Creative Conception",
    description: "Our multidisciplinary strategists devise an actionable blueprint—formulating the core value proposition, key messaging hooks, and optimal media mix.",
    icon: "Lightbulb"
  },
  {
    step: "03",
    name: "SOLVE",
    title: "Design & Multichannel Formulation",
    description: "Our in-house creative studio crafts the visual identity, copywriting, scriptwriting, and promotional collateral engineered specifically to address the business challenge.",
    icon: "Cpu"
  },
  {
    step: "04",
    name: "EXECUTE",
    title: "Technical Production & Quality Craft",
    description: "Our in-house production units, creative designers, and audio-visual studios bring concepts to reality with rigorous quality management and high fidelity standards.",
    icon: "Layers"
  },
  {
    step: "05",
    name: "LAUNCH",
    title: "Strategic Rollout & Impact Delivery",
    description: "We deploy the campaign across print, broadcast, digital, OOH, and on-ground channels, continuously monitoring performance to deliver the desired commercial outcome.",
    icon: "Rocket"
  }
];

export const PEOPLE_VALUES = [
  {
    title: "Creative Thinkers",
    description: "Inquisitive, original minds who challenge convention to discover unexpected storytelling angles that elevate brands.",
    icon: "Sparkles"
  },
  {
    title: "Professional & Punctual Service",
    description: "Strict adherence to production milestones and publishing deadlines. We respect our clients' time and commercial schedules.",
    icon: "Clock"
  },
  {
    title: "Friendly & Transparent Communication",
    description: "Collaborative, consultative relationships where clients are partners at every step, with clear updates and straightforward advice.",
    icon: "Smile"
  },
  {
    title: "Deep Understanding of Local Markets",
    description: "Grounded cultural empathy across Kathmandu and Nepal's provinces, crafting messages that resonate authentically with local consumers.",
    icon: "MapPin"
  },
  {
    title: "Fresh Thinking Combined with Experience",
    description: "Balancing contemporary global advertising aesthetics with years of seasoned execution know-how in the Nepali media ecosystem.",
    icon: "Award"
  },
  {
    title: "Unwavering Commitment to Client Results",
    description: "We measure our ultimate success strictly by the commercial growth, brand recognition, and milestones achieved by our partner organizations.",
    icon: "CheckCircle2"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "project-1",
    title: "Corporate Identity & Collateral Design",
    client: "Healthcare Solutions Partner",
    category: "Branding",
    image: "/assets/portfolio/1.jpg",
    additionalImages: ["/assets/portfolio/2.jpg", "/assets/portfolio/3.jpg"],
    summary: "Complete visual identity system, brand architecture, and bilingual corporate collateral for pharmaceutical distribution.",
    challenge: "Modernizing a legacy healthcare brand to convey medical precision while remaining accessible to practitioners across Nepal.",
    solution: "Engineered a clean typographic identity with clean blues and silver accents, supported by standardized product datasheets and sales kits.",
    deliverables: ["Brand Identity Manual", "Product Brochures", "Stationery Kit", "Packaging Mockups"],
    year: "Showcase Archive",
    isDemo: false
  },
  {
    id: "project-2",
    title: "National Print Advertising Campaign",
    client: "Educational Institution",
    category: "Advertising Campaigns",
    image: "/assets/portfolio/2.jpg",
    additionalImages: ["/assets/portfolio/1.jpg", "/assets/portfolio/4.jpg"],
    summary: "High-impact daily newspaper advertisement series targeting admissions and scholarship enrollment drives.",
    challenge: "Standing out amidst high seasonal clutter in national broadsheets during entrance exam windows.",
    solution: "Designed editorial-style full-page layouts emphasizing graduate success stories and measurable academic milestones.",
    deliverables: ["Full Page National Newspaper Creatives", "Magazine Inserts", "Social Media Adaptations"],
    year: "Showcase Archive",
    isDemo: false
  },
  {
    id: "project-3",
    title: "Artisan Coffee Packaging & Brand Narrative",
    client: "Himalayan Coffee Brand",
    category: "Branding",
    image: "/assets/portfolio/3.jpg",
    additionalImages: ["/assets/portfolio/5.jpg", "/assets/portfolio/6.jpg"],
    summary: "Export-grade packaging design and farm-to-cup visual storytelling for specialty Arabica beans.",
    challenge: "Positioning Nepali mountain coffee at premium international specialty coffee outlets and domestic boutique cafes.",
    solution: "Created artisanal package pouches featuring topographic map motifs, roast profile indicators, and organic certifications.",
    deliverables: ["Pouch Packaging Design", "Tasting Notes Collateral", "Shelf Talkers & POP Displays"],
    year: "Showcase Archive",
    isDemo: false
  },
  {
    id: "project-4",
    title: "High-Impact Out-of-Home Billboard Network",
    client: "Telecom & Connectivity",
    category: "Advertising Campaigns",
    image: "/assets/portfolio/4.jpg",
    additionalImages: ["/assets/portfolio/7.jpg", "/assets/portfolio/8.jpg"],
    summary: "Large format arterial hoarding and pole banner rollout across prime traffic junctions in Kathmandu Valley.",
    challenge: "Delivering instantaneous message comprehension to moving motorists at crowded intersections.",
    solution: "Minimalist high-contrast headline treatment with vivid brand blues and crisp product imagery visible from 100 meters away.",
    deliverables: ["Billboards (40x20ft)", "Street Pole Banners", "Bus Shelter Graphics"],
    year: "Showcase Archive",
    isDemo: false
  },
  {
    id: "project-5",
    title: "Annual Wall & Desk Calendar Production",
    client: "Corporate Client",
    category: "Branding",
    image: "/assets/portfolio/5.jpg",
    additionalImages: ["/assets/portfolio/6.jpg"],
    summary: "Bespoke corporate calendar featuring heritage cultural photography and premium textured print finishing.",
    challenge: "Creating an end-of-year corporate gift that maintains daily desk presence throughout all 12 months.",
    solution: "Curated fine-art photography with cultural historical commentary, printed with spot UV varnish on heavy matte art paper.",
    deliverables: ["12-Leaf Desk Calendar", "Large Hanging Wall Calendar", "Custom Embossed Envelopes"],
    year: "Showcase Archive",
    isDemo: false
  },
  {
    id: "project-6",
    title: "Digital Growth & Social Performance Creatives",
    client: "Travel & Hospitality Enterprise",
    category: "Digital Campaigns",
    image: "/assets/portfolio/6.jpg",
    additionalImages: ["/assets/portfolio/9.jpg", "/assets/portfolio/10.jpg"],
    summary: "Data-driven Meta and Google display ad suites targeted at international trekkers and domestic weekend holidaymakers.",
    challenge: "Generating direct booking inquiries through mobile social media feeds with constrained ad budgets.",
    solution: "Crafted high-velocity video carousels and vibrant static cards highlighting real Himalayan adventure experiences.",
    deliverables: ["Carousel Ad Assets", "Story & Reel Motion Templates", "Landing Page Creative Assets"],
    year: "Demonstration Showcase",
    isDemo: true
  },
  {
    id: "project-7",
    title: "National Volleyball League & Event Branding",
    client: "Sports & Event Management Partner",
    category: "Event Management",
    image: "/assets/portfolio/7.jpg",
    additionalImages: ["/assets/portfolio/8.jpg", "/assets/portfolio/11.jpg"],
    summary: "Turnkey stadium branding, entry arch gates, player backdrops, and promotional materials for nationwide sports league.",
    challenge: "Rapid 48-hour stadium transformation requiring heavy weather-resistant fabrication and multi-sponsor logo placements.",
    solution: "Engineered modular truss wraps, dynamic 24x8ft court-side barriers, and cohesive press conference interview backdrops.",
    deliverables: ["Entrance Arch Gates (24x8ft)", "Media Press Backdrops", "Player Badges & Medals", "Championship Cheques"],
    year: "Showcase Archive",
    isDemo: false
  },
  {
    id: "project-8",
    title: "Commercial Product & Architectural Photography",
    client: "Resort & Hospitality Partner",
    category: "Photography",
    image: "/assets/portfolio/8.jpg",
    additionalImages: ["/assets/portfolio/12.jpg", "/assets/portfolio/13.jpg"],
    summary: "On-location dusk and interior photography showcasing riverfront cottages, adventure sports, and culinary experiences.",
    challenge: "Capturing dynamic action outdoor rafting alongside calming luxury hospitality interiors in challenging natural light.",
    solution: "Deployed specialized multi-strobe location lighting and high-speed shutter cameras for crisp water splashes and atmospheric sunsets.",
    deliverables: ["High-Res Image Library (300 DPI)", "Web-optimized Gallery Suites", "Print Catalog Selections"],
    year: "Showcase Archive",
    isDemo: false
  },
  {
    id: "project-9",
    title: "Television Commercial (TVC) & Audio Jingle",
    client: "Consumer Goods & Appliances",
    category: "Videography",
    image: "/assets/portfolio/9.jpg",
    additionalImages: ["/assets/portfolio/10.jpg"],
    summary: "Concept storyboarding, 30-second broadcast TV commercial, and catchy mnemonic radio jingle in Nepali.",
    challenge: "Instilling family trust and product durability in a competitive market crowded with imported brands.",
    solution: "Emotional storytelling revolving around festive Nepali family gatherings, reinforced by a 3-second audio brand signature.",
    deliverables: ["30s & 15s Broadcast TVCs", "Audio Jingle for National FM Stations", "YouTube Pre-Roll Edits"],
    year: "Demonstration Showcase",
    isDemo: true
  },
  {
    id: "project-10",
    title: "Comprehensive Corporate Brochure & Sales Kit",
    client: "Education Consultancy Services",
    category: "Branding",
    image: "/assets/portfolio/10.jpg",
    additionalImages: ["/assets/portfolio/11.jpg"],
    summary: "Extensive multi-page academic counseling guide, visa guidance booklet, and branch office folder kits.",
    challenge: "Condensing complex international university guidelines into an intuitive, encouraging guide for students and parents.",
    solution: "Structured modular layout with infographics, country-specific comparative matrices, and testimonial highlights.",
    deliverables: ["48-Page Full Color Prospectus", "Die-cut Presentation Folders", "Checklist Inserts"],
    year: "Showcase Archive",
    isDemo: false
  },
  {
    id: "project-11",
    title: "Retail Point-of-Purchase (POP) Displays",
    client: "Manufacturing & Home Goods",
    category: "Advertising Campaigns",
    image: "/assets/portfolio/11.jpg",
    additionalImages: ["/assets/portfolio/12.jpg"],
    summary: "In-store merchandise standees, counter mats, and promotional danglers for dealer networks across Nepal.",
    challenge: "Securing prime retail counter space in high-density dealer shops across New Road and provincial commercial centers.",
    solution: "Compact, sturdy standees with high-gloss lamination that provide clear product benefit matrices for shop attendants.",
    deliverables: ["Roll-up Standees (2.5x5ft)", "Acrylic Counter Displays", "Promotional Poster Series"],
    year: "Showcase Archive",
    isDemo: false
  },
  {
    id: "project-12",
    title: "Corporate Documentary & Brand Video Storyboard",
    client: "Social Enterprise & Community Tourism",
    category: "Videography",
    image: "/assets/portfolio/12.jpg",
    additionalImages: ["/assets/portfolio/13.jpg"],
    summary: "Inspiring documentary narrative detailing the empowerment of women guides across the Annapurna and Everest circuits.",
    challenge: "Communicating social impact with genuine dignity, avoiding overt commercialism while driving international trek bookings.",
    solution: "Cinematic drone cinematography, intimate interviews in local dialect with English subtitles, and uplifting musical score.",
    deliverables: ["4-Minute Corporate Mini-Doc", "60-Second Social Cutdowns", "B-roll Footage Archive"],
    year: "Demonstration Showcase",
    isDemo: true
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t-1",
    quote: "Infinity Advertising demonstrated an acute understanding of our institutional communication standards. Their strategic media placement and high-fidelity print collateral helped us communicate key updates with tremendous clarity and public reach across Nepal.",
    clientName: "Institutional Communications Lead",
    role: "Media & Public Relations Division",
    organization: "Telecommunications Sector Partner",
    projectType: "Nationwide ATL & OOH Campaign",
    isPlaceholder: true
  },
  {
    id: "t-2",
    quote: "The brand identity guidelines and comprehensive prospectus designed by Infinity gave our educational programs the professional gravitas we needed. Their team is exceptionally punctual, reliable, and respectful of academic publication cycles.",
    clientName: "Head of Marketing & Admissions",
    role: "Admissions Directorate",
    organization: "Higher Education & Graduate School Partner",
    projectType: "Brand Identity & Enrollment Collateral",
    isPlaceholder: true
  },
  {
    id: "t-3",
    quote: "In the healthcare sector, regulatory compliance and visual dignity are critical. Infinity produced product brochures, clinical presentation folders, and packaging mockups that resonated immediately with both doctors and medical distributors.",
    clientName: "Managing Director",
    role: "Executive Management",
    organization: "Healthcare & Pharmaceuticals Group",
    projectType: "Product Literature & Packaging Solutions",
    isPlaceholder: true
  },
  {
    id: "t-4",
    quote: "Infinity’s creative flair captured the raw spirit of Himalayan adventure. Their team understands the local nuances while delivering aesthetics that appeal directly to our international trekking and river expedition clients.",
    clientName: "Operations Director",
    role: "Adventure & Hospitality Management",
    organization: "Eco Tourism & Adventure Travel Partner",
    projectType: "Campaign Creatives & Photography",
    isPlaceholder: true
  }
];

export const ARTICLES: ArticleItem[] = [
  {
    id: "art-1",
    title: "Building Unforgettable Brand Identities in Nepal’s Competitive Landscape",
    slug: "building-unforgettable-brand-identities-nepal",
    category: "Branding",
    summary: "Why a logo is only the tip of the iceberg: how authentic positioning, strategic naming, and consistent collateral create lasting commercial value in Nepal.",
    content: [
      "In an increasingly saturated marketplace, businesses across Kathmandu and provincial centers face a pivotal question: how do you transform a recognizable product into an enduring brand?",
      "Brand development is fundamentally about clarity and trust. At Infinity Advertising, our approach centers on identifying what makes an enterprise unique before drafting a single visual line. Naming, color psychology, and tone of voice must reflect both international design standards and the cultural nuances of the Nepali consumer.",
      "A cohesive brand ecosystem—encompassing business cards, sales decks, brochures, and digital touchpoints—signals professional permanence. When every customer interaction feels intentional, price resistance decreases and brand loyalty skyrockets."
    ],
    author: "Infinity Strategy Desk",
    publishDate: "November 2026",
    readTime: "5 min read",
    tags: ["Branding", "Brand Strategy", "Nepal Business", "Identity Design"],
    image: "/assets/portfolio/1.jpg",
    featured: true
  },
  {
    id: "art-2",
    title: "The Synergy of ATL & Digital Advertising: Maximizing ROI in Urban & Regional Nepal",
    slug: "synergy-atl-digital-advertising-nepal",
    category: "Advertising",
    summary: "Discover how combining traditional broadsheet newspapers, hoarding boards, and radio with hyper-targeted social campaigns delivers unrivaled market penetration.",
    content: [
      "There is a common misconception that traditional media is losing ground to digital channels. In reality, the most successful advertising campaigns in Nepal leverage an integrated 360° approach.",
      "National broadsheet publications and strategic hoarding sites in Kathmandu, Pokhara, and Narayangarh build unmatched institutional credibility and top-of-mind awareness. Meanwhile, digital and social media advertising provides the agile mechanism for real-time retargeting, lead capture, and immediate conversational sales.",
      "By synchronizing the messaging across ATL hoardings and digital feeds, brands create a multiplier effect where visual familiarity breeds higher digital click-through rates and commercial conversion."
    ],
    author: "Infinity Media Team",
    publishDate: "October 2026",
    readTime: "4 min read",
    tags: ["Advertising Solutions", "ATL Campaigns", "Digital Marketing", "Media Planning"],
    image: "/assets/portfolio/4.jpg",
    featured: false
  },
  {
    id: "art-3",
    title: "Experiential Event Management: Crafting Immersive Consumer Engagements",
    slug: "experiential-event-management-consumer-engagement",
    category: "Event Management",
    summary: "From nationwide sports tournaments to corporate convocations: how structured event coordination turns passive observers into enthusiastic brand champions.",
    content: [
      "An event is more than a gathering—it is a live, sensory embodiment of a company's promise. Whether orchestrating an athletic tournament or an institutional conference, success hinges on meticulous advance planning.",
      "At Infinity Advertising, our event management philosophy begins with spatial storytelling: stage design, ambient lighting, entrance archways, and delegate touchpoints are all calibrated to reinforce the central theme.",
      "Furthermore, pairing on-ground coordination with robust pre-event PR and post-event digital amplification ensures the commercial return extends far beyond the final applause."
    ],
    author: "Infinity Events Unit",
    publishDate: "September 2026",
    readTime: "6 min read",
    tags: ["Event Management", "Experiential Marketing", "Public Relations", "Brand Activations"],
    image: "/assets/portfolio/7.jpg",
    featured: false
  },
  {
    id: "art-4",
    title: "The Power of Sales-Driven Creative Strategy: Beyond Aesthetics to Commercial Impact",
    slug: "power-of-sales-driven-creative-strategy",
    category: "Creative Thinking",
    summary: "Why advertising must always be an investment with measurable return. Exploring Infinity's core philosophy of results-oriented creative execution.",
    content: [
      "Award-winning aesthetics that do not move inventory or generate qualified inquiries fall short of advertising's primary mission. At Infinity, we firmly believe that the most successful businesses focus on results brought about by sales-driven campaigns.",
      "Our creative process begins by interrogating business objectives: What are the revenue bottlenecks? Who holds the purchasing decision? What hesitations prevent customers from committing?",
      "When creative ideas are directly tethered to sales enablement—from compelling offer structures to clear calls to action—advertising ceases to be an operational expense and becomes a predictable growth driver."
    ],
    author: "Infinity Strategy Desk",
    publishDate: "August 2026",
    readTime: "4 min read",
    tags: ["Creative Thinking", "ROI", "Business Growth", "Sales Strategy"],
    image: "/assets/portfolio/2.jpg",
    featured: false
  },
  {
    id: "art-5",
    title: "Visual Storytelling in Modern Commercial Production: Photography & TVCs",
    slug: "visual-storytelling-commercial-production-nepal",
    category: "Industry Insights",
    summary: "How cinematic cinematography, intentional lighting, and authentic human emotion create commercial narratives that stay with audiences.",
    content: [
      "In a digital world where audiences scroll through miles of content each day, visual craft makes the split-second difference between being skipped or remembered.",
      "Through our sister facility Dream Vision Studio, Infinity brings studio-grade audio-visual production, precision lighting, and bespoke sound engineering to television commercials and documentary brand reels.",
      "Authentic representation of Nepali culture, coupled with contemporary pacing and high-definition color grading, enables local brands to stand toe-to-toe with international market competitors."
    ],
    author: "Creative Production Team",
    publishDate: "July 2026",
    readTime: "5 min read",
    tags: ["Videography", "Photography", "Commercial TVC", "Visual Storytelling"],
    image: "/assets/portfolio/8.jpg",
    featured: false
  }
];
