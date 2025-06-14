
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogGrid from '@/components/blog/BlogGrid';
import { useLanguage } from '@/contexts/LanguageContext';

const Blog = () => {
  const { t } = useLanguage();
  const [postsToShow, setPostsToShow] = useState(3);

  // Mock data pour les posts - vous pourrez les remplacer par de vraies données
  const blogPosts = [
    {
      id: 1,
      title: "Stratégie Go-to-Market : Les clés du succès",
      content: "Une stratégie go-to-market efficace est cruciale pour le lancement réussi de tout produit. Elle définit comment vous allez atteindre vos clients cibles et leur livrer de la valeur. Dans cet article, nous explorons les éléments essentiels d'une stratégie GTM réussie et comment l'adapter à votre marché.",
      image: "/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png",
      date: "2024-06-10",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Définir son USP : La différenciation qui compte",
      content: "Votre Unique Selling Proposition (USP) est ce qui vous distingue de la concurrence. C'est la promesse unique que vous faites à vos clients et qui les incite à choisir votre solution plutôt qu'une autre. Découvrez comment identifier et formuler votre USP de manière convaincante.",
      image: "/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png",
      date: "2024-06-08",
      readTime: "4 min"
    },
    {
      id: 3,
      title: "Retail Experience : L'avenir du commerce",
      content: "L'expérience retail évolue rapidement avec l'intégration du digital et du physique. Les consommateurs attendent désormais une expérience fluide et personnalisée à chaque point de contact. Explorons les tendances qui façonnent l'avenir du retail.",
      image: "/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png",
      date: "2024-06-05",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Transformation Business : Guide pratique",
      content: "La transformation business est un processus complexe qui nécessite une approche structurée. De l'analyse initiale à la mise en œuvre, chaque étape doit être soigneusement planifiée pour assurer le succès de votre transformation organisationnelle.",
      image: "/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png",
      date: "2024-06-03",
      readTime: "7 min"
    },
    {
      id: 5,
      title: "Startups : Les erreurs à éviter",
      content: "Créer une startup est un défi passionnant mais semé d'embûches. Basé sur plus de 15 ans d'expérience en accompagnement de startups, voici les erreurs les plus fréquentes à éviter pour maximiser vos chances de succès.",
      image: "/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png",
      date: "2024-06-01",
      readTime: "5 min"
    }
  ];

  const handleLoadMore = () => {
    setPostsToShow(prev => Math.min(prev + 3, blogPosts.length));
  };

  const scrollToContact = () => {
    // Pour naviguer vers la page d'accueil et scroller vers contact
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <BlogHeader />
      <BlogGrid 
        posts={blogPosts.slice(0, postsToShow)}
        onLoadMore={handleLoadMore}
        hasMore={postsToShow < blogPosts.length}
      />
      <Footer />
    </div>
  );
};

export default Blog;
