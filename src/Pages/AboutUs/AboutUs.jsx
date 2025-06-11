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

const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 my-12 items-center bg-primary p-8 rounded-xl shadow-md">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Discover the World with Us
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Passionately curating unique travel experiences that connect you
            with cultures and breathtaking destinations.
          </p>
          <Link to={"/allPackage"}>
            <button className="btn btn-accent text-white mt-4">
              Explore Our Tours
            </button>
          </Link>
        </div>

        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/YTwVJpqP/reshot-illustration-discover-mountain-tour-N9-YRKZS56-H.png"
            alt="Mountain Tour Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Who We Are</h2>
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

      <section className="bg-base-200 py-16 px-4 md:px-8 max-w-7xl mx-auto rounded-lg shadow-inner my-12">
        <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-10">
          We specialize in crafting exceptional travel experiences, ensuring
          every journey is seamless, unique, and truly unforgettable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <FaGlobe className="text-5xl text-primary mb-4" />
              <h3 className="card-title">Custom Itinerary Design</h3>
              <p>
                Tailor-made trips built around your interests, pace, and budget
                for a truly unique adventure.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <FaUsers className="text-5xl text-primary mb-4" />
              <h3 className="card-title">Guided Group Tours</h3>
              <p>
                Join small, curated groups for a social and enriching
                exploration of diverse destinations.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <FaMapMarkerAlt className="text-5xl text-primary mb-4" />
              <h3 className="card-title">Adventure & Eco-Travel</h3>
              <p>
                Explore thrilling landscapes and support sustainable practices
                with our eco-conscious tours.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <FaHandshake className="text-5xl text-primary mb-4" />
              <h3 className="card-title">Corporate Travel Planning</h3>
              <p>
                Seamless organization for business trips, conferences, and
                incentive travel programs.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <FaStar className="text-5xl text-primary mb-4" />
              <h3 className="card-title">Exclusive Local Experiences</h3>
              <p>
                Access hidden gems and authentic cultural encounters only true
                locals know.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <FaHeadset className="text-5xl text-primary mb-4" />
              <h3 className="card-title">Flexible & Supported Plans</h3>
              <p>
                Enjoy peace of mind with adaptable itineraries and 24/7
                dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
