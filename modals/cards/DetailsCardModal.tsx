"use client";

import { Copy } from "lucide-react";
import Image from "next/image";

export default function CardDetailsModal() {
  const keys = Object.keys(cardDetails);
  return (
    <div>
      <Image
        alt="cardLogo"
        src={"/images/card/visa.png"}
        width={63}
        height={26}
        loading="eager"
      />
      <div className="my-7 space-y-4">
        {cardLabels.map((label, i) => (
          <div key={i} className="flex justify-between items-center gap-x-5">
            <div>
              <p className="text-[10px] text-gray-500">{label}</p>
              <span className="text-sm font-semibold text-[#353D48]">
                {cardDetails[keys[i]] as any}
              </span>
            </div>
            <Copy size={16} className="text-button" />
          </div>
        ))}
      </div>
    </div>
  );
}

const cardLabels = [
  "Card Name",
  "Card Number",
  "CVV",
  "Expiry Date",
  "Billing Address",
  "Zip Code",
];
const cardDetails: any = {
  cardName: "Gabriel Ogunsua",
  cardNo: "08277334447",
  cvv: "876",
  expiryDate: "10/22",
  billingAddress: "243 N Broad Street, MiddleTown Delaware, US",
  zipCode: "12342",
};

type cardDetailsType = {
  cardName: string;
  cardNo: string;
  cvv: string;
  expiryDate: string;
  billingAddress: string;
  zipCode: string;
};
