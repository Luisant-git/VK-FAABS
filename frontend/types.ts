
export enum Category {
  PIQUE = 'Pique',
  JERSEY = 'Jersey Fabrics',
  FRENCH_TERRY = 'French Terry',
  FLEECE = 'Fleece',
}

export interface FabricProduct {
  id: string;
  name: string;
  category: Category;
  gsm: string;
  composition: string;
  useCases: string[];
  image: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  type: 'factory' | 'fabric' | 'process';
}
