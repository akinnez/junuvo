"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { CustomSelect } from "@/components/Select";
import { cityOptions, nationalityOptions } from "@/lib/mock-flight-data";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function KYC() {
  const [nationality, setNationality] = useState("");
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    sessionStorage.setItem("set_card", JSON.stringify(true));
    router.push("/account/card");
  };
  return (
    <PageLayout
      title="KYC Verification"
      description="Here is the details of your savings"
    >
      <CardPageLayout
        title="Plan details"
        description="Here is the details of your savings"
        className="max-w-sm"
      >
        <div className="space-y-5">
          <Input
            id="address"
            name="address"
            label="Customer Address"
            placeholder="Enter your address"
          />
          <CustomSelect
            id="city"
            label="City"
            name="city"
            value={city}
            onChange={setCity}
            options={cityOptions}
            searchable={false}
          />
          <CustomSelect
            id="country"
            label="Country"
            name="country"
            value={nationality}
            onChange={setNationality}
            options={nationalityOptions}
            searchable={false}
          />
          <Input
            id="posterCode"
            name="posterCode"
            label="Postal Code"
            placeholder="Enter your postal code"
          />
          <Button className="w-full" onClick={handleSubmit}>
            Create Card
          </Button>
        </div>
      </CardPageLayout>
    </PageLayout>
  );
}
