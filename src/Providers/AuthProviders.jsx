import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null)

const Auth = getAuth()

const AuthProviders = ({children}) => {

    const user = {displayName: "sagr nodi"}
    return (
        <AuthContext.Provider value={user} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;