
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import TodayRitual from "@/components/home/TodayRitual";
import Features from "@/components/home/Features";
import ValueProposition from "@/components/home/ValueProposition";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TodayRitual />
      <Features />
      <ValueProposition />
      <CTA />
    </Layout>
  );
};

export default Index;
