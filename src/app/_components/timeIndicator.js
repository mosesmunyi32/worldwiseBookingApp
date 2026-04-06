"use client";

import { useCountdown } from "../_customHooks/timeCustom";

export default function TimeIndicator({ timeLeft }) {
  const timeUnits = [
    { value: timeLeft.days, label: "days" },
    { value: timeLeft.hours, label: "hours" },
    { value: timeLeft.minutes, label: "min" },
    { value: timeLeft.seconds, label: "sec" },
  ];

  return (
    <div
      className="grid grid-flow-col gap-1 text-center auto-cols-max absolute top-2 right-1 border border-dotted border-primary-800 "
      aria-live="polite"
    >
      {timeUnits.map(({ value, label }) => (
        <div
          key={label}
          className="flex flex-col p-1 bg-primary-900 rounded-box text-primary-200"
        >
          <span className="countdown font-mono text-xl">
            <span
              style={{ "--value": value, "--digits": 2 }}
              aria-label={String(value)}
            >
              {value}
            </span>
          </span>
          <span className="text-xs">{label}</span>
        </div>
      ))}
    </div>
  );
}
