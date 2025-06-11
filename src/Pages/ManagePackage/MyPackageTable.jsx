import React, { use } from "react";
import PackageRow from "./PackageRow";

const MyPackageTable = ({myPackagePromise}) => {
    const myPackages = use(myPackagePromise);

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
                myPackages.map((myPackage,index)=><PackageRow key={myPackage._id} index={index} myPackage={myPackage} ></PackageRow>)
            }
        
        </tbody>
      </table>
    </div>
  );
};

export default MyPackageTable;
