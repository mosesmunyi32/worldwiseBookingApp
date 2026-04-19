"use client";

import {
  differenceInDays,
  isPast,
  isToday,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import "../_styles/globals.css";
import "react-day-picker/dist/style.css";
import { DateRange, getDefaultClassNames } from "react-day-picker";
import dynamic from "next/dynamic";
import { useReservation } from "./ReservationContext";

const DayPicker = dynamic(
  () => import("react-day-picker").then((mod) => mod.DayPicker),
  { ssr: false },
);

// function isAlreadyBooked(range, datesArr) {
//   return (
//     range.from &&
//     range.to &&
//     datesArr.some((date) =>
//       isWithinInterval(date, { start: range.from, end: range.to }),
//     )
//   );
// }
export default function DateSelector({ cabin, bookedDates }) {
  // const getDefaultClassNames = getDefaultClassNames();
  const { range, setRange, resetRange } = useReservation();

  const { regularPrice, discount = 0 } = cabin;
  const numNights =
    range?.from && range?.to ? differenceInDays(range?.to, range?.from) : 0;
  const totalCabinPrice = numNights * (regularPrice - discount);

  return (
    <div className="flex flex-col justify-between ">
      <DayPicker
        className="place-self-center mb-5 text-sm text-primary-400 bg-primary-950"
        mode="range"
        onSelect={setRange}
        selected={range}
        startMonth={new Date()}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          (isPast(curDate) && !isToday(curDate)) ||
          bookedDates.some((bookedDate) => isSameDay(bookedDate, curDate))
        }
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-16 rounded-md ">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">
                  ${totalCabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold rounded-full"
            onClick={resetRange}
          >
            Select again..
          </button>
        ) : null}
      </div>
    </div>
  );
}
