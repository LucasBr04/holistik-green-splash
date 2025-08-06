
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogGrid from '@/components/blog/BlogGrid';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLinkedInPosts } from '@/hooks/useLinkedInPosts';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

const Blog = () => {
  const { t } = useLanguage();
  const [postsToShow, setPostsToShow] = useState(6);
  const { data: linkedInPosts, isLoading, error, refetch } = useLinkedInPosts();

  // Transformer les posts LinkedIn en format BlogPost
  const transformedPosts = linkedInPosts?.map((post, index) => ({
    id: index + 1,
    title: post.content.split('\n')[0].slice(0, 60) + (post.content.length > 60 ? '...' : ''),
    content: post.content,
    image: post.images?.[0] || "/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png",
    date: new Date(post.published_at).toISOString().split('T')[0],
    readTime: Math.ceil(post.content.length / 200) + ' min'
  })) || [];

  const handleLoadMore = () => {
    setPostsToShow(prev => Math.min(prev + 6, transformedPosts.length));
  };

  const handleRefresh = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <BlogHeader />
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 font-montserrat">{t('blog.loading')}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <BlogHeader />
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-red-600 font-montserrat mb-4">{t('blog.error')}</p>
            <Button onClick={handleRefresh} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              {t('blog.retry')}
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <BlogHeader />
      
      {transformedPosts.length === 0 ? (
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 font-montserrat mb-4">
              {t('blog.noPosts')}
            </p>
            <Button onClick={handleRefresh} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              {t('blog.refresh')}
            </Button>
          </div>
        </div>
      ) : (
        <BlogGrid 
          posts={transformedPosts.slice(0, postsToShow)}
          onLoadMore={handleLoadMore}
          hasMore={postsToShow < transformedPosts.length}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Blog;
