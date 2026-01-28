import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { formattedAmount } from "@/lib/currency-formatter";
import { CurrencyType } from "@/types/currencyType";

export default function Recipient() {
  const list = [
    {
      id: 1,
      firstName: "John ",
      lastName: "Doe",
      otherName: "",
      amount: 10000,
      bank: "Union Bank of Africa",
      accountNo: 1234567889,
      currency: "USD",
    },
    {
      id: 2,
      firstName: "James",
      lastName: "Adebola",
      otherName: "Smith",
      amount: 10000,
      bank: "London Bank",
      accountNo: 1234567889,
      currency: "NGN",
    },
  ];
  return (
    <PageLayout
      title="Recipients"
      description="Review your transaction details"
    >
      <CardPageLayout
        title="List of recipients"
        description="Here is the list of recipients"
        className="max-w-md"
      >
        {list.map((list) => (
          <div
            key={list.id}
            className="2space-y-2 mb-4 text-xs font-semibold flex gap-1.5"
          >
            <div>{list.id}.</div>
            <div>
              <h3>
                {list.firstName} {list.otherName} {list.lastName}
              </h3>
              <p>
                {formattedAmount(list.currency as CurrencyType, list.amount)}
              </p>
              <p>
                {list.bank} - {list.accountNo}
              </p>
            </div>
          </div>
        ))}
        <hr />
        <div className="mt-5 w-full grid grid-cols-2 gap-5">
          <Button className="w-full">Proceed to payment</Button>
          <Button className="w-full bg-secondary !text-button border border-button hover:!text-white">
            Add recipient
          </Button>
        </div>
      </CardPageLayout>
    </PageLayout>
  );
}
