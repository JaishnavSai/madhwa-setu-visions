
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, MapPin, Calendar, MessageSquare, Share2, ThumbsUp, Eye } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Community = () => {
  // Mock data - in a real app this would come from an API
  const upcomingEvents = [
    {
      id: 1,
      title: "Madhwa Philosophy Discussion Group",
      date: "April 20, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Bengaluru, Karnataka",
      organizer: "Madhwa Cultural Association",
      attendees: 28,
      imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Raghavendra Swami Aradhana",
      date: "May 15, 2025",
      time: "8:00 AM - 8:00 PM",
      location: "Mantralayam, Andhra Pradesh",
      organizer: "Mantralayam Temple Committee",
      attendees: 152,
      imageUrl: "https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Madhwa Youth Conference",
      date: "June 5-7, 2025",
      time: "All day",
      location: "Mumbai, Maharashtra",
      organizer: "Global Madhwa Youth Forum",
      attendees: 87,
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3"
    }
  ];

  const forumPosts = [
    {
      id: 1,
      title: "Interpretation of Dvadasha Stotra",
      author: "Sudhir N.",
      date: "2 days ago",
      content: "I've been studying the Dvadasha Stotra and had some questions about the interpretation of the fifth verse...",
      likes: 24,
      comments: 12,
      views: 156
    },
    {
      id: 2,
      title: "Regional variations in Madhwa practices",
      author: "Ananya R.",
      date: "1 week ago",
      content: "I've noticed some differences in how rituals are performed between Karnataka and Maharashtra Madhwa communities...",
      likes: 18,
      comments: 32,
      views: 243
    },
    {
      id: 3,
      title: "Modern adaptations of traditional practices",
      author: "Prakash M.",
      date: "3 weeks ago",
      content: "As someone living abroad, I'm interested in discussing how others have adapted traditional practices...",
      likes: 45,
      comments: 28,
      views: 312
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-b from-madhwa-50 to-white dark:from-madhwa-800 dark:to-madhwa-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="font-serif text-4xl font-bold text-madhwa-700 dark:text-white mb-4">Madhwa Community</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Connect with fellow community members, participate in events, and engage in discussions.
            </p>
          </div>

          <Tabs defaultValue="events" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="forum">Discussion Forum</TabsTrigger>
              <TabsTrigger value="groups">Local Groups</TabsTrigger>
            </TabsList>
            
            <TabsContent value="events">
              <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
                <h2 className="font-serif text-2xl font-bold text-madhwa-700 dark:text-madhwa-300">
                  Upcoming Events
                </h2>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                      type="text" 
                      placeholder="Search events..." 
                      className="pl-10 w-60 border-madhwa-200 dark:border-madhwa-700" 
                    />
                  </div>
                  <Button asChild className="bg-madhwa-500 hover:bg-madhwa-600 text-white">
                    <Link to="/events/create">
                      Create Event
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map(event => (
                  <Card key={event.id} className="overflow-hidden border-madhwa-100 dark:border-madhwa-700 hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={event.imageUrl} 
                        alt={event.title}
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <div className="text-white">
                          <div className="flex items-center gap-1.5 mb-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="font-serif text-xl text-madhwa-700 dark:text-madhwa-300">{event.title}</CardTitle>
                      <CardDescription>Organized by {event.organizer}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Users className="h-4 w-4 text-madhwa-500 dark:text-madhwa-400" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <Button variant="outline" className="border-madhwa-300 text-madhwa-600 hover:bg-madhwa-50 dark:border-madhwa-500 dark:text-madhwa-300">
                        Share
                      </Button>
                      <Button asChild className="bg-madhwa-500 hover:bg-madhwa-600 text-white">
                        <Link to={`/events/${event.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button asChild variant="outline" className="border-madhwa-300 text-madhwa-600 hover:bg-madhwa-50 dark:border-madhwa-500 dark:text-madhwa-300">
                  <Link to="/events">
                    View All Events
                  </Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="forum">
              <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
                <h2 className="font-serif text-2xl font-bold text-madhwa-700 dark:text-madhwa-300">
                  Discussion Forum
                </h2>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                      type="text" 
                      placeholder="Search discussions..." 
                      className="pl-10 w-60 border-madhwa-200 dark:border-madhwa-700" 
                    />
                  </div>
                  <Button asChild className="bg-madhwa-500 hover:bg-madhwa-600 text-white">
                    <Link to="/forum/create">
                      New Discussion
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {forumPosts.map(post => (
                  <Card key={post.id} className="border-madhwa-100 dark:border-madhwa-700 hover:border-madhwa-200 dark:hover:border-madhwa-600 transition-colors">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-madhwa-700 dark:text-madhwa-300 hover:text-madhwa-500 dark:hover:text-madhwa-200 transition-colors">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <div className="flex items-center">
                              <Avatar className="h-6 w-6 mr-2">
                                <AvatarFallback className="bg-madhwa-100 text-madhwa-600 dark:bg-madhwa-700 dark:text-madhwa-300 text-xs">
                                  {post.author.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <span>{post.author} • {post.date}</span>
                            </div>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-madhwa-600 hover:text-madhwa-700 dark:text-madhwa-400 dark:hover:text-madhwa-300">
                          <Share2 className="h-4 w-4 mr-1" />
                          <span>Share</span>
                        </Button>
                        <Button asChild variant="ghost" size="sm" className="text-madhwa-600 hover:text-madhwa-700 dark:text-madhwa-400 dark:hover:text-madhwa-300">
                          <Link to={`/forum/${post.id}`}>
                            Read More
                          </Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button asChild variant="outline" className="border-madhwa-300 text-madhwa-600 hover:bg-madhwa-50 dark:border-madhwa-500 dark:text-madhwa-300">
                  <Link to="/forum">
                    Browse All Discussions
                  </Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="groups">
              <div className="text-center p-12 border border-dashed border-madhwa-200 dark:border-madhwa-700 rounded-lg">
                <Users className="h-16 w-16 mx-auto text-madhwa-400 mb-4" />
                <h3 className="text-xl font-medium text-madhwa-700 dark:text-madhwa-300 mb-2">Local Groups Coming Soon</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-6">
                  We're building a platform to help you connect with Madhwa community members in your area for in-person gatherings, study groups, and more.
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

export default Community;
