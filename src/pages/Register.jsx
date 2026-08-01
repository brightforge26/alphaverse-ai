import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { registerUser } from "../api/auth";
function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/;

    return regex.test(password);
  };

  const handleRegister = async (e) => {
  e.preventDefault();

  if (!validatePassword(formData.password)) {
    alert(
      "Password must contain:\n\n" +
        "• Minimum 8 characters\n" +
        "• One uppercase letter\n" +
        "• One lowercase letter\n" +
        "• One number\n" +
        "• One special character"
    );
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const response = await registerUser({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });

    alert(response.data.message);

    navigate("/login");
  } catch (error) {
    alert(
      error.response?.data?.message ||
        "Registration Failed!"
    );
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <div className="bg-slate-900 rounded-2xl shadow-xl p-10 w-[450px]">

        <h1 className="text-4xl font-bold text-center text-white mb-2">
          AlphaVerse AI
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Create your account
        </p>

        <form onSubmit={handleRegister} className="space-y-5">

          <input
            type="text"
            name="username"
            placeholder="Full Name"
            value={formData.username}
            onChange={handleChange}
            className="w-full bg-slate-800 rounded-xl p-4 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-slate-800 rounded-xl p-4 outline-none"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-slate-800 rounded-xl p-4 outline-none"
            required
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-slate-800 rounded-xl p-4 pr-12 outline-none"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
            </button>

          </div>

          <div className="relative">

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-slate-800 rounded-xl p-4 pr-12 outline-none"
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showConfirmPassword ? (
                <EyeOff size={20}/>
              ) : (
                <Eye size={20}/>
              )}
            </button>

          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 rounded-xl p-4 font-bold transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6 text-slate-400">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;