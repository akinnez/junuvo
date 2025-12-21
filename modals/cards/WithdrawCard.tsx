"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import { useMemo, useState } from "react";
import TransactionPin from "../transactions/TransactionPin";
import CardFundingSuccess from "./CardFundingSuccess";
import Image from "next/image";

export default function WithdrawCard({ closeModal }: { closeModal: any }) {
  const [convertAmount, setConvertAmount] = useState("1");
  const amountInDollar = useMemo(() => {
    const oneDollar = 1464;
    return Number(convertAmount) / oneDollar;
  }, [convertAmount]);

  const { closeModal: successModal, openModal } = useModal();

  const handleOpenSettings = () => {
    closeModal();
    openModal({
      size: "sm",
      component: (
        <TransactionPin
          Component={CardFundingSuccess}
          closeModal={successModal}
        />
      ),
    });
  };
  return (
    <div className="space-y-5 px-1">
      <div>
        <div>
          <div className="bg-primary p-4 rounded-md text-white font-bold">
            <span className="text-[8px] ">CARD BALANCE</span>
            <h4>{formattedAmount("NGN", 0)}</h4>
          </div>
          <Image
            src={"/images/card/visa-logo.png"}
            alt="cardType"
            width={58}
            height={18}
          />
        </div>
        <div className="bg-[#ECFFE0] px-5 py-2 flex justify-between">
          <h4 className=" text-xs font-bold text-tertiary">Current Rate</h4>
          <span className="text-xs font-semibold text-button">
            {formattedAmount("USD", 1)} - {formattedAmount("NGN", 1464)}
          </span>
        </div>
      </div>
      <Input
        id="debitAmount"
        name="debitAmount"
        label="Amount to be debited (NGN)"
        placeholder="Enter amount"
        onChange={(e) => setConvertAmount(e.target.value)}
        className="text-xs"
      />
      <div>
        <Input
          disabled
          id="creditAmount"
          name="creditAmount"
          label="Amount to be credited (USD)"
          value={formattedAmount("USD", amountInDollar)}
          className="text-xs"
        />
        <div className="bg-[#FFE9E9] px-5 py-2 flex justify-between">
          <h4 className=" text-xs font-bold text-tertiary">Fees</h4>
          <span className="text-xs font-semibold text-button">
            {formattedAmount("NGN", 20)}
          </span>
        </div>
      </div>
      <div>
        <Button size="sm" className="w-full" onClick={handleOpenSettings}>
          Proceed
        </Button>
      </div>
    </div>
  );
}
