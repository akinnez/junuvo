"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import BuyStockSuccess from "./BuyStockSuccess";

export default function BuyStock({ closeModal }: { closeModal: any }) {
  const { openModal } = useModal();
  const handleClick = () => {
    closeModal();
    openModal({
      size: "sm",
      component: <BuyStockSuccess closeModal={closeModal} />,
    });
  };

  return (
    <div className="space-y-7">
      <div>
        <Input
          id="amount"
          name="amount"
          label="Amount"
          placeholder="Enter Amount"
        />
        <span className="text-button text-xs">
          Market Price: {formattedAmount("USD", 96.56)}
        </span>
      </div>
      <Button className="w-full" onClick={handleClick}>
        Next
      </Button>
    </div>
  );
}
