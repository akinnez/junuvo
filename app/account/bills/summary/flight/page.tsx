"use client";
import PageLayout from "@/components/PageLayout";
import { CustomSelect } from "@/components/Select";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import { flightData } from "@/lib/mock-flight-data";
import FlightBookingSuccess from "@/modals/bills/flight/FlightBookingSuccess";
import TransactionPin from "@/modals/transactions/TransactionPin";
import SummaryOverview from "@/views/SummaryOverview";
import { useEffect, useState } from "react";

function BillSummary() {
  const [type, setType] = useState("");
  const [acc, setAcc] = useState("");

  const {
    departureAirportCode,
    departureTime,
    duration,
    arrivalTime,
    arrivalAirportCode,
    price,
    currency,
  } = flightData[0];

  const { openModal, closeModal } = useModal();
  useEffect(() => {
    const getType = sessionStorage.getItem("bill_type");
    if (getType) {
      return setType(getType);
    }
    setType("one-way");
  });

  const handleOpenSettings = () => {
    openModal({
      size: "sm",
      component: (
        <TransactionPin
          closeModal={closeModal}
          Component={FlightBookingSuccess}
        />
      ),
    });
  };
  return (
    <PageLayout title="Summary" description="Review your transaction details">
      <SummaryOverview
        amount={price.toString()}
        createdAt={`Feb 28,2024 | 5:20pm`}
        destination={`Flight`}
        currency={currency}
        className="!p-0"
        handleSubmit={handleOpenSettings}
      >
        <div className="space-y-5 p-5  rounded-sm">
          <CustomSelect
            id="accountSelected"
            name="accountSelected"
            label="Select Account to debit"
            value={acc}
            searchable={false}
            options={[{ label: "Savings", value: "saving" }]}
            onChange={setAcc}
          />

          <h3 className="text-xs font-semibold text-gray-900">
            LAGOS - LONDON
          </h3>
          <div className="flex justify-between text-xs font-semibold text-gray-600">
            <p>Air Peace</p>
            <p>FRI, 9 MAY '25 - FRI, 9 MAY '25</p>
          </div>

          <div>
            <div className="my-4">
              {/* --- Times, Duration, and Airports --- */}
              <div className="flex justify-between items-center gap-5 my-4">
                {/* Departure Info */}
                <div className="text-left">
                  <p className="text-xs font-semibold text-gray-900">
                    {departureTime}
                  </p>
                  <p className="text-[10px] text-gray-500">
                    {departureAirportCode}
                  </p>
                </div>
                <div className="w-full h-4 bg-gray-50 border-t border-[#BAD6FF]"></div>
                <div className="h-10">
                  <p className="text-xs text-gray-700 mt-2 font-medium flex flex-col gap-0.5">
                    <span>{duration}</span>
                    <span className="text-button text-xs font-semibold">
                      1 stop
                    </span>
                  </p>
                </div>
                {/* Duration Indicator */}
                <div className="w-full h-4 bg-gray-50 border-t border-[#BAD6FF]"></div>
                {/* Arrival Info */}
                <div className="">
                  <p className="text-xs font-bold text-gray-900">
                    {arrivalTime}
                  </p>
                  <p className="text-[10px] text-gray-500">
                    {arrivalAirportCode}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {type == "round" && (
            <div>
              <div className="my-4">
                {/* --- Times, Duration, and Airports --- */}
                <div className="flex justify-between items-center gap-5 my-4">
                  {/* Departure Info */}
                  <div className="text-left">
                    <p className="text-xs font-semibold text-gray-900">
                      {departureTime}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      {departureAirportCode}
                    </p>
                  </div>
                  <div className="w-full h-4 bg-gray-50 border-t border-[#BAD6FF]"></div>
                  <div className="h-10">
                    <p className="text-xs text-gray-700 mt-2 font-medium flex flex-col gap-0.5">
                      <span>{duration}</span>
                      <span className="text-button text-xs font-semibold">
                        1 stop
                      </span>
                    </p>
                  </div>
                  {/* Duration Indicator */}
                  <div className="w-full h-4 bg-gray-50 border-t border-[#BAD6FF]"></div>
                  {/* Arrival Info */}
                  <div className="">
                    <p className="text-xs font-bold text-gray-900">
                      {arrivalTime}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      {arrivalAirportCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">
              Flights X 1 Traveller(s)
            </span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {formattedAmount(currency, price)}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">
              Service Charge
            </span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {formattedAmount(currency, 42388)}
            </span>
          </p>
        </div>
      </SummaryOverview>
    </PageLayout>
  );
}

export default BillSummary;
3;
