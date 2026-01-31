import { handleApiError } from "@/lib/apiErrorLib";
import { securityContext } from "@/stores/securityStore";
import axios from "axios";
import { createMessage, encrypt } from "openpgp";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5173',
  
  headers: {
    Accept: "*/*",
  },
  timeoutErrorMessage: "Connection Timeout",
  timeout: 1000 * 60,
});



api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token')
  const keys = securityContext.data.peek();

   if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }

  if (config.data && keys?.publicKey) {
    const jsonString = JSON.stringify(config.data);
    const message = await createMessage({ text: jsonString });
    
   
    const encryptedSigned = await encrypt({
      message,
      encryptionKeys: keys.publicKey,
  })
  config.data = {
    payload: btoa(encryptedSigned as string)
  };

}
  return config;
});

api.interceptors.response.use(
 async (response) => {
    if (response.data) {
    const {payload} = response.data;
    // SEND TO SERVER FOR DECRYPTION {
      const decryptedResponse = await axios.post('/api/decrypt', {
      encryptedData: payload
    });
        response.data = decryptedResponse.data;    
  }
  return  response
  },
     async (error) => await handleApiError(api, error))