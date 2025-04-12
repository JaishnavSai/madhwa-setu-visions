
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import TodayRitual from "@/components/home/TodayRitual";
import Features from "@/components/home/Features";
import ValueProposition from "@/components/home/ValueProposition";
import CTA from "@/components/home/CTA";
import VideoCarousel from "@/components/home/VideoCarousel";

const Index = () => {
  return (
    <Layout>
      <div className="pt-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black dark:text-white mb-4">
            MadhwaSetu —
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-black dark:text-white mb-6">
            Bridging Tradition and Technology
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
            A digital platform for the Madhwa community
          </p>
        </div>
      </div>

      <VideoCarousel />
      <TodayRitual />
      <Features />
      <ValueProposition />
      <CTA />
    </Layout>
  );
};

export default Index;
