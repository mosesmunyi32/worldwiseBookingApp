"use client";

import { eachDayOfInterval } from "date-fns";
import { useEffect, useState } from "react";

function ReservationInputChange({ cabinData }) {
  function inputDateFormat(dateStr) {
    return new Date(dateStr).toISOString().split("T")[0];
  }

  const { numNights, startDate, endDate, totalPrice, cabinPrice } = cabinData;

  const [pickStartDate, setPickStartDate] = useState(() =>
    startDate ? inputDateFormat(startDate) : "",
  );
  const [pickEndDate, setPickEndDate] = useState(() =>
    startDate ? inputDateFormat(endDate) : "",
  );

  useEffect(() => {
    setPickStartDate(inputDateFormat(startDate));
    setPickEndDate(inputDateFormat(endDate));
  }, [startDate, endDate]);

  const start = new Date(pickStartDate);
  const end = new Date(pickEndDate);

  const calcNumNights =
    start && end && start <= end
      ? eachDayOfInterval({
          start,
          end,
        }).length
      : 0;

  const price = Number(cabinData?.cabin?.regularPrice ?? 0);
  const discount = Number(cabinData?.cabin?.discount ?? 0);
  const calcTotalPrice = (price - discount) * calcNumNights;

  return (
    <>
      <div className="space-y-2">
        <label htmlFor="StartDate"> Start Date </label>
        <input
          id="StartDate"
          name="startDate"
          value={pickStartDate}
          onChange={(e) => setPickStartDate(e.target.value)}
          type="date"
          className="input px-5 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="endDate"> end date </label>
        <input
          id="endDate"
          name="endDate"
          value={pickEndDate}
          onChange={(e) => setPickEndDate(e.target.value)}
          type="date"
          className="input px-5 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="numNights"> Number of Nights </label>
        <input
          id="numNights"
          type="text"
          value={calcNumNights}
          readOnly
          className="input px-5 py-2 bg-primary-200 text-accent-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="totalPice"> Total Price </label>
        <input
          id="totalPrice"
          type="text"
          value={`$${calcTotalPrice}`}
          readOnly
          className="input px-5 py-2 bg-primary-200 text-accent-800 w-full shadow-sm rounded-sm"
        />
      </div>
    </>
  );
}

export default ReservationInputChange;
