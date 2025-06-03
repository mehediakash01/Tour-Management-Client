import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';

const AuthProvider = ({children}) => {


    // createUser

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword (auth,email,password);
    }
    const authData = {
      createUser,
    }
    return (
       <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;