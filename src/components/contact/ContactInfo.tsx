
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactInfo = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-holistik-primary" />,
      title: t('contact.info.email'),
      content: "contact@holistik-consulting.fr",
      action: "mailto:contact@holistik-consulting.fr"
    },
    {
      icon: <Phone className="h-6 w-6 text-holistik-primary" />,
      title: t('contact.info.phone'),
      content: "+33 1 23 45 67 89",
      action: "tel:+33123456789"
    },
    {
      icon: <MapPin className="h-6 w-6 text-holistik-primary" />,
      title: t('contact.info.address'),
      content: "paris, france",
      action: null
    },
    {
      icon: <Clock className="h-6 w-6 text-holistik-primary" />,
      title: t('contact.info.hours'),
      content: t('contact.info.hoursValue'),
      action: null
    }
  ];

  return (
    <div className="animate-slide-in-left">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-2xl text-holistik-primary font-montserrat lowercase">
            {t('contact.talk.title')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-600 leading-relaxed font-montserrat lowercase">
            {t('contact.talk.desc')}
          </p>
          
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-holistik-primary/5 transition-colors duration-300">
                <div className="flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="font-semibold text-holistik-primary font-montserrat lowercase">{info.title}</p>
                  {info.action ? (
                    <a href={info.action} className="text-gray-600 hover:text-holistik-primary transition-colors font-montserrat lowercase">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 font-montserrat lowercase">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
