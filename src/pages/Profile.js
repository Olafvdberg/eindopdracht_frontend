import React, {useEffect} from 'react';

function Profile() {

    useEffect(() => {
        const token = localStorage.getItem('token');

        async function getProfileData() {
            try {

            } catch (e) {
                console.error(e)
            }
        }
    }, [])

    return (
        <div>
            <h1>Profiel pagina</h1>
            <p>Hoi [username]!</p>
        </div>
    );
}

export default Profile