"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
// import { useModal } from "@/hooks/useModal";

export default function DeleteConfirmationModal({
  closeModal,
}: {
  closeModal: any;
}) {
  //   const { openModal } = useModal();

  const handleDeleteModal = () => {
    closeModal();
    // openModal({
    //   size: "sm",
    //   component: <></>,
    // });
  };

  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold text-[#1E1E1E]">Delete account?</h3>
      <span className="text-gray-700 text-xs font-medium">
        This action cannot be undone.
      </span>
      <p className="text-gray-700 text-xs font-medium">
        Type &#39;delete&#39; to confirm
      </p>

      <Input
        id="delete"
        name="delete"
        placeholder="Type in the word"
        className="my-3"
      />
      <div className="mt-2 mb-5 grid grid-cols-2 gap-5">
        <Button
          size="sm"
          className="w-full !bg-gray-300 !text-gray-700"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button size="sm" className="w-full" onClick={handleDeleteModal}>
          Confirm
        </Button>
      </div>
    </div>
  );
}
