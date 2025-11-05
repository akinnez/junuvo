import PageLayout from "@/components/PageLayout";
import AccountDetailsComponent from "@/views/AccountDetailsComponent";

function AccountDetails() {
  return (
    <PageLayout
      title="All accounts"
      description="Enter amount and select currency to convert to"
    >
      <AccountDetailsComponent />
    </PageLayout>
  );
}
export default AccountDetails;
