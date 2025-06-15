export const myPackagePromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/myPackage?email=${email}`, {
    headers: {
      authorization: `bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
export const myBookingsPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/myBookings?email=${email}`, {
    headers: {
      authorization: `bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
