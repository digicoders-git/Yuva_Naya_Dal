import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock, HiOutlineArrowRight } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { logo } from '../utils/images';
import { NavLink } from 'react-router-dom';

const Contact = () => {
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
                                <span className="text-saffron font-bold text-sm uppercase tracking-wider">संपर्क करें</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-6xl font-black text-white leading-[1.1]"
                            >
                                हमसे जुड़ें
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-saffron via-white to-green-flag mt-2 text-3xl md:text-5xl">
                                    आपकी आवाज़ हमारा संकल्प
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg text-slate-300 leading-relaxed"
                            >
                                आपकी समस्या, हमारा संकल्प। युवा न्याय दल हमेशा आपके साथ है। हमसे जुड़ें और समाज में बदलाव का हिस्सा बनें।
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-wrap gap-4 pt-4"
                            >
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <motion.a
                                        href="tel:+917800250000"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group bg-gradient-to-r from-saffron to-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-saffron/50 transition-all flex items-center gap-2"
                                    >
                                        <HiOutlinePhone size={20} />
                                        कॉल करें (1)
                                    </motion.a>
                                    <motion.a
                                        href="tel:+919236968527"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group bg-gradient-to-r from-navy-flag to-slate-800 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-navy-flag/50 transition-all flex items-center gap-2"
                                    >
                                        <HiOutlinePhone size={20} />
                                        कॉल करें (2)
                                    </motion.a>
                                </div>
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
                                    24/7 सेवा
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                    className="absolute -bottom-4 -left-4 bg-green-flag text-white px-6 py-3 rounded-full font-bold shadow-xl text-sm"
                                >
                                    तुरंत जवाब
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>


            </section>

            {/* Main Content */}
            <section className="pt-16 pb-20 px-0 md:px-6">
                <div className="container mx-auto max-w-7xl px-4 md:px-0">
                    {/* Contact Info Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block bg-saffron/10 text-saffron px-6 py-2 rounded-full font-bold text-sm mb-4"
                        >
                            हम आपकी सुनते हैं
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-flag mb-4">
                            आपके सवालों का जवाब देने के लिए तैयार
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-1 w-24 md:w-40 bg-saffron mx-auto rounded-full mb-6"
                        />
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            युवा न्याय दल हमेशा आपके साथ है। आपकी समस्या, सुझाव या कोई भी प्रश्न हो, हमसे जुड़ें। हम आपकी मदद करने के लिए प्रतिबद्ध हैं।
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Contact Info Cards */}
                        <div className="space-y-4 md:space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-navy-flag mb-6 md:mb-8">संपर्क जानकारी</h2>
                            </motion.div>

                            <ContactCard
                                icon={<HiOutlineLocationMarker size={28} />}
                                title="मुख्य कार्यालय"
                                desc="69/2 Deen Dayal Nagar, Khadra, Nirala Nagar, Lucknow"
                                color="bg-saffron"
                                delay={0.1}
                            />

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 border border-slate-100 hover:shadow-xl transition-all"
                            >
                                <div className="bg-navy-flag text-white p-4 rounded-xl shadow-md flex-shrink-0">
                                    <HiOutlinePhone size={28} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-lg font-bold text-navy-flag mb-1">फोन नंबर</h4>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:+917800250000" className="text-slate-600 hover:text-saffron transition-colors">+91 78002 50000</a>
                                        <a href="tel:+919236968527" className="text-slate-600 hover:text-saffron transition-colors">+91 92369 68527</a>
                                    </div>
                                </div>
                            </motion.div>

                            <ContactCard
                                icon={<HiOutlineMail size={28} />}
                                title="ईमेल"
                                desc="yuvanyaydal2026@gmail.com"
                                color="bg-green-flag"
                                delay={0.3}
                            />

                            <ContactCard
                                icon={<HiOutlineClock size={28} />}
                                title="कार्यकाल समय"
                                desc="सोमवार - शनिवार | 10:00 AM - 6:00 PM"
                                color="bg-slate-700"
                                delay={0.4}
                            />

                            {/* Quick Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4"
                            >
                                <motion.a
                                    href="https://wa.me/917800392026"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 flex items-center justify-center gap-2 md:gap-3 bg-[#25D366] text-white py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl font-bold shadow-xl text-sm md:text-base"
                                >
                                    <FaWhatsapp size={20} className="md:w-6 md:h-6" /> <span className="hidden sm:inline">WhatsApp</span><span className="sm:hidden">WhatsApp</span>
                                </motion.a>
                                <div className="flex flex-col gap-3 flex-1">
                                    <motion.a
                                        href="tel:+917800250000"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full flex items-center justify-center gap-2 md:gap-3 bg-navy-flag text-white py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl font-bold shadow-xl text-sm md:text-base transition-all"
                                    >
                                        <HiOutlinePhone size={20} className="md:w-6 md:h-6" /> <span className="hidden sm:inline">कॉल करें (1)</span><span className="sm:hidden">Call 1</span>
                                    </motion.a>
                                    <motion.a
                                        href="tel:+919236968527"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full flex items-center justify-center gap-2 md:gap-3 bg-slate-700 text-white py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl font-bold shadow-xl text-sm md:text-base transition-all"
                                    >
                                        <HiOutlinePhone size={20} className="md:w-6 md:h-6" /> <span className="hidden sm:inline">कॉल करें (2)</span><span className="sm:hidden">Call 2</span>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 border border-slate-100"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-navy-flag mb-2">संदेश भेजें</h3>
                            <p className="text-sm md:text-base text-slate-500 mb-6 md:mb-8">अपनी समस्या या सुझाव हमें बताएं</p>

                            <form className="space-y-4 md:space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-navy-flag font-semibold mb-2 text-sm md:text-base">आपका नाम</label>
                                        <input
                                            type="text"
                                            placeholder="नाम दर्ज करें"
                                            className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-slate-50 rounded-lg md:rounded-xl border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-navy-flag font-semibold mb-2 text-sm md:text-base">मोबाइल नंबर</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-slate-50 rounded-lg md:rounded-xl border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-navy-flag font-semibold mb-2 text-sm md:text-base">ईमेल</label>
                                    <input
                                        type="email"
                                        placeholder="yourname@gmail.com"
                                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-slate-50 rounded-lg md:rounded-xl border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-navy-flag font-semibold mb-2 text-sm md:text-base">विषय</label>
                                    <input
                                        type="text"
                                        placeholder="विषय दर्ज करें"
                                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-slate-50 rounded-lg md:rounded-xl border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-navy-flag font-semibold mb-2 text-sm md:text-base">संदेश</label>
                                    <textarea
                                        rows="4"
                                        placeholder="अपना संदेश यहाँ लिखें..."
                                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-slate-50 rounded-lg md:rounded-xl border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-navy-flag to-saffron text-white py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all"
                                >
                                    संदेश भेजें
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-20 px-0 md:px-6">
                <div className="container mx-auto max-w-7xl px-0 md:px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-none md:rounded-3xl h-[400px] bg-slate-200 shadow-2xl"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8!2d80.9!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4MMKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const ContactCard = ({ icon, title, desc, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 border border-slate-100 hover:shadow-xl transition-all"
    >
        <div className={`${color} text-white p-4 rounded-xl shadow-md flex-shrink-0`}>
            {icon}
        </div>
        <div className="flex-1 min-w-0">
            <h4 className="text-lg font-bold text-navy-flag mb-1">{title}</h4>
            <p className="text-slate-600 break-words">{desc}</p>
        </div>
    </motion.div>
);

export default Contact;
