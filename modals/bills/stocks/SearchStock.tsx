"use client";

import { GiftcardsIcons } from "@/components/GiftcardIcons";
import SearchInput from "@/components/SearchInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchStock({ closeModal }: { closeModal: any }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cardType, setCardType] = useState<string | null>(null);

  const { push } = useRouter();
  const handleClick = (val: string) => {
    setCardType(val);
    push(`/${params.appType}bills/stocks/search?type=${val}`);
    closeModal();
  };

  return (
    <div className="space-y-7">
      <SearchInput
        label="Stock"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="grid grid-cols-3 gap-5">
        {options.map((stock) => {
          const { label, src, value } = stock;
          return (
            <GiftcardsIcons
              key={value}
              label={label}
              src={src}
              value={value}
              handleClick={handleClick}
              cardType={cardType}
            />
          );
        })}
      </div>
    </div>
  );
}

const options = [
  {
    src: "/images/icons/popular.png",
    label: "Most Popular",
    value: "popular",
  },
  {
    src: "/images/icons/technology.png",
    label: "Technology",
    value: "technology",
  },
  {
    src: "/images/icons/utility.png",
    label: "Utility",
    value: "utility",
  },
];
