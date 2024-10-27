import React, { useState } from 'react';
import { DirectoryHeader } from '@/components/directory/DirectoryHeader';
import { DirectoryGrid } from '@/components/directory/DirectoryGrid';
import { Pagination } from '@/components/Pagination';
import { mockBusinesses } from '@/components/directory/DirectoryData';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();
  const itemsPerPage = 10;
  const totalPages = Math.ceil(mockBusinesses.length / itemsPerPage);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Business Directory - SocialProfileHub",
          text: "Discover and connect with businesses in our directory.",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "The directory link has been copied to your clipboard.",
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

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return mockBusinesses.slice(startIndex, endIndex);
  };

  return (
    <div className="container py-8">
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
      <DirectoryHeader />
      <DirectoryGrid businesses={getCurrentPageItems()} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Index;