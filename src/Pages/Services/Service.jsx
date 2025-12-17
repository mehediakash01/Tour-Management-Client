import React, { useState } from "react";
import { FaMapMarkerAlt, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import {
  FaGlobe,
  FaHandshake,
  FaHeadset,
  FaStar,
  FaUsers,
  FaRoute,
  FaShieldHalved,
  FaClock,
} from "react-icons/fa6";

const Service = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: FaGlobe,
      title: "Custom Itinerary Design",
      description: "Tailor-made trips built around your interests, pace, and budget for a truly unique adventure.",
      features: ["Personalized planning", "Flexible schedules", "Budget-friendly options"]
    },
    {
      id: 2,
      icon: FaUsers,
      title: "Guided Group Tours",
      description: "Join small, curated groups for a social and enriching exploration of diverse destinations.",
      features: ["Small group sizes", "Expert guides", "Social connections"]
    },
    {
      id: 3,
      icon: FaMapMarkerAlt,
      title: "Adventure & Eco-Travel",
      description: "Explore thrilling landscapes and support sustainable practices with our eco-conscious tours.",
      features: ["Eco-friendly options", "Nature immersion", "Responsible tourism"]
    },
    {
      id: 4,
      icon: FaHandshake,
      title: "Corporate Travel Planning",
      description: "Seamless organization for business trips, conferences, and incentive travel programs.",
      features: ["Group bookings", "Event coordination", "Budget management"]
    },
    {
      id: 5,
      icon: FaStar,
      title: "Exclusive Local Experiences",
      description: "Access hidden gems and authentic cultural encounters only true locals know.",
      features: ["Local guides", "Authentic culture", "Unique activities"]
    },
    {
      id: 6,
      icon: FaHeadset,
      title: "24/7 Travel Support",
      description: "Enjoy peace of mind with adaptable itineraries and round-the-clock dedicated support.",
      features: ["Always available", "Emergency assistance", "Real-time updates"]
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Travelers", icon: FaUsers },
    { number: "150+", label: "Destinations", icon: FaMapMarkerAlt },
    { number: "4.9/5", label: "Average Rating", icon: FaStar },
    { number: "24/7", label: "Support Available", icon: FaHeadset }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Tell Us Your Dream",
      description: "Share your travel preferences, interests, and budget with our team.",
      icon: FaRoute
    },
    {
      step: "02",
      title: "Get Custom Plan",
      description: "Receive a personalized itinerary designed just for you within 24 hours.",
      icon: FaGlobe
    },
    {
      step: "03",
      title: "Book & Travel",
      description: "Confirm your booking and embark on your unforgettable journey with full support.",
      icon: FaShieldHalved
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-primary-content py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your Journey, Our Expertise
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            We specialize in crafting exceptional travel experiences, ensuring every journey is seamless, unique, and truly unforgettable.
          </p>
          <button className="btn btn-lg bg-white text-primary hover:bg-base-100 border-none gap-2">
            Start Planning
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-base-100 rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow">
              <stat.icon className="text-4xl text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-base-content/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Comprehensive travel solutions tailored to make your trips extraordinary
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-body">
                <div className={`bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className={`text-3xl ${hoveredCard === service.id ? 'text-primary-content' : 'text-primary'} transition-colors`} />
                </div>
                
                <h3 className="card-title text-xl mb-3">{service.title}</h3>
                <p className="text-base-content/70 mb-4">{service.description}</p>
                
                {/* Features List */}
                <div className={`space-y-2 overflow-hidden transition-all duration-300 ${hoveredCard === service.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-ghost btn-primary gap-2 group-hover:btn-primary">
                    Learn More
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-base-200 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Three simple steps to your perfect trip
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-base-100 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-primary to-secondary text-primary-content w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <step.icon className="text-4xl text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-base-content/70">{step.description}</p>
                </div>
                
                {/* Arrow between steps */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <FaArrowRight className="text-3xl text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaShieldHalved className="text-2xl text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Trusted & Secure</h3>
                    <p className="text-base-content/70">Your safety and security are our top priorities with verified partners.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="text-2xl text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Save Time</h3>
                    <p className="text-base-content/70">We handle all the planning so you can focus on enjoying your trip.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaStar className="text-2xl text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Expert Guidance</h3>
                    <p className="text-base-content/70">Years of experience crafting memorable journeys worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-base-100 rounded-2xl p-8 shadow-xl text-center">
              <div className="text-6xl font-bold text-primary mb-2">4.9/5</div>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-2xl" />
                ))}
              </div>
              <p className="text-lg mb-6">Based on 10,000+ reviews</p>
              <button className="btn btn-primary btn-wide gap-2">
                View All Reviews
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-content py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let us create a personalized travel experience that exceeds your expectations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-lg bg-white text-primary hover:bg-base-100 border-none gap-2">
              Get Started Now
              <FaArrowRight />
            </button>
            <button className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary hover:border-white">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;