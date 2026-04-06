import { intervalToDuration, isValid, isPast } from "date-fns";
import { useCallback, useEffect, useMemo, useState } from "react";

export function useCountdown(targetDate) {
  const target = useMemo(() => new Date(targetDate), [targetDate]);

  const calculateTimeLeft = useCallback(() => {
    if (!isValid(target) || isPast(target)) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const duration = intervalToDuration({
      start: new Date(),
      end: target,
    });

    return {
      days: duration.days || 0,
      hours: duration.hours || 0,
      minutes: duration.minutes || 0,
      seconds: duration.seconds || 0,
    };
  }, [target]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [hasTimeLeft, setHasTimeLeft] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initial = calculateTimeLeft();
    setTimeLeft(initial);
    setHasTimeLeft(Object.values(initial).some((v) => v > 0));
  }, [calculateTimeLeft]);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
      setHasTimeLeft(Object.values(updated).some((v) => v > 0));

      if (Object.values(updated).every((v) => v === 0)) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [mounted, calculateTimeLeft]);

  const formatted = `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m`;

  return {
    timeLeft,
    hasTimeLeft: mounted && hasTimeLeft,
    isExpired: mounted && !hasTimeLeft && isPast(target),
    formatted,
  };
}
