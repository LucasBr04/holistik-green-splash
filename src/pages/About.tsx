
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
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
                {t('aboutPage.hero.title')}
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
                className="w-full h-auto rounded-sm shadow-lg"
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
              {t('aboutPage.experience.title')}
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-600 font-light leading-relaxed space-y-6">
              <p>
                {t('aboutPage.experience.paragraph1')}
              </p>
              
              <p>
                {t('aboutPage.experience.paragraph2')}
              </p>
              
              <div className="bg-holistik-primary/5 p-8 rounded-sm border-l-4 border-holistik-primary my-8">
                <p className="text-holistik-primary font-medium text-lg mb-4">
                  {t('aboutPage.experience.identity')}
                </p>
                <p className="text-gray-700">
                  {t('aboutPage.experience.passion')}
                </p>
              </div>
              
              <p>
                {t('aboutPage.experience.paragraph3')}
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
              {t('aboutPage.philosophy.title')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <h3 className="text-lg font-medium text-holistik-primary mb-4">
                  {t('aboutPage.philosophy.transcendence.title')}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {t('aboutPage.philosophy.transcendence.desc')}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <h3 className="text-lg font-medium text-holistik-primary mb-4">
                  {t('aboutPage.philosophy.wellbeing.title')}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {t('aboutPage.philosophy.wellbeing.desc')}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <h3 className="text-lg font-medium text-holistik-primary mb-4">
                  {t('aboutPage.philosophy.skills.title')}
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
