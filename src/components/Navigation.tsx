
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Détecter la section active
      const sections = ['accueil', 'apropos', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const getMenuItemSize = (itemId: string) => {
    const sections = ['accueil', 'apropos', 'services', 'contact'];
    const currentIndex = sections.indexOf(activeSection);
    const itemIndex = sections.indexOf(itemId);
    
    if (itemId === activeSection) {
      return 'text-2xl font-black px-8 py-3';
    } else if (Math.abs(currentIndex - itemIndex) === 1) {
      return 'text-lg font-bold px-6 py-2';
    } else {
      return 'text-sm font-medium px-4 py-2';
    }
  };

  const getMenuItemColor = (itemId: string) => {
    if (itemId === activeSection) {
      return 'text-white bg-gradient-to-r from-holistik-primary to-purple-600';
    }
    return 'text-gray-700 hover:text-holistik-primary hover:bg-holistik-light/50';
  };

  const menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-card border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('accueil')}>
            <div className="relative">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:animate-spin transition-all duration-500">
                <img 
                  src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
                  alt="Holistik Consulting" 
                  className="h-8 w-8" 
                />
              </div>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              <span className="text-holistik-primary">Holistik</span> Consulting
            </span>
          </div>
          
          {/* Desktop Menu avec tailles progressives */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <Button 
                key={item.id}
                variant="ghost" 
                onClick={() => scrollToSection(item.id)}
                className={`${getMenuItemSize(item.id)} ${getMenuItemColor(item.id)} rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-lg`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white rounded-2xl px-8 py-3 shadow-premium hover:shadow-hover transform hover:scale-105 transition-all duration-300 font-bold text-lg"
            >
              Démarrer
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:bg-holistik-light/50"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-card border border-gray-100 p-6 animate-slide-up">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Button 
                  key={item.id}
                  variant="ghost" 
                  onClick={() => scrollToSection(item.id)}
                  className={`${getMenuItemColor(item.id)} justify-start rounded-lg font-medium transition-all duration-300`}
                >
                  {item.label}
                </Button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white rounded-lg mt-4 font-medium"
              >
                Démarrer
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
