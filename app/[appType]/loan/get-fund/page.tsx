"use client";

import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { RepaymentScheduleSection } from "@/views/Loan/RepaymentDetails/page";

export default function GetFund() {
  return (
    <PageLayout
      title="Annual Savings Plan"
      description="Here is the details of your savings"
    >
      <CardPageLayout
        title="Plan details"
        description="Here is the details of your savings"
      >
        <RepaymentScheduleSection />
      </CardPageLayout>
    </PageLayout>
  );
}
