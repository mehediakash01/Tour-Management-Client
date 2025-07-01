import React from "react";
import { Link } from "react-router"; // or just 'react-router' if using v5

const TableView = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-base-100 rounded-lg shadow-md">
      <table className="table w-full text-sm">
        <thead>
          <tr className="bg-base-200 text-base-content">
            <th>Image</th>
            <th>Tour Name</th>
            <th>Duration</th>
            <th>Departure Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pkg) => {
            const { _id, image, tour_name, duration, departure_date } = pkg;
            return (
              <tr key={_id} className="hover">
                <td>
                  <img
                    src={image}
                    alt={tour_name}
                    className="w-16 h-12 object-cover rounded"
                  />
                </td>
                <td className="font-medium">{tour_name}</td>
                <td>{duration}</td>
                <td>{departure_date}</td>
                <td>
                  <Link to={`/package/${_id}`}>
                    <button className="btn btn-xs btn-primary">View Details</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
