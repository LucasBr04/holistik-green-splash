
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Image */}
      <section className="relative py-12 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
                vivre pleinement et passionnément l'aventure professionnelle
              </h1>
              <div className="w-16 h-px bg-holistik-primary mb-8"></div>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                {t('aboutPage.hero.subtitle')}
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/0ca04ceb-571e-444b-ad5e-1d37df373f49.png"
                alt="Trail running - dépassement de soi"
                className="w-full h-auto rounded-sm shadow-lg object-cover"
                style={{
                  clipPath: 'inset(25% 0 25% 0)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-12 text-center tracking-tight">
              adepte d'une approche holistique pour une performance durable
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-600 font-light leading-relaxed space-y-6">
              <p>
                mon expérience couvre l'ensemble de la chaîne de valeur, notamment la définition de stratégies commerciales, le développement de concepts et produits, la construction de marques, la gestion de comptes de résultats, la création d'expériences client, l'amélioration de la performance commerciale, la transformation d'organisation, l'accélération de la croissance.
              </p>
              
              <p>
                A la tête de business unit et de départements fonctionnels au sein d'organisations globales et complexes, ainsi qu'à l'international en Europe, aux Etats-Unis et en Chine, j'ai une vision globale et pragmatique dans la façon d'approcher les situations avec la recherche de solutions concrètes et durables.
              </p>
              
              <div className="bg-holistik-primary/5 p-8 rounded-sm border-l-4 border-holistik-primary my-8">
                <p className="text-holistik-primary font-medium text-lg mb-4">
                  je me définis comme un BÂTISSEUR DE MARQUES, DÉVELOPPEUR D'AFFAIRES et CRÉATEUR D'EXPÉRIENCES
                </p>
                <p className="text-gray-700">
                  je place le client au cœur de mes préoccupations avec un état d'esprit tourné vers la création de propositions de valeur uniques.
                </p>
              </div>
              
              <p>
                mon parcours professionnel englobe des rôles de direction dans divers secteurs allant de la grande consommation au luxe, et des produits lifestyle au secteur de la tech, ainsi que dans le secteur du conseil en management et stratégie marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trail Running Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-12 text-center tracking-tight">
              et si la philosophie du trail running s'appliquait au business
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <h3 className="text-lg font-medium text-holistik-primary mb-4">
                  repousser les limites
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {t('aboutPage.philosophy.transcendence.desc')}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <h3 className="text-lg font-medium text-holistik-primary mb-4">
                  anticipation et discipline
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {t('aboutPage.philosophy.wellbeing.desc')}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <h3 className="text-lg font-medium text-holistik-primary mb-4">
                  créativité et pragmatisme
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {t('aboutPage.philosophy.skills.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
