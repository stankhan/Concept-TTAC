
import React from 'react';
import { BANKS } from '../constants';
import { Bank } from '../types';

interface Props {
  onBack: () => void;
  onNfcSimulate: () => void;
  onBankSelect: (bank: Bank) => void;
}

const AddCardScreen: React.FC<Props> = ({ onBack, onNfcSimulate, onBankSelect }) => {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-6 pb-0">
        <div className="flex items-center mb-6">
          <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold ml-4">Add a card</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-8">
        {/* Main Feature: Tap to Add */}
        <div 
          onClick={onNfcSimulate}
          className="relative group cursor-pointer mb-8 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 rounded-3xl p-8 flex flex-col items-center justify-center transition-all hover:border-blue-400 hover:shadow-md active:scale-95"
        >
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-tight">New</div>
          
          <div className="relative w-24 h-24 mb-6">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 animate-ping"></div>
            <div className="absolute inset-4 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-lg font-bold text-gray-800 mb-1">Tap to add a card</h2>
          <p className="text-sm text-gray-500 text-center px-4 leading-snug">Hold your physical card near the back of your phone to securely import details</p>
        </div>

        {/* Fallback Options */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100">
            <svg className="w-8 h-8 text-gray-700 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-semibold text-gray-700">Scan card</span>
          </button>

          <button className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100">
            <svg className="w-8 h-8 text-gray-700 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="text-xs font-semibold text-gray-700">Enter manually</span>
          </button>
        </div>

        {/* Direct Bank Linking */}
        <p className="text-[10px] font-bold text-gray-400 mb-4 px-2 uppercase tracking-widest">Or link your bank directly</p>
        <div className="space-y-1">
          {BANKS.map((bank) => (
            <button 
              key={bank.id} 
              onClick={() => onBankSelect(bank)}
              className="w-full flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors text-left"
            >
              <img src={bank.logo} alt={bank.name} className="w-8 h-8 rounded-full border border-gray-100 object-contain p-1" />
              <span className="font-medium text-gray-800 text-sm">{bank.name}</span>
              <svg className="w-4 h-4 ml-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
          <button className="w-full text-center py-4 text-blue-600 text-sm font-semibold hover:bg-blue-50 rounded-lg">
            See all banks
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCardScreen;
