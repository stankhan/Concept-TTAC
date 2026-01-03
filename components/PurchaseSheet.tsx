
import React, { useState, useEffect } from 'react';
import { CardData } from '../types';

interface Props {
  onClose: () => void;
  onAddCard: () => void;
  addedCards: CardData[];
  onCompletePurchase: () => void;
}

const PurchaseSheet: React.FC<Props> = ({ onClose, onAddCard, addedCards, onCompletePurchase }) => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  useEffect(() => {
    if (addedCards.length > 0 && !selectedCardId) {
      setSelectedCardId(addedCards[0].id || 'default');
    }
  }, [addedCards, selectedCardId]);

  return (
    <div className="absolute inset-0 bg-black/50 z-50 flex items-end">
      <div className="w-full bg-white rounded-t-3xl p-6 pb-12 animate-in slide-in-from-bottom duration-300 flex flex-col max-h-[90%]">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold">Complete purchase</h3>
            <p className="text-gray-500 text-sm">Starry Night Pro</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="border-t border-b border-gray-100 py-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 text-xs tracking-wide">PRICE</span>
            <span className="font-semibold text-sm">$9.99</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-xs tracking-wide">TAX</span>
            <span className="font-semibold text-sm">$0.00</span>
          </div>
        </div>

        <div className="space-y-3 mb-6 flex-1 overflow-y-auto min-h-0">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Payment Method</p>
          
          <div className="space-y-2">
            {addedCards.map((card, idx) => (
              <div 
                key={card.id || idx}
                onClick={() => setSelectedCardId(card.id || 'idx-' + idx)}
                className={`w-full flex items-center justify-between p-3 border rounded-xl transition-all cursor-pointer ${
                  selectedCardId === (card.id || 'idx-' + idx) ? 'border-blue-600 bg-blue-50/50' : 'border-gray-100 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-7 rounded flex items-center justify-center text-white text-[8px] font-bold shadow-sm ${
                    card.type === 'visa' ? 'bg-blue-600' : 'bg-red-500'
                  }`}>
                    {card.type.toUpperCase()}
                  </div>
                  <div>
                    <span className="font-medium text-xs block">
                      {card.type.charAt(0).toUpperCase() + card.type.slice(1)} {card.number.slice(-4)}
                    </span>
                    <span className="text-[9px] text-blue-600 font-medium">Ready to pay</span>
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  selectedCardId === (card.id || 'idx-' + idx) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                }`}>
                  {selectedCardId === (card.id || 'idx-' + idx) && (
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
            ))}

            <button 
              onClick={onAddCard}
              className="w-full flex items-center justify-between p-3 border border-dashed border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-gray-50 rounded text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="font-medium text-xs text-gray-500 tracking-tight">Add another card</span>
              </div>
            </button>
          </div>
        </div>

        {addedCards.length > 0 ? (
          <button 
            onClick={onCompletePurchase}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Pay
          </button>
        ) : (
          <button 
            disabled
            className="w-full bg-gray-200 text-gray-400 font-semibold py-4 rounded-full cursor-not-allowed"
          >
            Pay
          </button>
        )}
      </div>
    </div>
  );
};

export default PurchaseSheet;
