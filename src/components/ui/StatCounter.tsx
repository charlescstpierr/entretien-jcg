"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type StatCounterProps = {
  target: number;
  label: string;
  suffix?: string;
  duration?: number;
};

export const StatCounter = ({
  target,
  label,
  suffix = "",
  duration = 2000,
}: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const animate = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration, hasAnimated]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-extrabold text-gradient md:text-6xl">
        {count}
        <span className="text-emerald-primary">{suffix}</span>
      </p>
      <p className="mt-3 text-sm uppercase tracking-wider text-slate-400">
        {label}
      </p>
    </div>
  );
};
