import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiMessageCircle, FiChevronDown, FiChevronUp } from "react-icons/fi";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const faqs = [
  {
    question: "How do I create an account?",
    answer: "Click on Sign Up at the top-right corner and fill in your details. You'll receive a confirmation email to activate your account.",
  },
  {
    question: "How do I add a new product?",
    answer: "After logging in, click on your avatar → Add Product. Fill in the product details and submit.",
  },
  {
    question: "How can I reset my password?",
    answer: "Go to the Login page, click 'Forgot Password?', and follow the instructions to reset your password.",
  },
  {
    question: "How do I contact support?",
    answer: "Use the form below or email us directly at support@skillswap.com.",
  },
];

const Support = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      
      {/* Hero Section */}
      <section className="text-center space-y-4" data-aos="fade-up">
        <h1 className="text-5xl font-bold text-gray-800">Support Center</h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          We're here to help! Find answers to common questions or reach out to us directly.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition cursor-pointer"
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800 text-lg">{faq.question}</h3>
                {openFAQ === idx ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
              </div>
              {openFAQ === idx && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 mt-3"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 shadow-xl" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FiUser className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div className="relative">
            <FiMessageCircle className="absolute left-3 top-3 text-gray-400" size={20} />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full border border-gray-300 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Send Message
          </motion.button>
        </form>
      </section>
    </div>
  );
};

export default Support;
