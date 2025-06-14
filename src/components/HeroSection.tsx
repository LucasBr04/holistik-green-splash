
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
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Background image across the homepage */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/holistik_consulting_cover.png')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Titre principal avec style exact de la charte */}
          <div className="mb-8 sm:mb-12">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 font-holistik"
              style={{
                color: '#3b7d23',
                fontWeight: 400,
                textTransform: 'lowercase',
                fontStyle: 'normal',
                lineHeight: 0.85,
                letterSpacing: '-0.02em'
              }}
            >
              holistik consulting
            </h1>
          </div>
          
          {/* Sous-titre repositionné */}
          <div className="mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl md:text-2xl text-white font-light tracking-wide leading-relaxed max-w-3xl mx-auto font-montserrat px-4 drop-shadow-lg">
              {t('hero.subtitle')}
            </p>
            <div className="w-16 sm:w-24 h-px bg-white mx-auto mt-6 sm:mt-8"></div>
          </div>
          
          {/* Boutons épurés */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('services')}
              className="bg-holistik-primary hover:bg-gray-900 text-white px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-light tracking-wide transition-all duration-500 border-0 font-montserrat lowercase w-full sm:w-auto"
            >
              {t('hero.discover')}
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={onContactClick}
              className="border border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-light tracking-wide transition-all duration-500 font-montserrat lowercase w-full sm:w-auto"
            >
              {t('hero.contact')}
            </Button>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll minimal */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-white/70 to-transparent"></div>
          <div className="w-2 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
