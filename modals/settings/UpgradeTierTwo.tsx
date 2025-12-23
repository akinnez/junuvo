"use client";

import Button from "@/components/Button";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import SelfieView from "./SelfieView";

export default function UpgradeTierTwo({ closeModal }: { closeModal: any }) {
  const { openModal } = useModal();

  const handleOpenSelfie = () => {
    closeModal();
    openModal({
      title: "Take your selfie",
      description: "Take your picture and capture your picture",
      size: "md",
      component: <SelfieView closeModal={closeModal} />,
    });
  };

  return (
    <div>
      <div className="text-[10px] space-y-3 mb-5 p-3 bg-blue-100 border border-l-2 border-button rounded-sm">
        <h4 className="font-semibold text-gray-500">BENEFITS</h4>
        <div className="flex justify-between ">
          <p className="text-gray-700">Single Transaction Limit</p>
          <p className="font-bold text-tertiary">
            {formattedAmount("NGN", 50000)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Daily Transaction Limit</p>
          <p className="font-bold text-tertiary">
            {formattedAmount("NGN", 50000)}
          </p>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-500">REQUIREMENTS</h4>
        <div className="space-y-3 mb-5">
          {requirement.map((item) => (
            <div
              key={item.label}
              className="text-[10px] p-3 bg-gray-100 rounded-sm"
            >
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-gray-700 font-semibold ">{item.label}</p>
                  <p className="!text-[8px] text-gray-700">
                    {item.description}
                  </p>
                </div>
                <div>
                  <div className="py-1 px-2 bg-[#FFE697] text-[#AE5A00] rounded-4xl text-[8px] flex items-center capitalize">
                    {item.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button className="w-full" onClick={handleOpenSelfie}>
          Continue
        </Button>
      </div>
    </div>
  );
}

const requirement = [
  {
    label: "Selfie",
    description: "Take your selfie",
    status: "pending",
  },
  {
    label: "Employment Information",
    description: "Supply your employment information",
    status: "pending",
  },
  {
    label: "Source of Income",
    description: "Enter your source of income",
    status: "pending",
  },
  {
    label: "Expected Monthly Income",
    description: "Provide your expected monthly income",
    status: "pending",
  },
];
