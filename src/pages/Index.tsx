
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import ProgramSection from '../components/ProgramSection';
import FaqSection from '../components/FaqSection';
import AboutSection from '../components/AboutSection';
import ProcessSection from '../components/ProcessSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* <Header /> */}
      <HeroSection />
      <BenefitsSection />
      <ProgramSection />
      <FaqSection />
      <AboutSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
