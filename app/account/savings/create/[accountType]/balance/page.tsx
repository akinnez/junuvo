import Button from "@/components/Button";
import { formattedAmount } from "@/lib/currency-formatter";

function AccountBalance() {
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
      <div className=" space-y-5 mt-3">
        <p className="text-[10px] text-gray-500">Saving Rollover</p>
        <div>
          <p className="text-xs text-[#424242] font-medium">
            Allow Auto-Rollover after savings maturity
          </p>
          {/* switch */}
          <span></span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Button className="!bg-[#E5E5E5] !text-black !font-bold">Back</Button>
        <Button className="font-bold">Next</Button>
      </div>
    </>
  );
}
export default AccountBalance;
