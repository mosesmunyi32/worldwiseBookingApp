"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import SubmitButton from "./SubmitButton";
import Image from "next/image";

export default function ReservationForm({ cabin }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount = 0, id } = cabin;

  const startDate = range?.from;
  const endDate = range?.to;
  const numNights = differenceInDays(startDate, endDate);
  const cabinPrice = numNights * (regularPrice - discount);

  return (
    <div>
      <div className="flex justify-between px-5 py-3">
        <p>logged in as user</p>

        <div className="flex gap-4 items-center relative">
          <img
            referrerPolicy="true"
            src="/logo.png"
            alt="user profile"
            className="h-8 w-8 rounded-full"
          />
          <p>user name</p>
        </div>
      </div>

      <form
        action=""
        className="bg-primary-800 py-10 px-5 mx-3 text-lg flex flex-col gap-5 "
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

            {Array.from({ length: 8 }, (_, i) => i + 1).map((x) => (
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
