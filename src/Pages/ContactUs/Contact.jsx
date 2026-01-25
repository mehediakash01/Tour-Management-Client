import React, { useState } from "react";
import { IoIosContacts } from "react-icons/io";
import { MdEmail, MdPhone, MdAccessTime, MdCheckCircle, MdLocationOn, MdSend } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="overflow-hidden min-h-screen bg-gradient-to-br lg:py-12 py-6 from-slate-50 via-blue-50 to-teal-50 relative ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-11/12 max-w-7xl mx-auto py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl shadow-lg mb-6 transform hover:rotate-12 transition-transform duration-300">
            <IoIosContacts className="text-4xl text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions about your trip? We're here to help you plan the perfect journey.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Contact Info Section - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Contact Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold mb-3 text-gray-800">How can we help?</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Whether you need assistance with bookings, have questions about destinations, 
                or want to share feedback, our support team is ready to assist you.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <ContactInfoItem
                  icon={<MdEmail className="text-2xl" />}
                  title="Email Us"
                  content={
                    <a
                      href="mailto:support@mehedi.akash.dev.com"
                      className="text-teal-600 hover:text-teal-700 font-medium hover:underline"
                    >
                      support@mehedi.akash.dev.com
                    </a>
                  }
                  bgColor="bg-blue-100"
                  iconColor="text-blue-600"
                />

                {/* Phone */}
                <ContactInfoItem
                  icon={<MdPhone className="text-2xl" />}
                  title="Call Us"
                  content={<p className="text-gray-700 font-medium">+880-1234-567890</p>}
                  bgColor="bg-green-100"
                  iconColor="text-green-600"
                />

                {/* Location */}
                <ContactInfoItem
                  icon={<MdLocationOn className="text-2xl" />}
                  title="Visit Us"
                  content={
                    <>
                      <p className="text-gray-700">123 Travel Street</p>
                      <p className="text-gray-700">Dhaka, Bangladesh</p>
                    </>
                  }
                  bgColor="bg-purple-100"
                  iconColor="text-purple-600"
                />

                {/* Hours */}
                <ContactInfoItem
                  icon={<MdAccessTime className="text-2xl" />}
                  title="Support Hours"
                  content={
                    <>
                      <p className="text-gray-700">Monday – Friday</p>
                      <p className="text-gray-700">9:00 AM – 6:00 PM (GMT+6)</p>
                    </>
                  }
                  bgColor="bg-orange-100"
                  iconColor="text-orange-600"
                />
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className=" bg-gradient-to-br  from-teal-500 to-blue-600 text-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <MdCheckCircle className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold">Quick Response</h3>
              </div>
              <p className="opacity-95 leading-relaxed">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>

            {/* Social Media */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Follow Us</h3>
              <div className="flex gap-3">
                <SocialButton icon={<FaFacebookF />} color="hover:bg-blue-600" />
                <SocialButton icon={<FaTwitter />} color="hover:bg-sky-500" />
                <SocialButton icon={<FaInstagram />} color="hover:bg-pink-600" />
                <SocialButton icon={<FaLinkedinIn />} color="hover:bg-blue-700" />
              </div>
            </div>
          </div>

          {/* Contact Form Section - 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-12 bg-gradient-to-b from-teal-500 to-blue-600 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-800">Send us a message</h2>
              </div>
              
              {/* Success Message */}
              {submitSuccess && (
                <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-4 flex items-start gap-3 animate-in slide-in-from-top">
                  <MdCheckCircle className="text-2xl text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Success!</h4>
                    <p className="text-green-700">Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="w-full">
                    <label className="block mb-2">
                      <span className="text-sm font-semibold text-gray-700">Your Name</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`input input-bordered w-full bg-gray-50 focus:bg-white transition-colors ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'focus:border-teal-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <span className="text-xs">⚠️</span> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="w-full">
                    <label className="block mb-2">
                      <span className="text-sm font-semibold text-gray-700">Your Email</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`input input-bordered w-full bg-gray-50 focus:bg-white transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'focus:border-teal-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <span className="text-xs">⚠️</span> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="w-full">
                  <label className="block mb-2">
                    <span className="text-sm font-semibold text-gray-700">Your Message</span>
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you plan your perfect journey..."
                    className={`textarea textarea-bordered w-full h-40 resize-none bg-gray-50 focus:bg-white transition-colors ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'focus:border-teal-500'
                    }`}
                  ></textarea>
                  <div className="flex justify-between items-center mt-2">
                    {errors.message && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <span className="text-xs">⚠️</span> {errors.message}
                      </p>
                    )}
                    <span className="text-sm text-gray-500 ml-auto">
                      {formData.message.length} characters
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  onClick={handleSubmit}
                  className={`btn w-full text-lg font-semibold py-4 h-auto bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-300 ${
                    isSubmitting ? 'opacity-75 cursor-wait' : ''
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <MdSend className="text-xl" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Note */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-gray-600 flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  <span>Your privacy is important to us. We'll never share your information with third parties.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Teaser - Enhanced */}
        <div className="relative bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-2xl shadow-xl p-10 text-center border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl shadow-lg mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-3 text-gray-800">Looking for quick answers?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Check out our FAQ section for instant answers to common questions about bookings, 
              cancellations, and trip planning.
            </p>
            <button className="btn btn-outline border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white hover:border-teal-500 px-8 transform hover:scale-105 transition-all duration-300">
              Visit FAQ Center
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes slide-in-from-top {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: slide-in-from-top 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

// Contact Info Item Component
const ContactInfoItem = ({ icon, title, content, bgColor, iconColor }) => {
  return (
    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
      <div className={`${bgColor} p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
        <div className={iconColor}>{icon}</div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
        <div className="text-sm">{content}</div>
      </div>
    </div>
  );
};

// Social Media Button Component
const SocialButton = ({ icon, color }) => {
  return (
    <button className={`w-11 h-11 bg-gray-100 hover:text-white ${color} rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}>
      {icon}
    </button>
  );
};

export default Contact;