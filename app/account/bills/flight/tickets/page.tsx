"use client";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { FlightDataInfo } from "@/types/flight";
import { FlightOneWayCard, FlightRoundCard } from "@/views/Bills/FlightTicket";
import { useEffect, useState } from "react";

const data: FlightDataInfo[] = [
  {
    id: "F8670",
    departureDate: "23 DEC, 2024",
    // returnDate: "23 DEC, 2024",
    airlineName: "EgyptAir",
    flightNumber: "MS-867",
    price: 95645.0,
    currency: "NGN", // Using Nigerian Naira symbol
    classType: "BUSINESS",
    departureTime: "19:20",
    arrivalTime: "20:35",
    departureAirportCode: "LOS", // Lagos
    arrivalAirportCode: "ABV", // Abuja
    duration: "1hr:15m",
    layovers: 1,
    plane_name: "Royal Jordanian RJ611",
    arrivalAirportName: "Amman (Amman)",
    departureAirportName: "Dubai (Dubai Intl Airport)",
    layover_time: "19hr 45m",
    layover_location: "at Amman (Amman)",
    // Placeholder image for the logo
    logoUrl: "/images/ET.png",
  },
  {
    id: "F867",
    departureDate: "23 DEC, 2024",
    // returnDate: "23 DEC, 2024",
    airlineName: "EgyptAir",
    flightNumber: "MS-867",
    price: 95645.0,
    currency: "NGN", // Using Nigerian Naira symbol
    classType: "FIRST",
    departureTime: "19:20",
    arrivalTime: "20:35",
    departureAirportCode: "LOS", // Lagos
    arrivalAirportCode: "ABV", // Abuja
    duration: "1hr:15m",
    layovers: 1,
    plane_name: "Royal Jordanian RJ611",
    arrivalAirportName: "Amman (Amman)",
    departureAirportName: "Dubai (Dubai Intl Airport)",
    layover_time: "19:45",
    layover_location: "at Amman (Amman)",

    // Placeholder image for the logo
    logoUrl: "/images/ET.png",
  },
];

function SearchFlight() {
  const [type, setType] = useState("one-way");

  useEffect(() => {
    const getType = sessionStorage.getItem("bill_type");
    if (getType) {
      return setType(getType);
    }
    return setType("one-way");
  }, []);

  return (
    <PageLayout
      title="Flights Found"
      description="Enter details to book flights"
    >
      <CardPageLayout
        title="Select to see details"
        description="Select your desired type to begin"
        className="max-w-md"
      >
        <div className="space-y-5">
          {data.map((flight) => (
            <div key={flight.id}>
              {type == "one-way" && !flight.returnDate && (
                <FlightOneWayCard flight={flight} />
              )}
              {type == "round" && flight.returnDate && (
                <FlightRoundCard flight={flight} />
              )}
            </div>
          ))}
        </div>
      </CardPageLayout>
    </PageLayout>
  );
}
export default SearchFlight;
