export type Language = 'ar' | 'en';

export interface Product {
  id: string;
  name: { ar: string; en: string };
  category: { ar: string; en: string };
  shortDescription: { ar: string; en: string };
  fullDescription: { ar: string; en: string };
  targetAudience: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
  image: string;
  badge?: { ar: string; en: string };
}

export interface NewsArticle {
  id: string;
  title: { ar: string; en: string };
  date: string;
  category: { ar: string; en: string };
  summary: { ar: string; en: string };
  content: { ar: string[]; en: string[] };
  image?: string;
}

export interface SalesCenter {
  id: string;
  name: { ar: string; en: string };
  location: { ar: string; en: string };
  landmark?: { ar: string; en: string };
  phone: string;
}

export interface MediaGalleryItem {
  id: string;
  title: { ar: string; en: string };
  category: 'chicks' | 'products' | 'facilities' | 'centers';
  image: string;
  caption: { ar: string; en: string };
}

export type PageId = 
  | 'home' 
  | 'about' 
  | 'products' 
  | 'quality' 
  | 'partnership' 
  | 'sales-centers'
  | 'media-center'
  | 'contact';
