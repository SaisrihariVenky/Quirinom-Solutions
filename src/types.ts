export type ProductCategory = 'all' | 'business' | 'hr' | 'social' | 'travel' | 'events';

export interface ProductFeature {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  category?: string;
  benefits?: string[];
  metrics?: string;
}

export interface ProductMetric {
  label: string;
  value: string;
  sub?: string;
  change?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  categoryLabel: string;
  version: string;
  statusBadge: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  catalogImage: string;
  tags: string[];
  metrics: ProductMetric[];
  bulletPoints: string[];
  isFlagship?: boolean;
  ctaText?: string;
}

export interface DemoFormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  productInterest: string;
}

export interface DemoFormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  phone?: string;
}

export type ViewportMode = 'responsive' | 'desktop' | 'tablet' | 'mobile';

export type CurrentRoute = 
  | 'home' 
  | 'products' 
  | 'product-qhr' 
  | 'product-storeflaunt' 
  | 'product-weevids' 
  | 'product-my-holy-trip' 
  | 'product-snapp-buddy' 
  | 'about' 
  | 'contact';
