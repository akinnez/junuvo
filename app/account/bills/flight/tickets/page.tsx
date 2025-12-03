"use client";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { FlightDataInfo } from "@/types/flight";
import { FlightOneWayCard, FlightRoundCard } from "@/views/Bills/FlightTicket";

const data: FlightDataInfo[] = [
  {
    id: "F867",
    departureDate: "23 DEC",
    returnDate: "23 DEC",
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
    // Placeholder image for the logo
    logoUrl: "/images/ET.png",
  },
];
function SearchFlight() {
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
        {data.map((flight) => (
          <div key={flight.id}>
            {!flight.returnDate && <FlightOneWayCard flight={flight} />}
            {flight.returnDate && <FlightRoundCard flight={flight} />}
          </div>
        ))}
      </CardPageLayout>
    </PageLayout>
  );
}
export default SearchFlight;
