"use client";
import Button from "@/components/Button";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import { useState } from "react";
import TransactionPin from "../transactions/TransactionPin";
import { CircleAlert } from "lucide-react";
import { CustomSelect } from "@/components/Select";
import CardCancelSuccess from "./CancelCardSuccess";
import FreezeCard from "./FreezeCard";

const option: Option[] = [
  { label: "Card Info Leaked", value: "leaked" },
  { label: "Account Compromised", value: "compromised" },
  { label: "Others", value: "others" },
];
export default function CancelCard({ closeModal }: { closeModal: any }) {
  const [reason, setReason] = useState("");
  const [isAccept, setAccept] = useState(false);
  const { closeModal: successModal, openModal } = useModal();

  const handleFreezeCard = () => {
    openModal({
      size: "sm",
      component: <FreezeCard closeModal={successModal} />,
    });
  };

  const handleOpenSettings = () => {
    closeModal();
    openModal({
      size: "sm",
      component: (
        <TransactionPin
          Component={CardCancelSuccess}
          closeModal={successModal}
        />
      ),
    });
  };
  return (
    <div className="space-y-5 px-1">
      <div>
        <CircleAlert size={40} className="text-white fill-[#DD0000] mx-auto" />
        <h3 className="text-center text-sm text-gray-800 font-bold">Warning</h3>
        <span className="text-xs font-medium text-gray-800">
          Your virtual card number 4562 72** **** 3488, if the card is cancelled
        </span>
      </div>

      <div className="bg-[#FFEEEE]">
        <ul className="text-[10px] !py-4 !px-10">
          <li className="list-disc">
            You will{" "}
            <span className="text-[#DD0000] font-bold">not be able</span> to
            perform transactions with this card any more because this action
            cannot be reversed
          </li>
          <li className="list-disc">
            You will be{" "}
            <span className="text-[#DD0000] font-bold">
              charged {formattedAmount("NGN", 1000)}
            </span>{" "}
            for a new card
          </li>
        </ul>
      </div>
      <div>
        <CustomSelect
          id="reason"
          label="Reason for cancelling this card"
          name="reason"
          options={option}
          value={reason}
          onChange={setReason}
          searchable={false}
          buttonClass="!rounded-md"
          placeholder="Select One"
        />
      </div>
      <div className="text-[10px] font-semibold flex items-center gap-2 mt-2">
        <input
          type="checkbox"
          onClick={(e: any) => setAccept(e.target["checked"])}
        />
        <p>
          I have read and agreed to the &#34;SMS Subscription Service Terms&#34;
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <Button
          className="w-full"
          disabled={!isAccept}
          onClick={handleOpenSettings}
        >
          Cancel Card
        </Button>
        <Button
          className="w-full !bg-white !border !border-button !text-button"
          onClick={handleFreezeCard}
        >
          Freeze Card Instead
        </Button>
      </div>
    </div>
  );
}
