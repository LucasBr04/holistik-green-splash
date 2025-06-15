
import React, { useState, useEffect } from 'react';
import LoadingAnimation from '@/components/LoadingAnimation';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import IndustrySection from '@/components/IndustrySection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [loading, setLoading] = useState(() => {
    // Only show loading animation on first visit
    return !sessionStorage.getItem('hasVisited');
  });

  const handleLoadingComplete = () => {
    setLoading(false);
    sessionStorage.setItem('hasVisited', 'true');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Prevent scrolling during loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  if (loading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

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
