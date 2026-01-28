"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { CustomSelect } from "@/components/Select";
import UploadComponent from "@/components/upload-zone";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useModal } from "@/hooks/useModal";
import QuerySuccess from "@/modals/transactions/QuerySuccess";

const options: Option[] = [
  { label: "Failed Bills Payment", value: "failed_bills_payment" },
  { label: "Failed Funds Transfer", value: "failed_funds_transfer" },
];

function ReportTransaction() {
  const [id, setId] = useState<string>();
  const router = useRouter();
  const { accountType } = useParams();
  const { openModal, closeModal } = useModal();

  const handleOpenSettings = () => {
    openModal({
      size: "sm",
      component: <QuerySuccess closeModal={closeModal} />,
    });
  };

  const handleProceed = () => {
    // Logic to handle profile creation can be added here
    router.push(`/auth/create/${accountType}/profile_pin`);
  };

  const handleChange = (field: string, value: string) => {
    // formSignal.setValue({ ...formSignal.value, [field]: value });
  };

  return (
    <PageLayout
      title="Report a transaction"
      description="Review your transaction details"
    >
      <CardPageLayout
        title="Transaction Summary"
        description="Here is the summary of the transaction to be made"
        className="max-w-sm"
      >
        <div className="flex flex-col gap-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col space-y-3"
          >
            <Input
              label="Reference ID"
              // value={formSignal.value.email}
              onChange={(e) => handleChange("id", e.target.value)}
              placeholder="Enter ID"
              required
            />
            <CustomSelect
              id="transaction_issue"
              name="transaction_issue"
              label="Transaction Issue"
              placeholder="Select one"
              options={options}
              value={id}
              onChange={setId}
              searchable={false}
            />
            <div>
              <UploadComponent flex_row className="!min-h-[10px] !py-6">
                <div className="flex gap-x-1">
                  <h3 className="text-button text-xs font-bold">
                    Upload your receipt
                  </h3>
                </div>
                <span className="text-gray-400 text-xs text-center">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </span>
              </UploadComponent>
            </div>
            <div>
              <label
                htmlFor={`upload_id`}
                className={`block text-sm font-medium my-4`}
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                cols={3}
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-0 focus:ring-1 focus:ring-gray-300"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </form>
        </div>

        <Button
          disabled={false}
          className="w-full mt-5"
          onClick={handleOpenSettings}
        >
          Proceed
        </Button>
      </CardPageLayout>
    </PageLayout>
  );
}

export default ReportTransaction;
