import React from 'react';
import Container from '../../components/Shared/Container';
import { Link } from 'react-router-dom';

const Why = () => {
    return (
        <div className='min-h-screen py-10'>
            <h1 className='text-5xl font-thin text-blue-400 text-center'>Why Choose Us?</h1>
            <Container>
                <h1 className='text-3xl font-thin text-blue-400 text-center my-6'>Our Users</h1>
                <div className='lg:flex justify-evenly items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-64 w-64 flex justify-center rounded-full object-cover'>
                            <img className='rounded-full object-cover' src="https://img.freepik.com/free-photo/medium-shot-man-working-laptop_23-2150323506.jpg?w=900&t=st=1703198515~exp=1703199115~hmac=587784c66025a5c0c6462f2f683f7c767f432e2ae91e1f976a9828d77d93d37c" alt="" />
                        </div>
                        <h1 className='mt-4 text-blue-400'>Developers</h1>
                        <button className='px-4 py-2 bg-blue-400 rounded-3xl text-white mt-2'>See More</button>
                    </div>
                    <div className='flex flex-col justify-center items-center my-4'>
                        <div className='h-64 w-64 flex justify-center rounded-full object-cover'>
                            <img className='rounded-full object-cover' src="https://img.freepik.com/free-photo/happy-african-american-businesswoman-working-touchpad-office_637285-12961.jpg?w=900&t=st=1703199461~exp=1703200061~hmac=81a34a48a5011297c2b91789f913acc76ac04c93c09b16b65fd350ebb59f2f23" alt="" />
                        </div>
                        <h1 className='mt-4 text-blue-400'>Bankers</h1>
                        <button className='px-4 py-2 bg-blue-400 rounded-3xl text-white mt-2'>See More</button>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-64 w-64 flex justify-center rounded-full object-cover'>
                            <img className='rounded-full object-cover' src="https://img.freepik.com/free-photo/medium-shot-smiley-business-man_23-2149151169.jpg?w=996&t=st=1703199380~exp=1703199980~hmac=de4fea106714d6cdad238b3ef3df502512cacd7e72b6c20598614a84c9ef703d" alt="" />
                        </div>
                        <h1 className='mt-4 text-blue-400'>Corporate Professional</h1>
                        <button className='px-4 py-2 bg-blue-400 rounded-3xl text-white mt-2'>See More</button>
                    </div>
                </div>
                <div className='flex-1'>
                    <h1 className="text-5xl font-thin">Join Now!</h1>
                    <p className="py-6">Coincidentally, that’s exactly what you get from SafeSpace - a free online task management app that’s easy to use and features dozens of collaboration tools.</p>
                    <Link to='/dashboard'><button className='px-8 py-3 font-bold bg-blue-400 rounded-3xl text-white mt-2'>Let's Explore</button></Link>
                </div>
            </Container>
        </div>
    );
};

export default Why;