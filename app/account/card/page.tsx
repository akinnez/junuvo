"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";

interface CardNavInt {
  value: string;
  label: string;
}
interface CardReqInt {
  link: string;
  label: string;
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
function CardPage() {
  const [tab, setTab] = useState("virtual");
  return (
    <PageLayout title="Cards" description="Create a saving plan as desired" isBack={false} isCardAllow={false}>
      <div className="flex gap-5 transition duration-300">
        {cardNav.map((nav) => (
          <Button
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

      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3">
            <div className="grid grid-col-2 gap-5">

            </div>
        </div>
        <Card>

        </Card>

      </div>

    </PageLayout>
  );
}
export default CardPage;

function DisplayedCard({value}:CardReqInt){
 return(
    <Card className="!p-5">

        <div className="h-9.5 w-9.5 rounded-full bg-[]">

        </div>

    </Card>
 )
}