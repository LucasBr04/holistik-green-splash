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
        prefix: 'À propos de'
      },
      expertise: {
        title: 'Votre expert en',
        highlight: 'transformation business'
      },
      description: {
        first: 'Fort de plus de 15 années d\'expérience dans le conseil stratégique, j\'accompagne les entreprises établies et les startups dans leur développement.',
        second: 'Mon approche holistique permet d\'analyser votre organisation pour vous proposer des solutions intégrées et durables.'
      },
      mission: {
        title: 'Ma mission',
        desc: 'Transformer vos défis business en avantages concurrentiels durables.'
      },
      values: {
        strategic: {
          title: 'Conseil Stratégique',
          desc: 'Définition de votre USP et positionnement de marque'
        },
        operational: {
          title: 'Accompagnement Opérationnel',
          desc: 'Support concret dans l\'exécution de vos projets'
        },
        expertise: {
          title: 'Expertise Sectorielle',
          desc: 'Connaissance approfondie du retail et des startups'
        }
      },
      stats: {
        experience: 'Années d\'expérience',
        clients: 'Clients accompagnés',
        satisfaction: 'Taux de satisfaction'
      }
    },
    services: {
      title: {
        prefix: 'Nos',
        highlight: 'Services'
      },
      subtitle: 'Des solutions expertes pour définir votre USP, votre positionnement et vos stratégies go-to-market',
      usp: {
        title: 'Définition de l\'USP',
        desc: 'Identification et formulation de votre proposition de valeur unique pour vous différencier.',
        feature1: 'Analyse concurrentielle',
        feature2: 'Proposition de valeur',
        feature3: 'Différenciation'
      },
      positioning: {
        title: 'Positionnement de Marque',
        desc: 'Construction d\'un positionnement fort et cohérent pour votre marque sur le marché.',
        feature1: 'Étude de marché',
        feature2: 'Stratégie de marque',
        feature3: 'Messaging'
      },
      gtm: {
        title: 'Stratégies Go-to-Market',
        desc: 'Développement de stratégies de lancement et de commercialisation efficaces.',
        feature1: 'Plan de lancement',
        feature2: 'Canaux de distribution',
        feature3: 'Stratégie commerciale'
      },
      retail: {
        title: 'Expérience Retail',
        desc: 'Optimisation de l\'expérience client en point de vente et digital.',
        feature1: 'Parcours client',
        feature2: 'Expérience magasin',
        feature3: 'Retail digital'
      },
      revenue: {
        title: 'Modèles de Revenus',
        desc: 'Construction de flux de revenus durables et rentables.',
        feature1: 'Monétisation',
        feature2: 'Pricing strategy',
        feature3: 'Revenue streams'
      },
      support: {
        title: 'Accompagnement Opérationnel',
        desc: 'Support concret dans l\'exécution de vos projets stratégiques.',
        feature1: 'Mise en œuvre',
        feature2: 'Suivi projet',
        feature3: 'Formation équipes'
      },
      cta: 'En savoir plus',
      final: {
        title: 'Prêt à transformer votre business ?',
        subtitle: 'Discutons de vos objectifs et découvrons ensemble comment nous pouvons vous accompagner vers le succès.',
        cta: 'Planifier un entretien'
      }
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Prêt à transformer votre business ? Discutons de vos projets et objectifs.',
      talk: {
        title: 'Parlons de votre projet',
        desc: 'Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous accompagner.'
      },
      info: {
        email: 'Email',
        phone: 'Téléphone',
        address: 'Adresse',
        hours: 'Horaires',
        hours: {
          value: 'Lun-Ven : 9h-18h'
        }
      },
      form: {
        title: 'Envoyez-nous un message',
        name: 'Nom',
        name: {
          placeholder: 'Votre nom complet'
        },
        email: {
          placeholder: 'votre@email.com'
        },
        company: 'Entreprise',
        company: {
          placeholder: 'Nom de votre entreprise'
        },
        message: 'Message',
        message: {
          placeholder: 'Décrivez votre projet ou vos besoins...'
        },
        send: 'Envoyer le message'
      },
      toast: {
        title: 'Message envoyé !',
        desc: 'Nous vous répondrons dans les plus brefs délais.'
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
        prefix: 'About'
      },
      expertise: {
        title: 'Your expert in',
        highlight: 'business transformation'
      },
      description: {
        first: 'With over 15 years of experience in strategic consulting, I support established companies and startups in their development.',
        second: 'My holistic approach analyzes your organization to provide integrated and sustainable solutions.'
      },
      mission: {
        title: 'My mission',
        desc: 'Transform your business challenges into sustainable competitive advantages.'
      },
      values: {
        strategic: {
          title: 'Strategic Consulting',
          desc: 'Define your USP and brand positioning'
        },
        operational: {
          title: 'Hands-on Support',
          desc: 'Concrete support in executing your projects'
        },
        expertise: {
          title: 'Industry Expertise',
          desc: 'Deep knowledge of retail and startups'
        }
      },
      stats: {
        experience: 'Years of experience',
        clients: 'Clients supported',
        satisfaction: 'Satisfaction rate'
      }
    },
    services: {
      title: {
        prefix: 'Our',
        highlight: 'Services'
      },
      subtitle: 'Expert solutions to define your USP, positioning, and go-to-market strategies',
      usp: {
        title: 'USP Definition',
        desc: 'Identify and formulate your unique value proposition to differentiate yourself.',
        feature1: 'Competitive analysis',
        feature2: 'Value proposition',
        feature3: 'Differentiation'
      },
      positioning: {
        title: 'Brand Positioning',
        desc: 'Build a strong and coherent positioning for your brand in the market.',
        feature1: 'Market research',
        feature2: 'Brand strategy',
        feature3: 'Messaging'
      },
      gtm: {
        title: 'Go-to-Market Strategies',
        desc: 'Develop effective launch and commercialization strategies.',
        feature1: 'Launch plan',
        feature2: 'Distribution channels',
        feature3: 'Sales strategy'
      },
      retail: {
        title: 'Retail Experience',
        desc: 'Optimize customer experience in-store and digitally.',
        feature1: 'Customer journey',
        feature2: 'Store experience',
        feature3: 'Digital retail'
      },
      revenue: {
        title: 'Revenue Models',
        desc: 'Build sustainable and profitable revenue streams.',
        feature1: 'Monetization',
        feature2: 'Pricing strategy',
        feature3: 'Revenue streams'
      },
      support: {
        title: 'Hands-on Support',
        desc: 'Concrete support in executing your strategic projects.',
        feature1: 'Implementation',
        feature2: 'Project tracking',
        feature3: 'Team training'
      },
      cta: 'Learn more',
      final: {
        title: 'Ready to transform your business?',
        subtitle: 'Let\'s discuss your objectives and discover together how we can support you towards success.',
        cta: 'Schedule a consultation'
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Ready to transform your business? Let\'s discuss your projects and objectives.',
      talk: {
        title: 'Let\'s talk about your project',
        desc: 'Every project is unique. Contact us to discuss your specific needs and discover how we can support you.'
      },
      info: {
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        hours: 'Hours',
        hours: {
          value: 'Mon-Fri: 9AM-6PM'
        }
      },
      form: {
        title: 'Send us a message',
        name: 'Name',
        name: {
          placeholder: 'Your full name'
        },
        email: {
          placeholder: 'your@email.com'
        },
        company: 'Company',
        company: {
          placeholder: 'Your company name'
        },
        message: 'Message',
        message: {
          placeholder: 'Describe your project or needs...'
        },
        send: 'Send message'
      },
      toast: {
        title: 'Message sent!',
        desc: 'We will get back to you as soon as possible.'
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
