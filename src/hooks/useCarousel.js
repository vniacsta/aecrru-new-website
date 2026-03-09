import { useEffect, useState } from "react";

export function useCarousel(length, delay, active = true) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active || length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, delay);

    return () => window.clearInterval(timer);
  }, [active, delay, length]);

  return [index, setIndex];
}
