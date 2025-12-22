"use client";

import { useModal } from "@/hooks/useModal";
import ChangePin from "@/modals/settings/ConfirmPin";
import PasswordSettings from "@/modals/settings/PasswordSettings";
import TransactionPassword from "@/modals/transactions/TransactionPassword";
import TransactionPin from "@/modals/transactions/TransactionPin";

export default function SecurityPage() {
  const { openModal, closeModal } = useModal();

  const handlePasswordSettings = () => {
    openModal({
      title: "Change Password",
      size: "sm",
      component: <PasswordSettings closeModal={closeModal} />,
    });
  };
  const handlePinSettings = () => {
    openModal({
      size: "sm",
      component: (
        <TransactionPin Component={ChangePin} closeModal={closeModal} />
      ),
    });
  };
  const handlePasscodeSettings = () => {
    openModal({
      title: "Enter your password",
      description: "Kindly enter your password to continue ",
      size: "sm",
      component: <TransactionPassword closeModal={closeModal} />,
    });
  };
  return (
    <div className="w-full max-w-md space-y-7">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold">Change Password</p>
          <span className="text-sm text-gray-500">
            You can change password here
          </span>
        </div>
        <button
          className="text-button font-bold"
          onClick={handlePasswordSettings}
        >
          Change Password
        </button>
      </div>

      <div className="flex justify-between items-center w-full max-w-md">
        <div>
          <p className="font-bold">Change Pin</p>
          <span className="text-sm text-gray-500">You can change pin here</span>
        </div>
        <button className="text-button font-bold" onClick={handlePinSettings}>
          Change Pin
        </button>
      </div>

      <div className="flex justify-between items-center w-full max-w-md">
        <div>
          <p className="font-bold">Change Passcode</p>
          <span className="text-sm text-gray-500">
            You can change passcode here
          </span>
        </div>
        <button
          className="text-button font-bold"
          onClick={handlePasscodeSettings}
        >
          Change Passcode
        </button>
      </div>
    </div>
  );
}
