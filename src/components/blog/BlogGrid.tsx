
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import BlogCard from './BlogCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
}

interface BlogGridProps {
  posts: BlogPost[];
  onLoadMore: () => void;
  hasMore: boolean;
}

const BlogGrid = ({ posts, onLoadMore, hasMore }: BlogGridProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grille des posts - 3 par ligne */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Bouton pour charger plus de posts */}
        {hasMore && (
          <div className="text-center">
            <Button
              onClick={onLoadMore}
              variant="outline"
              className="group hover:bg-holistik-primary hover:text-white transition-all duration-300 px-8 py-3"
            >
              <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
              {t('blog.loadMore')}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
