import axios from "axios";

import React, { useState } from "react";
import Swal from "sweetalert2";

const BookingRow = ({ myBooking, index }) => {
  const [bookings, setBookings] = useState(myBooking);
  const {
    tour_name,
    guide_name,
    note,
    destination,
    departure_date,
    guide_contact_no,
    departure_location,
    _id,
 
  } = bookings;
  const handleConfirm = (id) => {

    axios
      .patch(`https://tour-package-booking-management-ser.vercel.app/bookings/status/${id}`, { status: "completed" })
      .then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire("Confirmed!", "Booking marked as completed", "success");
        setBookings((prev) => ({ ...prev, status: "completed" }));
      }
    })
      .catch((err) => {
        console.error("Error confirming booking:", err);
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>

      <td>{tour_name}</td>
      <td>{destination}</td>
      <td>{departure_date}</td>
      <td>{departure_location}</td>
      <td>{guide_name}</td>
      <td>{guide_contact_no}</td>

      <td>{note}</td>
      <td>
        {bookings.status === "completed" ? (
          <span className="badge badge-success">Completed</span>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-sm btn-secondary"
          >
            Confirm
          </button>
        )}
      </td>
    </tr>
  );
};

export default BookingRow;
