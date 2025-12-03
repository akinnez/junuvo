"use client";
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
  const [name, setName] = useState(passenger.name);
  const [age, setAge] = useState<string>(
    passenger.age ? String(passenger.age) : ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !age) {
      // Replaced alert() with a console log for a better developer experience in this environment.
      console.error("Please fill in both Name and Age.");
      return;
    }
    const ageNumber = parseInt(age, 10);
    if (isNaN(ageNumber) || ageNumber < 1) {
      // Replaced alert() with a console log for a better developer experience in this environment.
      console.error("Please enter a valid age.");
      return;
    }

    onSave({
      name: name.trim(),
      age: ageNumber,
      isFilled: true,
    });
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-indigo-700">
          Editing Passenger {passenger.id}
        </h2>
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700 transition duration-150 flex items-center"
        >
          <ArrowLeft size={18} className="mr-1" />
          Back to List
        </button>
      </div>
      <CustomForm></CustomForm>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
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
          />
        </div>

        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Age
          </label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="e.g., 35"
            min="1"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-[1.01]"
        >
          Save Details
        </button>
      </form>
    </div>
  );
};

export default PassengerForm;
