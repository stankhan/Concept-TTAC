
import React from 'react';

interface Props {
  onRestart: () => void;
  onVerifyCard: () => void;
}

const SuccessScreen: React.FC<Props> = ({ onRestart, onVerifyCard }) => {
  const orderNumber = Math.random().toString(36).toUpperCase().substring(2, 10);
  const date = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto">
      {/* Header Celebration Area */}
      <div className="pt-12 pb-8 flex flex-col items-center text-center px-6">
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-green-50 rounded-full scale-150 animate-pulse opacity-60"></div>
          </div>
          <div className="relative z-10 w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white shadow-xl">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order confirmed!</h1>
        <p className="text-gray-500 text-sm">Thank you for your purchase</p>
      </div>

      {/* Order Details Card */}
      <div className="px-6 space-y-4">
        <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
          <div className="flex justify-between items-start mb-6 pb-6 border-b border-gray-200">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Order Number</p>
              <p className="text-sm font-mono font-semibold text-gray-800">#{orderNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Date</p>
              <p className="text-sm font-semibold text-gray-800">{date}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">
                  S
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Starry Night Pro</p>
                  <p className="text-[10px] text-gray-500 italic">One-time purchase</p>
                </div>
              </div>
              <span className="font-semibold text-sm">$9.99</span>
            </div>

            <div className="pt-4 space-y-2">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Subtotal</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-dashed border-gray-300">
                <span>Total Paid</span>
                <span className="text-green-600">$9.99</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
          <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-[11px] text-gray-600 leading-relaxed">
            A confirmation receipt has been sent to your Google Account email. Your content is now unlocked and ready to use in the app.
          </p>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-auto p-6 pb-12 space-y-3">
        <button 
          onClick={onVerifyCard}
          className="w-full bg-white border-2 border-blue-600 text-blue-600 font-bold py-4 rounded-full transition-all active:scale-95 flex items-center justify-center gap-2 px-4 shadow-sm"
        >
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-sm">Verify my card for express pay next time</span>
        </button>

        <button 
          onClick={onRestart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-full transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
        >
          Go to App
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
