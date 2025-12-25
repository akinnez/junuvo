"use client";

import { GiftcardsIcons } from "@/app/account/bills/giftcard/page";
import SearchInput from "@/components/SearchInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchStock({ closeModal }: { closeModal: any }) {
  const [searchTerm, setSearchTerm] = useState("");

  const { push } = useRouter();
  const handleClick = (val: string) => {
    closeModal();
    push(`/account/bills/stocks/search?type=${val}`);
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
              cardType={value}
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
