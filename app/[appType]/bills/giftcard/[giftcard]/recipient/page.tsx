"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import Link from "next/link";

export default function GiftCardRecipient() {
  return (
    <PageLayout
      title="Recipient Details"
      description="Review your transaction details"
    >
      <CardPageLayout
        title="Recipient details"
        description="Here is the summary of the transaction to be made"
        className="max-w-sm"
      >
        <div className="space-y-7">
          {recipients.map((recipient) => {
            const { label, value } = recipient;
            return (
              <Input
                key={value}
                id={value}
                name={value}
                label={label as string}
                placeholder={`Enter ${label}`}
              />
            );
          })}
          <Link href={`/${params.appType}bills/summary/giftcard`}>
            <Button className="w-full">Proceed</Button>
          </Link>
        </div>
      </CardPageLayout>
    </PageLayout>
  );
}

const recipients: Option[] = [
  {
    label: "Recipient's First Name",
    value: "firstName",
  },
  {
    label: "Recipient's Last Name",
    value: "lastName",
  },
  {
    label: "Recipient's Email",
    value: "email",
  },
  {
    label: "Recipient's Phone Number",
    value: "phoneNumber",
  },
];
