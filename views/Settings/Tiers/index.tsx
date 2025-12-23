"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { useModal } from "@/hooks/useModal";
import UpgradeTierTwo from "@/modals/settings/UpgradeTierTwo";
import UpgradeTierThree from "@/modals/settings/UpgradeTierThree";

// --- Types ---
interface Requirement {
  label: string;
  isDone: boolean;
}

interface Tier {
  id: number;
  title: string;
  isCurrent: boolean;
  singleLimit: string;
  dailyLimit: string;
  requirements: Requirement[];
}

// --- Mock Data ---
const TIERS_DATA: Tier[] = [
  {
    id: 1,
    title: "Tier 1",
    isCurrent: false,
    singleLimit: "₦0.00",
    dailyLimit: "₦0.00",
    requirements: [
      { label: "Personal Information", isDone: true },
      { label: "BVN Information", isDone: true },
      { label: "Phone number verification", isDone: true },
    ],
  },
  {
    id: 2,
    title: "Tier 2",
    isCurrent: true,
    singleLimit: "₦50,000.00",
    dailyLimit: "₦200,000.00",
    requirements: [{ label: "ID Card Upload", isDone: false }],
  },
  {
    id: 3,
    title: "Tier 3",
    isCurrent: false,
    singleLimit: "₦1,000,000.00",
    dailyLimit: "₦5,000,000.00",
    requirements: [{ label: "Utility Bill", isDone: false }],
  },
];

export default function AccountTiers() {
  const [expandedTier, setExpandedTier] = useState<number | null>(1);
  const [currentTier, setCurrentTier] = useState<number>(1);

  const { openModal, closeModal } = useModal();

  useEffect(() => {
    const getCurrentTier = sessionStorage.getItem("currentTier");
    if (getCurrentTier) {
      setCurrentTier(Number(getCurrentTier));
    }
  });

  const handleTier2Settings = () => {
    openModal({
      title: `Upgrade to Tier ${currentTier + 1}`,
      description:
        "Complete the verification checks below to upgrade your account",
      size: "md",
      component:
        currentTier == 1 ? (
          <UpgradeTierTwo closeModal={closeModal} />
        ) : (
          <UpgradeTierThree closeModal={closeModal} />
        ),
    });
  };

  return (
    <CardPageLayout
      title="Account Tiers"
      description="We will use this to contact or send you info"
      className="max-w-sm"
    >
      <div className="">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
          Tiers
        </span>

        {TIERS_DATA.map((tier) => (
          <div
            key={tier.id}
            className="bg-[#F7F8F9] rounded-xl overflow-hidden border border-gray-100 transition-all"
          >
            {/* Accordion Header */}
            <button
              onClick={() =>
                setExpandedTier(expandedTier === tier.id ? null : tier.id)
              }
              disabled={expandedTier === currentTier}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-800">{tier.title}</span>
                {tier.id == currentTier && (
                  <span className="bg-[#D1FAE5] text-[#10B981] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Current Tier
                  </span>
                )}
              </div>
              {expandedTier === tier.id ? (
                <ChevronUp className="text-gray-400" size={20} />
              ) : (
                <ChevronDown className="text-gray-400" size={20} />
              )}
            </button>

            {/* Accordion Content */}
            {expandedTier === tier.id && (
              <div className="px-5 pb-6">
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Single Transaction Limit
                    </span>
                    <span className="font-bold text-slate-900">
                      {tier.singleLimit}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Daily Transaction Limit
                    </span>
                    <span className="font-bold text-slate-900">
                      {tier.dailyLimit}
                    </span>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-300 my-4" />

                <h4 className="text-[11px] font-bold text-gray-500 uppercase mb-4">
                  Required Information
                </h4>

                <div className="flex flex-col gap-4">
                  {tier.requirements.map((req, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2
                          size={18}
                          className={
                            req.isDone ? "text-[#10B981]" : "text-gray-300"
                          }
                        />
                        <span className="text-sm text-gray-600">
                          {req.label}
                        </span>
                      </div>
                      {req.isDone && (
                        <span className="bg-[#D1FAE5] text-[#10B981] text-[10px] font-bold px-3 py-1 rounded-full">
                          Done
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Action Button */}
        <button
          onClick={handleTier2Settings}
          className="w-full bg-[#005BAB] text-white font-bold py-4 rounded-xl mt-4 hover:bg-[#004a8c] transition-colors shadow-sm"
        >
          Upgrade your account
        </button>
      </div>
    </CardPageLayout>
  );
}
