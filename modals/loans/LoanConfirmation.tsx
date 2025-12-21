"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import { useState } from "react";
import LoanAcceptSuccess from "./LoanAcceptSuccess";

export default function LoanConfirmation({ closeModal }: { closeModal: any }) {
  const [isAccept, setAccept] = useState(false);

  const { closeModal: successModal, openModal } = useModal();

  const handleOpenSettings = () => {
    sessionStorage.setItem("set_loan", JSON.stringify(true));
    closeModal();
    openModal({
      size: "sm",
      component: <LoanAcceptSuccess closeModal={successModal} />,
    });
  };
  return (
    <div className="space-y-5">
      <div className="flex justify-between text-[10px]">
        <p className="text-gray-600">Tenure</p>
        <p className="font-semibold text-tertiary">
          6 Installments for 180 days
        </p>
      </div>
      <div className="flex justify-between text-[10px]">
        <p className="text-gray-600">Total Repayment Amount</p>
        <p className="font-semibold text-tertiary">
          {formattedAmount("NGN", 1000000)}
        </p>
      </div>
      <div className="flex justify-between text-[10px]">
        <p className="text-gray-600">Your First Repayment Date</p>
        <p className="font-semibold text-tertiary">31 May, 2025</p>
      </div>
      <div className="text-[10px] font-semibold flex items-center gap-4 px-2">
        <Input
          type="checkbox"
          onClick={(e: any) => setAccept(e.target["checked"])}
        />
        <p>
          I agree to <span className="text-button">Junuvo Loan Contract</span>
        </p>
      </div>

      <Button
        size="sm"
        className="w-full my-5"
        disabled={!isAccept}
        onClick={handleOpenSettings}
      >
        Confirm
      </Button>
    </div>
  );
}
