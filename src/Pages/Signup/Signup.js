import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { setAuthToken } from '../../ApiJWT/auth';

const Signup = () => {
    const [error, setError] = useState('')
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // setAuthToken for jwt token verified
                setAuthToken(user)

                form.reset();
                handleUpdateUserProfile(name);
                handleEmailVerification();
                toast.success("Please verify your email address");
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => console.log(error))
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">

                    <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn bg-orange-600' value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Have an account? <Link className='text-orange-600 font-bold ' to='/login'>Login</Link> </p>

                    <p className='text-orange-600 font-bold text-center'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Signup;