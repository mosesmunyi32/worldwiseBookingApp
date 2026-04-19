import DisplayBookingSummary from "@/app/_components/DisplayBookingSummay";
import { getBooking } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { bookingId } = await params;

  const booking = await getBooking(Number(bookingId));

  const identifierStr =
    "Booking successfully updated, here is the order Summary!!";

  return (
    <DisplayBookingSummary identifierStr={identifierStr} booking={booking} />
  );
}
