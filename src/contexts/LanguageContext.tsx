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
      industry: 'expertise sectorielle',
      services: 'conseil et services',
      about: 'à propos',
      blog: 'blog',
      talk: 'parlons-nous'
    },
    hero: {
      title: {
        holistik: 'holistik',
        consulting: 'consulting'
      },
      subtitle: 'conseil en stratégie, management d\'entreprise, développement de marque, et accompagnement opérationnel',
      description: 'Dans un environnement en constante mutation et hyper-compétitif, notre force réside dans l\'agilité, la créativité et l\'engagement. Grâce à une approche holistique, sur-mesure et collaborative, nous apportons des solutions à haute valeur ajoutée et à fort impact permettant à nos partenaires de se démarquer.',
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
    aboutPage: {
      hero: {
        title: 'je vis pleinement l\'aventure, tant sur le plan professionnel que personnel',
        subtitle: 'plus de 25 ans d\'expérience en management international, de la stratégie de marque à l\'exécution opérationnelle'
      },
      experience: {
        title: 'un parcours international d\'exception',
        paragraph1: 'mon expérience couvre toute la chaîne de valeur, du développement de concept et du financement à l\'entrée sur le marché, la stratégie de croissance et l\'excellence opérationnelle.',
        paragraph2: 'dirigeant international, j\'ai mené des unités commerciales et des équipes fonctionnelles mondiales, avec plus de 25 ans d\'expérience en management général, ventes et marketing en Europe, aux États-Unis et en Chine.',
        identity: 'je me définis comme un CRÉATEUR DE MARQUES, DÉVELOPPEUR D\'AFFAIRES et CRÉATEUR D\'EXPÉRIENCES',
        passion: 'j\'ai une passion pour les clients et pour développer des propositions de valeur uniques. je gère des entreprises et des canaux avec un chiffre d\'affaires annuel allant de 40M€ à 2 milliards €.',
        paragraph3: 'mon parcours professionnel englobe des rôles de direction dans divers secteurs allant de la grande consommation au luxe, des biens de consommation lifestyle au secteur tech, ainsi que le conseil en marques.'
      },
      philosophy: {
        title: 'la philosophie du trail running appliquée au business',
        transcendence: {
          title: 'dépassement de soi',
          desc: 'le trail running illustre l\'idée d\'aller toujours plus loin, de repousser les limites tout en respectant ce que la nature a de meilleur à nous offrir.'
        },
        wellbeing: {
          title: 'bien-être global',
          desc: 'au-delà de la course, la préparation et l\'entraînement influencent la santé physique et mentale. vous devenez l\'auteur de votre propre santé.'
        },
        skills: {
          title: 'compétences transférables',
          desc: 'se connaître, comprendre les risques, être attentif aux signaux, être agile, résilient et déterminé sont des leçons du trail running applicables au monde professionnel.'
        }
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
        feature3: 'clarification de l\'identité'
      },
      positioning: {
        title: 'identité de marque',
        desc: 'construction d\'une identité forte et cohérente pour votre marque sur le marché.',
        feature1: 'étude de marché et perception',
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
        feature1: 'parcours client et retail media',
        feature2: 'expérience omnicanale',
        feature3: 'concept retail'
      },
      revenue: {
        title: 'modèles de revenus',
        desc: 'construction de flux de revenus durables et rentables.',
        feature1: 'suivi et évaluation des performances',
        feature2: 'optimisation des canaux de vente',
        feature3: 'stratégie de prix'
      },
      support: {
        title: 'accompagnement opérationnel',
        desc: 'management et conduite de projet dans l\'exécution de vos plans stratégiques.',
        feature1: 'mise en œuvre',
        feature2: 'gestion de projet',
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
    },
    blog: {
      subtitle: 'insights et expertise en transformation business et stratégies go-to-market',
      loadMore: 'charger plus d\'articles',
      readMore: 'lire la suite',
      loading: 'chargement des posts LinkedIn...',
      error: 'erreur lors du chargement des posts',
      retry: 'réessayer',
      noPosts: 'aucun post LinkedIn trouvé. synchronisez vos posts pour les afficher ici.',
      refresh: 'actualiser'
    },
    industry: {
      subtitle: 'des solutions expertes adaptées à votre secteur d\'activité, de la stratégie à l\'exécution opérationnelle',
      0: {
        title: 'FMCG et produits de consommation',
        description: 'accompagnement des marques FMCG dans leur stratégie de croissance, optimisation des circuits de distribution, développement de nouveaux produits et expansion internationale.'
      },
      1: {
        title: 'maisons de luxe et écosystème horloger',
        description: 'expertise dans l\'univers du luxe et de l\'horlogerie, de la stratégie de marque à l\'expérience client exclusive, en passant par le retail de prestige.'
      },
      2: {
        title: 'produits technologiques',
        description: 'conseil stratégique pour les entreprises tech, go-to-market de produits innovants, transformation digitale et développement d\'écosystèmes technologiques.'
      },
      3: {
        title: 'banque privée et gestion d\'actifs',
        description: 'accompagnement des institutions financières dans leur stratégie client, développement de services premium et optimisation de l\'expérience client fortuné.'
      },
      4: {
        title: 'entrepreneurs et start-ups',
        description: 'mentoring et conseil stratégique pour entrepreneurs, structuration de business models, levées de fonds et accélération de croissance.'
      },
      5: {
        title: 'retail et channel management',
        description: 'plans d\'amélioration de la performance, stratégie de transformation, approche omnichannel, développement de nouveaux concepts et création d\'expérience client.'
      },
      cta: 'en savoir plus',
      ctaSection: {
        title: 'prêt à transformer votre secteur ?',
        subtitle: 'découvrons ensemble comment notre expertise peut vous accompagner vers le succès',
        button: 'parlons de votre projet'
      }
    }
  },
  en: {
    nav: {
      industry: 'industry expertise',
      services: 'consulting & services', 
      about: 'about',
      blog: 'blog',
      talk: 'let\'s talk'
    },
    hero: {
      title: {
        holistik: 'holistik',
        consulting: 'consulting'
      },
      subtitle: 'strategic consulting, business management, brand development, and operational support',
      description: 'In a constantly evolving environment, our agility, creativity and commitment are based on a holistic approach and a symbiotic relationship enabling us to provide concrete solutions with high added value, while integrating the resources at our disposal.',
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
    aboutPage: {
      hero: {
        title: 'I live adventures to the fullest on both professional and personal sides',
        subtitle: 'over 25 years of international management experience, from brand strategy to operational execution'
      },
      experience: {
        title: 'exceptional international journey',
        paragraph1: 'my experience spans the entire value chain, from concept development and financing to market entry, growth strategy, and operational excellence.',
        paragraph2: 'I am an international business executive leading business units and global functional teams, with more than 25 years of general management, sales and marketing experience in Europe, the US and China.',
        identity: 'I define myself as a BRAND BUILDER, BUSINESS DEVELOPER and CREATOR OF EXPERIENCES',
        passion: 'I have a passion for customers and for developing Unique Selling Proposition and Value Creation. I manage businesses and channels with annual sales ranging from 40M€ to 2 billion €.',
        paragraph3: 'my professional background encompasses leadership roles in a variety of fields ranging from FMCG, CPG to the luxury industry, and lifestyle consumer goods to the tech sector, as well as brand consulting.'
      },
      philosophy: {
        title: 'trail running philosophy applied to business',
        transcendence: {
          title: 'self-transcendence',
          desc: 'trail running exemplifies the idea of always going further, pushing beyond limits while respecting the best that nature has to offer us.'
        },
        wellbeing: {
          title: 'holistic well-being',
          desc: 'beyond the race itself, preparation and training influence both physical and mental health, and have a lasting impact on well-being. You become the author of your own health.'
        },
        skills: {
          title: 'transferable skills',
          desc: 'knowing yourself, understanding risks, being attentive to environmental signals, being agile, resilient, determined, and committed are lessons from trail running applicable to the professional world.'
        }
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
        feature3: 'identity clarification'
      },
      positioning: {
        title: 'brand identity',
        desc: 'build a strong and coherent identity for your brand in the market.',
        feature1: 'market research and perception',
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
        feature1: 'customer journey and retail media',
        feature2: 'omnichannel experience',
        feature3: 'retail concept'
      },
      revenue: {
        title: 'revenue models',
        desc: 'build sustainable and profitable revenue streams.',
        feature1: 'performance tracking and evaluation',
        feature2: 'sales channel optimization',
        feature3: 'pricing strategy'
      },
      support: {
        title: 'hands-on support',
        desc: 'project management and execution of your strategic projects.',
        feature1: 'implementation',
        feature2: 'project tracking',
        feature3: 'team training'
      },
      
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
    },
    blog: {
      subtitle: 'insights and expertise in business transformation and go-to-market strategies',
      loadMore: 'load more articles',
      readMore: 'read more',
      loading: 'loading LinkedIn posts...',
      error: 'error loading posts',
      retry: 'retry',
      noPosts: 'no LinkedIn posts found. synchronize your posts to display them here.',
      refresh: 'refresh'
    },
    industry: {
      subtitle: 'expert solutions tailored to your industry, from strategy to operational execution',
      0: {
        title: 'FMCG and consumer products',
        description: 'support FMCG brands in their growth strategy, distribution channel optimization, new product development and international expansion.'
      },
      1: {
        title: 'luxury maisons and watchmaking ecosystem',
        description: 'expertise in luxury and watchmaking universe, from brand strategy to exclusive customer experience, including prestige retail.'
      },
      2: {
        title: 'tech products',
        description: 'strategic consulting for tech companies, go-to-market for innovative products, digital transformation and technology ecosystem development.'
      },
      3: {
        title: 'private banking & asset management',
        description: 'support financial institutions in their client strategy, premium service development and high-net-worth client experience optimization.'
      },
      4: {
        title: 'entrepreneurs and start-ups',
        description: 'mentoring and strategic consulting for entrepreneurs, business model structuring, fundraising and growth acceleration.'
      },
      5: {
        title: 'retail and channel management',
        description: 'performance improvement plans, transformation strategy, omnichannel approach, new concept development and customer experience creation.'
      },
      cta: 'learn more',
      ctaSection: {
        title: 'ready to transform your industry?',
        subtitle: 'let\'s discover together how our expertise can support you towards success',
        button: 'let\'s talk about your project'
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
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
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
