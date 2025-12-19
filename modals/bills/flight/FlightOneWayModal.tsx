import Button from "@/components/Button";
import { FlightOneWayCardModal } from "@/views/Bills/FlightTicket/Details";
import Link from "next/link";

export default function FlightOneWayModal({
  flight,
  closeModal,
}: {
  flight: any;
  closeModal: any;
}) {
  return (
    <div className="space-y-2">
      <FlightOneWayCardModal flight={flight} />
      <div className="mt-10">
        <Link href={"/account/bills/flight/passengers"} onClick={closeModal}>
          <Button className="w-full">Continue Booking</Button>
        </Link>
      </div>
    </div>
  );
}
