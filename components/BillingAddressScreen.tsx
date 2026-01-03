
import React from 'react';

interface Props {
  onContinue: () => void;
  onBack: () => void;
}

const BillingAddressScreen: React.FC<Props> = ({ onContinue, onBack }) => {
  return (
    <div className="p-6 h-full flex flex-col">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold ml-4">Billing Address</h1>
      </div>

      <p className="text-sm text-gray-500 mb-8">
        Ensure this address matches the one on your card statement to avoid transaction failures.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
          <input defaultValue="Stan Li" className="w-full border-b border-gray-300 py-2 focus:border-blue-600 focus:outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Street Address</label>
          <input defaultValue="1600 Amphitheatre Parkway" className="w-full border-b border-gray-300 py-2 focus:border-blue-600 focus:outline-none transition-colors" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">City</label>
            <input defaultValue="Mountain View" className="w-full border-b border-gray-300 py-2 focus:border-blue-600 focus:outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Zip Code</label>
            <input defaultValue="94043" className="w-full border-b border-gray-300 py-2 focus:border-blue-600 focus:outline-none transition-colors" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Country</label>
          <select defaultValue="United States" className="w-full border-b border-gray-300 py-2 focus:border-blue-600 focus:outline-none bg-transparent">
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
          </select>
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex items-start gap-3 mb-6 p-4 bg-gray-50 rounded-2xl">
          <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <p className="text-[10px] text-gray-500">
            Your payment information is stored securely. By continuing, you agree to Google's Terms of Service and Privacy Policy.
          </p>
        </div>
        <button 
          onClick={onContinue}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full shadow-lg transition-transform active:scale-95"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BillingAddressScreen;
