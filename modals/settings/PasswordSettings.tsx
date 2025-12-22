"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useModal } from "@/hooks/useModal";
import TransactionPin from "../transactions/TransactionPin";
import PasswordSuccess from "./PasswordSuccess";

export default function PasswordSettings({ closeModal }: { closeModal: any }) {
  const { openModal, closeModal: close } = useModal();

  const handlePasswordSettings = () => {
    closeModal();
    openModal({
      size: "sm",
      component: (
        <TransactionPin Component={PasswordSuccess} closeModal={close} />
      ),
    });
  };
  return (
    <div className="space-y-5">
      <Input
        id="currentPassword"
        name="currentPassword"
        label="Current Password"
        type="password"
      />
      <Input
        id="newPassword"
        name="newPassword"
        label="New Password"
        type="password"
      />
      <div className="my-5">
        <Button size="sm" className="w-full" onClick={handlePasswordSettings}>
          Change Password
        </Button>
      </div>
    </div>
  );
}
