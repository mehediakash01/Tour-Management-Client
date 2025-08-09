import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaGlobe,
  FaHandshake,
  FaHeadset,
  FaStar,
  FaUsers,
} from "react-icons/fa6";
import useTitle from "../../Hooks/useTitle";

const Service = () => {
  useTitle("services");
  return (
    <section className="bg-primary/10 py-16 px-4 md:px-8 max-w-7xl mx-auto rounded-lg shadow-inner my-12">
      <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
      <p className="text-lg text-center max-w-3xl mx-auto mb-10">
        We specialize in crafting exceptional travel experiences, ensuring every
        journey is seamless, unique, and truly unforgettable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card bg-accent/50 hover:scale-105 transition-transform duration-200 ease-in-out shadow-xl">
          <div className="card-body items-center  text-center">
            <FaGlobe className="text-5xl text-primary mb-4" />
            <h3 className="card-title">Custom Itinerary Design</h3>
            <p>
              Tailor-made trips built around your interests, pace, and budget
              for a truly unique adventure.
            </p>
          </div>
        </div>
        <div className="card bg-accent/50 hover:scale-105 transition-transform duration-200 ease-in-out shadow-xl">
          <div className="card-body items-center  text-center">
            <FaUsers className="text-5xl text-primary mb-4" />
            <h3 className="card-title">Guided Group Tours</h3>
            <p>
              Join small, curated groups for a social and enriching exploration
              of diverse destinations.
            </p>
          </div>
        </div>
        <div className="card bg-accent/50 hover:scale-105 transition-transform duration-200 ease-in-out shadow-xl">
          <div className="card-body items-center  text-center">
            <FaMapMarkerAlt className="text-5xl text-primary mb-4" />
            <h3 className="card-title">Adventure & Eco-Travel</h3>
            <p>
              Explore thrilling landscapes and support sustainable practices
              with our eco-conscious tours.
            </p>
          </div>
        </div>
        <div className="card bg-accent/50 hover:scale-105 transition-transform duration-200 ease-in-out shadow-xl">
          <div className="card-body items-center  text-center">
            <FaHandshake className="text-5xl text-primary  mb-4" />
            <h3 className="card-title">Corporate Travel Planning</h3>
            <p>
              Seamless organization for business trips, conferences, and
              incentive travel programs.
            </p>
          </div>
        </div>
        <div className="card bg-accent/50 hover:scale-105 transition-transform duration-200 ease-in-out shadow-xl">
          <div className="card-body items-center  text-center">
            <FaStar className="text-5xl text-primary mb-4" />
            <h3 className="card-title">Exclusive Local Experiences</h3>
            <p>
              Access hidden gems and authentic cultural encounters only true
              locals know.
            </p>
          </div>
        </div>
        <div className="card bg-accent/50 hover:scale-105 transition-transform duration-200 ease-in-out shadow-xl">
          <div className="card-body items-center text-center">
            <FaHeadset className="text-5xl text-primary mb-4" />
            <h3 className="card-title">Flexible & Supported Plans</h3>
            <p>
              Enjoy peace of mind with adaptable itineraries and 24/7 dedicated
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
