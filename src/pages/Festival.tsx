
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Festival = () => {
  // Mock data - in a real app this would come from an API
  const upcomingFestivals = [
    {
      id: 1,
      name: "Rama Navami",
      date: "April 17, 2025",
      description: "The birthday of Lord Rama, the seventh avatar of Lord Vishnu.",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3",
      rituals: ["Morning bath", "Temple visit", "Rama Puja", "Reading Ramayana", "Fasting"],
      location: "All major Madhwa temples"
    },
    {
      id: 2,
      name: "Krishna Janmashtami",
      date: "August 15, 2025",
      description: "The birthday of Lord Krishna, the eighth avatar of Lord Vishnu.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
      rituals: ["Fasting till midnight", "Krishna Abhishekam", "Bhajan singing", "Rocking the cradle"],
      location: "All major Madhwa temples"
    },
    {
      id: 3,
      name: "Hanuman Jayanti",
      date: "April 23, 2025",
      description: "Celebrates the birth of Lord Hanuman, the ardent devotee of Lord Rama.",
      image: "https://images.unsplash.com/photo-1518476383216-d27a645c176d?ixlib=rb-4.0.3",
      rituals: ["Hanuman Chalisa recitation", "Offering sindoor", "Temple visits"],
      location: "Hanuman temples across regions"
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-b from-madhwa-50 to-white dark:from-madhwa-800 dark:to-madhwa-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-serif text-4xl font-bold text-madhwa-700 dark:text-white mb-4">Festival Mode</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Stay connected with major spiritual events with tailored rituals, checklists, and stories for each occasion.
            </p>
          </div>

          <Tabs defaultValue="upcoming" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="regional">Regional</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="space-y-8">
              {upcomingFestivals.map((festival) => (
                <Card key={festival.id} className="overflow-hidden border-madhwa-100 dark:border-madhwa-700">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                      <div className="h-full relative">
                        <img 
                          src={festival.image} 
                          alt={festival.name} 
                          className="w-full h-full object-cover aspect-square md:aspect-auto"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden">
                          <h3 className="text-white font-bold text-xl">{festival.name}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 p-6">
                      <div className="hidden md:block mb-2">
                        <h3 className="font-serif text-2xl font-bold text-madhwa-700 dark:text-madhwa-300">{festival.name}</h3>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-madhwa-600 dark:text-madhwa-400">
                          <Calendar className="h-4 w-4" />
                          <span>{festival.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-madhwa-600 dark:text-madhwa-400">
                          <MapPin className="h-4 w-4" />
                          <span>{festival.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{festival.description}</p>
                      <div className="mb-4">
                        <h4 className="font-medium text-madhwa-700 dark:text-madhwa-300 mb-2">Key Rituals:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {festival.rituals.map((ritual, idx) => (
                            <li key={idx} className="text-gray-700 dark:text-gray-300">{ritual}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-6">
                        <Button asChild className="bg-madhwa-500 hover:bg-madhwa-600 text-white">
                          <Link to={`/festival/${festival.id}`}>View Details</Link>
                        </Button>
                        <Button variant="outline" className="border-madhwa-300 text-madhwa-600 hover:bg-madhwa-50 dark:border-madhwa-500 dark:text-madhwa-300">
                          Save to Calendar
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="regional">
              <div className="text-center p-10 border border-dashed border-madhwa-200 dark:border-madhwa-700 rounded-lg">
                <Info className="h-12 w-12 mx-auto text-madhwa-400 mb-4" />
                <h3 className="text-xl font-medium text-madhwa-700 dark:text-madhwa-300 mb-2">Regional Festivals Coming Soon</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We're currently compiling regional festival information from various Madhwa communities.
                </p>
                <Button className="bg-madhwa-500 hover:bg-madhwa-600 text-white">Join Regional Contributors</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="calendar">
              <div className="text-center p-10 border border-dashed border-madhwa-200 dark:border-madhwa-700 rounded-lg">
                <Calendar className="h-12 w-12 mx-auto text-madhwa-400 mb-4" />
                <h3 className="text-xl font-medium text-madhwa-700 dark:text-madhwa-300 mb-2">Calendar View Coming Soon</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We're working on an interactive calendar to help you plan your spiritual observances.
                </p>
                <Button className="bg-madhwa-500 hover:bg-madhwa-600 text-white">Get Notified When Ready</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Festival;
