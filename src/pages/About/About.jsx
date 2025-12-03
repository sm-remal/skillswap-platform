import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Award, Rocket, MapPin, BookOpen, CreditCard, TrendingUp } from "lucide-react";

// Example images (replace with your own URLs)
import aboutImg from "../../assets/about/about.jpg";
import milestoneImg from "../../assets/about/milestoneImg.jpg";
import goalImg from "../../assets/about/goalImg.jpg";
import initiativeImg from "../../assets/about/initiative.jpg";
import branchImg from "../../assets/about/branch.jpg";
import departmentImg from "../../assets/about/department.jpg";
import paymentImg from "../../assets/about/paymentimg.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const About = () => {
  const stats = [
    { number: "2500+", label: "Students Trained", icon: Users },
    { number: "500+", label: "Courses Published", icon: BookOpen },
    { number: "120+", label: "Expert Instructors", icon: Award },
    { number: "98%", label: "Success Rate", icon: TrendingUp }
  ];

  const departments = [
    "Web Development",
    "Mobile App Development",
    "Data Science & AI",
    "Digital Marketing",
    "Graphic Design & UI/UX",
    "Cybersecurity"
  ];

  const initiatives = [
    { title: "Scholarship Programs", desc: "Supporting underprivileged students" },
    { title: "Live Mentorship", desc: "One-on-one guidance sessions" },
    { title: "Industry Certification", desc: "Recognized certificates upon completion" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        className="relative bg-blue-600 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Empowering learners worldwide with quality education and practical skills
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="container mx-auto px-4 -mt-16 relative z-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-blue-600" />
              <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 space-y-24">
        {/* Who We Are */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="order-2 md:order-1">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xl font-semibold mb-4">
              WHO WE ARE
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leading the Future of Online Education
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a premier e-learning platform dedicated to providing accessible, 
              high-quality education to learners across the globe. Our mission is to 
              bridge the gap between ambition and achievement through innovative teaching 
              methods and cutting-edge technology.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a focus on practical skills and industry-relevant content, we prepare 
              our students for real-world challenges and help them build successful careers 
              in the digital age.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={aboutImg}
              alt="About Us"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </motion.div>

        {/* Our Goal */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div>
            <img
              src={goalImg}
              alt="Our Goal"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <Target className="w-12 h-12 text-green-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Goal</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To democratize education by making world-class learning accessible to 
              everyone, regardless of their location or background.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Deliver industry-aligned, practical curriculum</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Create engaging and seamless learning experiences</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Foster a global community of lifelong learners</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Prominent Initiatives */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <Rocket className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Programs designed to make quality education accessible and impactful
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training Departments */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center"
        >
          <BookOpen className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Departments</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive courses across multiple domains to match your career goals
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-colors duration-300"
              >
                <p className="font-semibold text-gray-800">{dept}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Branches */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="order-2 md:order-1">
            <MapPin className="w-12 h-12 text-pink-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Presence</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With physical branches in major cities and a robust online platform, 
              we serve students locally and globally. Our presence continues to expand 
              to reach more aspiring learners.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-pink-50 rounded-lg p-4">
                <MapPin className="w-6 h-6 text-pink-600" />
                <span className="font-semibold text-gray-800">Dhaka Branch</span>
              </div>
              <div className="flex items-center gap-4 bg-pink-50 rounded-lg p-4">
                <MapPin className="w-6 h-6 text-pink-600" />
                <span className="font-semibold text-gray-800">Chittagong Branch</span>
              </div>
              <div className="flex items-center gap-4 bg-pink-50 rounded-lg p-4">
                <MapPin className="w-6 h-6 text-pink-600" />
                <span className="font-semibold text-gray-800">Sylhet Branch</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={branchImg}
              alt="Our Branches"
              className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
            />
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <CreditCard className="w-12 h-12 text-red-600 mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Flexible Payment Options
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We support multiple secure payment methods to ensure a smooth and 
                hassle-free enrollment process for all our students.
              </p>
              <div className="flex flex-wrap gap-3">
                {["bKash", "Nagad", "Rocket", "Visa", "Mastercard", "PayPal"].map((method) => (
                  <span
                    key={method}
                    className="px-4 py-2 bg-white rounded-lg shadow text-sm font-semibold text-gray-700"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <img
                src={paymentImg}
                alt="Payment Methods"
                className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning with us and transform your career
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
            Explore Courses
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
