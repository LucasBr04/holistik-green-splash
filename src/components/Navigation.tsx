
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dna, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-holistik-green/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('accueil')}>
            <div className="relative">
              <img 
                src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
                alt="Holistik Consulting" 
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-holistik-green/20 rounded-full scale-0 group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-holistik-green to-holistik-green-dark bg-clip-text text-transparent">
              Holistik Consulting
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <Button 
                key={item.id}
                variant="ghost" 
                onClick={() => scrollToSection(item.id)}
                className="text-holistik-green hover:text-holistik-green-dark hover:bg-holistik-green/10 px-6 py-2 rounded-full transition-all duration-300 relative group"
              >
                {item.label}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-holistik-green group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300"></div>
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-holistik-green to-holistik-green-dark hover:from-holistik-green-dark hover:to-holistik-green text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              <Dna className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              Démarrer
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-holistik-green hover:bg-holistik-green/10"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-holistik-green/20 p-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Button 
                  key={item.id}
                  variant="ghost" 
                  onClick={() => scrollToSection(item.id)}
                  className="text-holistik-green hover:text-holistik-green-dark hover:bg-holistik-green/10 justify-start rounded-xl"
                >
                  {item.label}
                </Button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-holistik-green to-holistik-green-dark text-white rounded-xl mt-4"
              >
                <Dna className="mr-2 h-4 w-4" />
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
