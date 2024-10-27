import { Business } from '@/types/business';
import { BusinessCard } from '@/components/BusinessCard';

interface DirectoryGridProps {
  businesses: Business[];
}

export const DirectoryGrid = ({ businesses }: DirectoryGridProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
};