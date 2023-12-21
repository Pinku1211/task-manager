import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-[60vh]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Task Manager</h1>
                    <p className="mb-5">Make Your Life Easier With Us</p>
                    <Link to='/dashboard'><button className='px-3 py-2 bg-rose-500 text-white rounded-sm'>Let's Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;