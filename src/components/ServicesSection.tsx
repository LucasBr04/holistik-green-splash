
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TrendingUp, Target, Lightbulb, Users, BarChart3, Zap, ArrowRight, CheckCircle, Store, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServicesSectionProps {
  onContactClick: () => void;
}

const ServicesSection = ({ onContactClick }: ServicesSectionProps) => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Target,
      title: t('services.usp.title'),
      description: t('services.usp.desc'),
      features: [t('services.usp.feature1'), t('services.usp.feature2'), t('services.usp.feature3')],
      color: "from-holistik-primary to-holistik-secondary"
    },
    {
      icon: TrendingUp,
      title: t('services.positioning.title'),
      description: t('services.positioning.desc'),
      features: [t('services.positioning.feature1'), t('services.positioning.feature2'), t('services.positioning.feature3')],
      color: "from-holistik-secondary to-holistik-primary"
    },
    {
      icon: Rocket,
      title: t('services.gtm.title'),
      description: t('services.gtm.desc'),
      features: [t('services.gtm.feature1'), t('services.gtm.feature2'), t('services.gtm.feature3')],
      color: "from-holistik-primary/80 to-holistik-secondary/80"
    },
    {
      icon: Store,
      title: t('services.retail.title'),
      description: t('services.retail.desc'),
      features: [t('services.retail.feature1'), t('services.retail.feature2'), t('services.retail.feature3')],
      color: "from-holistik-secondary/80 to-holistik-primary"
    },
    {
      icon: BarChart3,
      title: t('services.revenue.title'),
      description: t('services.revenue.desc'),
      features: [t('services.revenue.feature1'), t('services.revenue.feature2'), t('services.revenue.feature3')],
      color: "from-holistik-primary to-holistik-accent"
    },
    {
      icon: Users,
      title: t('services.support.title'),
      description: t('services.support.desc'),
      features: [t('services.support.feature1'), t('services.support.feature2'), t('services.support.feature3')],
      color: "from-holistik-accent to-holistik-primary"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background elements consistent with other sections */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-holistik-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-holistik-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - consistent with IndustrySection */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
              alt="holistik consulting logo" 
              className="h-12 w-12 sm:h-16 sm:w-16 animate-spin-with-pause" 
            />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 font-holistik"
              style={{
                color: '#3b7d23',
                fontWeight: 400,
                textTransform: 'lowercase',
                fontStyle: 'normal',
                lineHeight: 0.85,
                letterSpacing: '-0.01em'
              }}>
            conseil et services
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light tracking-wide leading-relaxed max-w-4xl mx-auto font-montserrat">
            une approche holistique pour maximiser votre potentiel de croissance
          </p>
          
          <div className="w-16 sm:w-24 h-px bg-holistik-primary mx-auto mt-8"></div>
        </div>

        {/* Services Carousel */}
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
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 h-full border border-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
                        {/* Background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        
                        {/* Icon */}
                        <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-holistik-primary transition-colors duration-300 font-montserrat">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed font-montserrat text-sm lg:text-base">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-holistik-primary mr-3 flex-shrink-0" />
                              <span className="text-gray-700 font-medium text-sm font-montserrat">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Action button */}
                        <Button 
                          onClick={onContactClick}
                          className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white font-medium py-3 rounded-xl transform hover:scale-105 transition-all duration-300 font-montserrat text-sm`}
                        >
                          {t('services.cta')}
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
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-holistik-primary to-holistik-secondary rounded-2xl p-8 lg:p-12 shadow-xl transform hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-holistik text-white mb-6"
                style={{
                  fontWeight: 400,
                  textTransform: 'lowercase',
                  fontStyle: 'normal',
                  lineHeight: 0.85
                }}>
              prêt à transformer votre entreprise ?
            </h3>
            <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto font-montserrat font-light">
              découvrons ensemble comment notre expertise peut vous accompagner vers le succès
            </p>
            <Button 
              size="lg"
              onClick={onContactClick}
              className="bg-white text-holistik-primary hover:bg-gray-100 px-8 lg:px-12 py-3 lg:py-4 text-base lg:text-lg rounded-xl font-medium shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 font-montserrat lowercase"
            >
              parlons de votre projet
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
