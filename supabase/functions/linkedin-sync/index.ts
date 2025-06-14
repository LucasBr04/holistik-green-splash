
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    if (req.method === 'POST') {
      const { linkedinPosts } = await req.json();
      
      console.log('Synchronisation de', linkedinPosts.length, 'posts LinkedIn');

      // Insérer ou mettre à jour les posts LinkedIn
      for (const post of linkedinPosts) {
        const { data: existingPost } = await supabaseClient
          .from('linkedin_posts')
          .select('id')
          .eq('linkedin_post_id', post.id)
          .single();

        if (!existingPost) {
          const { error } = await supabaseClient
            .from('linkedin_posts')
            .insert({
              linkedin_post_id: post.id,
              content: post.content,
              author_name: post.author_name || 'holistik consulting',
              published_at: post.published_at || new Date().toISOString(),
              engagement_count: post.engagement_count || 0,
              likes_count: post.likes_count || 0,
              comments_count: post.comments_count || 0,
              shares_count: post.shares_count || 0,
              post_url: post.post_url,
              images: post.images || null
            });

          if (error) {
            console.error('Erreur insertion post LinkedIn:', error);
          } else {
            console.log('Post LinkedIn inséré:', post.id);
          }
        }
      }

      return new Response(
        JSON.stringify({ success: true, message: 'Posts LinkedIn synchronisés' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (req.method === 'GET') {
      // Récupérer les posts LinkedIn depuis la base de données
      const { data: posts, error } = await supabaseClient
        .from('linkedin_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Erreur récupération posts:', error);
        return new Response(
          JSON.stringify({ error: 'Erreur récupération posts' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ posts }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

  } catch (error) {
    console.error('Erreur dans linkedin-sync:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
