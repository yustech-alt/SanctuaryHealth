import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../../data/landingData";
import useInView from "../../util/useInView";

function Animate({ children, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = TESTIMONIALS.length;

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((index + total) % total);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const prev = (current - 1 + total) % total;
  const next = (current + 1) % total;

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Animate>
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-3">
              Transforming Lives Across Communities
            </h2>
            <p className="text-gray-500 text-lg">
              Real stories from real patients who found hope through technology.
            </p>
          </div>
        </Animate>

        {/* Cards */}
        <div className="flex gap-6 justify-center items-stretch px-4">
          {/* Prev — dimmed */}
          <div
            className="hidden md:flex flex-col justify-between rounded-2xl p-6 w-72 flex-shrink-0 cursor-pointer"
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              opacity: 0.5,
              transform: "scale(0.95)",
              transition: "all 0.3s ease",
            }}
            onClick={() => goTo(current - 1)}
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              "{TESTIMONIALS[prev].quote}"
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ background: TESTIMONIALS[prev].avatarColor }}
              >
                {TESTIMONIALS[prev].initials}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">
                  {TESTIMONIALS[prev].name}
                </p>
                <p className="text-gray-400 text-xs">{TESTIMONIALS[prev].role}</p>
              </div>
            </div>
          </div>

          {/* Active card */}
          <div
            className="flex flex-col justify-between rounded-2xl p-7 flex-shrink-0"
            style={{
              background: "#3b82f6",
              width: "320px",
              opacity: animating ? 0 : 1,
              transform: animating ? "scale(0.97)" : "scale(1)",
              transition: "all 0.3s ease",
              boxShadow: "0 20px 40px rgba(59,130,246,0.35)",
            }}
          >
            <p className="text-white text-sm leading-relaxed font-medium">
              "{TESTIMONIALS[current].quote}"
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ background: TESTIMONIALS[current].avatarColor }}
              >
                {TESTIMONIALS[current].initials}
              </div>
              <div>
                <p className="font-semibold text-white text-sm">
                  {TESTIMONIALS[current].name}
                </p>
                <p className="text-blue-200 text-xs">
                  {TESTIMONIALS[current].role}
                </p>
              </div>
            </div>
          </div>

          {/* Next — dimmed */}
          <div
            className="hidden md:flex flex-col justify-between rounded-2xl p-6 w-72 flex-shrink-0 cursor-pointer"
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              opacity: 0.5,
              transform: "scale(0.95)",
              transition: "all 0.3s ease",
            }}
            onClick={() => goTo(current + 1)}
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              "{TESTIMONIALS[next].quote}"
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ background: TESTIMONIALS[next].avatarColor }}
              >
                {TESTIMONIALS[next].initials}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">
                  {TESTIMONIALS[next].name}
                </p>
                <p className="text-gray-400 text-xs">{TESTIMONIALS[next].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === current ? "#3b82f6" : "#cbd5e1",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => goTo(current - 1)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-blue-400 hover:text-blue-500 transition-all bg-white"
          >
            ←
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-blue-400 hover:text-blue-500 transition-all bg-white"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}   