export  const myPackagePromise =(email)=>{
return fetch(`http://localhost:3000/myPackage?email=${email}`).then(res=>res.json());
}