
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Calendar, 
  Search, 
  Book, 
  HelpCircle,
  MessageSquare,
  User
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
  };

  const navLinks = [
    { name: "Festival Mode", path: "/festival", icon: <Calendar className="h-5 w-5" /> },
    { name: "Ritual Explorer", path: "/rituals", icon: <Search className="h-5 w-5" /> },
    { name: "Dharma Guide", path: "/dharma", icon: <Book className="h-5 w-5" /> },
    { name: "Ask a Question", path: "/ask", icon: <HelpCircle className="h-5 w-5" /> },
    { name: "Community", path: "/community", icon: <MessageSquare className="h-5 w-5" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-madhwa-800/90 backdrop-blur-md border-b border-gray-200 dark:border-madhwa-700">
      <div className="container mx-auto py-3 px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-madhwa-400 to-madhwa-600 flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-white font-serif text-xl">म</span>
          </div>
          <span className="font-serif text-xl font-semibold text-madhwa-600 dark:text-madhwa-300 group-hover:text-madhwa-500 dark:group-hover:text-madhwa-200 transition-colors">
            MadhwaSetu
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-gray-700 hover:text-madhwa-500 dark:text-gray-200 dark:hover:text-madhwa-300 flex items-center gap-1.5 transition-colors"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="hover:bg-madhwa-100 dark:hover:bg-madhwa-700"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-gold-400" />
            ) : (
              <Moon className="h-5 w-5 text-madhwa-500" />
            )}
          </Button>
          <Link to="/profile">
            <Button variant="outline" size="sm" className="gap-2 hover:bg-madhwa-50 hover:text-madhwa-600 dark:hover:bg-madhwa-700 dark:hover:text-madhwa-300 transition-colors">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="hover:bg-madhwa-100 dark:hover:bg-madhwa-700"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-gold-400" />
            ) : (
              <Moon className="h-5 w-5 text-madhwa-500" />
            )}
          </Button>
          <Button
            onClick={toggleMenu}
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            className="hover:bg-madhwa-100 dark:hover:bg-madhwa-700"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-madhwa-500 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-madhwa-500 dark:text-white" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-50 bg-white dark:bg-madhwa-800 border-b border-gray-200 dark:border-madhwa-700 animate-fade-in shadow-lg">
          <div className="py-4 px-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-madhwa-50 dark:hover:bg-madhwa-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              to="/profile"
              className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-madhwa-50 dark:hover:bg-madhwa-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
