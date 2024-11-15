import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    let { createUser, setUser, updateUserProfile } = useContext(AuthContext);
    let [error, setError] = useState({});
    let navigate = useNavigate();
    let handleRegister = (e) => {
        e.preventDefault();
        let form = new FormData(e.target)
        let name = form.get('name');
        let photo = form.get('photoUrl');
        let email = form.get('email');
        let password = form.get('password');
        if (password.length <= 6) {
            setError({ ...error, password: 'Your password least 6 characters!' })
            return;
        }

        createUser(email, password)
            .then((result) => {
                setUser(result.user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/');
                    })
                    .catch(err=>{console.log(err.message)})
            })
            .catch(error => { console.log(error.message) })
    }
    return (
        <section className='flex justify-center items-center py-8'>
            <div className='bg-slate-200 md:w-[500px]'>
                <form onSubmit={handleRegister} className="card-body p-10">
                    <h1 className='md:text-2xl text-center font-semibold my-2'>Register your account</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name='name' className="input input-bordered rounded-none " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter your Photo URL" name='photoUrl' className="input input-bordered rounded-none " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" name='email' className="input input-bordered rounded-none " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name='password' className="input input-bordered rounded-none " />
                        {
                            error.password && <label className="label">
                                <span className="label-text text-red-500">{error.password}</span>
                            </label>
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn btn-neutral rounded-none ">Register</button>
                    </div>
                    <p className='text-center my-3'><span className='text-sm'>Dont’t Have An Account ?</span> <Link to='/auth/login' className='text-green-500 font-semibold  my-4'>Login</Link></p>

                </form>
            </div>
        </section>
    );
};

export default Register;