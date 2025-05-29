
import { Dna, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-holistik-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" alt="Holistik Consulting" className="h-8 w-8 brightness-0 invert" />
              <span className="text-xl font-bold">Holistik Consulting</span>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Votre partenaire stratégique pour transformer vos défis en opportunités de croissance durable.
            </p>
            <div className="flex items-center space-x-2">
              <Dna className="h-5 w-5 text-white/60" />
              <span className="text-white/60 text-sm">Business Consulting & Services</span>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('apropos')}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white/60" />
                <a href="mailto:contact@holistik-consulting.fr" className="text-white/80 hover:text-white transition-colors">
                  contact@holistik-consulting.fr
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white/60" />
                <a href="tel:+33123456789" className="text-white/80 hover:text-white transition-colors">
                  +33 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-white/60" />
                <span className="text-white/80">Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Holistik Consulting. Tous droits réservés.
            </p>
            <p className="text-white/60 text-sm mt-2 md:mt-0">
              Transformons ensemble votre vision en réalité
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
