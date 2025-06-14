
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogHeader = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-century-gothic mb-6">
            <span className="text-holistik-primary font-bold lowercase">blog</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-montserrat lowercase leading-relaxed">
            {t('blog.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
