export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
