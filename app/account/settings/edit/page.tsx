"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { useModal } from "@/hooks/useModal";
import ProfileUpdateSuccess from "@/modals/settings/ProfileUpdateSuccess";

export default function EditProfile() {
  const { openModal, closeModal } = useModal();

  const handleOpenSettings = () => {
    openModal({
      size: "sm",
      component: <ProfileUpdateSuccess closeModal={closeModal} />,
    });
  };
  return (
    <PageLayout
      title="Edit Profile"
      description="Here is the details of your savings"
    >
      <CardPageLayout
        title="Update your Profile"
        description="Here is the details of your profile"
        className="max-w-sm"
      >
        <div className="space-y-5">
          <Input id="fullName" name="fullName" label="Full Name" disabled />
          <Input id="email" name="email" label="Email Address" disabled />
          <Input id="phone" name="phone" label="Phone Number" />
          <Input id="address" name="address" label="Address" />
          <Button className="w-full" onClick={handleOpenSettings}>
            Update details
          </Button>
        </div>
      </CardPageLayout>
    </PageLayout>
  );
}
