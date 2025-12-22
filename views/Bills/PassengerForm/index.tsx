"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { CustomSelect } from "@/components/Select";
import {
  cityOptions,
  genderOptions,
  nationalityOptions,
  titleOptions,
  typeOptions,
} from "@/lib/mock-flight-data";
import { PassengerData } from "@/types/flight";
import { ArrowLeft } from "lucide-react";

import { useState } from "react";

interface PassengerFormProps {
  passenger: PassengerData;
  onSave: (data: Omit<PassengerData, "id">) => void;
  onBack: () => void;
}

const PassengerForm: React.FC<PassengerFormProps> = ({
  passenger,
  onSave,
  onBack,
}) => {
  const [passengerType, setPassengerType] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [title, setTitle] = useState("");
  const [dob, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [posterCode, setPosterCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [firstName, setFirstName] = useState(passenger.firstName);
  const [lastName, setLastName] = useState<string>(passenger.lastName || "");
  const [middleName, setMiddleName] = useState<string>(
    passenger.lastName || ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSave({
      firstName,
      lastName,
      email,
      phone,
      city,
      gender,
      middleName,
      nationality,
      address,
      dob,
      posterCode,
      title,
      type: passengerType,
      isFilled: true,
    });
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-6 ">
        <h2 className="text-xl font-bold text-button">
          Editing Passenger {passenger.id}
        </h2>
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700 transition duration-150 flex items-center text-xs font-semibold"
        >
          <ArrowLeft size={14} className="mr-1" />
          Back to List
        </button>
      </div>
      {/* <CustomForm></CustomForm> */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-5">
          <CustomSelect
            id="passengerType"
            name="passengerType"
            label="Passenger Type"
            value={passengerType}
            options={typeOptions}
            onChange={setPassengerType}
            searchable={false}
            required
          />
          <CustomSelect
            id="title"
            name="title"
            label="Title"
            value={title}
            options={titleOptions}
            onChange={setTitle}
            searchable={false}
            required
          />

          {/* <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="e.g., Jane Doe"
            required
          /> */}
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Input
            id="lastName"
            label="Last Name"
            placeholder="Enter last name"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            id="firstName"
            label="First Name"
            placeholder="Enter first name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Input
            id="middleName"
            label="Middle Name"
            placeholder="Enter middle name"
            onChange={(e) => setMiddleName(e.target.value)}
          />
          <Input
            type="date"
            id="dob"
            label="Date of Birth"
            placeholder="Enter first name"
            onChange={(e) => setDOB(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <CustomSelect
            id="nationality"
            name="nationality"
            label="Nationality"
            value={nationality}
            options={nationalityOptions}
            onChange={setNationality}
            searchable
          />
          <CustomSelect
            id="gender"
            name="gender"
            label="Gender"
            value={gender}
            options={genderOptions}
            onChange={setGender}
            searchable={false}
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Input
            id="phoneNumber"
            label="Phone Number"
            placeholder="Enter Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            id="email"
            label="Email Address"
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <Input
            id="address"
            label="Address"
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-5">
          <CustomSelect
            id="city"
            name="city"
            label="City"
            value={city}
            options={cityOptions}
            onChange={setCity}
            searchable
          />
          <Input
            id="posterCode"
            label="Poster Code"
            placeholder="Enter poster code"
            onChange={(e) => setPosterCode(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full">
          Continue Booking
        </Button>
      </form>
    </div>
  );
};

export default PassengerForm;
