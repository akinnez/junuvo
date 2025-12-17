export interface Transaction {
  transactionId: string;
  beneficiary: string;
  beneficiaryImage: string; // URL or path to the image
  amount: number;
  type: 'Transfer' | 'Deposit' | 'Withdrawal'; // Example types
  createdAt: string; // ISO string or similar
  time: string;
  inOut: 'In' | 'Out'; // To determine the direction (for display/filter)
}