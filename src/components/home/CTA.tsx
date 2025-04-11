
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-madhwa-100 dark:bg-madhwa-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-madhwa-700 dark:text-madhwa-200 mb-6">
            A Generational Bridge for the Madhwa Community
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            For the student, the family abroad, the curious youth — explore and experience Sanatana Dharma in a format built for 2025 and beyond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-madhwa-500 hover:bg-madhwa-600 text-white">
              <Link to="/join">
                Join Our Community <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-madhwa-400 text-madhwa-600 hover:bg-madhwa-50 dark:border-madhwa-400 dark:text-madhwa-300 dark:hover:bg-madhwa-800">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
