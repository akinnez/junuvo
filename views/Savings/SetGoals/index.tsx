"use client";
import Card from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { formattedAmount } from "@/lib/currency-formatter";
import { safeBtoa } from "@/lib/encode";
import Link from "next/link";

const data = [
  {
    id: 1,
    savingType: "Annual Savings",
    amount: 120000,
    currency: "USD",
    autoWithdraw: true,
  },
  {
    id: 2,
    savingType: "House Rent",
    amount: 120000,
    currency: "NGN",
    autoWithdraw: true,
  },
];

function SetGoalsComp() {
  return (
    <PageLayout
      title="Savings"
      description="Create a saving plan as desired"
      showButton={true}
      buttonLabel="Create plan"
      buttonStyle="w-[327px] !px-5 !py-2.5"
      isBack={false}
    >
      <CardPageLayout
        title="My Savings Plans"
        description="Click one to see the details"
        className="max-w-md !space-y-6"
      >
        {data.map((plans) => (
          <Link
            key={plans.id}
            href={`set-goals/${safeBtoa(JSON.stringify(plans))}`}
            className="block"
          >
            <Card className="!p-5 space-y-3 !shadow">
              <p className="text-xs font-semibold">{plans.savingType}</p>
              <h2 className="text-2xl font-bold">
                {formattedAmount(plans.currency, plans.amount)}
              </h2>
              <div className="text-[10px] flex justify-between">
                <span className="text-gray-600">Auto-withdrawal</span>
                <span
                  className={
                    plans.autoWithdraw
                      ? `text-success text-semibold`
                      : `text-red-500 text-semibold`
                  }
                >
                  {plans.autoWithdraw ? "Enable" : "Disable"}
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </CardPageLayout>
    </PageLayout>
  );
}
export default SetGoalsComp;
