import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DirectoryHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold">Business Directory</h1>
      <Link to="/register">
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Business
        </Button>
      </Link>
    </div>
  );
};