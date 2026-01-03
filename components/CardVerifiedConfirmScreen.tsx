
import React from 'react';

interface Props {
  onContinue: () => void;
  isPostPurchase?: boolean;
}

const CardVerifiedConfirmScreen: React.FC<Props> = ({ onContinue, isPostPurchase = false }) => {
  return (
    <div className="h-full flex flex-col bg-white p-6 animate-in slide-in-from-bottom duration-500">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-green-50 rounded-full scale-150 opacity-40 animate-pulse"></div>
          <div className="relative w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Card verified!</h1>
        <p className="text-lg text-gray-600 leading-relaxed px-4">
          Your card is now verified and ready to be used for this purchase and future checkouts.
        </p>
        
        <div className="mt-12 flex items-center gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-100">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-sm font-medium text-gray-700">Protected by Google Pay encryption</span>
        </div>
      </div>

      <div className="mt-auto pb-12">
        <button 
          onClick={onContinue}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-full shadow-lg transition-all active:scale-95 text-lg"
        >
          {isPostPurchase ? 'Done' : 'Continue with my purchase'}
        </button>
      </div>
    </div>
  );
};

export default CardVerifiedConfirmScreen;
