"use client";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { flightData } from "@/lib/mock-flight-data";
import { FlightOneWayCard, FlightRoundCard } from "@/views/Bills/FlightTicket";
import { useEffect, useState } from "react";



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
          {flightData.map((flight) => (
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
