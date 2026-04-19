import DisplayBookingSummary from "@/app/_components/DisplayBookingSummay";
import { auth } from "@/app/_lib/auth";
import { getBooking, getGuest } from "@/app/_lib/data-service";
import Link from "next/link";
// import { useSearchParams } from "next/navigation";

export default async function Thankyou({ searchParams }) {
  const session = await auth();
  const search = await searchParams;

  const bookingId = search.bookingId;

  const booking = await getBooking(bookingId);
  const user = await getGuest(session.user.email);
  const { fullName } = user;
  const userName = fullName.split(" ").at(0);

  const identifierStr = `${userName}, your booking has been created, here is the order Summary!!`;

  return (
    <div>
      <DisplayBookingSummary identifierStr={identifierStr} booking={booking} />
    </div>
  );
}
