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
  FaCheckCircle,
  FaUser,
  FaImage,
  FaCheck,
  FaTimes
} from "react-icons/fa";
import SocialButton from "./SocialButton";
import AuthInfo from "../../Hooks/AuthInfo";
import Swal from "sweetalert2";
import signUP from "../../assets/animatedImage/signup.png";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const { createUser, updateUser, setUser } = AuthInfo();
  const { state } = useLocation();
  const navigate = useNavigate();

  // Password strength validation
  const passwordChecks = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
  };

  const isPasswordValid = Object.values(passwordChecks).every(Boolean);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const userCredential = await createUser(email, password);
      const newUser = userCredential.user;

      // Update user profile
      await updateUser({ displayName: name, photoURL: photo });
      setUser({ ...newUser, displayName: name, photoURL: photo });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Register Successful!",
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
    { icon: FaShieldAlt, text: "Secure Account Protection" },
    { icon: FaCheckCircle, text: "Instant Access to 150+ Destinations" }
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
                  Join TripEase
                </h1>
                <p className="text-base-content/70 text-lg">
                  Create your account and start exploring
                </p>
              </motion.div>

              {/* Form */}
              <motion.form
                onSubmit={handleSignUp}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaUser className="text-base-content/40" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        className="input input-bordered w-full pl-12 h-12 focus:input-primary transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  {/* Photo URL Input */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Photo URL
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaImage className="text-base-content/40" />
                      </div>
                      <input
                        type="text"
                        name="photo"
                        className="input input-bordered w-full pl-12 h-12 focus:input-primary transition-all"
                        placeholder="https://example.com/photo.jpg"
                        required
                      />
                    </div>
                  </div>

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
                        className="input input-bordered w-full pl-12 h-12 focus:input-primary transition-all"
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered w-full pl-12 pr-12 h-12 focus:input-primary transition-all"
                        placeholder="Create a strong password"
                        required
                        minLength="8"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-base-content/40 hover:text-base-content transition-colors"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>

                    {/* Password Strength Indicator */}
                    {password && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 space-y-2"
                      >
                        <div className="flex items-center gap-2 text-sm">
                          {passwordChecks.length ? (
                            <FaCheck className="text-success" />
                          ) : (
                            <FaTimes className="text-error" />
                          )}
                          <span className={passwordChecks.length ? "text-success" : "text-base-content/60"}>
                            At least 8 characters
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          {passwordChecks.lowercase ? (
                            <FaCheck className="text-success" />
                          ) : (
                            <FaTimes className="text-error" />
                          )}
                          <span className={passwordChecks.lowercase ? "text-success" : "text-base-content/60"}>
                            One lowercase letter
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          {passwordChecks.uppercase ? (
                            <FaCheck className="text-success" />
                          ) : (
                            <FaTimes className="text-error" />
                          )}
                          <span className={passwordChecks.uppercase ? "text-success" : "text-base-content/60"}>
                            One uppercase letter
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          {passwordChecks.number ? (
                            <FaCheck className="text-success" />
                          ) : (
                            <FaTimes className="text-error" />
                          )}
                          <span className={passwordChecks.number ? "text-success" : "text-base-content/60"}>
                            One number
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start gap-2">
                    <input 
                      type="checkbox" 
                      className="checkbox checkbox-primary checkbox-sm mt-1" 
                      required 
                    />
                    <span className="text-sm text-base-content/70">
                      I agree to the{" "}
                      <button type="button" className="text-primary hover:text-primary/80 font-semibold">
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button type="button" className="text-primary hover:text-primary/80 font-semibold">
                        Privacy Policy
                      </button>
                    </span>
                  </div>

                  {/* Register Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                    className={`btn btn-primary w-full h-12 text-lg font-bold ${
                      isLoading ? "loading" : ""
                    }`}
                  >
                    {isLoading ? (
                      "Creating Account..."
                    ) : (
                      <>
                        Create Account
                        <FaArrowRight />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>

             

              {/* Social Login */}
              <SocialButton />

              {/* Login Link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center mt-6"
              >
                <p className="text-base-content/70">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary font-bold hover:text-primary/80 transition-colors"
                  >
                    Sign In
                  </Link>
                </p>
              </motion.div>
            </div>

            {/* Right Side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden lg:flex bg-gradient-to-br from-secondary to-primary p-12 flex-col justify-center items-center text-white relative overflow-hidden"
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
                    src={signUP}
                    alt="Register Illustration"
                    className="w-80 h-80 object-contain drop-shadow-2xl mx-auto"
                  />
                </motion.div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Start Your Journey Today
                  </h2>
                  <p className="text-white/90 text-lg mb-8">
                    Join our community of adventurers and unlock exclusive travel experiences
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

                {/* Benefits List */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left">
                  <h3 className="font-bold text-xl mb-4">What You'll Get:</h3>
                  <ul className="space-y-3">
                    {[
                      "Access to exclusive travel deals",
                      "Personalized trip recommendations",
                      "24/7 customer support",
                      "Easy booking management"
                    ].map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <FaCheckCircle className="text-white flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
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

export default Register