import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ClassesSection } from './components/sections/ClassesSection';
import { TrainersSection } from './components/sections/TrainersSection';
import { MembershipSection } from './components/sections/MembershipSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { GallerySection } from './components/sections/GallerySection';
import { ContactSection } from './components/sections/ContactSection';
export function App() {
  return <div className="bg-[#0A0A0A] text-white min-h-screen w-full">
      <Navbar />
      <main>
        <HeroSection />
        <ClassesSection />
        <TrainersSection />
        <MembershipSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}