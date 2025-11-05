import Card from "@/components/Card";
import AccountOverview from "@/views/AccountOverview";
import Onboarding from "@/views/Onboarding";
import PayBillsSection from "@/views/PayBillsOverview";
import BottomDashboardSection from "@/views/SpendingSection";

export default function Dashboard() {
  const kyc = true;
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
