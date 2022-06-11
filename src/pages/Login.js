import React, {useContext} from "react";
import {AuthContext} from "../context/Authentification";
import axios from "axios";

function Login () {
    const { login } = useContext(AuthContext);

    async function logUserIn() {
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: '',
                password: '',
            });

            login(response.data.accessToken);

        }   catch (e) {
            console.error(e);
        }


    }


    return (
        <div>
            <h1>Login pagina</h1>
            <button type="button" onClick={logUserIn}>
                Log me in!
            </button>
        </div>
    );
}

export default Login