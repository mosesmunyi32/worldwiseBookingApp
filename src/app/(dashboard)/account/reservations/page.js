import ReservationCard from "@/app/_components/ReservationCard";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";

export default async function Page() {
  const session = await auth();

  const guestId = session.user.guestId;

  const bookings = await getBookings(guestId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb7">
        Your Reservations
      </h2>

      {bookings.length === 0 ? (
        <p>
          You have no reservations yet. check out our
          <Link href="/cabins">luxury cabins &rarr; </Link>
        </p>
      ) : (
        bookings.map((booking) => (
          <ReservationCard booking={booking} key={booking.id} />
        ))
      )}
    </div>
  );
}
