
import React, { useEffect, useState } from 'react';

interface Props {
  onComplete: () => void;
}

const BankLoadingScreen: React.FC<Props> = ({ onComplete }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    const interval = setInterval(() => {
      setRotation(r => (r + 5) % 360);
    }, 16);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="h-full flex flex-col p-6 pt-12 bg-white">
      <div className="mb-12">
        <svg className="w-10 h-10 text-blue-600 mb-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15h2v2h-2v-2zm0-8h2v6h-2V8z"/>
        </svg>
        <h1 className="text-2xl font-normal text-gray-900 leading-tight">
          Contacting your bank...
        </h1>
      </div>

      <div className="flex-1 flex items-center justify-center relative">
        <div className="absolute w-24 h-24 rounded-full border-4 border-gray-100"></div>
        <div 
          className="absolute w-24 h-24 rounded-full border-4 border-transparent border-t-blue-600"
          style={{ transform: `rotate(${rotation}deg)` }}
        ></div>
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      
      {/* Decorative dot from image */}
      <div className="absolute left-10 top-1/2 w-4 h-4 bg-fuchsia-500 rounded-full blur-[2px]"></div>
      
      <p className="mt-8 text-center text-sm text-gray-400">Verifying security details for Stan Li</p>
    </div>
  );
};

export default BankLoadingScreen;
