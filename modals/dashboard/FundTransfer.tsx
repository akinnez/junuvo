"use client";

import Card from "@/components/Card";
import { QuickAction } from "@/components/Dashboard/QuickActionCard";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link, { LinkProps } from "next/link";

export default function FundAccount({ closeModal }: { closeModal: any }) {
  const {
    appType,
    navigate: { saveBeneficiary, bankTransfer },
    getPath,
  } = useAppNavigation();

  const fundAccountCard: QuickAction[] = [
    {
      id: 2,
      label: "To Bank Account",
      description: "Local transfer to banks in Nigeria",
      icon: "/images/icons/location.svg",
      link: bankTransfer(appType),
    },
    {
      id: 3,
      label: "Multiple Transfer",
      description: "Transfer to multiple beneficiaries",
      icon: "/images/bills/sub.png",
      link: getPath("multipleTransfer", "newRecipient"),
    },
    {
      id: 4,
      label: "Add New Beneficiary",
      description: "Save beneficiary for later",
      icon: "/images/icons/location.svg",
      link: saveBeneficiary(appType),
    },
  ];

  const handleSubmit = (linkVal: any) => {
    console.log("lo");
    const link: LinkProps = {
      href: linkVal,
    };

    console.log(link.href);

    typeof linkVal == "string" ? link.href : () => linkVal();
  };
  return (
    <div className="space-y-4">
      <Card className="p-3! shadow! cursor-pointer">
        <div
          className="flex justify-between items-center gap-3.5"
          onClick={() => {}}
        >
          <div className="flex gap-3">
            <div className="w-11 h-11 rounded-full bg-[#FFF2E7] flex justify-center items-center">
              <Image
                src="/images/icons/location.svg"
                alt="fund transfer"
                width={14}
                height={14}
                loading="eager"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800">
                Fund My Account
              </h3>
              <span className="text-xs font-medium text-gray-800">
                Transfer money between my accounts
              </span>
            </div>
          </div>
          <div>
            <ChevronRight size={16} />
          </div>
        </div>
      </Card>
      {fundAccountCard.map((ways) => (
        <Link key={ways.id} href={ways.link} onClick={closeModal}>
          <Card className="p-3! shadow! cursor-pointer">
            <div
              className="flex justify-between items-center gap-3.5"
              onClick={() => handleSubmit(ways.link)}
            >
              <div className="flex gap-3">
                <div className="w-11 h-11 rounded-full bg-[#FFF2E7] flex justify-center items-center">
                  <Image
                    src={ways.icon}
                    alt={ways.label}
                    width={14}
                    height={14}
                    loading="eager"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">
                    {ways.label}
                  </h3>
                  <span className="text-xs font-medium text-gray-800">
                    {ways.description}
                  </span>
                </div>
              </div>
              <div>
                <ChevronRight size={16} />
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
