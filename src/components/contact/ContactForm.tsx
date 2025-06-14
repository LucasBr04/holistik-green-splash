
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.toast.title'),
      description: t('contact.toast.desc'),
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="animate-slide-in-right">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-2xl text-holistik-primary font-montserrat lowercase">
            {t('contact.form.title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat lowercase">
                  {t('contact.form.name')} *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="focus:ring-holistik-primary focus:border-holistik-primary font-montserrat"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat lowercase">
                  email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="focus:ring-holistik-primary focus:border-holistik-primary font-montserrat"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat lowercase">
                {t('contact.form.company')}
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="focus:ring-holistik-primary focus:border-holistik-primary font-montserrat"
                placeholder={t('contact.form.companyPlaceholder')}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat lowercase">
                {t('contact.form.message')} *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="focus:ring-holistik-primary focus:border-holistik-primary font-montserrat"
                placeholder={t('contact.form.messagePlaceholder')}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-holistik-primary hover:bg-holistik-primary/90 text-white py-3 font-montserrat lowercase"
              size="lg"
            >
              <Send className="mr-2 h-5 w-5" />
              {t('contact.form.send')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
