export interface Airtime {
  amount: number;
  vtuNumber: string;
  billerProviderSlug: string;
  billerProductSlug: string;
  serviceCharge: number;
  isPayWithReferralBonus?: boolean; //optional
  walletId: number;
  transactionPin: string;
}

export interface Data {
  amount: number;
  vtuNumber: string;
  billerProviderSlug: string;
  billerProductSlug: string;
  serviceCharge: number;
  dataCode: string;
  packageName: string;
  isPayWithReferralBonus?: boolean; //optional
  walletId: number;
  transactionPin: string;
}
