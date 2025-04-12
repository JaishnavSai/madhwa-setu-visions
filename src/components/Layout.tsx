
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Fixed background with Buddha silhouette */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-full opacity-10 dark:opacity-15">
          <div 
            className="absolute bottom-0 right-0 w-[90vh] h-[90vh] bg-contain bg-no-repeat bg-bottom"
            style={{ backgroundImage: "url('/lovable-uploads/2da7c2d4-ffb3-4fe3-ba73-cf59ad360328.png')" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white to-madhwa-50/50 dark:from-madhwa-900 dark:to-madhwa-800 pointer-events-none"></div>
      </div>
      
      {/* Navbar with hide on scroll */}
      <div className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <Navbar />
      </div>
      
      {/* Main content with padding to account for navbar */}
      <main className="flex-1 w-full z-10 pt-16">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
