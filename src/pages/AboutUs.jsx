import { motion } from 'framer-motion';
import {
    HiOutlineUserGroup,
    HiOutlineGlobe,
    HiOutlineAcademicCap,
    HiOutlineBriefcase,
    HiOutlineShieldCheck,
    HiOutlineUserCircle,
    HiOutlineFlag,
    HiOutlineLightningBolt,
    HiOutlineSparkles,
    HiOutlineCheckCircle
} from 'react-icons/hi';
import { FaQuoteLeft, FaHandshake, FaBullhorn, FaUsers } from 'react-icons/fa';
import AnimatedPage from '../components/AnimatedPage';
import logo from '../assets/logo.jpeg';
import flag from '../assets/flag.png';

const AboutUs = () => {
    return (
        <AnimatedPage>
            {/* 1. HERO SECTION (Upgraded with Flag & Logo) */}
            <div className="relative h-[450px] md:h-[600px] overflow-hidden bg-navy-flag rounded-b-[40px] md:rounded-b-[80px] shadow-2xl mx-2 md:mx-4 mb-16 md:mb-24">
                {/* Decorative background elements */}
                <div className="absolute inset-x-0 bottom-0 top-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <motion.img
                    src={flag}
                    animate={{ x: [0, 20, 0], rotate: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                    className="absolute top-10 right-[-5%] w-64 md:w-96 opacity-20 pointer-events-none"
                />
                <motion.img
                    src={flag}
                    animate={{ x: [0, -20, 0], rotate: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                    className="absolute bottom-10 left-[-5%] w-64 md:w-96 opacity-10 pointer-events-none"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="relative mb-8"
                    >
                        <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150 animate-pulse" />
                        <img
                            src={logo}
                            className="h-28 w-28 md:h-44 md:w-44 rounded-full border-4 md:border-8 border-white shadow-2xl relative z-10 bg-white p-1"
                        />
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-saffron text-navy-flag px-6 py-1.5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest shadow-xl border border-white/20 whitespace-nowrap">
                            अराजनैतिक संगठन
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl mb-4"
                    >
                        युवा <span className="text-saffron italic">न्याय</span> दल
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 120, md: 200 }}
                        className="h-2 md:h-3 bg-saffron rounded-full shadow-lg shadow-saffron/20"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-slate-300 font-bold uppercase tracking-[0.4em] text-[10px] md:text-sm mt-6"
                    >
                        Social Justice • Equality • Transparency
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl pb-24">

                {/* 2. THE PHILOSOPHY (Intro Section with Image) */}
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center mb-32 md:mb-48">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="p-3 bg-saffron/10 text-saffron rounded-xl"><HiOutlineLightningBolt size={24} /></span>
                            <span className="text-saffron font-black uppercase tracking-widest text-sm">हमारा दर्शन</span>
                        </div>
                        <h2 className="text-3xl md:text-6xl font-black text-navy-flag mb-8 leading-tight">
                            युवा शक्ति: <br />
                            <span className="text-navy-flag/40">राष्ट्र की असली पूंजी</span>
                        </h2>
                        <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed font-medium text-justify">
                            <p className="italic border-l-8 border-green-flag pl-8 py-2">
                                "देश का भविष्य युवाओं के हाथ में है, और यदि उन्हें सही दिशा, अवसर और मंच मिले तो वे राष्ट्र निर्माण में महत्वपूर्ण भूमिका निभा सकते हैं।"
                            </p>
                            <p>
                                युवा न्याय दल एक प्रगतिशील और युवा-नेतृत्व वाला संगठन है, जिसका उद्देश्य समाज में न्याय, समानता और पारदर्शिता को बढ़ावा देना है। हम मानते हैं कि भारत का पुनर्जांतरण केवल जागरूक और संगठित युवाओं द्वारा ही संभव है।
                            </p>
                            <p>
                                हमारा संगठन जाति, धर्म और राजनीति से ऊपर उठकर केवल "न्याय" और "अधिकार" की बात करता है। हम समाज के हर उस व्यक्ति की आवाज हैं जो किसी न किसी रूप में अन्याय का शिकार है।
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-saffron rounded-[60px] md:rounded-[100px] rotate-3 scale-105 opacity-10" />
                        <div className="relative bg-white p-3 md:p-5 rounded-[60px] md:rounded-[100px] shadow-3xl border border-slate-100 overflow-hidden group">
                            <img src="/src/assets/image-13.jpeg" className="w-full h-auto rounded-[50px] md:rounded-[90px] group-hover:scale-110 transition-transform duration-1000" />

                            {/* Stats Overlay (Improved for Mobile) */}
                            <div className="md:absolute md:bottom-10 md:left-10 md:right-10 flex justify-center mt-6 md:mt-0">
                                <div className="bg-navy-flag/90 md:bg-navy-flag/80 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-[35px] md:rounded-[40px] shadow-2xl flex items-center gap-8 md:gap-12 relative z-10 w-full md:w-fit">
                                    <div className="flex-1 text-center">
                                        <h4 className="text-3xl md:text-4xl font-black text-saffron mb-1">10K+</h4>
                                        <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest leading-none">Volunteers</p>
                                    </div>
                                    <div className="w-[1px] h-12 bg-white/20" />
                                    <div className="flex-1 text-center">
                                        <h4 className="text-3xl md:text-4xl font-black text-white mb-1">50+</h4>
                                        <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest leading-none">Districts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 3. CORE VALUES (Interactive Cards with Images) */}
                <div className="mb-32 md:mb-48">
                    <div className="text-center mb-20">
                        <span className="text-green-flag font-black uppercase tracking-[0.4em] text-sm block mb-4">Core Principles</span>
                        <h2 className="text-4xl md:text-7xl font-black text-navy-flag mb-8">संगठन के <span className="text-green-flag">स्तंभ</span></h2>
                        <div className="h-2 w-32 bg-saffron mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        <ValueItem
                            img="/src/assets/image-1.jpeg"
                            icon={<HiOutlineShieldCheck size={32} />}
                            title="न्याय और समानता"
                            desc="समाज के हर वंचित वर्ग को सही दिशा और समान अवसर प्रदान करना हमारा परम धर्म है।"
                        />
                        <ValueItem
                            img="/src/assets/image-5.jpeg"
                            icon={<HiOutlineUserGroup size={32} />}
                            title="लोकतांत्रिक एकता"
                            desc="युवाओं को निर्णय प्रक्रिया में सक्रिय भागीदारी दिलाना और एकजुट करना हमारी ताकत है।"
                        />
                        <ValueItem
                            img="/src/assets/image-10.jpeg"
                            icon={<HiOutlineFlag size={32} />}
                            title="राष्ट्र प्रथम"
                            desc="व्यक्तिगत हितों से ऊपर राष्ट्र के प्रति समर्पण ही हमारी पहचान और हमारा संकल्प है।"
                        />
                    </div>
                </div>

                {/* 4. MISSION & VISION (Split Layout with Watermark Flag) */}
                <div className="relative mb-32 md:mb-48">
                    <img src={flag} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-[0.03] pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-navy-flag p-10 md:p-16 rounded-[40px] md:rounded-[60px] text-white shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-1000"><HiOutlineFlag size={200} /></div>
                            <div className="flex items-center gap-6 mb-12">
                                <span className="p-5 bg-saffron rounded-3xl text-navy-flag shadow-xl shadow-saffron/20"><HiOutlineSparkles size={40} /></span>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-black text-saffron">Vision</h3>
                                    <p className="text-white/30 text-xs font-bold uppercase tracking-[0.3em]">(हमारी दूरदर्शिता)</p>
                                </div>
                            </div>
                            <ul className="space-y-8">
                                <li className="flex gap-6 items-start">
                                    <span className="text-saffron mt-1"><HiOutlineCheckCircle size={28} /></span>
                                    <p className="text-xl md:text-2xl text-slate-100 font-medium leading-snug">एक ऐसा भारत जहाँ हर युवा को बिना किसी भेदभाव के समान अवसर और पूर्ण न्याय मिले।</p>
                                </li>
                                <li className="flex gap-6 items-start">
                                    <span className="text-saffron mt-1"><HiOutlineCheckCircle size={28} /></span>
                                    <p className="text-xl md:text-2xl text-slate-100 font-medium leading-snug">पूर्णतः पारदर्शी, जवाबदेह और भ्रष्टाचार-मुक्त शासन एवं प्रशासनिक व्यवस्था का निर्माण।</p>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 md:p-16 rounded-[40px] md:rounded-[60px] text-navy-flag shadow-2xl border border-slate-100 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] scale-150 rotate-12 group-hover:rotate-[-45deg] transition-transform duration-1000"><HiOutlineGlobe size={200} /></div>
                            <div className="flex items-center gap-6 mb-12">
                                <span className="p-5 bg-green-flag rounded-3xl text-white shadow-xl shadow-green-flag/20"><HiOutlineCheckCircle size={40} /></span>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-black text-green-flag">Mission</h3>
                                    <p className="text-slate-200 text-xs font-bold uppercase tracking-[0.3em]">(हमारा लक्ष्य)</p>
                                </div>
                            </div>
                            <ul className="space-y-8">
                                <li className="flex gap-6 items-center">
                                    <span className="p-3 bg-slate-50 text-green-flag rounded-xl"><HiOutlineAcademicCap size={28} /></span>
                                    <p className="text-lg md:text-xl font-bold text-slate-700">शिक्षा और रोजगार के क्षेत्र में गुणवत्ता और समानता लाना।</p>
                                </li>
                                <li className="flex gap-6 items-center">
                                    <span className="p-3 bg-slate-50 text-green-flag rounded-xl"><HiOutlineUserCircle size={28} /></span>
                                    <p className="text-lg md:text-xl font-bold text-slate-700">युवाओं को देश के नीति-निर्धारण में सक्रिय भागीदार बनाना।</p>
                                </li>
                                <li className="flex gap-6 items-center">
                                    <span className="p-3 bg-slate-50 text-green-flag rounded-xl"><HiOutlineShieldCheck size={28} /></span>
                                    <p className="text-lg md:text-xl font-bold text-slate-700">महिलाओं, किसानों और श्रमिकों के अधिकारों की रक्षा करना।</p>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* 5. THE COMMITMENT (Final Banner with Logo Background) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-navy-flag p-12 md:p-24 rounded-[40px] md:rounded-[80px] text-center overflow-hidden shadow-[0_50px_100px_-20px_rgba(1,23,59,0.3)]"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px]" />
                    <img src={logo} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 opacity-[0.05] grayscale brightness-200 pointer-events-none" />

                    <div className="relative z-10 max-w-5xl mx-auto">
                        <FaQuoteLeft className="text-saffron text-5xl md:text-8xl mx-auto mb-10 opacity-40" />
                        <h3 className="text-2xl md:text-5xl font-black text-white mb-10 leading-snug drop-shadow-lg">
                            "हमारा प्रयास है कि समाज के हर वर्ग — विशेषकर युवाओं, छात्रों, किसानों और मजदूरों — की आवाज़ को मजबूत किया जाए और उनकी समस्याओं का समाधान लोकतांत्रिक तरीके से किया जाए।"
                        </h3>
                        <div className="h-2 w-32 bg-saffron mx-auto rounded-full mb-12 shadow-lg shadow-saffron/20" />
                        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-slate-400 font-bold uppercase tracking-[.3em] text-[10px] md:text-sm">
                            <span className="flex items-center gap-3"><HiOutlineCheckCircle className="text-saffron" /> निस्वार्थ सेवा</span>
                            <span className="flex items-center gap-3"><HiOutlineCheckCircle className="text-saffron" /> मजबूत संगठन</span>
                            <span className="flex items-center gap-3"><HiOutlineCheckCircle className="text-saffron" /> निश्चित न्याय</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatedPage>
    );
};

const ValueItem = ({ img, icon, title, desc }) => (
    <motion.div
        whileHover={{ y: -15 }}
        className="bg-white rounded-[50px] overflow-hidden border border-slate-100 shadow-xl group transition-all duration-500"
    >
        <div className="h-[250px] md:h-[300px] relative overflow-hidden bg-slate-100 flex items-center justify-center">
            <img src={img} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-flag/40 to-transparent" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-saffron/90 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {icon}
            </div>
        </div>
        <div className="p-10 text-center">
            <h4 className="text-2xl font-black text-navy-flag mb-6 group-hover:text-saffron transition-colors">{title}</h4>
            <div className="h-1 w-12 bg-slate-100 mx-auto mb-6 group-hover:bg-saffron/30 transition-all duration-500" />
            <p className="text-slate-500 font-medium leading-loose md:leading-relaxed text-justify italic">{desc}</p>
        </div>
    </motion.div>
);

export default AboutUs;
