import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const location = useLocation();
  const { passwordForget } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(location.state?.email || "");
  }, [location.state]);

  const handleReset = () => {
    if (!email) {
      alert("Please enter a valid email");
      return;
    }

    passwordForget(email)
      .then(() => {
        toast.success("Reset Email Sent Successfull.");
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

  return (
    <div className="flex items-center justify-center bg-slate-50 h-screen px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h3 className="text-3xl font-bold text-center text-violet-700 mb-2">
          Reset Your Password
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          <button
            onClick={handleReset}
            className="w-full py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-500"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
