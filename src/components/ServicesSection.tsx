
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dna, TrendingUp, Settings, Users, BarChart3, Zap, Shield, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onContactClick: () => void;
}

const ServicesSection = ({ onContactClick }: ServicesSectionProps) => {
  const services = [
    {
      icon: <TrendingUp className="h-10 w-10 text-holistik-primary" />,
      title: "Stratégie d'entreprise",
      description: "Définition de vision stratégique, analyse concurrentielle et plans de développement sur mesure pour accélérer votre croissance.",
      features: ["Audit stratégique complet", "Étude de marché approfondie", "Business plan optimisé", "Roadmap de croissance"]
    },
    {
      icon: <Settings className="h-10 w-10 text-holistik-primary" />,
      title: "Optimisation opérationnelle",
      description: "Amélioration de l'efficacité et digitalisation des processus pour une performance maximale et des résultats mesurables.",
      features: ["Cartographie des processus", "Automatisation intelligente", "Lean management", "Indicateurs de performance"]
    },
    {
      icon: <Users className="h-10 w-10 text-holistik-primary" />,
      title: "Leadership & Management",
      description: "Développement des compétences managériales et accompagnement des équipes vers l'excellence opérationnelle.",
      features: ["Coaching exécutif", "Formation leadership", "Conduite du changement", "Culture d'entreprise"]
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-holistik-primary" />,
      title: "Analyse de performance",
      description: "Audit approfondi, tableaux de bord intelligents et recommandations d'amélioration pour optimiser vos résultats.",
      features: ["Audit opérationnel", "Business intelligence", "Reporting en temps réel", "Plans d'action ciblés"]
    },
    {
      icon: <Zap className="h-10 w-10 text-holistik-primary" />,
      title: "Transformation digitale",
      description: "Accompagnement complet vers la digitalisation avec adoption de technologies innovantes et formation des équipes.",
      features: ["Stratégie digitale", "Outils collaboratifs", "Formation numérique", "Change management"]
    },
    {
      icon: <Shield className="h-10 w-10 text-holistik-primary" />,
      title: "Gestion des risques",
      description: "Identification proactive, évaluation et mitigation des risques pour sécuriser et pérenniser votre développement.",
      features: ["Audit de risques", "Continuité d'activité", "Conformité réglementaire", "Gestion de crise"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-section-pattern">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-holistik-primary rounded-2xl flex items-center justify-center shadow-premium">
              <Dna className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-holistik-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-holistik-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions complètes et personnalisées pour propulser votre entreprise vers l'excellence et la croissance durable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-hover transition-all duration-500 hover:-translate-y-2 group border border-gray-100">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-holistik-light rounded-2xl group-hover:bg-holistik-primary transition-colors duration-300">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-holistik-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-holistik-primary rounded-full mr-4 flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-holistik-light to-white rounded-3xl p-12 max-w-4xl mx-auto shadow-premium border border-holistik-primary/10">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Prêt à <span className="text-holistik-primary">transformer</span> votre entreprise ?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Discutons de vos défis et explorons ensemble les solutions premium qui propulseront votre business vers le succès durable.
            </p>
            <Button 
              size="lg"
              onClick={onContactClick}
              className="bg-holistik-primary hover:bg-holistik-secondary text-white px-10 py-6 text-lg rounded-xl shadow-premium hover:shadow-hover transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              <Dna className="mr-3 h-6 w-6" />
              Consultation gratuite
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
