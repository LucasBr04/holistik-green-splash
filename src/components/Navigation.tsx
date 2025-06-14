
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Détection de la section active
      const sections = ['accueil', 'expertise', 'services', 'apropos', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
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

  const menuItems = [
    { id: 'expertise', label: t('nav.industry') },
    { id: 'services', label: t('nav.services') },
    { id: 'apropos', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo minimaliste avec fonctionnalité Home */}
          <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollToSection('accueil')}>
            <div className="relative">
              <img 
                src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
                alt="Holistik Consulting" 
                className="h-8 w-8 transition-transform duration-700 group-hover:rotate-180" 
              />
            </div>
            <span className="text-xl font-century-gothic text-gray-900 tracking-wide">
              <span className="font-bold text-holistik-primary">Holistik</span> Consulting
            </span>
          </div>
          
          {/* Navigation épurée avec tailles uniformes */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Button 
                key={item.id}
                variant="ghost" 
                onClick={() => scrollToSection(item.id)}
                className={`text-base font-montserrat ${
                  activeSection === item.id 
                    ? 'text-holistik-primary' 
                    : 'text-gray-600 hover:text-holistik-primary'
                } hover:bg-transparent px-0 py-2 transition-all duration-300 font-medium tracking-wide`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Language selector and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-holistik-primary hover:bg-gray-900 text-white px-8 py-3 text-sm font-montserrat font-medium tracking-wide transition-all duration-300 border-0"
            >
              {t('nav.start')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:bg-transparent"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu épuré */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-8 bg-white/98 backdrop-blur-xl rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <Button 
                  key={item.id}
                  variant="ghost" 
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-montserrat ${
                    activeSection === item.id 
                      ? 'text-holistik-primary' 
                      : 'text-gray-600'
                  } hover:bg-transparent justify-start px-0 font-medium tracking-wide`}
                >
                  {item.label}
                </Button>
              ))}
              <div className="flex items-center justify-between pt-4">
                <LanguageSelector />
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-holistik-primary hover:bg-gray-900 text-white font-montserrat font-medium tracking-wide"
                >
                  {t('nav.start')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
