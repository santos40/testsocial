import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Business, BusinessFormData } from '@/types/business';
import { Form } from '@/components/ui/form';
import { RegistrationFields } from '../RegistrationFields';
import { X } from 'lucide-react';
import * as z from 'zod';

interface UserFormProps {
  onClose: () => void;
  editingUser?: Business | null;
}

const formSchema = z.object({
  name: z.string().min(2, 'Business name must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  logo: z.string().url('Please enter a valid URL for the logo'),
  category: z.string().min(2, 'Category is required'),
  website: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  instagram: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  facebook: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  linkedin: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  youtube: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  whatsapp: z.string().regex(/^\d+$/, 'Please enter only numbers').optional().or(z.literal('')),
  address: z.string().min(5, 'Address is required'),
  latitude: z.number().or(z.string().regex(/^-?\d*\.?\d+$/).transform(Number)),
  longitude: z.number().or(z.string().regex(/^-?\d*\.?\d+$/).transform(Number)),
  photos: z.array(z.string().url('Please enter valid URLs for photos')).optional(),
});

export const UserForm = ({ onClose, editingUser }: UserFormProps) => {
  const { toast } = useToast();
  
  const form = useForm<BusinessFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: editingUser || {
      name: '',
      description: '',
      logo: '',
      category: '',
      website: '',
      instagram: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      whatsapp: '',
      address: '',
      latitude: 0,
      longitude: 0,
      photos: [],
    },
  });

  const onSubmit = async (data: BusinessFormData) => {
    try {
      // TODO: Implement actual API call
      console.log('Form data:', data);
      
      toast({
        title: "Success!",
        description: editingUser 
          ? "Business has been updated successfully."
          : "Business has been added successfully.",
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem saving the business. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative bg-background p-6 rounded-lg border">
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-4"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </Button>
      
      <h2 className="text-lg font-semibold mb-6">
        {editingUser ? 'Edit Business' : 'Add New Business'}
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <RegistrationFields form={form} />
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {editingUser ? 'Update' : 'Add'} Business
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};