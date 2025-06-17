export const myPackagePromise = (email, accessToken) => {
  return fetch(`https://tour-package-booking-management-server-qysjrbna2.vercel.app/myPackage?email=${email}`, {
    headers: {
      authorization: `bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
export const myBookingsPromise = (email, accessToken) => {
  return fetch(`https://tour-package-booking-management-server-qysjrbna2.vercel.app/myBookings?email=${email}`, {
    headers: {
      authorization: `bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
