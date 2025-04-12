
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Info } from "lucide-react";
import { Link } from "react-router-dom";

const TodayRitual = () => {
  // Mock data - in a real app this would come from an API
  const todayRitual = {
    name: "Ekadashi",
    details: "Ekadashi is the eleventh lunar day of each of the two lunar phases in a Hindu calendar month.",
    timing: "Sunrise to Sunset",
    date: "April 12, 2025",
    restrictions: [
      "Fast from grains and beans",
      "Chant extra rounds of japa",
      "Read scriptures",
      "Avoid sleeping during daytime"
    ]
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-madhwa-50/30 dark:from-madhwa-900 dark:via-madhwa-900 dark:to-madhwa-800/70"></div>
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-madhwa-100 dark:bg-madhwa-700/50 text-madhwa-600 dark:text-madhwa-300 rounded-full text-sm font-medium mb-3">Daily Focus</span>
            <h2 className="font-serif text-3xl font-bold text-madhwa-700 dark:text-madhwa-300 mb-2">Today's Ritual Focus</h2>
            <p className="text-gray-600 dark:text-gray-400">Stay connected with your tradition every day</p>
          </div>

          <Card className="border-madhwa-200 dark:border-madhwa-700 shadow-xl overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-madhwa-800/80 transition-all hover:shadow-2xl">
            <div className="relative">
              <div className="absolute inset-0 bg-black">
                <div 
                  className="w-full h-full opacity-60 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531607225846-c2357edd0f41?q=80')" }}
                ></div>
              </div>
              <CardHeader className="relative z-10 backdrop-blur-sm bg-black/30 pb-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-white">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{todayRitual.date}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    <Info className="h-4 w-4 mr-1" />
                    <span>Info</span>
                  </Button>
                </div>
                <CardTitle className="text-3xl mt-2 text-white font-serif">{todayRitual.name}</CardTitle>
                <CardDescription className="text-gray-200">{todayRitual.details}</CardDescription>
              </CardHeader>
            </div>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-madhwa-600 dark:text-madhwa-400 mb-4">
                <Clock className="h-5 w-5" />
                <span className="font-medium">{todayRitual.timing}</span>
              </div>
              
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Today's Observances:</h3>
              <ul className="space-y-2 mb-6">
                {todayRitual.restrictions.map((restriction, index) => (
                  <li key={index} className="flex items-start gap-2 group">
                    <div className="min-w-4 h-4 rounded-full bg-madhwa-100 dark:bg-madhwa-700 flex items-center justify-center mt-1 group-hover:bg-madhwa-200 dark:group-hover:bg-madhwa-600 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-madhwa-500 dark:bg-madhwa-300"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{restriction}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-gray-100 dark:border-madhwa-700 pt-4">
              <Button variant="outline" className="border-madhwa-300 text-madhwa-600 hover:bg-madhwa-50 dark:border-madhwa-500 dark:text-madhwa-300 dark:hover:bg-madhwa-700/50">Save to Calendar</Button>
              <Button asChild className="bg-madhwa-500 hover:bg-madhwa-600 text-white">
                <Link to="/rituals/ekadashi">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TodayRitual;
