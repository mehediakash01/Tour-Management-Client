import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import AuthInfo from "../../Hooks/AuthInfo";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";

const PackageDetails = () => {
  const { user } = AuthInfo();
  const navigate = useNavigate();
  const { id } = useParams();

  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [bookCount, setBookCount] = useState(0);

  // Fetch package data
  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:3000/allPackage/${id}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        setPackageData(res.data);
        // Set initial booking count
        setBookCount(res.data.bookingCount || 0);
      })
      .catch((err) => {
        console.error("Error fetching package data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, user]);

  // Modal dialog open effect
  useEffect(() => {
    if (openModal) {
      const modal = document.getElementById("booking_modal");
      if (modal && typeof modal.showModal === "function") {
        modal.showModal();
      }
    }
  }, [openModal]);

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
    package_details,
    destination,
    departure_location,
  } = packageData || {};

  // Handle book button click
  const handleBook = () => {
    setOpenModal(true);
  };

  // Handle booking form submit
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
          axios
            .patch(`http://localhost:3000/bookings/${_id}`)
            .then(() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Booking has been confirmed",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/allPackage");
              setBookCount((prev) => prev + 1);
              setOpenModal(false);
            })
            .catch((err) => {
              console.error("Failed to update booking count", err);
            });
        }
      })
      .catch((err) => {
        console.error("Booking failed", err);
      });
  };

  if (loading) return <Loading />;

  return (
    <div className="w-11/12 mx-auto my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-accent p-4 rounded-xl shadow-md">
          <img
            src={image}
            className="rounded-xl w-full h-auto object-cover"
            alt={tour_name}
          />
        </div>

        <div className="bg-base-100 p-6 rounded-xl shadow-lg space-y-6">
          <div className="flex items-center gap-4">
            <img
              src={guide_photo}
              className="w-14 h-14 rounded-full border-2 border-accent"
              alt={guide_name}
            />
            <div>
              <h2 className="font-semibold">{guide_name}</h2>
              <p className="text-sm text-gray-500">{guide_contact_no}</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{tour_name}</h1>
            <p className="text-gray-600">{package_details}</p>

            <p>
              <strong>🚎 Departure:</strong>{" "}
              <span className="opacity-70">{departure_location}</span>
            </p>
            <p>
              <strong>📆 Date:</strong>{" "}
              <span className="opacity-70">{departure_date}</span>
            </p>
            <p>
              <strong>📍 Destination:</strong>{" "}
              <span className="opacity-70">{destination}</span>
            </p>
            <p>
              <strong>⛺ Duration:</strong>{" "}
              <span className="opacity-70">{duration}</span>
            </p>
            <p>
              <strong>💰 Price:</strong>{" "}
              <span className="opacity-70">{price} Tk</span>
            </p>
            <p>
              <strong>🔖 Booked:</strong>{" "}
              <span className="opacity-70">{bookCount}</span> times
            </p>
          </div>

          <button
            onClick={handleBook}
            className="btn btn-secondary w-full mt-4"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <dialog id="booking_modal" className="modal">
          <div className="modal-box w-full max-w-md">
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
                value={`${price} Tk`}
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
                value={new Date().toLocaleString()}
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
  );
};

export default PackageDetails;
