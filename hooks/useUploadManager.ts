import { useRef, useCallback } from 'react';
import { useSignal } from 'nabd';
import * as uploadStore from '@/stores/uploadStore';

export const useUploadManager = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Bind UI to Pulse signals
  const isDragOver = useSignal(uploadStore.isDragOver);
  const isUploading = useSignal(uploadStore.isUploading);
  const uploadedFileName = useSignal(uploadStore.uploadedFileName);

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    uploadStore.setDrag(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    uploadStore.setDrag(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      uploadStore.handleUpload(files[0]);
    }
  }, []);

  const onFileSelected = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      uploadStore.handleUpload(files[0]);
      e.target.value = ''; // Reset for same-file re-selection
    }
  }, []);

  return {
    isDragOver,
    isUploading,
    uploadedFileName,
    fileInputRef,
    onDragOver,
    onDragLeave,
    onDrop,
    onFileSelected,
    onClick: () => fileInputRef.current?.click(),
  };
};