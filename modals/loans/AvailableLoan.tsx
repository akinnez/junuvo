import Button from "@/components/Button";
import { formattedAmount } from "@/lib/currency-formatter";
import Image from "next/image";
import Link from "next/link";

export default function AvailableLoan({ closeModal }: { closeModal: any }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="my-5 space-y-4 text-center">
        <Image
          src={"/images/loan/success.png"}
          alt="success"
          width={134}
          height={122}
          className="mx-auto"
        />
        <span className="text-sm font-medium text-[#575555]">
          You have available loan limit of
        </span>
        <h3 className="font-bold text-[40px] text-[#1E1E1E]">
          {formattedAmount("NGN", 120000)}
        </h3>
        <div className="">
          <Link href={"/${params.appType}loan/get-fund"} onClick={closeModal}>
            <Button size="sm" className="w-full">
              Get Funds
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
