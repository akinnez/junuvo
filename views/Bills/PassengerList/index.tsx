"use client";
import Button from "@/components/Button";
import { PassengerListProps } from "@/types/flight";
import { CheckCircle, SquarePen, Users } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const PassengerList: React.FC<PassengerListProps> = ({
  passengers,
  onEdit,
  N,
  //   onNChange,
}) => {
  const [tempN, setTempN] = useState(String(N));

  const filledCount = useMemo(
    () => passengers.filter((p) => p.isFilled).length,
    [passengers]
  );
  const isComplete = filledCount === N;

  //   const handleNChange = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     const newN = parseInt(tempN, 10);
  //     if (isNaN(newN) || newN < 1 || newN > 10) {
  //       // Replaced alert() with a console log for a better developer experience in this environment.
  //       console.error(
  //         "Please enter a number between 1 and 10 for the passenger count."
  //       );
  //       return;
  //     }
  //     onNChange(newN);
  //   };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-6">
        <form
          //   onSubmit={handleNChange}
          className="mt-3 sm:mt-0 flex items-center space-x-2"
        >
          <label
            htmlFor="n-count"
            className="text-sm font-medium text-gray-600"
          >
            Total Passengers: {tempN}
          </label>
        </form>
      </div>

      <div className="space-y-4">
        {passengers.map((passenger) => (
          <div
            key={passenger.id}
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border transition duration-200 ${
              passenger.isFilled
                ? "bg-green-50 border-green-200"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <div className="flex-1 min-w-0">
              {!passenger.isFilled && (
                <span className="text-xs font-semibold text-gray-800">
                  Passenger {passenger.id}
                </span>
              )}
              <div className="text-xs truncate text-gray-600">
                {passenger.isFilled ? (
                  <div className="space-y-1">
                    <span className="block font-semibold text-gray-800 capitalize">
                      {passenger.title} {passenger.lastName}{" "}
                      {passenger.middleName} {passenger.firstName}
                    </span>
                    <span className="block text-xs">{passenger.email}</span>
                    <p className="flex gap-x-5 items-center">
                      <span className="block text-xs capitalize">
                        {passenger.gender}
                      </span>
                      <span className="block text-xs capitalize py-1 px-2 rounded-full bg-blue-100 text-button">
                        {passenger.type}
                      </span>
                    </p>
                  </div>
                ) : (
                  "Details pending"
                )}
              </div>
            </div>

            <div className="mt-2 sm:mt-0">
              {passenger.isFilled ? (
                <div className="flex text-xs items-center text-green-600 font-medium">
                  <CheckCircle size={18} className="mr-2" />
                  Details Complete
                </div>
              ) : (
                <Button
                  size="sm"
                  onClick={() => onEdit(passenger.id - 1)}
                  className="flex items-center"
                >
                  <SquarePen size={16} className="mr-2" />{" "}
                  {/* Fix: Used SquarePen */}
                  Edit Details
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {isComplete && (
        <div className="mt-8 p-4 text-center bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 rounded-lg">
          <p className="font-bold">All Set!</p>
          <p className="text-sm">
            All passenger details have been successfully entered. You can now
            proceed to the next step.
          </p>
        </div>
      )}

      {/* Next button for overall flow */}
      <div className="mt-8 text-center">
        <Link href={"/account/bills/summary/flight"}>
          <Button
            disabled={!isComplete}
            className={
              isComplete
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xl"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }
          >
Continue Booking
          </Button>
        </Link>
      </div>
    </>
  );
};

export default PassengerList;
