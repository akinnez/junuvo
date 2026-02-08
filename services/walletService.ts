import { api } from "@/apiClient/api";

export async function getBankList() {
  const res = await api.get(`/banking/wallets/banks`);
  return res.data;
}
export async function getWallet() {
  const res = await api.get(`/banking/wallets`);
  return res.data;
}

export async function getVirtualAccount() {
  const res = await api.get(`/banking/wallets/virtual-account`);
  return res.data;
}