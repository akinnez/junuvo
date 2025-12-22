import TransactionPasscode from "../transactions/TransactionPasscode";
import PasscodeSuccess from "./PasscodeSuccess";

export default function ConfirmPassscode({ closeModal }: { closeModal: any }) {
  return (
    <div className="">
      <TransactionPasscode
        label="Confirm your passcode"
        caption="Enter a 6-digit code you won't forget"
        Component={PasscodeSuccess}
        closeModal={closeModal}
      />
    </div>
  );
}
