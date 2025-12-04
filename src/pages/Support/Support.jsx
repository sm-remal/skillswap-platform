import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import support from "../../assets/about/support1.jpg"
import {
    FiMail,
    FiUser,
    FiMessageCircle,
    FiChevronDown,
    FiChevronUp,
    FiHeart, // Added for a thank you icon
    FiHeadphones, // Added for support icon
} from "react-icons/fi";
import "aos/dist/aos.css";
import AOS from "aos";

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800, 
    once: true,   
});

// --- Data for the FAQ section ---
const faqs = [
    {
        question: "How do I create an account?",
        answer: "Click on **Sign Up** at the top-right corner and fill in your details. You'll receive a confirmation email to activate your account. Be sure to check your spam folder!",
    },
    {
        question: "How do I add a new product or service?",
        answer: "After logging in, navigate to the **Dashboard**, then click the **+ Add Listing** button. Fill in all required product details, including images, and submit for review.",
    },
    {
        question: "How can I reset my password?",
        answer: "Go to the **Login** page, click the **'Forgot Password?'** link, and a password reset link will be sent to your registered email address.",
    },
    {
        question: "What is your refund policy?",
        answer: "We offer a 30-day money-back guarantee for all premium services. Please review our full Terms and Conditions for specific product exclusions.",
    },
    {
        question: "How do I contact technical support?",
        answer: "For technical issues, please use the contact form below or email us directly at **support@skillswap.com** for a guaranteed 24-hour response time.",
    },
];

// --- Animation Variants ---
const faqItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: "auto",
        transition: { type: "tween", duration: 0.3 },
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: { type: "tween", duration: 0.3 },
    },
};

const inputVariants = {
    rest: { scale: 1, borderColor: '#d1d5db' },
    focus: { scale: 1.01, borderColor: '#8b5cf6', boxShadow: '0 0 0 4px rgba(139, 92, 246, 0.2)' } // Purple shadow
}


// --- Main Component ---
const EnhancedSupport = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [openFAQ, setOpenFAQ] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call delay
        setTimeout(() => {
            setIsSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 500);
    };

    return (
        <div className="container mx-auto px-4 py-16 space-y-12 bg-gray-100 min-h-screen md:px-7">

            {/* Hero Section */}
            <section className="text-center space-y-6" data-aos="fade-up">
                <FiHeadphones className="mx-auto text-6xl text-purple-600 mb-4" />
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Dedicated <span className="text-purple-600">Support Center</span>
                </h1>
                <p className="text-black max-w-2xl mx-auto text-xl font-light">
                    We're committed to your success. Find instant answers below or connect with our expert team for personalized assistance.
                </p>
            </section>

            {/* Illustration & Quick Links */}
            <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-1 pl-4" data-aos="fade-right" data-aos-delay="100">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Immediate Help?</h2>
                    <p className="text-gray-600 mb-6">Our extensive knowledge base is available 24/7. Use the search bar in the FAQ section or check out these quick links:</p>
                    <ul className="space-y-3">
                        <li className="text-purple-600 font-medium hover:text-purple-800 transition"><a href="#">→ Getting Started Guide</a></li>
                        <li className="text-purple-600 font-medium hover:text-purple-800 transition"><a href="#">→ Billing & Payments</a></li>
                        <li className="text-purple-600 font-medium hover:text-purple-800 transition"><a href="#">→ Community Forum</a></li>
                    </ul>
                </div>
                <div className="lg:col-span-2" data-aos="fade-left" data-aos-delay="200">
                    {/* Real-world application would use an illustrative SVG or high-quality image */}
                    <img src={support} alt="" className="h-[400px] w-full pr-3" />

                </div>
            </div>

            <hr className="border-gray-300" />

            {/* FAQ Section */}
            <section className="space-y-10" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center text-purple-700">Frequently Asked Questions</h2>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            variants={faqItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="bg-white border-2 border-purple-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <button
                                className={`w-full text-left p-5 flex justify-between items-center transition-colors duration-300 ${openFAQ === idx
                                        ? "bg-purple-50 text-purple-700"
                                        : "hover:bg-gray-50 text-gray-800"
                                    }`}
                                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                aria-expanded={openFAQ === idx}
                                aria-controls={`faq-answer-${idx}`}
                            >
                                <h3 className="font-semibold text-lg">{faq.question}</h3>
                                {openFAQ === idx ? (
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: 180 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FiChevronUp size={24} className="min-w-[24px]" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ rotate: 180 }}
                                        animate={{ rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FiChevronDown size={24} className="min-w-[24px]" />
                                    </motion.div>
                                )}
                            </button>

                            <AnimatePresence>
                                {openFAQ === idx && (
                                    <motion.div
                                        id={`faq-answer-${idx}`}
                                        key="answer"
                                        variants={answerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="px-5 pb-5 pt-0"
                                    >
                                        <p className="text-gray-600 leading-relaxed border-t border-purple-200 pt-4">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>

            <hr className="border-gray-300" />

            {/* Contact Form */}
            <section className="max-w-[1480px] mx-auto" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center text-purple-700">Get in Touch Directly</h2>

                <div className="grid lg:grid-cols-2 gap-6 items-start">

                    {/* FORM */}
                    <motion.div
                        className="bg-white border-4 border-purple-200 rounded-3xl p-8 shadow-2xl space-y-6"
                        initial={{ scale: 0.95 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center p-8 bg-green-50 rounded-xl"
                            >
                                <FiHeart className="mx-auto text-6xl text-green-500 mb-4" />
                                <h3 className="text-2xl font-bold text-green-700">Message Sent Successfully!</h3>
                                <p className="text-green-600 mt-2">
                                    Thank you for reaching out. We'll respond within 24 hours.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Name */}
                                <motion.div
                                    initial="rest"
                                    whileFocus="focus"
                                    variants={inputVariants}
                                    className="relative group border-2 border-gray-300 rounded-xl transition-all"
                                >
                                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Full Name"
                                        required
                                        className="w-full bg-transparent px-10 py-3 focus:outline-none"
                                    />
                                </motion.div>

                                {/* Email */}
                                <motion.div
                                    initial="rest"
                                    whileFocus="focus"
                                    variants={inputVariants}
                                    className="relative group border-2 border-gray-300 rounded-xl transition-all"
                                >
                                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email Address"
                                        required
                                        className="w-full bg-transparent px-10 py-3 focus:outline-none"
                                    />
                                </motion.div>

                                {/* Message */}
                                <motion.div
                                    initial="rest"
                                    whileFocus="focus"
                                    variants={inputVariants}
                                    className="relative group border-2 border-gray-300 rounded-xl transition-all"
                                >
                                    <FiMessageCircle className="absolute left-3 top-3 text-gray-400" size={20} />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us how we can help..."
                                        required
                                        rows={5}
                                        className="w-full bg-transparent px-10 py-3 focus:outline-none resize-none"
                                    />
                                </motion.div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-purple-600 text-white font-bold py-3 rounded-xl"
                                >
                                    Submit Request
                                </motion.button>

                            </form>
                        )}
                    </motion.div>

                    {/* MAP SECTION */}
                    <div
                        className="w-full h-[440px] rounded-3xl overflow-hidden shadow-xl border-4 border-purple-200"
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8435981224426!2d90.39030577501086!3d23.750885088748583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8949186450d%3A0xd0c737d3fa029b5c!2sDhanmondi%20Lake!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            className="border-none"
                            allowFullScreen=""
                        ></iframe>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default EnhancedSupport;