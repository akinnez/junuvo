import { useSyncExternalStore } from "react";

export function useLocalStorage() {
  // 1. Subscribe to both standard 'storage' and our custom 'local-update' event
  const subscribe = (callback: any) => {
    window.addEventListener("storage", callback);
    window.addEventListener("local-update", callback);
    return () => {
      window.removeEventListener("storage", callback);
      window.removeEventListener("local-update", callback);
    };
  };

  // 2. Map the browser value to React

  // Default for SSR

  const getFromLocal = (key: string, defaultValue?: any) => {
    const getServerSnapshot = () => defaultValue;
    const getSnapshot = () => localStorage.getItem(key);
    const value = useSyncExternalStore(
      subscribe,
      getSnapshot,
      getServerSnapshot,
    );

    return value ? JSON.parse(value) : "";
  };

  // 3. Helper to update storage and notify the app
  const setLocalStorage = (key: string, newValue: any) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    window.dispatchEvent(new Event("local-update"));
  };

  const clearItemLocal = (key: string) => {
    localStorage.removeItem(key);
    window.dispatchEvent(new Event("local-update"));
  };
  
  return { getFromLocal, setLocalStorage, clearItemLocal };
}
