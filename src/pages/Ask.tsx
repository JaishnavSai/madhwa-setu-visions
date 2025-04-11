
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MessageSquare, ThumbsUp, MessageCircle, Filter, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Ask = () => {
  const [question, setQuestion] = useState("");

  // Mock data - in a real app this would come from an API
  const recentQuestions = [
    {
      id: 1,
      question: "How do I perform Sankalpa correctly?",
      askedBy: "Raghav K.",
      date: "2 days ago",
      answers: 3,
      category: "Ritual Procedure",
      previewAnswer: "Sankalpa is a sacred vow or determination made before performing any ritual. Start by taking water in your right palm and recite...",
      verified: true
    },
    {
      id: 2,
      question: "What is the significance of wearing Tulasi mala?",
      askedBy: "Meera S.",
      date: "1 week ago",
      answers: 5,
      category: "Symbolism",
      previewAnswer: "Tulasi (Holy Basil) is considered sacred in Madhwa tradition. Wearing a Tulasi mala has several spiritual benefits...",
      verified: true
    },
    {
      id: 3,
      question: "Can women perform Sandhyavandanam?",
      askedBy: "Lakshmi R.",
      date: "2 weeks ago",
      answers: 4,
      category: "Tradition",
      previewAnswer: "In traditional Madhwa practice, Sandhyavandanam is prescribed for males who have undergone Upanayanam. However...",
      verified: true
    },
    {
      id: 4,
      question: "What should I do if I miss my daily Sandhyavandanam?",
      askedBy: "Aravind P.",
      date: "3 weeks ago",
      answers: 2,
      category: "Daily Rituals",
      previewAnswer: "If you miss your regular Sandhyavandanam, you should perform it as soon as you remember, even if it's outside the prescribed time...",
      verified: false
    }
  ];

  const popularQuestions = [
    {
      id: 5,
      question: "What are the key differences between Madhwa and other Vedantic schools?",
      askedBy: "Krishna T.",
      date: "1 month ago",
      answers: 8,
      category: "Philosophy",
      previewAnswer: "Madhwa philosophy (Dvaita) differs from Advaita and Vishishtadvaita in several key aspects. The main difference is in the understanding of...",
      verified: true
    },
    {
      id: 6,
      question: "How should one observe Ekadashi vratam correctly?",
      askedBy: "Venkat M.",
      date: "2 months ago",
      answers: 6,
      category: "Vrata",
      previewAnswer: "Ekadashi vratam involves fasting from grains and beans. The day before (dashami), one should have a light sattvic dinner...",
      verified: true
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the question to the backend
    alert(`Your question has been submitted: ${question}`);
    setQuestion("");
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-madhwa-50 to-white dark:from-madhwa-800 dark:to-madhwa-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="font-serif text-4xl font-bold text-madhwa-700 dark:text-white mb-4">Ask a Question</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Submit your spiritual or ritual doubts and get responses from verified scholars and pandits.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <Card className="border-madhwa-200 dark:border-madhwa-700">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-madhwa-700 dark:text-madhwa-300">Submit Your Question</CardTitle>
                <CardDescription>
                  Your question will be reviewed and answered by verified Madhwa scholars.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <Select>
                      <SelectTrigger className="border-madhwa-200 dark:border-madhwa-700">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ritual">Ritual Procedure</SelectItem>
                        <SelectItem value="philosophy">Philosophy</SelectItem>
                        <SelectItem value="tradition">Tradition</SelectItem>
                        <SelectItem value="scripture">Scriptural Reference</SelectItem>
                        <SelectItem value="daily">Daily Practices</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mb-4">
                    <Textarea 
                      placeholder="Type your question here..." 
                      className="h-32 border-madhwa-200 dark:border-madhwa-700"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Input 
                      type="text" 
                      placeholder="Your name (optional)" 
                      className="border-madhwa-200 dark:border-madhwa-700" 
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-madhwa-500 hover:bg-madhwa-600 text-white">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Submit Question
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="font-serif text-2xl font-bold text-madhwa-700 dark:text-madhwa-300 mb-4 md:mb-0">
                Community Questions
              </h2>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input 
                    type="text" 
                    placeholder="Search questions..." 
                    className="pl-10 w-60 border-madhwa-200 dark:border-madhwa-700" 
                  />
                </div>
                <Button variant="outline" className="border-madhwa-200 dark:border-madhwa-700">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="recent">Recent Questions</TabsTrigger>
                <TabsTrigger value="popular">Popular Questions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="recent" className="space-y-6">
                {recentQuestions.map(q => (
                  <Card key={q.id} className="border-madhwa-100 dark:border-madhwa-700 hover:border-madhwa-200 dark:hover:border-madhwa-600 transition-colors">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-madhwa-700 dark:text-madhwa-300 hover:text-madhwa-500 dark:hover:text-madhwa-200 transition-colors">
                            {q.question}
                          </CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <span>Asked by {q.askedBy} • {q.date}</span>
                            {q.verified && (
                              <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                                Verified Answer
                              </Badge>
                            )}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-madhwa-50 text-madhwa-600 dark:bg-madhwa-800 dark:text-madhwa-300">
                          {q.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-gray-700 dark:text-gray-300">{q.previewAnswer}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{q.answers} Answers</span>
                      </div>
                      <Button variant="ghost" className="text-madhwa-600 hover:text-madhwa-700 dark:text-madhwa-400 dark:hover:text-madhwa-300">
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="popular" className="space-y-6">
                {popularQuestions.map(q => (
                  <Card key={q.id} className="border-madhwa-100 dark:border-madhwa-700 hover:border-madhwa-200 dark:hover:border-madhwa-600 transition-colors">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-madhwa-700 dark:text-madhwa-300 hover:text-madhwa-500 dark:hover:text-madhwa-200 transition-colors">
                            {q.question}
                          </CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <span>Asked by {q.askedBy} • {q.date}</span>
                            {q.verified && (
                              <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                                Verified Answer
                              </Badge>
                            )}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-madhwa-50 text-madhwa-600 dark:bg-madhwa-800 dark:text-madhwa-300">
                          {q.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-gray-700 dark:text-gray-300">{q.previewAnswer}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{q.answers} Answers</span>
                      </div>
                      <Button variant="ghost" className="text-madhwa-600 hover:text-madhwa-700 dark:text-madhwa-400 dark:hover:text-madhwa-300">
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ask;
