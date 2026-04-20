import { useState, useEffect } from "react";
import { STATS } from "../../data/landingData";
import useInView from "../../util/useInView";

function AnimatedCounter({ value }) {
  const [display, setDisplay] = useState("0");
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) return;
    const hasSlash = value.includes("/");
    const isPlain = isNaN(parseFloat(value)) || hasSlash;
    if (isPlain) { setDisplay(value); return; }

    const suffix = value.replace(/[0-9.]/g, "");
    const end = parseFloat(value);
    const duration = 1500;
    const start = Date.now();

    const timer = setInterval(() => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = end * eased;
      setDisplay(
        Number.isInteger(end)
          ? Math.round(current) + suffix
          : current.toFixed(1) + suffix
      );
      if (progress === 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function Stats() {
  return (
    <section style={{ background: "#3b82f6" }} className="py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl md:text-4xl font-black text-white">
              <AnimatedCounter value={s.value} />
            </p>
            <p className="text-blue-200 text-sm mt-1 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}