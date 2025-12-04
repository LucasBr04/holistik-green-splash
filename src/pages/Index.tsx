
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import IndustrySection from '@/components/IndustrySection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection onContactClick={scrollToContact} />
      <IndustrySection onContactClick={scrollToContact} />
      <ServicesSection onContactClick={scrollToContact} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
