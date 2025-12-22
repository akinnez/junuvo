import React, { useEffect, useRef, useState } from "react";
import { BehaviorSubject, Subject, from, of } from "rxjs";
import { catchError, switchMap, tap, takeUntil } from "rxjs/operators";
import { Camera, CheckCircle, RefreshCcw, ShieldCheck, X } from "lucide-react";

type CaptureState = "IDLE" | "LOADING" | "STREAMING" | "CAPTURED" | "ERROR";

const SelfieModal = ({
  isOpen,
  onClose,
  onUpload,
}: {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (blob: Blob) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // RxJS Subjects for state management
  const [state, setState] = useState<CaptureState>("IDLE");
  const state$ = useRef(new BehaviorSubject<CaptureState>("IDLE"));
  const destroy$ = useRef(new Subject<void>());

  useEffect(() => {
    const sub = state$.current.subscribe(setState);
    if (isOpen) startCamera();

    return () => {
      sub.unsubscribe();
      stopCamera();
    };
  }, [isOpen]);

  const startCamera = () => {
    state$.current.next("LOADING");

    from(
      navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      })
    )
      .pipe(
        tap((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            state$.current.next("STREAMING");
          }
        }),
        catchError((err) => {
          console.error(err);
          state$.current.next("ERROR");
          return of(null);
        }),
        takeUntil(destroy$.current)
      )
      .subscribe();
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      ctx?.drawImage(video, 0, 0);

      state$.current.next("CAPTURED");
      stopCamera();
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject as MediaStream;
    stream?.getTracks().forEach((track) => track.stop());
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <div>
            <h3 className="text-lg font-bold text-slate-800">
              Identity Verification
            </h3>
            <p className="text-xs text-slate-500">
              Tier 2 Upgrade • Secure Process
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-slate-100"
          >
            <X size={20} className="text-slate-400" />
          </button>
        </div>

        {/* Camera Viewfinder */}
        <div className="relative aspect-square bg-slate-900 overflow-hidden">
          {state === "LOADING" && (
            <div className="flex h-full items-center justify-center text-white">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
            </div>
          )}

          <video
            ref={videoRef}
            autoPlay
            playsInline
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              state === "STREAMING" ? "opacity-100" : "opacity-0 absolute"
            }`}
          />

          <canvas
            ref={canvasRef}
            className={`h-full w-full object-cover ${
              state === "CAPTURED" ? "block" : "hidden"
            }`}
          />

          {/* Fintech "Guide" Overlay */}
          {state === "STREAMING" && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-[4rem] border-2 border-dashed border-white/50 ring-[1000px] ring-black/40" />
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="p-6">
          {state === "STREAMING" && (
            <button
              onClick={captureImage}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white transition-all hover:bg-blue-700 active:scale-[0.98]"
            >
              <Camera size={20} /> Take Selfie
            </button>
          )}

          {state === "CAPTURED" && (
            <div className="flex gap-3">
              <button
                onClick={() => startCamera()}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 font-medium text-slate-600 hover:bg-slate-50"
              >
                <RefreshCcw size={18} /> Retake
              </button>
              <button
                onClick={() => {
                  canvasRef.current?.toBlob(
                    (blob) => blob && onUpload(blob),
                    "image/jpeg",
                    0.9
                  );
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
              >
                <CheckCircle size={18} /> Confirm
              </button>
            </div>
          )}

          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-wider text-slate-400">
            <ShieldCheck size={14} className="text-green-500" />
            End-to-end encrypted verification
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfieModal;
