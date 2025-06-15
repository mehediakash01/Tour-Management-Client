import React from "react";
import Banner from "../../Components/Banner/Banner";
import Featured from "../../Components/FeaturedSection/Featured";
import { Link, useLoaderData } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import FrequentlyAsked from "../../Components/FrequentlyAsked/FrequentlyAsked";

const Home = () => {
  const allFeatured = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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
    </div>
  );
};

export default Home;
