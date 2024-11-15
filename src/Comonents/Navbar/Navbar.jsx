import React, { useContext } from 'react';
import userIcon from '../../assets/user.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Navbar = () => {
    let { user, LogOut } = useContext(AuthContext);
    let handleLogOut = (e) => {
        e.preventDefault();
        LogOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }


    let links = <>
        <li><Link to='/'>Home</Link></li>
        <li><a >About</a></li>
        <li><a>Career</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {/* <img src={userIcon} alt="" /> */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-12 rounded-full">
                                {
                                    user ? <img
                                        src={user.photoURL}
                                        alt="Tailwind CSS Navbar component" />
                                        :
                                        <img
                                            src={userIcon}
                                            alt="Tailwind CSS Navbar component" />

                                }
                            </div>
                        </div>
                        {
                            user && <ul
                                tabIndex={0}
                                className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">{user && user.email}</a>
                                    <a className="justify-between">{user && user.displayName}</a>
                                </li>
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        }
                    </div>
                    {
                        user ? '' : <Link to='/auth/login' className="btn px-8 bg-black text-white rounded-none hover:text-black">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;