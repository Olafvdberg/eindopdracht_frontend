import React, {createContext, useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decodedToken = jwt_decode(token);
            fetchUserData(token, decodedToken);
        } else {
            toggleAuth({
                ...auth,
                status: 'done',
            })
        }


    }, [])

    const navigate = useNavigate();

    async function fetchUserData(token, decodedToken) {
        try {
            const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user');

            toggleAuth();

        } catch (e) {
            console.error(e);
            toggleAuth({
                ...auth,
                status: 'done',
            })
        }
    }

    function login(jwtToken) {

        localStorage.setItem('token', jwtToken);

        const decodedToken = jwt_decode(jwtToken);

        console.log('Gebruiker is ingelogd!');

        fetchUserData(jwtToken, decodedToken);

        toggleAuth({
            ...auth,
            isAuth: true,
            user: {
                email: decodedToken.email,
            }
        });
        navigate.push('/profile');
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        toggleAuth({
            ...auth,
            isAuth: false,
        });
        navigate.push('/')
    }

    const contextData = {
        isAuth: auth.isAuth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;