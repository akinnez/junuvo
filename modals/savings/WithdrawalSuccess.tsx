import Button from "@/components/Button";

export default function WithDrawalSuccess({ closeModal }: { closeModal: any }) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-3xl font-bold text-[#1E1E1E]">Congratulations</h3>
      <span className="text-gray-700">Your withdrawal was successful</span>
      <div className="my-5">
        <Button className="w-full !py-4" onClick={closeModal}>
          Dismiss
        </Button>
      </div>
    </div>
  );
}
