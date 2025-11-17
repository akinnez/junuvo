"use client";
import Button from "@/components/Button";
import InterestRateCard from "@/views/InterestRateCard";
import PersonalSummary from "@/views/Savings/PersonalSummarySaving";
import OtherDetailsSummary from "@/views/Savings/SavingsDetails";

function SavingsSummary() {
  return (
    <div className="space-y-5">
      <InterestRateCard />
      <PersonalSummary />
      <OtherDetailsSummary />
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Button className="!bg-[#E5E5E5] !text-black !font-bold ">Back</Button>
        <Button className="font-bold">Create Plan</Button>
      </div>
    </div>
  );
}
export default SavingsSummary;
