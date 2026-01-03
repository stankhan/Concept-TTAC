
import { Bank } from './types';

export const BANKS: Bank[] = [
  { id: 'chase', name: 'Chase', logo: 'https://logo.clearbit.com/chase.com' },
  { id: 'bofa', name: 'Bank of America', logo: 'https://logo.clearbit.com/bankofamerica.com' },
  { id: 'wells', name: 'Wells Fargo', logo: 'https://logo.clearbit.com/wellsfargo.com' },
  { id: 'citi', name: 'Citi', logo: 'https://logo.clearbit.com/citi.com' },
  { id: 'capitalone', name: 'Capital One', logo: 'https://logo.clearbit.com/capitalone.com' },
];

export const MOCK_CARD: any = {
  number: '•••• •••• •••• 4242',
  expiry: '12/28',
  holder: 'Stan Li',
  type: 'visa'
};
