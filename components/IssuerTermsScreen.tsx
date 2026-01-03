
import React from 'react';

interface Props {
  onAccept: () => void;
}

const IssuerTermsScreen: React.FC<Props> = ({ onAccept }) => {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-6">
        <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full mb-4">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        
        <svg className="w-10 h-10 text-blue-600 mb-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 7v2h19V7l-9.5-6z"/>
        </svg>
        
        <h1 className="text-2xl font-normal text-gray-900 mb-6">Issuer terms</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-20">
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere semper ligula, id porttitor nibh gravida vitae. Integer finibus mauris ex, sit amet efficitur ipsum efficitur at. Proin elementum vulputate neque, finibus ornare urna tristique vitae. Mauris sagittis dignissim dolor a fermentum. Ut ex nisi, fermentum non enim eleifend, vestibulum egestas mi. Sed feugiat quis massa et elementum.</p>
          <p>Aenean nec erat commodo, vehicula urna non, volutpat mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat metus in leo pellentesque feugiat. Phasellus faucibus lobortis eros, id vehicula mi bibendum non.</p>
          <p>Sed vitae scelerisque felis. Morbi id augue non dolor sagittis gravida iaculis vel nunc. Ut sit amet est quis leo consequat suscipit sit amet quis enim. Praesent auctor nunc velit, eu tincidunt diam ullamcorper non. Curabitur scelerisque, risus et tincidunt egestas, augue mauris egestas odio, nec lacinia tortor nisl eu ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Additional banking terms for Visa credit cards apply. Use of this digital credential is subject to your agreement with the issuing financial institution.</p>
        </div>
      </div>

      <div className="p-6 bg-white border-t flex justify-end">
        <button 
          onClick={onAccept}
          className="bg-blue-600 text-white font-medium py-2 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default IssuerTermsScreen;
