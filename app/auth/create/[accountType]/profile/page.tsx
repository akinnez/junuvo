"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { CustomSelect } from "@/components/Select";
import UploadComponent from "@/components/upload-zone";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

function BusinessProfile() {
  const [id, setId] = useState<string>();
  const router = useRouter();
  const { accountType } = useParams();

  const handleProceed = () => {
    // Logic to handle profile creation can be added here
    router.push(`/auth/create/${accountType}/profile_pin`);
  };

  const handleChange = (field: string, value: string) => {
    // formSignal.setValue({ ...formSignal.value, [field]: value });
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">Provide your business details</h1>
        <span className="text-gray-400 text-sm">
          Enter your business details as requested
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col space-y-3"
        >
          <Input
            label="Business Name"
            // value={formSignal.value.email}
            onChange={(e) => handleChange("business_name", e.target.value)}
            placeholder="Enter your business name"
            required
          />
          <Input
            label="Business RC Number"
            // value={formSignal.value.email}
            onChange={(e) => handleChange("business_rc_name", e.target.value)}
            placeholder="Enter your RC number"
            required
          />
          <CustomSelect
            id="business_id"
            name="business_id"
            label="Director ID Type"
            placeholder="Select one"
            options={[
              { value: "us", label: "United States" },
              { value: "usa", label: "United States" },
            ]}
            value={id}
            onChange={setId}
            searchable={false}
          />
          <div>
            <label
              htmlFor={`upload_id`}
              className={`block text-sm font-medium my-4`}
            >
              Upload your ID
            </label>
            <UploadComponent>
              <div className="flex gap-x-1">
                <h3 className="text-button text-sm font-semibold">
                  Click to upload
                </h3>
                <p className="text-gray-600 text-sm">or drag and drop</p>
              </div>
              <span className="text-gray-400 text-xs text-center">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </span>
            </UploadComponent>
          </div>
        </form>
      </div>

      <Button disabled={false} className="w-full mt-5" onClick={handleProceed}>
        Continue
      </Button>
    </>
  );
}

export default BusinessProfile;
