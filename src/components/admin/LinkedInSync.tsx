
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, RefreshCw, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const LinkedInSync = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleManualUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    try {
      const text = await file.text();
      const posts = JSON.parse(text);

      const { data, error } = await supabase.functions.invoke('linkedin-sync', {
        body: { linkedinPosts: posts },
      });

      if (error) throw error;

      toast({
        title: "Synchronisation réussie",
        description: `${posts.length} posts LinkedIn ont été synchronisés.`,
      });

    } catch (error) {
      console.error('Erreur synchronisation:', error);
      toast({
        title: "Erreur de synchronisation",
        description: "Impossible de synchroniser les posts LinkedIn.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      event.target.value = '';
    }
  };

  const downloadSampleFormat = () => {
    const sampleData = [
      {
        id: "exemple-post-1",
        content: "Voici un exemple de post LinkedIn qui sera transformé en article de blog...",
        author_name: "holistik consulting",
        published_at: "2024-06-14T10:00:00Z",
        engagement_count: 25,
        likes_count: 20,
        comments_count: 3,
        shares_count: 2,
        post_url: "https://linkedin.com/posts/exemple",
        images: ["/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png"]
      }
    ];

    const blob = new Blob([JSON.stringify(sampleData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'linkedin-posts-format.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <RefreshCw className="h-5 w-5" />
          Synchronisation LinkedIn
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-sm text-gray-600">
          <p className="mb-4">
            Synchronisez vos posts LinkedIn avec votre blog en important un fichier JSON contenant vos publications.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={downloadSampleFormat}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Télécharger le format exemple
          </Button>

          <div className="relative">
            <input
              type="file"
              accept=".json"
              onChange={handleManualUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              disabled={isLoading}
            />
            <Button 
              disabled={isLoading}
              className="w-full flex items-center gap-2"
            >
              <Upload className="h-4 w-4" />
              {isLoading ? 'Synchronisation...' : 'Importer les posts'}
            </Button>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg text-sm">
          <h4 className="font-semibold mb-2">Comment procéder :</h4>
          <ol className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Téléchargez le fichier format exemple</li>
            <li>Adaptez-le avec vos vrais posts LinkedIn</li>
            <li>Importez le fichier JSON mis à jour</li>
            <li>Vos posts apparaîtront automatiquement sur votre blog</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkedInSync;
