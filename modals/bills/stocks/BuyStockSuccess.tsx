import Button from "@/components/Button";

export default function BuyStockSuccess({ closeModal }: { closeModal: any }) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-xl font-bold text-[#1E1E1E]">Order Placed</h3>
      <span className="text-gray-700 text-xs">
        Your order to buy AAG for N200,000 was succesfully place
      </span>
      <div className="my-5">
        <Button className="w-full !py-4" onClick={closeModal}>
          Done
        </Button>
      </div>
    </div>
  );
}
