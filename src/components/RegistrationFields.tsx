import { UseFormReturn } from 'react-hook-form';
import { BusinessFormData } from '@/types/business';
import { BasicInfoFields } from './registration/BasicInfoFields';
import { MediaUploadFields } from './registration/MediaUploadFields';
import { ContactFields } from './registration/ContactFields';
import { LocationFields } from './registration/LocationFields';

interface RegistrationFieldsProps {
  form: UseFormReturn<BusinessFormData>;
}

export const RegistrationFields = ({ form }: RegistrationFieldsProps) => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Basic Information</h3>
        <BasicInfoFields form={form} />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Media</h3>
        <MediaUploadFields form={form} />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Contact Information</h3>
        <ContactFields form={form} />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Location</h3>
        <LocationFields form={form} />
      </div>
    </div>
  );
};