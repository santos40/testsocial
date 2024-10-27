export interface Business {
  id: string;
  name: string;
  email: string;
  description: string;
  logo: string;
  category: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  whatsapp?: string;
  youtube?: string;
  address: string;
  latitude: number;
  longitude: number;
  rating: number;
  photos: string[];
  createdAt: Date;
}

export interface BusinessFormData extends Omit<Business, 'id' | 'createdAt' | 'rating'> {}