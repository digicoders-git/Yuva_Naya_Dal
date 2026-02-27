import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Page Header */}
            <section className="pt-32 pb-16 px-6">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-navy-flag mb-4">
                            हमसे संपर्क करें
                        </h1>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="h-1 w-40 bg-gradient-to-r from-saffron via-white to-green-flag mx-auto mb-6"
                        />
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            आपकी समस्या, हमारा संकल्प। युवा न्याय दल आपके साथ है।
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info Cards */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl font-bold text-navy-flag mb-8">संपर्क जानकारी</h2>
                            </motion.div>

                            <ContactCard
                                icon={<HiOutlineLocationMarker size={28} />}
                                title="मुख्य कार्यालय"
                                desc="69/2 Deen Dayal Nagar, Khadra, Nirala Nagar, Lucknow"
                                color="bg-saffron"
                                delay={0.1}
                            />

                            <ContactCard
                                icon={<HiOutlinePhone size={28} />}
                                title="फोन नंबर"
                                desc="+91 78003 92026"
                                color="bg-navy-flag"
                                delay={0.2}
                            />

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
                                className="flex gap-4 pt-4"
                            >
                                <motion.a
                                    href="https://wa.me/917800250000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-6 rounded-2xl font-bold shadow-xl"
                                >
                                    <FaWhatsapp size={24} /> WhatsApp
                                </motion.a>
                                <motion.a
                                    href="tel:+917800250000"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 flex items-center justify-center gap-3 bg-navy-flag text-white py-4 px-6 rounded-2xl font-bold shadow-xl"
                                >
                                    <HiOutlinePhone size={24} /> Call Now
                                </motion.a>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100"
                        >
                            <h3 className="text-3xl font-bold text-navy-flag mb-2">संदेश भेजें</h3>
                            <p className="text-slate-500 mb-8">अपनी समस्या या सुझाव हमें बताएं</p>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-navy-flag font-semibold mb-2">आपका नाम</label>
                                        <input
                                            type="text"
                                            placeholder="नाम दर्ज करें"
                                            className="w-full px-4 py-3 bg-slate-50 rounded-xl border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-navy-flag font-semibold mb-2">मोबाइल नंबर</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full px-4 py-3 bg-slate-50 rounded-xl border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-navy-flag font-semibold mb-2">ईमेल</label>
                                    <input
                                        type="email"
                                        placeholder="yourname@gmail.com"
                                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-navy-flag font-semibold mb-2">विषय</label>
                                    <input
                                        type="text"
                                        placeholder="विषय दर्ज करें"
                                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-navy-flag font-semibold mb-2">संदेश</label>
                                    <textarea
                                        rows="5"
                                        placeholder="अपना संदेश यहाँ लिखें..."
                                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-navy-flag to-saffron text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                                >
                                    संदेश भेजें
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-3xl h-[400px] bg-slate-200 shadow-2xl"
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
