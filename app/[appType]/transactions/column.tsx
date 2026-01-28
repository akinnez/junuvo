import { formattedAmount } from "@/lib/currency-formatter";
import { createColumnHelper } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BeneficiaryAvatar = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex items-center space-x-3">
    {/* Replace with your actual image path or component */}
    {src && (
      <>
        <Image
          src={src}
          alt={alt}
          width={24}
          height={24}
          className="w-6 h-6 rounded-full"
        />
      </>
    )}
    {!src && (
      <>
        <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-semibold">
          {alt.charAt(0)}
        </span>
        <span>{alt}</span>
      </>
    )}
  </div>
);

type UsersTableColumns = {
  transactionId: string;
  beneficiary: string;
  amount: string;
  type: string;
  createdAt: string;
  select: "select";
  view: "view";
};
const columnHelper = createColumnHelper<UsersTableColumns>();

export const columns = [
  columnHelper.accessor("transactionId", {
    cell: (info) => {
      return <div className="text-gray-700">{info.getValue() || "N/A"} </div>;
    },
    header: () => <div className="flex items-center gap-2">Transaction ID</div>,
  }),
  columnHelper.accessor("beneficiary", {
    cell: (info) => {
      return (
        <div className="flex gap-4  font-medium">
          <BeneficiaryAvatar src="/images/gtb.svg" alt="icon" />
          {info.getValue() || "N/A"}
        </div>
      );
    },
    header: () => <div className="flex items-center gap-2">Beneficiary</div>,
  }),

  columnHelper.accessor("amount", {
    cell: (info) => {
      return formattedAmount("NGN", info.getValue() ?? 0);
    },
    header: () => <div className="flex items-center gap-2">Amount</div>,
  }),
  columnHelper.accessor("type", {
    cell: (info) => {
      return info.getValue() || "N/A";
    },
    header: () => <div className="flex items-center gap-2">Type</div>,
  }),
  columnHelper.accessor("createdAt", {
    cell: (info) => {
      return new Date(info.getValue()).toLocaleDateString() || "N/A";
    },
    header: () => <div className="flex items-center gap-2">Date</div>,
  }),
  // columnHelper.accessor("status", {
  //   cell: (info) => {
  //     return (
  //       <TransactionsStatusCard
  //         statusProp={info.getValue()?.toLowerCase() as string}
  //       />
  //     );
  //   },
  //   header: () => (
  //     <div className="flex items-center gap-2">
  //       STATUS
  //       <img
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         src={TableSort}
  //         className="ml-2 h-2 w-2"
  //         alt=""
  //       />
  //     </div>
  //   ),
  // }),
  columnHelper.accessor("view", {
    // cell: ({ row }) => {
    cell: ({ row }) => {
      // console.log("row from action column", row);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      return (
        <div className="flex items-center gap-5 py-2">
          <Link
            href={`/${params.appType}transactions/${row.original.transactionId}`}
          >
            <Eye className="h-4 w-4" />
          </Link>
        </div>
      );
    },
    header: "",
  }),
];
