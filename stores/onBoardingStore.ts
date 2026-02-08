import apiStore from "@/apiClient/apiStore";
import { createWallet, InitiateUpdateUserPhoneNumber, updateUserPhoneNumber } from "@/services/onboardingService";
import { CreateWallet } from "@/types/onboarding";
import { user } from "./userStore";

export const kycVerify = apiStore({
  mutation: (payload:CreateWallet) => createWallet(payload),
  optimistic(data, current) {
    return {...current, dateOfBirth: data.dateOfBirth, phone:data.phone
    }
  },
  onSuccess: (res: Response) => res
}, user);

export const passwordInit = apiStore({
  mutation: (payload:{phone:string}) => InitiateUpdateUserPhoneNumber(payload),
  onSuccess: (res: DataResponse<{phone:string}>) => res
}); 

export const confirmPhoneVerify = apiStore({
  mutation: (payload:{code:string}) => updateUserPhoneNumber(payload),
  onSuccess: (res: DataResponse<any>) => res
});