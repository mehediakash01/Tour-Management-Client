import React, { Suspense } from 'react';
import AuthInfo from '../../Hooks/AuthInfo';
import MyPackageTable from './MyPackageTable';
import { myPackagePromise } from '../../Api/Package';
import Loading from '../Loading/Loading';

const ManagePackage = () => {
    const {user} = AuthInfo();
    return (
        <div className='w-11/12 mx-auto my-12'>
          <Suspense fallback={<Loading></Loading>}>
            <MyPackageTable myPackagePromise={myPackagePromise(user?.email)}></MyPackageTable>
          </Suspense>
            
        </div>
    );
};

export default ManagePackage;