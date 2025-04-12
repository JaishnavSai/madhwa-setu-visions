
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] to-[#FAF7F2]/50 dark:from-gray-900 dark:to-gray-800 pointer-events-none"></div>
      </div>
      
      {/* Navbar is now always visible */}
      <div className="w-full z-50">
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
