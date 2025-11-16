import Card from "@/components/Card";
import { Edit } from "lucide-react";

interface InterestRate {
  accountName: string;
  accountNo: string;
  status: string | number | boolean;
}

function OtherDetailsSummary({ data }: { data?: InterestRate }) {
  return (
    <Card className="space-y-3 !py-5 !px-7 !shadow">
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-semibold">Other details</h4>
        <Edit height={12} width={12} />
      </div>
      <div className="space-y-3">
        <p className="flex justify-between">
          <span className="text-xs font-medium text-gray-600">Source</span>
          <span className="text-xs font-semibold text-button flex gap-1 items-center">
            {data?.accountName} | {data?.accountNo}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-xs font-medium text-gray-600">
            Savings Rollover
          </span>
          <span
            className={`text-xs font-semibold flex gap-1 items-center capitalize ${
              data?.status == "enabled" ||
              data?.status == 1 ||
              data?.status == true
                ? "text-success"
                : "text-red-500"
            }`}
          >
            {data?.status}
          </span>
        </p>
      </div>
    </Card>
  );
}
export default OtherDetailsSummary;
