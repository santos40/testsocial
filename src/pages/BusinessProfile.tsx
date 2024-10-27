import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Share2 } from 'lucide-react';
import { BusinessMap } from '@/components/BusinessMap';
import { BusinessSEO } from '@/components/business/BusinessSEO';
import { BusinessHeader } from '@/components/business/BusinessHeader';
import { BusinessContact } from '@/components/business/BusinessContact';
import { BusinessPhotos } from '@/components/business/BusinessPhotos';
import { Business } from '@/types/business';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const mockBusiness: Business = {
  id: '1',
  name: 'Tech Solutions Inc',
  email: 'contact@techsolutions.com',
  description: 'Leading technology solutions provider specializing in web development and cloud services.',
  logo: 'https://via.placeholder.com/150',
  category: 'Technology',
  website: 'https://example.com',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  linkedin: 'https://linkedin.com',
  youtube: 'https://youtube.com',
  whatsapp: '5551234567890',
  address: '123 Tech Street, Silicon Valley, CA',
  latitude: 37.7749,
  longitude: -122.4194,
  rating: 4,
  photos: ['https://via.placeholder.com/300'],
  createdAt: new Date(),
};

const BusinessProfile = () => {
  const { id } = useParams();
  const business = mockBusiness;
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: business.name,
          text: business.description,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "The business profile link has been copied to your clipboard.",
        });
      }
    } catch (error) {
      toast({
        title: "Error sharing",
        description: "There was a problem sharing this business profile.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <BusinessSEO business={business} id={id || ''} />

      <article className="container py-8" itemScope itemType="https://schema.org/LocalBusiness">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <BusinessHeader business={business} />
              <Button
                onClick={handleShare}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <BusinessContact business={business} />

              <div>
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <div className="flex items-start gap-2 mb-4">
                  <MapPin className="w-5 h-5 mt-1 text-primary" />
                  <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">{business.address}</span>
                  </p>
                </div>
                <BusinessMap latitude={business.latitude} longitude={business.longitude} />
              </div>
            </div>

            <BusinessPhotos business={business} />
          </CardContent>
        </Card>
      </article>
    </>
  );
};

export default BusinessProfile;