import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    let { user, setUser, LogIn } = useContext(AuthContext);
    let [error, setError] = useState({});
    let location = useLocation();
    let navigate = useNavigate()
    let handleLogin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        LogIn(email, password)
            .then(result => {
                setUser(result.user)
                navigate(location?.state ? location.pathname : '/')
            })
            .catch(err => {
                 setError({...err,login:err.code})
            })
    }

    return (
        <section className='flex justify-center items-center py-8'>
            <div className='bg-slate-200 md:w-[500px]'>
                <form onSubmit={handleLogin} className="card-body p-10">
                    <h1 className='md:text-2xl text-center font-semibold my-2'>Login your account</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" name='email' className="input input-bordered rounded-none " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name='password' className="input input-bordered rounded-none " required />
                        {
                            error.login && <label className="label">
                                <span className="label-text text-red-500">{error.login}</span>
                            </label>
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn btn-neutral rounded-none ">Login</button>
                    </div>
                    <p className='text-center my-3'><span className='text-sm'>Dont’t Have An Account ?</span> <Link to='/auth/register' className='text-red-500 font-semibold  my-4'>Register</Link></p>

                </form>
            </div>
        </section>
    );
};

export default Login;