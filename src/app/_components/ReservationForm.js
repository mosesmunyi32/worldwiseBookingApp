"use client";

import { differenceInDays, eachDayOfInterval, subDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import SubmitButton from "./SubmitButton";
import Image from "next/image";
import { createBooking } from "../_lib/actions";

export default function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount = 0, id } = cabin;

  const startDate = range?.from;
  const endDate = range?.to;
  const numNights = eachDayOfInterval({
    start: startDate,
    end: endDate,
  }).length;

  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    cabinId: cabin.id,
    startDate,
    endDate,
    numNights,
    cabinPrice,
  };

  return (
    <div className="scale-[1.0]">
      <div className="flex  justify-between bg-primary-700 rounded-sm  text-xl px-5 py-3">
        <p>logged in as</p>

        <div className="flex gap-4 text-xl  items-center relative">
          <img
            referrerPolicy="no-referrer"
            src={user.image}
            alt={user.name}
            className="h-8 w-8  rounded-full"
          />
          <p>{user.name} </p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createBooking(bookingData, formData);
          resetRange();
        }}
        className="bg-primary-800 py-10 rounded-sm px-5 mx-3 text-lg flex flex-col gap-5 "
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How may Guests</label>
          <select
            name="numGuests"
            id="numGuests"
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

        <div className="spacy-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm "
            placeholder="any allergies, special, requirements, etc.?"
          />
        </div>

        <div>
          {!endDate && !startDate ? (
            <p>Start by selecting stay dates</p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">Reserve now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}
