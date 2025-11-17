"use client";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { formattedAmount } from "@/lib/currency-formatter";
import { base64UrlDecode } from "@/lib/encode";
import SavingPlanDetails from "@/views/Savings/SavingPlanDetails";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function SetGoalsComp() {
  //   const { id } = useParams();
  //   const [value, setValue] = useState<any>(null);

  //   useEffect(() => {
  //     if (!id) return;

  //     try {
  //       const decodedString = base64UrlDecode(id as string);

  //       //   const decodedObject = JSON.parse(decodedString);
  //       console.log(decodedString);

  //       //   setValue(decodedObject);
  //     } catch (err) {
  //       console.error("Base64 decode error:", err);
  //     }
  //   }, [id]);

  //  {
  //     id: 2,
  //     savingType: "House Rent",
  //     amount: 120000,
  //     currency: "NGN",
  //     autoWithdraw: true,
  //   },

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
