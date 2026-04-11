"use client";

import { useEffect, useRef, useState } from "react";
import { formatNumber } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  triggerOnView?: boolean;
};

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 2600,
  className,
  triggerOnView = false,
}: AnimatedCounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(!triggerOnView);

  useEffect(() => {
    if (!triggerOnView) {
      return;
    }

    const node = containerRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [triggerOnView]);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [duration, hasStarted, value]);

  return (
    <span ref={containerRef} className={className}>
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
}
