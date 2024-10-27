import { Helmet } from 'react-helmet-async';
import { Business } from '@/types/business';

interface BusinessSEOProps {
  business: Business;
  id: string;
}

export const BusinessSEO = ({ business, id }: BusinessSEOProps) => {
  // Extract city and region from address
  const addressParts = business.address.split(',').map(part => part.trim());
  const city = addressParts[1] || '';
  const region = addressParts[2] || '';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    image: business.logo,
    address: {
      '@type': 'PostalAddress',
      streetAddress: addressParts[0],
      addressLocality: city,
      addressRegion: region,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.latitude,
      longitude: business.longitude
    },
    url: business.website,
    telephone: business.whatsapp,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating,
      bestRating: '5',
      worstRating: '1',
      ratingCount: '1'
    },
    sameAs: [
      business.facebook,
      business.instagram,
      business.linkedin,
      business.youtube
    ].filter(Boolean)
  };

  const canonicalUrl = `${window.location.origin}/business/${id}`;

  return (
    <Helmet>
      <title>{`${business.name} - Business Directory`}</title>
      <meta name="description" content={business.description} />
      <meta property="og:title" content={business.name} />
      <meta property="og:description" content={business.description} />
      <meta property="og:image" content={business.logo} />
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={business.name} />
      <meta name="twitter:description" content={business.description} />
      <meta name="twitter:image" content={business.logo} />
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};