
import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, Users, Award, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6 text-holistik-primary" />,
      title: "Excellence",
      description: "Des solutions sur mesure d'une qualité exceptionnelle"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-holistik-primary" />,
      title: "Innovation",
      description: "Des approches créatives et avant-gardistes"
    },
    {
      icon: <Users className="h-6 w-6 text-holistik-primary" />,
      title: "Partenariat",
      description: "Une collaboration basée sur la confiance"
    }
  ];

  const stats = [
    { icon: <Award className="h-5 w-5" />, value: "15+", label: "Années d'expérience" },
    { icon: <Users className="h-5 w-5" />, value: "200+", label: "Clients accompagnés" },
    { icon: <TrendingUp className="h-5 w-5" />, value: "95%", label: "Taux de satisfaction" }
  ];

  return (
    <section id="apropos" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
            À propos de <span className="text-holistik-primary">Holistik</span>
          </h2>
          <div className="w-16 h-px bg-holistik-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-8 tracking-tight">
              Votre expert en <span className="text-holistik-primary">transformation business</span>
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed font-light">
              <p className="text-lg">
                Fort de plus de <span className="text-holistik-primary">15 années d'expérience</span> dans le conseil stratégique, j'accompagne les entreprises dans leur développement.
              </p>
              
              <p className="text-lg">
                Mon approche <span className="text-holistik-primary">holistique</span> permet d'analyser votre organisation pour vous proposer des solutions intégrées et durables.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm mt-8 border-l-2 border-holistik-primary">
              <h4 className="font-medium text-holistik-primary text-lg mb-3 tracking-wide">Ma mission</h4>
              <p className="text-gray-700 font-light">
                Transformer vos défis business en avantages concurrentiels durables.
              </p>
            </div>
          </div>

          <div>
            <div className="grid gap-6">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-sm transition-all duration-300 border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-gray-50 rounded-sm">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">{value.title}</h4>
                        <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats épurées */}
        <div className="bg-white rounded-sm p-12 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-sm flex items-center justify-center text-holistik-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-light text-holistik-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-light text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
