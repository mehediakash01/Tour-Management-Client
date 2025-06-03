import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const authData = {
        name: 'akash'
    }
    return (
       <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;