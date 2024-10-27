import { Globe, Instagram, Facebook, Linkedin, Phone, Youtube } from 'lucide-react';
import { Business } from '@/types/business';

interface BusinessContactProps {
  business: Business;
}

export const BusinessContact = ({ business }: BusinessContactProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Contact & Social</h2>
      <div className="space-y-3">
        {business.website && (
          <a
            href={business.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80"
            itemProp="url"
          >
            <Globe className="w-5 h-5" />
            Website
          </a>
        )}
        {business.youtube && (
          <a
            href={business.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-red-600 hover:text-red-700"
          >
            <Youtube className="w-5 h-5" />
            YouTube
          </a>
        )}
        {business.instagram && (
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-500 hover:text-pink-600"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
        )}
        {business.facebook && (
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <Facebook className="w-5 h-5" />
            Facebook
          </a>
        )}
        {business.linkedin && (
          <a
            href={business.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        )}
        {business.whatsapp && (
          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-500 hover:text-green-600"
          >
            <Phone className="w-5 h-5" />
            WhatsApp
          </a>
        )}
      </div>
    </div>
  );
};