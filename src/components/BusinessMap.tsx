import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

interface BusinessMapProps {
  latitude: number;
  longitude: number;
}

export const BusinessMap: React.FC<BusinessMapProps> = ({ latitude, longitude }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });

  if (loadError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Unable to load the map. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  if (!isLoaded) {
    return <Skeleton className="h-[300px] w-full rounded-lg" />;
  }

  return (
    <GoogleMap
      zoom={15}
      center={{ lat: latitude, lng: longitude }}
      mapContainerClassName="w-full h-[300px] rounded-lg"
      options={{
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      <Marker position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  );
};