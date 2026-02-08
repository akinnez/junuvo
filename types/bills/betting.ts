export interface Betting {
  service: string;
  accountId: string;
  amount: number;
  phoneNumber: string;
  fees: number;
  isPayWithReferralBonus: boolean; //optional
  walletId: number;
  transactionPin: string;
}
