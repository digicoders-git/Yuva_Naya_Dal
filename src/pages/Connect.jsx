import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { HiOutlineSpeakerphone, HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineArrowRight, HiX, HiOutlineShieldCheck } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { logo } from '../utils/images';
import { NavLink } from 'react-router-dom';
import MembershipModal from '../components/MembershipModal';

const Connect = () => {
    const navigate = useNavigate();
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Dynamic Member Count Logic 
    // Starts at 14000 on March 25, 2026, and increases by 3000 every 6 days
    const baseDate = new Date('2026-03-25T00:00:00Z').getTime();
    const currentDate = new Date().getTime();
    const diffDays = Math.max(0, Math.floor((currentDate - baseDate) / (1000 * 60 * 60 * 24)));
    const dynamicMemberCount = 14000 + (Math.floor(diffDays / 6) * 3000);



    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Hero Section - Modern Design */}
            <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-gradient-to-br from-navy-flag via-slate-900 to-navy-flag min-h-[85vh] flex items-center">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-saffron rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-flag rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block bg-saffron/20 backdrop-blur-sm border border-saffron/30 px-6 py-2 rounded-full"
                            >
                                <span className="text-saffron font-bold text-sm uppercase tracking-wider">सोशल मीडिया</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-6xl font-black text-white leading-[1.1]"
                            >
                                हमसे जुड़ें
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-saffron via-white to-green-flag mt-2 text-3xl md:text-5xl">
                                    हर अपडेट पाएं
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg text-slate-300 leading-relaxed"
                            >
                                सोशल मीडिया पर हमसे जुड़ें और युवा न्याय दल की सभी गतिविधियों, कार्यक्रमों और अपडेट्स से जुड़े रहें।
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-wrap gap-4 pt-4"
                            >
                                <button
                                    onClick={() => setIsFormOpen(true)}
                                    className="group bg-gradient-to-r from-saffron to-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-saffron/50 transition-all flex items-center gap-2"
                                >
                                    सदस्य बनें
                                    <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </button>
                                <NavLink
                                    to="/about"
                                    className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
                                >
                                    हमारे बारे में
                                </NavLink>
                            </motion.div>
                        </motion.div>

                        {/* Right - Logo with Modern Design */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex justify-center lg:justify-end"
                        >
                            <motion.div
                                className="relative w-80 h-80"
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Rotating Rings */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-saffron border-r-white"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute inset-2 rounded-full border-4 border-transparent border-b-green-flag border-l-saffron"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                />

                                {/* Logo */}
                                <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center">
                                    <img
                                        src={logo}
                                        alt="Yuva Nyay Dal Logo"
                                        className="w-full h-full object-cover rounded-full p-2"
                                    />
                                </div>

                                {/* Floating Badges */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    className="absolute -top-4 -right-4 bg-saffron text-white px-6 py-3 rounded-full font-bold shadow-xl text-sm"
                                >
                                    {dynamicMemberCount}+ फॉलोवर्स
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                    className="absolute -bottom-4 -left-4 bg-green-flag text-white px-6 py-3 rounded-full font-bold shadow-xl text-sm"
                                >
                                    6 प्लेटफॉर्म
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>


            </section>

            {/* Social Media Cards */}
            <section className="py-16 md:py-15 px-4 md:px-6">
                <div className="container mx-auto max-w-7xl">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10 md:mb-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block bg-saffron/10 text-saffron px-6 py-2 rounded-full font-bold text-sm mb-4"
                        >
                            सोशल मीडिया
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-flag mb-3">
                            हमसे जुड़ें और अपडेट पाएं
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-1 w-24 md:w-40 bg-saffron mx-auto rounded-full mb-4"
                        />
                        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                            सभी प्लेटफॉर्म पर हमें फॉलो करें और हर अपडेट से जुड़े रहें
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <SocialCard
                            icon={<FaFacebookF size={36} />}
                            name="Facebook"
                            handle="@yuvanyaydal"
                            color="bg-[#1877F2]"
                            link="https://www.facebook.com/yuvanyaydal"
                            delay={0.1}
                        />
                        <SocialCard
                            icon={<FaInstagram size={36} />}
                            name="Instagram"
                            handle="@yuva_nyay_dal"
                            color="bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4]"
                            link="https://www.instagram.com/yuva_nyay_dal"
                            delay={0.2}
                        />
                        <SocialCard
                            icon={<FaTwitter size={36} />}
                            name="Twitter"
                            handle="@yuvanyaydal_int"
                            color="bg-[#1DA1F2]"
                            link="https://twitter.com/yuvanyaydal_int"
                            delay={0.3}
                        />
                        <SocialCard
                            icon={<FaYoutube size={36} />}
                            name="YouTube"
                            handle="Yuva Nyay Dal Official"
                            color="bg-[#FF0000]"
                            link="https://www.youtube.com/@yuvanyaydal"
                            delay={0.4}
                        />
                        <SocialCard
                            icon={<FaWhatsapp size={36} />}
                            name="WhatsApp"
                            handle="Join Updates Group"
                            color="bg-[#25D366]"
                            link="https://wa.me/917800392026"
                            delay={0.5}
                        />
                        <SocialCard
                            icon={<FaTelegramPlane size={36} />}
                            name="Telegram"
                            handle="@yuvanyaydal"
                            color="bg-[#0088CC]"
                            link="https://t.me/yuvanyaydal"
                            delay={0.6}
                        />
                    </div>
                </div>
            </section>

            {/* Why Connect Section */}
            <section className="py-16 md:py-15 px-4 md:px-6 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-saffron/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy-flag/5 rounded-full blur-3xl" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block bg-saffron/10 text-saffron px-6 py-2 rounded-full font-bold text-sm mb-4"
                        >
                            क्यों जुड़ें
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-flag mb-4">
                            हमसे जुड़ने के फायदे
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-1 w-24 md:w-40 bg-saffron mx-auto rounded-full mb-6"
                        />
                        <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            युवा न्याय दल के साथ जुड़कर आप समाज में बदलाव का हिस्सा बनते हैं। हर अपडेट, हर गतिविधि और हर कार्यक्रम की जानकारी सबसे पहले पाएं।
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <BenefitCard
                            icon={<HiOutlineSpeakerphone size={48} />}
                            title="नवीनतम अपडेट"
                            desc="सभी कार्यक्रमों और गतिविधियों की तुरंत जानकारी पाएं और हर अपडेट से जुड़े रहें।"
                            color="text-saffron"
                            delay={0.1}
                        />
                        <BenefitCard
                            icon={<HiOutlineUserGroup size={48} />}
                            title="सीधा संवाद"
                            desc="नेतृत्व के साथ सीधा संपर्क करें, अपने सुझाव दें और समाज के विकास में योगदान दें।"
                            color="text-navy-flag"
                            delay={0.2}
                        />
                        <BenefitCard
                            icon={<HiOutlineLightBulb size={48} />}
                            title="सक्रिय भागीदारी"
                            desc="सामाजिक कार्यों में सक्रिय योगदान का मौका पाएं और बदलाव का हिस्सा बनें।"
                            color="text-green-flag"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Website Information Section */}
            <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block bg-navy-flag/10 text-navy-flag px-6 py-2 rounded-full font-bold text-sm mb-4"
                        >
                            हमारे बारे में
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-flag mb-4">
                            युवा न्याय दल- डिजिटल उपस्थिति
                           
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-1 w-24 md:w-40 bg-saffron mx-auto rounded-full mb-6"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6 text-slate-700 leading-relaxed"
                    >
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-lg">
                            <h3 className="text-2xl font-bold text-navy-flag mb-4">सोशल मीडिया पर हमारी उपस्थिति</h3>
                            <p className="text-base md:text-lg mb-4">
                                युवा न्याय दल सभी प्रमुख सोशल मीडिया प्लेटफॉर्म्स पर सक्रिय है। हम Facebook, Instagram, Twitter, YouTube, WhatsApp और Telegram पर नियमित रूप से अपडेट साझा करते हैं। हमारे सोशल मीडिया चैनल्स पर आपको संगठन की सभी गतिविधियों, कार्यक्रमों, और सामाजिक पहलों की जानकारी मिलती है।
                            </p>
                            <p className="text-base md:text-lg">
                                हमारे 10,000+ फॉलोवर्स हमारे साथ जुड़े हुए हैं और हर दिन हमारी पोस्ट्स, वीडियो और लाइव सेशन्स का हिस्सा बनते हैं। आप भी हमसे जुड़ें और युवा शक्ति के इस आंदोलन का हिस्सा बनें।
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-lg">
                            <h3 className="text-2xl font-bold text-navy-flag mb-4">हमारी वेबसाइट के बारे में</h3>
                            <p className="text-base md:text-lg mb-4">
                                यह वेबसाइट युवा न्याय दल की आधिकारिक डिजिटल उपस्थिति है। यहां आपको संगठन के बारे में संपूर्ण जानकारी, हमारे मिशन और विजन, नेतृत्व टीम, गतिविधियों की गैलरी, और संपर्क जानकारी मिलती है।
                            </p>
                            <p className="text-base md:text-lg mb-4">
                                वेबसाइट को आधुनिक तकनीक React और Vite के साथ बनाया गया है, जो तेज़ लोडिंग और बेहतर यूजर एक्सपीरियंस सुनिश्चित करता है। यह पूरी तरह से मोबाइल फ्रेंडली है और सभी डिवाइस पर बेहतरीन तरीके से काम करती है।
                            </p>
                            <p className="text-base md:text-lg">
                                हमारी वेबसाइट पर आप हमारे सभी सोशल मीडिया प्लेटफॉर्म्स से सीधे जुड़ सकते हैं, हमारी गतिविधियों की तस्वीरें देख सकते हैं, और हमसे संपर्क कर सकते हैं। यह एक पारदर्शी और सुलभ मंच है जो युवाओं को संगठन से जोड़ने का काम करता है।
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-saffron/10 to-orange-500/10 rounded-2xl p-6 md:p-8 border-l-4 border-saffron">
                            <h3 className="text-2xl font-bold text-navy-flag mb-4">हमसे जुड़ें और बदलाव का हिस्सा बनें</h3>
                            <p className="text-base md:text-lg mb-4">
                                युवा न्याय दल के साथ जुड़कर आप न केवल एक संगठन का हिस्सा बनते हैं, बल्कि एक बड़े सामाजिक आंदोलन का हिस्सा बनते हैं। हमारे सभी सोशल मीडिया चैनल्स पर हमें फॉलो करें:
                            </p>
                            <ul className="space-y-2 text-base md:text-lg">
                                <li className="flex items-center gap-2">
                                    <span className="text-saffron font-bold">✓</span>
                                    <span>Facebook पर हमारे 5000+ फॉलोवर्स के साथ जुड़ें</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-saffron font-bold">✓</span>
                                    <span>Instagram पर रोजाना की गतिविधियां देखें</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-saffron font-bold">✓</span>
                                    <span>YouTube पर हमारे वीडियो और लाइव सेशन देखें</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-saffron font-bold">✓</span>
                                    <span>WhatsApp और Telegram पर तुरंत अपडेट पाएं</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-navy-flag to-saffron rounded-3xl shadow-2xl p-12 text-center text-white relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                युवा न्याय दल का सदस्य बनें
                            </h3>
                            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                                समाज में सकारात्मक बदलाव लाने के लिए आज ही हमसे जुड़ें
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsFormOpen(true)}
                                className="bg-white text-navy-flag px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                            >
                                अभी सदस्य बनें
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Membership Form Modal */}
            <MembershipModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </div>
    );
};

const SocialCard = ({ icon, name, handle, color, link, delay }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl p-6 md:p-8 flex flex-col items-center gap-4 md:gap-6 border border-slate-100 transition-all group relative overflow-hidden"
    >
        {/* Background Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10 w-full flex flex-col items-center">
            <div className={`${color} text-white w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                {icon}
            </div>
            <div className="text-center mt-4 md:mt-6">
                <h3 className="text-xl md:text-2xl font-bold text-navy-flag mb-2">{name}</h3>
                <p className="text-sm md:text-base text-slate-500 font-medium">{handle}</p>
            </div>
            <div className="mt-4 px-6 py-2.5 bg-slate-50 rounded-full text-navy-flag font-bold text-sm group-hover:bg-saffron group-hover:text-white transition-all shadow-sm">
                फॉलो करें
            </div>
        </div>
    </motion.a>
);

const BenefitCard = ({ icon, title, desc, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100 group relative overflow-hidden"
    >
        {/* Background Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10 text-center">
            <div className={`${color} mb-6 flex justify-center group-hover:scale-110 transition-transform`}>{icon}</div>
            <h4 className="text-xl md:text-2xl font-bold text-navy-flag mb-3">{title}</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">{desc}</p>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-saffron group-hover:w-full transition-all duration-500" />
    </motion.div>
);

export default Connect;
