"use client";

import { useModal } from "@/hooks/useModal";
import ErrorForm from "./ErrorForm";

export default function SelectErrorType({ closeModal }: { closeModal: any }) {
  const { openModal } = useModal();

  const handleOpenSelfie = (type: string) => {
    closeModal();
    openModal({
      title: `${
        type == "nonTransactionIssue"
          ? "Other Non Transaction Issue"
          : "Transaction Issue"
      }`,
      size: "md",
      component: <ErrorForm type={type} closeModal={closeModal} />,
    });
  };

  return (
    <div className="space-y-10 mb-5">
      <div
        className="text-gray-700 text-xs font-semibold p-3 border border-gray-50 rounded-sm cursor-pointer hover:border-primary"
        onClick={() => handleOpenSelfie("transactionIssue")}
      >
        Transaction Issue
      </div>
      <div
        className="text-gray-700 text-xs font-semibold p-3 border border-gray-50 rounded-sm cursor-pointer hover:border-primary"
        onClick={() => handleOpenSelfie("nonTransactionIssue")}
      >
        Non transaction issues
      </div>
    </div>
  );
}
