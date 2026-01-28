import Button from "@/components/Button";
import Link from "next/link";

export default function CardFundingSuccess({
  closeModal,
}: {
  closeModal: any;
}) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-3xl font-bold text-[#1E1E1E]">Congratulations</h3>
      <span className="text-gray-700">Your card has been funded</span>
      <div className="my-5">
        <Link href={"/${params.appType}dashboard"}>
          <Button size="sm" className="w-full" onClick={closeModal}>
            Return to dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
