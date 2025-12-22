type InstallmentTenure = {
  date: string;
  installment: string;
  amount: string;
  status: string;
};

const InstallmentData = ({
  amount,
  date,
  installment,
  status,
}: InstallmentTenure) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col w-[95px] items-start justify-center gap-0.5 p-1 bg-[#f4f4f4] rounded">
        <span className=" font-semibold text-button text-xs text-center tracking-[0] leading-5 w-full">
          {date}
        </span>
        <span className=" font-normal text-button text-[10px] text-center tracking-[0] leading-5 w-full">
          {installment}
        </span>
      </div>

      <div className="flex flex-col items-start gap-1">
        <span className="font-medium text-[#575555] text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
          Amount to repay
        </span>
        <span className=" font-bold text-[#1e1e1e] text-xs text-center tracking-[0] leading-[14.4px] whitespace-nowrap">
          {amount}
        </span>
      </div>

      <span className=" font-semibold text-[#9a9a9a] text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
        {status}
      </span>
    </div>
  );
};

export default InstallmentData;
