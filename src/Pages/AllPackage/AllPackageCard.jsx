import React from "react";

import { Link } from "react-router";

const AllPackageCard = ({ allPackage }) => {
  const {
    duration,
    _id,
    image,
    tour_name,
    departure_date,
    price,
    guide_name,
    guide_photo,
  } = allPackage;

  return (
    <div className="card bg-base-100  shadow-sm p-3">
      <figure>
        <img src={image} className="h-[350px] rounded-md" alt="tourImage" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title">{tour_name}</h2>

        <div className="flex gap-3 items-center">
          <img src={guide_photo} className="w-12 h-12 rounded-full" alt="" />
          <h1 className="font-semibold">
            Guided By: <span className="opacity-55">{guide_name}</span>
          </h1>
        </div>
        <p className="font-semibold">
          ⌛Duration: <span className="opacity-55">{duration}</span>
        </p>
        <p className="font-semibold">
          📆Departure on: <span className="opacity-55">{departure_date}</span>
        </p>
        <p className="font-semibold">
          💰Only<span className="opacity-55"> {price}Tk</span>
        </p>
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
