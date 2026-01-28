import { useSyncExternalStore } from "react";

export function useSessionStorage() {
  // 1. Subscribe to both standard 'storage' and our custom 'local-update' event
  const subscribe = (callback: any) => {
    window.addEventListener("storage", callback);
    window.addEventListener("session-update", callback);
    return () => {
      window.removeEventListener("storage", callback);
      window.removeEventListener("session-update", callback);
    };
  };

  // 2. Map the browser value to React

   // Default for SSR

  const getFromSession = (key:string, defaultValue?:any) => {
    const getServerSnapshot = () => defaultValue;
    const getSnapshot = () => sessionStorage.getItem(key);
    const value = useSyncExternalStore(
      subscribe,
      getSnapshot,
      getServerSnapshot,
    );

    return value ? JSON.parse(value) : '';
  };

  // 3. Helper to update storage and notify the app
  const setSession = (key:string, newValue: any) => {
    sessionStorage.setItem(key, JSON.stringify(newValue));
    window.dispatchEvent(new Event("session-update"));
  };

  return {getFromSession, setSession};
}
