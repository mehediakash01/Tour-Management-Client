import axios from "axios";
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdatePackage = () => {
    const navigate = useNavigate();
  const packageData = useLoaderData();
  const {
    tour_name,
    destination,
    departure_date,
    price,
    duration,
    image,
    _id,
  } = packageData;
  const handleUpdatePackage = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const packageObj = Object.fromEntries(formData.entries());

    axios
      .put(`https://tour-package-booking-management-ser.vercel.app/allPackage/${_id}`, packageObj)
      .then((res) => {
        if (res.data.modifiedCount>0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "package has been Updated",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/managePackage')
          form.reset();
        }
      });
  };
  return (
    <div className="w-11/12 max-w-2xl mx-auto my-10 p-6 bg-white shadow-xl rounded-lg">
      <form onSubmit={handleUpdatePackage} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Tour Name</span>
          </label>
          <input
            type="text"
            name="tour_name"
            defaultValue={tour_name}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            name="image"
            defaultValue={image}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Duration</span>
          </label>
          <input
            type="text"
            name="duration"
            defaultValue={duration}
            placeholder="e.g., 3 Days 2 Nights"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Destination</span>
          </label>
          <input
            type="text"
            name="destination"
            defaultValue={destination}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Price (Tk)</span>
          </label>
          <input
            type="number"
            name="price"
            defaultValue={price}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Departure Date</span>
          </label>
          <input
            type="date"
            name="departure_date"
            defaultValue={departure_date}
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit" className="btn btn-secondary w-full mt-4">
          Update Package
        </button>
      </form>
    </div>
  );
};

export default UpdatePackage;
