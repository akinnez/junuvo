import Card from "@/components/Card";
import PageLayout from "@/components/PageLayout";
// import { formattedAmount } from "@/lib/currency-formatter";
import SummaryOverview from "@/views/SummaryOverview";

const data = {
  narration: "Conversion from USD to EUR",
  destination: "USD to EUR",
  beneficiaryAccount: "1234567890",
  bank: "Bank Transfer",
  fees: `free`,
  amount: 20000,
  createdAt: "2024-06-15T10:30:00Z",
};

function AddFundSummary() {
  return (
    <PageLayout title="Summary" description="Review your transaction details">
      <SummaryOverview
        amount={data.amount}
        createdAt={data.createdAt}
        destination={data.destination}
        currency="NGN"
      >
        <Card className="space-y-5 !px-5 !bg-gray-200 !shadow-none !rounded-sm">
          <p className="flex justify-between">
            <span className="text-sm text-gray-600">Destination</span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {data.bank}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">
              Beneficiary Account
            </span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {data.beneficiaryAccount}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">Charge</span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {data.fees}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">Narration</span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {data.narration}
            </span>
          </p>
        </Card>
      </SummaryOverview>
    </PageLayout>
  );
}

export default AddFundSummary;
