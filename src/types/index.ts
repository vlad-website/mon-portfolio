export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[]; // дополнительные фото для модалки
  technologies: string[];
  results: string;
  client: string;
  year: string;
  url?: string;
}