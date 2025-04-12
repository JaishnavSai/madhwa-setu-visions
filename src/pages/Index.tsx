
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
      <VideoCarousel />
      <TodayRitual />
      <Features />
      <ValueProposition />
      <CTA />
    </Layout>
  );
};

export default Index;
