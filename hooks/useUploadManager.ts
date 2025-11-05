// /hooks/useUploadManager.js
import { useState, useRef, useEffect, useCallback } from 'react';
import { Subject, BehaviorSubject, scan, tap, merge, of } from 'rxjs';
import { switchMap, delay } from 'rxjs/operators';

// Initial state for the combined upload process
const initialState = {
  isDragOver: false,
  isUploading: false,
  uploadedFileName: null,
};

// Custom Hook: useUploadManager
export const useUploadManager = () => {
  // Subjects for external events
  const dragEnter$ = new Subject();
  const dragLeave$ = new Subject();
  const drop$ = new Subject();
  const fileSelect$ = new Subject();

  // State for the component to consume
  const [uploadState, setUploadState] = useState(initialState);
  const fileInputRef = useRef<HTMLInputElement>(null);

  
  useEffect(() => {
    // --- RxJS Logic for State Management ---

    // 1. Drag/Drop State Changes
    const dragOverChanges$ = merge(
      dragEnter$.pipe(tap(() => console.log('Drag Enter'))),
      drop$.pipe(tap(() => console.log('Drop'))),
      dragLeave$.pipe(tap(() => console.log('Drag Leave')))
    ).pipe(
      scan((acc, eventType) => {
        // Simple state machine for isDragOver
        if (eventType === dragEnter$) return { ...acc, isDragOver: true };
        if (eventType === dragLeave$ || eventType === drop$) return { ...acc, isDragOver: false };
        return acc;
      }, initialState)
    );

    // 2. File Selection & Mock Upload Process
    const uploadProcess$ = merge(drop$, fileSelect$).pipe(
      // Get the file from the event
      switchMap((event:any) => {
        const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        if (!files || files.length === 0) return of(null);
        const file = files[0];

        // Start Uploading State
        const startState = { isUploading: true, uploadedFileName: file.name, isDragOver: false };

        // Simulate a network upload (e.g., replace with an actual fetch/axios call that returns an Observable)
        const mockUpload$ = of(file.name).pipe(delay(2000)); // 2-second mock upload

        // End Uploading State
        const endState$ = mockUpload$.pipe(
          switchMap(() => of({ isUploading: false, uploadedFileName: file.name, isDragOver: false }))
        );

        return merge(of(startState), endState$);
      })
    );

    // 3. Combine All State Streams
    const combinedState$ = merge(dragOverChanges$, uploadProcess$).pipe(
      // Keep only the latest, relevant state
      scan((acc, curr) => ({
        ...acc,
        ...curr,
      }), initialState)
    );

    // Subscribe to the final combined state and update React state
    const subscription = combinedState$.subscribe(setUploadState);

    return () => {
      // Cleanup subscription on unmount
      subscription.unsubscribe();
    };
  }, []); // Empty dependency array means this runs once on mount

  // Event Handlers (dispatching to Subjects)
  const onDragOver = useCallback((e:any) => {
    e.preventDefault(); // Necessary to allow drop
    dragEnter$.next(dragEnter$); // Treat dragover as dragenter for the active state
  }, [dragEnter$]);

  const onDragLeave = useCallback((e:any) => {
    e.preventDefault();
    dragLeave$.next(dragLeave$);
  }, [dragLeave$]);

  const onDrop = useCallback((e:any) => {
    e.preventDefault();
    drop$.next(e);
  }, [drop$]);

  const onClick = useCallback(() => {
   if (fileInputRef.current) {
            fileInputRef.current?.click();
        }
  }, []);

  const onFileSelected = useCallback((e:any) => {
    fileSelect$.next(e);
    // Clear the input value so the same file can be selected again
    if (fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  }, [fileSelect$]);


  return {
    ...uploadState,
    fileInputRef,
    onDragOver,
    onDragLeave,
    onDrop,
    onClick,
    onFileSelected,
  };
};