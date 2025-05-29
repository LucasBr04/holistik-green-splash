
import { Button } from '@/components/ui/button';
import { Dna, ArrowRight, TrendingUp, Target } from 'lucide-react';

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
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Premium background */}
      <div className="absolute inset-0 bg-hero-pattern">
        <div className="absolute top-20 left-10 w-72 h-72 bg-holistik-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-holistik-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Geometric elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-holistik-primary/20 rounded-full animate-pulse-subtle"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-holistik-accent/20 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            {/* Logo section */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-holistik-primary to-holistik-secondary rounded-3xl flex items-center justify-center shadow-premium">
                  <Dna className="h-12 w-12 text-white" />
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <TrendingUp className="h-5 w-5 text-holistik-primary absolute -top-3 left-1/2 transform -translate-x-1/2" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                  <Target className="h-5 w-5 text-holistik-accent absolute -bottom-3 left-1/2 transform -translate-x-1/2" />
                </div>
              </div>
            </div>
            
            {/* Main heading */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-holistik-primary">Holistik</span>
                <br />
                <span className="text-gray-900">Consulting</span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
                Votre partenaire stratégique en
              </p>
              <p className="text-xl md:text-2xl text-holistik-secondary font-semibold mb-12">
                Business Consulting & Services
              </p>
            </div>
            
            {/* Value proposition */}
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 mb-12 max-w-4xl mx-auto shadow-card">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nous transformons vos défis business en 
                  <span className="text-holistik-primary font-semibold"> opportunités de croissance</span> grâce à une 
                  <span className="text-holistik-primary font-semibold"> expertise pointue</span> et des 
                  <span className="text-holistik-primary font-semibold"> solutions sur mesure</span>.
                </p>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="bg-holistik-primary hover:bg-holistik-secondary text-white px-10 py-6 text-lg rounded-xl shadow-premium hover:shadow-hover transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                Découvrir nos services
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={onContactClick}
                className="border-2 border-holistik-primary text-holistik-primary hover:bg-holistik-primary hover:text-white px-10 py-6 text-lg rounded-xl shadow-card hover:shadow-hover transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                <Dna className="mr-3 h-6 w-6" />
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-holistik-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-holistik-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
