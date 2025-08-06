
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const { t } = useLanguage();

  console.log('HeroSection rendering - checking for any vertical green elements');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex flex-col relative overflow-hidden pt-12 sm:pt-14 bg-white">
      {/* Mountain landscape banner image */}
      <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 relative overflow-hidden">
        <img 
          src="/lovable-uploads/b1be7c9f-f10a-42e1-87ae-d0d7b17bbc48.png"
          alt="Mountain Landscape"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main content area with reduced spacing */}
      <div className="flex-1 flex items-center justify-center pt-4 sm:pt-6 md:pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Logo centered above title */}
            <div className="mb-6 sm:mb-8 flex justify-center">
              <img 
                src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
                alt="holistik consulting logo" 
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 animate-spin-with-pause" 
              />
            </div>

            {/* Titre principal avec style identique au logo */}
            <div className="mb-8 sm:mb-12">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 font-century-gothic"
                style={{
                  color: '#3b7d23',
                  fontWeight: 400,
                  textTransform: 'lowercase',
                  fontStyle: 'normal',
                  lineHeight: 0.60,
                  letterSpacing: '-0.02em'
                }}
              >
                holistik consulting
              </h1>
            </div>
            
            {/* Sous-titre modifié */}
            <div className="mb-8 sm:mb-10">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light tracking-wide leading-relaxed max-w-3xl mx-auto font-montserrat px-4">
                conseil en stratégie, management d'entreprise, développement de marque, et accompagnement opérationnel
              </p>
            </div>

            {/* Nouveau texte descriptif */}
            <div className="mb-12 sm:mb-16">
              <p className="text-base sm:text-lg text-gray-500 font-light tracking-wide leading-relaxed max-w-4xl mx-auto font-montserrat px-4">
                Dans un environnement en constante évolution, notre agilité, notre créativité et notre engagement s'appuient sur une approche holistique et une relation symbiotique permettant d'apporter des solutions concrètes à forte valeur ajoutée, tout en intégrant les ressources à disposition.
              </p>
              {/* Trait horizontal vert - je vérifie qu'il n'y a pas d'éléments cachés */}
              <div className="w-16 sm:w-24 h-px bg-holistik-primary mx-auto mt-6 sm:mt-8" style={{position: 'relative'}}></div>
            </div>
            
            {/* Bouton unique - seul "découvrir nos services" */}
            <div className="flex justify-center px-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="bg-holistik-primary hover:bg-gray-900 text-white px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-light tracking-wide transition-all duration-500 border-0 font-montserrat lowercase"
              >
                {t('hero.discover')}
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
