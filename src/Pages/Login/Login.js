import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { SignInUser } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        SignInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(error => {
                console.log(error)
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
                </div>
            </div>
        </div>
    );
};

export default Login;