import { useState } from 'react';
import { UserTable } from './UserTable';
import { UserForm } from './UserForm';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Business } from '@/types/business';

export const AdminDashboard = () => {
  const [showAddUser, setShowAddUser] = useState(false);
  const [editingUser, setEditingUser] = useState<Business | null>(null);
  const { toast } = useToast();

  const handleAddUser = () => {
    setShowAddUser(true);
    setEditingUser(null);
  };

  const handleEditUser = (user: Business) => {
    setEditingUser(user);
    setShowAddUser(true);
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      // TODO: Implement actual API call
      console.log('Deleting user:', userId);
      
      toast({
        title: "Success",
        description: "User deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete user",
        variant: "destructive",
      });
    }
  };

  const handleFormClose = () => {
    setShowAddUser(false);
    setEditingUser(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button onClick={handleAddUser} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Business
        </Button>
      </div>

      {showAddUser ? (
        <UserForm 
          onClose={handleFormClose}
          editingUser={editingUser}
        />
      ) : (
        <UserTable 
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
        />
      )}
    </div>
  );
};