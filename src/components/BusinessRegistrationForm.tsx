import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Form } from '@/components/ui/form';
import { BusinessFormData } from '@/types/business';
import { RegistrationFields } from './RegistrationFields';
import { useState } from 'react';
import { Home } from 'lucide-react';
import { sendWelcomeEmail } from '@/utils/emailUtils';

const formSchema = z.object({
  name: z.string().min(2, 'Business name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
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

export const BusinessRegistrationForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<BusinessFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
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
      // TODO: Implement actual API call here
      console.log('Form data:', data);
      
      // Send welcome email
      const emailSent = await sendWelcomeEmail(data.email, data.name);
      
      if (emailSent) {
        toast({
          title: "Success!",
          description: "Your business has been registered successfully. Welcome email sent!",
        });
      } else {
        toast({
          title: "Partial Success",
          description: "Business registered successfully, but we couldn't send the welcome email.",
          variant: "destructive",
        });
      }
      
      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem registering your business. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto p-6">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-green-600">Registration Successful!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">
            Thank you for registering your business with SocialProfileHub!
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <form action="https://www.paypal.com/donate" method="post" target="_blank">
              <input type="hidden" name="business" value="contato@vidrolimpo.com" />
              <input type="hidden" name="currency_code" value="USD" />
              <Button type="submit" className="bg-[#0070ba] hover:bg-[#003087] text-white">
                Support Us with PayPal
              </Button>
            </form>

            <div className="flex gap-4">
              <Link to="/">
                <Button variant="outline" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/directory">
                <Button variant="outline">
                  View Business Directory
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <RegistrationFields form={form} />
        <Button type="submit" className="w-full">Register Business</Button>
      </form>
    </Form>
  );
};