import { Helmet } from 'react-helmet-async';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { AdminSettings } from '@/components/admin/AdminSettings';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Admin Dashboard - SocialProfileHub",
          text: "Manage your business listings and settings on SocialProfileHub.",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "The admin dashboard link has been copied to your clipboard.",
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
        <title>Admin Dashboard - SocialProfileHub</title>
      </Helmet>

      <div className="container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-2">
            <Button
              onClick={handleShare}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        <Tabs defaultValue="dashboard">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            <Card>
              <CardContent className="pt-6">
                <AdminDashboard />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <AdminSettings />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Admin;