
import React, { useState } from 'react';

interface Props {
  onContinue: () => void;
}

const VerifyMethodScreen: React.FC<Props> = ({ onContinue }) => {
  const [selected, setSelected] = useState('text');

  return (
    <div className="h-full flex flex-col p-6 bg-white">
      <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full mb-4 w-fit">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>

      <div className="mb-8">
        <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-[10px] font-bold mb-4 shadow-sm">VISA</div>
        <h1 className="text-2xl font-normal text-gray-900 mb-2">Verify your card</h1>
        <p className="text-sm text-gray-600">Choose how you'll let your bank know it's you. It's quick and helps protect you against fraud.</p>
      </div>

      <div className="space-y-6">
        <label className="flex items-center gap-4 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
          <input 
            type="radio" 
            name="verify" 
            checked={selected === 'text'} 
            onChange={() => setSelected('text')}
            className="w-5 h-5 text-blue-600"
          />
          <div>
            <p className="font-medium text-gray-900">Get a text</p>
            <p className="text-xs text-gray-500">•••• •••• 4567 (Standard rates may apply)</p>
          </div>
        </label>

        <label className="flex items-center gap-4 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
          <input 
            type="radio" 
            name="verify" 
            checked={selected === 'email'} 
            onChange={() => setSelected('email')}
            className="w-5 h-5 text-blue-600"
          />
          <div>
            <p className="font-medium text-gray-900">Get an email</p>
            <p className="text-xs text-gray-500">s••••••••6@gmail.com</p>
          </div>
        </label>

        <label className="flex items-center gap-4 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
          <input 
            type="radio" 
            name="verify" 
            checked={selected === 'call'} 
            onChange={() => setSelected('call')}
            className="w-5 h-5 text-blue-600"
          />
          <div>
            <p className="font-medium text-gray-900">Get a phone call</p>
            <p className="text-xs text-gray-500">•••• •••• 4567</p>
          </div>
        </label>
        
        <button className="text-blue-600 text-sm font-medium pt-2 pl-2">More options</button>
      </div>

      <div className="mt-auto pt-8">
        <p className="text-[10px] text-gray-400 mb-6">Need to update your info? Contact your bank.</p>
        <div className="flex justify-end">
          <button 
            onClick={onContinue}
            className="bg-blue-600 text-white font-medium py-3 px-10 rounded-full hover:bg-blue-700 transition-colors shadow-sm"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyMethodScreen;
