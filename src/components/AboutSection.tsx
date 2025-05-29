
import { Card, CardContent } from '@/components/ui/card';
import { Dna, Users, Target, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-holistik-green" />,
      title: "Précision",
      description: "Des solutions sur mesure adaptées à vos objectifs spécifiques"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-holistik-green" />,
      title: "Innovation",
      description: "Des approches créatives pour transformer vos défis en opportunités"
    },
    {
      icon: <Users className="h-8 w-8 text-holistik-green" />,
      title: "Collaboration",
      description: "Un partenariat durable basé sur la confiance et l'expertise"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-holistik-green rounded-full flex items-center justify-center">
              <Dna className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-holistik-green mb-6">À propos</h2>
          <div className="w-24 h-1 bg-holistik-green mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-holistik-green mb-6">Expert en transformation d'entreprise</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fort de plus de 15 années d'expérience dans le conseil en stratégie et la transformation digitale, 
              je accompagne les entreprises de toutes tailles dans leur développement et leur optimisation.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mon approche holistique permet d'analyser votre organisation sous tous ses aspects : 
              stratégie, processus, technologie et capital humain, pour vous proposer des solutions 
              intégrées et durables.
            </p>
            <div className="bg-holistik-green/10 p-6 rounded-lg">
              <p className="text-holistik-green font-semibold mb-2">Ma mission</p>
              <p className="text-gray-700">
                Transformer vos défis business en avantages concurrentiels grâce à une expertise 
                pointue et une vision stratégique globale.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid gap-6">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-holistik-green">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-holistik-green mb-2">{value.title}</h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
