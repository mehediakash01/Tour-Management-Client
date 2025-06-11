import React from "react";
import { Link } from "react-router";

const PackageRow = ({ myPackage, index }) => {
  const { tour_name, destination, departure_date, price, duration,image ,_id} = myPackage;
  return (
    <tr>
      <th>{index + 1}</th>

      <td><img src={image} className="w-12 h-12  rounded-md" alt="" /></td>
      <td>{tour_name}</td>
      <td>{destination}</td>
      <td>{departure_date}</td>
      <td>{price}</td>
      <td>{duration}</td>
      <td>
        <Link to={`/update/${_id}`}><button  className="btn btn-sm btn-secondary mr-2">Edit</button></Link>
        <button className="btn btn-sm btn-accent text-white">Delete</button>
      </td>
    </tr>
  );
};

export default PackageRow;
