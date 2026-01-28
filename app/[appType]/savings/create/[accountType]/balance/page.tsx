"use client";
import Button from "@/components/Button";
import { SwitchForm, ToggleSwitch } from "@/components/CustomToggle";
import { formattedAmount } from "@/lib/currency-formatter";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

function AccountBalance() {
  const { accountType } = useParams();
  const [val, setVal] = useState(false);

  const handleOnChange = (val: boolean) => {
    setVal(val);
  };

  return (
    <>
      <div className="w-full border-1 border-[#E4E7EC] border-dashed bg-[#F6F6F6] rounded-2xl py-3 px-5 flex justify-center items-center">
        <div className="text-center space-y-5">
          <span className="text-[10px] text-gray-500">Available Balance</span>
          <p className="text-bold text-2xl text-gray-800 font-bold">
            {formattedAmount("NGN", 0)}
          </p>
        </div>
      </div>
      <div className=" mt-3">
        <p className="text-[10px] text-gray-500">Saving Rollover</p>
        <div className="flex justify-between items-center">
          <p className="text-xs text-[#424242] font-medium">
            Allow Auto-Rollover after savings maturity
          </p>
          <ToggleSwitch
            field={{
              name: "rolloverSavings",
              onChange: handleOnChange,
              value: val,
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Button
          className="!bg-[#E5E5E5] !text-black !font-bold"
          onClick={() => history.back()}
        >
          Back
        </Button>
        <Link href={`/${params.appType}savings/create/${accountType}/summary`}>
          <Button className="font-bold w-full">Next</Button>
        </Link>
      </div>
    </>
  );
}
export default AccountBalance;
