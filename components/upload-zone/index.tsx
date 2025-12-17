import { useUploadManager } from "@/hooks/useUploadManager";
import "@/app/styles/upload-zone.css";
import React from "react";
import { CloudUpload } from "lucide-react";

const UploadComponent = ({
  children,
  className,
  flex_row = false,
}: {
  children: React.ReactNode;
  className?: string;
  flex_row?: boolean;
}) => {
  const {
    isDragOver,
    isUploading,
    uploadedFileName,
    fileInputRef,
    onDragOver,
    onDragLeave,
    onDrop,
    onClick,
    onFileSelected,
  } = useUploadManager();

  return (
    <div className="tab-content">
      <div
        className={`border-2 border-dashed border-gray-300 rounded-2xl py-12 px-6 text-center cursor-pointer transition-all duration-300 ease-linear bg-secondary min-h-[280px] flex flex-col justify-center items-center hover:bg-secondary/45 hover:-translate-y-0.5  ${
          isDragOver ? "drag-over" : ""
        } ${isUploading ? "uploading" : ""} ${className}`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={onClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="file-input hidden"
          onChange={onFileSelected}
        />

        {/* Conditional rendering based on state */}
        {!isUploading && (
          <div className={`upload-content ${flex_row ? "!flex-row" : ""}  `}>
            <div className="text-gray-600 h-14 w-14 rounded-full bg-gray-100 flex justify-center items-center">
              {/* SVG Icon */}
              <CloudUpload className="h-6.5 w-6.5" />
              {/* <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17,8 12,3 7,8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg> */}
            </div>
            <div>{children}</div>
          </div>
        )}

        {isUploading && (
          <div className="upload-loading">
            {/* Simple CSS loading spinner placeholder */}
            <div className="loading-spinner"></div>
            <p>Uploading **{uploadedFileName}**...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadComponent;
