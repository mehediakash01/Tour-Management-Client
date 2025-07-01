import React, { useEffect, useState } from "react";
import axios from "axios";
import AllPackageCard from "./AllPackageCard";
import Loading from "../Loading/Loading";
import Empty from "../Empty";
import { IoGridOutline } from "react-icons/io5";
import { FaTableCells } from "react-icons/fa6";
import TableView from "./TableView";

const AllPackage = () => {
  const [search, setSearch] = useState("");
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableView, setTableView] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://tour-package-booking-management-ser.vercel.app/allPackage", {
        params: { search },
      })
      .then((res) => {
        setPackageData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  return (
    <div className="w-11/12 mx-auto my-12">
      <h1 className="text-3xl text-accent font-bold text-center my-5">
        Tour Packages
      </h1>

      <div className="flex gap-6 items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-secondary"
        />
         <div >
          <button onClick={()=>setTableView(!tableView)}>
          { tableView? <FaTableCells size={30} />:<IoGridOutline size={30} /> }  
          </button>
      </div>
      
      </div>
     

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
