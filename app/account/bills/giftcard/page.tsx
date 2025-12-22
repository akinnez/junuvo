"use client";

import Card from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import SearchInput from "@/components/SearchInput";
import { CustomSelect } from "@/components/Select";
import Image from "next/image";
import { useRef, useState } from "react";

const typeOption: Option[] = [
  { label: "Nigeria", value: "nigeria" },
  { label: "South Korea", value: "southkorea" },
];
export default function GiftCard() {
  const [type, setType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  return (
    <PageLayout
      title="Buy Giftcards"
      description="What card would you like to buy?"
      isBack={false}
      isCardAllow={false}
    >
      <Card className="!shadow !px-5">
        <CardPageLayout
        title="Select Country"
        description="Select your desired type to begin"
        className="max-w-sm"
      >
        <CustomSelect
          id="type"
          label="Select Type"
          name="type"
          value={type}
          onChange={setType}
          options={typeOption}
          placeholder="Select one"
          searchable={false}
        />
      </CardPageLayout>
      </Card>

      <Card className="my-5 !shadow !px-5">
        {type && (
          <CardPageLayout
            title="Select Country"
            description="Select your desired type to begin"
            className="max-w-sm"
          >
            <SearchInput label="" searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchInputRef={searchInputRef} />
          </CardPageLayout>
        )} b   
      </Card>
    </PageLayout>
  );
}

const GiftcardsIcons = ()=> {
    return (
        <div className="text-center space-y-4">
            <Image src={src} alt={label} width={56} height={50} className="shadow rounded-xl"/>
            <span>{label}</span>
        </div>
    )
}