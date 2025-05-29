
import { Card, CardContent } from '@/components/ui/card';
import { Dna, Users, Target, Lightbulb, Award, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-holistik-primary" />,
      title: "Excellence",
      description: "Des solutions sur mesure d'une qualité exceptionnelle pour atteindre vos objectifs"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-holistik-primary" />,
      title: "Innovation",
      description: "Des approches créatives et avant-gardistes pour transformer vos défis en succès"
    },
    {
      icon: <Users className="h-8 w-8 text-holistik-primary" />,
      title: "Partenariat",
      description: "Une collaboration étroite basée sur la confiance et l'expertise reconnue"
    }
  ];

  const stats = [
    { icon: <Award className="h-6 w-6" />, value: "15+", label: "Années d'expérience" },
    { icon: <Users className="h-6 w-6" />, value: "200+", label: "Clients accompagnés" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "95%", label: "Taux de satisfaction" }
  ];

  return (
    <section id="apropos" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-holistik-primary rounded-2xl flex items-center justify-center shadow-premium">
              <Dna className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            À propos de <span className="text-holistik-primary">Holistik</span>
          </h2>
          <div className="w-24 h-1 bg-holistik-primary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Votre expert en <span className="text-holistik-primary">transformation business</span>
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Fort de plus de <span className="text-holistik-primary font-semibold">15 années d'expérience</span> dans le conseil stratégique et la transformation digitale, j'accompagne les entreprises de toutes tailles dans leur développement et leur optimisation.
              </p>
              
              <p className="text-lg">
                Mon approche <span className="text-holistik-primary font-semibold">holistique</span> permet d'analyser votre organisation sous tous ses aspects : stratégie, processus, technologie et capital humain, pour vous proposer des solutions intégrées et durables.
              </p>
            </div>

            <div className="bg-gradient-to-r from-holistik-light to-white p-8 rounded-2xl mt-8 border border-holistik-primary/10">
              <h4 className="font-bold text-holistik-primary text-xl mb-3">Ma mission</h4>
              <p className="text-gray-700 text-lg">
                Transformer vos défis business en avantages concurrentiels durables grâce à une expertise pointue et une vision stratégique globale.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-hover transition-all duration-300 border-l-4 border-l-holistik-primary group hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 p-3 bg-holistik-light rounded-xl group-hover:bg-holistik-primary group-hover:text-white transition-colors duration-300">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-white rounded-3xl p-12 shadow-premium animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-holistik-light rounded-xl flex items-center justify-center text-holistik-primary group-hover:bg-holistik-primary group-hover:text-white transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-holistik-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
