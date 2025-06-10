import React from "react";
import { useLoaderData } from "react-router";

const PackageDetails = () => {
  const packageData = useLoaderData();
  console.log(packageData);
  const {
    duration,
    _id,
    image,
    tour_name,
    departure_date,
    price,
    guide_name,
    guide_photo,
    guide_contact_no,
    bookingCount,
    package_details,
    destination,
    departure_location,
  } = packageData;

  return (
    <div className="w-11/12 mx-auto my-12 ">
     <div className="grid grid-cols-2 gap-4" >
        <div className="bg-primary p-8 rounded-md "><img src={image} className="rounded-md " alt="" /></div>
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
              
                <p className="font-semibold">🚎 bus will start from: <span className="opacity-55">{departure_location}</span></p>
                <p className="font-semibold">📆 journey began by:<span className="opacity-55"> {departure_date}</span></p>
                  <p className="font-semibold">📍 our destination will be: <span className="opacity-55">{destination}</span></p>
                <p className="font-semibold">⛺ journey will be <span className="opacity-55">{duration}</span> long</p>
                <p className="font-semibold">💰 Only  <span className="opacity-55">{price}</span> Tk</p>
                
              </div>
               <div className="divider"></div>
               

               <div className="space-y-2">
             <p className="font-semibold">🔖 Total Booked so far:  <span className="opacity-55">{bookingCount}</span> </p>
             <button className="btn btn-secondary w-full">Book Now</button>
               </div>
        </div>

     </div>
    </div>
  );
};

export default PackageDetails;
