import { auth } from "../_lib/auth";
import { getBookedDatesbyCabinId } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

export default async function Reservation({ cabin }) {
  const { id: cabinId } = cabin;
  const session = await auth();
  const bookedDates = await getBookedDatesbyCabinId(cabinId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] border-t border-b  border-primary-800">
      <DateSelector cabin={cabin} bookedDates={bookedDates} />

      {session?.user ? (
        <ReservationForm cabin={cabin} user={session?.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
