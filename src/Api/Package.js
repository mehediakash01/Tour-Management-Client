export const myPackagePromise = (email, accessToken) => {
  return fetch(`https://tour-package-booking-management-ser.vercel.app/myPackage?email=${email}`, {
    headers: {
      authorization: `bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
export const myBookingsPromise = (email, accessToken) => {
  return fetch(`https://tour-package-booking-management-ser.vercel.app/myBookings?email=${email}`, {
    headers: {
      authorization: `bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
