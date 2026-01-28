import Button from "@/components/Button";
import Link from "next/link";

export default function CableTVSuccess({ closeModal }: { closeModal: any }) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-xl font-bold text-[#1E1E1E]">Success</h3>
      <span className="text-gray-700 text-sm">
        TV Subscription was successful
      </span>
      <div className="my-5 grid grid-cols-2 gap-5">
        <Button size="sm" className="!text-[#262626] !bg-[#F0F2F5] w-full">
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
