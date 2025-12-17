"use client";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";

import SavingPlanDetails from "@/views/Savings/SavingPlanDetails";

function SetGoalsComp() {
  return (
    <PageLayout
      title="Annual Savings Plan"
      description="Here is the details of your savings"
    >
      <CardPageLayout
        title="Plan details"
        description="Here is the details of your savings"
        className="max-w-sm"
      >
        <SavingPlanDetails />
      </CardPageLayout>
    </PageLayout>
  );
}
export default SetGoalsComp;
