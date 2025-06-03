import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider/AuthContext';

const AuthInfo = () => {

   const useAuth = useContext(AuthContext);
   return useAuth;
};

export default AuthInfo;