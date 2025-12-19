import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { 
  IoLocationOutline, 
  IoTimeOutline,
  IoCalendarOutline,
  IoShareSocialOutline
} from "react-icons/io5";
import { 
  FaArrowRight, 
  FaStar,
  FaHeart,
  FaRegHeart
} from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";

const Featured = ({ featuredData }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const {
    duration,
    _id,
    image,
    tour_name,
    bookingCount,
    package_details,
  } = featuredData;

  // Calculate rating based on booking count (demo purpose)
  const rating = Math.min(5, Math.floor(bookingCount / 10) + 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group h-full"
    >
      <div className="relative bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
        
        {/* Image Section */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          {/* Main Image */}
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={tour_name}
            />
          </motion.div>
          
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
          
          {/* Top Badges Row */}
          <div className="absolute top-3 left-0 right-3 flex items-start justify-between">
            {/* Duration Badge */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="bg-white/95 backdrop-blur-sm text-primary px-3 py-1.5 rounded-r-full shadow-lg flex items-center gap-1.5 text-sm font-bold"
            >
              <IoCalendarOutline className="text-base" />
              <span>{duration}</span>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {/* Share Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <IoShareSocialOutline className="text-base-content/70 text-lg" />
              </motion.button>

              {/* Wishlist Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                {isWishlisted ? (
                  <FaHeart className="text-red-500 text-lg" />
                ) : (
                  <FaRegHeart className="text-base-content/70 text-lg" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Popular Badge (conditional) */}
          {bookingCount > 15 && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg"
            >
              <FaStar className="text-sm" />
              <span>Trending</span>
            </motion.div>
          )}

          {/* Bottom Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < rating ? "text-yellow-400" : "text-white/30"
                    }`}
                  />
                ))}
                <span className="text-white/90 text-xs ml-1 font-semibold">
                  ({bookingCount} reviews)
                </span>
              </div>

              {/* Location Title */}
              <h3 className="text-white font-bold text-xl sm:text-2xl flex items-start gap-2 leading-tight">
                <IoLocationOutline className="text-secondary text-2xl flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{tour_name}</span>
              </h3>
            </motion.div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Description */}
          <p className="text-base-content/70 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
            {package_details}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {/* Travelers Count */}
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-3 border border-primary/10"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MdGroups2 className="text-primary text-lg" />
                </div>
                <span className="text-xs text-base-content/60 font-medium">
                  Travelers
                </span>
              </div>
              <p className="font-bold text-primary text-lg ml-10">
                {bookingCount}
              </p>
            </motion.div>

            {/* Duration */}
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-3 border border-secondary/10"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <IoTimeOutline className="text-secondary text-lg" />
                </div>
                <span className="text-xs text-base-content/60 font-medium">
                  Duration
                </span>
              </div>
              <p className="font-bold text-secondary text-lg ml-10">
                {duration}
              </p>
            </motion.div>
          </div>

          {/* View Details Button */}
          <Link to={`/package/${_id}`} className="w-full mt-auto">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary w-full font-bold text-base h-12 group/btn relative overflow-hidden"
            >
              {/* Button Background Animation */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              
              {/* Button Content */}
              <span className="relative flex items-center justify-center gap-2">
                <span>View Details</span>
                <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </Link>
        </div>

        {/* Hover Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(var(--p), 0.1) 0%, rgba(var(--s), 0.1) 100%)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Featured;