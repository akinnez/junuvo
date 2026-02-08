"use client";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import FormSelect from "@/components/FormSelect";
import { JunuvoOverlay } from "@/components/Loader";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { bettingSchema } from "@/schema/bill/betting";
import { isPending, provider } from "@/stores/Bills/bettingStore";
import { user } from "@/stores/userStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignal } from "nabd";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface Betting {
  amount: string;
  service: string;
  accountId: string;
  walletId: string;
}

const option: Option[] = [
  {
    icon: "/images/icons/bet9ja.svg",
    label: "Bet9ja",
    value: "bet9ja",
  },
  {
    icon: "/images/icons/bangbet.svg",
    label: "BangBet",
    value: "bangbet",
  },
  {
    icon: "/images/icons/nairabet.svg",
    label: "NairaBet",
    value: "nairabet",
  },
];

export default function Betting() {
  const router = useRouter();
  const loading = useSignal(isPending);
  const providers = useSignal(provider);
  const userData = useSignal(user);
  const bettingOptions = providers?.map((prov: any) => ({
    label: <div className="capitalize">{prov.name}</div>,
    value: prov.name,
    icon: prov.logo,
  }));
  const form = useForm<Betting>({
    resolver: zodResolver(bettingSchema),
    defaultValues: {
      amount: "",
      service: "",
      accountId: "",
      walletId: "",
    },
  });

  const {
    control,
    formState: { errors },
  } = form;
  console.log("User Data:", userData);
  function onSubmit(values: Betting) {
    console.log("Form Values:", values);

    // const payload = {
    //   debitAccount: selectedAcc,
    //   provider: selectedProvider,
    //   ...values,
    // };

    // console.log(payload);

    // router.push(`/${params.appType}bills/summary/electricity`);
  }
  if (loading) {
    return <JunuvoOverlay isLoading={loading} />;
  }

  return (
    <PageLayout
      title="Betting"
      description="Enter details to fund your betting account"
      isBack={false}
    >
      <CardPageLayout
        title="Choose type"
        description="Select your desired type to begin"
        className="max-w-sm"
      >
        <CustomForm form={form} successFunction={onSubmit}>
          <div className="space-y-7">
            {/* <FormSelect
              id="debitAccount"
              label="Select Account to debit"
              name="debitAccount"
              control={control}
              options={[
                {
                  label: "Savings",
                  value: "134566789",
                },
                {
                  label: "Current",
                  value: "245678",
                },
              ]}
              searchable={false}
              error={errors.accountId?.message}
            /> */}
            <FormSelect
              id="service"
              label="Select Provider"
              name="service"
              control={control}
              options={bettingOptions}
              searchable={true}
              error={errors.service?.message}
            />

            <CustomInput
              id="walletId"
              control={control}
              label="Wallet Id"
              name="walletId"
              placeholder="Enter Wallet ID"
              error={errors.walletId?.message}
            />
            <div>
              <CustomInput
                id="amount"
                control={control}
                label="Amount"
                name="amount"
                placeholder="Enter amount"
                error={errors.amount?.message}
              />
              <div className="flex justify-end text-button font-medium text-xs">
                Avail Bal: N220.00
              </div>
            </div>
            <div className=" border-t border-gray-200 w-full"></div>
            <Button className="w-full">Proceed</Button>
          </div>
        </CustomForm>
      </CardPageLayout>
    </PageLayout>
  );
}
