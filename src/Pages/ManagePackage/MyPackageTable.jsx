import React, { use, useState } from "react";
import PackageRow from "./PackageRow";

const MyPackageTable = ({myPackagePromise}) => {
    const myPackages = use(myPackagePromise);
  const [packageData, setPackageData] = useState(myPackages);
    const handleDelete = (id) => {
    setPackageData((prev) => prev.filter((pack) => pack._id !== id));
  };
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
      
        <thead>
          <tr>
            <th>#</th>
            <th>Tour image</th>
            <th>Tour Name</th>
            <th>Destination</th>
            <th>Departure Date</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {
                packageData.map((myPackage,index)=><PackageRow key={myPackage._id}  onDelete={handleDelete} setPackageData={setPackageData} index={index} myPackage={myPackage} ></PackageRow>)
            }
        
        </tbody>
      </table>
    </div>
  );
};

export default MyPackageTable;
