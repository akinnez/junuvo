import Card from "@/components/Card";
import { CustomSelect } from "@/components/Select";
import { formattedAmount } from "@/lib/currency-formatter";
import { useState } from "react";

const options = [
  { value: "jan", label: "January" },
  { value: "feb", label: "February" },
  { value: "mar", label: "March" },
  { value: "apr", label: "April" },
  { value: "may", label: "May" },
  { value: "jun", label: "June" },
  { value: "jul", label: "July" },
  { value: "aug", label: "August" },
  { value: "sep", label: "September" },
  { value: "oct", label: "October" },
  { value: "nov", label: "November" },
  { value: "dec", label: "December" },
];
function TransactionDetails() {
  const [month, setMonth] = useState("jan");

  const onChange = (value: any) => {
    setMonth(value);
  };

  return (
    <>
      <div className=" grid grid-cols-2">
        <Card className="!py-3 !px-4 !shadow-none !rounded-lg">
          <div className="grid grid-cols-4 py-3">
            <CustomSelect
              id="months"
              name="months"
              label=""
              options={options}
              value={month}
              onChange={onChange}
              searchable={false}
              className="!text-xs !font-medium !text-[#353D48]"
              buttonClass="!border-0 !shadow-none !py-1.5 focus:!ring-0"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="py-3 px-4 border border-gray-300 rounded-lg flex gap-x-2 items-center">
              <span className="text-gray-400 text-xs">In:</span>
              <span className="font-semibold text-[#232323] text-sm">
                {formattedAmount("NGN", 20000)}
              </span>
            </div>
            <div className="py-3 px-4 border border-gray-300 rounded-lg flex gap-x-2 items-center">
              <span className="text-gray-400 text-xs">Out:</span>
              <span className="font-semibold text-[#232323] text-sm">
                {formattedAmount("NGN", 20000)}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
export default TransactionDetails;
