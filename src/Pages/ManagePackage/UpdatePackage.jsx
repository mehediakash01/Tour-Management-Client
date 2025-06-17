import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import AuthInfo from "../../Hooks/AuthInfo";
import Loading from "../Loading/Loading";

const UpdatePackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading } = AuthInfo(); // Make sure loading state is available

  const [packageData, setPackageData] = useState(null);
  const [fetching, setFetching] = useState(true); // track data fetch status

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const token = await user.getIdToken();
        const res = await axios.get(
          `https://tour-package-booking-management-ser.vercel.app/allPackage/${id}`,
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          }
        );
        setPackageData(res.data);
      } catch (error) {
        console.error("Error fetching package:", error.response?.data || error.message);
      } finally {
        setFetching(false);
      }
    };

    if (!loading && user) {
      fetchPackage();
    }
  }, [id, user, loading]);

  const handleUpdatePackage = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const packageObj = Object.fromEntries(formData.entries());

    try {
      const token = await user.getIdToken();
      const res = await axios.put(
        `https://tour-package-booking-management-ser.vercel.app/allPackage/${id}`,
        packageObj,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Package Updated",
          timer: 1500,
          showConfirmButton: false,
          position: "top-end",
        });
        navigate("/managePackage");
      } else {
        Swal.fire("No changes made", "", "info");
      }
    } catch (error) {
      Swal.fire("Failed to update", error.message, "error");
    }
  };

  if (loading || fetching) {
    return <Loading />;
  }

  if (!packageData) {
    return <div>Package data not found.</div>; // Optional fallback
  }

  const { tour_name, destination, departure_date, price, duration, image } = packageData;

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
