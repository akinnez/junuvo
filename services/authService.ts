import { LoginCred, Response, toggleType, DataResponse, LoginResponse } from "@/types/auth";
import { api } from "../api/api";


 export async function createUser(user:any){
   const res = await api.post(`/users/auth/signup`, user)
   return res.data  
}
export async function loginUser(user:LoginCred):Promise<DataResponse<LoginResponse>>{
      const res = await api.post(`/users/auth/login`, user)
      return res.data
   }
 export async function verifyEmail(email:{email:string}):Promise<DataResponse<any>>{
   const res = await api.post(`/users/auth/verify-email`, email)
   return res.data  
}

   
 export async function passwordResetInit(email:{email:string}):Promise<DataResponse<any>>{
   const res = await api.post(`/users/auth/password-reset-request`, email)
   return res.data
}
 export async function passwordReset(email:{email:string}):Promise<DataResponse<any>>{
   const res = await api.patch(`/users/auth/update-password`, email)
   return res.data
}
 export async function verifyPassword(password:{password:string}):Promise<Response>{
   const res = await api.post(`/users/auth/verify-password`, password)
   return res.data
}
 export async function createPasscode(payload:{password:string,passcode:string}):Promise<DataResponse<any>>{
   const res = await api.post(`/users/auth/passcode`, payload)
   return res.data
}

 export async function updatePasscode(payload:{oldPasscode:string,newPasscode:string}):Promise<Response>{
   const res = await api.patch(`/users/auth/passcode`, payload)
   return res.data
}
 export async function TogglePasscode(toggleType:toggleType):Promise<DataResponse<any>>{
   const res = await api.post(`/users/auth/toggle-passcode`, toggleType)
   return res.data
}
 export async function LoginPasscode(payload:{email:string, passcode:string}):Promise<DataResponse<any>>{
   const res = await api.post(`/users/auth/login-passcode`, payload)
   return res.data
}
 
 export async function logOutUser(deviceId:{deviceId:string}):Promise<Response>{
   const res = await api.post(`/users/auth/logout`, deviceId)
   return res.data
}
 export async function RefreshToken(deviceId:{deviceId:string}):Promise<DataResponse<any>>{
   const res = await api.post(`/users/auth/refresh`, deviceId)
   return res.data
}
 
 export async function decryptPrivateKey(deviceId:{deviceId:string}):Promise<DataResponse<any>>{
   const res = await api.post(`/api/decrypt`, deviceId)
   return res.data
}
 