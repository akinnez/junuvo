import Button from "@/components/Button";

export default function FreezeCard({ closeModal }: { closeModal: any }) {
  return (
    <div className=" space-y-2">
      <h3 className="text-lg font-bold text-gray-900">Freeze Card?</h3>
      <span className="text-gray-600 text-sm">
        Are you sure you want to freeze this card? You’ll not be able to make
        payment while this card is frozend
      </span>
      <div className="my-5 space-y-2">
        <Button
          size="sm"
          className="w-full !bg-[#F5F5F5] !text-[#353D48]"
          onClick={closeModal}
        >
          YES, FREEZE CARD
        </Button>
        <Button size="sm" className="w-full" onClick={closeModal}>
          NO, CANCEL
        </Button>
      </div>
    </div>
  );
}
