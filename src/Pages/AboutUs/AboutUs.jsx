import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHandshake,
  FaGlobe,
  FaStar,
  FaHeadset,
  FaLeaf,
  FaMapMarkerAlt,
  FaUsers,
  FaAward,
  FaHeart,
  FaLightbulb,
  FaShieldAlt,
  FaRocket,
  FaQuoteLeft
} from "react-icons/fa";

const AboutUs = () => {
  const stats = [
    { icon: FaMapMarkerAlt, value: "150+", label: "Destinations Worldwide", color: "text-blue-500" },
    { icon: FaUsers, value: "10K+", label: "Happy Travelers", color: "text-green-500" },
    { icon: FaStar, value: "4.9/5", label: "Average Rating", color: "text-yellow-500" },
    { icon: FaAward, value: "15+", label: "Industry Awards", color: "text-purple-500" }
  ];

  const values = [
    {
      icon: FaHandshake,
      title: "Customer-First Approach",
      description: "Your satisfaction and safety are our top priorities in every journey",
      color: "bg-blue-500"
    },
    {
      icon: FaStar,
      title: "Personalized Service",
      description: "Attention to detail that makes your travel experience truly unique",
      color: "bg-yellow-500"
    },
    {
      icon: FaLeaf,
      title: "Sustainable Tourism",
      description: "Committed to protecting the environment and local communities",
      color: "bg-green-500"
    },
    {
      icon: FaShieldAlt,
      title: "Trust & Safety",
      description: "Verified partners and 24/7 support for your peace of mind",
      color: "bg-red-500"
    }
  ];

  const timeline = [
    { year: "2018", title: "The Beginning", description: "Founded by passionate travelers with a dream" },
    { year: "2020", title: "Global Expansion", description: "Expanded to 50+ destinations across 6 continents" },
    { year: "2022", title: "10K Milestone", description: "Celebrated our 10,000th happy traveler" },
    { year: "2024", title: "Award Winners", description: "Recognized as Top Travel Company" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Adventure Enthusiast",
      image: "https://i.pravatar.cc/150?img=1",
      text: "TripEase turned my dream vacation into reality. Every detail was perfect!"
    },
    {
      name: "Michael Chen",
      role: "Digital Nomad",
      image: "https://i.pravatar.cc/150?img=13",
      text: "The personalized itinerary exceeded all my expectations. Highly recommended!"
    },
    {
      name: "Emma Williams",
      role: "Family Traveler",
      image: "https://i.pravatar.cc/150?img=5",
      text: "Safe, fun, and unforgettable. Our family had the best vacation ever!"
    }
  ];

  const AnimatedSection = ({ children, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  const handleExploreClick = () => {
    window.location.href = '/allPackage';
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary min-h-[80vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white"
              >
                <FaGlobe className="animate-spin-slow" />
                <span className="font-semibold">Est. 2018</span>
              </motion.div>

              <h1 className="text-white text-4xl lg:text-6xl font-extrabold leading-tight">
                Discover the World <br /> with Us
              </h1>
              
              <p className="text-white/90 text-xl leading-relaxed">
                Passionately curating unique travel experiences that connect you with cultures and breathtaking destinations.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  onClick={handleExploreClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none shadow-xl font-bold px-8"
                >
                  Explore Our Tours
                  <FaRocket />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-lg btn-outline border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8"
                >
                  Our Story
                </motion.button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                src="https://i.ibb.co.com/zTG78Dws/Tour-Hero-Img.webp"
                alt="Mountain Tour"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-base-100 rounded-2xl shadow-xl p-6 text-center"
            >
              <stat.icon className={`text-5xl ${stat.color} mx-auto mb-3`} />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-primary mb-1"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-base-content/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Who We Are Section */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-primary mb-4"
          >
            Who We Are
          </motion.h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            A passionate team dedicated to creating extraordinary travel experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20" />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
              alt="Our Team"
              className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              Founded in 2018 by a team of passionate travel enthusiasts, TripEase started with a simple mission: to make the wonders of the world accessible to everyone.
            </p>
            <p className="text-lg leading-relaxed">
              We meticulously craft itineraries that go beyond the ordinary, ensuring every journey is seamless, unique, and truly unforgettable.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="text-3xl text-primary" />
                <h3 className="text-2xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-base-content/80">
                To inspire and enable people to explore the world through exceptional, sustainable travel experiences that create lasting memories and meaningful connections.
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Core Values Section */}
      <section className="bg-base-200 py-20">
        <AnimatedSection className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              The principles that guide every journey we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-base-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                  <value.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-base-content/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Timeline Section */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Milestones that shaped our story
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary hidden lg:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-base-100 rounded-2xl p-6 shadow-lg inline-block">
                    <div className="text-3xl font-bold text-primary mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-base-content/70">{item.description}</p>
                  </div>
                </div>

                <div className="hidden lg:block relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-xl"
                  >
                    <FaStar className="text-2xl text-white" />
                  </motion.div>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <AnimatedSection className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Travelers Say</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Real experiences from real adventurers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-base-100 rounded-2xl p-6 shadow-lg"
              >
                <FaQuoteLeft className="text-3xl text-primary/30 mb-4" />
                <p className="text-base-content/80 mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full ring-2 ring-primary"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-base-content/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-content py-20">
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
          >
            <FaHeart className="text-6xl mx-auto mb-6" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of happy travelers and create memories that last a lifetime
          </p>
          <motion.button
            onClick={handleExploreClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none shadow-xl font-bold px-12"
          >
            Start Planning Now
            <FaRocket />
          </motion.button>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default AboutUs;