

//payloads type for authentication operations


export interface LoginData extends LoginCred {
  deviceToken?: string;
  deviceId: string;
  deviceModel: string;
  deviceName: string;
}

export type LoginCred = {
  email: string;
  password: string;
};
export type LoginPasscode = {
  email: string;
  passcode: string;
};

export type Session = {
  token: string | null;
  isAuthenticated: boolean;
};

export type CreatePasscode = {
  password: string;
  passcode: string;
};
export type CreateUser = {
  firstName: string;
  lastName: string;
  code: string;
  password: string;
  userType: userType;
  referralCode?: string; //optional
};

//Response type for authentication actions
export interface PasscodeUpdate {
  oldPasscode: string;
  newPasscode: string;
}
export interface LoginResponse {
    accessToken: string;
    meta: {
      userType: userType;
      isWalletCreated: boolean;
      isSetupPasscode: boolean;
      isPasscodeSet: boolean;
      isPhoneVerified: boolean;
      isTransactionPinSet: boolean;
      role: {
        name: string;
        permissions: [];
      };
    };
  }
