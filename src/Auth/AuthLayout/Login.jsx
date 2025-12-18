import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaLock, 
  FaEye, 
  FaEyeSlash,
  FaArrowRight,
  FaShieldAlt,
  FaCheckCircle
} from "react-icons/fa";
import SocialButton from "./SocialButton";
import AuthInfo from "../../Hooks/AuthInfo";
import Swal from "sweetalert2";
import login from "../../assets/animatedImage/login.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { loginUser } = AuthInfo();
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(state || "/", { replace: true });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.message || "Something went wrong"}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    { icon: FaShieldAlt, text: "Secure & Encrypted" },
    { icon: FaCheckCircle, text: "Trusted by 10K+ Users" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        {/* Main Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-base-100 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Form */}
            <div className="p-8 lg:p-12">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center lg:text-left mb-8"
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-3">
                  Welcome Back!
                </h1>
                <p className="text-base-content/70 text-lg">
                  Sign in to continue your journey
                </p>
              </motion.div>

              {/* Form */}
              <motion.form
                onSubmit={handleSignIn}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaEnvelope className="text-base-content/40" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="input input-bordered w-full pl-12 h-14 text-lg focus:input-primary transition-all"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaLock className="text-base-content/40" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="input input-bordered w-full pl-12 pr-12 h-14 text-lg focus:input-primary transition-all"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-base-content/40 hover:text-base-content transition-colors"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  {/* Remember & Forgot */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                      <span className="text-sm">Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="text-sm text-primary hover:text-primary/80 font-semibold"
                    >
                      Forgot password?
                    </button>
                  </div>

                  {/* Login Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                    className={`btn btn-primary w-full h-14 text-lg font-bold ${
                      isLoading ? "loading" : ""
                    }`}
                  >
                    {isLoading ? (
                      "Signing In..."
                    ) : (
                      <>
                        Sign In
                        <FaArrowRight />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>

             

              {/* Social Login */}
              <SocialButton />

              {/* Register Link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center mt-8"
              >
                <p className="text-base-content/70">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-primary font-bold hover:text-primary/80 transition-colors"
                  >
                    Create Account
                  </Link>
                </p>
              </motion.div>
            </div>

            {/* Right Side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden lg:flex bg-gradient-to-br from-primary to-secondary p-12 flex-col justify-center items-center text-white relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center space-y-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mb-8"
                >
                  <img
                    src={login}
                    alt="Login Illustration"
                    className="w-80 h-80 object-contain drop-shadow-2xl mx-auto"
                  />
                </motion.div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Your Next Adventure Awaits
                  </h2>
                  <p className="text-white/90 text-lg mb-8">
                    Join thousands of travelers exploring the world with TripEase
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                    >
                      <feature.icon className="text-2xl" />
                      <span className="font-semibold">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold">10K+</div>
                    <div className="text-sm opacity-90">Active Users</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold">150+</div>
                    <div className="text-sm opacity-90">Destinations</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 text-base-content/60 text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            <FaShieldAlt />
            Your information is protected with 256-bit SSL encryption
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;