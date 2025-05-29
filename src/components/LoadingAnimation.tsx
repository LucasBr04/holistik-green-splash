
import { useEffect, useState } from 'react';
import { Dna } from 'lucide-react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 300);
    const timer2 = setTimeout(() => setStage(2), 800);
    const timer3 = setTimeout(() => setStage(3), 1400);
    const timer4 = setTimeout(() => setStage(4), 2000);
    const timer5 = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-radial from-white via-holistik-green/5 to-holistik-green/20 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 bg-holistik-green/10 rounded-full animate-float ${
              stage >= 1 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 relative">
        {/* Logo container with morphing border */}
        <div className={`mb-8 transition-all duration-1000 ${stage >= 1 ? 'animate-scale-in' : 'opacity-0 scale-50'}`}>
          <div className="relative">
            <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-holistik-green to-holistik-green-dark rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow ${stage >= 2 ? 'animate-border-dance' : ''}`}>
              <Dna className="h-12 w-12 text-white animate-bounce-gentle" />
            </div>
            
            {/* Orbiting elements */}
            {stage >= 2 && (
              <>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                  <div className="w-4 h-4 bg-holistik-green rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
                  <div className="w-3 h-3 bg-holistik-green-light rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Text with gradient reveal effect */}
        <div className={`transition-all duration-1000 delay-500 ${stage >= 2 ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className={`text-5xl font-bold mb-3 bg-gradient-to-r from-holistik-green via-holistik-green-dark to-holistik-green bg-clip-text text-transparent ${stage >= 3 ? 'animate-text-reveal' : ''}`}>
            Holistik Consulting
          </h1>
          <p className="text-holistik-green-dark text-xl font-medium">Business Consulting & Services</p>
        </div>

        {/* Modern progress indicator */}
        <div className={`mt-12 w-80 mx-auto transition-all duration-500 ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-holistik-green to-holistik-green-light h-2 rounded-full transition-all duration-2000 ease-out relative"
                style={{ width: stage >= 4 ? '100%' : '0%' }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>
            
            {/* Progress dots */}
            <div className="flex justify-between mt-4">
              {[0, 1, 2, 3, 4].map((dot) => (
                <div
                  key={dot}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    stage > dot ? 'bg-holistik-green scale-110' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Loading text */}
        {stage >= 3 && (
          <div className="mt-6 animate-fade-in">
            <p className="text-holistik-green-dark font-medium">
              Préparation de votre expérience...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingAnimation;
