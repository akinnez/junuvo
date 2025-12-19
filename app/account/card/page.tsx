"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import { ArrowLeftRight, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CardNavInt {
  value: string;
  label: string;
}
interface CardReqInt {
  link: string;
  cardType: 'Naira Card' | 'Dollar Card'
}

const cardNav: CardNavInt[] = [
  {
    label: "Virtual",
    value: "virtual",
  },
  {
    label: "Physical",
    value: "physical",
  },
];
const cards: CardReqInt[] = [
  {
    cardType:"Naira Card",
    link:""
  },
  {
    cardType:"Dollar Card",
    link:""
  },
];
function CardPage() {
  const [tab, setTab] = useState("virtual");
  return (
    <PageLayout
      title="Cards"
      description="Create a saving plan as desired"
      isBack={false}
      isCardAllow={false}
    >
      <div className="flex gap-5 transition duration-300">
        {cardNav.map((nav) => (
          <Button
          key={nav.value}
            onClick={() => setTab(nav.value)}
            className={`!px-20  !text-[#232323] ${
              nav.value == tab
                ? "!border !border-button !text-button !bg-[#DEE7FF]"
                : "!border-none !bg-white"
            } `}
          >
            {nav.label} Card
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5">    
            {
              cards.map(card=> ( 
                <DisplayedCard key={card.cardType} cardType={card.cardType} link={card.link}  />
              ))
            }  
        <div></div>
      </div>
    </PageLayout>
  );
}
export default CardPage;

function DisplayedCard(card : CardReqInt) {
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
      <div className="mt-5 flex justify-between">
        <h3>{card.cardType}</h3>
        <Link href={card.link} className="flex gap-1">Request card <ChevronRight /></Link>
      </div>
    </Card>
  );
}
