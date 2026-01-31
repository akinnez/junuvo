import {authRefreshToken, refreshToken} from "@/stores/authStore";

 
 let isRefreshing = false;
 let failedQueue: any[] = [];
 
 const processQueue = (error: any, token: string | null = null) => {
   failedQueue.forEach((prom) => {
     if (error) prom.reject(error);
     else prom.resolve(token);
   });
   failedQueue = [];
 };

 export const handleApiError = async (apiClient:any,error:any) => {
    const originalRequest = error.config;
    const isLoginRequest = originalRequest.url?.includes("/auth/");
    
    if (isLoginRequest && !originalRequest.url?.includes("refresh")) {
      return Promise.reject(error); 
    }

    // Check if error is 401 and we haven't retried yet
    if (error.response?.status === 401) {
    //   if (!authRefreshToken) {
    //     // logout();  
    //     return Promise.reject(error);
    //   }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return apiClient(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
          const deviceId = localStorage.getItem('deviceId');
          if (!deviceId) return Promise.reject(error)
        // IMPORTANT: This call will automatically be encrypted by the request interceptor
        // and decrypted by the response interceptor because it uses apiClient!
        const res = await refreshToken.execute(deviceId as string);
        const { accessToken: newAccess } = res.data;
        localStorage.setItem('token', JSON.stringify(newAccess));
        processQueue(null, newAccess);
        
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        // Logout user or redirect to login
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }