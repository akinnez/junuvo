import { useUploadManager } from "@/hooks/useUploadManager";
import "@/app/styles/upload-zone.css";

const UploadComponent = () => {
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
        } ${isUploading ? "uploading" : ""}`}
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
          <div className="upload-content">
            <div className="text-primary ">
              {/* SVG Icon */}
              <svg
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
              </svg>
            </div>
            <div className="flex gap-x-1">
              <h3 className="text-primary text-sm font-semibold">
                Click to upload
              </h3>
              <p className="text-gray-600 text-sm">or drag and drop</p>
            </div>
            <span className="text-gray-400 text-xs text-center">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </span>
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
