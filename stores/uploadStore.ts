import { signal, action, asReadonly, computed } from "nabd";

// 1. Define the State
const _isDragOver = signal(false);
const _isUploading = signal(false);
const _fileName = signal<string | null>(null);

// 2. Export Read-only versions for UI
export const isDragOver = asReadonly(_isDragOver);
export const isUploading = asReadonly(_isUploading);
export const uploadedFileName = asReadonly(_fileName);

// 3. Actions
export const setDrag = action((active: boolean) => {
  _isDragOver.set(active);
});

export const handleUpload = action(async (file: File) => {
  _isDragOver.set(false);
  _isUploading.set(true);
  _fileName.set(file.name);

  try {
    // Replace with your real API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(`Successfully uploaded: ${file.name}`);
  } catch (error) {
    console.error("Upload failed", error);
    _fileName.set(null);
  } finally {
    _isUploading.set(false);
  }
});

export const isFileReady = computed(() => {
  const name = _fileName.get();
  return name && (name.endsWith('.pdf') || name.endsWith('.jpg'));
});