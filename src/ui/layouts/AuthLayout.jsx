import { Outlet } from "react-router-dom";
import Navbar from "../../Features/Landing/Navbar";
import Footer from "../Footer";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 pt-16">
        {/* Left green panel */}
        <div
          className="hidden md:flex flex-col justify-between p-12 w-[45%] flex-shrink-0 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(10,61,20,0.88) 0%, rgba(22,101,52,0.82) 100%), url("https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          {/* Logo */}
          <div className="relative z-10">
            <span className="text-white text-2xl">✚</span>
          </div>
          {/* Main text */}
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-white leading-tight mb-4">
              Your Health,
              <br />
              Our Priority.
            </h2>
            <p className="text-green-200 text-sm leading-relaxed max-w-xs">
              Join Nigeria's premier digital healthcare network and experience
              the Clinical Sanctuary — where professional expertise meets
              empathetic technology.
            </p>
          </div>
          {/* Trust badges */}
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["#f97316", "#3b82f6", "#8b5cf6"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: c }}
                  >
                    {["D", "N", "H"][i]}
                  </div>
                ))}
              </div>
              <p className="text-green-200 text-xs">
                Trusted by healthcare professionals across Nigeria
              </p>
            </div>
            <p className="text-green-300 text-xs mt-3 opacity-70">
              YOUR PRIVACY MATTERS · SECURE PORTAL
            </p>
          </div>
        </div>

        {/* Right — form area */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-white">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
