
import { Dna } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactHeader = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-16">
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 bg-holistik-primary rounded-full flex items-center justify-center">
          <Dna className="h-6 w-6 text-white" />
        </div>
      </div>
      <h2 className="text-4xl font-bold text-holistik-primary mb-6 font-montserrat lowercase">
        {t('contact.title')}
      </h2>
      <div className="w-24 h-1 bg-holistik-primary mx-auto mb-8"></div>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto font-montserrat lowercase">
        {t('contact.subtitle')}
      </p>
    </div>
  );
};

export default ContactHeader;
