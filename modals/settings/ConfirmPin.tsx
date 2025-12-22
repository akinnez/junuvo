import TransactionPin from "../transactions/TransactionPin";
import PinSuccess from "./PinSuccess";

export default function ChangePin({ closeModal }: { closeModal: any }) {
  return (
    <TransactionPin
      label="Change your PIN"
      caption="Enter a 4-digit code you won’t forget"
      Component={ConfirmPin}
      closeModal={closeModal}
    />
  );
}

function ConfirmPin({ closeModal }: { closeModal: any }) {
  return (
    <TransactionPin
      label="Confirm PIN"
      caption="Enter a 4-digit code you won’t forget"
      Component={PinSuccess}
      closeModal={closeModal}
    />
  );
}
