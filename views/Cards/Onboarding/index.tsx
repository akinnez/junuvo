import Card from "@/components/Card";
import { formattedAmount } from "@/lib/currency-formatter";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardReqInt {
  link: string;
  cardType: "Naira Card" | "Dollar Card";
}

const cards: CardReqInt[] = [
  {
    cardType: "Naira Card",
    link: `/account/card/create/naira`,
  },
  {
    cardType: "Dollar Card",
    link: "/account/card/create/dollar",
  },
];

export default function NoCardPage() {
  return (
    <div className="grid grid-cols-5 gap-3 mt-5">
      <div className="col-span-3 grid grid-cols-2 gap-5 h-32">
        {cards.map((card) => (
          <DisplayedCard
            key={card.cardType}
            cardType={card.cardType}
            link={card.link}
          />
        ))}
      </div>
      <div className="col-span-2">
        <Card className="!py-3 !px-4">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-xl font-bold text-[#232323]">
              About Junuvo Virtual Card
            </h2>
            <span className="text-gray-500">
              Take control of your money and pave your way to a brighter
              financial future
            </span>
          </div>
          <div className="flex justify-between gap-2">
            <div>
              <h1 className="text-[#232323] text-sm font-bold">
                Card Creation Fee
              </h1>
              <span className="text-gray-500 text-xs">
                A non refundable fee would be deducted for card Issuance
              </span>
            </div>
            <div className="text-[#232323] text-sm font-bold">
              {formattedAmount("USD", 1)}
            </div>
          </div>
          <div className="flex justify-between gap-2 mt-5">
            <div>
              <h1 className="text-[#232323] text-sm font-bold">
                Cross Border Fee
              </h1>
              <span className="text-gray-500 text-xs">
                A fee charged for cross border payment
              </span>
            </div>
            <div className="text-[#232323] text-sm font-bold">2.5%</div>
          </div>
          <div className="flex justify-between gap-2 mt-5">
            <div>
              <h1 className="text-[#232323] text-sm font-bold">
                Domestic Failed Fee
              </h1>
              <span className="text-gray-500 text-xs">
                A fee you will be charged per transaction value for failed
                transactions due to insufficient funds withIn the US
              </span>
            </div>
            <div className="text-[#232323] text-sm font-bold">
              {formattedAmount("USD", 0.06)}
            </div>
          </div>
          <div className="flex justify-between gap-2 mt-5">
            <div>
              <h1 className="text-[#232323] text-sm font-bold">
                International Failed Fee
              </h1>
              <span className="text-gray-500 text-xs">
                A fee you will be charged per transaction value for failed
                transactions due to insufficient funds outside the US
              </span>
            </div>
            <div className="text-[#232323] text-sm font-bold">
              {formattedAmount("USD", 0.4)}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function DisplayedCard(card: CardReqInt) {
  return (
    <Card className="!p-5">
      <div className="h-9.5 w-9.5 rounded-full bg-[#E8F4FF] flex justify-center items-center">
        <Image
          src={"/images/ripple.png"}
          alt="icon"
          width={20}
          height={20}
          loading="eager"
        />
      </div>
      <div className="mt-5 flex justify-between items-center">
        <h3 className="font-bold text-gray-800">{card.cardType}</h3>
        <Link
          href={card.link}
          className="flex gap-1 text-xs !text-button font-semibold"
        >
          Request card <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}
