
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
    const timer3 = setTimeout(() => setStage(3), 1800);
    const timer4 = setTimeout(() => onComplete(), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-holistik-green via-holistik-green-light to-white">
      <div className="text-center">
        {/* Logo animation */}
        <div className={`mb-8 transition-all duration-700 ${stage >= 1 ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="relative">
            <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-xl">
              <Dna className="h-10 w-10 text-holistik-green animate-bounce-gentle" />
            </div>
            {stage >= 2 && (
              <div className="absolute -inset-4 border-2 border-white rounded-full animate-ping opacity-75"></div>
            )}
          </div>
        </div>

        {/* Text animation */}
        <div className={`transition-all duration-700 delay-300 ${stage >= 2 ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-4xl font-bold text-white mb-2">Holistik Consulting</h1>
          <p className="text-white/90 text-lg">Business Consulting & Services</p>
        </div>

        {/* Progress bar */}
        <div className={`mt-8 w-64 mx-auto transition-all duration-500 ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full bg-white/30 rounded-full h-1">
            <div 
              className="bg-white h-1 rounded-full transition-all duration-1000 ease-out"
              style={{ width: stage >= 3 ? '100%' : '0%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
