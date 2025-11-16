"use client";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { useParams } from "next/navigation";

function CreateSavingsComponent({ children }: { children: React.ReactNode }) {
  const { accountType } = useParams();
  return (
    <PageLayout
      title={`Set up your ${
        accountType == "set-goals"
          ? "goals"
          : `${accountType?.toString()} savings plan`
      }`}
      description="Please provide the required informaton"
    >
      <CardPageLayout
        title="Start with desired plan"
        description="Select your desired account to make transactions"
        className="max-w-md"
      >
        {children}
      </CardPageLayout>
    </PageLayout>
  );
}
export default CreateSavingsComponent;
