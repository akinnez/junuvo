"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { CustomSelect } from "@/components/Select";
import UploadComponent from "@/components/upload-zone";
import { useModal } from "@/hooks/useModal";
import ErrorSubmitSuccess from "@/modals/settings/ErrorSubmitSuccess";
import { useState } from "react";

const enquiryOptions: Option[] = [{ label: "", value: "" }];

export default function NonTransactionIssue() {
  const { openModal, closeModal } = useModal();

  const handleUpgradeSuccess = () => {
    openModal({
      size: "sm",
      component: <ErrorSubmitSuccess closeModal={closeModal} />,
    });
  };

  const [accept, setAccept] = useState("");
  const [enquiry, setEnquiry] = useState("");

  return (
    <>
      <div className="space-y-5">
        <Input
          id="email"
          name="email"
          label="Email Address"
          placeholder="Enter Email Address"
        />
        <Input
          id="subject"
          name="subject"
          label="Subject"
          placeholder="Enter Subject"
        />
        <CustomSelect
          id="enquiry"
          label="Category of enquiry"
          name="enquiry"
          value={enquiry}
          onChange={setEnquiry}
          options={enquiryOptions}
          placeholder="Select one"
          searchable={false}
        />

        <Input
          id="accountNo"
          name="accountNo"
          label="Account Number"
          placeholder="Enter Account Number"
        />

        <div>
          <label
            htmlFor={`upload_id`}
            className={`block text-sm font-medium my-4`}
          >
            Description
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            cols={3}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-0 focus:ring-1 focus:ring-gray-300"
            placeholder="Enter Description"
          ></textarea>
        </div>

        <Input
          id="phone"
          name="phone"
          label="Phone Number"
          placeholder="Enter Phone Number"
        />

        <div>
          <label
            htmlFor="photo"
            className="block font-semibold text-sm text-gray-900 mb-2"
          >
            Photo of your street
          </label>
          <UploadComponent
            flex_row
            className="!min-h-0 !p-5 !bg-white !justify-start"
          >
            <div className="">
              <h3 className="text-sm font-bold text-button">
                Upload your evidence
              </h3>
              <div className="text-[10px] text-gray-400 flex items-center gap-3">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </div>
            </div>
          </UploadComponent>
        </div>
        <div className="text-[10px] font-semibold flex items-center gap-4 px-2">
          <Input
            type="checkbox"
            onClick={(e: any) => setAccept(e.target["checked"])}
          />
          <p>
            I agree to our <span className="text-button">Privacy Policy</span>
          </p>
        </div>
        <div className="">
          <Button
            size="sm"
            className="w-full"
            disabled={!accept}
            onClick={handleUpgradeSuccess}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
