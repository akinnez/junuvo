import PageLayout from "@/components/PageLayout";
import { formattedAmount } from "@/lib/currency-formatter";
import SummaryOverview from "@/views/SummaryOverview";

const data = {
  narration: "Conversion from USD to EUR",
  amountToConvert: 855,
  amountToReceive: 850,
  fees: 5,
  currencyType: "EUR",
  currencyToConvert: "USD",
  createdAt: "2024-06-15T10:30:00Z",
};

function ConvertSummary() {
  return (
    <PageLayout title="Summary" description="Review your transaction details">
      <SummaryOverview
        amount={data.amountToConvert.toString()}
        createdAt={data.createdAt}
        destination={`${data.currencyToConvert} to ${data.currencyType}`}
        currency="NGN"
      >
        <div>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">Narration</span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {data.narration}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">
              Amount to receive
            </span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {formattedAmount(
                data.currencyType as string,
                data.amountToReceive
              )}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">Fees</span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {formattedAmount(data.currencyType as string, data.fees)}
            </span>
          </p>
        </div>
      </SummaryOverview>
    </PageLayout>
  );
}

export default ConvertSummary;
