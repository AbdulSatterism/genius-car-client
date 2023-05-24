import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { setAuthToken } from '../../../ApiJWT/auth';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;

                setAuthToken(user)
                // const currentUser = {
                //     email: user?.email
                // };

                // fetch('https://genius-car-server-1lix.onrender.com/jwt', {
                //     method: "POST",
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         // console.log(data);
                //         localStorage.setItem('genius-token', data.token)
                //     });

            })
            .catch(err => console.log(err.message))
    }

    return (
        <div>
            <p className='text-center'><small>Social login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;