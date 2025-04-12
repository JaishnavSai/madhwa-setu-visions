
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-madhwa-50 dark:bg-madhwa-800 pt-12 pb-8 border-t border-madhwa-100 dark:border-madhwa-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-madhwa-400 flex items-center justify-center">
                <span className="text-white font-serif text-xl">M</span>
              </div>
              <span className="font-serif text-xl font-semibold text-madhwa-600 dark:text-madhwa-300">
                MadhwaSetu
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              A Digital Spiritual Companion for the Madhwa Community
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-madhwa-500 hover:text-madhwa-600 dark:text-madhwa-300 dark:hover:text-madhwa-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-madhwa-500 hover:text-madhwa-600 dark:text-madhwa-300 dark:hover:text-madhwa-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-madhwa-500 hover:text-madhwa-600 dark:text-madhwa-300 dark:hover:text-madhwa-200">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@madhwasetu.org" className="text-madhwa-500 hover:text-madhwa-600 dark:text-madhwa-300 dark:hover:text-madhwa-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-serif text-lg font-medium text-madhwa-600 dark:text-madhwa-300 mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/festival" className="text-sm text-gray-600 hover:text-madhwa-500 dark:text-gray-300 dark:hover:text-madhwa-300">
                  Festival Mode
                </Link>
              </li>
              <li>
                <Link to="/rituals" className="text-sm text-gray-600 hover:text-madhwa-500 dark:text-gray-300 dark:hover:text-madhwa-300">
                  Ritual Explorer
                </Link>
              </li>
              <li>
                <Link to="/dharma" className="text-sm text-gray-600 hover:text-madhwa-500 dark:text-gray-300 dark:hover:text-madhwa-300">
                  Dharma Guide
                </Link>
              </li>
              <li>
                <Link to="/ask" className="text-sm text-gray-600 hover:text-madhwa-500 dark:text-gray-300 dark:hover:text-madhwa-300">
                  Ask a Question
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-serif text-lg font-medium text-madhwa-600 dark:text-madhwa-300 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-madhwa-500 dark:text-gray-300 dark:hover:text-madhwa-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm text-gray-600 hover:text-madhwa-500 dark:text-gray-300 dark:hover:text-madhwa-300">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-gray-600 hover:text-madhwa-500 dark:text-gray-300 dark:hover:text-madhwa-300">
                  Events
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-madhwa-500 dark:text-gray-300 dark:hover:text-madhwa-300">
                  Articles
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-serif text-lg font-medium text-madhwa-600 dark:text-madhwa-300 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-madhwa-500 dark:text-gray-300 dark:hover:text-madhwa-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-sm text-gray-600 hover:text-madhwa-500 dark:text-gray-300 dark:hover:text-madhwa-300">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-madhwa-500 dark:text-gray-300 dark:hover:text-madhwa-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-madhwa-500 dark:text-gray-300 dark:hover:text-madhwa-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-madhwa-100 dark:border-madhwa-700 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> for the Madhwa Community &copy; {new Date().getFullYear()} MadhwaSetu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
