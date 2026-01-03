
import React, { useState } from 'react';
import { CardData } from '../types';

interface Props {
  bankName: string;
  onConfirm: (cards: CardData[]) => void;
  onBack: () => void;
}

const CardSelectionScreen: React.FC<Props> = ({ bankName, onConfirm, onBack }) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const mockCards: CardData[] = [
    { id: 'bank-1', number: '•••• •••• •••• 1234', expiry: '09/27', holder: 'Stan Li', type: 'visa' },
    { id: 'bank-2', number: '•••• •••• •••• 5678', expiry: '11/26', holder: 'Stan Li', type: 'mastercard' },
    { id: 'bank-3', number: '•••• •••• •••• 9012', expiry: '03/29', holder: 'Stan Li', type: 'visa' },
  ];

  const toggleSelection = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  const handleConfirm = () => {
    const selected = mockCards.filter(c => selectedIds.has(c.id!));
    onConfirm(selected);
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-6">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full mb-4">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Select cards to add</h1>
        <p className="text-sm text-gray-500 mb-8">
          Choose the cards from your {bankName} account that you want to use with Google Pay.
        </p>

        <div className="space-y-4">
          {mockCards.map((card) => (
            <div 
              key={card.id}
              onClick={() => toggleSelection(card.id!)}
              className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                selectedIds.has(card.id!) ? 'border-blue-600 bg-blue-50 shadow-sm' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-8 rounded flex items-center justify-center text-white text-[10px] font-bold shadow-sm ${
                  card.type === 'visa' ? 'bg-blue-600' : 'bg-red-500'
                }`}>
                  {card.type.toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{card.number}</p>
                  <p className="text-[10px] text-gray-400">Expires {card.expiry}</p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                selectedIds.has(card.id!) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
              }`}>
                {selectedIds.has(card.id!) && (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto p-6 pb-12">
        <button 
          onClick={handleConfirm}
          disabled={selectedIds.size === 0}
          className={`w-full font-semibold py-4 rounded-full shadow-lg transition-all active:scale-95 ${
            selectedIds.size > 0 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {selectedIds.size === 0 
            ? 'Select at least one card' 
            : selectedIds.size === 1 
              ? 'Save the card to Google Account' 
              : `Save ${selectedIds.size} cards to Google Account`
          }
        </button>
      </div>
    </div>
  );
};

export default CardSelectionScreen;
