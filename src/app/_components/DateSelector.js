"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import "react-day-picker/dist/style.css";
import { DateRange } from "react-day-picker";
import { DayPicker } from "react-day-picker";
import { useState } from "react";

export default function DateSelector() {
  const [range, setRange] = useState();
  console.log("start:", range, "end:", setRange);

  return (
    <div>
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        selected={range}
        onSelect={setRange}
      />
    </div>
  );
}
