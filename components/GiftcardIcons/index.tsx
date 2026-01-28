import Image from "next/image";

export const GiftcardsIcons = ({
  label,
  value,
  src,
  cardType,
  handleClick,
}: {
  src: string;
  label: string;
  value: string;
  cardType: string | null;
  handleClick: (val: string) => void;
}) => {
  return (
    <div
      className={`text-center space-y-4 cursor-pointer hover:shadow hover:shadow-gray-100 hover:rounded-md hover:p-3 hover:text-xs transition-all duration-500  ${
        cardType == value
          ? "bg-blue-100 border border-button p-3 rounded-md text-xs text-button"
          : ""
      }`}
      onClick={() => handleClick(value)}
    >
      <Image
        src={src}
        alt={label}
        width={156}
        height={100}
        className="shadow rounded-xl"
      />
      <span className="text-[#2F2F2F]">{label}</span>
    </div>
  );
};
