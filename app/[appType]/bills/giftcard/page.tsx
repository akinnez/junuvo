"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import { GiftcardsIcons } from "@/components/GiftcardIcons";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import SearchInput from "@/components/SearchInput";
import { CustomSelect } from "@/components/Select";
import Link from "next/link";
import { useRef, useState } from "react";

const typeOption: Option[] = [
  { label: "Nigeria", value: "nigeria" },
  { label: "South Korea", value: "southkorea" },
];
export default function GiftCard() {
  const [type, setType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [cardType, setCardType] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleClick = (val: string) => {
    setCardType(val);
  };

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

      {type && (
        <Card className="my-5 !shadow !px-5">
          <CardPageLayout
            title="Select Country"
            description="Select your desired type to begin"
            className="max-w-sm"
          >
            <SearchInput
              label=""
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              searchInputRef={searchInputRef}
            />
            <div className="grid grid-cols-3 gap-x-5 gap-y-7 my-5">
              {options.map((giftCard) => {
                const { src, label, value } = giftCard;
                return (
                  <GiftcardsIcons
                    key={label}
                    cardType={cardType}
                    value={value}
                    src={src}
                    label={label}
                    handleClick={handleClick}
                  />
                );
              })}
            </div>
            <Link href={`/${params.appType}bills/giftcard/${cardType}`}>
              <Button className="w-full" disabled={!cardType}>
                Proceed
              </Button>
            </Link>
          </CardPageLayout>
        </Card>
      )}
    </PageLayout>
  );
}

const options = [
  {
    src: "/images/icons/iTunes.svg",
    label: "iTunes",
    value: "iTunes",
  },
  {
    src: "/images/icons/amazon.svg",
    label: "Amazon",
    value: "amazon",
  },
  {
    src: "/images/icons/target.svg",
    label: "Target",
    value: "target",
  },
];
