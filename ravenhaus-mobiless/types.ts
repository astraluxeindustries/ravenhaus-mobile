export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  isLocalGuide?: boolean;
}

export interface Service {
  title: string;
  description: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  PROCESS = 'process',
  REVIEWS = 'reviews',
  FAQ = 'faq',
  CONTACT = 'contact',
}