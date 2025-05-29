
import { useEffect, useState } from 'react';
import { Dna } from 'lucide-react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1200);
    const timer3 = setTimeout(() => setStage(3), 2000);
    const timer4 = setTimeout(() => onComplete(), 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-holistik-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-holistik-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo section */}
        <div className={`transition-all duration-1000 ${stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="relative mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-holistik-primary to-holistik-secondary rounded-2xl flex items-center justify-center shadow-premium">
              <Dna className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>

        {/* Company name */}
        <div className={`transition-all duration-1000 delay-300 ${stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            <span className="text-holistik-primary">Holistik</span> Consulting
          </h1>
          <p className="text-holistik-secondary text-lg font-medium">Business Consulting & Services</p>
        </div>

        {/* Loading indicator */}
        <div className={`mt-12 transition-all duration-500 ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-64 mx-auto">
            <div className="relative">
              <div className="w-full bg-gray-100 rounded-full h-1 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-holistik-primary to-holistik-accent h-1 rounded-full transition-all duration-2000 ease-out"
                  style={{ width: stage >= 3 ? '100%' : '0%' }}
                />
              </div>
            </div>
          </div>
          
          {stage >= 3 && (
            <p className="mt-6 text-holistik-secondary font-medium animate-fade-in">
              Préparation de votre expérience premium...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
