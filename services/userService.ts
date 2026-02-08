import { api } from "../apiClient/api";

export async function getUser() {
  const res = await api.get(`/users/accounts/profiles`);
  return res.data;
}

export async function verifyTransactionPin(pin: { pin: string }) {
  const res = await api.post(`/users/accounts/profiles/verify-pin`, pin);
  return res.data;
}
export async function updatePassword(payload: { currentPassword: string; newPassword: string }) {
  const res = await api.patch(`/users/accounts/profiles/update-password`, payload);
  return res.data;
}
export async function uploadImage(image: { imageFile: string }) {
  const res = await api.patch(`/users/accounts/profiles/upload-image`, image);
  return res.data;
}

export async function removeUser(password: {password:string}) {
  const res = await api.delete(`/users/accounts/profiles`, { data: password });
  return res.data;
}
