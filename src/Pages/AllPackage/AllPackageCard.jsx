import React from "react";

import { Link } from "react-router";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { motion } from "framer-motion";

const AllPackageCard = ({ allPackage }) => {
  const {
    duration,
    _id,
    image,
    tour_name,
    bookingCount,

    package_details,
  
  
  } = allPackage;

  return (
   <div className="card bg-base-100  shadow-sm ">
      <figure className="relative">
        <motion.img
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          src={image}
          className="h-48 w-full object-cover"
          alt="tourImage"
        />
        <p className="font-semibold text-sm absolute bg-primary rounded-r-full p-1 text-white -mt-20 lg:-ml-[320px] -ml-[225px] ">
          🗓{duration}
        </p>
        <h2 className=" absolute backdrop-blur-2xl -mb-40 py-2 w-full  text-white flex items-center justify-center gap-2 ">
          <IoLocationOutline />
          {tour_name}
        </h2>
      </figure>
      <div className="card-body space-y-1 ">
        <p>{package_details.slice(0, 70)}...</p>

        <div className="flex gap-3 ">
          <Link to={`/package/${_id}`}>
            <button className="btn btn-outline btn-secondary flex items-center">
              view details <FaArrowRight />
            </button>
          </Link>
          <p className="flex items-center bg-secondary hover:scale-110 transition-transform duration-300 text-white rounded-md justify-center gap-1">
            {" "}
            <MdGroups2 />
            {bookingCount} Booked
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllPackageCard;
