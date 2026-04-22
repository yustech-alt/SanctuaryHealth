import { useNavigate } from "react-router-dom";
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

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="pt-16 min-h-screen flex items-center"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left content */}
        <div>
          <Animate delay={0}>
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-6"
              style={{ background: "#dbeafe", color: "#1d4ed8" }}
            >
              Empowering Rural Communities
            </span>
          </Animate>

          <Animate delay={0.1}>
            <h1
              className="text-5xl md:text-6xl font-black leading-tight mb-6"
              style={{ color: "#0f172a" }}
            >
              Healthcare That
              <br />
              Reaches{" "}
              <span style={{ color: "#3b82f6" }}>Every</span>
              <br />
              <span style={{ color: "#3b82f6" }}>Village</span>
            </h1>
          </Animate>

          <Animate delay={0.2}>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
              Bridging the gap between specialized medical expertise and remote
              populations through intelligent technology and empathetic clinical
              care.
            </p>
          </Animate>

          <Animate delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: "#3b82f6",
                  boxShadow: "0 8px 24px rgba(59,130,246,0.35)",
                }}
              >
                Start Consultation →
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-semibold px-6 py-3 rounded-xl transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: "#f97316",
                  color: "white",
                  boxShadow: "0 8px 24px rgba(249,115,22,0.3)",
                }}
              >
                Learn More
              </button>
            </div>
          </Animate>
        </div>

        {/* Right — Portal card */}
        <Animate delay={0.2}>
          <div
            className="rounded-2xl p-6"
            style={{
              background: "white",
              boxShadow: "0 24px 64px rgba(0,0,0,0.1)",
              border: "1px solid #e2e8f0",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-800 text-lg">
                HealthConnect Portals
              </h3>
              <span className="text-2xl">⚕️</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Patient", icon: "👤", bg: "#eff6ff", border: "#bfdbfe" },
                { label: "Doctor", icon: "🩺", bg: "#f0fdf4", border: "#bbf7d0" },
                { label: "Pharmacy", icon: "🏥", bg: "#fff7ed", border: "#fed7aa" },
                { label: "Admin", icon: "⚙️", bg: "#faf5ff", border: "#e9d5ff" },
              ].map((p) => (
                <button
                  key={p.label}
                  onClick={() => navigate("/dashboard")}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all hover:scale-105 active:scale-95 cursor-pointer border"
                  style={{ background: p.bg, borderColor: p.border }}
                >
                  <span className="text-2xl">{p.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">
                    {p.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
}