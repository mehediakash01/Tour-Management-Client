import React from "react";
import AuthInfo from "../../Hooks/AuthInfo";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import useTitle from "../../Hooks/useTitle";

const AddPackage = () => {
  const { user } = AuthInfo();
  const navigate = useNavigate();
useTitle("add-package")
  const handleAddPackage = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const packageData = Object.fromEntries(formData.entries());

    try {
      // Get the Firebase ID token (JWT) for authorization
      const idToken = await user.getIdToken();

      const res = await axios.post(
        "https://tour-package-booking-management-ser.vercel.app/allPackage",
        packageData,
        {
          headers: {
            Authorization: `bearer ${idToken}`, // lowercase 'bearer ' per your backend code
          },
        }
      );

      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Package has been added",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/managePackage");
        form.reset();
      }
    } catch (error) {
      console.error("Failed to add package", error);
      Swal.fire({
        icon: "error",
        title: "Failed to add package",
        text: error.response?.data?.message || error.message,
      });
    }
  };

  return (
    <div className="w-11/12 max-w-2xl mx-auto my-10 p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold text-center text-accent mb-6">
        Add New Tour Package
      </h2>
      <form onSubmit={handleAddPackage} className="space-y-4">
        <div>
          <label className="label">
            <span className="text-black">Tour Name</span>
          </label>
          <input
            type="text"
            name="tour_name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-black">Image URL</span>
          </label>
          <input
            type="text"
            name="image"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-black">Duration</span>
          </label>
          <input
            type="text"
            name="duration"
            placeholder="e.g., 3 Days 2 Nights"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-black">Departure Location</span>
          </label>
          <input
            type="text"
            name="departure_location"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-black">Destination</span>
          </label>
          <input
            type="text"
            name="destination"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-black">Price (Tk)</span>
          </label>
          <input
            type="number"
            name="price"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-black">Departure Date</span>
          </label>
          <input
            type="date"
            name="departure_date"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-black">Package Details</span>
          </label>
          <textarea
            name="package_details"
            rows={4}
            className="textarea textarea-bordered w-full"
            placeholder="Describe the tour package..."
            required
          ></textarea>
        </div>

        <div>
          <label className="label">
            <span className="text-black">Guide Contact No.</span>
          </label>
          <input
            type="text"
            name="guide_contact_no"
            placeholder="e.g., +880123456789"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-black">Guide Name</span>
          </label>
          <input
            type="text"
            name="guide_name"
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="text-black">Guide Photo URL</span>
          </label>
          <input
            type="text"
            name="guide_photo"
            value={user?.photoURL || ""}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="text-black">Guide Email</span>
          </label>
          <input
            type="email"
            name="guide_email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit" className="btn btn-secondary w-full mt-4">
          Submit Tour Package
        </button>
      </form>
    </div>
  );
};

export default AddPackage;
