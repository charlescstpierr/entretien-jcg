export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  icon: "leaf" | "shovel" | "snowflake";
  features: string[];
  benefits: string[];
  cta: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  service: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: "pelouse" | "amenagement" | "deneigement";
  beforeImage: string;
  afterImage: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  slug: string;
  items: FAQItem[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  clientType: "residential" | "commercial";
  address: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
