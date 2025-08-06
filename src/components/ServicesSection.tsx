
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
      {/* Background elements consistent with IndustrySection */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-holistik-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-holistik-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - exact same style as IndustrySection */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
              alt="holistik consulting logo" 
              className="h-12 w-12 sm:h-16 sm:w-16" 
            />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 font-century-gothic"
              style={{
                color: '#3b7d23',
                fontWeight: 400,
                textTransform: 'lowercase',
                fontStyle: 'normal',
                lineHeight: 0.40,
                letterSpacing: '-0.01em'
              }}>
            conseil et services
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light tracking-wide leading-relaxed max-w-4xl mx-auto font-montserrat">
            une approche holistique pour maximiser votre potentiel de croissance
          </p>
          
          <div className="w-16 sm:w-24 h-px bg-holistik-primary mx-auto mt-8"></div>
        </div>

        {/* Services Grid - harmonized with IndustrySection style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group h-full">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 lg:p-8 h-full border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-holistik-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-holistik-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-holistik-primary" />
                    </div>
                    
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 font-montserrat">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed font-montserrat text-sm lg:text-base">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-holistik-primary mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-sm font-montserrat">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Action button - same style as IndustrySection */}
                    <Button 
                      onClick={onContactClick}
                      className="bg-holistik-primary hover:bg-gray-900 text-white px-6 py-2 text-sm font-light tracking-wide transition-all duration-500 border-0 font-montserrat lowercase"
                    >
                      {t('services.cta')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            onClick={onContactClick}
            className="bg-holistik-primary hover:bg-gray-900 text-white px-8 py-3 text-base font-light tracking-wide transition-all duration-500 border-0 font-montserrat lowercase"
          >
            parlons de votre projet
            <ArrowRight className="ml-3 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
