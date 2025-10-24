import React from 'react';
import { FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-gray-800'>
            <div className="sm:footer-horizontal flex flex-col md:flex-row gap-5 md:gap-10 text-white p-10 max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm">
                <div className='flex-1 max-w-[500px]'>
                    <h3 className="footer-title text-white text-2xl font-bold mb-3">Discover SkillSwap</h3>
                    <p>
                        SkillSwap is a platform where you can learn new skills or share your expertise. Explore courses, join easily, and enhance your knowledge. Our goal is to make learning simple, enjoyable, and effective.
                    </p>
                </div>
                <section className='flex flex-col md:flex-row gap-4 md:gap-10 mt-7 md:mt-0 md:ml-24 flex-1'>
                    <div className='flex-1 space-y-3'>
                        <h6 className="footer-title text-white font-semibold">Resources</h6>
                        <p className="link link-hover text-white cursor-pointer hover:underline">Help Center</p>
                        <p className="link link-hover text-white cursor-pointer hover:underline">Privacy Policy</p>
                        <p className="link link-hover text-white cursor-pointer hover:underline">Terms of Service</p>
                        <p className="link link-hover text-white cursor-pointer hover:underline">Blog</p>
                    </div>
                    <div className='flex-1 space-y-3 mt-5 md:mt-0'>
                        <h6 className="footer-title text-white font-semibold">Company</h6>
                        <p className="link link-hover text-white cursor-pointer hover:underline">About Us</p>
                        <p className="link link-hover text-white cursor-pointer hover:underline">Contact</p>
                        <p className="link link-hover text-white cursor-pointer hover:underline">Careers</p>
                        <p className="link link-hover text-white cursor-pointer hover:underline">Press</p>
                    </div>
                    <div className='flex-1 mt-5 md:mt-0'>
                        <h6 className="footer-title text-white font-semibold">Follow Us</h6>
                        <div className="flex gap-5 pt-5 text-white text-2xl">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-transform transform hover:scale-110">
                                <FaTwitter />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-transform transform hover:scale-110">
                                <FaYoutube />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-transform transform hover:scale-110">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;

