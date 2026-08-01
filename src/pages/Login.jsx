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
    localStorage.setItem("token", response.data.token);

    // Save Username
    localStorage.setItem(
      "username",
      response.data.user.username
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

        <h1 className="text-4xl font-bold text-center text-white mb-2">
          AlphaVerse AI
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Sign in to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-4 outline-none"
            required
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full bg-slate-800 rounded-xl p-4 pr-12 outline-none"
              required
            />

            <button
              type="button"
              onClick={()=>setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
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
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-cyan-400"
          >
            Register
          </Link>
        </p>

      </div>

    </div>

  );

}

export default Login;