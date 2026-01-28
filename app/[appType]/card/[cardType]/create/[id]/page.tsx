"use client";
import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { CustomSelect } from "@/components/Select";
import { formattedAmount } from "@/lib/currency-formatter";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function LabelComponent({ label, src }: { label: string; src: string }) {
  return (
    <div className="flex justify-between items-center w-full font-medium text-xs">
      <p>{label}</p>
      <Image src={src} alt={label} width={58} height={30} className="ml-10" />
    </div>
  );
}

const options: Option[] = [
  {
    label: <LabelComponent label="Visa Card" src="/images/card/visa.png" />,
    value: "visacard",
  },
  {
    label: (
      <LabelComponent label="Mastercard" src="/images/card/mastercard.png" />
    ),
    value: "mastercard",
  },
];

const optionPhysical: Option[] = [
  {
    label: <LabelComponent label="Verve Card" src="/images/card/visa.png" />,
    value: "vervecard",
  },
];

export default function CreateCard() {
  const { id, cardType: type } = useParams();
  const [cardType, setCardType] = useState("");

  useEffect(() => {
    sessionStorage.setItem("cardType", id as string);
  }, [id]);

  return (
    <PageLayout
      title="New Card"
      description="Here is the details of your savings"
    >
      <CardPageLayout
        title="Plan details"
        description="Here is the details of your savings"
        className="max-w-sm"
      >
        <div>
          <CustomSelect
            id="cardType"
            label="Card Type"
            name="cardType"
            value={cardType}
            onChange={setCardType}
            options={type == "virtual" ? options : optionPhysical}
            searchable={false}
          />
        </div>
        {type == "virtual" && (
          <>
            <div className="px-5 py-6 my-5">
              <div className="flex justify-between gap-2">
                <div>
                  <h1 className="text-gray-700 text-xs font-medium">
                    Card Top-Up
                  </h1>
                  <span className="text-gray-700 text-[10px]">
                    This is credited to your Junuvo Virtual Card
                  </span>
                </div>
                <div className="text-button text-xs font-semibold">
                  {formattedAmount("USD", 12)}
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-5">
                <div>
                  <h1 className="text-gray-700 text-xs font-medium">
                    Funding Fee
                  </h1>
                  <span className="text-gray-700 text-[10px]">
                    This is the charge for funding
                  </span>
                </div>
                <div className="text-button text-xs font-semibold">
                  {formattedAmount("USD", 2)}
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-5">
                <div>
                  <h1 className="text-gray-700 text-xs font-medium">
                    Card Creation Fee
                  </h1>
                  <span className="text-gray-700 text-[10px]">
                    This is charged for the creation of card
                  </span>
                </div>
                <div className="text-button text-xs font-semibold">
                  {formattedAmount("USD", 1)}
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-[#202020] px-4 py-3 bg-blue-200 rounded-xl">
              <div>Exchange Rate</div>
              <div className=" font-semibold ">
                {formattedAmount("USD", 1)} - {formattedAmount("USD", 1234)}
              </div>
            </div>
          </>
        )}

        {type == "physical" && (
          <div className="px-5 py-6 my-5">
            <div className="flex justify-between gap-2">
              <div>
                <h1 className="text-gray-700 text-xs font-medium">
                  Card Top-Up
                </h1>
                <span className="text-gray-700 text-[10px]">
                  This is charged for the creation of card
                </span>
              </div>
              <div className="text-button text-xs font-semibold">
                {formattedAmount("NGN", 1000)}
              </div>
            </div>
            <div className="flex justify-between gap-2 mt-5">
              <h1 className="text-gray-700 text-xs font-medium">Total</h1>
              <div className="text-button text-xs font-semibold">
                {formattedAmount("NGN", 1020)}
              </div>
            </div>
          </div>
        )}

        <h4 className="text-xs font-bold my-5 ">
          You will be charged{" "}
          <span className="text-button">{formattedAmount("NGN", 7346)}</span>{" "}
          from your wallet for this card
        </h4>
        <Link href={"kyc"}>
          <Button className="w-full my-5">Start KYC</Button>
        </Link>
      </CardPageLayout>
    </PageLayout>
  );
}
