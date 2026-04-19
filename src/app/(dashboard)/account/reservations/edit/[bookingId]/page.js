import ReservationInputChange from "@/app/_components/ReservationInputChange";
import SubmitButton from "@/app/_components/SubmitButton";
import { updateBookingData } from "@/app/_lib/actions";
import { auth } from "@/app/_lib/auth";
import { getBooking } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const session = await auth();
  const { bookingId } = await params;

  const cabinData = await getBooking(bookingId);
  const maxCapacity = cabinData?.cabin?.maxCapacity ?? 1;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation cabin{cabinData.cabin.id}
      </h2>

      <form
        action={updateBookingData}
        className="bg-primary-800 py-10 rounded-sm px-5 mx-3 text-lg flex flex-col gap-5 "
      >
        <input type="hidden" name="bookingId" value={bookingId} />
        <input type="hidden" name="cabinId" value={cabinData?.cabin?.id} />

        <ReservationInputChange cabinData={cabinData} />

        <div className="space-y-2">
          <label htmlFor="numGuests">How may Guests</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={cabinData.numGuests}
            required
            className="px-5 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          >
            <option value="">select number of guests</option>

            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay
          </label>
          <textarea
            name="observations"
            id="observations"
            defaultValue={cabinData.observations}
            className="px-5 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm "
            placeholder="any allergies, special, requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center">
          <SubmitButton pendingLabel="updating...">
            Update Reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
