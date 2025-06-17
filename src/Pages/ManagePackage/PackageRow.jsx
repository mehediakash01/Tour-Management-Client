import axios from "axios";
import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const PackageRow = ({ myPackage, index, onDelete }) => {
  const {
    tour_name,
    destination,
    departure_date,
    price,
    duration,
    image,
    _id,
  } = myPackage;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://tour-package-booking-management-server-qysjrbna2.vercel.app/allPackage/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            onDelete(id);
          }
        });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>

      <td>
        <img src={image} className="w-12 h-12  rounded-md" alt="" />
      </td>
      <td>{tour_name}</td>
      <td>{destination}</td>
      <td>{departure_date}</td>
      <td>{price}</td>
      <td>{duration}</td>
      <td>
        <Link to={`/update/${_id}`}>
          <button className="btn btn-sm btn-secondary mr-2">Edit</button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-accent text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default PackageRow;
