
import React from 'react';

interface Props {
  onPurchase: () => void;
}

const StoreFront: React.FC<Props> = ({ onPurchase }) => {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex-1 overflow-y-auto p-6 pb-32">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            S
          </div>
          <div>
            <h1 className="text-xl font-bold">Starry Night Pro</h1>
            <p className="text-gray-500 text-sm">Design & Art • 4.8★</p>
          </div>
        </div>

        <img 
          src="https://picsum.photos/seed/app/800/450" 
          alt="App Preview" 
          className="w-full h-48 object-cover rounded-2xl mb-6 shadow-sm"
        />

        <div className="space-y-4">
          <h2 className="text-lg font-bold">About this app</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Unlock the secrets of the cosmos with Starry Night Pro. Professional astronomy tools for your mobile device. Unlock high-resolution star maps, real-time satellite tracking, and deep-space photography guides.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Join a community of over 5 million stargazers and amateur astronomers.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 pb-12 bg-white border-t border-gray-100 z-10">
        <button 
          onClick={onPurchase}
          className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-4 rounded-full transition-all active:scale-95 shadow-lg"
        >
          Buy for $4.99
        </button>
      </div>
    </div>
  );
};

export default StoreFront;
