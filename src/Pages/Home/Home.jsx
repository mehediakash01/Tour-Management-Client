import React from "react";
import Banner from "../../Components/Banner/Banner";
import Featured from "../../Components/FeaturedSection/Featured";
import { Link, useLoaderData } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import FrequentlyAsked from "../../Components/FrequentlyAsked/FrequentlyAsked";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  const allFeatured = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div>
        <h1 className="text-center font-bold text-4xl  text-accent my-12">Our Featured Tours</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-5">
        {allFeatured.map((featuredData) => (
          <Featured
            key={featuredData._id}
            featuredData={featuredData}
          ></Featured>
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Link to={'/allPackage'}><button className="btn  btn-accent text-white flex items-center">Show All <FaArrowRight /></button></Link>
      </div>
      <FrequentlyAsked></FrequentlyAsked>

      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
