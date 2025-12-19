import { FlightData, FlightDataInfo } from "@/types/flight";
import Image from "next/image";
import React from "react";

// The core reusable component
export const FlightOneWayCardModal: React.FC<{
  flight: FlightData;
}> = ({ flight }) => {
  const {
    departureDate: date,
    airlineName,
    plane_name,
    layover_location,
    layover_time,
    classType,
    departureTime,
    arrivalTime,
    departureAirportName,
    arrivalAirportName,
    duration,
    logoUrl,
  } = flight;

  return (
    <div>
      {/* --- Airline and Class --- */}
      <div className="">
        <div className="flex items-center justify-between space-x-3">
          {/* Airline Logo Placeholder */}
          <div className="space-y-2">
            <Image
              alt={`${airlineName} logo`}
              src={logoUrl}
              width={54}
              height={23}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* --- Ticket Perforation Separator --- */}
      <div className="my-4">
        {/* --- Times, Duration, and Airports --- */}
        <div className="flex justify-between items-center gap-5 my-4">
          {/* Departure Info */}
          <div className="text-left w-full max-w-[800px]">
            <p className="text-xs font-semibold text-gray-900">
              {departureTime}
            </p>
            <p className="text-[10px] font-semibold text-gray-900">{date}</p>
            <p className="text-[10px] text-gray-500">{departureAirportName}</p>
          </div>
          <div className="w-full h-4 bg-gray-50 border-t border-[#BAD6FF]"></div>
          <div className="h-10">
            <p className="text-xs text-gray-700 mt-2 font-medium">{duration}</p>
          </div>
          {/* Duration Indicator */}
          <div className="w-full h-4 bg-gray-50 border-t border-[#BAD6FF]"></div>
          {/* Arrival Info */}
          <div className="w-full max-w-[800px]">
            <p className="text-xs font-bold text-gray-900">{arrivalTime}</p>
            <p className="text-[10px] font-semibold text-gray-900">{date}</p>
            <p className="text-[10px] text-gray-500">{arrivalAirportName}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-button items-center pt-3 text-[10px] font-semibold">
        <span>{plane_name}</span>
        <span>{duration}</span>
      </div>
      <span
        className={`text-[10px] font-semibold ${
          classType === "ECONOMY"
            ? " text-gray-600"
            : classType === "BUSINESS"
            ? "text-primary"
            : classType === "FIRST"
            ? "text-button"
            : "text-red-600"
        }`}
      >
        <span className="capitalize">{classType.toLowerCase()}</span> Class
      </span>
      {/* --- Layovers and View Details --- */}
      <div className="flex gap-10 items-center pt-3 text-[10px]">
        <p className="text-blue-500">{layover_time} Layovers</p>
        <p className="text-[#860495] font-bold">{layover_location}</p>
      </div>
    </div>
  );
};

export const FlightRoundCard: React.FC<{ flight: FlightDataInfo }> = ({
  flight,
}) => {
  const {
    departureDate,
    returnDate,
    airlineName,
    flightNumber,
    arrivalAirportName,
    departureAirportName,
    layover_location,
    layover_time,
    plane_name,
    classType,
    departureTime,
    arrivalTime,
    departureAirportCode,
    arrivalAirportCode,
    duration,
    layovers,
    logoUrl,
  } = flight;

  // Function to handle the View Details click (placeholder)
  const handleViewDetails = () => {
    console.log(`Viewing details for flight ${flightNumber} on ${returnDate}`);
    // In a real app, this would navigate to a detail page or open a modal
  };

  return (
    <div>
      {/* --- Airline and Class --- */}
      <div className="space-y-2">
        <div className="space-y-2">
          <Image
            alt={`${airlineName} logo`}
            src={logoUrl}
            width={54}
            height={23}
            loading="lazy"
          />
          {/* <p className="text-xs font-semibold text-gray-600">
            {airlineName} {flightNumber}
          </p> */}
          {/* <span
              className={`px-2 py-1 text-[10px] font-medium rounded-md uppercase ${
                classType === "ECONOMY"
                  ? "bg-gray-100 text-gray-600"
                  : classType === "BUSINESS"
                  ? "bg-blue-100 text-button"
                  : classType === "FIRST"
                  ? "bg-green-100 text-success"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {classType}
            </span> */}
          <p className="text-xs font-semibold text-gray-700">{departureDate}</p>
        </div>

        {/* --- Ticket Perforation Separator --- */}
        <div className="my-4">
          {/* --- Times, Duration, and Airports --- */}
          <div className="flex justify-between items-center gap-5 my-4">
            {/* Departure Info */}
            <div className="text-left">
              <p className="text-xs font-semibold text-gray-900">
                {departureTime}
              </p>
              <p className="text-xs font-semibold text-gray-900">
                {departureDate}
              </p>
              <p className="text-[10px] text-gray-500">
                {departureAirportName}
              </p>
            </div>
            <div className="w-full h-4 bg-gray-50 border-t border-[#BAD6FF]"></div>
            <div className="h-10">
              <p className="text-xs text-gray-700 mt-2 font-medium">
                {duration}
              </p>
            </div>
            {/* Duration Indicator */}
            <div className="w-full h-4 bg-gray-50 border-t border-[#BAD6FF]"></div>
            {/* Arrival Info */}
            <div className="">
              <p className="text-xs font-bold text-gray-900">{arrivalTime}</p>
              <p className="text-xs font-semibold text-gray-900">
                {arrivalTime}
              </p>
              <p className="text-[10px] text-gray-500">{arrivalAirportName}</p>
            </div>
          </div>
        </div>

        {/* --- Layovers and View Details --- */}
        <p className="text-blue-500 text-[10px]">
          No of Layovers: <span className="font-semibold">{layovers}</span>
        </p>
      </div>

      {/* Return flight section */}
      <div className="space-y-2">
        <div className="space-y-2">
          <Image
            alt={`${airlineName} logo`}
            src={logoUrl}
            width={54}
            height={23}
            loading="lazy"
          />
          <p className="text-xs font-semibold text-gray-600">
            {airlineName} {flightNumber}
          </p>
          {/* <span
              className={`px-2 py-1 text-[10px] font-medium rounded-md uppercase ${
                classType === "ECONOMY"
                  ? "bg-gray-100 text-gray-600"
                  : classType === "BUSINESS"
                  ? "bg-blue-100 text-button"
                  : classType === "FIRST"
                  ? "bg-green-100 text-success"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {classType}
            </span> */}
          <p className="text-xs font-semibold text-gray-700">{returnDate}</p>
        </div>

        {/* --- Ticket Perforation Separator --- */}
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
              <p className="text-xs text-gray-700 mt-2 font-medium">
                {duration}
              </p>
            </div>
            {/* Duration Indicator */}
            <div className="w-full h-4 bg-gray-50 border-t border-[#BAD6FF]"></div>
            {/* Arrival Info */}
            <div className="">
              <p className="text-xs font-bold text-gray-900">{arrivalTime}</p>
              <p className="text-[10px] text-gray-500">{arrivalAirportCode}</p>
            </div>
          </div>
        </div>

        {/* --- Layovers and View Details --- */}
        <p className="text-blue-500 text-[10px]">
          No of Layovers: <span className="font-semibold">{layovers}</span>
        </p>
      </div>
    </div>
  );
};
