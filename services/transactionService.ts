import {api} from "@/apiClient/api"
import { Betting } from "@/types/bills/betting";

export async function getProviders() {
  const res = await api.get(`/entertainment/betting/providers`);
  return res.data;
}

export async function getVerifyBettingTransaction(transactionIdentifier:string) {
  const res = await api.get(`entertainment/betting/verify-transaction?transactionIdentifier=${transactionIdentifier}`);
  return res.data;
}

export async function getValidateBettingService(service:string, accountId:string) {
  const res = await api.get(`/entertainment/betting/validate?service=${service}&accountId=${accountId}`);
  return res.data;
}

export async function postBetting(betting:{betting:Betting}) {
  const res = await api.post(`/entertainment/betting/fund-account`, betting);
  return res.data;
}

