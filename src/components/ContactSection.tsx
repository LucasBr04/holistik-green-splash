
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dna, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-holistik-green" />,
      title: "Email",
      content: "contact@holistik-consulting.fr",
      action: "mailto:contact@holistik-consulting.fr"
    },
    {
      icon: <Phone className="h-6 w-6 text-holistik-green" />,
      title: "Téléphone",
      content: "+33 1 23 45 67 89",
      action: "tel:+33123456789"
    },
    {
      icon: <MapPin className="h-6 w-6 text-holistik-green" />,
      title: "Adresse",
      content: "Paris, France",
      action: null
    },
    {
      icon: <Clock className="h-6 w-6 text-holistik-green" />,
      title: "Horaires",
      content: "Lun-Ven 9h-18h",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-holistik-green/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-holistik-green rounded-full flex items-center justify-center">
              <Dna className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-holistik-green mb-6">Contact</h2>
          <div className="w-24 h-1 bg-holistik-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Démarrons ensemble votre projet de transformation. Contactez-nous pour un premier échange gratuit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="animate-slide-in-left">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-holistik-green">Parlons de votre projet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Que vous souhaitiez optimiser vos processus, développer une nouvelle stratégie, 
                  ou transformer votre organisation, nous sommes là pour vous accompagner.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-holistik-green/5 transition-colors duration-300">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-holistik-green">{info.title}</p>
                        {info.action ? (
                          <a href={info.action} className="text-gray-600 hover:text-holistik-green transition-colors">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-holistik-green/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-holistik-green mb-2">Premier échange gratuit</h4>
                  <p className="text-gray-700 text-sm">
                    Profitez d'un audit initial de 30 minutes offert pour identifier 
                    vos opportunités d'amélioration.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <div className="animate-slide-in-right">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-holistik-green">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="focus:ring-holistik-green focus:border-holistik-green"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="focus:ring-holistik-green focus:border-holistik-green"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="focus:ring-holistik-green focus:border-holistik-green"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="focus:ring-holistik-green focus:border-holistik-green"
                      placeholder="Décrivez votre projet ou vos besoins..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-holistik-green hover:bg-holistik-green-dark text-white py-3"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
