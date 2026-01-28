import { signal, action, asReadonly } from "nabd";

export type CaptureState = "IDLE" | "LOADING" | "STREAMING" | "CAPTURED" | "ERROR";

// Internal Signals
const _state = signal<CaptureState>("IDLE");
const _stream = signal<MediaStream | null>(null);
// New signals for upload state
const _uploadProgress = signal(0);
export const uploadProgress = asReadonly(_uploadProgress);

// Public State
export const captureState = asReadonly(_state);

export const startCamera = action(async () => {
  _state.set("LOADING");
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user",
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
    });
    _stream.set(stream);
    _state.set("STREAMING");
    return stream;
  } catch (err) {
    console.error("Camera Access Error:", err);
    _state.set("ERROR");
    return null;
  }
});

export const stopCamera = action(() => {
  const stream = _stream.get();
  stream?.getTracks().forEach((track) => track.stop());
  _stream.set(null);
  if (_state.get() !== "CAPTURED") {
    _state.set("IDLE");
  }
});

export const setCaptured = action(() => {
  _state.set("CAPTURED");
  stopCamera();
});



// export const uploadSelfie = action(async (blob: Blob) => {
//   _uploadProgress.set(0);

//   const formData = new FormData();
//   formData.append("file", blob, "selfie.jpg");

//   try {
//     const response = await api.post("/auth/verify-identity", formData, {
//       onUploadProgress: (event) => {
//         const percent = Math.round((event.loaded * 100) / (event.total || 1));
//         _uploadProgress.set(percent);
//       },
//     });
//     return response.data;
//   } catch (error) {
//     _uploadProgress.set(0);
//     throw error;
//   }
// });