import React from "react";
import Navbar from "@/components/site/Navbar";
import HeroSection from "@/components/site/HeroSection";
import AboutSection from "@/components/site/AboutSection";
import MaterialSection from "@/components/site/MaterialSection";
import StudentsSection from "@/components/site/StudentsSection";
import HowItWorksSection from "@/components/site/HowItWorksSection";
import ImpactSection from "@/components/site/ImpactSection";
import TestimonialsSection from "@/components/site/TestimonialsSection";
import GallerySection from "@/components/site/GallerySection";
import CTASection from "@/components/site/CTASection";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MaterialSection />
      <HowItWorksSection />
      <ImpactSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </div>
  );
}