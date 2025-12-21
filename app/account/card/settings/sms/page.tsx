"use client";

import Input from "@/components/Input";
import { useState } from "react";

type AlertType = "credit" | "transaction" | "transfer" | "other" | null;

export default function SMSSettings() {
  const [selectedAlert, setSelectedAlert] = useState<AlertType>(null);

  const subscription = [
    {
      label: "Credit Alerts",
      description: "Money sent to your junuvo account",
      value: "credit",
    },
    {
      label: "Card Transaction Alerts",
      description:
        "Payments & Cash Withdrawals made with your Junuvo Debit Card",
      value: "transaction",
    },
    {
      label: "Transfer & Withdrawal Alerts",
      description: "Transfers & Cash Withdrawals made with the Junuvo App",
      value: "transfer",
    },
    {
      label: "Other Alerts",
      description: "Transactions other than those listed above",
      value: "others",
    },
  ];

  return (
    <div>
      {subscription.map((sub, idx) => (
        <div className="flex px-1 justify-between items-center" key={idx}>
          <div>
            <h3 className="text-xs font-bold text-gray-900">{sub.label}</h3>
            <span className="text-[10px] font-medium text-gray-800">
              {sub.description}
            </span>
          </div>
          <CustomRadio checked={selectedAlert == sub.value} />
        </div>
      ))}

      <p className="text-xs text-gray-500 leading-relaxed">
        SMS charges for each alert sent will be automatically debited at 10am on
        the 3rd of each new month. Free SMS Alerts are available on Juno.
      </p>
    </div>
  );
}

function CustomRadio({ checked }: { checked: boolean }) {
  return (
    <div
      className={`h-5 w-5 rounded-full border flex items-center justify-center
          ${checked ? "border-button" : "border-gray-300"}
        `}
    >
      {checked && <div className="h-2.5 w-2.5 rounded-full bg-button" />}
    </div>
  );
}
