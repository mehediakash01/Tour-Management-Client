import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaHeart
} from "react-icons/fa";
import navLogo from "../../assets/navLogo.png";
import Gallery from "./Gallery";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "All Packages", path: "/allPackage" },
    { label: "About Us", path: "/About-Us" },
    { label: "Contact", path: "/contact" },
    { label: "Services", path: "/service" }
  ];

  const socialLinks = [
    { 
      icon: FaFacebook, 
      url: "https://www.facebook.com/concentration369/",
      color: "hover:text-blue-500",
      label: "Facebook"
    },
    { 
      icon: FaInstagram, 
      url: "https://www.instagram.com/mh_sky_69/",
      color: "hover:text-pink-500",
      label: "Instagram"
    },
    { 
      icon: FaTwitter, 
      url: "https://x.com/mh_sky_69",
      color: "hover:text-sky-400",
      label: "Twitter"
    },
    { 
      icon: FaLinkedinIn, 
      url: "https://www.linkedin.com/in/mehediakash01",
      color: "hover:text-blue-600",
      label: "LinkedIn"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img src={navLogo} className="w-16 h-16" alt="TripEase Logo" />
              <div>
                <h3 className="text-2xl font-bold">
                  Trip<span className="text-secondary">Ease</span>
                </h3>
                <p className="text-xs text-white/70">Your Journey Simplified</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Making the world accessible to everyone through exceptional travel experiences since 2018.
            </p>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-sm flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-sm btn-secondary"
                >
                  <FaArrowRight />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full group-hover:w-2 transition-all" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-white/80"
              >
                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-sm">
                  72, Wall Street, King Road, Dhaka
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/80"
              >
                <FaPhone className="text-secondary flex-shrink-0" />
                <a href="tel:+8801533333333" className="text-sm hover:text-white transition-colors">
                  +88 01533 333 333
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/80"
              >
                <FaEnvelope className="text-secondary flex-shrink-0" />
                <a href="mailto:info@gmail.com" className="text-sm hover:text-white transition-colors">
                  info@gmail.com
                </a>
              </motion.li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center ${social.color} transition-all hover:bg-white hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Gallery Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Photo Gallery</h3>
            <Gallery />
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70"
        >
          <p className="flex items-center gap-2">
            Copyright © {currentYear} — All rights reserved by{" "}
            <span className="font-semibold text-white">TripEase Ltd</span>
          </p>
          
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-400" />
            </motion.div>
            <span>by TripEase Team</span>
          </div>

          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary via-primary to-secondary" />
    </footer>
  );
};

export default Footer;