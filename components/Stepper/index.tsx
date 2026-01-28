"use client";
import { useSessionStorage } from "@/hooks/use-session-storage";
import { effect } from "nabd";
import React, { useEffect, useState } from "react";

const steps = [
  {
    label: "Account Selection",
    sublabel: "Select your desired account",
    // path: "/auth/create",
  },
  {
    label: "Set your profile",
    sublabel: "Provide your profile details",
    // path: "/auth/create/profile",
  },
  {
    label: "Set Transaction Pin",
    sublabel: "Secure your account",
    // path: "/auth/create/pin",
  },
];

function Stepper() {
  const { getFromSession } = useSessionStorage();

  const currentStep = getFromSession("app-step", "1");

  return (
    <nav className="flex flex-row md:flex-col gap-5 md:gap-0 md:my-8">
      {steps.map((step, idx) => {
        const stepNumber = idx + 1;
        const isActive = currentStep >= stepNumber;
        const isCompleted = currentStep > stepNumber;
        return (
          <div
            key={step.label}
            className={`flex flex-col md:flex-row  items-center py-2.5 rounded gap-x-1 sm:gap-x-3 `}
          >
            <div
              className={`rounded-full w-12 h-12 flex justify-center items-center  transition-colors duration-200 text-xl ${
                isActive
                  ? "bg-[#00ADEF] text-white font-bold"
                  : "bg-transparent text-gray-400  border border-secondary"
              }
              ${isCompleted ? "bg-[#00ADEF] text-white" : ""}
                                `}
            >
              {stepNumber}
            </div>{" "}
            <div
              className={`flex flex-col gap-y-1 leading-tight text-center md:text-left
                ${isActive ? "text-primary md:text-white" : "md:text-white/50"}
                `}
            >
              <span>{step.label}</span>
              <span className="!text-xs hidden md:block">{step.sublabel}</span>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

export default Stepper;
