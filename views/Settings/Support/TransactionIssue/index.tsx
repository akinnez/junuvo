"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { CustomSelect } from "@/components/Select";
import { useModal } from "@/hooks/useModal";
import ErrorSubmitSuccess from "@/modals/settings/ErrorSubmitSuccess";
import { useState } from "react";

const accountOptions: Option[] = [
  { label: "Current Account", value: "current" },
  { label: "Savings Account", value: "savings" },
  { label: "Fixed Account", value: "fixed" },
];
const transactionTypeOptions: Option[] = [
  { label: "Transfer", value: "transfer" },
  { label: "Deposit", value: "deposit" },
  { label: "Withdraw", value: "withdraw" },
];

export default function TransactionIssue() {
  const { openModal, closeModal } = useModal();

  const handleUpgradeSuccess = () => {
    openModal({
      size: "sm",
      component: <ErrorSubmitSuccess closeModal={closeModal} />,
    });
  };

  const [transactionType, setTransactionType] = useState("");
  const [account, setAccount] = useState("");

  return (
    <>
      <div className="space-y-5">
        <CustomSelect
          id="account"
          label="Account to report"
          name="account"
          value={account}
          onChange={setAccount}
          options={accountOptions}
          placeholder="Select one"
          searchable={false}
        />

        <Input
          id="errorDate"
          name="errorDate"
          label="Date of error"
          type="date"
        />
        <CustomSelect
          id="transactionType"
          label="TransactionType"
          name="transactionType"
          value={transactionType}
          onChange={setTransactionType}
          options={transactionTypeOptions}
          placeholder="Select one"
          searchable={false}
        />

        <div className="">
          <Button size="sm" className="w-full" onClick={handleUpgradeSuccess}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
