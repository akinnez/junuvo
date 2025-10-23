// hooks/useReloadRedirect.ts
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ReloadService } from '@/signal_store/services/reload-service';

 // Assume this path is correct

/**
 * A custom hook that intercepts the browser's hard refresh (beforeunload)
 * and uses an RxJS stream to trigger a Next.js router redirection.
 * * @param {string} redirectPath The path to redirect to upon a reload attempt (e.g., '/').
 */
export const useReloadRedirect = (redirectPath: string = '/') => {
  const router = useRouter();

  // Effect 1: Attach the native 'beforeunload' listener and emit via RxJS
  useEffect(() => {
    const handleBeforeUnload = () => {
      // 1. Emit the event via the RxJS service
      // This makes the event stream available for other subscribers if needed.
      ReloadService.notifyReloadAttempt(); 
      router.push(redirectPath)
      // NOTE: For 'beforeunload', often you want to execute logic *before* the unload.
      // If the redirection MUST happen immediately, you might call router.push(redirectPath) here.
      // However, sticking to the reactive pattern, we separate detection from action.
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the native event listener
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // Empty dependency array: runs once on mount/unmount

  // Effect 2: Subscribe to the RxJS stream and perform the redirection action
  useEffect(() => {
    // 2. Subscribe to the RxJS Observable for the reactive action
    const subscription = ReloadService.onReloadAttempt().subscribe(() => {
      // The action (redirection) is now triggered reactively by the stream
      router.push(redirectPath);
    });

    // Cleanup the RxJS subscription
    return () => {
      subscription.unsubscribe();
    };
  }, [router, redirectPath]); // Depends on router and the target path
};