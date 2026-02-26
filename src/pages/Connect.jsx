import { motion } from 'framer-motion';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
    FaTelegramPlane,
    FaArrowRight
} from 'react-icons/fa';
import AnimatedPage from '../components/AnimatedPage';

const Connect = () => {
    return (
        <AnimatedPage>
            {/* Header / Hero */}
            <div className="relative pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden bg-navy-flag text-center rounded-b-[40px] md:rounded-b-[60px] shadow-2xl mx-2 md:mx-4 mb-10 md:mb-20 px-4 md:px-6">
                <div className="absolute inset-x-0 bottom-0 top-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-16 md:w-24 h-1.5 md:h-2 bg-saffron mx-auto rounded-full mb-8 md:mb-10 shadow-lg shadow-saffron/20"
                />
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6 drop-shadow-xl"
                >
                    Connect <span className="text-saffron">With Us</span>
                </motion.h2>
                <p className="text-base md:text-2xl text-slate-100 max-w-4xl mx-auto italic font-medium leading-relaxed px-2">
                    "हमसे सोशल मीडिया के माध्यम से जुड़ें और युवा न्याय दल की प्रत्येक गतिविधि और सभा की जानकारी प्राप्त करें।"
                </p>
            </div>

            <div className="container mx-auto px-6 max-w-6xl pb-20 md:pb-32">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    <SocialBox
                        icon={<FaFacebookF size={32} md:size={40} />}
                        name="Facebook"
                        color="bg-[#1877F2]"
                        handle="@yuvanyaydal"
                        delay={0.1}
                    />
                    <SocialBox
                        icon={<FaInstagram size={32} md:size={40} />}
                        name="Instagram"
                        color="bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4]"
                        handle="@yuva_nyay_dal"
                        delay={0.2}
                    />
                    <SocialBox
                        icon={<FaTwitter size={32} md:size={40} />}
                        name="Twitter"
                        color="bg-[#1DA1F2]"
                        handle="@yuvanyaydal_int"
                        delay={0.3}
                    />
                    <SocialBox
                        icon={<FaYoutube size={32} md:size={40} />}
                        name="YouTube"
                        color="bg-[#FF0000]"
                        handle="Yuva Nyay Dal Official"
                        delay={0.4}
                    />
                    <SocialBox
                        icon={<FaWhatsapp size={32} md:size={40} />}
                        name="WhatsApp"
                        color="bg-[#25D366]"
                        handle="Join Updates Group"
                        delay={0.5}
                    />
                    <SocialBox
                        icon={<FaTelegramPlane size={32} md:size={40} />}
                        name="Telegram"
                        color="bg-[#0088CC]"
                        handle="@yuvanyaydal"
                        delay={0.6}
                    />
                </div>

                {/* Membership CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 md:p-12 rounded-[40px] md:rounded-[50px] shadow-2xl border-2 border-dashed border-navy-flag/20 mt-20 md:mt-32 text-center relative overflow-hidden group"
                >
                    <div className="absolute top-0 left-0 w-2 h-full bg-saffron group-hover:w-full transition-all duration-700 opacity-5" />
                    <h3 className="text-2xl md:text-4xl font-extrabold text-navy-flag mb-4 md:mb-6 leading-tight">राष्ट्र निर्माण में अपनी भूमिका सुनिश्चित करें</h3>
                    <p className="text-base md:text-xl text-slate-500 mb-8 md:mb-10 max-w-3xl mx-auto font-medium">
                        युवा न्याय दल (अराजनैतिक) का हिस्सा बनें और समाज में सकारात्मक परिवर्तन लाएं।
                        आज ही सदस्य बनें!
                    </p>
                    <button className="bg-navy-flag hover:bg-saffron text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl md:rounded-[22px] font-black text-lg md:text-xl shadow-xl hover:shadow-saffron/20 transition-all flex items-center justify-center gap-4 md:gap-6 mx-auto group">
                        Be a Member <FaArrowRight className="group-hover:translate-x-4 transition-transform" />
                    </button>
                    <p className="text-[10px] md:text-sm text-slate-400 font-bold tracking-widest uppercase mt-8 md:mt-12 italic">Join the Justice Movement Today</p>
                </motion.div>
            </div>
        </AnimatedPage>
    );
};

const SocialBox = ({ icon, name, color, handle, delay }) => (
    <motion.a
        href="#"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        whileHover={{ y: -10, scale: 1.05 }}
        className="bg-white p-8 md:p-10 rounded-[40px] md:rounded-[50px] shadow-xl border border-slate-100 flex flex-col items-center gap-4 md:gap-6 text-center group cursor-pointer"
    >
        <span className={`${color} text-white w-20 md:w-24 h-20 md:h-24 rounded-[30px] md:rounded-[35px] flex items-center justify-center shadow-xl md:shadow-2xl transition-transform group-hover:rotate-12`}>
            {icon}
        </span>
        <div className="flex flex-col gap-1">
            <h4 className="text-xl md:text-2xl font-black text-navy-flag">{name}</h4>
            <p className="text-sm md:text-base text-slate-500 font-bold">{handle}</p>
        </div>
        <div className="mt-2 md:mt-4 px-4 md:px-6 py-1.5 md:py-2 bg-slate-50 rounded-full text-navy-flag font-bold text-[10px] md:text-sm tracking-widest transition-colors group-hover:bg-saffron group-hover:text-white">
            FOLLOW NOW
        </div>
    </motion.a>
);

export default Connect;
