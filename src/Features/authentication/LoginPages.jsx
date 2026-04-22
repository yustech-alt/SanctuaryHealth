import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [activeRole, setActiveRole] = useState("Patient");

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.password) e.password = "Password is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "11px 14px",
    borderRadius: "10px",
    border: `1px solid ${errors[field] ? "#ef4444" : "#e2e8f0"}`,
    fontSize: "14px",
    outline: "none",
    fontFamily: "Manrope, sans-serif",
    color: "#0f172a",
    background: "white",
    transition: "border 0.2s ease",
  });

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: "600",
    color: "#64748b",
    marginBottom: "5px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontFamily: "Manrope, sans-serif",
  };

  const errorStyle = {
    fontSize: "11px",
    color: "#ef4444",
    marginTop: "4px",
    fontFamily: "Manrope, sans-serif",
  };

  const ROLES = ["Patient", "Doctor", "Pharmacy", "Admin"];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* Header */}
      <div className="mb-7">
        <h1 className="text-2xl font-black text-gray-900 mb-1">Welcome Back</h1>
        <p className="text-gray-500 text-sm">
          Enter your credentials to access your vitality dashboard
        </p>
      </div>

      {/* Role selector */}
      <div
        className="flex rounded-xl p-1 mb-6"
        style={{ background: "#f1f5f9" }}
      >
        {ROLES.map((role) => (
          <button
            key={role}
            onClick={() => setActiveRole(role)}
            className="flex-1 py-2 text-xs font-semibold rounded-lg transition-all"
            style={{
              background: activeRole === role ? "white" : "transparent",
              color: activeRole === role ? "#166534" : "#94a3b8",
              border: "none",
              cursor: "pointer",
              fontFamily: "Manrope, sans-serif",
              boxShadow:
                activeRole === role ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
            }}
          >
            {role}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Email */}
        <div className="mb-4">
          <label style={labelStyle}>Email Address</label>
          <input
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            style={inputStyle("email")}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-2">
          <label style={labelStyle}>Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPass ? "text" : "password"}
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => update("password", e.target.value)}
              style={{ ...inputStyle("password"), paddingRight: "40px" }}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                color: "#94a3b8",
              }}
            >
              {showPass ? "🙈" : "👁"}
            </button>
          </div>
          {errors.password && <p style={errorStyle}>{errors.password}</p>}
        </div>

        {/* Forgot password */}
        <div className="flex justify-end mb-5">
          <span
            className="text-xs font-semibold cursor-pointer hover:underline"
            style={{ color: "#166534" }}
          >
            Forgot Password?
          </span>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-70"
          style={{
            background:
              loading ? "#94a3b8" : "linear-gradient(135deg, #166534, #16a34a)",
            fontFamily: "Manrope, sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px" style={{ background: "#e2e8f0" }} />
          <span className="text-xs text-gray-400">Or continue with</span>
          <div className="flex-1 h-px" style={{ background: "#e2e8f0" }} />
        </div>

        {/* Google */}
        <button
          type="button"
          className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:bg-gray-50 active:scale-95"
          style={{
            border: "1px solid #e2e8f0",
            background: "white",
            color: "#374151",
            fontFamily: "Manrope, sans-serif",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
          </svg>
          Sign in with Google
        </button>

        {/* Signup link */}
        <p
          className="text-center mt-5"
          style={{
            fontSize: "13px",
            color: "#64748b",
            fontFamily: "Manrope, sans-serif",
          }}
        >
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/auth")}
            style={{ color: "#166534", fontWeight: "700", cursor: "pointer" }}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}
