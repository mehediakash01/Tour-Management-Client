import React from 'react';
import AuthInfo from '../../Hooks/AuthInfo';
import Loading from '../../Pages/Loading/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = AuthInfo();

   if (loading) return <Loading></Loading>
   if(user) return children;
   else{
    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
   }
};

export default PrivateRoute;