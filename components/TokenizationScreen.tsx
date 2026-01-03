
import React, { useEffect, useState } from 'react';
import { CardData } from '../types';

interface Props {
  card: CardData;
  onComplete: () => void;
}

const TokenizationScreen: React.FC<Props> = ({ card, onComplete }) => {
  const [stage, setStage] = useState<'IDLE' | 'FLIPPING' | 'DIGITIZING' | 'DONE'>('IDLE');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('FLIPPING'), 500);
    const timer2 = setTimeout(() => setStage('DIGITIZING'), 1500);
    const timer3 = setTimeout(() => setStage('DONE'), 3500);
    const timer4 = setTimeout(onComplete, 4500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 bg-slate-900 text-white">
      <div className="relative w-full aspect-[1.586/1] mb-12 flex items-center justify-center">
        {/* The Card */}
        <div 
          className={`w-full h-full bg-gradient-to-br from-indigo-500 to-blue-700 rounded-2xl p-6 shadow-2xl transition-all duration-1000 transform-gpu
            ${stage === 'FLIPPING' ? 'rotate-y-180 scale-95 opacity-80' : ''}
            ${stage === 'DIGITIZING' ? 'scale-50 opacity-0 translate-y-[-200px] blur-xl' : ''}
            ${stage === 'DONE' ? 'scale-100 translate-y-0 opacity-100' : ''}
          `}
          style={{ perspective: '1000px' }}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-7 bg-yellow-400 rounded-sm"></div>
            <div className="text-xl font-bold italic">VISA</div>
          </div>
          <div className="text-lg font-mono mb-4">{card.number}</div>
          <div className="flex justify-between text-[10px] opacity-70">
            <span>{card.holder}</span>
            <span>{card.expiry}</span>
          </div>
        </div>

        {/* The Phone/Wallet Visual */}
        {stage === 'DIGITIZING' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute w-24 h-24 border-4 border-blue-400/30 rounded-full animate-[spin_3s_linear_infinite]"></div>
          </div>
        )}

        {/* The Digital Token Visual */}
        {stage === 'DONE' && (
          <div className="absolute inset-0 flex items-center justify-center animate-in zoom-in duration-500">
            <div className="w-48 h-48 bg-blue-600 rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.5)]">
               <svg className="w-20 h-20 text-white mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-sm tracking-widest">ENCRYPTED</span>
            </div>
          </div>
        )}
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">
          {stage === 'IDLE' && 'Starting setup...'}
          {stage === 'FLIPPING' && 'Verifying credentials...'}
          {stage === 'DIGITIZING' && 'Creating device token...'}
          {stage === 'DONE' && 'Securely added!'}
        </h2>
        <p className="text-slate-400 text-sm px-8">
          {stage === 'DIGITIZING' ? 
            "We're replacing your card details with a unique digital token for safer payments." : 
            "Google Pay keeps your real card number private from merchants."}
        </p>
      </div>

      <div className="mt-12 flex gap-2">
        <div className={`w-2 h-2 rounded-full transition-colors ${stage === 'IDLE' ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
        <div className={`w-2 h-2 rounded-full transition-colors ${stage === 'FLIPPING' ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
        <div className={`w-2 h-2 rounded-full transition-colors ${stage === 'DIGITIZING' ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
        <div className={`w-2 h-2 rounded-full transition-colors ${stage === 'DONE' ? 'bg-green-500' : 'bg-slate-700'}`}></div>
      </div>
    </div>
  );
};

export default TokenizationScreen;
