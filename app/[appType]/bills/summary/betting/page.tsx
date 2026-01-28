"use client";
import PageLayout from "@/components/PageLayout";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import BettingSuccess from "@/modals/bills/betting/BettingSuccess";
import TransactionPin from "@/modals/transactions/TransactionPin";
import SummaryOverview from "@/views/SummaryOverview";

const data = {
  beneficiary: "Akano Mary",
  type: "BET9JA",
  amount: 2000,
  fees: 100,
  userId: 1234567890,
  currencyType: "NGN",
  createdAt: "2024-06-15T10:30:00Z",
};

function GiftCardSummary() {
  const { openModal, closeModal } = useModal();

  const handleOpenSettings = () => {
    openModal({
      size: "sm",
      component: (
        <TransactionPin
          size="md"
          closeModal={closeModal}
          Component={BettingSuccess}
        />
      ),
    });
  };
  return (
    <PageLayout title="Summary" description="Review your transaction details">
      <SummaryOverview
        amount={`${data.amount + data.fees}`}
        createdAt={data.createdAt}
        destination={data.type.toUpperCase()}
        currency="NGN"
        className="!p-0"
        handleSubmit={handleOpenSettings}
      >
        <div className="space-y-5 p-5 bg-gray-50 rounded-sm">
          <p className="flex justify-between">
            <span className="text-xs font-medium text-gray-600">
              Beneficiary
            </span>
            <span className="text-xs font-medium text-tertiary flex gap-1 items-center">
              {data.beneficiary}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-xs font-medium text-gray-600">Type</span>
            <span className="text-xs font-medium text-tertiary flex gap-1 items-center">
              {data.type}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-xs font-medium text-gray-600">Amount</span>
            <span className="text-xs font-medium text-tertiary flex gap-1 items-center">
              {formattedAmount(data.currencyType as "NGN" | "USD", data.amount)}
            </span>
          </p>

          <p className="flex justify-between">
            <span className="text-xs font-medium text-gray-600">User ID</span>
            <span className="text-xs font-medium text-tertiary flex gap-1 items-center">
              {data.userId}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-xs font-medium text-gray-600">Charge</span>
            <span className="text-xs font-medium text-tertiary flex gap-1 items-center">
              {formattedAmount("NGN", data.fees)}
            </span>
          </p>
        </div>
      </SummaryOverview>
    </PageLayout>
  );
}

export default GiftCardSummary;
