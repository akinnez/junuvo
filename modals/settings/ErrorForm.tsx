"use client";

import { useModal } from "@/hooks/useModal";
import NonTransactionIssue from "@/views/Settings/Support/NonTransactionIssue";
import TransactionIssue from "@/views/Settings/Support/TransactionIssue";

export default function ErrorForm({
  closeModal,
  type,
}: {
  closeModal: any;
  type: string;
}) {
  const { openModal } = useModal();

  const handleOpenSelfie = () => {
    openModal({
      size: "sm",
      component: <></>,
    });
  };

  return (
    <>
      {type == "transactionIssue" && <TransactionIssue />}
      {type == "nonTransactionIssue" && <NonTransactionIssue />}
    </>
  );
}
