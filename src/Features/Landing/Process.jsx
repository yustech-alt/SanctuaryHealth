import { STEPS } from "../../data/landingData";
import useInView from "../../util/useInView";

function Animate({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
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

export default function Process() {
  return (
    <section id="process" className="py-20" style={{ background: "#faf9f6" }}>
      <div className="max-w-6xl mx-auto px-6">
        <Animate>
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-3">
              Simple 3-Step Process
            </h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">
              Accessing specialized care has never been easier, regardless of
              where you live.
            </p>
          </div>
        </Animate>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5"
            style={{
              background:
                "linear-gradient(to right, #3b82f6, #93c5fd, #3b82f6)",
            }}
          />

          {STEPS.map((s, i) => (
            <Animate key={s.title} delay={i * 0.15}>
              <div className="flex flex-col items-center text-center relative">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-black mb-5 z-10"
                  style={{
                    background: "#3b82f6",
                    boxShadow: "0 8px 24px rgba(59,130,246,0.4)",
                  }}
                >
                  {s.num}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {s.desc}
                </p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}