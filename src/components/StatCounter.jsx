import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function StatCounter({ end, suffix = '', label, duration = 2, light = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;

    let start = 0;
    const increment = Math.max(1, Math.floor(end / 60));
    const intervalMs = Math.max(16, (duration * 1000) / 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  const formatted = count >= 1000 ? count.toLocaleString() : count;

  return (
    <div ref={ref} className="text-center">
      <div className={`font-heading text-4xl font-extrabold md:text-5xl ${light ? 'text-gold-300' : 'text-gold-600'}`}>
        {formatted}{suffix}
      </div>
      <div className={`mt-2 text-sm font-semibold ${light ? 'text-blue-100' : 'text-slate-600'}`}>
        {label}
      </div>
    </div>
  );
}
