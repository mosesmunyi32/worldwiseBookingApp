import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

export default function Reservation({ cabin }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] border-t border-b  border-primary-800">
      <DateSelector cabin={cabin} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
