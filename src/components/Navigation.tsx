
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dna } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" alt="Holistik Consulting" className="h-8 w-8" />
            <span className="text-xl font-bold text-holistik-green">Holistik Consulting</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('accueil')}
              className="text-holistik-green hover:text-holistik-green-dark hover:bg-holistik-green/10"
            >
              Accueil
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('apropos')}
              className="text-holistik-green hover:text-holistik-green-dark hover:bg-holistik-green/10"
            >
              À propos
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('services')}
              className="text-holistik-green hover:text-holistik-green-dark hover:bg-holistik-green/10"
            >
              Services
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="text-holistik-green hover:text-holistik-green-dark hover:bg-holistik-green/10"
            >
              Contact
            </Button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-holistik-green hover:bg-holistik-green-dark text-white"
          >
            <Dna className="mr-2 h-4 w-4" />
            Démarrer
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
