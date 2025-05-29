
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
      
      // Détection de la section active
      const sections = ['accueil', 'apropos', 'services', 'contact'];
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
    { id: 'accueil', label: 'Accueil', size: 'text-sm' },
    { id: 'apropos', label: 'À propos', size: 'text-base' },
    { id: 'services', label: 'Services', size: 'text-lg' },
    { id: 'contact', label: 'Contact', size: 'text-xl font-bold' }
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
              <img 
                src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
                alt="Holistik Consulting" 
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              <span className="text-holistik-primary">Holistik</span> Consulting
            </span>
          </div>
          
          {/* Desktop Menu avec tailles progressives */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Button 
                key={item.id}
                variant="ghost" 
                onClick={() => scrollToSection(item.id)}
                className={`${item.size} ${
                  activeSection === item.id 
                    ? 'text-holistik-primary bg-holistik-light/50' 
                    : 'text-gray-700 hover:text-holistik-primary'
                } hover:bg-holistik-light/50 px-6 py-2 rounded-lg transition-all duration-300`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-holistik-primary hover:bg-holistik-secondary text-white rounded-lg px-6 py-2 shadow-premium hover:shadow-hover transform hover:scale-105 transition-all duration-300 font-medium"
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
                  className={`${item.size} ${
                    activeSection === item.id 
                      ? 'text-holistik-primary bg-holistik-light/50' 
                      : 'text-gray-700 hover:text-holistik-primary'
                  } hover:bg-holistik-light/50 justify-start rounded-lg`}
                >
                  {item.label}
                </Button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-holistik-primary hover:bg-holistik-secondary text-white rounded-lg mt-4 font-medium"
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
