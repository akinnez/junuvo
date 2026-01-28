"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { CustomSelect } from "@/components/Select";
import { useModal } from "@/hooks/useModal";
import { cityOptions, nationalityOptions } from "@/lib/mock-flight-data";
import TierUpgradeSuccess from "@/modals/settings/TierUpgradeSuccess";
import { useState } from "react";

const sourceOptions: Option[] = [{ label: "", value: "" }];
const incomeOptions: Option[] = [{ label: "", value: "" }];

export default function EmploymentDetails() {
  const { openModal, closeModal } = useModal();

  const handleUpgradeSuccess = () => {
    sessionStorage.setItem("currentTier", "2");
    openModal({
      size: "sm",
      component: <TierUpgradeSuccess closeModal={closeModal} />,
    });
  };

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [source, setSource] = useState("");
  const [income, setIncome] = useState("");
  return (
    <PageLayout
      title="Upgrade Tier"
      description="Here is the details of your savings"
    >
      <div className="space-y-5">
        <CardPageLayout
          title="Employment Information"
          description=""
          className="max-w-sm"
        >
          <div className="space-y-5">
            <Input
              id="companyName"
              name="companyName"
              label="Company Name"
              placeholder="Enter company name"
            />
            <Input
              id="address"
              name="address"
              label="Address"
              placeholder="Enter address"
            />
            <CustomSelect
              id="city"
              label="City"
              name="city"
              value={city}
              onChange={setCity}
              options={cityOptions}
              placeholder="Select one"
              searchable={false}
            />
            <CustomSelect
              id="country"
              label="Country"
              name="country"
              value={country}
              onChange={setCountry}
              options={nationalityOptions}
              placeholder="Select one"
              searchable={false}
            />
            <Input
              id="posterCode"
              name="posterCode"
              label="Poster Code"
              placeholder="Enter your postal code"
            />
            <Input
              id="employDate"
              name="employDate"
              label="Employment Date"
              type="date"
            />
          </div>
        </CardPageLayout>
        <CardPageLayout
          title="Source of Income"
          description=""
          className="max-w-sm"
        >
          <CustomSelect
            id="source"
            label="Source"
            name="source"
            value={source}
            onChange={setSource}
            options={sourceOptions}
            placeholder="Select one"
            searchable={false}
          />
        </CardPageLayout>
        <CardPageLayout
          title="Expected Monthly Income"
          description=""
          className="max-w-sm"
        >
          <div className="space-y-5">
            <CustomSelect
              id="monthlyIncome"
              label="Monthly Income"
              name="monthlyIncome"
              value={income}
              onChange={setIncome}
              options={incomeOptions}
              placeholder="Select one"
              searchable={false}
            />

            <Button className="w-full" onClick={handleUpgradeSuccess}>
              Upgrade
            </Button>
          </div>
        </CardPageLayout>
      </div>
    </PageLayout>
  );
}
