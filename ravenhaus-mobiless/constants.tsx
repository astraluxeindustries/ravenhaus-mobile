import { Review, Service, FAQItem } from './types';

export const COMPANY_NAME = "Ravenhaus Mobile";
export const PHONE_NUMBER = "(801) 603-8503";
export const ADDRESS = "638 S 800 E St, St. George, UT 84770";
export const LOCATION_CITY = "St. George, Utah";
export const GOOGLE_MAPS_LINK = "https://maps.google.com/?q=Ravenhaus+Mobile+St+George+UT";

export const SERVICES: Service[] = [
  {
    title: "Mobile Oil Change",
    description: "Full synthetic and synthetic blend options delivered to your driveway. We handle the mess so you don't have to.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Fleet Maintenance",
    description: "Keep your business running. We service work vans, trucks, and company fleets on-site to minimize downtime.",
    image: "https://images.unsplash.com/photo-1632823469850-24a05e267128?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "General Maintenance",
    description: "Fluid top-offs, filter replacements, and multipoint inspections using professional-grade tools.",
    image: "https://images.unsplash.com/photo-1625043484555-47841a752840?auto=format&fit=crop&q=80&w=800"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Local Customer",
    rating: 5,
    text: "Ravenhaus serviced one of our work vans. Professional, timely, and excellent communication.",
    isLocalGuide: true
  },
  {
    id: 2,
    author: "Austin",
    rating: 5,
    text: "Austin was super helpful and affordable! It's so convenient not having to go to a shop.",
    isLocalGuide: false
  },
  {
    id: 3,
    author: "Sarah J.",
    rating: 5,
    text: "Best oil change experience in St. George. They came right to my office.",
    isLocalGuide: false
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What areas do you serve?",
    answer: "We primarily serve St. George, Washington, Santa Clara, and Ivins. If you are slightly outside this range, give us a call to check availability."
  },
  {
    question: "What type of oil do you use?",
    answer: "We use high-quality full synthetic and synthetic blend oils that meet or exceed manufacturer specifications for your specific vehicle."
  },
  {
    question: "How long does an oil change take?",
    answer: "A typical service takes about 30-45 minutes. We work efficiently to get you back on the road without cutting corners."
  },
  {
    question: "Where can you perform services?",
    answer: "We can perform services in your home driveway, office parking lot, or almost any flat, safe location where we have permission to access your vehicle."
  },
  {
    question: "Do you need access to water or power?",
    answer: "No, our mobile units are fully self-sufficient. We bring everything needed to complete the job cleanly and professionally."
  }
];

export const NAV_LINKS = [
  { label: 'Services', href: 'services' },
  { label: 'How it Works', href: 'process' },
  { label: 'Reviews', href: 'reviews' },
  { label: 'FAQ', href: 'faq' },
  { label: 'Contact', href: 'contact' },
];