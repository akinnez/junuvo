"use client";
import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

function Savings() {
  const [plan, setPlan] = useState<string | null>(null);
  useEffect(() => {
    if (plan) {
      setPlan(plan);
    }
  });
  return (
    <PageLayout
      title="Savings"
      description="Create a saving plan as desired"
      isBack={false}
      isCardAllow={false}
    >
      {!plan && <NoSavingPlan />}
    </PageLayout>
  );
}
export default Savings;

function NoSavingPlan() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-7rem)]">
      <div className="w-full max-w-sm text-center space-y-2">
        <h2 className="font-bold text-3xl text-[#1E1E1E]">
          No saving plan created
        </h2>
        <span className="text-[#575555]">
          You don&#39;t have savings plan has been created yet
        </span>
        <Link href={"/account/savings/create"}>
          <Button className="w-full mt-5">Create plan</Button>
        </Link>
      </div>
    </div>
  );
}
