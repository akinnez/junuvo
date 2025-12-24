"use client";

import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { useModal } from "@/hooks/useModal";
import SelectErrorType from "@/modals/settings/SelectErrorType";
import Image from "next/image";

export default function Support() {
  const { closeModal, openModal } = useModal();
  const handleOpenHelp = () => {
    openModal({
      size: "sm",
      title: "Select error type",
      component: <SelectErrorType closeModal={closeModal} />,
    });
  };

  return (
    <CardPageLayout
      title="Customer Support"
      description="Contact us any time"
      className="max-w-sm"
    >
      <div className="space-y-5">
        {report.map((rpt) => {
          const { label, icon, description, useModal: modal } = rpt;
          return (
            <div
              key={label}
              className={`flex gap-4 items-center p-3 border border-[#FCF3F3] rounded-lg ${
                modal ? "cursor-pointer" : ""
              }`}
              onClick={modal ? handleOpenHelp : () => {}}
            >
              <div className="h-11 w-11 rounded-full bg-[#F4F4F4] flex justify-center items-center">
                <Image
                  src={icon}
                  alt={label}
                  width={24}
                  height={24}
                  loading="eager"
                />
              </div>
              <div className="text-xs text-gray-800 space-y-2">
                <h4 className="font-bold ">{label}</h4>
                <span className="font-medium ">{description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </CardPageLayout>
  );
}

const report = [
  {
    icon: "/images/icons/smartphone.png",
    label: "Report an error",
    description: "Submit any errors",
    useModal: true,
  },
  {
    icon: "/images/icons/smartphone.png",
    label: "Phone Number",
    description: "+2348059512195,+2348059512195",
  },
  {
    icon: "/images/icons/message.png",
    label: "Mail us",
    description: "support@junuvo.com",
  },
  {
    icon: "/images/icons/whatsapp.png",
    label: "Whatsapp",
    description: "+2348059512195",
  },
  {
    icon: "/images/icons/twitter.png",
    label: "Instagram",
    description: "@junuvoofficial",
  },
  {
    icon: "/images/icons/www.png",
    label: "Website",
    description: "www.junuvo.com",
  },
  {
    icon: "/images/icons/fluent.png",
    label: "Live Chat",
    description: "Talk to any of our agent here",
  },
];
