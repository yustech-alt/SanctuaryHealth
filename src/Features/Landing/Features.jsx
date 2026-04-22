import { FEATURES } from "../../data/landingData";
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

export default function Features() {
  return (
    <section id="features" className="py-20" style={{ background: "#f8faff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <Animate>
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Revolutionary Healthcare Solutions
          </h2>
          <p className="text-gray-500 text-lg mb-12 max-w-xl">
            Modern tools designed to bypass infrastructure challenges and bring
            world-class care to your doorstep.
          </p>
        </Animate>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Large card */}
          <Animate delay={0}>
            <div
              className="rounded-2xl p-6 h-full"
              style={{ background: "white", border: "1px solid #e2e8f0" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background: FEATURES[0].accentBg }}
              >
                {FEATURES[0].emoji}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {FEATURES[0].title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {FEATURES[0].desc}
              </p>
            </div>
          </Animate>

          {/* Dark blue card */}
          <Animate delay={0.1}>
            <div
              className="rounded-2xl p-6 h-full flex flex-col justify-end"
              style={{
                background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
                minHeight: "200px",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                {FEATURES[1].emoji}
              </div>
              <h3 className="font-bold text-white text-lg mb-1">
                {FEATURES[1].title}
              </h3>
              <p className="text-blue-200 text-sm">{FEATURES[1].desc}</p>
            </div>
          </Animate>

          {/* Right column — 3 small cards */}
          <div className="flex flex-col gap-5">
            {FEATURES.slice(2).map((f, i) => (
              <Animate key={f.title} delay={0.1 * (i + 1)}>
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: f.accentBg,
                    border: `1px solid ${f.accentColor}22`,
                  }}
                >
                  <div className="text-xl mb-2">{f.emoji}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}