
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Target, Zap, Rocket } from 'lucide-react';

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
    <section id="accueil" className="min-h-screen relative overflow-hidden">
      {/* Header triangulaire vert/blanc */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden">
        <div className="relative w-full h-full">
          {/* Triangle vert */}
          <div 
            className="absolute top-0 left-0 w-1/2 h-full bg-holistik-primary"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 0 100%)'
            }}
          />
          {/* Triangle blanc */}
          <div 
            className="absolute top-0 right-0 w-1/2 h-full bg-white"
            style={{
              clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
            }}
          />
          
          {/* Logo rotatif au centre */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center animate-spin border-4 border-holistik-primary/20" style={{ animationDuration: '8s' }}>
              <img 
                src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
                alt="Holistik Consulting" 
                className="h-12 w-12" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bande défilante */}
      <div className="absolute top-32 left-0 w-full bg-gradient-to-r from-holistik-primary via-holistik-secondary to-holistik-primary py-3 overflow-hidden z-10">
        <div className="whitespace-nowrap animate-scroll">
          <span className="text-white font-bold text-xl mx-8">HOLISTIK CONSULTING</span>
          <span className="text-white/70 text-xl mx-8">•</span>
          <span className="text-white font-bold text-xl mx-8">BUSINESS EXCELLENCE</span>
          <span className="text-white/70 text-xl mx-8">•</span>
          <span className="text-white font-bold text-xl mx-8">STRATEGIC GROWTH</span>
          <span className="text-white/70 text-xl mx-8">•</span>
          <span className="text-white font-bold text-xl mx-8">HOLISTIK CONSULTING</span>
          <span className="text-white/70 text-xl mx-8">•</span>
          <span className="text-white font-bold text-xl mx-8">BUSINESS EXCELLENCE</span>
          <span className="text-white/70 text-xl mx-8">•</span>
          <span className="text-white font-bold text-xl mx-8">STRATEGIC GROWTH</span>
          <span className="text-white/70 text-xl mx-8">•</span>
        </div>
      </div>

      {/* Background avec effets colorés */}
      <div className="absolute inset-0 pt-44 bg-gradient-to-br from-gray-50 via-white to-holistik-primary/5">
        {/* Formes géométriques colorées */}
        <div className="absolute top-60 left-20 w-96 h-96 bg-gradient-to-br from-holistik-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Particules colorées */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full animate-float ${
              i % 4 === 0 ? 'bg-holistik-primary/30' :
              i % 4 === 1 ? 'bg-yellow-400/40' :
              i % 4 === 2 ? 'bg-purple-500/30' :
              'bg-blue-500/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-56">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in">
            {/* Titre principal avec effets colorés */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h1 className="text-8xl md:text-9xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-holistik-primary via-yellow-500 to-purple-600 bg-clip-text text-transparent animate-gradient-shift bg-300%">
                  Holistik
                </span>
                <br />
                <span className="text-gray-900 relative">
                  Consulting
                  <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-holistik-primary to-yellow-500 rounded-full" />
                </span>
              </h1>
            </div>
            
            {/* Sous-titre avec animations */}
            <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="relative mb-16">
                <p className="text-4xl md:text-5xl text-gray-700 mb-6 font-light">
                  Révolutionnez votre
                </p>
                <div className="relative inline-block">
                  <p className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-holistik-primary to-purple-600 bg-clip-text">
                    entreprise avec style
                  </p>
                  <Zap className="absolute -top-8 -right-8 h-8 w-8 text-yellow-500 animate-pulse" />
                  <Rocket className="absolute -bottom-8 -left-8 h-8 w-8 text-holistik-primary animate-bounce" />
                </div>
              </div>
            </div>
            
            {/* Cards avec effets visuels */}
            <div className="animate-scale-in" style={{ animationDelay: '0.7s' }}>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gradient-to-br from-holistik-primary to-green-600 p-8 rounded-3xl text-white transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-premium">
                  <TrendingUp className="h-12 w-12 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-2">Croissance</h3>
                  <p>Explosive</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-3xl text-white transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-premium">
                  <Target className="h-12 w-12 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-2">Stratégie</h3>
                  <p>Innovante</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-3xl text-white transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-premium">
                  <Sparkles className="h-12 w-12 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p>Absolue</p>
                </div>
              </div>
            </div>
            
            {/* Boutons d'action colorés */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-scale-in" style={{ animationDelay: '0.9s' }}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-holistik-primary via-green-500 to-yellow-500 hover:from-yellow-500 hover:via-green-500 hover:to-holistik-primary text-white px-16 py-10 text-2xl rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 font-black border-4 border-white/20 animate-pulse-glow"
              >
                Découvrir la magie
                <ArrowRight className="ml-4 h-8 w-8" />
              </Button>
              
              <Button 
                size="lg" 
                onClick={onContactClick}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white px-16 py-10 text-2xl rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 font-black border-4 border-white/20"
              >
                <Sparkles className="mr-4 h-8 w-8" />
                Contact premium
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll avec style */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-12 h-20 border-4 border-holistik-primary rounded-full flex justify-center relative overflow-hidden bg-white/50 backdrop-blur-sm">
            <div className="w-3 h-6 bg-gradient-to-b from-holistik-primary to-yellow-500 rounded-full mt-3 animate-pulse" />
          </div>
          <span className="text-holistik-primary text-lg mt-2 font-bold">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
