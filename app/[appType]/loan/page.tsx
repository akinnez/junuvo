"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import { useModal } from "@/hooks/useModal";
import { installments } from "@/lib/mock-loan";
import AvailableLoan from "@/modals/loans/AvailableLoan";
import InstallmentData from "@/views/Loan/InstallmentData";
import { LoanDetailsSection } from "@/views/Loan/LoadDetails";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Loan() {
  const [isLoanAvailable, setLoanAvailable] = useState(false);

  useEffect(() => {
    const getIsLoan = JSON.parse(sessionStorage.getItem("set_loan") as string);
    if (getIsLoan) setLoanAvailable(getIsLoan);
  }, []);

  return (
    <PageLayout
      title="Loans"
      description="Create a saving plan as desired"
      isBack={false}
      isCardAllow={isLoanAvailable}
    >
      {!isLoanAvailable && <NoLoan />}
      {isLoanAvailable && <LoanAvailable />}
    </PageLayout>
  );
}

function NoLoan() {
  const { closeModal, openModal } = useModal();

  const handleOpenSettings = () => {
    openModal({
      title: "Loan Amount",
      description: "We have an offer for you.",
      size: "sm",
      component: <AvailableLoan closeModal={closeModal} />,
    });
  };
  return (
    <div className="flex justify-center items-center max-h-[100vh]">
      <div className="text-center w-full max-w-[326px]">
        <Image
          src={"/images/loan/loan_donation.png"}
          alt="loan donation"
          width={237}
          height={237}
        />
        <h3 className="text-2xl font-bold text-[#232323] my-3.5">
          Get that idea started with more funds
        </h3>
        <span className="text-gray-500">
          Take control of your money and pave your way to a brighter financial
          future
        </span>

        <Button className="w-full mt-5 mb-3.5" onClick={handleOpenSettings}>
          Get Loan Limit
        </Button>

        <Link href={""} className="text-sm !text-button">
          More about Junuvo Loans
        </Link>
      </div>
    </div>
  );
}

function LoanAvailable() {
  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="col-span-2">
        <LoanDetailsSection />
      </div>
      <div className="col-span-3">
        <Card className=" !py-3 !px-4 !w-full !max-w-md !rounded-sm !shadow">
          <h3 className="text-xs font-semibold text-gray-900 mb-4">
            Repayment Schedule
          </h3>
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
        </Card>
      </div>
    </div>
  );
}
