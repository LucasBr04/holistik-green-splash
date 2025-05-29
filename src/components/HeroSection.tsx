
import { Button } from '@/components/ui/button';
import { Dna, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50 to-holistik-green/10 pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-holistik-green rounded-full flex items-center justify-center shadow-lg animate-bounce-gentle">
                <Dna className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-holistik-green mb-6 animate-slide-in-left">
              Holistik Consulting
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-in-right">
              Votre partenaire stratégique en <span className="text-holistik-green font-semibold">Business Consulting & Services</span>
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in">
              Nous transformons vos défis en opportunités grâce à une approche holistique et des solutions innovantes adaptées à votre entreprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="bg-holistik-green hover:bg-holistik-green-dark text-white px-8 py-4 text-lg"
              >
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={onContactClick}
                className="border-holistik-green text-holistik-green hover:bg-holistik-green hover:text-white px-8 py-4 text-lg"
              >
                <Dna className="mr-2 h-5 w-5" />
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
