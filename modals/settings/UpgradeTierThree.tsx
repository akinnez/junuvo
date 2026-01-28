"use client";

import Button from "@/components/Button";
import { formattedAmount } from "@/lib/currency-formatter";
import { useRouter } from "next/navigation";

export default function UpgradeTierThree({ closeModal }: { closeModal: any }) {
  const { push } = useRouter();

  const handleOpenSelfie = () => {
    closeModal();
    push("/${params.appType}settings/address-proof");
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
        <h4 className="font-semibold text-gray-500 text-[10px]">
          REQUIREMENTS
        </h4>
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
    label: "Proof of Address Verification",
    description:
      "Utility bill such as power bill, waste bill or water bill not older than 3 months or Rent agreement or Proof of Tax remittance",
    status: "pending",
  },
];
