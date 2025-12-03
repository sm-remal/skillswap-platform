import React from 'react';
import { motion } from 'framer-motion';
import {
    Shield, 
    Database, 
    Zap, 
    Cookie, 
    Lock, 
    RefreshCcw, 
    Mail, 
} from 'lucide-react';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Header = () => (
    <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10 p-4 bg-purple-50 rounded-xl"
    >
        <Shield className="w-12 h-12 text-purple-600 mx-auto mb-3" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Privacy <span className="text-purple-600">Policy</span>
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
            Last Updated: December 4, 2025
        </p>
    </motion.div>
);

const PolicySection = ({ icon: Icon, title, children, delay }) => (
    <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: delay || 0 }}
        className="mb-8 border-b border-gray-100 pb-6"
    >
        <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-3">
            <Icon className="w-6 h-6 text-purple-600 mr-3 p-1 bg-purple-100 rounded-full" />
            {title}
        </h2>
        <p className="text-gray-600 leading-relaxed pl-9">
            {children}
        </p>
    </motion.div>
);

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 rounded-3xl border border-gray-100">
                
                <Header />

                <motion.p 
                    className="text-gray-700 mb-8 border-l-4 border-purple-500 pl-4 bg-purple-50 p-3 rounded-lg text-lg italic"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    At <span className="font-extrabold text-purple-600">SkillSwap</span>, your privacy is
                    very important to us. We are committed to protecting the personal
                    information of our users and ensuring a safe browsing experience.
                </motion.p>

                <PolicySection 
                    icon={Database} 
                    title="Information We Collect"
                    delay={0.1}
                >
                    We may collect personal information such as name, email address, and
                    contact details when you interact with our website, subscribe to
                    newsletters, or make a purchase. We also collect non-personal
                    information such as browser type, pages visited, and time spent on our
                    website to improve our services and understand user behavior.
                </PolicySection>

                <PolicySection 
                    icon={Zap} 
                    title="How We Use Your Information"
                    delay={0.2}
                >
                    The information collected is used exclusively to provide better services, process
                    orders efficiently, send relevant updates and valuable newsletters, and enhance your overall browsing
                    experience. <span className="font-semibold text-purple-700">We never sell or share your personal information with
                    third parties for marketing purposes.</span>
                </PolicySection>

                <PolicySection 
                    icon={Cookie} 
                    title="Cookies"
                    delay={0.3}
                >
                    Our website uses cookies (small data files stored on your device) to enhance user experience, analyze site traffic,
                    and remember user preferences. These are essential for functionality. You can choose to disable cookies in
                    your browser settings, but please note that some features of the website may not function
                    properly.
                </PolicySection>

                <PolicySection 
                    icon={Lock} 
                    title="Data Security"
                    delay={0.4}
                >
                    We implement reasonable technical and administrative security measures, including encryption and access control, to protect your information
                    from unauthorized access, alteration, or disclosure. However, no
                    online service is 100% secure, so we cannot guarantee absolute
                    security against all threats.
                </PolicySection>

                <PolicySection 
                    icon={RefreshCcw} 
                    title="Changes to This Policy"
                    delay={0.5}
                >
                    SkillSwap may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We
                    will notify you of any significant changes by posting the new policy here. We
                    recommend checking this page periodically to stay informed about how
                    we protect your information.
                </PolicySection>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-10 text-center p-6 bg-purple-50 rounded-xl"
                >
                    <p className="text-gray-700 text-lg font-medium">
                        If you have any questions about our Privacy Policy, please contact us
                        directly at:
                    </p>
                    <div className="flex items-center justify-center mt-3">
                        <Mail className="w-5 h-5 text-purple-600 mr-2" />
                        <span className="text-xl font-semibold text-purple-600 hover:text-purple-700 transition">
                            support@skillSwap.com
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;