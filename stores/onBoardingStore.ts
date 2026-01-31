import apiStore from "@/api/apiStore";
import { createWallet, InitiateUpdateUserPhoneNumber } from "@/services/onboardingService";
import { DataResponse, Response } from "@/types/auth";
import { CreateWallet } from "@/types/onboarding";

export const kycVerify = apiStore({
  mutation: (payload:CreateWallet) => createWallet(payload),
  onSuccess: (res: Response) => res
});
export const passwordInit = apiStore({
  mutation: (payload:{phone:string}) => InitiateUpdateUserPhoneNumber(payload),
  onSuccess: (res: DataResponse<{phone:string}>) => res
});

