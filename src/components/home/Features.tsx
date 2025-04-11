
import React from "react";
import { Calendar, Search, FileText, HelpCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Calendar className="h-10 w-10 text-madhwa-500 dark:text-madhwa-400 mb-4" />,
    title: "Festival Mode",
    description: "Activates during major events like Navaratri and Upakarma, displaying tailored rituals, checklists, and stories.",
    link: "/festival"
  },
  {
    icon: <FileText className="h-10 w-10 text-madhwa-500 dark:text-madhwa-400 mb-4" />,
    title: "Dharma Checklists",
    description: "Printable PDFs to guide families through complex rituals like Gruhapravesham, Shraddha, and Upanayana.",
    link: "/dharma"
  },
  {
    icon: <Search className="h-10 w-10 text-madhwa-500 dark:text-madhwa-400 mb-4" />,
    title: "Ritual Explorer",
    description: "Filter-based search by life stage, time of year, or category to find the guidance you need.",
    link: "/rituals"
  },
  {
    icon: <HelpCircle className="h-10 w-10 text-madhwa-500 dark:text-madhwa-400 mb-4" />,
    title: "Ask a Question",
    description: "Submit your doubts and get responses from verified scholars and pandits with scriptural clarity.",
    link: "/ask"
  },
  {
    icon: <Globe className="h-10 w-10 text-madhwa-500 dark:text-madhwa-400 mb-4" />,
    title: "Multilingual Support",
    description: "Initial support for English & Kannada, scalable to Telugu, Marathi, Tamil, and Hindi to serve all communities.",
    link: "/languages"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-madhwa-50 dark:bg-madhwa-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-madhwa-700 dark:text-madhwa-300 mb-4">How MadhwaSetu Serves You</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Rather than digitizing tradition blindly, MadhwaSetu reimagines it for the modern seeker.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link 
              to={feature.link} 
              key={index}
              className="bg-white dark:bg-madhwa-800/50 rounded-xl p-6 shadow-md border border-gray-100 dark:border-madhwa-700 hover:shadow-lg transition-all hover:border-madhwa-200 dark:hover:border-madhwa-600"
            >
              <div className="text-center">
                {feature.icon}
                <h3 className="font-serif text-xl font-semibold text-madhwa-700 dark:text-madhwa-300 mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
