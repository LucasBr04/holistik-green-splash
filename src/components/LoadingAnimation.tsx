
import React, { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 800);
    const timer2 = setTimeout(() => setStage(2), 1500);
    const timer3 = setTimeout(() => setStage(3), 2200);
    const timer4 = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-holistik-primary overflow-hidden">
      {/* Particules animées */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-holistik-primary rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Cercles concentriques */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-96 h-96 border-2 border-holistik-primary/20 rounded-full transition-all duration-2000 ${stage >= 1 ? 'scale-150 opacity-100' : 'scale-0 opacity-0'}`} />
        <div className={`absolute w-64 h-64 border-2 border-holistik-primary/40 rounded-full transition-all duration-1500 delay-300 ${stage >= 1 ? 'scale-150 opacity-100' : 'scale-0 opacity-0'}`} />
        <div className={`absolute w-32 h-32 border-2 border-holistik-primary/60 rounded-full transition-all duration-1000 delay-600 ${stage >= 1 ? 'scale-150 opacity-100' : 'scale-0 opacity-0'}`} />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo section avec animation spectaculaire */}
        <div className={`transition-all duration-1500 ${stage >= 1 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-180'}`}>
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform">
              <img 
                src="/lovable-uploads/e6dc1785-66ee-46be-b1fd-8b8e3f356cdd.png" 
                alt="Holistik Consulting" 
                className="h-20 w-20" 
              />
            </div>
            {/* Effet de pulsation autour du logo */}
            <div className={`absolute inset-0 w-32 h-32 mx-auto bg-holistik-primary/20 rounded-full animate-ping ${stage >= 2 ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </div>

        {/* Nom de l'entreprise avec effet de typing */}
        <div className={`transition-all duration-1000 delay-500 ${stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl font-bold text-white mb-4">
            <span className="text-holistik-primary">Holistik</span> Consulting
          </h1>
          <div className="w-64 h-1 bg-gradient-to-r from-transparent via-holistik-primary to-transparent mx-auto mb-4" />
          <p className="text-white/80 text-xl font-light">Business Consulting & Services</p>
        </div>

        {/* Barre de progression créative */}
        <div className={`mt-16 transition-all duration-500 ${stage >= 2 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-80 mx-auto relative">
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-holistik-primary to-white h-2 rounded-full transition-all duration-2000 ease-out"
                style={{ width: stage >= 3 ? '100%' : '0%' }}
              />
            </div>
            <div className="flex justify-between mt-3 text-white/60 text-sm">
              <span>Initialisation</span>
              <span>Chargement</span>
              <span>Prêt</span>
            </div>
          </div>
          
          {stage >= 3 && (
            <p className="mt-8 text-holistik-primary font-semibold text-lg animate-pulse">
              Bienvenue dans l'excellence du conseil
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
