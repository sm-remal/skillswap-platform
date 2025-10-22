import React from 'react';
import learn from '../../assets/learn.jpg'
import connected from '../../assets/connected.jpg'
import skillSearch from '../../assets/skillSearch.jpg'

const HowItWorks = () => {
    return (
        <div className='flex flex-col justify-center text-center bg-blue-50/40 pb-10 md:pb-16'>
            <h2 className='text-2xl md:text-3xl font-bold text-purple-600'>How It Works</h2>
            <div className='flex flex-col md:flex-row items-center gap-8 md:gap-14 justify-center pt-5'>
                <div className='flex-1 text-center space-y-3 max-w-xs'>
                    <div className='flex justify-center items-center'>
                        <img src={skillSearch} alt="" className='w-[300px] h-[280px] rounded-2xl'/>
                    </div>
                    <h2 className='text-xl font-bold text-purple-600'>Find a Skill</h2>
                    <p className='text-gray-500'>Browse through a wide range of skills and select the one you want to learn and the one you can teach.</p>
                </div>
                <div className='flex-1 text-center space-y-3 max-w-xs'>
                    <div className='flex justify-center items-center'>
                        <img src={connected} alt="" className='w-[300px] h-[280px] rounded-2xl'  />
                    </div>
                    <h2 className='text-xl font-bold text-purple-600'>Connect</h2>
                    <p className='text-gray-500'>Connect with people who want to learn the skill you can teach and can teach the skill you want to learn.</p>
                </div>
                <div className='flex-1 text-center space-y-3 max-w-xs'>
                    <div className='flex justify-center items-center'>
                        <img src={learn} alt="" className='w-[300px] h-[280px] rounded-2xl' />
                    </div>
                    <h2 className='text-xl font-bold text-purple-600'>Teach and Learn</h2>
                    <p className='text-gray-500'>Enter a virtual classroom equipped with video calls, messaging, and more to start teaching and learning from each other.</p>
                </div>
            </div>

        </div>
    );
};

export default HowItWorks;