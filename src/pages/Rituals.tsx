
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Search, Filter, Clock, Calendar, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const Rituals = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - in a real app this would come from an API
  const rituals = [
    {
      id: 1,
      name: "Sandhyavandanam",
      category: "Daily Ritual",
      lifeStage: "All",
      timeOfYear: "Daily",
      duration: "15-20 minutes",
      difficulty: "Moderate",
      description: "A daily ritual performed by Brahmins three times a day dedicated to Lord Surya.",
      imageUrl: "https://images.unsplash.com/photo-1518476383216-d27a645c176d?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "Upanayanam",
      category: "Samskara",
      lifeStage: "Childhood",
      timeOfYear: "Any",
      duration: "3-4 hours",
      difficulty: "Complex",
      description: "Sacred thread ceremony marking the beginning of formal education and Vedic studies.",
      imageUrl: "https://images.unsplash.com/photo-1523281353252-5e14672131b7?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "Gruhapravesham",
      category: "Home Ritual",
      lifeStage: "Family",
      timeOfYear: "Any",
      duration: "2-3 hours",
      difficulty: "Complex",
      description: "House warming ceremony performed when entering a new home.",
      imageUrl: "https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      name: "Ekadashi Vratam",
      category: "Vrata",
      lifeStage: "All",
      timeOfYear: "Twice Monthly",
      duration: "Full day",
      difficulty: "Moderate",
      description: "Fasting and prayers observed on the 11th day of each lunar fortnight.",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3"
    },
    {
      id: 5,
      name: "Naivedyam",
      category: "Daily Ritual",
      lifeStage: "All",
      timeOfYear: "Daily",
      duration: "15-30 minutes",
      difficulty: "Simple",
      description: "Offering of food to deities before consumption.",
      imageUrl: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3"
    },
    {
      id: 6,
      name: "Shraddha",
      category: "Ancestral",
      lifeStage: "Family",
      timeOfYear: "Annual",
      duration: "2-3 hours",
      difficulty: "Complex",
      description: "Ritual performed in honor of deceased ancestors.",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3"
    }
  ];

  const filteredRituals = rituals.filter(ritual => 
    ritual.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    ritual.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ritual.lifeStage.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ritual.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <section className="bg-gradient-to-b from-madhwa-50 to-white dark:from-madhwa-800 dark:to-madhwa-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="font-serif text-4xl font-bold text-madhwa-700 dark:text-white mb-4">Ritual Explorer</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Find guidance for rituals by life stage, time of year, or category.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search rituals, life stages, or categories..."
                  className="pl-10 border-madhwa-200 dark:border-madhwa-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2 border-madhwa-200 dark:border-madhwa-700">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="samskaras">Samskaras</TabsTrigger>
              <TabsTrigger value="vratas">Vratas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRituals.map(ritual => (
                  <Link to={`/rituals/${ritual.id}`} key={ritual.id}>
                    <div className="ritual-card group h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={ritual.imageUrl} 
                          alt={ritual.name} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        />
                      </div>
                      <div className="p-5 flex-grow flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline" className="bg-madhwa-50 text-madhwa-600 dark:bg-madhwa-700 dark:text-madhwa-300 border-madhwa-200 dark:border-madhwa-600">
                            {ritual.category}
                          </Badge>
                          <div className="flex items-center text-madhwa-500 dark:text-madhwa-400 text-sm">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            <span>{ritual.duration}</span>
                          </div>
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-madhwa-700 dark:text-madhwa-300 mb-2 group-hover:text-madhwa-500 dark:group-hover:text-madhwa-200 transition-colors">
                          {ritual.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                          {ritual.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-auto pt-3 border-t border-gray-100 dark:border-madhwa-700">
                          <div className="flex items-center mr-4">
                            <User className="h-3.5 w-3.5 mr-1" />
                            <span>{ritual.lifeStage}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            <span>{ritual.timeOfYear}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredRituals.length === 0 && (
                <div className="text-center p-10 border border-dashed border-madhwa-200 dark:border-madhwa-700 rounded-lg">
                  <Search className="h-12 w-12 mx-auto text-madhwa-400 mb-4" />
                  <h3 className="text-xl font-medium text-madhwa-700 dark:text-madhwa-300 mb-2">No rituals found</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="daily">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRituals
                  .filter(ritual => ritual.category === "Daily Ritual")
                  .map(ritual => (
                  <Link to={`/rituals/${ritual.id}`} key={ritual.id}>
                    <div className="ritual-card group h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={ritual.imageUrl} 
                          alt={ritual.name} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        />
                      </div>
                      <div className="p-5 flex-grow flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline" className="bg-madhwa-50 text-madhwa-600 dark:bg-madhwa-700 dark:text-madhwa-300 border-madhwa-200 dark:border-madhwa-600">
                            {ritual.category}
                          </Badge>
                          <div className="flex items-center text-madhwa-500 dark:text-madhwa-400 text-sm">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            <span>{ritual.duration}</span>
                          </div>
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-madhwa-700 dark:text-madhwa-300 mb-2 group-hover:text-madhwa-500 dark:group-hover:text-madhwa-200 transition-colors">
                          {ritual.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                          {ritual.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-auto pt-3 border-t border-gray-100 dark:border-madhwa-700">
                          <div className="flex items-center mr-4">
                            <User className="h-3.5 w-3.5 mr-1" />
                            <span>{ritual.lifeStage}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            <span>{ritual.timeOfYear}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="samskaras">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRituals
                  .filter(ritual => ritual.category === "Samskara")
                  .map(ritual => (
                  <Link to={`/rituals/${ritual.id}`} key={ritual.id}>
                    <div className="ritual-card group h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={ritual.imageUrl} 
                          alt={ritual.name} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        />
                      </div>
                      <div className="p-5 flex-grow flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline" className="bg-madhwa-50 text-madhwa-600 dark:bg-madhwa-700 dark:text-madhwa-300 border-madhwa-200 dark:border-madhwa-600">
                            {ritual.category}
                          </Badge>
                          <div className="flex items-center text-madhwa-500 dark:text-madhwa-400 text-sm">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            <span>{ritual.duration}</span>
                          </div>
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-madhwa-700 dark:text-madhwa-300 mb-2 group-hover:text-madhwa-500 dark:group-hover:text-madhwa-200 transition-colors">
                          {ritual.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                          {ritual.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-auto pt-3 border-t border-gray-100 dark:border-madhwa-700">
                          <div className="flex items-center mr-4">
                            <User className="h-3.5 w-3.5 mr-1" />
                            <span>{ritual.lifeStage}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            <span>{ritual.timeOfYear}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="vratas">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRituals
                  .filter(ritual => ritual.category === "Vrata")
                  .map(ritual => (
                  <Link to={`/rituals/${ritual.id}`} key={ritual.id}>
                    <div className="ritual-card group h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={ritual.imageUrl} 
                          alt={ritual.name} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        />
                      </div>
                      <div className="p-5 flex-grow flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline" className="bg-madhwa-50 text-madhwa-600 dark:bg-madhwa-700 dark:text-madhwa-300 border-madhwa-200 dark:border-madhwa-600">
                            {ritual.category}
                          </Badge>
                          <div className="flex items-center text-madhwa-500 dark:text-madhwa-400 text-sm">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            <span>{ritual.duration}</span>
                          </div>
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-madhwa-700 dark:text-madhwa-300 mb-2 group-hover:text-madhwa-500 dark:group-hover:text-madhwa-200 transition-colors">
                          {ritual.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                          {ritual.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-auto pt-3 border-t border-gray-100 dark:border-madhwa-700">
                          <div className="flex items-center mr-4">
                            <User className="h-3.5 w-3.5 mr-1" />
                            <span>{ritual.lifeStage}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            <span>{ritual.timeOfYear}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Rituals;
