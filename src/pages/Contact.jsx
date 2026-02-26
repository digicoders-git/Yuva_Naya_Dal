import { motion } from 'framer-motion';
import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineLocationMarker,
    HiChevronRight,
    HiOutlineChatAlt2,
    HiOutlineClock,
    HiOutlineArrowRight
} from 'react-icons/hi';
import { FaWhatsapp, FaFacebookMessenger, FaMapMarkedAlt } from 'react-icons/fa';
import AnimatedPage from '../components/AnimatedPage';
import { flag } from '../utils/images';
import LeadershipSection from '../components/LeadershipSection';

const Contact = () => {
    return (
        <AnimatedPage>
            {/* 1. CINEMATIC HEADER */}
            <div className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden bg-navy-flag text-center rounded-b-[60px] md:rounded-b-[100px] shadow-3xl mx-2 md:mx-4 mb-16 md:mb-24 px-6 mt-16">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <motion.img
                    src={flag}
                    animate={{ rotate: [0, 5, 0], y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute top-10 right-[-5%] w-64 md:w-96 opacity-20 pointer-events-none"
                />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-16 md:w-24 h-2 bg-saffron mx-auto rounded-full mb-10 shadow-lg shadow-saffron/30"
                    />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl"
                    >
                        संपर्क <span className="text-saffron italic">करें</span>
                    </motion.h2>
                    <p className="text-xl md:text-3xl text-slate-300 font-medium italic leading-relaxed px-4">
                        "आपकी समस्या, हमारा संकल्प। युवा न्याय दल आपके साथ हर कदम पर खड़ा है।"
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl pb-32">
                <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-stretch">

                    {/* 2. CONTACT INFORMATION (Left Side) - 5 Columns */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="mb-8">
                            <span className="text-saffron font-black uppercase tracking-[0.3em] text-sm block mb-4">Contact Info</span>
                            <h3 className="text-3xl md:text-5xl font-black text-navy-flag leading-tight">सीधे हमसे <span className="text-saffron">जुड़ें</span></h3>
                        </div>

                        <InfoCard
                            icon={<HiOutlineLocationMarker size={32} />}
                            title="मुख्य कार्यालय (Headquarters)"
                            desc="युवा न्याय दल भवन, निकट विधानसभा, लखनऊ, उत्तर प्रदेश - 226001"
                            color="bg-saffron/10 text-saffron"
                        />


                        {/* Timing Card */}
                        <div className="bg-slate-50 p-8 md:p-10 rounded-[40px] border border-slate-100 flex items-center gap-6 shadow-sm">
                            <div className="p-4 bg-white rounded-3xl text-navy-flag shadow-md"><HiOutlineClock size={32} /></div>
                            <div>
                                <h5 className="font-black text-navy-flag text-lg">कार्यकाल समय</h5>
                                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">सोम - शनि | 10AM - 6PM</p>
                            </div>
                        </div>

                        {/* Quick Chat Buttons */}
                        <div className="mt-4 flex flex-right flex-wrap gap-4">
                            <button className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-6 rounded-2xl font-black shadow-xl hover:scale-105 transition-transform">
                                <FaWhatsapp size={24} /> WhatsApp
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-3 bg-[#0084FF] text-white py-4 px-6 rounded-2xl font-black shadow-xl hover:scale-105 transition-transform">
                                <FaFacebookMessenger size={24} /> Messenger
                            </button>
                        </div>
                    </div>

                    {/* 3. PREMIUM CONTACT FORM (Right Side) - 7 Columns */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-white p-8 md:p-16 h-200 rounded-[60px] shadow-[0_50px_100px_-20px_rgba(1,23,59,0.1)] border border-slate-100 relative overflow-hidden"
                    >
                        {/* Decorative background logo */}
                        <div className="absolute top-[-5%] right-[-5%] w-64 h-64 bg-saffron/5 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <div className="mb-12 flex items-center gap-6">
                                <span className="p-4 bg-navy-flag text-white rounded-2xl shadow-lg"><HiOutlineChatAlt2 size={32} /></span>
                                <div>
                                    <h4 className="text-2xl md:text-3xl font-black text-navy-flag uppercase">शिकायत एवं सुझाव</h4>
                                    <p className="text-slate-400 font-bold text-xs md:text-sm tracking-widest mt-1">FILL THE FORM BELOW</p>
                                </div>
                            </div>

                            <form className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-navy-flag font-black text-sm uppercase tracking-widest ml-4">आपका नाम</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full p-6 md:p-7 bg-slate-50 rounded-[28px] md:rounded-[32px] border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none font-bold text-navy-flag"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-navy-flag font-black text-sm uppercase tracking-widest ml-4">मोबाइल नंबर</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full p-6 md:p-7 bg-slate-50 rounded-[28px] md:rounded-[32px] border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none font-bold text-navy-flag"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-navy-flag font-black text-sm uppercase tracking-widest ml-4">ईमेल एड्रेस</label>
                                    <input
                                        type="email"
                                        placeholder="yourname@gmail.com"
                                        className="w-full p-6 md:p-7 bg-slate-50 rounded-[28px] md:rounded-[32px] border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none font-bold text-navy-flag"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-navy-flag font-black text-sm uppercase tracking-widest ml-4">विषय / समस्या</label>
                                    <textarea
                                        rows="4"
                                        placeholder="अपनी समस्या या संदेश यहाँ विस्तार से लिखें..."
                                        className="w-full p-6 md:p-8 bg-slate-50 rounded-[35px] md:rounded-[40px] border-2 border-transparent focus:border-saffron focus:bg-white transition-all outline-none font-bold text-navy-flag resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-navy-flag text-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] font-black text-xl md:text-2xl shadow-2xl hover:bg-saffron hover:shadow-saffron/30 transition-all flex items-center justify-center gap-6 group"
                                >
                                    संदेश भेजें <HiOutlineArrowRight size={32} className="group-hover:translate-x-4 transition-transform" />
                                </motion.button>
                                <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                                    युवा न्याय दल की टीम 24 घंटे के भीतर संपर्क करेगी
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Leadership Message Section */}
            <LeadershipSection />

            <div className="container mx-auto px-6 max-w-7xl pb-32">
                {/* 4. MAP PREVIEW SECTION (Decorative) */}
                <div className="mt-32 md:mt-0 relative overflow-hidden rounded-[40px] md:rounded-[80px] h-[300px] md:h-[500px] bg-slate-200 shadow-2xl group">
                    <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover  opacity-50 group-hover:-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-flag/90 via-navy-flag/40 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                        <div className="bg-saffron p-6 md:p-8 rounded-full shadow-2xl mb-8 animate-bounce"><FaMapMarkedAlt size={40} md:size={60} /></div>
                        <h4 className="text-3xl md:text-6xl font-black mb-4">मुख्यालय पधारें</h4>
                        <p className="text-lg md:text-2xl text-slate-200 max-w-2xl font-medium italic">"लखनऊ स्थित हमारे मुख्यालय में आपका स्वागत है। न्याय की लड़ाई में हिस्सा बनने के लिए हमसे सीधा संवाद करें।"</p>
                        <button className="mt-10 bg-white text-navy-flag px-10 py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-saffron transition-all">
                            दिशा-निर्देश प्राप्त करें (Map)
                        </button>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

const InfoCard = ({ icon, title, desc, color }) => (
    <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-white p-5 md:p-10 rounded-[35px] md:rounded-[40px] shadow-xl border border-slate-100 flex flex-col gap-4 md:gap-6 group h-full overflow-hidden"
    >
        <div className={`w-14 h-14 md:w-20 md:h-20 rounded-[20px] md:rounded-[32px] flex items-center justify-center transition-transform group-hover:rotate-6 shadow-lg shrink-0 ${color}`}>
            {icon}
        </div>
        <div className="flex-1 min-w-0">
            <h4 className="text-lg md:text-2xl font-black text-navy-flag mb-1 md:mb-2 truncate">{title}</h4>
            <p className="text-[13px] sm:text-sm md:text-lg text-slate-500 font-bold leading-tight break-words">
                {desc}
            </p>
        </div>
        <div className="h-1 w-10 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-saffron/30 transition-all duration-500 shrink-0" />
    </motion.div>
);

const LeadershipContact = ({ img, name, title, subtitle, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-white p-8 rounded-[50px] shadow-2xl border border-slate-100 flex flex-col items-center gap-6 relative group overflow-hidden"
    >
        <div className="absolute inset-0 bg-saffron opacity-0 group-hover:opacity-5 transition-opacity" />
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-[35px] overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform">
            <img src={img} className="w-full h-full object-cover" />
        </div>
        <div>
            <h4 className="text-xl md:text-2xl font-black text-navy-flag">{name}</h4>
            <div className="flex flex-col gap-1 mt-2">
                <span className="text-saffron font-bold text-xs md:text-sm uppercase tracking-widest">{title}</span>
                {subtitle && <span className="text-slate-400 font-bold text-[10px] md:text-xs tracking-tight">{subtitle}</span>}
            </div>
        </div>
        <div className="h-1 w-12 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-saffron/30 transition-all duration-500" />
    </motion.div>
);

export default Contact;
