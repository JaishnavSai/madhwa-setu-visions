
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-madhwa-100/80 to-white/90 dark:from-madhwa-800/80 dark:to-madhwa-900/90"></div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-madhwa-300/20 dark:bg-madhwa-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-gold-300/20 dark:bg-gold-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-madhwa-100 dark:bg-madhwa-700/50 rounded-full backdrop-blur-sm animate-fade-in">
            <span className="text-sm font-medium text-madhwa-600 dark:text-madhwa-300">Tradition Meets Technology</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-madhwa-800 dark:text-white leading-tight mb-6 animate-fade-in">
            A Digital Spiritual Companion for the Madhwa Community
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            "We're not here to digitize the divine. We're here to make the sacred searchable, the complex clear, and the spiritual scrollable."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-madhwa-500 hover:bg-madhwa-600 text-white w-full sm:w-auto">
              <Link to="/rituals">
                Explore Rituals <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-madhwa-400 text-madhwa-600 hover:bg-madhwa-50 dark:border-madhwa-400 dark:text-madhwa-300 dark:hover:bg-madhwa-800 w-full sm:w-auto">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
