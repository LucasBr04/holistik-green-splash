
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
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

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.start': 'Démarrer',
    
    // Hero Section
    'hero.title.holistik': 'Holistik',
    'hero.title.consulting': 'Consulting',
    'hero.subtitle': 'Excellence stratégique pour entreprises visionnaires',
    'hero.discover': 'Découvrir',
    'hero.contact': 'Contact',
    
    // About Section
    'about.title': 'À propos de',
    'about.expert.title': 'Votre expert en',
    'about.expert.subtitle': 'transformation business',
    'about.experience': 'Fort de plus de',
    'about.experience.years': '15 années d\'expérience',
    'about.experience.text': 'dans le conseil stratégique, j\'accompagne les entreprises dans leur développement.',
    'about.approach': 'Mon approche',
    'about.approach.holistique': 'holistique',
    'about.approach.text': 'permet d\'analyser votre organisation pour vous proposer des solutions intégrées et durables.',
    'about.mission.title': 'Ma mission',
    'about.mission.text': 'Transformer vos défis business en avantages concurrentiels durables.',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'Des solutions sur mesure d\'une qualité exceptionnelle',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'Des approches créatives et avant-gardistes',
    'about.values.partnership': 'Partenariat',
    'about.values.partnership.desc': 'Une collaboration basée sur la confiance',
    'about.stats.experience': 'Années d\'expérience',
    'about.stats.clients': 'Clients accompagnés',
    'about.stats.satisfaction': 'Taux de satisfaction',
    
    // Services Section
    'services.title': 'Services',
    'services.subtitle': 'Des solutions expertes et personnalisées pour transformer vos défis en opportunités de succès',
    'services.strategy.title': 'Stratégie & Croissance',
    'services.strategy.desc': 'Définition de stratégies sur mesure pour accélérer votre croissance et optimiser vos performances.',
    'services.strategy.feature1': 'Analyse stratégique',
    'services.strategy.feature2': 'Plan de croissance',
    'services.strategy.feature3': 'Optimisation des processus',
    'services.digital.title': 'Transformation Digitale',
    'services.digital.desc': 'Accompagnement dans votre transition numérique pour rester compétitif dans l\'économie moderne.',
    'services.digital.feature1': 'Digitalisation',
    'services.digital.feature2': 'Automatisation',
    'services.digital.feature3': 'Outils numériques',
    'services.management.title': 'Management & Leadership',
    'services.management.desc': 'Développement des compétences managériales et renforcement du leadership dans vos équipes.',
    'services.management.feature1': 'Formation leadership',
    'services.management.feature2': 'Coaching équipes',
    'services.management.feature3': 'Gestion du changement',
    'services.performance.title': 'Performance & Analyse',
    'services.performance.desc': 'Mesure et amélioration de vos performances grâce à des analyses approfondies et des KPI pertinents.',
    'services.performance.feature1': 'Analytics avancés',
    'services.performance.feature2': 'Tableaux de bord',
    'services.performance.feature3': 'Reporting personnalisé',
    'services.innovation.title': 'Innovation & R&D',
    'services.innovation.desc': 'Stimulation de l\'innovation et accompagnement dans vos projets de recherche et développement.',
    'services.innovation.feature1': 'Brainstorming',
    'services.innovation.feature2': 'Prototypage',
    'services.innovation.feature3': 'Veille technologique',
    'services.optimization.title': 'Optimisation Opérationnelle',
    'services.optimization.desc': 'Amélioration de vos opérations pour une efficacité maximale et une réduction des coûts.',
    'services.optimization.feature1': 'Lean management',
    'services.optimization.feature2': 'Process mining',
    'services.optimization.feature3': 'Automatisation',
    'services.learn.more': 'En savoir plus',
    'services.cta.title': 'Prêt à transformer votre business ?',
    'services.cta.subtitle': 'Discutons de vos objectifs et découvrons ensemble comment nous pouvons vous accompagner vers le succès.',
    'services.cta.button': 'Planifier un entretien',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Démarrons ensemble votre projet de transformation. Contactez-nous pour un premier échange.',
    'contact.talk.title': 'Parlons de votre projet',
    'contact.talk.desc': 'Que vous souhaitiez optimiser vos processus, développer une nouvelle stratégie, ou transformer votre organisation, nous sommes là pour vous accompagner.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Téléphone',
    'contact.info.address': 'Adresse',
    'contact.info.hours': 'Horaires',
    'contact.info.hours.value': 'Lun-Ven 9h-18h',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Nom complet',
    'contact.form.name.placeholder': 'Votre nom',
    'contact.form.email.placeholder': 'votre@email.com',
    'contact.form.company': 'Entreprise',
    'contact.form.company.placeholder': 'Nom de votre entreprise',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Décrivez votre projet ou vos besoins...',
    'contact.form.send': 'Envoyer',
    'contact.toast.title': 'Message envoyé !',
    'contact.toast.desc': 'Nous vous recontacterons dans les plus brefs délais.',
    
    // Footer
    'footer.description': 'Votre partenaire stratégique pour transformer vos défis en opportunités de croissance durable.',
    'footer.business': 'Business Consulting & Services',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 Holistik Consulting. Tous droits réservés.',
    'footer.tagline': 'Transformons ensemble votre vision en réalité'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.start': 'Get Started',
    
    // Hero Section
    'hero.title.holistik': 'Holistik',
    'hero.title.consulting': 'Consulting',
    'hero.subtitle': 'Strategic excellence for visionary companies',
    'hero.discover': 'Discover',
    'hero.contact': 'Contact',
    
    // About Section
    'about.title': 'About',
    'about.expert.title': 'Your expert in',
    'about.expert.subtitle': 'business transformation',
    'about.experience': 'With over',
    'about.experience.years': '15 years of experience',
    'about.experience.text': 'in strategic consulting, I support companies in their development.',
    'about.approach': 'My',
    'about.approach.holistique': 'holistic',
    'about.approach.text': 'approach allows me to analyze your organization to offer you integrated and sustainable solutions.',
    'about.mission.title': 'My mission',
    'about.mission.text': 'Transform your business challenges into sustainable competitive advantages.',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'Tailor-made solutions of exceptional quality',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'Creative and avant-garde approaches',
    'about.values.partnership': 'Partnership',
    'about.values.partnership.desc': 'A collaboration based on trust',
    'about.stats.experience': 'Years of experience',
    'about.stats.clients': 'Clients supported',
    'about.stats.satisfaction': 'Satisfaction rate',
    
    // Services Section
    'services.title': 'Services',
    'services.subtitle': 'Expert and personalized solutions to transform your challenges into success opportunities',
    'services.strategy.title': 'Strategy & Growth',
    'services.strategy.desc': 'Definition of tailor-made strategies to accelerate your growth and optimize your performance.',
    'services.strategy.feature1': 'Strategic analysis',
    'services.strategy.feature2': 'Growth plan',
    'services.strategy.feature3': 'Process optimization',
    'services.digital.title': 'Digital Transformation',
    'services.digital.desc': 'Support in your digital transition to remain competitive in the modern economy.',
    'services.digital.feature1': 'Digitalization',
    'services.digital.feature2': 'Automation',
    'services.digital.feature3': 'Digital tools',
    'services.management.title': 'Management & Leadership',
    'services.management.desc': 'Development of managerial skills and strengthening leadership in your teams.',
    'services.management.feature1': 'Leadership training',
    'services.management.feature2': 'Team coaching',
    'services.management.feature3': 'Change management',
    'services.performance.title': 'Performance & Analysis',
    'services.performance.desc': 'Measure and improve your performance through in-depth analysis and relevant KPIs.',
    'services.performance.feature1': 'Advanced analytics',
    'services.performance.feature2': 'Dashboards',
    'services.performance.feature3': 'Custom reporting',
    'services.innovation.title': 'Innovation & R&D',
    'services.innovation.desc': 'Innovation stimulation and support in your research and development projects.',
    'services.innovation.feature1': 'Brainstorming',
    'services.innovation.feature2': 'Prototyping',
    'services.innovation.feature3': 'Technology watch',
    'services.optimization.title': 'Operational Optimization',
    'services.optimization.desc': 'Improvement of your operations for maximum efficiency and cost reduction.',
    'services.optimization.feature1': 'Lean management',
    'services.optimization.feature2': 'Process mining',
    'services.optimization.feature3': 'Automation',
    'services.learn.more': 'Learn more',
    'services.cta.title': 'Ready to transform your business?',
    'services.cta.subtitle': 'Let\'s discuss your goals and discover together how we can support you towards success.',
    'services.cta.button': 'Schedule a meeting',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s start your transformation project together. Contact us for an initial discussion.',
    'contact.talk.title': 'Let\'s talk about your project',
    'contact.talk.desc': 'Whether you want to optimize your processes, develop a new strategy, or transform your organization, we are here to support you.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',
    'contact.info.hours': 'Hours',
    'contact.info.hours.value': 'Mon-Fri 9am-6pm',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Full name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.company': 'Company',
    'contact.form.company.placeholder': 'Your company name',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Describe your project or needs...',
    'contact.form.send': 'Send',
    'contact.toast.title': 'Message sent!',
    'contact.toast.desc': 'We will get back to you as soon as possible.',
    
    // Footer
    'footer.description': 'Your strategic partner to transform your challenges into sustainable growth opportunities.',
    'footer.business': 'Business Consulting & Services',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 Holistik Consulting. All rights reserved.',
    'footer.tagline': 'Let\'s transform your vision into reality together'
  }
};
