import React, { use } from "react";
import BookingRow from "./BookingRow";

const MyBookingsTable = ({ myPackagePromise }) => {
  const myBookings = use(myPackagePromise);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>

            <th>Tour Name</th>
            <th>Destination</th>
            <th>Departure Date</th>
            <th>Departure location</th>
            <th>Guide Name</th>
            <th>Guide contact</th>
            <th>special notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myBookings.map((myBooking, index) => (
            <BookingRow
              key={myBooking._id}
              index={index}
              myBooking={myBooking}
            ></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingsTable;
