"use client";

import Button from "@/components/Button";
import { ToggleSwitch } from "@/components/CustomToggle";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { useState } from "react";

export default function Preferences() {
  const [val, setVal] = useState(false);
  const [transactionEmail, setTransactionEmail] = useState(false);
  const [notification, setNotification] = useState(false);
  const [sms, setSMS] = useState(false);

  const handleLoginPreference = (val: boolean) => {
    setVal(val);
  };
  const handleTransactionEmail = (val: boolean) => {
    setTransactionEmail(val);
  };
  const handleNotification = (val: boolean) => {
    setNotification(val);
  };
  const handleSMS = (val: boolean) => {
    setSMS(val);
  };

  function onSubmit() {
    const payload = {
      login_email: val,
      transactionEmail,
      sms,
      notification,
    };

    console.log(payload);
  }

  return (
    <CardPageLayout
      title="My Preferences"
      description="Here is the details of your profile"
      className="max-w-sm"
    >
      <div className="space-y-7">
        <div>
          <h3 className="text-[10px] font-semibold text-gray-500">
            LOGIN ALERTS
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-xs text-[#424242] font-medium">Email</p>
            <ToggleSwitch
              field={{
                name: "login_email",
                onChange: handleLoginPreference,
                value: val,
              }}
            />
          </div>
        </div>
        <div>
          <h3 className="text-[10px] font-semibold text-gray-500">
            TRANSACTION ALERTS
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-xs text-[#424242] font-medium">Email</p>
            <ToggleSwitch
              field={{
                name: "transactionEmail",
                onChange: handleTransactionEmail,
                value: transactionEmail,
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-[#424242] font-medium">
              Push Notification
            </p>
            <ToggleSwitch
              field={{
                name: "pushNotification",
                onChange: handleNotification,
                value: notification,
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-[#424242] font-medium">SMS</p>
            <ToggleSwitch
              field={{
                name: "sms",
                onChange: handleSMS,
                value: sms,
              }}
            />
          </div>
        </div>
        <div>
          <Button onClick={onSubmit} className="w-full">
            Save Changes
          </Button>
        </div>
      </div>
    </CardPageLayout>
  );
}
