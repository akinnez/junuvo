"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import LoanRepay from "@/modals/loans/LoanRepay";

export const LoanDetailsSection = () => {
  const { closeModal, openModal } = useModal();

  const handleOpenSettings = () => {
    openModal({
      title: "Repay Loan",
      size: "md",
      component: <LoanRepay closeModal={closeModal} />,
    });
  };
  return (
    <section className="">
      <Card className="!p-3 !rounded-sm mb-5 !shadow">
        <div>
          <div className="space-y-3">
            <p className="text-xs text-gray-900">Loan Amount</p>
            <h3 className="text-3xl text-tertiary font-bold">
              {formattedAmount("NGN", 200000)}
            </h3>
          </div>
          <div className="border-t border-dashed border-gray-300 h-1 w-full my-3"></div>
          <div className="text-[10px] grid grid-cols-3">
            <div className="">
              <span className="text-gray-600">Interest rate</span>
              <p className="text-tertiary font-semibold my-1.5">9.5%</p>
            </div>
            <div className="">
              <span className="text-gray-600">1st payment</span>
              <p className="text-tertiary font-semibold my-1.5">31 May, 2025</p>
            </div>
            <div className="">
              <span className="text-gray-600">Loan duration</span>
              <p className="text-tertiary font-semibold my-1.5">6 months</p>
            </div>
          </div>
        </div>
      </Card>
      <Card className="!p-3 !rounded-sm !shadow">
        <div className="">
          <h3 className="font-semibold text-xs text-gray-900">
            Net Repayment due 09 Jul, 2025
          </h3>
          <span className="text-gray-600 text-[10px]">
            Please ensure your account is funded ahead of the next repayment
          </span>
          <Button
            size="sm"
            className="!text-button !bg-[#ECF2FE] w-full mt-4"
            onClick={handleOpenSettings}
          >
            Pay early
          </Button>
        </div>
      </Card>
    </section>
  );
};
