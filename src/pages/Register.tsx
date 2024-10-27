import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BusinessRegistrationForm } from '@/components/BusinessRegistrationForm';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Register Your Business - SocialProfileHub",
          text: "Register your business on SocialProfileHub and expand your digital presence.",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "The registration page link has been copied to your clipboard.",
        });
      }
    } catch (error) {
      toast({
        title: "Error sharing",
        description: "There was a problem sharing this page.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Register Your Business - Business Directory</title>
        <meta name="description" content="Register your business in our directory to increase your online presence and reach more customers." />
      </Helmet>

      <div className="container max-w-3xl py-8">
        <div className="flex justify-end mb-4">
          <Button
            onClick={handleShare}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Register Your Business</CardTitle>
            <CardDescription>
              Fill out the form below to add your business to our directory.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BusinessRegistrationForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Register;