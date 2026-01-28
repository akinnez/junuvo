"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { CustomSelect } from "@/components/Select";
import UploadComponent from "@/components/upload-zone";
import { useModal } from "@/hooks/useModal";
import { nationalityOptions } from "@/lib/mock-flight-data";
import TierUpgradeSuccess from "@/modals/settings/TierUpgradeSuccess";
import { useState } from "react";

const stateOptions: Option[] = [{ label: "", value: "" }];
const lgaOptions: Option[] = [{ label: "", value: "" }];
const buildingColorOptions: Option[] = [{ label: "", value: "" }];
const gateColorOptions: Option[] = [{ label: "", value: "" }];
const apartmentTypeOptions: Option[] = [{ label: "", value: "" }];
const relationshipOptions: Option[] = [{ label: "", value: "" }];
const residencyLengthOptions: Option[] = [{ label: "", value: "" }];

export default function AddressDetails() {
  const { openModal, closeModal } = useModal();

  const handleUpgradeSuccess = () => {
    openModal({
      size: "sm",
      component: <TierUpgradeSuccess closeModal={closeModal} />,
    });
  };

  const [lga, setLga] = useState("");
  const [state, setState] = useState("");
  const [area, setArea] = useState("");
  const [buildingColor, setBuildingColor] = useState("");
  const [gateColor, setGateColor] = useState("");
  const [apartmentType, setApartmentType] = useState("");
  const [relationship, setRelationship] = useState("");
  const [residencyLength, setResidencyLength] = useState("");

  return (
    <PageLayout
      title="Upgrade Tier"
      description="Here is the details of your savings"
    >
      <div className="space-y-5">
        <CardPageLayout
          title="Employment Information"
          description=""
          className="max-w-sm"
        >
          <div className="space-y-5">
            <Input
              id="companyName"
              name="companyName"
              label="House Number"
              placeholder="Enter House Number"
            />
            <Input
              id="address"
              name="address"
              label="Street Name"
              placeholder="Enter Street Name"
            />
            <CustomSelect
              id="state"
              label="State"
              name="state"
              value={state}
              onChange={setState}
              options={stateOptions}
              placeholder="Select one"
              searchable={false}
            />
            <CustomSelect
              id="lga"
              label="Local Government Area"
              name="lga"
              value={lga}
              onChange={setLga}
              options={lgaOptions}
              placeholder="Select one"
              searchable={false}
            />
            <CustomSelect
              id="area"
              label="Area"
              name="area"
              value={area}
              onChange={setArea}
              options={nationalityOptions}
              placeholder="Select one"
              searchable={false}
            />
            <Input
              id="busStop"
              name="busStop"
              label="Landmark Bus Stop"
              placeholder="Enter Landmark Bus Stop"
            />
          </div>
        </CardPageLayout>

        <CardPageLayout
          title="Describe your building"
          description=""
          className="max-w-sm"
        >
          <div className="space-y-5">
            <CustomSelect
              id="buildingColor"
              label="Building color"
              name="buildingColor"
              value={buildingColor}
              onChange={setBuildingColor}
              options={buildingColorOptions}
              placeholder="Select one"
              searchable={false}
            />
            <CustomSelect
              id="gateColor"
              label="Gate color"
              name="gateColor"
              value={gateColor}
              onChange={setGateColor}
              options={gateColorOptions}
              placeholder="Select one"
              searchable={false}
            />
            <CustomSelect
              id="apartmentType"
              label="Apartment Type"
              name="apartmentType"
              value={apartmentType}
              onChange={setApartmentType}
              options={apartmentTypeOptions}
              placeholder="Select one"
              searchable={false}
            />
          </div>
        </CardPageLayout>

        <CardPageLayout
          title="How long have you lived at this address?"
          description=""
          className="max-w-sm"
        >
          <CustomSelect
            id="residencyLength"
            label="Length of Residence"
            name="residencyLength"
            value={residencyLength}
            onChange={setResidencyLength}
            options={residencyLengthOptions}
            placeholder="Select one"
            searchable={false}
          />
        </CardPageLayout>

        <CardPageLayout
          title="Who can identify you at your residence?"
          description=""
          className="max-w-sm"
        >
          <div className="space-y-5">
            <Input
              id="name"
              name="name"
              placeholder="Enter Name"
              label="Name"
            />
            <CustomSelect
              id="relationship"
              label="Relationship"
              name="relationship"
              value={relationship}
              onChange={setRelationship}
              options={relationshipOptions}
              placeholder="Select one"
              searchable={false}
            />
          </div>
        </CardPageLayout>
        <CardPageLayout
          title="Upload a photo of your street"
          description=""
          className="max-w-sm"
        >
          <div className="space-y-5">
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
                    Upload your photo
                  </h3>
                  <div className="text-[10px] text-gray-400 flex items-center gap-3">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </div>
                </div>
              </UploadComponent>
            </div>
            <Button className="w-full" onClick={handleUpgradeSuccess}>
              Upgrade
            </Button>
          </div>
        </CardPageLayout>
      </div>
    </PageLayout>
  );
}
