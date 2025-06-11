export  const myPackagePromise =(email)=>{
return fetch(`http://localhost:3000/myBookings?email=${email}`).then(res=>res.json());
}