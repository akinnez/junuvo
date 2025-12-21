"use client";
import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import HasCardPage from "@/views/Cards/HasCard";
import NoCardPage from "@/views/Cards/Onboarding";
import { useEffect, useState } from "react";

interface CardNavInt {
  value: string;
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

export default function CardPage() {
  const [tab, setTab] = useState("virtual");
  const [hasCard, setHasCard] = useState(false);

  useEffect(() => {
    const getCardAvailability = JSON.parse(
      sessionStorage.getItem("set_card") as string
    );
    if (getCardAvailability) setHasCard(getCardAvailability);
  }, []);

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
      <div className="my-5">
        {!hasCard && <NoCardPage />}
        {hasCard && <HasCardPage />}
      </div>
    </PageLayout>
  );
}
