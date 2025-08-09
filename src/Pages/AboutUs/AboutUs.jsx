import React from "react";

// Import React Icons for various sections
import {
  FaHandshake,
  FaGlobe,
  FaStar,
  FaHeadset,
  FaLeaf,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router";
import useTitle from "../../Hooks/useTitle";
import trip from "../../assets/trip.png"
const AboutUs = () => {
  useTitle("About-us")
  return (
    <div className="">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10  items-center bg-accent p-8  shadow-md">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-white text-4xl lg:text-6xl md:text-5xl font-bold leading-tight">
            Discover the World <br /> with Us
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Passionately curating unique travel experiences that connect you <br />
            with cultures and breathtaking destinations.
          </p>
          <Link to={"/allPackage"}>
            <button className="btn btn-secondary text-white mt-4">
              Explore Our Tours
            </button>
          </Link>
        </div>

        <div className="flex justify-center">
          <img
            src= {trip}
            alt="Mountain Tour Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-accent mb-12">Who We Are</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://i.ibb.co/qFPRdK6X/team.jpg"
              alt="Our Company Story"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed mb-6">
              Founded in 2018 by a team of passionate travel enthusiasts,
              TripEase started with a simple mission: to make the wonders of the
              world accessible to everyone.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              we meticulously craft itineraries that go beyond the ordinary,
              ensuring every journey is seamless, unique, and truly
              unforgettable.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Core Values:</h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>
                <FaHandshake className="inline-block mr-2 text-primary" />{" "}
                Customer-First Approach
              </li>
              <li>
                <FaStar className="inline-block mr-2 text-primary" />{" "}
                Personalized Service & Attention to Detail
              </li>
              <li>
                <FaLeaf className="inline-block mr-2 text-primary" /> Commitment
                to Sustainable Tourism
              </li>
            </ul>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default AboutUs;
