"use client";
import FlightComponent from "@/views/Bills/FlightComponent";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function FlightRoute() {
  const searchParams = useSearchParams();
  const params = searchParams.get("type");
  useEffect(() => {
    params && sessionStorage.setItem("bill_type", params);
  }, [params]);

  return <FlightComponent type={params as string} />;
}
export default FlightRoute;
