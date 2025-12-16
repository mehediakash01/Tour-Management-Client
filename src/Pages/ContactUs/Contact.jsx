import React, { useState } from "react";
import { IoIosContacts } from "react-icons/io";
import { MdEmail, MdPhone, MdAccessTime, MdCheckCircle } from "react-icons/md";

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
    // Clear error for this field when user starts typing
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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
      <div className="w-11/12 max-w-7xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary flex items-center gap-3 justify-center mb-4">
            <IoIosContacts className="text-5xl" /> 
            Contact & Support
          </h1>
          <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
            Have questions about your trip? We're here to help you plan the perfect journey.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="bg-base-100 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-6 text-primary">How can we help?</h2>
              <p className="text-base-content/80 text-lg mb-8">
                Whether you need assistance with bookings, have questions about destinations, 
                or want to share feedback, our support team is ready to assist you.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MdEmail className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <a
                      href="mailto:support@mehedi.akash.dev.com"
                      className="text-primary hover:underline text-base"
                    >
                      support@mehedi.akash.dev.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MdPhone className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-base-content/80">+880-1234-567890</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MdAccessTime className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Support Hours</h3>
                    <p className="text-base-content/80">Monday – Friday</p>
                    <p className="text-base-content/80">9:00 AM – 6:00 PM (GMT+6)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className="bg-gradient-to-r from-primary to-secondary text-primary-content rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <MdCheckCircle className="text-3xl" />
                <h3 className="text-xl font-bold">Quick Response Guaranteed</h3>
              </div>
              <p className="opacity-90">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-base-100 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-primary">Send us a message</h2>
            
            {/* Success Message */}
            {submitSuccess && (
              <div className="alert alert-success mb-6 animate-pulse">
                <MdCheckCircle className="text-2xl" />
                <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
              </div>
            )}

            <div className="space-y-5">
              {/* Name Field */}
              <div className="w-full">
                <label className="block mb-2">
                  <span className="text-sm font-medium">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
                />
                {errors.name && (
                  <div className="mt-1">
                    <span className="text-sm text-error">{errors.name}</span>
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div className="w-full">
                <label className="block mb-2">
                  <span className="text-sm font-medium">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && (
                  <div className="mt-1">
                    <span className="text-sm text-error">{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div className="w-full">
                <label className="block mb-2">
                  <span className="text-sm font-medium">Your Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  className={`textarea textarea-bordered w-full h-32 resize-none ${errors.message ? 'textarea-error' : ''}`}
                ></textarea>
                {errors.message && (
                  <div className="mt-1">
                    <span className="text-sm text-error">{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button 
                onClick={handleSubmit}
                className={`btn btn-primary w-full text-lg ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="bg-base-100 rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Looking for quick answers?</h3>
          <p className="text-base-content/70 mb-4">
            Check out our FAQ section for instant answers to common questions about bookings, 
            cancellations, and trip planning.
          </p>
          <button className="btn btn-outline btn-primary">Visit FAQ</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;