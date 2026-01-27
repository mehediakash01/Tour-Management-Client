import React, { useEffect, useState } from "react";
import axios from "axios";
import AllPackageCard from "./AllPackageCard";
import Loading from "../Loading/Loading";
import Empty from "../Empty";
import { IoGridOutline, IoSearchOutline } from "react-icons/io5";
import { FaTableCells, FaSortDown } from "react-icons/fa6";
import TableView from "./TableView";
import useTitle from "../../Hooks/useTitle";
import { TbPackages } from "react-icons/tb";
import { MdFilterList } from "react-icons/md";

const AllPackage = () => {
  const [search, setSearch] = useState("");
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableView, setTableView] = useState(false);
  const [sortOption, setSortOption] = useState("");
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <div className="w-11/12 max-w-7xl mx-auto py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl shadow-lg mb-6 transform hover:rotate-12 transition-transform duration-300">
            <TbPackages className="text-4xl text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Tour Packages
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover amazing destinations and create unforgettable memories
          </p>
        </div>

        {/* Enhanced Controls Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            {/* Search Input with Icon */}
            <div className="flex-1 relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <IoSearchOutline className="text-gray-400 text-xl group-focus-within:text-teal-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search destinations, tours..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input input-bordered w-full pl-12 pr-4 bg-gray-50 border-gray-200 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Sort Dropdown with Icon */}
            <div className="flex-1 relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSortDown className="text-gray-400 text-lg group-focus-within:text-blue-500 transition-colors" />
              </div>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="select select-bordered w-full pl-12 pr-4 bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all appearance-none cursor-pointer"
              >
                <option value="">Sort By</option>
                <option value="tour_name_asc">📝 Name (A-Z)</option>
                <option value="tour_name_desc">📝 Name (Z-A)</option>
                <option value="duration_asc">⏱️ Duration (Low to High)</option>
                <option value="duration_desc">⏱️ Duration (High to Low)</option>
                <option value="departure_date_asc">📅 Departure (Earliest)</option>
                <option value="departure_date_desc">📅 Departure (Latest)</option>
              </select>
            </div>

            {/* View Toggle Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setTableView(false)}
                className={`flex-1 lg:flex-none btn ${
                  !tableView
                    ? "bg-gradient-to-r from-teal-500 to-blue-600 border-0 text-white"
                    : "btn-outline border-2 border-gray-300 hover:border-teal-500 hover:bg-teal-50"
                } min-w-[120px] font-semibold transition-all duration-300`}
                title="Grid View"
              >
                <IoGridOutline className="text-xl" />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setTableView(true)}
                className={`flex-1 lg:flex-none btn ${
                  tableView
                    ? "bg-gradient-to-r from-teal-500 to-blue-600 border-0 text-white"
                    : "btn-outline border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50"
                } min-w-[120px] font-semibold transition-all duration-300`}
                title="Table View"
              >
                <FaTableCells className="text-xl" />
                <span className="hidden sm:inline">Table</span>
              </button>
            </div>
          </div>

          {/* Active Filters Display */}
          {(search || sortOption) && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-gray-600 flex items-center gap-1">
                  <MdFilterList className="text-lg" />
                  Active Filters:
                </span>
                {search && (
                  <span className="inline-flex items-center gap-1 bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    Search: "{search}"
                    <button
                      onClick={() => setSearch("")}
                      className="ml-1 hover:bg-teal-200 rounded-full p-0.5"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </span>
                )}
                {sortOption && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Sort: {getSortLabel(sortOption)}
                    <button
                      onClick={() => setSortOption("")}
                      className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setSearch("");
                    setSortOption("");
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700 underline ml-2"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        {!loading && packageData.length > 0 && (
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600 font-medium">
              Showing <span className="text-teal-600 font-bold">{packageData.length}</span> {packageData.length === 1 ? 'package' : 'packages'}
            </p>
          </div>
        )}

        {/* Content */}
        <div>
          {loading ? (
            <Loading />
          ) : packageData.length === 0 ? (
            <Empty setSearch={setSearch} />
          ) : tableView ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <TableView data={packageData} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packageData.map((pkg) => (
                <AllPackageCard key={pkg._id} allPackage={pkg} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to get readable sort labels
const getSortLabel = (option) => {
  const labels = {
    tour_name_asc: "Name (A-Z)",
    tour_name_desc: "Name (Z-A)",
    duration_asc: "Duration (Low to High)",
    duration_desc: "Duration (High to Low)",
    departure_date_asc: "Departure (Earliest)",
    departure_date_desc: "Departure (Latest)",
  };
  return labels[option] || option;
};

export default AllPackage;