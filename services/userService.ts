import { api } from "../api/api";

export async function getUser(id: string) {
  const res = await api.get(`/user/${id}`);
  return res.data;
}

export async function createTransactionPin(pin: { pin: string }) {
  const res = await api.post(`/users/accounts/profiles/pin`, pin);
  return res.data;
}
export async function updateUser(id: string, user: Partial<any>) {
  return await api.patch(`/user/${id}`, user);
}
export async function removeUser(id: string) {
  return await api.delete(`/user/${id}`);
}
