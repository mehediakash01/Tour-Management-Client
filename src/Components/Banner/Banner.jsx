import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaUsers, 
  FaStar, 
  FaPlay,
  FaChevronDown,
  FaGlobe,
  FaCalendarAlt
} from "react-icons/fa";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const destinations = [
    {
      title: "Discover the World with Us",
      subtitle: "Whether you're chasing mountain peaks or tranquil beaches",
      description: "we help you travel deeper, safer, and smarter.",
      image: "https://i.ibb.co.com/zTG78Dws/Tour-Hero-Img.webp",
      tag: "Adventure Awaits"
    },
    {
      title: "Your Journey Starts Here",
      subtitle: "Explore exotic destinations and create lasting memories",
      description: "with our expertly curated travel packages.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
      tag: "Explore More"
    },
    {
      title: "Travel Beyond Boundaries",
      subtitle: "Experience authentic cultures and breathtaking landscapes",
      description: "tailored perfectly to your dreams.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
      tag: "Dream Big"
    }
  ];

  const stats = [
    { icon: FaMapMarkerAlt, value: "150+", label: "Destinations" },
    { icon: FaUsers, value: "10K+", label: "Happy Travelers" },
    { icon: FaStar, value: "4.9/5", label: "Average Rating" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToPackages = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    // In your actual app, use: navigate('/allPackage')
    window.location.href = '/allPackage';
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white"
              >
                <FaGlobe className="animate-spin-slow" />
                <span className="font-semibold">{destinations[currentSlide].tag}</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
              >
                {destinations[currentSlide].title}
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <p className="text-xl md:text-2xl text-white/90 font-medium">
                  {destinations[currentSlide].subtitle}
                </p>
                <p className="text-lg text-white/80">
                  {destinations[currentSlide].description}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  onClick={handleExploreClick}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none shadow-xl font-bold px-8"
                >
                  Explore All Packages
                  <FaCalendarAlt />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="btn btn-lg btn-outline border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8"
                >
                  <FaPlay />
                  Watch Video
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-4 pt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center"
                  >
                    <stat.icon className="text-3xl text-white mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right Content - Image Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="relative"
              >
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-2xl" />
                
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={destinations[currentSlide].image}
                    alt="Travel Destination"
                    className="w-full h-[500px] object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl"
                  >
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-400" />
                      <span className="font-bold text-primary">Featured</span>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative floating cards */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-2xl p-4 w-48"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <FaMapMarkerAlt className="text-2xl text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">150+</div>
                      <div className="text-sm text-base-content/70">Destinations</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 w-48"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-3 rounded-xl">
                      <FaUsers className="text-2xl text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">10K+</div>
                      <div className="text-sm text-base-content/70">Travelers</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToPackages}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <span className="text-sm font-medium">Explore More</span>
            <FaChevronDown className="text-2xl" />
          </motion.button>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVideoModalOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full"
          >
            <div className="aspect-video bg-base-300 flex items-center justify-center">
              <div className="text-center space-y-4">
                <FaPlay className="text-6xl text-primary mx-auto" />
                <p className="text-xl font-semibold">Video Player Placeholder</p>
                <p className="text-base-content/70">Add your promotional video here</p>
              </div>
            </div>
            <div className="p-6 text-right">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="btn btn-primary"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Banner;