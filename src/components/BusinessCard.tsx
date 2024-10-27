import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Globe, Instagram, Facebook, Linkedin, Phone, Youtube } from 'lucide-react';
import { Business } from '@/types/business';
import { Link } from 'react-router-dom';

interface BusinessCardProps {
  business: Business;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow animate-fade-in">
      <CardHeader className="flex flex-row items-center gap-4">
        <img
          src={business.logo}
          alt={`${business.name} logo`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <Link to={`/business/${business.id}`} className="text-xl font-bold hover:text-primary">
            {business.name}
          </Link>
          <Badge variant="secondary" className="w-fit">
            {business.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-2">{business.description}</p>
        <div className="flex flex-wrap gap-3">
          {business.website && (
            <a
              href={business.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              <Globe className="w-5 h-5" />
            </a>
          )}
          {business.youtube && (
            <a
              href={business.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700"
            >
              <Youtube className="w-5 h-5" />
            </a>
          )}
          {business.instagram && (
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <Instagram className="w-5 h-5" />
            </a>
          )}
          {business.facebook && (
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              <Facebook className="w-5 h-5" />
            </a>
          )}
          {business.linkedin && (
            <a
              href={business.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {business.whatsapp && (
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600"
            >
              <Phone className="w-5 h-5" />
            </a>
          )}
        </div>
        <div className="mt-4 flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < business.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};