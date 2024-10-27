import { Home, Building2, Plus, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useLanguage } from "@/contexts/LanguageContext";
import { languageNames } from "@/types/language";

export function MainNav() {
  const { language, setLanguage } = useLanguage();

  return (
    <Menubar className="border-b px-2 sm:px-6 py-3 w-full bg-background">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-8">
          <MenubarMenu>
            <Link to="/">
              <MenubarTrigger className="font-bold text-base sm:text-xl">
                <span className="text-blue-600">Social</span>
                <span className="text-orange-500">Profile</span>
                <span className="text-red-600">Hub</span>
                <span className="text-gray-700">.com</span>
              </MenubarTrigger>
            </Link>
          </MenubarMenu>

          <div className="hidden sm:flex items-center gap-4">
            <MenubarMenu>
              <Link to="/directory">
                <MenubarTrigger>
                  <Building2 className="mr-2 h-4 w-4 inline" />
                  <span>Directory</span>
                </MenubarTrigger>
              </Link>
            </MenubarMenu>

            <MenubarMenu>
              <Link to="/register">
                <MenubarTrigger>
                  <Plus className="mr-2 h-4 w-4 inline" />
                  <span>Add Business</span>
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
          </div>
        </div>

        {/* Mobile menu icons */}
        <div className="flex sm:hidden items-center gap-2">
          <MenubarMenu>
            <Link to="/directory">
              <MenubarTrigger>
                <Building2 className="h-5 w-5" />
              </MenubarTrigger>
            </Link>
          </MenubarMenu>

          <MenubarMenu>
            <Link to="/register">
              <MenubarTrigger>
                <Plus className="h-5 w-5" />
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
        </div>

        <MenubarMenu>
          <MenubarTrigger>
            <Globe className="mr-2 h-4 w-4 inline" />
            <span className="hidden sm:inline">{languageNames[language]}</span>
          </MenubarTrigger>
          <MenubarContent className="bg-white border shadow-lg">
            {Object.entries(languageNames).map(([code, name]) => (
              <MenubarItem
                key={code}
                className="cursor-pointer hover:bg-accent"
                onClick={() => setLanguage(code as any)}
              >
                {name}
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}