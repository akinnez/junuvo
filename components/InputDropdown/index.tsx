import { formattedAmount } from "@/lib/currency-formatter";
import { CustomSelect } from "../Select";
import { CurrencyType } from "@/types/currencyType";

const option = [
  {
    label: "United States Dollar",
    value: "USD",
    icon: "/images/flags/us.svg",
  },
  {
    label: "British Pound",
    value: "BP",
    icon: "/images/flags/us.svg",
  },
  {
    label: "Euro",
    value: "EUR",
    icon: "/images/flags/us.svg",
  },
  {
    label: "Nigeria Naira",
    value: "NGN",
    icon: "/images/flags/ng.svg",
  },
];

export default function InputDropdown({
  id,
  label,
  bal,
  selectOption,
  setSelectOption,
}: {
  id: number;
  label: string;
  bal: boolean;
  selectOption: string;
  setSelectOption: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <label
        htmlFor={`for-` + id}
        className="text-sm font-semibold text-gray-700"
      >
        {label}
      </label>
      <div className="grid grid-cols-4 justify-between items-center border border-gray-300 rounded-lg w-full max-w-[415px] p-3">
        <div className="col-span-3">
          <input
            placeholder="Enter your amount"
            type="tel"
            className="p-2 w-full outline-none appearance-none placeholder:text-xs placeholder:text-gray-400"
          />
        </div>
        <div className="col-span-1">
          <CustomSelect
            id="amount-convert"
            name="currency"
            label=""
            searchable={false}
            options={option}
            onChange={setSelectOption}
            value={selectOption}
            buttonClass="!rounded-full !text-xs !font-semibold !px-2 !py-1 !min-h-7"
            listClass="w-full !min-w-[200px]"
          />
          {bal && (
            <span className="text-[10px] text-gray-400 float-end pr-2 mt-1">
              Bal: {formattedAmount(`${selectOption}` as CurrencyType, 0)}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
