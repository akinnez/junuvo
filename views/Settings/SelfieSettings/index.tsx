"use client";
import React, { useEffect, useRef } from "react";
import Button from "@/components/Button";
import { useSignal } from "nabd";
import * as cameraStore from "@/stores/cameraStore";

const SelfieModal = ({
  isOpen,
  onUpload,
}: {
  isOpen: boolean;
  onUpload: (blob: Blob) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subscribe to Pulse state
  const state = useSignal(cameraStore.captureState);

  useEffect(() => {
    if (isOpen) {
      cameraStore.startCamera().then((stream) => {
        if (stream && videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });
    }
    return () => cameraStore.stopCamera();
  }, [isOpen]);

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);

      cameraStore.setCaptured();
    }
  };

  const handleConfirm = () => {
    canvasRef.current?.toBlob(
      (blob) => blob && onUpload(blob),
      "image/jpeg",
      0.9
    );
  };

  if (!isOpen) return null;

  return (
    <div className="w-full overflow-hidden rounded-3xl bg-white shadow-2xl">
      <div className="relative h-[250px] flex justify-center items-center bg-gray-50">
        {state === "LOADING" && (
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
        )}

        {/* Viewfinder */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className={`h-[215px] w-[215px] object-cover rounded-full transition-opacity duration-500 ${
            state === "STREAMING" ? "opacity-100" : "opacity-0 absolute"
          }`}
        />

        {/* Captured Result */}
        <canvas
          ref={canvasRef}
          className={`h-[215px] w-[215px] object-cover rounded-full ${
            state === "CAPTURED" ? "block" : "hidden"
          }`}
        />

        {state === "ERROR" && (
          <p className="text-red-500 text-sm">Failed to access camera</p>
        )}
      </div>

      <div className="p-6">
        {state === "STREAMING" && (
          <Button onClick={captureImage} className="w-full">
            Capture Selfie
          </Button>
        )}

        {state === "CAPTURED" && (
          <div className="flex gap-4">
            <Button
              onClick={() => cameraStore.startCamera()}
              className="w-full !bg-white !text-indigo-600 border border-indigo-600"
            >
              Retake
            </Button>
            <Button onClick={handleConfirm} className="w-full">
              Proceed
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelfieModal;
