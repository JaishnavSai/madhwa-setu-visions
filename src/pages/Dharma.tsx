
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Download, FileText, Search, BookOpen, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Dharma = () => {
  // Mock data - in a real app this would come from an API
  const dharmaGuides = [
    {
      id: 1,
      title: "Gruhapravesham Guide",
      description: "Complete guide to the house warming ceremony with step-by-step instructions.",
      complexity: "Complex",
      duration: "2-3 hours",
      pages: 12,
      imageUrl: "https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Upanayanam Checklist",
      description: "Everything you need for the sacred thread ceremony with family preparation guide.",
      complexity: "Complex",
      duration: "Full day ceremony",
      pages: 18,
      imageUrl: "https://images.unsplash.com/photo-1523281353252-5e14672131b7?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Shraddha Procedure",
      description: "Ancestral ritual guidance with mantras and detailed procedure.",
      complexity: "Complex",
      duration: "2-3 hours",
      pages: 15,
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Daily Puja Guide",
      description: "Simple morning worship routine with necessary mantras and steps.",
      complexity: "Simple",
      duration: "15-30 minutes",
      pages: 5,
      imageUrl: "https://images.unsplash.com/photo-1518476383216-d27a645c176d?ixlib=rb-4.0.3"
    },
    {
      id: 5,
      title: "Satyanarayan Katha",
      description: "The complete procedure for conducting Satyanarayan Puja with story recitation.",
      complexity: "Moderate",
      duration: "1-2 hours",
      pages: 10,
      imageUrl: "https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?ixlib=rb-4.0.3"
    },
    {
      id: 6,
      title: "Marriage Ceremony Guide",
      description: "Comprehensive guide to Madhwa wedding rituals and traditions.",
      complexity: "Complex",
      duration: "Multiple days",
      pages: 25,
      imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3"
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-b from-madhwa-50 to-white dark:from-madhwa-800 dark:to-madhwa-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="font-serif text-4xl font-bold text-madhwa-700 dark:text-white mb-4">Dharma Guides & Checklists</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Downloadable PDFs to guide families through complex rituals with clear, step-by-step instructions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for guides by ritual name or type..."
                className="pl-10 border-madhwa-200 dark:border-madhwa-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {dharmaGuides.map(guide => (
              <Card key={guide.id} className="overflow-hidden border-madhwa-100 dark:border-madhwa-700 hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={guide.imageUrl} 
                    alt={guide.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-xl text-madhwa-700 dark:text-madhwa-300">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-madhwa-500 dark:text-madhwa-400" />
                      <span>{guide.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4 text-madhwa-500 dark:text-madhwa-400" />
                      <span>{guide.pages} pages</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4 text-madhwa-500 dark:text-madhwa-400" />
                      <span>{guide.complexity}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <Button variant="outline" className="border-madhwa-300 text-madhwa-600 hover:bg-madhwa-50 dark:border-madhwa-500 dark:text-madhwa-300">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button asChild className="bg-madhwa-500 hover:bg-madhwa-600 text-white">
                    <Link to={`/dharma/${guide.id}`}>View</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dharma;
