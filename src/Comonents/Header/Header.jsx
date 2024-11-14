import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className='flex justify-center py-7'>
                <div className='text-center space-y-1'>
                    <img className='w-80' src={logo} alt="" />
                    <p className='opacity-60'>Journalism Without Fear or Favour!</p>
                    <p className='font-[400]'>{moment().format('LLLL')}</p>
                </div>
            </div>
            <div className='flex gap-2 p-2 bg-base-200'>
                <p className='bg-[#D72050] py-2 px-4 font-[500] text-white'>Latest</p>
                <Marquee pauseOnHover>
                    <Link to='/news' className='hover:underline'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, tempora?</Link>
                </Marquee>
            </div>
        </>
    );
};

export default Header;