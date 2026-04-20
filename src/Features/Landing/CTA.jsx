import { useNavigate } from "react-router-dom";
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

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="px-6 mb-16">
      <Animate>
        <div
          className="max-w-6xl mx-auto rounded-3xl py-20 px-6 text-center"
          style={{
            background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
            boxShadow: "0 24px 64px rgba(59,130,246,0.3)",
          }}
        >
          <h2 className="text-4xl font-black text-white mb-4">
            Ready to provide better care?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-lg mx-auto">
            Join the network of doctors, pharmacies, and patients building the
            future of accessible healthcare.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate("/auth")}
              className="font-semibold px-8 py-3 rounded-xl transition-all hover:opacity-90 active:scale-95"
              style={{ background: "white", color: "#1d4ed8" }}
            >
              Join as a Doctor
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="font-semibold px-8 py-3 rounded-xl transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#f97316", color: "white" }}
            >
              Find a Clinic
            </button>
          </div>
        </div>
      </Animate>
    </section>
  );
}