import React, { Suspense } from 'react';
import AuthInfo from '../../Hooks/AuthInfo';
import { myBookingsPromise } from '../../Api/Package';
import MyBookingsTable from './MyBookingsTable';
import Loading from '../../Pages/Loading/Loading';
import useTitle from '../../Hooks/useTitle';

const MyBookings = () => {
   const {user} = AuthInfo();
   useTitle("my-bookings");
    return (
        <div className='w-11/12 mx-auto my-12'>
          <Suspense fallback={<Loading></Loading>}>
            <MyBookingsTable myPackagePromise={ myBookingsPromise(user?.email,user?.accessToken)}></MyBookingsTable>
          </Suspense>
            
        </div>
    );
};

export default MyBookings;