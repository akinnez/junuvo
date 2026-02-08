import { api } from "../apiClient/api"

export async function InitiateUpdateUserPhoneNumber(phone:{phone:string}){
   const res = await api.post(`/users/auth/initiate-phone-verification`, phone)
   return res.data
}
 export async function updateUserPhoneNumber(code:{code:string}){
   const res = await api.post(`/users/auth/verify-phone`, code)
   return res.data
}
 export async function createWallet(payload:{bvn:string, phone:string|number, dateOfBirth:string}){
   const res = await api.post(`/banking/wallets`, payload)
   return res.data
}