import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Building2, Users2, Globe2, TrendingUp, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Landing = () => {
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "SocialProfileHub - Business Directory & Social Media Integration",
          text: "List your business for free and connect with potential customers. Integrate all your social media profiles in one place.",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "The website link has been copied to your clipboard.",
        });
      }
    } catch (error) {
      toast({
        title: "Error sharing",
        description: "There was a problem sharing this website.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>SocialProfileHubs.com - Expand Your Business's Digital Presence</title>
        <meta name="description" content="Join SocialProfileHub to showcase your business, connect with customers, and grow your online presence. Free business directory listing with social media integration." />
        <meta name="keywords" content="business directory, local business, online presence, social media integration, business listing" />
        <link rel="canonical" href="https://socialprofilehub.com" />
        <meta property="og:title" content="SocialProfileHub - Business Directory & Social Media Integration" />
        <meta property="og:description" content="List your business for free and connect with potential customers. Integrate all your social media profiles in one place." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Expand Your Business's Digital Footprint
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join hundreds of businesses showcasing their services and connecting with customers through SocialProfileHub
          </p>
          <Link to="/register">
            <Button size="lg" className="text-lg">
              List Your Business For Free
            </Button>
          </Link>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <Globe2 className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold">Enhanced Visibility</h3>
              <p className="text-muted-foreground">
                Increase your online presence with a professionally listed business profile
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <Users2 className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold">Connect with Customers</h3>
              <p className="text-muted-foreground">
                Reach potential customers actively searching for services like yours
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <Building2 className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold">Social Integration</h3>
              <p className="text-muted-foreground">
                Showcase all your social media profiles in one centralized location
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <TrendingUp className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold">Growth Opportunities</h3>
              <p className="text-muted-foreground">
                Improve your SEO and digital marketing through quality backlinks
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose SocialProfileHub?</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="mb-4">
              SocialProfileHub is more than just a business directory. We're a community of entrepreneurs and businesses working together to strengthen their online presence and reach more customers.
            </p>
            <p className="mb-8">
              Our platform provides you with a professional business profile that integrates all your social media channels, making it easier for customers to find and connect with you across different platforms.
            </p>
          </div>
          <Link to="/register">
            <Button variant="outline" size="lg">
              Join Our Business Community
            </Button>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Landing;