import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../components/Shared/Container';
import bannerImg from '../../../assets/images/banner.jpg'
const Banner = () => {
    return (
        <div className='min-h-screen pt-24 lg:pt-20'>
            <Container>
                <div className='flex flex-col lg:flex-row items-center justify-between'>
                    <div>
                        <h1 className='text-5xl md:text-8xl font-thin'>FREE</h1>
                        <h1 className='text-5xl md:text-8xl font-thin'><span className='text-blue-400'>ONLINE TASK</span></h1>
                        <h1 className='text-5xl md:text-8xl font-thin'>MANAGER</h1>
                        <Link to='/dashboard'><button className='px-8 py-3 font-bold bg-blue-400 rounded-3xl text-white shadow-xl mt-8'>Let's Explore</button></Link>
                    </div>
                    <div>
                        <img className='lg:w-[950px]' src={bannerImg} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;