
-- Désactiver temporairement RLS pour la table linkedin_posts car c'est une table publique
ALTER TABLE public.linkedin_posts DISABLE ROW LEVEL SECURITY;

-- Ou si vous préférez garder RLS activé, créer une politique qui permet l'insertion publique
-- ALTER TABLE public.linkedin_posts ENABLE ROW LEVEL SECURITY;
-- DROP POLICY IF EXISTS "Allow public insert" ON public.linkedin_posts;
-- CREATE POLICY "Allow public insert" ON public.linkedin_posts FOR INSERT WITH CHECK (true);
-- DROP POLICY IF EXISTS "Allow public select" ON public.linkedin_posts;
-- CREATE POLICY "Allow public select" ON public.linkedin_posts FOR SELECT USING (true);
