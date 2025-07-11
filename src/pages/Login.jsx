import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const { handleLogin, googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleLogin(email, password).then(() => {
      navigate(`${location.state ? location.state : "/"}`);
    });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success("Google Login successfull!");
        navigate(`${location.state ? location.state : "/"}`);
        console.log(result);
      })
  };

  const handleForget = () => {
    navigate("/forget-pass", { state: { email } });
  };

  return (
    <div className="flex items-center justify-center bg-slate-50 h-screen px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-violet-700 mb-2">
          Login to your account
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Don’t have an account?{" "}
          <NavLink
            to="/register"
            className="text-violet-600 hover:underline font-medium"
          >
            Register here
          </NavLink>
        </p>

        <div className="space-y-4 mb-6">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center w-full gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            <FcGoogle size={23} />
            <span>Login with Google</span>
          </button>
        </div>

        <div className="flex items-center w-full my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              id="email"
              ref={emailRef}
              required
              placeholder="Your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <button
                onClick={handleForget}
                type="button"
                className="text-xs text-violet-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <div className="flex items-center relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                required
                placeholder="******"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-4"
              >
                {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
