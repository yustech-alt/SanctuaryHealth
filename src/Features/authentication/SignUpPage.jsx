import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.dob) e.dob = "Date of birth is required";
    if (!form.gender) e.gender = "Please select a gender";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 8) e.password = "Min 8 characters";
    if (!form.confirmPassword) e.confirmPassword = "Please confirm password";
    else if (form.password !== form.confirmPassword)
      e.confirmPassword = "Passwords do not match";
    if (!form.agreed) e.agreed = "You must agree to the terms";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "10px 14px",
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

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* Header */}
      <div className="mb-7">
        <h1 className="text-2xl font-black text-gray-900 mb-1">
          Create Your Account
        </h1>
        <p className="text-gray-500 text-sm">
          Please provide your details to begin your wellness journey
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Row 1 — Full Name + Email */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              style={inputStyle("fullName")}
            />
            {errors.fullName && <p style={errorStyle}>{errors.fullName}</p>}
          </div>
          <div>
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
        </div>

        {/* Row 2 — Phone + DOB */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label style={labelStyle}>Phone Number</label>
            <div className="flex gap-2">
              <div
                className="flex items-center px-3 rounded-lg border text-sm text-gray-600 flex-shrink-0"
                style={{ border: "1px solid #e2e8f0", background: "#f8fafc", fontSize: "13px" }}
              >
                🇳🇬 +234
              </div>
              <input
                type="tel"
                placeholder="801 234 5678"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                style={{ ...inputStyle("phone"), flex: 1 }}
              />
            </div>
            {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
          </div>
          <div>
            <label style={labelStyle}>Date of Birth</label>
            <input
              type="date"
              value={form.dob}
              onChange={(e) => update("dob", e.target.value)}
              style={inputStyle("dob")}
            />
            {errors.dob && <p style={errorStyle}>{errors.dob}</p>}
          </div>
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label style={labelStyle}>Gender</label>
          <select
            value={form.gender}
            onChange={(e) => update("gender", e.target.value)}
            style={{ ...inputStyle("gender"), color: form.gender ? "#0f172a" : "#94a3b8" }}
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not">Prefer not to say</option>
          </select>
          {errors.gender && <p style={errorStyle}>{errors.gender}</p>}
        </div>

        {/* Row 3 — Password + Confirm */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
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
          <div>
            <label style={labelStyle}>Confirm Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={(e) => update("confirmPassword", e.target.value)}
                style={{ ...inputStyle("confirmPassword"), paddingRight: "40px" }}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
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
                {showConfirm ? "🙈" : "👁"}
              </button>
            </div>
            {errors.confirmPassword && (
              <p style={errorStyle}>{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        {/* Terms */}
        <div className="mb-5">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={form.agreed}
              onChange={(e) => update("agreed", e.target.checked)}
              className="mt-0.5 flex-shrink-0"
              style={{ accentColor: "#166534" }}
            />
            <span style={{ fontSize: "12px", color: "#64748b", fontFamily: "Manrope, sans-serif" }}>
              I agree to the{" "}
              <span style={{ color: "#166534", fontWeight: "600", cursor: "pointer" }}>
                Terms of Service
              </span>{" "}
              and{" "}
              <span style={{ color: "#166534", fontWeight: "600", cursor: "pointer" }}>
                Privacy Policy
              </span>{" "}
              regarding my personal and health data.
            </span>
          </label>
          {errors.agreed && <p style={errorStyle}>{errors.agreed}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-70"
          style={{
            background: loading
              ? "#94a3b8"
              : "linear-gradient(135deg, #166534, #16a34a)",
            fontFamily: "Manrope, sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        {/* Login link */}
        <p
          className="text-center mt-5"
          style={{ fontSize: "13px", color: "#64748b", fontFamily: "Manrope, sans-serif" }}
        >
          Already have an account?{" "}
          <span
            onClick={() => navigate("/auth/login")}
            style={{ color: "#166534", fontWeight: "700", cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}