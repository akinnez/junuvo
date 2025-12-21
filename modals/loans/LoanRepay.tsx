"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import Card from "@/components/Card";
import TransactionPin from "../transactions/TransactionPin";
import LoanPaidSuccess from "./LoanPaidSuccess";

export default function LoanRepay({ closeModal }: { closeModal: any }) {
  const { closeModal: successModal, openModal } = useModal();

  const handleOpenSettings = () => {
    closeModal();
    openModal({
      size: "sm",
      component: (
        <TransactionPin Component={LoanPaidSuccess} closeModal={successModal} />
      ),
    });
  };
  return (
    <div className="space-y-5">
      <Card className="!py-3 !px-4 !shadow !rounded-sm">
        <h3 className="text-xs font-semibold text-gray-900">
          How much do you want to repay
        </h3>

        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-4 my-5">
            <Input type="radio" />{" "}
            <span className="text-xs text-gray-600">Next repayment</span>
          </div>
          <div className="text-xs text-tertiary font-bold">
            {formattedAmount("NGN", 34500)}
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Input type="radio" />{" "}
            <span className="text-xs text-gray-600">Full repayment</span>
          </div>
          <div className="text-xs text-tertiary font-bold">
            {formattedAmount("NGN", 120000)}
          </div>
        </div>
      </Card>
      <Card className="!py-3 !px-4 !shadow !rounded-sm">
        <p className="text-xs font-semibold text-gray-900">Pay with</p>
        <div className="mt-3">
          <span className="font-medium text-[10px] text-gray-400">
            Account Balance
          </span>
          <h3 className="font-semibold text-gray-800">
            {formattedAmount("NGN", 128000)}
          </h3>
        </div>
      </Card>

      <Button size="sm" className="w-full mt-5" onClick={handleOpenSettings}>
        Pay Now
      </Button>
    </div>
  );
}
