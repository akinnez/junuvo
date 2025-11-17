import Card from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import SummaryOverview from "@/views/SummaryOverview";

const data = {
  beneficiary: '08109182995',
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
        destination={`MTN Airtime`}
        currency="NGN"
      >
      <Card className="space-y-5 !px-5 !bg-gray-200 !shadow-none !rounded-sm">
          <h3 className="font-bold">Details Breakdown</h3>
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
              {data.fees}
            </span>
          </p>
        </Card>
      </SummaryOverview>
    </PageLayout>
  );
}

export default BillSummary;
