import React from 'react';
import { useLoaderData } from 'react-router';
import AllPackageCard from './AllPackageCard';

const AllPackage = () => {
    const allPackages = useLoaderData();
    
    return (
        <div className='w-11/12 mx-auto my-12'>
            <h1 className='text-3xl text-accent font-bold text-center my-5'>Tour Packages</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    allPackages.map(allPackage=><AllPackageCard key={allPackage._id} allPackage={allPackage}></AllPackageCard>)
                }
            </div>
        </div>
    );
};

export default AllPackage;