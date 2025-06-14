
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
    { id: 'contact', label: 'Contact', size: 'text-xl font-semibold' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo minimaliste */}
          <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollToSection('accueil')}>
            <div className="relative">
              <img 
                src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
                alt="Holistik Consulting" 
                className="h-8 w-8 transition-transform duration-700 group-hover:rotate-180" 
              />
            </div>
            <span className="text-xl font-light text-gray-900 tracking-wide">
              <span className="font-medium text-holistik-primary">Holistik</span> Consulting
            </span>
          </div>
          
          {/* Navigation épurée avec progression des tailles */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Button 
                key={item.id}
                variant="ghost" 
                onClick={() => scrollToSection(item.id)}
                className={`${item.size} ${
                  activeSection === item.id 
                    ? 'text-holistik-primary' 
                    : 'text-gray-600 hover:text-holistik-primary'
                } hover:bg-transparent px-0 py-2 transition-all duration-300 font-light tracking-wide`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* CTA Button épuré */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-holistik-primary hover:bg-gray-900 text-white px-8 py-3 text-sm font-light tracking-wide transition-all duration-300 border-0"
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
                  className={`${item.size} ${
                    activeSection === item.id 
                      ? 'text-holistik-primary' 
                      : 'text-gray-600'
                  } hover:bg-transparent justify-start px-0 font-light tracking-wide`}
                >
                  {item.label}
                </Button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-holistik-primary hover:bg-gray-900 text-white mt-6 font-light tracking-wide"
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
