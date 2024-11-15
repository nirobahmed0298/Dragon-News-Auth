import React from 'react';
import Header from '../Header/Header';
import { FaArrowAltCircleLeft, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    let data = useLoaderData();
    let newsdetails = (data.data[0]);
    return (
        <div>
            <Header></Header>
            <section className='w-11/12 mx-auto my-8'>
                <h1 className='font-semibold'>Dragon News</h1>
                <div className='grid grid-cols-12 gap-10 my-6'>
                    <div className='col-span-9'>
                        <div className='border-2 p-4 rounded-xl space-y-3'>
                            <img className='w-full' src={newsdetails.
                                image_url} alt="" />
                                <p>{newsdetails.details}</p>
                                <Link to={`/`} className='btn rounded-none bg-red-500 text-white'><FaArrowAltCircleLeft></FaArrowAltCircleLeft> Back the Category</Link>
                        </div>
                    </div>
                    <div className='col-span-3'>
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsDetails;