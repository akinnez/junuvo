type Option = {
  value: string;
  // Allows for rich content like icons, styled text, or external image elements
  label: React.ReactNode;
  disabled?: boolean;
  // Optional property for icon or graphic associated with the option
  icon?: string;
};

type DownloadFile = {
  startDate: string;
  endDate: string;
};

interface Response {
  success: boolean;
  message: string;
}

interface DataResponse<T> extends Response {
  data: T;
}
type userType = "CUSTOMER_INDIVIDUAL" | "CUSTOMER_BUSINESS";
type toggleType = "ON" | "OFF";
type accountTier = 
  {
    id: number;
    type: string;
    dailyTransactionLimit: number;
    singleTransactionLimit: number;
  }


  interface VirtualAccount {
    accountName:string,
    accountNumber:string,
    bankName:string
    
  }

  interface Wallet {
  id:number,
  availableBalance: number;
  virtualAccount: VirtualAccount;
  walletNumber: string
};
interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  photo: null;
  isJoinedCardWaitList: boolean;
  isSetupPasscode: boolean;
  isPasscodeSet: boolean;
  isEmailNotificationSet: boolean;
  isPushNotificationSet: boolean;
  isLoginEmailAlertSet: boolean;
  notificationCount: number;
  accountTier: accountTier;
  referralCode: string;
}
