import React from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import { useLoaderData } from 'react-router';
import SkillCards from '../../components/SkillCards/SkillCards';
import TopRatedProviders from '../../components/TopRatedProviders/TopRatedProviders';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import WhyLearnWithUs from '../../components/WhyLearnWithUs/WhyLearnWithUs';

const Home = () => {
    const demandingSkills = useLoaderData();

    return (
        <div className='max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm'>

            {/* Hero Section  */}
            <HeroSlider></HeroSlider>


            <div className='flex flex-col space-x-4 text-center max-w-4xl mx-auto mt-10 md:mt-16 space-y-3 px-5 md:px-0'>
                <h2 className=" text-4xl font-extrabold bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Popular Skills</h2>
                <p className='text-gray-500 font-medium'>We have designed our courses with the most demanding professional skills. The knowledge, <br className='hidden md:flex'/>experience, and expertise gained through the program will ensure your desired job in the global market.<br className='hidden md:flex'/> From the list below you can enroll to any online or offline courses at any time.</p>
            </div>

            {/* Popular Skills Card  */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-4'>
                {
                    demandingSkills.map(skills => <SkillCards key={skills.skillId} skills={skills}></SkillCards>)
                }
            </div>


                {/* Top Rated Providers  */}
            
            <TopRatedProviders></TopRatedProviders>


                {/* How It Works  */}

            <HowItWorks></HowItWorks>

                {/* Why Learn With Us  */}
                
            <WhyLearnWithUs></WhyLearnWithUs>
                

        </div>
    );
};

export default Home;