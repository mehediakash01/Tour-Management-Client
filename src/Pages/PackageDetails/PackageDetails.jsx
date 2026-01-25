import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import AuthInfo from "../../Hooks/AuthInfo";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";
import useTitle from "../../Hooks/useTitle";

const PackageDetails = () => {
  useTitle("package-details");
  const { user } = AuthInfo();
  const navigate = useNavigate();
  const { id } = useParams();

  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [bookCount, setBookCount] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://tour-package-booking-management-ser.vercel.app/allPackage/${id}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        setPackageData(res.data);
        setBookCount(res.data.bookingCount || 0);
      })
      .catch((err) => {
        console.error("Error fetching package data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, user]);

  useEffect(() => {
    if (openModal) {
      const modal = document.getElementById("booking_modal");
      if (modal && typeof modal.showModal === "function") {
        modal.showModal();
      }
    }
  }, [openModal]);

  const {
    duration,
    _id,
    image,
    tour_name,
    departure_date,
    price,
    guide_name,
    guide_photo,
    guide_email,
    guide_contact_no,
    package_details,
    destination,
    departure_location,
  } = packageData || {};

  const handleBook = () => {
    setOpenModal(true);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const note = e.target.note.value;

    const bookedData = {
      tour_id: _id,
      tour_name,
      guide_name,
      guide_email,
      buyer_name: user?.displayName,
      buyer_email: user?.email,
      booking_date: new Date(),
      departure_date,
      note,
      destination,
      status: "pending",
    };

    axios
      .post("https://tour-package-booking-management-ser.vercel.app/bookings", bookedData)
      .then((res) => {
        if (res.data.insertedId) {
          axios
            .patch(`https://tour-package-booking-management-ser.vercel.app/bookings/${_id}`)
            .then(() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Booking has been confirmed",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/allPackage");
              setBookCount((prev) => prev + 1);
              setOpenModal(false);
            })
            .catch((err) => {
              console.error("Failed to update booking count", err);
            });
        }
      })
      .catch((err) => {
        console.error("Booking failed", err);
      });
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 py-8 lg:py-16">
      <div className="w-11/12 max-w-7xl mx-auto py-12">
        {/* Hero Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Image Section - Takes 3 columns */}
          <div className="lg:col-span-3 relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}></div>
              <img
                src={image}
                className={`w-full lg:h-[500px] object-cover transform transition-all duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                alt={tour_name}
                onLoad={() => setImageLoaded(true)}
              />
              {/* Floating Price Badge */}
              <div className="absolute lg:top-6 top-2 right-6 z-20 bg-white/95 backdrop-blur-sm lg:px-6 px-3 py-2 lg:py-3 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="lg:text-2xl text-lg font-bold text-teal-600">{price}</span>
                  <span className="text-sm text-gray-600">Tk</span>
                </div>
              </div>
              {/* Booking Count Badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
                <span className="text-sm font-semibold text-gray-700">{bookCount} bookings</span>
              </div>
            </div>
          </div>

          {/* Quick Info Card - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            {/* Tour Title Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{tour_name}</h1>
              <div className="flex items-center gap-2 text-teal-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">{destination}</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-5 text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-sm opacity-90 mb-1">Duration</div>
                <div className="text-2xl font-bold">{duration}</div>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg p-5 text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-sm opacity-90 mb-1">Departure</div>
                <div className="text-lg font-bold truncate">{departure_location}</div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleBook}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Book This Adventure Now
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Package Details Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full"></div>
                Package Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{package_details}</p>
            </div>

            {/* Trip Details Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-pink-500 rounded-full"></div>
                Trip Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoItem 
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>}
                  label="Departure Date"
                  value={departure_date}
                  color="blue"
                />
                <InfoItem 
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
                  label="Duration"
                  value={duration}
                  color="teal"
                />
                <InfoItem 
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>}
                  label="Destination"
                  value={destination}
                  color="purple"
                />
                <InfoItem 
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>}
                  label="Departure From"
                  value={departure_location}
                  color="orange"
                />
              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            {/* Guide Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                Your Tour Guide
              </h2>
              
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={guide_photo}
                    className="w-28 h-28 rounded-full border-4 border-teal-500 shadow-lg mx-auto object-cover"
                    alt={guide_name}
                  />
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mt-4">{guide_name}</h3>
                <p className="text-sm text-gray-500 mt-1">Professional Tour Guide</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500">Email</div>
                    <div className="text-sm font-medium text-gray-700 truncate">{guide_email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500">Phone</div>
                    <div className="text-sm font-medium text-gray-700">{guide_contact_no}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-100">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-sm text-gray-700">Your guide has 5+ years of experience and speaks English, Bengali, and Hindi fluently.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {openModal && (
        <dialog id="booking_modal" className="modal backdrop-blur-sm">
          <div className="modal-box max-w-2xl bg-white rounded-2xl shadow-2xl border-0 p-0 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-6 text-white">
              <h3 className="font-bold text-2xl flex items-center gap-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Confirm Your Booking
              </h3>
              <p className="text-teal-100 mt-1">Complete the form below to secure your spot</p>
            </div>

            <form onSubmit={handleBooking} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Tour Package</label>
                  <input
                    type="text"
                    value={tour_name}
                    readOnly
                    className="input input-bordered w-full bg-gray-50 font-medium"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Price</label>
                  <input
                    type="text"
                    value={`${price} Tk`}
                    readOnly
                    className="input input-bordered w-full bg-gray-50 font-medium text-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Your Name</label>
                  <input
                    type="text"
                    value={user?.displayName}
                    readOnly
                    className="input input-bordered w-full bg-gray-50"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Email Address</label>
                  <input
                    type="email"
                    value={user?.email}
                    readOnly
                    className="input input-bordered w-full bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Booking Date</label>
                <input
                  type="text"
                  value={new Date().toLocaleString()}
                  readOnly
                  className="input input-bordered w-full bg-gray-50"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Special Notes (Optional)</label>
                <textarea
                  name="note"
                  placeholder="Any special requirements or requests?"
                  className="textarea textarea-bordered w-full h-24 resize-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  Confirm Booking
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors duration-300"
                  onClick={() => {
                    document.getElementById("booking_modal").close();
                    setOpenModal(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

// InfoItem Component
const InfoItem = ({ icon, label, value, color }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    teal: 'bg-teal-100 text-teal-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
  };

  return (
    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
      <div className={`w-12 h-12 ${colorClasses[color]} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-gray-500 font-medium mb-1">{label}</div>
        <div className="text-base font-semibold text-gray-800">{value}</div>
      </div>
    </div>
  );
};

export default PackageDetails;