import React from "react";
import Lottie from "lottie-react";
import { IoArrowBack } from "react-icons/io5";
import empty from "../assets/Lottie-files/empty.json";
import { useNavigate } from "react-router";


const Empty = ({setSearch}) => {
    const navigate = useNavigate();
const handleBack =()=>{
    setSearch("")
    navigate('/allPackage')
}
  return (
    <div className="flex items-center flex-col gap-3 ">
      <Lottie animationData={empty} loop={true} className=" w-96 "></Lottie>
      <p className=" text-2xl">Oops! your search doesn't match your desire</p>
    
        <button onClick={handleBack} className="text-white flex items-center btn btn-secondary">
          <IoArrowBack /> Go Back
        </button>
    
    </div>
  );
};

export default Empty;
