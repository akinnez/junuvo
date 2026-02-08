"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
// import { JunuvoOverlay } from "@/components/Loader";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { accounts } from "@/stores/walletStore";
import { Copy } from "lucide-react";
import { useSignal } from "nabd";
import { useState } from "react";

const accountType = [
  {
    id: 1,
    accountType: "Naira Account",
    currency: "NGN",
  },
  {
    id: 2,
    accountType: "Dollar Account",
    currency: "USD",
  },
  {
    id: 3,
    accountType: "Euro Account",
    currency: "EUR",
  },
];

const accountLabels = [
  {
    label: "Account Holder",
    value: "accountName",
  },
  {
    label: "Account Number",
    value: "accountNumber",
  },
  {
    label: "Bank Name",
    value: "bankName",
  },
];

function AccountDetailsComponent() {
  const [id, setId] = useState<number>(1);
  const details = useSignal(accounts);
  // const isLoading = useSignal(isAccountLoading);

  // if (isLoading) {
  //   <JunuvoOverlay isLoading={isLoading} />;
  // }

  return (
    <CardPageLayout
      title="My Accounts"
      description="Make a transfer to your account details below"
      className="max-w-md"
    >
      <div className="flex flex-wrap justify-center my-5">
        {accountType.map((account) => (
          <Button
            type="button"
            size="sm"
            className={`text-xs font-bold ${
              account.id === id
                ? "!bg-[#E8F4FF] !text-button"
                : "!bg-transparent !text-gray-800"
            }`}
            key={account.id}
            onClick={() => setId(account.id)}
          >
            {account.accountType}
          </Button>
        ))}
      </div>

      <div>
        {details &&
          details?.map((detail: any) => (
            <Card key={detail.id} className=" !p-7">
              <div className="space-y-4">
                {accountLabels.map((label, idx) => (
                  <div className="flex justify-between items-center" key={idx}>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-gray-600 font-medium">
                        {label.label}
                      </span>
                      <span className="text-xs font-semibold text-gray-800">
                        {detail[label.value as keyof typeof detail]}
                      </span>
                    </div>
                    <div>
                      <Copy className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                ))}
                {detail.routingNumber && (
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-gray-600 font-medium">
                        Routing Number
                      </span>
                      <span className="text-xs font-semibold text-gray-800">
                        {detail.routingNumber}
                      </span>
                    </div>
                    <div>
                      <Copy className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                )}
              </div>
              <Button className="!text-xs font-semibold bg-transparent !text-button w-full">
                SET TRANSACTION LIMIT
              </Button>
            </Card>
          ))}
      </div>
    </CardPageLayout>
  );
}
export default AccountDetailsComponent;
