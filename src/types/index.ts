export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  coverImagePosition?: string;
  images: ServiceImage[];
}

export interface ServiceImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface CarouselSlide {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  cta?: {
    text: string;
    link: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
