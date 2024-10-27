import { Business } from '@/types/business';

interface BusinessPhotosProps {
  business: Business;
}

export const BusinessPhotos = ({ business }: BusinessPhotosProps) => {
  if (business.photos.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Photos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {business.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`${business.name} photo ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg"
            itemProp="image"
            loading="lazy"
            width={300}
            height={192}
          />
        ))}
      </div>
    </div>
  );
};