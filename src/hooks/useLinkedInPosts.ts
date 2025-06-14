
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface LinkedInPost {
  id: string;
  linkedin_post_id: string;
  content: string;
  author_name: string | null;
  published_at: string;
  engagement_count: number | null;
  likes_count: number | null;
  comments_count: number | null;
  shares_count: number | null;
  post_url: string | null;
  images: any;
  created_at: string;
  updated_at: string;
  synced_to_blog: boolean | null;
}

export const useLinkedInPosts = () => {
  return useQuery({
    queryKey: ['linkedin-posts'],
    queryFn: async (): Promise<LinkedInPost[]> => {
      const { data, error } = await supabase
        .from('linkedin_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Erreur lors de la récupération des posts LinkedIn:', error);
        throw error;
      }

      return data || [];
    },
  });
};
