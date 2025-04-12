
import React, { useState, useEffect } from "react";
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
  User,
  LogOut,
  ShoppingBag
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleMouseMove = () => {
      setIsScrolling(true);
      clearTimeout(timer);
      
      const timer = setTimeout(() => {
        setIsScrolling(false);
      }, 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
  };

  const navLinks = [
    { name: "New", path: "/new" },
    { name: "Rituals", path: "/rituals" },
    { name: "Dharma", path: "/dharma" },
    { name: "Festival", path: "/festival" },
    { name: "Ask", path: "/ask" },
    { name: "Community", path: "/community" },
  ];

  return (
    <nav className={`w-full bg-black/90 backdrop-blur-md transition-opacity duration-300 ${isScrolling ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto py-3 px-4 md:px-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button
            onClick={toggleMenu}
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            className="text-white hover:bg-white/10"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-white hover:text-madhwa-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group absolute left-1/2 transform -translate-x-1/2">
          <span className="font-serif text-xl font-semibold text-white tracking-widest">
            MADHWASETU...
          </span>
        </Link>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-white hover:bg-white/10"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            className="text-white hover:bg-white/10"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full overflow-hidden">
                  <Avatar>
                    <AvatarFallback className="bg-madhwa-600 text-white">
                      {user.email ? user.email.substring(0, 2).toUpperCase() : "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-0.5 leading-none">
                    <p className="font-medium text-sm">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer flex w-full items-center">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={signOut}
                  className="text-red-500 focus:text-red-500 cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          )}
          
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-50 bg-black border-b border-gray-700 animate-fade-in shadow-lg">
          <div className="py-4 px-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center gap-3 py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
              </Link>
            ))}
            
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-3 py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <button
                  className="flex items-center gap-3 py-3 px-4 rounded-lg text-red-400 hover:bg-red-900/20 transition-colors w-full text-left"
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="flex items-center gap-3 py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
