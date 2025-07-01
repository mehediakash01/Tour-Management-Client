import React, { useEffect, useState } from "react";
import axios from "axios";
import AllPackageCard from "./AllPackageCard";
import Loading from "../Loading/Loading";
import Empty from "../Empty";
import { IoGridOutline } from "react-icons/io5";
import { FaTableCells } from "react-icons/fa6";
import TableView from "./TableView";
import useTitle from "../../Hooks/useTitle";

const AllPackage = () => {
  const [search, setSearch] = useState("");
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableView, setTableView] = useState(false);
  const [sortOption, setSortOption] = useState(""); // new state for sorting
useTitle("All-Package");
  useEffect(() => {
    setLoading(true);

    axios
      .get("https://tour-package-booking-management-ser.vercel.app/allPackage", {
        params: { search },
      })
      .then((res) => {
        let result = [...res.data];

        // Sort logic based on selected option
        if (sortOption === "tour_name_asc") {
          result.sort((a, b) => a.tour_name.localeCompare(b.tour_name));
        } else if (sortOption === "tour_name_desc") {
          result.sort((a, b) => b.tour_name.localeCompare(a.tour_name));
        } else if (sortOption === "duration_asc") {
          result.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
        } else if (sortOption === "duration_desc") {
          result.sort((a, b) => parseInt(b.duration) - parseInt(a.duration));
        } else if (sortOption === "departure_date_asc") {
          result.sort(
            (a, b) =>
              new Date(a.departure_date) - new Date(b.departure_date)
          );
        } else if (sortOption === "departure_date_desc") {
          result.sort(
            (a, b) =>
              new Date(b.departure_date) - new Date(a.departure_date)
          );
        }

        setPackageData(result);
      })
      .catch((err) => {
        console.error("Error fetching:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search, sortOption]);

  return (
    <div className="w-11/12 mx-auto my-12">
      <h1 className="text-3xl text-accent font-bold text-center my-5">
        Tour Packages
      </h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-secondary w-full md:w-1/3"
        />

        {/* Sort Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="select select-secondary w-full md:w-1/4"
        >
          <option value="">Sort By</option>
          <option value="tour_name_asc">Name (A-Z)</option>
          <option value="tour_name_desc">Name (Z-A)</option>
          <option value="duration_asc">Duration (Low to High)</option>
          <option value="duration_desc">Duration (High to Low)</option>
          <option value="departure_date_asc">Departure (Earliest)</option>
          <option value="departure_date_desc">Departure (Latest)</option>
        </select>

        {/* View Toggle */}
        <button
          onClick={() => setTableView(!tableView)}
          className="btn btn-outline btn-primary"
          title="Toggle View"
        >
          {tableView ? <FaTableCells size={22} /> : <IoGridOutline size={22} />}
        </button>
      </div>

      {/* Content */}
      <div>
        {loading ? (
          <Loading />
        ) : packageData.length === 0 ? (
          <Empty setSearch={setSearch} />
        ) : tableView ? (
          <TableView data={packageData} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {packageData.map((pkg) => (
              <AllPackageCard key={pkg._id} allPackage={pkg} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPackage;
