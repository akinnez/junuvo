"use client";
import Button from "@/components/Button";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import { FlightOneWayCardModal } from "@/views/Bills/FlightTicket/Details";
import Link from "next/link";

export default function FlightOneWayModal({
  flight,
  closeModal,
}: {
  flight: any;
  closeModal: any;
}) {
  const { appType } = useAppNavigation();
  return (
    <div className="space-y-2">
      <FlightOneWayCardModal flight={flight} />
      <div className="mt-10">
        <Link href={`/${appType}/bills/flight/passengers`} onClick={closeModal}>
          <Button className="w-full">Continue Booking</Button>
        </Link>
      </div>
    </div>
  );
}
