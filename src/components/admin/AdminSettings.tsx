import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export const AdminSettings = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [mapsApiKey, setMapsApiKey] = useState(localStorage.getItem('MAPS_API_KEY') || '');
  const { changePassword } = useAuth();
  const { toast } = useToast();

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (changePassword(oldPassword, newPassword)) {
      toast({
        title: "Success",
        description: "Password changed successfully",
      });
      setOldPassword('');
      setNewPassword('');
    } else {
      toast({
        title: "Error",
        description: "Current password is incorrect",
        variant: "destructive",
      });
    }
  };

  const handleApiKeyChange = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('MAPS_API_KEY', mapsApiKey);
    toast({
      title: "Success",
      description: "Google Maps API key updated successfully",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Current password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <Button type="submit">Change Password</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Google Maps API Key</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleApiKeyChange} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter Google Maps API Key"
              value={mapsApiKey}
              onChange={(e) => setMapsApiKey(e.target.value)}
            />
            <Button type="submit">Update API Key</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};