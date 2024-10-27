import React from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto py-6 px-4">
      <Separator className="mb-6" />
      <div className="container mx-auto text-center space-y-4">
        <form action="https://www.paypal.com/donate" method="post" target="_blank">
          <input type="hidden" name="business" value="contato@vidrolimpo.com" />
          <input type="hidden" name="currency_code" value="USD" />
          <Button 
            type="submit" 
            variant="outline"
            className="bg-[#0070ba] hover:bg-[#003087] text-white"
          >
            Make Donation
          </Button>
        </form>
        <p className="text-sm text-muted-foreground">
          <Link to="/" className="hover:underline">
            © {currentYear} SocialProfileHubs.com. All rights reserved.
          </Link>
        </p>
      </div>
    </footer>
  );
};