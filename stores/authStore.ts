import apiStore from "@/apiClient/apiStore";
import { getDeviceIdentity } from "@/lib/device";
import {
  loginUser as LoginUser,
  logOutUser,
  verifyEmail as VerifyEmail,
  createUser,
  LoginPasscode,
  RefreshToken,
  TogglePasscode,
  createPasscode,
  passwordReset,
  passwordResetInit,
  updatePasscode,
  verifyPassword as VerifyPassword,
} from "@/services/authService";
import {
  CreatePasscode,
  CreateUser,
  LoginCred,
  LoginPasscode as loginPass,
  LoginResponse,
  PasscodeUpdate,
} from "@/types/auth";


export const loginUser = apiStore({
  mutation: (data: LoginCred) => {
    const payload = { ...data, ...getDeviceIdentity() };
    return LoginUser(payload);
  },
  onSuccess: (res: DataResponse<LoginResponse>) => res,
});
export const loginPasscode = apiStore({
  mutation: (creds: loginPass) => LoginPasscode(creds),
  onSuccess: (res: DataResponse<any>) => res,
});

export const create = apiStore({
  mutation: (creds: CreateUser) => createUser(creds),
  onSuccess: (res: Response) => res,
});
export const createPass = apiStore({
  mutation: (creds: CreatePasscode) => createPasscode(creds),
  onSuccess: (res: DataResponse<any>) => res,
});
export const togglePasscode = apiStore({
  mutation: (creds: toggleType) => TogglePasscode(creds),
  onSuccess: (res: DataResponse<any>) => res,
});
export const passcodeUpdate = apiStore({
  mutation: (creds: PasscodeUpdate) => updatePasscode(creds),
  onSuccess: (res: Response) => res,
});

export const verifyEmail = apiStore({
  mutation: (email: string) => VerifyEmail({ email } as any),
  onSuccess: (res: Response) => res,
});
export const initiatePasswordReset = apiStore({
  mutation: (email: string) => passwordResetInit({ email } as any),
  onSuccess: (res: DataResponse<any>) => res,
});
export const resetPassword = apiStore({
  mutation: (email: string) => passwordReset({ email } as any),
  onSuccess: (res: DataResponse<any>) => res,
});
export const verifyPassword = apiStore({
  mutation: (password: string) => VerifyPassword({ password } as any),
  onSuccess: (res: Response) => res,
});
export const refreshToken = apiStore({
  mutation: (device: {deviceName:string, deviceModel:string}) => RefreshToken({ device } as any),
  onSuccess: (res: DataResponse<{accessToken:string}>) => res,
});


export const logoutUser = apiStore({
  mutation: (deviceId: string) => logOutUser({ deviceId }),
  onSuccess: (res: Response) => res,
});

