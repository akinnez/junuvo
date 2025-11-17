import Card from "@/components/Card";
import { formattedAmount } from "@/lib/currency-formatter";
import { Edit } from "lucide-react";

interface InterestRate {
  savingsType: string;
  savingsName: string;
  savingsAmount: string | number;
  startDate: string;
  endDate: string;
  currency: string;
}

function PersonalSummary({ data }: { data?: InterestRate }) {
  return (
    <Card className="space-y-3 !py-5 !px-7 !shadow">
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-bold">Plan Information</h4>
        <Edit height={12} width={12} />
      </div>
      <div className="space-y-3">
        <p className="flex justify-between">
          <span className="text-xs font-medium text-gray-600">
            Savings Type
          </span>
          <span className="text-xs font-semibold text-button flex gap-1 items-center">
            {data?.savingsType}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-xs font-medium text-gray-600">
            Savings Name
          </span>
          <span className="text-xs font-semibold text-[#232323] flex gap-1 items-center">
            {data?.savingsName}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-xs font-medium text-gray-600">
            How much do you want to save
          </span>
          <span className="text-xs font-semibold text-[#232323] flex gap-1 items-center">
            {formattedAmount(
              (data?.currency as string) || "NGN",
              data?.savingsAmount || 0
            )}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-xs font-medium text-gray-600">Start Date</span>
          <span className="text-xs font-semibold text-[#232323] flex gap-1 items-center">
            {data?.startDate}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-xs font-medium text-gray-600">
            How many months do you want to save
          </span>
          <span className="text-xs font-semibold text-[#232323] flex gap-1 items-center">
            {/* Note: Startdate month - enddate Month */}4
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-xs font-medium text-gray-600">End Date</span>
          <span className="text-xs font-semibold text-[#232323] flex gap-1 items-center">
            {data?.endDate}
          </span>
        </p>
      </div>
    </Card>
  );
}
export default PersonalSummary;
