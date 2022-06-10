import React, {useContext} from "react";
import {AuthContext} from "../context/Authentification";

function Home() {
    const { logout } =useContext(AuthContext);

    return (
        <div>
            <h1>Home pagina</h1>
            <p>Welkom op deze website!</p>
            <button type="button" onClick={logout}>
                Uitloggen
            </button>
        </div>
    );
}

export default Home;