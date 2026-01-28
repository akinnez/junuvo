"use client";
import PageLayout from "@/components/PageLayout";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import PostPaidSuccess from "@/modals/bills/electricity/PostPaidSuccess";
import PrePaidSuccess from "@/modals/bills/electricity/PrepaidSuccess";
import TransactionPin from "@/modals/transactions/TransactionPin";
import SummaryOverview from "@/views/SummaryOverview";
import { useEffect, useState } from "react";

const data = {
  beneficiary: "Akano Mary",
  meterType: "Prepaid",
  meterNo: "1234567890",
  amount: 850,
  fees: 5,
  currencyType: "NGN",
  createdAt: "2024-06-15T10:30:00Z",
};

function BillSummary() {
  const [type, setType] = useState("prepaid");

  const { openModal, closeModal } = useModal();
  useEffect(() => {
    const getType = sessionStorage.getItem("bill_type");
    if (getType) {
      return setType(getType);
    }
    setType("prepaid");
  });

  const handleOpenSettings = () => {
    openModal({
      size: "sm",
      component: (
        <TransactionPin
          closeModal={closeModal}
          Component={type == "prepaid" ? PrePaidSuccess : PostPaidSuccess}
        />
      ),
    });
  };
  return (
    <PageLayout title="Summary" description="Review your transaction details">
      <SummaryOverview
        amount={data.amount.toString()}
        createdAt={data.createdAt}
        destination={`Electricity`}
        currency="NGN"
        className="!p-0"
        handleSubmit={handleOpenSettings}
      >
        <div className="space-y-5 p-5 bg-gray-200 rounded-sm">
          <h3 className="font-bold">Details Breakdown</h3>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">
              Meter Type
            </span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {data.meterType}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">
              Meter Number
            </span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {data.meterNo}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">
              Beneficiary
            </span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {data.beneficiary}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">Charge</span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {formattedAmount("NGN", data.fees)}
            </span>
          </p>
        </div>
      </SummaryOverview>
    </PageLayout>
  );
}

export default BillSummary;
