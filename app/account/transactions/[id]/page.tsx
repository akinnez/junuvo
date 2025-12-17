"use client";
import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { formattedAmount } from "@/lib/currency-formatter";
import { Copy, DownloadIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const data = {
  reference: "CQ53HSNX999",
  narration: "Take care",
  status: "SUCCESS",
  type: "TRANSFER",
  fees: 25,
};
const beneficiary = {
  accountName: "Ogunsua Gabriel Oyebode",
  bank: "Guaranty Trust Bank",
  accountNo: "25884592400",
};
const sender = {
  accountName: "Ogunsua Gabriel Oyebode",
  bank: "Guaranty Trust Bank",
};

function TransactionDetailsPage() {
  const { id } = useParams();

  //   const;
  {
    /* Resolve this */
  }
  return (
    <PageLayout
      title="Transaction Details"
      description="Review your transaction details"
      showButton={true}
      //   buttonFn={}
      buttonStyle="!bg-[#231F20]"
      buttonLabel={
        <Link href={`/account/transactions/${id}/report`}>
          <div className="text-white flex items-center gap-3">
            <DownloadIcon className="h-4 w-4" />
            Report Transaction
          </div>
        </Link>
      }
    >
      <CardPageLayout
        title="Transaction Summary"
        description="Here is the summary of the transaction to be made"
        className="max-w-sm"
      >
        <div className="text-center text-gray-900 space-y-5 mb-10">
          <span className="font-semibold text-sm">Amount</span>
          <h3 className="font-bold text-2xl ">
            {formattedAmount("NGN", 40000)}
          </h3>
        </div>
        <div className="space-y-5">
          <hr className="text-gray-200" />
          <div className="space-y-5 bg-[#FBFBFB] p-2">
            <p className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">
                Reference
              </span>
              <span className="text-sm font-semibold text-[#232323] flex gap-1.5 items-center">
                {data.reference}
                <Copy className="h-4 w-4" />
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">
                Narration
              </span>
              <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
                {data.narration}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Status</span>
              <span className="text-sm font-semibold text-success flex gap-1 items-center">
                {data.status}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">
                Transaction Type
              </span>
              <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
                {data.type}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Fees</span>
              <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
                {formattedAmount("NGN", data.fees)}
              </span>
            </p>
          </div>

          <div className="text-sm text-button font-bold">
            Beneficiary Details
          </div>
          <div className="space-y-5 bg-[#FBFBFB] p-2">
            <p className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">
                Account Name
              </span>
              <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
                {beneficiary.accountName}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Bank</span>
              <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
                {beneficiary.bank}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">
                Account Number
              </span>
              <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
                {beneficiary.accountNo}
              </span>
            </p>
          </div>

          <div className="text-sm text-button font-bold">Sender Details</div>
          <div className="space-y-5 bg-[#FBFBFB] p-2">
            <p className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">
                Account Name
              </span>
              <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
                {sender.accountName}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Bank</span>
              <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
                {sender.bank}
              </span>
            </p>
          </div>

          <hr className="text-gray-200" />
        </div>
        <div className="my-7">
          <Button className="w-full">Share Receipt</Button>
        </div>
      </CardPageLayout>
    </PageLayout>
  );
}

export default TransactionDetailsPage;
