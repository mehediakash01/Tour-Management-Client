import React from "react";

import { Link } from "react-router";

const AllPackageCard = ({ allPackage }) => {
  const {
    duration,
    _id,
    image,
    tour_name,
    departure_date,
  
  
  } = allPackage;

  return (
    <div className="card bg-base-100  shadow-sm p-3">
      <figure>
        <img src={image} className="h-52 w-full rounded-md" alt="tourImage" />
      </figure>
      <div className="card-body space-y-1">
        <h2 className="card-title">{tour_name}</h2>

      
        <p className="font-semibold">
          ⌛Duration: <span className="opacity-55">{duration}</span>
        </p>
        <p className="font-semibold">
          📆Departure on: <span className="opacity-55">{departure_date}</span>
        </p>
        {/* <p className="font-semibold">
          💰Only<span className="opacity-55"> {price}Tk</span>
        </p> */}
        <div>
          <Link to={`/package/${_id}`}>
            <button className="btn btn-secondary w-full">view details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllPackageCard;
