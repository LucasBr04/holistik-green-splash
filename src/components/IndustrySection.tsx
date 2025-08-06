
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Crown, Smartphone, Banknote, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface IndustrySectionProps {
  onContactClick: () => void;
}

const IndustrySection = ({ onContactClick }: IndustrySectionProps) => {
  const { t } = useLanguage();

  const industries = [
    {
      icon: Package,
      title: 'FMCG et Produits de Consommation',
      description: 'Accompagnement des marques FMCG dans leur stratégie de croissance, optimisation des circuits de distribution, développement de nouveaux produits et expansion internationale.'
    },
    {
      icon: Crown,
      title: 'Maisons de Luxe et Écosystème Horloger',
      description: 'Expertise dans l\'univers du luxe et de l\'horlogerie, de la stratégie de marque premium à l\'expérience client exclusive, en passant par le retail de prestige.'
    },
    {
      icon: Smartphone,
      title: 'Produits Technologiques',
      description: 'Conseil stratégique pour les entreprises tech, go-to-market de produits innovants, transformation digitale et développement d\'écosystèmes technologiques.'
    },
    {
      icon: Banknote,
      title: 'Banque Privée et Gestion d\'Actifs',
      description: 'Accompagnement des institutions financières dans leur stratégie client, développement de services premium et optimisation de l\'expérience client fortuné.'
    },
    {
      icon: Briefcase,
      title: 'Entrepreneurs et Start-ups',
      description: 'Mentoring et conseil stratégique pour entrepreneurs, structuration de business models, levées de fonds et accélération de croissance.'
    }
  ];

  return (
    <section id="industry" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background elements for consistency */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-holistik-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-holistik-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
              alt="holistik consulting logo" 
              className="h-12 w-12 sm:h-16 sm:w-16 animate-spin-with-pause" 
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 font-century-gothic"
              style={{
                color: '#3b7d23',
                fontWeight: 400,
                textTransform: 'lowercase',
                fontStyle: 'normal',
                lineHeight: 0.60,
                letterSpacing: '-0.01em'
              }}>
            expertise sectorielle
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light tracking-wide leading-relaxed max-w-4xl mx-auto font-montserrat">
            des solutions expertes adaptées à votre secteur d'activité, de la stratégie à l'exécution opérationnelle
          </p>
          
          <div className="w-16 sm:w-24 h-px bg-holistik-primary mx-auto mt-8"></div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-gray-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 lg:p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-holistik-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-holistik-primary/20 transition-colors duration-300">
                    <industry.icon className="h-8 w-8 text-holistik-primary" />
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 font-montserrat">
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-montserrat text-sm lg:text-base">
                    {industry.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={onContactClick}
            className="bg-holistik-primary hover:bg-gray-900 text-white px-8 py-3 text-base font-light tracking-wide transition-all duration-500 border-0 font-montserrat lowercase"
          >
            découvrir comment nous pouvons vous accompagner
            <ArrowRight className="ml-3 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
