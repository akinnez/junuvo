import Button from "@/components/Button";
import Link from "next/link";

export default function QuerySuccess({ closeModal }: { closeModal: any }) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-3xl font-bold text-[#1E1E1E]">Success</h3>
      <span className="text-gray-700">Your query has been submitted</span>
      <div className="my-5">
        <Link href={"/account/dashboard"} onClick={closeModal}>
          <Button className="!text-button !bg-[#ECF2FE] w-full !py-4">
            Return to dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
