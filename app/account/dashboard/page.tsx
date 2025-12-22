"use client";
import Card from "@/components/Card";

import AccountOverview from "@/views/Dashboard/AccountOverview";
import Onboarding from "@/views/Dashboard/Onboarding";
import PayBillsSection from "@/views/Dashboard/PayBillsOverview";
import BottomDashboardSection from "@/views/SpendingSection";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [kyc, setKYC] = useState(false);

  useEffect(() => {
    const getKYC = JSON.parse(
      sessionStorage.getItem("onboarding_kyc") as string
    );
    if (getKYC) {
      setKYC(getKYC as boolean);
    }
  }, []);

  if (!kyc) {
    return (
      <div className="flex justify-center items-center">
        <Card className="max-w-sm">
          <div className="flex justify-center mb-6">
            <div className="flex gap-1 items-center">
              <h1 className="text-sm">Welcome</h1>
              <p className="font-bold">Gabriel</p>
            </div>
          </div>
          <Onboarding />
        </Card>
      </div>
    );
  }
  return (
    <div className="py-10">
      <AccountOverview />
      <PayBillsSection />
      <BottomDashboardSection />
    </div>
  );
}
