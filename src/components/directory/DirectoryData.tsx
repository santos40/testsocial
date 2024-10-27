import { techBusinesses } from '@/data/businesses/tech-businesses';
import { educationBusinesses } from '@/data/businesses/education-businesses';
import { serviceBusinesses } from '@/data/businesses/service-businesses';
import { specializedBusinesses } from '@/data/businesses/specialized-businesses';

export const mockBusinesses = [
  ...techBusinesses,
  ...educationBusinesses,
  ...serviceBusinesses,
  ...specializedBusinesses,
];