import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import { transactions } from "@/lib/mock-card";
import CardFunding from "@/modals/cards/CardFunding";
import CardDetailsModal from "@/modals/cards/DetailsCardModal";
import FreezeCard from "@/modals/cards/FreezeCard";
import WithdrawCard from "@/modals/cards/WithdrawCard";
import { SettingOption } from "@/types/card";
import {
  ChevronRight,
  CircleAlert,
  CreditCard,
  Download,
  Lock,
  MessageSquareText,
  Minus,
  Plus,
  Settings,
  Snowflake,
  Trash2,
} from "lucide-react";
import Image from "next/image";

export default function HasCardPage() {
  const { closeModal: successModal, openModal } = useModal();

  const handleOpenDetails = () => {
    openModal({
      title: "Details",
      size: "sm",
      component: <CardDetailsModal />,
    });
  };
  const handleWithdrawSettings = () => {
    openModal({
      title: "Withdraw",
      size: "md",
      component: <WithdrawCard closeModal={successModal} />,
    });
  };
  const handleOpenSettings = () => {
    sessionStorage.setItem("set_loan", JSON.stringify(true));
    openModal({
      title: "Fund your card",
      size: "md",
      component: <CardFunding closeModal={successModal} />,
    });
  };
  const handleFreezeCard = () => {
    openModal({
      size: "sm",
      component: <FreezeCard closeModal={successModal} />,
    });
  };

  const settings: SettingOption[] = [
    {
      icon: <CreditCard size={20} className="text-button" />,
      title: "Set Transaction Limit",
      description: "Set daily transaction limit",
      color: "text-blue-600",
      handleClick: handleFreezeCard,
    },
    {
      icon: <MessageSquareText className="text-white fill-button" size={20} />,
      title: "SMS Alert Subscription",
      description: "Manage your card transaction alerts",
      color: "text-blue-600",
      handleClick: handleFreezeCard,
    },
    {
      icon: <Lock size={20} className="text-button" />,
      title: "Manage PIN",
      description: "Check or change your card PIN",
      color: "text-blue-600",
      handleClick: handleFreezeCard,
    },
    {
      icon: <CircleAlert size={20} className="text-white fill-button" />,
      title: "Manage Dispute",
      description: "Transfer to multiple beneficiaries",
      color: "text-blue-600",
      handleClick: handleFreezeCard,
    },
    {
      icon: <CreditCard size={20} className="text-white fill-button" />,
      title: "Change Card Design",
      description: "Get a virtual card made just for you",
      color: "text-blue-600",
      handleClick: handleFreezeCard,
    },
    {
      icon: <Snowflake size={20} className="text-button" />,
      title: "Freeze Card",
      description: "Temporarily disable this card",
      color: "text-blue-600",
      handleClick: handleFreezeCard,
    },
    {
      icon: <Trash2 size={20} className="text-button" />,
      title: "Cancel Virtual Card",
      description: "Cancel and delete the card",
      color: "text-blue-600",
      handleClick: handleFreezeCard,
    },
  ];

  return (
    <CardPageLayout
      title="My Cards"
      description="Here is the details of your savings"
    >
      <div className="max-w-5xl mx-auto p-6 min-h-screen">
        {/* Top Section: Card and History */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-5 mb-10">
          {/* Left: Card & Quick Actions */}
          <div className="md:col-span-4 space-y-6">
            {/* Virtual Card */}
            <div className="relative h-48 w-full bg-[#15274F] rounded-2xl px-6 text-white shadow-xl overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <Image
                  src={"/images/card/Union.png"}
                  alt="line"
                  width={100}
                  height={76}
                />
                <div>
                  <Image
                    src={"/images/card/visa.png"}
                    alt="card"
                    width={58}
                    height={38}
                  />
                </div>
              </div>
              <div className="space-y-1 -mt-5">
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <span key={i} className="text-2xl leading-none">
                      ••••
                    </span>
                  ))}
                  <span className="text-xl font-semibold ml-1">6888</span>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[8px] text-gray-400 uppercase tracking-wider">
                  Card Balance
                </p>
                <p className="text-2xl font-bold">
                  {formattedAmount("USD", 10)}
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex justify-between px-2">
              <ActionButton
                icon={<Settings size={20} className="text-button" />}
                label="Details"
                handleSubmit={handleOpenDetails}
              />
              <ActionButton
                icon={<Plus size={20} className="text-button" />}
                label="Add Money"
                handleSubmit={handleOpenSettings}
              />
              <ActionButton
                icon={<Download size={20} className="text-button" />}
                label="Withdraw"
                handleSubmit={handleWithdrawSettings}
              />
              <ActionButton
                icon={<Settings size={20} className="text-button" />}
                label="Settings"
                handleSubmit={handleOpenSettings}
              />
            </div>
          </div>

          {/* Right: History */}
          <div className="md:col-span-3 bg-white p-3">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-800 text-xs">Card history</h3>
              <button className="text-[10px] text-gray-800 font-medium">
                See all
              </button>
            </div>
            <div className="space-y-5">
              {transactions.map((t) => (
                <div key={t.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                      {t.amount > 0 ? <Plus size={12} /> : <Minus size={12} />}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">
                        {t.label}
                      </p>
                      <p className="text-[10px] text-gray-400">{t.date}</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs ${
                      t.amount > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {formattedAmount("USD", t.amount)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {settings.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group"
              onClick={item.handleClick}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full  flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              </div>
              <ChevronRight
                size={18}
                className="text-gray-300 group-hover:text-blue-500 transition-colors"
              />
            </div>
          ))}
        </div>
      </div>
    </CardPageLayout>
  );
}

const ActionButton = ({
  icon,
  label,
  handleSubmit,
}: {
  handleSubmit: () => void;
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex flex-col items-center gap-2">
    <button
      className="w-12 h-12 rounded-full shadow shadow-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={handleSubmit}
    >
      {icon}
    </button>
    <span className="text-[10px] font-medium text-gray-500 capitalize">
      {label}
    </span>
  </div>
);
