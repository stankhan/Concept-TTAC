
import React, { useState } from 'react';

interface Props {
  onComplete: () => void;
}

const VerifyCodeScreen: React.FC<Props> = ({ onComplete }) => {
  const [code, setCode] = useState('');

  const handlePress = (num: string) => {
    if (code.length < 6) setCode(code + num);
  };

  const handleBackspace = () => {
    setCode(code.slice(0, -1));
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-6">
        <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full mb-4">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-[10px] font-bold mb-4 shadow-sm">VISA</div>
        <h1 className="text-2xl font-normal text-gray-900 mb-2">Enter verification code</h1>
        <p className="text-sm text-gray-600 mb-8">
          You'll receive a verification code from your bank at •••• •••• 4567
        </p>

        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-[10px] text-blue-600 font-bold uppercase tracking-wide">Code</label>
          <div className="border-2 border-blue-600 rounded-lg p-4 text-xl tracking-[0.5em] font-medium h-16 flex items-center">
            {code}
            {code.length < 6 && <span className="w-0.5 h-6 bg-blue-600 animate-pulse ml-1"></span>}
          </div>
        </div>
        
        <button className="text-blue-600 text-sm font-medium mb-8">Get another text</button>

        <div className="flex justify-between items-center mb-12">
          <button className="text-blue-600 text-sm font-medium">Change verification method</button>
          <button 
            onClick={onComplete}
            disabled={code.length < 6}
            className={`py-2 px-6 rounded-full font-medium text-sm transition-colors shadow-sm ${
              code.length >= 6 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'
            }`}
          >
            Enter code
          </button>
        </div>
      </div>

      {/* Custom Number Pad matching Image 5 */}
      <div className="mt-auto bg-gray-50 grid grid-cols-3 border-t border-gray-200">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '0', '.'].map((key) => (
          <button 
            key={key} 
            onClick={() => handlePress(key)}
            className="h-14 flex items-center justify-center text-xl text-gray-800 hover:bg-gray-200 border-r border-b border-gray-200"
          >
            {key}
          </button>
        ))}
        <button className="h-14 flex items-center justify-center bg-gray-100 hover:bg-gray-200 border-r border-b border-gray-200">
           <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <button 
          onClick={handleBackspace}
          className="h-14 flex items-center justify-center bg-green-100 hover:bg-green-200 border-r border-b border-gray-200"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
          </svg>
        </button>
        <button 
          onClick={onComplete}
          className="h-14 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white col-span-1"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VerifyCodeScreen;
