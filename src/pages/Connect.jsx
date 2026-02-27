import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { HiOutlineSpeakerphone, HiOutlineUserGroup, HiOutlineLightBulb } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Connect = () => {
    const navigate = useNavigate();
    
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
                            हमसे जुड़ें
                        </h1>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="h-1 w-40 bg-gradient-to-r from-saffron via-white to-green-flag mx-auto mb-6"
                        />
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            सोशल मीडिया पर हमसे जुड़ें और हर अपडेट पाएं
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Social Media Cards */}
            <section className="pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            link="https://wa.me/917800250000"
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
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-flag mb-4">
                            हमसे जुड़ने के फायदे
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-1 w-40 bg-gradient-to-r from-saffron via-white to-green-flag mx-auto"
                        />
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <BenefitCard
                            icon={<HiOutlineSpeakerphone size={48} />}
                            title="नवीनतम अपडेट"
                            desc="सभी कार्यक्रमों और गतिविधियों की तुरंत जानकारी"
                            color="text-saffron"
                            delay={0.1}
                        />
                        <BenefitCard
                            icon={<HiOutlineUserGroup size={48} />}
                            title="सीधा संवाद"
                            desc="नेतृत्व के साथ सीधा संपर्क और सुझाव"
                            color="text-navy-flag"
                            delay={0.2}
                        />
                        <BenefitCard
                            icon={<HiOutlineLightBulb size={48} />}
                            title="सक्रिय भागीदारी"
                            desc="सामाजिक कार्यों में सक्रिय योगदान का मौका"
                            color="text-green-flag"
                            delay={0.3}
                        />
                    </div>
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
                                onClick={() => navigate('/contact')}
                                className="bg-white text-navy-flag px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                            >
                                अभी सदस्य बनें
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
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
        className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6 border border-slate-100 hover:shadow-2xl transition-all group"
    >
        <div className={`${color} text-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform`}>
            {icon}
        </div>
        <div className="text-center">
            <h3 className="text-2xl font-bold text-navy-flag mb-2">{name}</h3>
            <p className="text-slate-500 font-medium">{handle}</p>
        </div>
        <div className="mt-2 px-6 py-2 bg-slate-50 rounded-full text-navy-flag font-bold text-sm group-hover:bg-saffron group-hover:text-white transition-all">
            फॉलो करें
        </div>
    </motion.a>
);

const BenefitCard = ({ icon, title, desc, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        whileHover={{ y: -5 }}
        className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all"
    >
        <div className={`${color} mb-4 flex justify-center`}>{icon}</div>
        <h4 className="text-xl font-bold text-navy-flag mb-3">{title}</h4>
        <p className="text-slate-600">{desc}</p>
    </motion.div>
);

export default Connect;
