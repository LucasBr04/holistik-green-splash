
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { t } = useLanguage();

  // Fonction pour limiter le texte aux 3 premières lignes
  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const handleReadMore = () => {
    // Pour l'instant, on peut juste logger ou rediriger vers LinkedIn
    console.log(`Reading post: ${post.title}`);
    // Dans le futur, vous pourriez avoir une page détail pour chaque post
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 overflow-hidden">
      {/* Image du post */}
      <div className="relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <h3 className="text-lg font-montserrat font-semibold text-gray-900 group-hover:text-holistik-primary transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Texte limité aux 3 premières lignes */}
        <p className="text-gray-600 font-montserrat text-sm leading-relaxed mb-4 line-clamp-3">
          {truncateText(post.content)}
        </p>
        
        <Button 
          variant="ghost" 
          onClick={handleReadMore}
          className="text-holistik-primary hover:text-white hover:bg-holistik-primary transition-all duration-300 p-0 h-auto font-montserrat font-medium lowercase"
        >
          {t('blog.readMore')}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
