"use client";
import PageLayout from "@/components/PageLayout";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import CableTVSuccess from "@/modals/bills/cabletv/cabletvSuccess";
import TransactionPin from "@/modals/transactions/TransactionPin";
import SummaryOverview from "@/views/SummaryOverview";

const data = {
  beneficiary: "Akano Mary",
  packageType: "Prepaid",
  smartcardNo: "1234567890",
  amount: 850,
  fees: 5,
  currencyType: "NGN",
  createdAt: "2024-06-15T10:30:00Z",
};

export default function CableTvSummary() {
  const { openModal, closeModal } = useModal();
  const handleOpenSettings = () => {
    openModal({
      size: "sm",
      component: (
        <TransactionPin
          size="md"
          closeModal={closeModal}
          Component={CableTVSuccess}
        />
      ),
    });
  };
  return (
    <PageLayout title="Summary" description="Review your transaction details">
      <SummaryOverview
        amount={`${data.amount + data.fees}`}
        createdAt={data.createdAt}
        destination={`DSTV`}
        currency="NGN"
        className="!p-0"
        handleSubmit={handleOpenSettings}
      >
        <div className="space-y-5 p-5 bg-gray-200 rounded-sm">
          <h3 className="font-bold">Details Breakdown</h3>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">
              Package Type
            </span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {data.packageType}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">
              Smartcard Number
            </span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {data.smartcardNo}
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
