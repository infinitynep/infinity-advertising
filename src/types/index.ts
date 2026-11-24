export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  accentColor: string;
  offerings: string[];
  deliverables: string[];
  caseStudyHighlight?: string;
}

export interface ClientItem {
  id: number;
  name: string;
  category: 'Telecom & Tech' | 'Education' | 'Healthcare & Pharma' | 'Tourism & Hospitality' | 'Coffee & Agriculture' | 'Manufacturing & Trade' | 'Corporate';
  highlight?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'Branding' | 'Advertising Campaigns' | 'Digital Campaigns' | 'Event Management' | 'Photography' | 'Videography';
  image: string;
  additionalImages?: string[];
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  year?: string;
  isDemo?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  organization: string;
  projectType: string;
  isPlaceholder?: boolean;
}

export interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  category: 'Branding' | 'Advertising' | 'Digital Marketing' | 'Creative Thinking' | 'Event Management' | 'Industry Insights';
  summary: string;
  content: string[];
  author: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  image: string;
  featured?: boolean;
}
