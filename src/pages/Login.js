import React, {useContext, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import styles from '../styles/Login.module.css';
import {AuthContext} from "../context/AuthContext";

function LoginPage() {
    const {login} = useContext(AuthContext);

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',
                {
                    "username": userName,
                    "password": password,
                });
            console.log(response)
            login(response);

            history.push("/profile")
        } catch (e) {
            console.error(e.response);


        }
    }

    return (

        <>

            <form onSubmit={handleSubmit} className={styles.layout}>

                <label htmlFor="login-username" className={styles.form}>
                    Username:
                    <input
                        className={styles.form}
                        type="text"
                        id="login-username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={userName}
                        placeholder="Fill in your username"
                    />
                    {userName.length < 6 && <p className={styles["error-message"]}>Your username isn't long enough</p>}
                    {userName.length >= 6 && <p className={styles["good-message"]}>Your username is long enough</p>}
                </label>


                <label htmlFor="login-password" className={styles.form}>
                    Password:
                    <input
                        className={styles.form}
                        type="password"
                        id="login-password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Fill in your password"
                    />
                    {password.length < 6 && <p className={styles["error-message"]}>Your password isn't long enough</p>}
                    {password.length >= 6 && <p className={styles["good-message"]}>Your password is long enough</p>}
                </label>




                <button type="submit" className={styles["button-design"]}>Login</button>
            </form>

            <p>No account yet? <Link to="/signup">Signup</Link> first.</p>

        </>

    );
}

export default LoginPage;