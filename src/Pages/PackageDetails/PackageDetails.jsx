import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import AuthInfo from "../../Hooks/AuthInfo";
import axios from "axios";
import Swal from "sweetalert2";

const PackageDetails = () => {
  const navigate = useNavigate();
  const packageData = useLoaderData();
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (openModal) {
      const modal = document.getElementById("booking_modal");
      if (modal && typeof modal.showModal === "function") {
        modal.showModal();
      }
    }
  }, [openModal]);

  const { user } = AuthInfo();
  const {
    duration,
    _id,
    image,
    tour_name,
    departure_date,
    price,
    guide_name,
    guide_photo,

    guide_email,
    guide_contact_no,
    bookingCount,
    package_details,
    destination,
    departure_location,
  } = packageData;

  const handleBook = () => {
    setOpenModal(true);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const note = e.target.note.value;
    const bookedData = {
      tour_id: _id,
      tour_name,
      guide_name,

      guide_email,
      buyer_name: user?.displayName,
      buyer_email: user?.email,
      booking_date: new Date(),
      departure_date,
      note,
      destination,
      status: "pending",
    };
    axios
      .post("http://localhost:3000/bookings", bookedData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Booking has been confirmed",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/allPackage");
          setOpenModal(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="w-11/12 mx-auto my-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="bg-primary p-8 rounded-md ">
          <img src={image} className="rounded-md " alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold my-3">Guided by:</h1>
          <div className="flex gap-5 ">
            <img src={guide_photo} className="w-12 h-12 rounded-full" alt="" />
            <span>
              <p>{guide_name}</p>
              <p>{guide_contact_no}</p>
            </span>
          </div>
          <div className="divider"></div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{tour_name}</h1>
            <p className="font-light">{package_details}</p>

            <p className="font-semibold">
              🚎 bus will start from:{" "}
              <span className="opacity-55">{departure_location}</span>
            </p>
            <p className="font-semibold">
              📆 journey began by:
              <span className="opacity-55"> {departure_date}</span>
            </p>
            <p className="font-semibold">
              📍 our destination will be:{" "}
              <span className="opacity-55">{destination}</span>
            </p>
            <p className="font-semibold">
              ⛺ journey will be <span className="opacity-55">{duration}</span>{" "}
              long
            </p>
            <p className="font-semibold">
              💰 Only <span className="opacity-55">{price}</span> Tk
            </p>
          </div>
          <div className="divider"></div>

          <div className="space-y-2">
            <p className="font-semibold">
              🔖 Total Booked so far:{" "}
              <span className="opacity-55">{bookingCount}</span>{" "}
            </p>
            <button onClick={handleBook} className="btn btn-secondary w-full">
              Book Now
            </button>
          </div>
        </div>
        {openModal && (
          <dialog id="booking_modal" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-xl mb-4">Book: {tour_name}</h3>

              <form onSubmit={handleBooking} className="space-y-4">
                <input
                  type="text"
                  value={tour_name}
                  readOnly
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  value={price + " Tk"}
                  readOnly
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  value={user?.displayName}
                  readOnly
                  className="input input-bordered w-full"
                />
                <input
                  type="email"
                  value={user?.email}
                  readOnly
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  value={Date.now()}
                  readOnly
                  className="input input-bordered w-full"
                />

                <textarea
                  name="note"
                  placeholder="Special Note (optional)"
                  className="textarea textarea-bordered w-full"
                />

                <div className="modal-action">
                  <button type="submit" className="btn btn-secondary">
                    Book Now
                  </button>
                  <button
                    type="button"
                    className="btn btn-accent text-white"
                    onClick={() => {
                      document.getElementById("booking_modal").close();
                      setOpenModal(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default PackageDetails;
