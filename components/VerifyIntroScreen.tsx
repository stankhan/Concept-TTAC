
import React from 'react';

interface Props {
  onContinue: () => void;
  onRemindLater: () => void;
}

const VerifyIntroScreen: React.FC<Props> = ({ onContinue, onRemindLater }) => {
  return (
    <div className="h-full flex flex-col p-6 bg-white">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        {/* Central Illustration matching image */}
        <div className="relative w-48 h-48 mb-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-50 rounded-full scale-125 opacity-40"></div>
          <div className="relative z-10 flex gap-4 items-center">
            {/* Fingerprint icon */}
            <div className="p-3 bg-blue-600 rounded-full text-white shadow-lg">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3m0 0a10.003 10.003 0 0110 10c0 1.256-.232 2.458-.655 3.571m-3.148-3.148A10.003 10.003 0 0112 13" />
              </svg>
            </div>
            {/* Lock/Shield icon */}
            <div className="p-6 bg-white border-2 border-green-500 rounded-full text-green-500 shadow-xl scale-110">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            {/* Card icon */}
            <div className="p-3 bg-blue-500 rounded-lg text-white shadow-lg">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-medium text-gray-900 mb-6">
          Verify your Visa-4242 for faster, safer checkouts in Google Play
        </h1>

        <div className="space-y-6 text-left w-full px-2">
          <div className="flex items-start gap-4">
            <svg className="w-5 h-5 text-blue-600 mt-1 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="text-sm text-gray-600">Pay easily in Google Play by skipping steps</p>
          </div>
          <div className="flex items-start gap-4">
            <svg className="w-5 h-5 text-blue-600 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0" />
            </svg>
            <p className="text-sm text-gray-600">Use your card anywhere tap to pay is accepted</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <button 
          onClick={onRemindLater}
          className="py-3 px-6 border border-gray-200 rounded-full text-blue-600 font-medium text-sm hover:bg-gray-50"
        >
          Remind me later
        </button>
        <button 
          onClick={onContinue}
          className="py-3 px-6 bg-blue-600 rounded-full text-white font-medium text-sm hover:bg-blue-700 shadow-sm"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default VerifyIntroScreen;
