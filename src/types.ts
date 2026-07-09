export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  stars: number;
  text: string;
  role?: string;
}

export interface CourseDetail {
  title: string;
  description: string;
  price: string;
  promoPrice: string;
  installments: string;
  modulesCount: number;
  accessPeriod: string;
  supportPdf: boolean;
  certificate: boolean;
  coverImage: string;
}
