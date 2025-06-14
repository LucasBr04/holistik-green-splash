
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-gray-600 hover:text-holistik-primary"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {language === 'fr' ? 'EN' : 'FR'}
      </span>
    </Button>
  );
};

export default LanguageSelector;
