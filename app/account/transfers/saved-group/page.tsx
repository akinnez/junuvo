"use client";
import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import DebitAccountComponent from "@/views/DebitAccountComponent";

export default function Recipient() {
  const data = {
    currency: "NGN",
    amount: 12000,
    recipientNo: 2,
    fees: 5,
  };
  return (
    <PageLayout
      title="Account to debit"
      description="Review your transaction details"
    >
      <CardPageLayout
        title="Primary account to debit"
        description="Here is the list of recipients"
        className="max-w-md"
      >
        <DebitAccountComponent type="saved" />
        <Button className="w-full mt-5">Proceed</Button>
      </CardPageLayout>
    </PageLayout>
  );
}
