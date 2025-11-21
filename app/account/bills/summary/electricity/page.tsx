import PageLayout from "@/components/PageLayout";
import { formattedAmount } from "@/lib/currency-formatter";
import SummaryOverview from "@/views/SummaryOverview";

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
  return (
    <PageLayout title="Summary" description="Review your transaction details">
      <SummaryOverview
        amount={data.amount.toString()}
        createdAt={data.createdAt}
        destination={`Electricity`}
        currency="NGN"
        className="!p-0"
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
