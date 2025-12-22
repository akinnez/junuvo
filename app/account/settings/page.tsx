"use client";

import React, { useState } from "react";
import { Camera, ChevronRight } from "lucide-react";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import PageLayout from "@/components/PageLayout";
import Card from "@/components/Card";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import ProfileSettingsPage from "@/views/Settings/ProfilePage";
import SecurityPage from "@/views/Settings/Security";
import AccountTiers from "@/views/Settings/Tiers";

// --- Types ---
interface PersonalDetailProps {
  label: string;
  value: string;
}

// --- Sub-Components ---
const DetailItem = ({ label, value }: PersonalDetailProps) => (
  <div className="flex justify-between py-3">
    <span className="text-gray-500 text-xs font-medium">{label}</span>
    <span className="text-[#353D48] text-xs font-semibold">{value}</span>
  </div>
);

const TabButton = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-2.5 py-1.5 text-xs  transition-colors ${
      isActive
        ? "text-button bg-blue-50 border font-bold border-button rounded-sm"
        : "text-gray-500 hover:text-gray-700 font-semibold"
    }`}
  >
    {label}
  </button>
);

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = [
    "Profile",
    "Security",
    "Support",
    "Preferences",
    "Tier Management",
  ];

  return (
    <PageLayout
      title="Settings"
      description="Set as you desire"
      isCardAllow={false}
      isBack={false}
    >
      {/* Tabs Navigation */}
      <div className="inline-flex p-2 gap-2.5 bg-white">
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            label={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      <Card className="my-5 !shadow">
        {/* Main Content Card */}

        {activeTab == "Profile" && <ProfileSettingsPage />}
        {activeTab == "Security" && <SecurityPage />}
        {activeTab == "Support" && <ProfileSettingsPage />}
        {activeTab == "Preferences" && <ProfileSettingsPage />}
        {activeTab == "Tier Management" && <AccountTiers />}
      </Card>
    </PageLayout>
  );
}
