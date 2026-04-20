export default function Footer() {
  return (
    <footer style={{ background: "#f5a623" }} className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className="text-xl font-black mb-3"
              style={{ color: "#7c2d12" }}
            >
              SanctuaryHealth
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#92400e" }}>
              Transforming medical accessibility for the next billion users
              through human-centric digital sanctuary design.
            </p>
          </div>
          <div>
            <h4
              className="font-bold mb-3 text-sm"
              style={{ color: "#7c2d12" }}
            >
              Resources
            </h4>
            {["Patient Rights", "Support"].map((item) => (
              <p
                key={item}
                className="text-sm mb-2 cursor-pointer hover:underline"
                style={{ color: "#92400e" }}
              >
                {item}
              </p>
            ))}
          </div>
          <div>
            <h4
              className="font-bold mb-3 text-sm"
              style={{ color: "#7c2d12" }}
            >
              Company
            </h4>
            {["Careers", "Terms of Service", "Privacy Policy"].map((item) => (
              <p
                key={item}
                className="text-sm mb-2 cursor-pointer hover:underline"
                style={{ color: "#92400e" }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div
          className="pt-6 text-center text-sm"
          style={{
            borderTop: "1px solid rgba(146,64,14,0.2)",
            color: "#92400e",
          }}
        >
          © 2024 SanctuaryHealth. Professional Authority. Empathetic Care.
        </div>
      </div>
    </footer>
  );
}