
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Target } from 'lucide-react';

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
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-gray-50 via-white to-holistik-primary/5">
      {/* Animation de fond avec particules */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-holistik-primary/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Formes géométriques animées */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-holistik-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-holistik-primary/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in">
            {/* Logo principal avec effet spectaculaire */}
            <div className="flex justify-center mb-16">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-holistik-primary/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative w-40 h-40 bg-white rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500 border-4 border-holistik-primary/20">
                  <img 
                    src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
                    alt="Holistik Consulting" 
                    className="h-24 w-24" 
                  />
                </div>
                
                {/* Éléments orbitaux créatifs */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <Sparkles className="h-6 w-6 text-holistik-primary absolute -top-8 left-1/2 transform -translate-x-1/2" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                  <TrendingUp className="h-6 w-6 text-holistik-primary absolute -bottom-8 left-1/2 transform -translate-x-1/2" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
                  <Target className="h-6 w-6 text-holistik-primary absolute top-1/2 -right-8 transform -translate-y-1/2" />
                </div>
              </div>
            </div>
            
            {/* Titre principal avec animation */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-holistik-primary to-holistik-secondary bg-clip-text text-transparent">
                  Holistik
                </span>
                <br />
                <span className="text-gray-900">Consulting</span>
              </h1>
            </div>
            
            {/* Sous-titre créatif */}
            <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="relative mb-12">
                <p className="text-3xl md:text-4xl text-gray-700 mb-4 font-light">
                  Transformez vos défis en
                </p>
                <p className="text-2xl md:text-3xl font-bold text-holistik-primary relative inline-block">
                  opportunités de croissance
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-holistik-primary to-transparent" />
                </p>
              </div>
            </div>
            
            {/* Proposition de valeur avec design moderne */}
            <div className="animate-scale-in" style={{ animationDelay: '0.7s' }}>
              <div className="bg-white/70 backdrop-blur-xl border border-holistik-primary/20 rounded-3xl p-10 mb-16 max-w-4xl mx-auto shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-holistik-primary to-holistik-secondary" />
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  Expertise stratégique • Solutions sur mesure • Accompagnement premium
                </p>
                <div className="flex justify-center space-x-8 mt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-holistik-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="h-6 w-6 text-holistik-primary" />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Croissance</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-holistik-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="h-6 w-6 text-holistik-primary" />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Stratégie</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-holistik-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Sparkles className="h-6 w-6 text-holistik-primary" />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Innovation</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Boutons d'action avec design premium */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-scale-in" style={{ animationDelay: '0.9s' }}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-holistik-primary to-holistik-secondary hover:from-holistik-secondary hover:to-holistik-primary text-white px-12 py-8 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 font-bold border-2 border-white/20"
              >
                Découvrir nos services
                <ArrowRight className="ml-4 h-7 w-7" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={onContactClick}
                className="border-3 border-holistik-primary text-holistik-primary hover:bg-holistik-primary hover:text-white px-12 py-8 text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 font-bold bg-white/80 backdrop-blur-sm"
              >
                <Sparkles className="mr-4 h-7 w-7" />
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll créatif */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-8 h-12 border-2 border-holistik-primary rounded-full flex justify-center relative overflow-hidden">
            <div className="w-2 h-4 bg-holistik-primary rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-holistik-primary text-sm mt-2 font-medium">Découvrir</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
