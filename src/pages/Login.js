import React, {useContext} from "react";
import {AuthContext} from "../context/Authentification";

function Login () {
    const { login } = useContext(AuthContext);


    return (
        <div>
            <h1>Login pagina</h1>
            <button type="button" onClick={login}>
                Log me in!
            </button>
        </div>
    );
}

export default Login