import Button from "@/components/Button";
import Link from "next/link";

export default function PinSuccess({ closeModal }: { closeModal: any }) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-xl font-bold text-[#1E1E1E]">PIN Changed!</h3>
      <span className="text-gray-700">
        You have successfully changed your PIN
      </span>
      <div className="my-5">
        <Link href={"/account/dashboard"} onClick={closeModal}>
          <Button size="sm" className="w-full">
            Return to dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
