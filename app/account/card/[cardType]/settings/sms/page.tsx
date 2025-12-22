"use client";

import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { useModal } from "@/hooks/useModal";
import CardSubConfirm from "@/modals/cards/SMSSubConfirm";
// import { useRouter } from "next/router";

type AlertType = "credit" | "transaction" | "transfer" | "other" | null;

type cardSub = {
  label: string;
  description: string;
  value: AlertType;
};

export default function SMSSettings() {
  //   const [selectedAlert, setSelectedAlert] = useState<boolean>(false);
  let payload: any = {};
  const { closeModal, openModal } = useModal();
  //   const router = useRouter();

  const handleOpenDetails = () => {
    openModal({
      size: "sm",
      component: <CardSubConfirm closeModal={closeModal} />,
    });
  };
  const handleSubmit = () => {
    handleOpenDetails();
    console.log(payload);
  };
  const getPayload = (value: boolean, type: string) => {
    payload[type] = value;
    return payload;
  };

  const subscription: cardSub[] = [
    {
      label: "Credit Alerts",
      description: "Money sent to your junuvo account",
      value: "credit",
    },
    {
      label: "Card Transaction Alerts",
      description:
        "Payments & Cash Withdrawals made with your Junuvo Debit Card",
      value: "transaction",
    },
    {
      label: "Transfer & Withdrawal Alerts",
      description: "Transfers & Cash Withdrawals made with the Junuvo App",
      value: "transfer",
    },
    {
      label: "Other Alerts",
      description: "Transactions other than those listed above",
      value: "other",
    },
  ];

  return (
    <PageLayout title="SMS Alert Subscription" description="">
      <CardPageLayout
        title="Set Alerts"
        description={
          <div className="text-xs font-medium">
            Subscribe to the following SMS Alerts you need.{" "}
            <span className="text-button">(N10 per message)</span>
          </div>
        }
        className="max-w-sm"
      >
        <div className="space-y-5">
          {subscription.map((sub, idx) => (
            <div className="flex px-1 justify-between items-center" key={idx}>
              <div>
                <h3 className="text-xs font-bold text-gray-900">{sub.label}</h3>
                <span className="text-[10px] font-medium text-gray-800">
                  {sub.description}
                </span>
              </div>
              <input
                type="radio"
                name={sub.value as string}
                id={sub.value as string}
                onChange={(e) =>
                  getPayload(e.target["checked"], sub.value as string)
                }
                className="h-4 w-4"
              />
              {/* <div onClick={() => setSelectedAlert(sub.value)}>
                <CustomRadio checked={selectedAlert == sub.value} />
              </div> */}
            </div>
          ))}

          <p className="text-[10px] text-gray-800 font-medium">
            SMS charges for each last month with be automatically debited at
            10am on the 3rd of each new month. Free SMS Alerts are available on
            Junuvo.
          </p>
        </div>
        <div className="my-5">
          <Button size="sm" className="w-full" onClick={handleSubmit}>
            Subscribe Now
          </Button>
        </div>
      </CardPageLayout>
    </PageLayout>
  );
}
