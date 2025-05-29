
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TrendingUp, Target, Lightbulb, Users, BarChart3, Zap, ArrowRight, CheckCircle } from 'lucide-react';

interface ServicesSectionProps {
  onContactClick: () => void;
}

const ServicesSection = ({ onContactClick }: ServicesSectionProps) => {
  const services = [
    {
      icon: TrendingUp,
      title: "Stratégie & Croissance",
      description: "Définition de stratégies sur mesure pour accélérer votre croissance et optimiser vos performances.",
      features: ["Analyse stratégique", "Plan de croissance", "Optimisation des processus"],
      color: "from-holistik-primary to-holistik-secondary"
    },
    {
      icon: Target,
      title: "Transformation Digitale",
      description: "Accompagnement dans votre transition numérique pour rester compétitif dans l'économie moderne.",
      features: ["Digitalisation", "Automatisation", "Outils numériques"],
      color: "from-holistik-secondary to-holistik-primary"
    },
    {
      icon: Users,
      title: "Management & Leadership",
      description: "Développement des compétences managériales et renforcement du leadership dans vos équipes.",
      features: ["Formation leadership", "Coaching équipes", "Gestion du changement"],
      color: "from-holistik-primary/80 to-holistik-secondary/80"
    },
    {
      icon: BarChart3,
      title: "Performance & Analyse",
      description: "Mesure et amélioration de vos performances grâce à des analyses approfondies et des KPI pertinents.",
      features: ["Analytics avancés", "Tableaux de bord", "Reporting personnalisé"],
      color: "from-holistik-secondary/80 to-holistik-primary"
    },
    {
      icon: Lightbulb,
      title: "Innovation & R&D",
      description: "Stimulation de l'innovation et accompagnement dans vos projets de recherche et développement.",
      features: ["Brainstorming", "Prototypage", "Veille technologique"],
      color: "from-holistik-primary to-holistik-accent"
    },
    {
      icon: Zap,
      title: "Optimisation Opérationnelle",
      description: "Amélioration de vos opérations pour une efficacité maximale et une réduction des coûts.",
      features: ["Lean management", "Process mining", "Automatisation"],
      color: "from-holistik-accent to-holistik-primary"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Fond animé */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-holistik-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-holistik-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-holistik-primary to-holistik-secondary rounded-2xl mb-8 shadow-xl">
            <Target className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Nos <span className="text-holistik-primary">Services</span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-holistik-primary to-holistik-secondary mx-auto mb-8" />
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions expertes et personnalisées pour transformer vos défis en opportunités de succès
          </p>
        </div>

        {/* Carousel des services */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group h-full">
                      <div className="relative bg-white rounded-3xl p-8 h-full border border-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
                        {/* Gradient de fond */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        
                        {/* Icône */}
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        
                        {/* Contenu */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-holistik-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-holistik-primary mr-3 flex-shrink-0" />
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Action */}
                        <Button 
                          onClick={onContactClick}
                          className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white font-semibold py-3 rounded-xl transform hover:scale-105 transition-all duration-300`}
                        >
                          En savoir plus
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 w-12 h-12 border-2 border-holistik-primary text-holistik-primary hover:bg-holistik-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 w-12 h-12 border-2 border-holistik-primary text-holistik-primary hover:bg-holistik-primary hover:text-white" />
          </Carousel>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-holistik-primary to-holistik-secondary rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-all duration-500">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à transformer votre business ?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Discutons de vos objectifs et découvrons ensemble comment nous pouvons vous accompagner vers le succès.
            </p>
            <Button 
              size="lg"
              onClick={onContactClick}
              className="bg-white text-holistik-primary hover:bg-gray-100 px-12 py-6 text-lg rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              Planifier un entretien gratuit
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
