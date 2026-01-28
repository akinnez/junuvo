import Button from "@/components/Button";
import Link from "next/link";

export default function BettingSuccess({ closeModal }: { closeModal: any }) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-3xl font-bold text-tertiary">Success</h3>
      <span className="text-gray-700">Betting was successful</span>
      <div className="my-5 grid grid-cols-2 gap-5">
        <Button size="sm" className="!text-tertiary !bg-[#F0F2F5] w-full">
          Share Receipt
        </Button>
        <Link href={"/${params.appType}dashboard"} onClick={closeModal}>
          <Button size="sm" className="w-full">
            Return to dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
