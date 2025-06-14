
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.industry': 'Expertise Sectorielle',
    'nav.services': 'Services Business',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.start': 'Commencer',

    // Hero Section
    'hero.title.holistik': 'Holistik',
    'hero.title.consulting': 'Consulting',
    'hero.subtitle': 'Conseil stratégique et accompagnement opérationnel pour entreprises établies et startups',
    'hero.discover': 'Découvrir nos services',
    'hero.contact': 'Nous contacter',

    // About Section
    'about.title.prefix': 'À propos de',
    'about.expertise.title': 'Votre expert en',
    'about.expertise.highlight': 'transformation business',
    'about.description.first': 'Fort de plus de 15 années d\'expérience dans le conseil stratégique, j\'accompagne les entreprises établies et les startups dans leur développement.',
    'about.description.second': 'Mon approche holistique permet d\'analyser votre organisation pour vous proposer des solutions intégrées et durables.',
    'about.mission.title': 'Ma mission',
    'about.mission.desc': 'Transformer vos défis business en avantages concurrentiels durables.',
    'about.values.strategic.title': 'Conseil Stratégique',
    'about.values.strategic.desc': 'Définition de votre USP et positionnement de marque',
    'about.values.operational.title': 'Accompagnement Opérationnel',
    'about.values.operational.desc': 'Support concret dans l\'exécution de vos projets',
    'about.values.expertise.title': 'Expertise Sectorielle',
    'about.values.expertise.desc': 'Connaissance approfondie du retail et des startups',
    'about.stats.experience': 'Années d\'expérience',
    'about.stats.clients': 'Clients accompagnés',
    'about.stats.satisfaction': 'Taux de satisfaction',

    // Services Section
    'services.title.prefix': 'Nos',
    'services.title.highlight': 'Services',
    'services.subtitle': 'Des solutions expertes pour définir votre USP, votre positionnement et vos stratégies go-to-market',
    'services.usp.title': 'Définition de l\'USP',
    'services.usp.desc': 'Identification et formulation de votre proposition de valeur unique pour vous différencier.',
    'services.usp.feature1': 'Analyse concurrentielle',
    'services.usp.feature2': 'Proposition de valeur',
    'services.usp.feature3': 'Différenciation',
    'services.positioning.title': 'Positionnement de Marque',
    'services.positioning.desc': 'Construction d\'un positionnement fort et cohérent pour votre marque sur le marché.',
    'services.positioning.feature1': 'Étude de marché',
    'services.positioning.feature2': 'Stratégie de marque',
    'services.positioning.feature3': 'Messaging',
    'services.gtm.title': 'Stratégies Go-to-Market',
    'services.gtm.desc': 'Développement de stratégies de lancement et de commercialisation efficaces.',
    'services.gtm.feature1': 'Plan de lancement',
    'services.gtm.feature2': 'Canaux de distribution',
    'services.gtm.feature3': 'Stratégie commerciale',
    'services.retail.title': 'Expérience Retail',
    'services.retail.desc': 'Optimisation de l\'expérience client en point de vente et digital.',
    'services.retail.feature1': 'Parcours client',
    'services.retail.feature2': 'Expérience magasin',
    'services.retail.feature3': 'Retail digital',
    'services.revenue.title': 'Modèles de Revenus',
    'services.revenue.desc': 'Construction de flux de revenus durables et rentables.',
    'services.revenue.feature1': 'Monétisation',
    'services.revenue.feature2': 'Pricing strategy',
    'services.revenue.feature3': 'Revenue streams',
    'services.support.title': 'Accompagnement Opérationnel',
    'services.support.desc': 'Support concret dans l\'exécution de vos projets stratégiques.',
    'services.support.feature1': 'Mise en œuvre',
    'services.support.feature2': 'Suivi projet',
    'services.support.feature3': 'Formation équipes',
    'services.cta': 'En savoir plus',
    'services.final.title': 'Prêt à transformer votre business ?',
    'services.final.subtitle': 'Discutons de vos objectifs et découvrons ensemble comment nous pouvons vous accompagner vers le succès.',
    'services.final.cta': 'Planifier un entretien',

    // Contact Section
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêt à transformer votre business ? Discutons de vos projets et objectifs.',
    'contact.talk.title': 'Parlons de votre projet',
    'contact.talk.desc': 'Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous accompagner.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Téléphone',
    'contact.info.address': 'Adresse',
    'contact.info.hours': 'Horaires',
    'contact.info.hours.value': 'Lun-Ven : 9h-18h',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Nom',
    'contact.form.name.placeholder': 'Votre nom complet',
    'contact.form.email.placeholder': 'votre@email.com',
    'contact.form.company': 'Entreprise',
    'contact.form.company.placeholder': 'Nom de votre entreprise',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Décrivez votre projet ou vos besoins...',
    'contact.form.send': 'Envoyer le message',
    'contact.toast.title': 'Message envoyé !',
    'contact.toast.desc': 'Nous vous répondrons dans les plus brefs délais.',
  },
  en: {
    // Navigation
    'nav.industry': 'Industry Expertise',
    'nav.services': 'Business Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.start': 'Get Started',

    // Hero Section
    'hero.title.holistik': 'Holistik',
    'hero.title.consulting': 'Consulting',
    'hero.subtitle': 'Strategic and management consulting with hands-on business support for established companies and startups',
    'hero.discover': 'Discover our services',
    'hero.contact': 'Contact us',

    // About Section
    'about.title.prefix': 'About',
    'about.expertise.title': 'Your expert in',
    'about.expertise.highlight': 'business transformation',
    'about.description.first': 'With over 15 years of experience in strategic consulting, I support established companies and startups in their development.',
    'about.description.second': 'My holistic approach analyzes your organization to provide integrated and sustainable solutions.',
    'about.mission.title': 'My mission',
    'about.mission.desc': 'Transform your business challenges into sustainable competitive advantages.',
    'about.values.strategic.title': 'Strategic Consulting',
    'about.values.strategic.desc': 'Define your USP and brand positioning',
    'about.values.operational.title': 'Hands-on Support',
    'about.values.operational.desc': 'Concrete support in executing your projects',
    'about.values.expertise.title': 'Industry Expertise',
    'about.values.expertise.desc': 'Deep knowledge of retail and startups',
    'about.stats.experience': 'Years of experience',
    'about.stats.clients': 'Clients supported',
    'about.stats.satisfaction': 'Satisfaction rate',

    // Services Section
    'services.title.prefix': 'Our',
    'services.title.highlight': 'Services',
    'services.subtitle': 'Expert solutions to define your USP, positioning, and go-to-market strategies',
    'services.usp.title': 'USP Definition',
    'services.usp.desc': 'Identify and formulate your unique value proposition to differentiate yourself.',
    'services.usp.feature1': 'Competitive analysis',
    'services.usp.feature2': 'Value proposition',
    'services.usp.feature3': 'Differentiation',
    'services.positioning.title': 'Brand Positioning',
    'services.positioning.desc': 'Build a strong and coherent positioning for your brand in the market.',
    'services.positioning.feature1': 'Market research',
    'services.positioning.feature2': 'Brand strategy',
    'services.positioning.feature3': 'Messaging',
    'services.gtm.title': 'Go-to-Market Strategies',
    'services.gtm.desc': 'Develop effective launch and commercialization strategies.',
    'services.gtm.feature1': 'Launch plan',
    'services.gtm.feature2': 'Distribution channels',
    'services.gtm.feature3': 'Sales strategy',
    'services.retail.title': 'Retail Experience',
    'services.retail.desc': 'Optimize customer experience in-store and digitally.',
    'services.retail.feature1': 'Customer journey',
    'services.retail.feature2': 'Store experience',
    'services.retail.feature3': 'Digital retail',
    'services.revenue.title': 'Revenue Models',
    'services.revenue.desc': 'Build sustainable and profitable revenue streams.',
    'services.revenue.feature1': 'Monetization',
    'services.revenue.feature2': 'Pricing strategy',
    'services.revenue.feature3': 'Revenue streams',
    'services.support.title': 'Hands-on Support',
    'services.support.desc': 'Concrete support in executing your strategic projects.',
    'services.support.feature1': 'Implementation',
    'services.support.feature2': 'Project tracking',
    'services.support.feature3': 'Team training',
    'services.cta': 'Learn more',
    'services.final.title': 'Ready to transform your business?',
    'services.final.subtitle': 'Let\'s discuss your objectives and discover together how we can support you towards success.',
    'services.final.cta': 'Schedule a consultation',

    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to transform your business? Let\'s discuss your projects and objectives.',
    'contact.talk.title': 'Let\'s talk about your project',
    'contact.talk.desc': 'Every project is unique. Contact us to discuss your specific needs and discover how we can support you.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',
    'contact.info.hours': 'Hours',
    'contact.info.hours.value': 'Mon-Fri: 9AM-6PM',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your full name',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.company': 'Company',
    'contact.form.company.placeholder': 'Your company name',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Describe your project or needs...',
    'contact.form.send': 'Send message',
    'contact.toast.title': 'Message sent!',
    'contact.toast.desc': 'We will get back to you as soon as possible.',
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
