
import { Button } from '@/components/ui/button';
import { Dna, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

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
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Dynamic background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-holistik-green/5 to-holistik-green/10">
        <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-holistik-green/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-holistik-green/15 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-holistik-green/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-holistik-green/10 rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            {/* Logo with enhanced animations */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-holistik-green to-holistik-green-dark rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
                  <Dna className="h-10 w-10 text-white animate-bounce-gentle" />
                </div>
                
                {/* Orbiting sparkles */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
                  <Sparkles className="h-4 w-4 text-holistik-green absolute -top-2 left-1/2 transform -translate-x-1/2" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <TrendingUp className="h-4 w-4 text-holistik-green-light absolute -bottom-2 left-1/2 transform -translate-x-1/2" />
                </div>
              </div>
            </div>
            
            {/* Main title with gradient text */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-in-left">
              <span className="bg-gradient-to-r from-holistik-green via-holistik-green-dark to-holistik-green bg-clip-text text-transparent">
                Holistik
              </span>
              <br />
              <span className="text-gray-800">Consulting</span>
            </h1>
            
            {/* Subtitle with typing effect simulation */}
            <div className="animate-slide-in-right">
              <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
                Votre partenaire stratégique en
              </p>
              <p className="text-xl md:text-2xl text-holistik-green font-semibold mb-8 bg-gradient-to-r from-holistik-green to-holistik-green-dark bg-clip-text text-transparent">
                Business Consulting & Services
              </p>
            </div>
            
            {/* Description with enhanced styling */}
            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white/80 backdrop-blur-sm border border-holistik-green/20 rounded-2xl p-8 mb-12 max-w-3xl mx-auto shadow-xl">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nous transformons vos défis en opportunités grâce à une approche 
                  <span className="text-holistik-green font-semibold"> holistique</span> et des 
                  <span className="text-holistik-green font-semibold"> solutions innovantes</span> 
                  adaptées à votre entreprise.
                </p>
              </div>
            </div>
            
            {/* CTA buttons with enhanced design */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-holistik-green to-holistik-green-dark hover:from-holistik-green-dark hover:to-holistik-green text-white px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-holistik-green/25 transform hover:scale-105 transition-all duration-300 group"
              >
                <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-180 transition-transform duration-300" />
                Découvrir nos services
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={onContactClick}
                className="border-2 border-holistik-green text-holistik-green hover:bg-holistik-green hover:text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-holistik-green/25 transform hover:scale-105 transition-all duration-300 group backdrop-blur-sm"
              >
                <Dna className="mr-3 h-6 w-6 group-hover:animate-spin" />
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-holistik-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-holistik-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
