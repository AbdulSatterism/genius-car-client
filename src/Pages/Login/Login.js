import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [error, setError] = useState('');
    const { SignInUser, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        SignInUser(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = { email: user.email };
                // console.log(currentUser);

                form.reset();
                setError('');

                // get jwt
                fetch('https://genius-car-server-1lix.onrender.com/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('data', data)
                        // local storage is the easy but not the best place for store token
                        localStorage.setItem('genius-token', data.token);

                        if (user.emailVerified) {

                            navigate(from, { replace: true });
                        }
                        else {
                            toast.error('your email is not verified please verify your email address')
                        }
                    })

            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">

                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forget Password</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn bg-orange-600' value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-bold ' to='/signup'>Sign up</Link> </p>

                    <p className='text-orange-600 font-bold text-center'>{error}</p>
                    <hr />
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;