"use client";
import React, { useEffect, useRef, useState } from "react";
import { BehaviorSubject, Subject, from, of } from "rxjs";
import { catchError, tap, takeUntil } from "rxjs/operators";
import { Camera, CheckCircle, RefreshCcw } from "lucide-react";

type CaptureState = "IDLE" | "LOADING" | "STREAMING" | "CAPTURED" | "ERROR";

const SelfieModal = ({
  isOpen,
  onUpload,
}: {
  isOpen: boolean;
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

  const handleConfirm = () => {
    canvasRef.current?.toBlob(
      (blob) => blob && onUpload(blob),
      "image/jpeg",
      0.9
    );
  };

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
      ctx?.setTransform(1, 0, 0, 1, 0, 0);
      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);

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
    <div>
      <div className="w-full overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Camera Viewfinder */}
        <div className="relative bg-white overflow-hidden flex justify-center items-center">
          {state === "LOADING" && (
            <div className="flex h-full items-center justify-center text-white">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-button border-t-transparent" />
            </div>
          )}

          <video
            ref={videoRef}
            autoPlay
            playsInline
            className={`h-[215px] w-[215px] transform scale-x-100  object-cover transition-opacity duration-500 rounded-full ${
              state === "STREAMING" ? "opacity-100" : "opacity-0 absolute"
            }`}
          />

          <canvas
            ref={canvasRef}
            className={`h-[215px] w-[215px] object-cover ${
              state === "CAPTURED" ? "block" : "hidden"
            }`}
          />
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
                onClick={handleConfirm}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
              >
                <CheckCircle size={18} /> Confirm
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelfieModal;
