
import React, { useState } from 'react';
import { FlowStep, CardData, Bank } from './types';
import StoreFront from './components/StoreFront';
import PurchaseSheet from './components/PurchaseSheet';
import AddCardScreen from './components/AddCardScreen';
import CardDetailsScreen from './components/CardDetailsScreen';
import BankLoadingScreen from './components/BankLoadingScreen';
import BillingAddressScreen from './components/BillingAddressScreen';
import VerifyIntroScreen from './components/VerifyIntroScreen';
import IssuerTermsScreen from './components/IssuerTermsScreen';
import VerifyMethodScreen from './components/VerifyMethodScreen';
import VerifyCodeScreen from './components/VerifyCodeScreen';
import ProcessingScreen from './components/ProcessingScreen';
import SuccessScreen from './components/SuccessScreen';
import ReminderConfirmationScreen from './components/ReminderConfirmationScreen';
import BankLoginScreen from './components/BankLoginScreen';
import CardSelectionScreen from './components/CardSelectionScreen';
import SaveCardsConfirmScreen from './components/SaveCardsConfirmScreen';
import CardVerifiedConfirmScreen from './components/CardVerifiedConfirmScreen';

const App: React.FC = () => {
  const [step, setStep] = useState<FlowStep>(FlowStep.STOREFRONT);
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [addedCards, setAddedCards] = useState<CardData[]>([]);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [tempCards, setTempCards] = useState<CardData[]>([]);
  const [isVerifyingOnly, setIsVerifyingOnly] = useState(false);
  const [isPostPurchaseVerify, setIsPostPurchaseVerify] = useState(false);

  const handleCardRead = (data: CardData) => {
    setIsVerifyingOnly(true);
    setIsPostPurchaseVerify(false);
    setCardData(data);
    setStep(FlowStep.CARD_DETAILS);
  };

  const handleBankSelect = (bank: Bank) => {
    setSelectedBank(bank);
    setStep(FlowStep.BANK_LOGIN);
  };

  const handleCardsSelected = (cards: CardData[]) => {
    setTempCards(cards);
    setStep(FlowStep.SAVE_CONFIRM);
  };

  const handleFinalConfirm = () => {
    setAddedCards(prev => [...prev, ...tempCards]);
    setTempCards([]);
    setStep(FlowStep.PURCHASE_CONFIRM);
  };

  const handleStartVerificationFromSuccess = () => {
    setIsVerifyingOnly(true);
    setIsPostPurchaseVerify(true);
    // Use the first available card if none is active in state
    if (!cardData && addedCards.length > 0) {
      setCardData(addedCards[0]);
    } else if (!cardData) {
       setCardData({
          number: '•••• •••• •••• 4242',
          expiry: '12/28',
          holder: 'Stan Li',
          type: 'visa'
       });
    }
    setStep(FlowStep.VERIFY_INTRO);
  };

  const handleReset = () => {
    setAddedCards([]); 
    setCardData(null);
    setTempCards([]);
    setIsVerifyingOnly(false);
    setIsPostPurchaseVerify(false);
    setStep(FlowStep.STOREFRONT);
  };

  const renderStep = () => {
    switch (step) {
      case FlowStep.STOREFRONT:
        return <StoreFront onPurchase={() => setStep(FlowStep.PURCHASE_CONFIRM)} />;
      
      case FlowStep.PURCHASE_CONFIRM:
        return (
          <PurchaseSheet 
            onClose={() => setStep(FlowStep.STOREFRONT)}
            onAddCard={() => setStep(FlowStep.ADD_CARD_MENU)}
            addedCards={addedCards}
            onCompletePurchase={() => {
              setIsVerifyingOnly(false);
              setIsPostPurchaseVerify(false);
              setStep(FlowStep.FINAL_PROCESSING);
            }}
          />
        );

      case FlowStep.ADD_CARD_MENU:
        return (
          <AddCardScreen 
            onBack={() => setStep(FlowStep.PURCHASE_CONFIRM)}
            onNfcSimulate={() => handleCardRead({
              id: 'nfc-1',
              number: '4242 4242 4242 4242',
              expiry: '05/29',
              holder: 'Stan Li',
              type: 'visa'
            })}
            onBankSelect={handleBankSelect}
          />
        );

      case FlowStep.BANK_LOGIN:
        return (
          <BankLoginScreen 
            bank={selectedBank!} 
            onLogin={() => setStep(FlowStep.CARD_SELECTION)}
            onBack={() => setStep(FlowStep.ADD_CARD_MENU)}
          />
        );

      case FlowStep.CARD_SELECTION:
        return (
          <CardSelectionScreen 
            bankName={selectedBank?.name || 'Bank'} 
            onConfirm={handleCardsSelected}
            onBack={() => setStep(FlowStep.BANK_LOGIN)}
          />
        );

      case FlowStep.SAVE_CONFIRM:
        return (
          <SaveCardsConfirmScreen 
            onConfirm={handleFinalConfirm}
            onBack={() => setStep(FlowStep.CARD_SELECTION)}
            count={tempCards.length}
          />
        );

      case FlowStep.CARD_DETAILS:
        return (
          <CardDetailsScreen 
            card={cardData!} 
            onNext={() => setStep(FlowStep.BANK_LOADING)}
            onBack={() => setStep(FlowStep.ADD_CARD_MENU)}
          />
        );

      case FlowStep.BANK_LOADING:
        return <BankLoadingScreen onComplete={() => setStep(FlowStep.BILLING_ADDRESS)} />;

      case FlowStep.BILLING_ADDRESS:
        return (
          <BillingAddressScreen 
            onContinue={() => setStep(FlowStep.VERIFY_INTRO)}
            onBack={() => setStep(FlowStep.CARD_DETAILS)}
          />
        );

      case FlowStep.VERIFY_INTRO:
        return (
          <VerifyIntroScreen 
            onContinue={() => setStep(FlowStep.ISSUER_TERMS)}
            onRemindLater={() => setStep(FlowStep.REMINDER_CONFIRM)}
          />
        );

      case FlowStep.REMINDER_CONFIRM:
        return (
          <ReminderConfirmationScreen 
            onContinue={() => {
              if (cardData && !addedCards.find(c => c.number === cardData.number)) {
                setAddedCards(prev => [...prev, cardData]);
              }
              setStep(FlowStep.PURCHASE_CONFIRM);
            }} 
          />
        );

      case FlowStep.ISSUER_TERMS:
        return <IssuerTermsScreen onAccept={() => setStep(FlowStep.VERIFY_METHOD)} />;

      case FlowStep.VERIFY_METHOD:
        return <VerifyMethodScreen onContinue={() => setStep(FlowStep.VERIFY_CODE)} />;

      case FlowStep.VERIFY_CODE:
        return <VerifyCodeScreen onComplete={() => {
          if (cardData && !addedCards.find(c => c.number === cardData.number)) {
            setAddedCards(prev => [...prev, cardData]);
          }
          setStep(FlowStep.FINAL_PROCESSING);
        }} />;

      case FlowStep.FINAL_PROCESSING:
        return <ProcessingScreen onComplete={() => {
          if (isVerifyingOnly) {
            setStep(FlowStep.VERIFIED_CONFIRM);
          } else {
            setStep(FlowStep.SUCCESS);
          }
        }} />;

      case FlowStep.SUCCESS:
        return (
          <SuccessScreen 
            onRestart={handleReset} 
            onVerifyCard={handleStartVerificationFromSuccess}
          />
        );

      case FlowStep.VERIFIED_CONFIRM:
        return (
          <CardVerifiedConfirmScreen 
            isPostPurchase={isPostPurchaseVerify}
            onContinue={() => {
              if (isPostPurchaseVerify) {
                handleReset();
              } else {
                setIsVerifyingOnly(false);
                setStep(FlowStep.PURCHASE_CONFIRM);
              }
            }}
          />
        );

      default:
        return <StoreFront onPurchase={() => setStep(FlowStep.PURCHASE_CONFIRM)} />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="relative w-full max-w-md h-[812px] bg-white shadow-2xl rounded-[3rem] overflow-hidden border-[8px] border-black flex flex-col">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-8 py-3 bg-white z-20">
          <span className="text-sm font-semibold">4:12</span>
          <div className="flex gap-1 items-center">
             <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.2l-10-10 10-10 10 10-10 10zM12 18.2l8-8-8-8-8 8 8 8z" /></svg>
             <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10zm0 1.5c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5z" /></svg>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 relative overflow-hidden">
          {renderStep()}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full mb-2 z-50"></div>
      </div>
    </div>
  );
};

export default App;
