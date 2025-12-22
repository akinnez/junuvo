"use client";
import Button from "@/components/Button";
import { useState } from "react";
import TransactionPin from "../transactions/TransactionPin";
import { useModal } from "@/hooks/useModal";
import SMSSubSuccess from "./SMSSubSuccess";

export default function SMSSubConfirm({ closeModal }: { closeModal: any }) {
  const [isAccept, setAccept] = useState(false);

  const { closeModal: successModal, openModal } = useModal();

  const handleOpenSettings = () => {
    closeModal();
    openModal({
      size: "sm",
      component: (
        <TransactionPin Component={SMSSubSuccess} closeModal={successModal} />
      ),
    });
  };
  return (
    <div className=" space-y-2">
      <h3 className="text-lg font-bold text-gray-900">Subscribe?</h3>
      <span className="text-gray-600 text-sm">
        Are you sure you want to subscribe to the SMS service?
      </span>
      <div className="text-[10px] font-semibold flex items-center gap-2 mt-2">
        <input
          type="checkbox"
          onClick={(e: any) => setAccept(e.target["checked"])}
        />
        <p>
          I have read and agreed to the &#34;SMS Subscription Service Terms&#34;
        </p>
      </div>
      <div className="my-5 space-y-2">
        <Button
          size="sm"
          className="w-full !bg-[#F5F5F5] !text-[#353D48]"
          onClick={closeModal}
        >
          CANCEL
        </Button>
        <Button
          size="sm"
          className="w-full"
          onClick={handleOpenSettings}
          disabled={!isAccept}
        >
          YES, PROCEED
        </Button>
      </div>
    </div>
  );
}
