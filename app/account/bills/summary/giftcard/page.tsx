"use client";
import PageLayout from "@/components/PageLayout";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import PostPaidSuccess from "@/modals/bills/electricity/PostPaidSuccess";
import GiftcardSuccess from "@/modals/bills/giftcard/GiftcardSuccess";
import TransactionPin from "@/modals/transactions/TransactionPin";
import SummaryOverview from "@/views/SummaryOverview";

const data = {
  beneficiary: "Akano Mary",
  email: "olanrewaju.isaac@gmail.com",
  phone: "08109182995",
  type: "AMAZON",
  amount: 2000,
  fees: 100,
  currencyType: "NGN",
  createdAt: "2024-06-15T10:30:00Z",
  quantity: "167890",
  userId: "167890",
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
          Component={GiftcardSuccess}
        />
      ),
    });
  };
  return (
    <PageLayout title="Summary" description="Review your transaction details">
      <SummaryOverview
        amount={`${data.amount + data.fees}`}
        createdAt={data.createdAt}
        destination={`GiftCard`}
        currency="NGN"
        className="!p-0"
        handleSubmit={handleOpenSettings}
      >
        <div className="space-y-5 p-5 bg-gray-50 rounded-sm">
          <p className="flex justify-between">
            <span className="text-xs font-medium text-gray-600">
              Beneficiary
            </span>
            <span className="text-xs font-semibold text-tertiary flex gap-1 items-center">
              {data.beneficiary}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-xs font-medium text-gray-600">
              Email Address
            </span>
            <span className="text-xs font-semibold text-tertiary flex gap-1 items-center">
              {data.email}
            </span>
          </p>

          <p className="flex justify-between">
            <span className="text-xs font-medium text-gray-600">
              Phone Number
            </span>
            <span className="text-xs font-semibold text-tertiary flex gap-1 items-center">
              {data.phone}
            </span>
          </p>

          <p className="flex justify-between">
            <span className="text-xs font-medium text-gray-600">Type</span>
            <span className="text-xs font-semibold text-tertiary flex gap-1 items-center">
              {data.type}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-xs font-medium text-gray-600">Amount</span>
            <span className="text-xs font-semibold text-tertiary flex gap-1 items-center">
              {formattedAmount(data.currencyType as "NGN" | "USD", data.amount)}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-xs font-medium text-gray-600">Quantity</span>
            <span className="text-xs font-semibold text-tertiary flex gap-1 items-center">
              {data.quantity}
            </span>
          </p>

          <p className="flex justify-between">
            <span className="text-xs font-medium text-gray-600">User ID</span>
            <span className="text-xs font-semibold text-tertiary flex gap-1 items-center">
              {data.userId}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-xs font-medium text-gray-600">Charge</span>
            <span className="text-xs font-semibold text-tertiary flex gap-1 items-center">
              {formattedAmount("NGN", data.fees)}
            </span>
          </p>
        </div>
      </SummaryOverview>
    </PageLayout>
  );
}

export default GiftCardSummary;
