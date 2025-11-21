"use client";
import FlightComponent from "@/views/Bills/FlightComponent";
import { useSearchParams } from "next/navigation";

function FlightRoute() {
  const searchParams = useSearchParams();
  const params = searchParams.get("type");

  return <FlightComponent type={params as string} />;
}
export default FlightRoute;
