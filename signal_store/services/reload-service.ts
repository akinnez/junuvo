// services/ReloadService.ts

import { Subject, Observable } from 'rxjs';

// The Subject acts as both an Observable and an Observer.
// We use a Subject<void> since we only care about the event happening, not its value.
const reloadSubject = new Subject<void>();

export const ReloadService = {
  /**
   * Emits a notification when a page reload is attempted.
   */
  notifyReloadAttempt: () => {
    reloadSubject.next();
  },

  /**
   * Returns an Observable to subscribe to reload attempts.
   * @returns {Observable<void>}
   */
  onReloadAttempt: (): Observable<void> => {
    return reloadSubject.asObservable();
  },
};