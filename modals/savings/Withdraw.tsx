"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { formattedAmount } from "@/lib/currency-formatter";
import WithDrawalSuccess from "./WithdrawalSuccess";
import { useModal } from "@/hooks/useModal";

export default function WithDrawal({ closeModal: modal }: { closeModal: any }) {
  const { openModal, closeModal } = useModal();

  const handleOpenSettings = () => {
    modal();
    openModal({
      size: "md",
      component: <WithDrawalSuccess closeModal={closeModal} />,
    });
  };
  return (
    <div className="space-y-5">
      <p className="text-xs text-[#575555]">
        How much would you like to withdraw from the savings
      </p>
      <div className="space-y-5">
        <div className="py-3 px-5 border border-dashed border-gray-100 rounded-2xl">
          <div className="space-y-5">
            <h4 className="font-semibold text-xs text-gray-800">From</h4>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-gray-400">Main Account</span>
              <h2 className="text-xl text-gray-800 font-bold">
                {formattedAmount("NGN", 230000)}
              </h2>
            </div>
          </div>
        </div>
        <div className="py-3 px-5 border border-dashed border-gray-100 rounded-2xl">
          <div className="space-y-5">
            <h4 className="font-semibold text-xs text-gray-800">To</h4>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-gray-400">Smart Savings</span>
              <h2 className="text-xl text-gray-800 font-bold">
                {formattedAmount("NGN", 120000)}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Input
        label="How much are you withdrawing"
        placeholder="Enter your amount"
      />
      <Button className="w-full" onClick={handleOpenSettings}>
        Withdraw
      </Button>
    </div>
  );
}
