
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    nav: {
      industry: 'industry expertise',
      services: 'business services',
      about: 'about',
      contact: 'contact',
      start: 'commencer'
    },
    hero: {
      title: {
        holistik: 'holistik',
        consulting: 'consulting'
      },
      subtitle: 'conseil stratégique et accompagnement opérationnel pour définir votre USP, positionnement de marque, stratégies go-to-market et expérience retail',
      discover: 'découvrir nos services',
      contact: 'nous contacter'
    },
    about: {
      title: {
        prefix: 'à propos de'
      },
      expertise: {
        title: 'votre expert en',
        highlight: 'transformation business'
      },
      description: {
        first: 'fort de plus de 15 années d\'expérience dans le conseil stratégique, j\'accompagne les entreprises établies et les startups dans leur développement.',
        second: 'mon approche holistique permet d\'analyser votre organisation pour vous proposer des solutions intégrées et durables.'
      },
      mission: {
        title: 'ma mission',
        desc: 'transformer vos défis business en avantages concurrentiels durables.'
      },
      values: {
        strategic: {
          title: 'conseil stratégique',
          desc: 'définition de votre USP et positionnement de marque'
        },
        operational: {
          title: 'accompagnement opérationnel',
          desc: 'support concret dans l\'exécution de vos projets'
        },
        expertise: {
          title: 'expertise sectorielle',
          desc: 'connaissance approfondie du retail et des startups'
        }
      },
      stats: {
        experience: 'années d\'expérience',
        clients: 'clients accompagnés',
        satisfaction: 'taux de satisfaction'
      }
    },
    services: {
      title: {
        prefix: 'nos',
        highlight: 'services'
      },
      subtitle: 'des solutions expertes pour définir votre USP, votre positionnement et vos stratégies go-to-market',
      usp: {
        title: 'définition de l\'USP',
        desc: 'identification et formulation de votre proposition de valeur unique pour vous différencier.',
        feature1: 'analyse concurrentielle',
        feature2: 'proposition de valeur',
        feature3: 'différenciation'
      },
      positioning: {
        title: 'positionnement de marque',
        desc: 'construction d\'un positionnement fort et cohérent pour votre marque sur le marché.',
        feature1: 'étude de marché',
        feature2: 'stratégie de marque',
        feature3: 'messaging'
      },
      gtm: {
        title: 'stratégies go-to-market',
        desc: 'développement de stratégies de lancement et de commercialisation efficaces.',
        feature1: 'plan de lancement',
        feature2: 'canaux de distribution',
        feature3: 'stratégie commerciale'
      },
      retail: {
        title: 'expérience retail',
        desc: 'optimisation de l\'expérience client en point de vente et digital.',
        feature1: 'parcours client',
        feature2: 'expérience magasin',
        feature3: 'retail digital'
      },
      revenue: {
        title: 'modèles de revenus',
        desc: 'construction de flux de revenus durables et rentables.',
        feature1: 'monétisation',
        feature2: 'pricing strategy',
        feature3: 'revenue streams'
      },
      support: {
        title: 'accompagnement opérationnel',
        desc: 'support concret dans l\'exécution de vos projets stratégiques.',
        feature1: 'mise en œuvre',
        feature2: 'suivi projet',
        feature3: 'formation équipes'
      },
      cta: 'en savoir plus',
      final: {
        title: 'prêt à transformer votre business ?',
        subtitle: 'discutons de vos objectifs et découvrons ensemble comment nous pouvons vous accompagner vers le succès.',
        cta: 'planifier un entretien'
      }
    },
    contact: {
      title: 'contactez-nous',
      subtitle: 'prêt à transformer votre business ? discutons de vos projets et objectifs.',
      talk: {
        title: 'parlons de votre projet',
        desc: 'chaque projet est unique. contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous accompagner.'
      },
      info: {
        email: 'email',
        phone: 'téléphone',
        address: 'adresse',
        hours: 'horaires',
        hoursValue: 'lun-ven : 9h-18h'
      },
      form: {
        title: 'envoyez-nous un message',
        name: 'nom',
        namePlaceholder: 'votre nom complet',
        emailPlaceholder: 'votre@email.com',
        company: 'entreprise',
        companyPlaceholder: 'nom de votre entreprise',
        message: 'message',
        messagePlaceholder: 'décrivez votre projet ou vos besoins...',
        send: 'envoyer le message'
      },
      toast: {
        title: 'message envoyé !',
        desc: 'nous vous répondrons dans les plus brefs délais.'
      }
    }
  },
  en: {
    nav: {
      industry: 'industry expertise',
      services: 'business services', 
      about: 'about',
      contact: 'contact',
      start: 'get started'
    },
    hero: {
      title: {
        holistik: 'holistik',
        consulting: 'consulting'
      },
      subtitle: 'strategic and management consulting with hands-on business support for USP, brand positioning, go-to-market strategies and retail experience',
      discover: 'discover our services',
      contact: 'contact us'
    },
    about: {
      title: {
        prefix: 'about'
      },
      expertise: {
        title: 'your expert in',
        highlight: 'business transformation'
      },
      description: {
        first: 'with over 15 years of experience in strategic consulting, I support established companies and startups in their development.',
        second: 'my holistic approach analyzes your organization to provide integrated and sustainable solutions.'
      },
      mission: {
        title: 'my mission',
        desc: 'transform your business challenges into sustainable competitive advantages.'
      },
      values: {
        strategic: {
          title: 'strategic consulting',
          desc: 'define your USP and brand positioning'
        },
        operational: {
          title: 'hands-on support',
          desc: 'concrete support in executing your projects'
        },
        expertise: {
          title: 'industry expertise',
          desc: 'deep knowledge of retail and startups'
        }
      },
      stats: {
        experience: 'years of experience',
        clients: 'clients supported',
        satisfaction: 'satisfaction rate'
      }
    },
    services: {
      title: {
        prefix: 'our',
        highlight: 'services'
      },
      subtitle: 'expert solutions to define your USP, positioning, and go-to-market strategies',
      usp: {
        title: 'USP definition',
        desc: 'identify and formulate your unique value proposition to differentiate yourself.',
        feature1: 'competitive analysis',
        feature2: 'value proposition',
        feature3: 'differentiation'
      },
      positioning: {
        title: 'brand positioning',
        desc: 'build a strong and coherent positioning for your brand in the market.',
        feature1: 'market research',
        feature2: 'brand strategy',
        feature3: 'messaging'
      },
      gtm: {
        title: 'go-to-market strategies',
        desc: 'develop effective launch and commercialization strategies.',
        feature1: 'launch plan',
        feature2: 'distribution channels',
        feature3: 'sales strategy'
      },
      retail: {
        title: 'retail experience',
        desc: 'optimize customer experience in-store and digitally.',
        feature1: 'customer journey',
        feature2: 'store experience',
        feature3: 'digital retail'
      },
      revenue: {
        title: 'revenue models',
        desc: 'build sustainable and profitable revenue streams.',
        feature1: 'monetization',
        feature2: 'pricing strategy',
        feature3: 'revenue streams'
      },
      support: {
        title: 'hands-on support',
        desc: 'concrete support in executing your strategic projects.',
        feature1: 'implementation',
        feature2: 'project tracking',
        feature3: 'team training'
      },
      cta: 'learn more',
      final: {
        title: 'ready to transform your business?',
        subtitle: 'let\'s discuss your objectives and discover together how we can support you towards success.',
        cta: 'schedule a consultation'
      }
    },
    contact: {
      title: 'contact us',
      subtitle: 'ready to transform your business? let\'s discuss your projects and objectives.',
      talk: {
        title: 'let\'s talk about your project',
        desc: 'every project is unique. contact us to discuss your specific needs and discover how we can support you.'
      },
      info: {
        email: 'email',
        phone: 'phone',
        address: 'address',
        hours: 'hours',
        hoursValue: 'mon-fri: 9AM-6PM'
      },
      form: {
        title: 'send us a message',
        name: 'name',
        namePlaceholder: 'your full name',
        emailPlaceholder: 'your@email.com',
        company: 'company',
        companyPlaceholder: 'your company name',
        message: 'message',
        messagePlaceholder: 'describe your project or needs...',
        send: 'send message'
      },
      toast: {
        title: 'message sent!',
        desc: 'we will get back to you as soon as possible.'
      }
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
