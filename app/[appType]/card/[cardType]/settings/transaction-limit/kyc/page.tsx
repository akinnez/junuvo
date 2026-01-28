"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { CustomSelect } from "@/components/Select";
import UploadComponent from "@/components/upload-zone";
import { useModal } from "@/hooks/useModal";
import LimitSuccess from "@/modals/cards/LimitSuccess";
import { useState } from "react";

const option: Option[] = [
  { label: "International Passport", value: "international_passport" },
  { label: `Driver's License`, value: "driver_license" },
  { label: "National ID", value: "nationalID" },
];
const genderOption: Option[] = [
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
];

export default function TransactionLimitKYC() {
  const [id, setId] = useState("");
  const [gender, setGender] = useState("");

  const { closeModal, openModal } = useModal();

  const handleOpenDetails = () => {
    openModal({
      size: "sm",
      component: <LimitSuccess closeModal={closeModal} />,
    });
  };
  return (
    <PageLayout title={"KYC Verification"} description={""}>
      <CardPageLayout
        title={"Update KYC"}
        description={"Update your limit"}
        className="max-w-sm"
      >
        <div className="space-y-5">
          <CustomSelect
            id="cardType"
            name="cardType"
            label="Means of Identification"
            header="Choose Card Type"
            options={option}
            value={id}
            onChange={setId}
            searchable={false}
            buttonClass="!rounded-md !p-4"
          />
          <Input
            id="documentNo"
            name="documentNo"
            label="Document Number"
            placeholder="Enter document ID number"
          />
          <div className="flex justify-between items-center">
            <UploadComponent
              flex_row
              className="!border-none !min-h-0 !p-0 !bg-white !justify-start"
            >
              <div className="">
                <h3 className="text-sm font-bold">Upload document</h3>
                <div className="text-[10px] text-gray-400 flex items-center gap-3">
                  <span>PDF format</span>
                  <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  <span>Max. 5MB</span>
                </div>
              </div>
            </UploadComponent>
            <Button size="sm">Upload</Button>
          </div>
          <CustomSelect
            id="gender"
            name="gender"
            label="Gender"
            options={genderOption}
            onChange={setGender}
            value={gender}
            placeholder="Select one"
            buttonClass="!rounded-md !p-4"
            searchable={false}
          />

          <Button className="w-full" onClick={handleOpenDetails}>
            Continue
          </Button>
        </div>
      </CardPageLayout>
    </PageLayout>
  );
}
