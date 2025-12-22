"use client";

import { formattedAmount } from "@/lib/currency-formatter";

export default function UpgradeTierTwo({ closeModal }: { closeModal: any }) {
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
      </div>
    </div>
  );
}
