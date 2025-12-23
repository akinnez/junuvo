"use client";
import SelfieModal from "@/views/Settings/SelfieSettings";
import { useState } from "react";

export default function SelfieView({ closeModal }: { closeModal: any }) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleSelfieCapture = async (imageBlob: Blob) => {
    setIsModalOpen(false);

    try {
      // 1. Convert Blob to File for FormData
      const file = new File([imageBlob], "selfie.jpg", { type: "image/jpeg" });
      const formData = new FormData();
      formData.append("selfie", file);
      console.log(file);
      closeModal();
      // 2. Send to Server Action or API
      //   const result = await uploadSelfieAction(formData);

      //   if (result.success) {
      //     setIsComplete(true);
      //   }
    } catch (error) {
      console.error("Upload failed", error);
      alert("Verification failed. Please try again.");
    } finally {
      //   setIsUploading(false);
    }
  };
  return <SelfieModal isOpen={isModalOpen} onUpload={handleSelfieCapture} />;
}
