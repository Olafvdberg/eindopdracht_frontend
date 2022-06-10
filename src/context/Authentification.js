import React, { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState(false);
    const navigate = useNavigate();

    function login() {
        console.log('Gebruiker is ingelogd!');
        toggleIsAuth(true);
        navigate.push('/profile');
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        toggleIsAuth(false);
        navigate.push('/')
    }

    const contextData = {
        isAuth: isAuth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;