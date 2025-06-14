
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-white">
      {/* Geometric background subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-holistik-primary/5"></div>
      
      {/* Ligne décorative subtile */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-holistik-primary/20 to-transparent"></div>

      <div className="container mx-auto px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo central qui tourne */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <img 
                src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
                alt="Holistik Consulting" 
                className="h-16 w-16 animate-spin opacity-90" 
                style={{ animationDuration: '8s' }}
              />
            </div>
          </div>
          
          {/* Titre principal épuré */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-extralight mb-8 leading-tight tracking-tight">
              <span className="text-holistik-primary font-light">{t('hero.title.holistik')}</span>
              <br />
              <span className="text-gray-900">{t('hero.title.consulting')}</span>
            </h1>
          </div>
          
          {/* Sous-titre minimaliste */}
          <div className="mb-16">
            <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide leading-relaxed max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="w-24 h-px bg-holistik-primary mx-auto mt-8"></div>
          </div>
          
          {/* Boutons épurés */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('services')}
              className="bg-holistik-primary hover:bg-gray-900 text-white px-10 py-4 text-base font-light tracking-wide transition-all duration-500 border-0"
            >
              {t('hero.discover')}
              <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={onContactClick}
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 text-base font-light tracking-wide transition-all duration-500"
            >
              {t('hero.contact')}
            </Button>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll minimal */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="w-px h-16 bg-gradient-to-b from-holistik-primary/50 to-transparent"></div>
          <div className="w-2 h-2 bg-holistik-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
