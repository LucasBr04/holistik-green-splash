
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Crown, Smartphone, Banknote, Briefcase } from 'lucide-react';

const Industry = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const industries = [
    {
      icon: Package,
      title: 'FMCG and Consumer Products',
      titleFr: 'FMCG et Produits de Consommation',
      descriptionFr: 'Accompagnement des marques FMCG dans leur stratégie de croissance, optimisation des circuits de distribution, développement de nouveaux produits et expansion internationale.',
      descriptionEn: 'Support FMCG brands in their growth strategy, distribution channel optimization, new product development and international expansion.'
    },
    {
      icon: Crown,
      title: 'Luxury Maisons and Watchmaking Ecosystem',
      titleFr: 'Maisons de Luxe et Écosystème Horloger',
      descriptionFr: 'Expertise dans l\'univers du luxe et de l\'horlogerie, de la stratégie de marque premium à l\'expérience client exclusive, en passant par le retail de prestige.',
      descriptionEn: 'Expertise in luxury and watchmaking universe, from premium brand strategy to exclusive customer experience, including prestige retail.'
    },
    {
      icon: Smartphone,
      title: 'Tech Products',
      titleFr: 'Produits Technologiques',
      descriptionFr: 'Conseil stratégique pour les entreprises tech, go-to-market de produits innovants, transformation digitale et développement d\'écosystèmes technologiques.',
      descriptionEn: 'Strategic consulting for tech companies, go-to-market for innovative products, digital transformation and technology ecosystem development.'
    },
    {
      icon: Banknote,
      title: 'Private Banking & Asset Management',
      titleFr: 'Banque Privée et Gestion d\'Actifs',
      descriptionFr: 'Accompagnement des institutions financières dans leur stratégie client, développement de services premium et optimisation de l\'expérience client fortuné.',
      descriptionEn: 'Support financial institutions in their client strategy, premium service development and high-net-worth client experience optimization.'
    },
    {
      icon: Briefcase,
      title: 'Entrepreneurs and Start-ups',
      titleFr: 'Entrepreneurs et Start-ups',
      descriptionFr: 'Mentoring et conseil stratégique pour entrepreneurs, structuration de business models, levées de fonds et accélération de croissance.',
      descriptionEn: 'Mentoring and strategic consulting for entrepreneurs, business model structuring, fundraising and growth acceleration.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img 
                src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
                alt="holistik consulting logo" 
                className="h-12 w-12 sm:h-16 sm:w-16 animate-spin-with-pause" 
              />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 font-holistik"
                style={{
                  color: '#3b7d23',
                  fontWeight: 400,
                  textTransform: 'lowercase',
                  fontStyle: 'normal',
                  lineHeight: 0.40,
                  letterSpacing: '-0.02em'
                }}>
              {t('nav.industry')}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light tracking-wide leading-relaxed max-w-3xl mx-auto font-montserrat">
              {t('industry.subtitle')}
            </p>
            
            <div className="w-16 sm:w-24 h-px bg-holistik-primary mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="industry" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-gray-100 bg-white">
                <CardContent className="p-8 lg:p-10">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-holistik-primary/10 rounded-lg flex items-center justify-center group-hover:bg-holistik-primary/20 transition-colors duration-300">
                        <industry.icon className="h-7 w-7 text-holistik-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                        {t(`industry.${index}.title`)}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed font-montserrat text-sm lg:text-base mb-6">
                        {t(`industry.${index}.description`)}
                      </p>
                      
                      <Button 
                        variant="ghost" 
                        className="text-holistik-primary hover:text-gray-900 hover:bg-transparent p-0 font-montserrat font-medium group/button"
                        onClick={scrollToContact}
                      >
                        {t('industry.cta')}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 font-holistik"
                style={{
                  color: '#3b7d23',
                  fontWeight: 400,
                  textTransform: 'lowercase',
                  fontStyle: 'normal',
                  lineHeight: 0.40
                }}>
              {t('industry.ctaSection.title')}
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 font-light tracking-wide leading-relaxed mb-8 font-montserrat">
              {t('industry.ctaSection.subtitle')}
            </p>
            
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-holistik-primary hover:bg-gray-900 text-white px-10 py-4 text-base font-light tracking-wide transition-all duration-500 border-0 font-montserrat lowercase"
            >
              {t('industry.ctaSection.button')}
              <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industry;
