import React, { useEffect, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import MainNews from './MainNews/MainNews';
import { NavLink, Outlet } from 'react-router-dom';
import { to } from './../../../node_modules/moment/src/lib/moment/to';

const Main = () => {
    let [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <section className='grid gap-3 md:grid-cols-12'>
            <aside className='left-0 col-span-3'>
                <h1 className='font-semibold'>All Categories</h1>
                <div className='flex flex-col gap-2 py-4 *:bg-base-100'>
                    {
                        categories.map(category => <NavLink to={`category/${category.category_id}`} className='btn' key={category.category_id}>{category.category_name}</NavLink>)
                    }
                </div>
            </aside>
            {/* Main Section */}
            
            <div className='col-span-6'>
                <Outlet></Outlet>
            </div>

            <aside className='col-span-3'>
                <h1 className='font-semibold'>Login With</h1>
                <div className='py-4 *:w-full *:bg-base-100 space-y-2'>
                    <button className='btn'><FaGoogle></FaGoogle> Login with Google</button>
                    <button className='btn'> <FaGithub></FaGithub> Login with GitHub</button>
                </div>
                <div className='space-y-2'>
                    <h1 className='font-semibold'>Find us on</h1>
                    <div className="join flex join-vertical *:bg-base-100">
                        <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                        <button className="btn join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
                        <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
                    </div>
                </div>
            </aside>
        </section>
    );
};

export default Main;