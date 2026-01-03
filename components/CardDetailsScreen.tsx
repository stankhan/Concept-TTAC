
import React from 'react';
import { CardData } from '../types';

interface Props {
  card: CardData;
  onNext: () => void;
  onBack: () => void;
}

const CardDetailsScreen: React.FC<Props> = ({ card, onNext, onBack }) => {
  return (
    <div className="p-6 h-full flex flex-col">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold ml-4">Card found</h1>
      </div>

      {/* Visual Card Card */}
      <div className="w-full aspect-[1.586/1] bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white shadow-2xl relative mb-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="flex justify-between items-start mb-8">
          <div className="w-12 h-8 bg-yellow-400/80 rounded flex items-center justify-center">
            <div className="w-8 h-4 border border-black/20 rounded"></div>
          </div>
          <span className="text-xl font-bold italic">VISA</span>
        </div>
        <div className="mb-8">
          <p className="text-sm font-light opacity-80 mb-1">Card number</p>
          <p className="text-2xl font-mono tracking-widest">{card.number}</p>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] font-light opacity-80 uppercase">Card Holder</p>
            <p className="text-sm font-medium tracking-wider uppercase">{card.holder}</p>
          </div>
          <div>
            <p className="text-[10px] font-light opacity-80 uppercase">Expires</p>
            <p className="text-sm font-medium">{card.expiry}</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Cardholder Name</label>
          <input 
            type="text" 
            readOnly 
            value={card.holder} 
            className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Expires</label>
          <input 
            type="text" 
            readOnly 
            value={card.expiry} 
            className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-auto">
        <p className="text-[10px] text-gray-400 text-center mb-4">
          By clicking next, you agree to allow Google Pay to retrieve information about this card from your bank.
        </p>
        <button 
          onClick={onNext}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full shadow-lg transition-transform active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardDetailsScreen;
