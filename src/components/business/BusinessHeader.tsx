import { Star } from 'lucide-react';
import { Business } from '@/types/business';
import { Badge } from '@/components/ui/badge';

interface BusinessHeaderProps {
  business: Business;
}

export const BusinessHeader = ({ business }: BusinessHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <img
          src={business.logo}
          alt={`${business.name} logo`}
          className="w-full rounded-lg object-cover"
          itemProp="image"
          loading="eager"
          width={400}
          height={400}
        />
        <div className="mt-4 flex items-center gap-1" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content={business.rating.toString()} />
          <meta itemProp="bestRating" content="5" />
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${
                index < business.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="md:w-2/3">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-3xl font-bold" itemProp="name">{business.name}</h1>
          <Badge variant="secondary" className="text-lg">
            <span itemProp="category">{business.category}</span>
          </Badge>
        </div>

        <p className="text-lg text-muted-foreground mb-6" itemProp="description">
          {business.description}
        </p>
      </div>
    </div>
  );
};