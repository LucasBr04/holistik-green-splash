
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dna, TrendingUp, Settings, Users, BarChart3, Zap, Shield } from 'lucide-react';

interface ServicesSectionProps {
  onContactClick: () => void;
}

const ServicesSection = ({ onContactClick }: ServicesSectionProps) => {
  const services = [
    {
      icon: <TrendingUp className="h-8 w-8 text-holistik-green" />,
      title: "Stratégie d'entreprise",
      description: "Définition de vision, analyse concurrentielle, plans de développement et stratégies de croissance sur mesure.",
      features: ["Audit stratégique", "Étude de marché", "Business plan", "Roadmap de croissance"]
    },
    {
      icon: <Settings className="h-8 w-8 text-holistik-green" />,
      title: "Optimisation des processus",
      description: "Amélioration de l'efficacité opérationnelle et digitalisation des workflows pour une performance maximale.",
      features: ["Cartographie des processus", "Automatisation", "Lean management", "KPI et métriques"]
    },
    {
      icon: <Users className="h-8 w-8 text-holistik-green" />,
      title: "Management & Leadership",
      description: "Développement des compétences managériales et accompagnement des équipes vers l'excellence.",
      features: ["Coaching dirigeants", "Formation équipes", "Gestion du changement", "Culture d'entreprise"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-holistik-green" />,
      title: "Analyse de performance",
      description: "Audit approfondi, tableaux de bord personnalisés et recommandations d'amélioration continue.",
      features: ["Audit opérationnel", "Business intelligence", "Reporting avancé", "Plans d'action"]
    },
    {
      icon: <Zap className="h-8 w-8 text-holistik-green" />,
      title: "Transformation digitale",
      description: "Accompagnement complet vers la digitalisation et l'adoption de nouvelles technologies.",
      features: ["Stratégie digitale", "Outils collaboratifs", "Formation numérique", "Change management"]
    },
    {
      icon: <Shield className="h-8 w-8 text-holistik-green" />,
      title: "Gestion des risques",
      description: "Identification, évaluation et mitigation des risques pour sécuriser votre développement.",
      features: ["Audit de risques", "Plans de continuité", "Conformité réglementaire", "Gestion de crise"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-holistik-green rounded-full flex items-center justify-center">
              <Dna className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-holistik-green mb-6">Nos Services</h2>
          <div className="w-24 h-1 bg-holistik-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes et personnalisées pour accompagner votre entreprise à chaque étape de son développement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-holistik-green/10 rounded-lg group-hover:bg-holistik-green group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-holistik-green">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-holistik-green rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-holistik-green/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-holistik-green mb-4">Prêt à transformer votre entreprise ?</h3>
            <p className="text-gray-600 mb-6">
              Discutons de vos défis et explorons ensemble les solutions qui propulseront votre business vers le succès.
            </p>
            <Button 
              size="lg"
              onClick={onContactClick}
              className="bg-holistik-green hover:bg-holistik-green-dark text-white px-8 py-4"
            >
              <Dna className="mr-2 h-5 w-5" />
              Demander un audit gratuit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
