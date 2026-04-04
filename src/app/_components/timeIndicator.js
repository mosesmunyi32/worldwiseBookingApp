"use client";

import timeline from "daisyui/components/timeline";
import { useState, useEffect } from "react";

export default function TimeIndicator({ discountDays, setTime }) {
  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  // Store target date once (stable reference)
  const [targetDate] = useState(() => new Date(discountDays).getTime());

  // Time calculation logic
  const calculateTimeLeft = () => {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  };

  // State
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const [hasTimeLeft, setHasTimeLeft] = useState(setTime);

  // Effect for countdown
  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTimeLeft(() => {
        const updated = calculateTimeLeft();

        // Stop interval when countdown ends
        if (
          updated.days === 0 &&
          updated.hours === 0 &&
          updated.minutes === 0 &&
          updated.seconds === 0
        ) {
          setHasTimeLeft(false);
          clearInterval(interval);
        }

        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Skeleton loader (prevents hydration issues)
  if (!mounted) {
    return;
    <div className="grid grid-flow-col gap-1 text-center auto-cols-max absolute top-2 right-1">
      <div className="h-10 w-32 bg-primary-900 rounded animate-pulse" />
    </div>;
  }

  const timeUnits = [
    { value: timeLeft.days, label: "days" },
    { value: timeLeft.hours, label: "hours" },
    { value: timeLeft.minutes, label: "min" },
    { value: timeLeft.seconds, label: "sec" },
  ];

  if (
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds == 0
  )
    return null;

  return (
    <div
      className="grid grid-flow-col gap-1 text-center auto-cols-max absolute top-2 right-1"
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
