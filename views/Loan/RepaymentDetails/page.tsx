"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { CustomSelect } from "@/components/Select";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import LoanConfirmation from "@/modals/loans/LoanConfirmation";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import React, { useState } from "react";
import InstallmentData from "../InstallmentData";
import {
  amountOptions,
  installments,
  loanDetails,
  tenureOptions,
} from "@/lib/mock-loan";

export const RepaymentScheduleSection = () => {
  const [debitAccount, setDebitAccout] = useState("");
  const [loan, setLoan] = useState("108000");
  const [loanTeunre, setLoanTenure] = useState("180 days");

  const { closeModal, openModal } = useModal();

  const handleOpenSettings = () => {
    openModal({
      title: "Confirm your loan",
      description: "We have an offer for you.",
      size: "sm",
      component: <LoanConfirmation closeModal={closeModal} />,
    });
  };

  return (
    <section className="w-full">
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-1 items-start gap-3">
          <Card className="!px-2 !py-3 !rounded-md mb-5 !shadow">
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex items-center gap-0.5 px-0 py-1 w-full">
                  <h3 className="flex-1 [font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-grey-900 text-xs tracking-[0] leading-[17.4px]">
                    Choose amount
                  </h3>
                </div>

                <div className="h-[50px] flex items-center gap-3 p-4 bg-shadewhite rounded-md border border-solid border-[#d0d4dd] w-full">
                  <MinusCircleIcon className="w-4 h-4 text-white fill-button cursor-pointer" />
                  <div className="flex-1 flex items-center justify-center gap-2">
                    <span className="font-bold text-[#232323] text-base text-center leading-[23.2px] tracking-[0] whitespace-nowrap">
                      {formattedAmount("NGN", loan)}
                    </span>
                  </div>
                  <PlusCircleIcon className="w-4 h-4 text-white fill-button cursor-pointer" />
                </div>

                <div className="grid grid-cols-3 gap-1 w-full">
                  {amountOptions.map((option, index) => (
                    <Button
                      key={index}
                      className={`!p-1 !rounded-sm ${
                        option.value !== loan && "!bg-[#f4f4f4] !text-button"
                      }`}
                      onClick={() => setLoan(option.value)}
                    >
                      <span
                        className={`font-semibold text-xs text-center tracking-[0] leading-5 ${
                          option.value === loan ? "text-white" : "text-button"
                        }`}
                      >
                        {formattedAmount("NGN", option.label)}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="!px-2 !py-3 !rounded-md mb-5 !shadow">
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex items-center gap-0.5 px-0 py-1 w-full">
                  <h3 className="flex-1 [font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-grey-900 text-xs tracking-[0] leading-[17.4px]">
                    Choose a Loan Tenure
                  </h3>
                </div>

                <div className="flex flex-col items-start gap-3 w-full">
                  <div className="grid grid-cols-3 gap-2 w-full">
                    {tenureOptions.map((option, index) => (
                      <Button
                        key={index}
                        className={`!p-1 !rounded-sm text-button flex flex-col ${
                          option.days.toLowerCase() == loanTeunre.toLowerCase()
                            ? "!bg-[#E6F4FF] !border !border-button"
                            : "!bg-[#f4f4f4]"
                        }`}
                        onClick={() => setLoanTenure(option.days.toLowerCase())}
                      >
                        <span className="font-semibold text-[#0260ae] text-xs text-center tracking-[0] leading-5">
                          {option.days}
                        </span>
                        <span className="font-normal text-[#0260ae] text-[10px] text-center tracking-[0] leading-5">
                          {option.rate}
                        </span>
                      </Button>
                    ))}
                  </div>

                  <div className="border-t border-dashed border-gray-300 h-1 w-full"></div>

                  <div className="flex flex-col items-start gap-2 w-full">
                    {loanDetails.map((detail, index) => (
                      <div
                        key={index}
                        className="flex justify-between w-full text-[10px]"
                      >
                        <span className="text-gray-600 ">{detail.label}</span>
                        <span className="font-semibold text-[#231F20]">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="w-full mb-5">
            <CustomSelect
              id="debitAccount"
              label="Select Account to credit"
              name="debitAccount"
              onChange={setDebitAccout}
              options={options}
              placeholder="Select one"
              value={debitAccount}
              searchable={false}
            />
          </div>

          <Button className="w-full !rounded-lg" onClick={handleOpenSettings}>
            Apply now
          </Button>
        </div>

        <div className="col-span-1 items-start gap-4">
          <header className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col w-[327px] items-start gap-1">
                <h2 className=" font-bold text-[#1e1e1e] text-xl tracking-[0] leading-[24.0px]">
                  Repayment Schedule
                </h2>
                <p className=" font-normal text-[#575555] text-xs tracking-[0] leading-[14.4px]">
                  Check out your repayment plan
                </p>
              </div>
            </div>
          </header>

          <Card className="!px-2 !py-3 !rounded-md my-5 !shadow !bg-[#E9F2FF]">
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-0.5 w-full">
                <span className="flex-1 font-normal text-grey-600 text-xs tracking-[0] leading-5">
                  Total Amount Repayable
                </span>
                <span className="font-bold text-tertairy text-xs tracking-[0] leading-5 whitespace-nowrap">
                  {formattedAmount("NGN", 100000)}
                </span>
              </div>
              <div className="flex items-start gap-0.5 w-full">
                <span className="flex-1 font-normal text-grey-600 text-xs tracking-[0] leading-5">
                  Installment
                </span>
                <span className="font-bold text-tertairy text-xs tracking-[0] leading-5 whitespace-nowrap">
                  6
                </span>
              </div>
            </div>
          </Card>
          <div className="border-t border-dashed border-gray-300 h-1 w-full py-3"></div>
          <div className="flex flex-col items-start gap-2 w-full">
            {installments.map((installment, index) => {
              const {
                amount,
                date,
                installment: payment,
                status,
              } = installment;
              return (
                <InstallmentData
                  key={index}
                  amount={amount}
                  date={date}
                  installment={payment}
                  status={status}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const options: Option[] = [
  { label: "Account1", value: "account1" },
  { label: "Account2", value: "account2" },
];
