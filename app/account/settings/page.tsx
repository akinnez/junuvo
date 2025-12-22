"use client";

import React, { useState } from "react";
import { Camera, ChevronRight } from "lucide-react";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import PageLayout from "@/components/PageLayout";
import Card from "@/components/Card";
import Image from "next/image";

// --- Types ---
interface PersonalDetailProps {
  label: string;
  value: string;
}

// --- Sub-Components ---
const DetailItem = ({ label, value }: PersonalDetailProps) => (
  <div className="flex justify-between py-3">
    <span className="text-gray-500 text-sm">{label}</span>
    <span className="text-gray-900 text-sm font-medium">{value}</span>
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
        <CardPageLayout
          title="My Profile"
          description="Here is the details of your profile"
          className="max-w-sm"
        >
          {/* Main Content Card */}

          <div className="flex flex-col items-center max-w-md mx-auto">
            {/* Profile Picture */}
            <div className="relative mb-4">
              <div className="w-26 h-26 rounded-full overflow-hidden border-2 border-gray-100">
                <Image
                  src="/images/image.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  width={104}
                  height={1104}
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md border border-gray-100 hover:bg-gray-50 cursor-pointer">
                <Camera size={14} className="text-gray-600" />
              </button>
            </div>

            <h3 className="text-xl font-semibold text-tertiary">
              Gabriella Oyebode
            </h3>
            <p className="text-xs font-medium text-gray-500 mb-6">
              ogunwa.gabriel@gmail.com
            </p>

            {/* Current Tier Banner */}
            <div className="w-full bg-gray-50 rounded-3xl p-3 text-center mb-8">
              <span className="inline-block bg-green-200 text-success text-[8px] font-medium px-3 py-1 rounded-[50px] mb-2">
                Your current tier is Tier 1
              </span>
              <p className="text-[8px] text-gray-500 mb-2">
                Enjoy more benefits with amazing features
              </p>
              <button className="text-[8px] font-semibold text-teal-600 flex items-center justify-center mx-auto cursor-pointer">
                Upgrade account <ChevronRight className="h-3 w-3" />
              </button>
            </div>

            {/* Personal Details Section */}
            <div className="w-full bg-gray-100 p-3">
              <div className="flex justify-between items-center mb-5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Personal Details
                </span>
                <button className="text-blue-500 text-[10px] font-bold flex items-center">
                  Edit <ChevronRight size={10} />
                </button>
              </div>
              <Card className="!py-2 !px-4 !shadow-none">
                <DetailItem label="First Name" value="Gabriel" />
                <DetailItem label="Last Name" value="Oyebode" />
                <DetailItem label="Phone Number" value="08162503027" />
                <DetailItem label="Date of Birth" value="24 / 07 / 1982" />
              </Card>
            </div>
            <div className="w-full bg-gray-100 p-3 my-5">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                Account Level
              </p>

              <Card className="!py-2 !px-4 !shadow-none">
                <div className="p-4 bg-white flex justify-between items-center">
                  <span className="text-sm text-gray-900 font-medium">
                    Tier 1
                  </span>
                  <button className="text-sm font-bold text-blue-600 hover:underline">
                    Upgrade account
                  </button>
                </div>
              </Card>
            </div>

            {/* Delete Account Link */}
            <button className="text-red-500 text-sm font-medium hover:underline">
              Delete Account
            </button>
          </div>
        </CardPageLayout>
      </Card>
    </PageLayout>
  );
}
