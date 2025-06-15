
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Détection de la section active seulement sur la page d'accueil
      if (location.pathname === '/') {
        const sections = ['accueil', 'industry', 'services'];
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
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    // Si on n'est pas sur la page d'accueil, y aller d'abord
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { id: '/industry', label: t('nav.industry'), type: 'route' },
    { id: 'services', label: t('nav.services'), type: 'section' },
    { id: '/about', label: t('nav.about'), type: 'route' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Logo avec fonctionnalité home */}
          <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer" onClick={() => handleNavigation('/')}>
            <div className="relative">
              <img 
                src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
                alt="holistik consulting" 
                className="h-6 w-6 sm:h-8 sm:w-8 animate-spin-with-pause" 
              />
            </div>
            <span
              className="text-lg sm:text-xl font-holistik tracking-holistik-tight"
              style={{
                color: '#3b7d23',
                fontWeight: 400,
                textTransform: 'lowercase',
                fontStyle: 'normal',
                lineHeight: 0.85
              }}
            >
              holistik consulting
            </span>
          </div>
          
          {/* Navigation avec les 3 sections traduites */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <Button 
                key={item.id}
                variant="ghost" 
                onClick={() => item.type === 'section' ? scrollToSection(item.id) : handleNavigation(item.id)}
                className={`text-sm lg:text-base font-montserrat lowercase ${
                  (item.type === 'section' && activeSection === item.id) || 
                  (item.type === 'route' && location.pathname === item.id)
                    ? 'text-holistik-primary' 
                    : 'text-gray-600 hover:text-holistik-primary'
                } hover:bg-transparent px-0 py-2 transition-all duration-300 font-medium tracking-wide`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <LanguageSelector />
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-holistik-primary hover:bg-gray-900 text-white px-6 lg:px-8 py-2 lg:py-3 text-sm font-montserrat font-medium tracking-wide transition-all duration-300 border-0 lowercase"
            >
              {t('nav.talk')}
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:bg-transparent h-8 w-8 sm:h-10 sm:w-10"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu avec les 3 sections traduites */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 sm:mt-8 bg-white/98 backdrop-blur-xl rounded-lg shadow-lg border border-gray-100 p-6 sm:p-8">
            <div className="flex flex-col space-y-4 sm:space-y-6">
              {menuItems.map((item) => (
                <Button 
                  key={item.id}
                  variant="ghost" 
                  onClick={() => item.type === 'section' ? scrollToSection(item.id) : handleNavigation(item.id)}
                  className={`text-base sm:text-lg font-montserrat lowercase ${
                    (item.type === 'section' && activeSection === item.id) || 
                    (item.type === 'route' && location.pathname === item.id)
                      ? 'text-holistik-primary' 
                      : 'text-gray-600'
                  } hover:bg-transparent justify-start px-0 font-medium tracking-wide`}
                >
                  {item.label}
                </Button>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <LanguageSelector />
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-holistik-primary hover:bg-gray-900 text-white font-montserrat font-medium tracking-wide lowercase px-6 py-2"
                >
                  {t('nav.talk')}
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
