"use client";
import Button from "@/components/Button";
import { useModal } from "@/hooks/useModal";
import DeleteConfirmationModal from "./DeleteConfirmation";

export default function DeleteModal({ closeModal }: { closeModal: any }) {
  const { openModal } = useModal();

  const handleDeleteModal = () => {
    closeModal();
    openModal({
      size: "sm",
      component: <DeleteConfirmationModal closeModal={closeModal} />,
    });
  };

  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold text-[#1E1E1E]">Are you sure?</h3>
      <span className="text-gray-700 text-xs font-medium">
        We are sad to see you go. There are more services you are offering to
        you as our special customer
      </span>
      <div className="my-5 grid grid-cols-2 gap-5">
        <Button
          size="sm"
          className="w-full !bg-gray-300 !text-gray-700"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button size="sm" className="w-full" onClick={handleDeleteModal}>
          Delete Account
        </Button>
      </div>
    </div>
  );
}
