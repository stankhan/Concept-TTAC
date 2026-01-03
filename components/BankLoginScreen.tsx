
import React, { useState } from 'react';
import { Bank } from '../types';

interface Props {
  bank: Bank;
  onLogin: () => void;
  onBack: () => void;
}

const BankLoginScreen: React.FC<Props> = ({ bank, onLogin, onBack }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-6">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full mb-4">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        <div className="flex flex-col items-center mb-10 pt-4">
          <img src={bank.logo} alt={bank.name} className="w-16 h-16 rounded-full border border-gray-100 mb-4 p-2 shadow-sm" />
          <h1 className="text-xl font-bold text-gray-900">Sign in to {bank.name}</h1>
          <p className="text-sm text-gray-500 text-center px-6 mt-2">
            Securely link your bank account to Google Pay to easily add your cards.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Username</label>
            <input 
              type="text" 
              defaultValue="stan_li_88"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors bg-gray-50" 
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Password</label>
            <input 
              type="password" 
              defaultValue="••••••••••••"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors bg-gray-50" 
            />
          </div>
        </div>
      </div>

      <div className="mt-auto p-6 pb-12">
        <button 
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full shadow-lg transition-all active:scale-95 flex items-center justify-center"
        >
          {loading ? (
            <svg className="w-6 h-6 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : 'Sign in'}
        </button>
        <p className="text-center text-[10px] text-gray-400 mt-4 px-6 leading-relaxed">
          Google Pay won't see your bank credentials. They are sent directly to {bank.name} for verification.
        </p>
      </div>
    </div>
  );
};

export default BankLoginScreen;
