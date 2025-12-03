import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiArrowRight, FiUser, FiCalendar } from 'react-icons/fi';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Image Imports
import dataBlog from "../../assets/Blogs/dataBlog.jpg"
import englishBlog from "../../assets/Blogs/englishBlog.jpg"
import financialBlog from "../../assets/Blogs/financialBlog.jpg"
import machineBlog from "../../assets/Blogs/machinBlog.jpg"
import startupBlogs from "../../assets/Blogs/startupBlog.jpg"
import uiDesignBlog from "../../assets/Blogs/uiDesignBlog.jpg"
import reactBlog from "../../assets/Blogs/reactBlog.jpg"

// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
});

// --- UPDATED Dummy Data for Blog Posts ---
const blogPosts = [
    {
        id: 1,
        title: "Mastering State Management in React with Hooks",
        summary: "A deep dive into useState, useEffect, and custom hooks to handle complex application state effortlessly.",
        author: "Alex J.",
        date: "Oct 28, 2025",
        category: "Development",
        imageUrl: reactBlog,
    },
    {
        id: 2,
        title: "5 Strategies to Boost Your Spoken English Fluency Today",
        summary: "Practical tips and daily habits to significantly improve your pronunciation and conversational confidence, starting now.",
        author: "Maria S.",
        date: "Dec 3, 2025",
        category: "Language Skills",
        imageUrl: englishBlog,
    },
    {
        id: 3,
        title: "Data Analysis with Excel: Essential Pivot Tables and VLOOKUP",
        summary: "Unlock the power of your spreadsheets. Learn to transform raw data into actionable insights using core Excel functions.",
        author: "Michael P.",
        date: "Nov 25, 2025",
        category: "Data Analysis",
        imageUrl: dataBlog,
    },
    {
        id: 4,
        title: "Introduction to Machine Learning: Training Your First Model",
        summary: "A beginner-friendly guide to understanding algorithms, datasets, and the steps required to build a basic ML application.",
        author: "Dr. Anya R.",
        date: "Nov 19, 2025",
        category: "Machine Learning",
        imageUrl: machineBlog,
    },
    {
        id: 5,
        title: "Your First Investment: A Beginner's Guide to Financial Planning",
        summary: "Demystifying stocks, bonds, and mutual funds. Create a solid financial plan for long-term wealth building.",
        author: "Emily T.",
        date: "Nov 12, 2025",
        category: "Finance",
        imageUrl: financialBlog,
    },
    {
        id: 6,
        title: "From Idea to Launch: The Essentials of Entrepreneurship & Startups",
        summary: "The critical steps in validating a business idea, securing early funding, and creating a minimum viable product (MVP).",
        author: "David L.",
        date: "Oct 5, 2025",
        category: "Entrepreneurship",
        imageUrl: startupBlogs,
    },
    {
        id: 7,
        title: "10 Essential Tailwind CSS Tricks for Rapid UI Development",
        summary: "Speed up your workflow dramatically with these powerful, lesser-known utility class combinations.",
        author: "Jessica M.",
        date: "Sep 20, 2025",
        category: "Development",
        imageUrl: uiDesignBlog,
    },
];

// --- Animation Variants for Cards ---
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
    hover: { scale: 1.03, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" },
};

const Blogs = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const featuredPost = filteredPosts[0];
    const recentPosts = filteredPosts.slice(1);

    const uniqueCategories = [...new Set(blogPosts.map(post => post.category))];

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-16 space-y-16">

                {/* --- 1. Hero Section --- */}
                <section className="text-center space-y-4" data-aos="fade-up">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
                    >
                        Our Expert <span className="text-purple-600">Learning Hub</span>
                    </motion.h1>
                    <p className="text-black max-w-3xl mx-auto text-xl font-light">
                        Dive into practical knowledge on Development, Finance, Data Science, and essential Life Skills.
                    </p>
                </section>

                <hr className="border-gray-200" />

                {/* --- 2. Featured Post & Search/Filter --- */}
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Featured Post (2/3 width) */}
                    {featuredPost && (
                        <motion.div
                            data-aos="fade-right"
                            data-aos-delay="200"
                            className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {/* FEATURED POST IMAGE FIX */}
                            <div className="h-96 w-full relative">
                                <img 
                                    src={featuredPost.imageUrl} 
                                    alt={featuredPost.title} 
                                    className="w-full h-full object-cover" 
                                    loading="lazy"
                                />
                            </div>
                            
                            <div className="p-8 space-y-5">
                                <span className="inline-block bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {featuredPost.category}
                                </span>
                                <h2 className="text-4xl font-bold text-gray-900 leading-snug hover:text-purple-600 transition duration-300 cursor-pointer">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-gray-600 text-lg line-clamp-3">{featuredPost.summary}</p>

                                <div className="flex items-center text-gray-500 space-x-4 text-sm pt-2">
                                    <div className="flex items-center space-x-1">
                                        <FiUser size={16} />
                                        <span>{featuredPost.author}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <FiCalendar size={16} />
                                        <span>{featuredPost.date}</span>
                                    </div>
                                </div>
                                
                                <button className="flex items-center text-purple-600 font-semibold mt-4 hover:text-purple-700 transition">
                                    Read Full Article
                                    <FiArrowRight className="ml-2" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Search Bar & Categories (1/3 width) */}
                    <div className="lg:col-span-1 space-y-8" data-aos="fade-left" data-aos-delay="300">
                        <div className="p-6 bg-gray-50 rounded-xl shadow-md border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Search Articles</h3>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search by title or keyword..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                                />
                                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            </div>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-xl shadow-md border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                            <ul className="space-y-3">
                                {uniqueCategories.map(cat => (
                                    <li key={cat} className="flex justify-between items-center text-gray-600 hover:text-purple-600 cursor-pointer transition">
                                        <span>{cat}</span>
                                        <span className="text-sm font-semibold">({blogPosts.filter(p => p.category === cat).length})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* --- 3. Recent Posts Grid --- */}
                <section className="space-y-10 pt-10">
                    <h2 className="text-4xl font-extrabold text-gray-900 text-center" data-aos="fade-up">
                        Recent Posts
                    </h2>
                    
                    {filteredPosts.length === 0 && (
                        <p className="text-center text-xl text-gray-500">No posts found matching "{searchTerm}".</p>
                    )}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col cursor-pointer"
                            >
                                {/* RECENT POST IMAGE FIX */}
                                <div className="h-48 w-full relative">
                                    <img 
                                        src={post.imageUrl} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover" 
                                        loading="lazy"
                                    />
                                </div>
                                
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-2">
                                        {post.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-purple-700 transition">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">{post.summary}</p>
                                    
                                    <div className="mt-auto flex justify-between items-center border-t border-gray-100 pt-4 text-sm text-gray-500">
                                        <div className="flex items-center space-x-1">
                                            <FiUser size={14} />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <FiCalendar size={14} />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blogs;