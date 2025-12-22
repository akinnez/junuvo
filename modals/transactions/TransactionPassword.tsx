import Button from "@/components/Button";
import Input from "@/components/Input";
import { useModal } from "@/hooks/useModal";
import TransactionPasscode from "./TransactionPasscode";
import ConfirmPassscode from "../settings/ConfirmPasscode";

export default function TransactionPassword({
  title,
  description,
  closeModal,
}: {
  closeModal: any;
  title?: string;
  description?: string;
}) {
  const { openModal } = useModal();

  const handleOpenSettings = () => {
    openModal({
      size: "md",
      component: (
        <TransactionPasscode
          Component={ConfirmPassscode}
          label={title}
          caption={description}
          closeModal={closeModal}
        />
      ),
    });
  };
  return (
    <div className="space-y-5">
      <Input
        id="password"
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <Button className="w-full" onClick={handleOpenSettings}>
        Continue
      </Button>
    </div>
  );
}
