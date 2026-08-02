import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "../api/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        email,
        password,
      });

      // Save JWT Token
      localStorage.setItem(
        "token",
        response.data.token
      );

      // Save Username
      localStorage.setItem(
        "username",
        response.data.user.username
      );

      // Save Email
      localStorage.setItem(
        "email",
        response.data.user.email || email
      );

      alert(response.data.message);

      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <div className="bg-slate-900 rounded-2xl shadow-xl p-10 w-[420px]">

        {/* Logo / Title */}

        <h1 className="text-4xl font-bold text-center text-white mb-2">
          AlphaVerse AI
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Sign in to continue
        </p>

        {/* Login Form */}

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* Email */}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-slate-800 text-white rounded-xl p-4 outline-none border border-slate-700 focus:border-cyan-500"
            required
          />

          {/* Password */}

          <div className="relative">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full bg-slate-800 text-white rounded-xl p-4 pr-12 outline-none border border-slate-700 focus:border-cyan-500"
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 rounded-xl p-4 font-bold transition"
          >
            Login
          </button>

        </form>

        {/* Register */}

        <p className="text-center mt-6 text-slate-400">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;