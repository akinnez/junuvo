import Button from "@/components/Button";
import { useModal } from "@/hooks/useModal";
import FilterModal from "@/modals/transactions/FilterModal";
import { Filter } from "lucide-react";
import Link from "next/link";

function TransactionHeader() {
  const { openModal, closeModal } = useModal();

  const handleOpenSettings = () => {
    openModal({
      title: "Filter",
      size: "md",
      component: <FilterModal closeModal={closeModal} />,
    });
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold">Transactions</h2>
        <span className="text-sm text-gray-500">
          Review all your transactions here
        </span>
      </div>
      <div className="flex gap-2">
        <Button
          size="sm"
          className="gap-3 !bg-white !border !border-button !text-button"
          onClick={handleOpenSettings}
        >
          <Filter className="h-4 w-4 " />
          Filter
        </Button>
        <Link href={"/${params.appType}transactions/download"}>
          <Button size="sm" className="!px-10">
            Generate Statement
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default TransactionHeader;
