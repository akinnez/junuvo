"use client";
import { useCurrentStepValue } from "@/signal_store/services/shared-service";
import React from "react";

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
  const currentStep = useCurrentStepValue();

  return (
    <nav className="flex flex-row md:flex-col gap-5 md:gap-0 md:my-8">
      {steps.map((step, idx) => (
        <React.Fragment key={step.label}>
          <div
            className={`flex flex-col md:flex-row  items-center py-2.5 rounded gap-x-1 sm:gap-x-3 `}
          >
            <div
              className={`font-bold rounded-full w-12 h-12 flex justify-center items-center  transition-colors duration-200 text-xl ${
                currentStep >= idx + 1
                  ? "bg-[#00ADEF] text-white"
                  : "bg-gray-200 text-gray-700"
              }
              ${currentStep > idx + 1 ? "bg-[#00ADEF] text-white" : ""}
                                `}
            >
              {idx + 1}
            </div>{" "}
            <div
              className={`flex flex-col gap-y-1 leading-tight text-center md:text-left
                ${
                  currentStep >= idx + 1
                    ? "text-primary md:text-white"
                    : "md:text-white/50"
                }
                `}
            >
              <span>{step.label}</span>
              <span className="!text-xs hidden md:block">{step.sublabel}</span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Stepper;
