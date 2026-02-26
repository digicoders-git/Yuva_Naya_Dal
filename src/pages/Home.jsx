import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import LeadershipSection from '../components/LeadershipSection';
import { logo, flag, galleryImages, image36, image37 } from '../utils/images';
import {
    HiOutlineShieldCheck,
    HiOutlineGlobe,
    HiOutlineUserGroup,
    HiOutlineChartBar,
    HiOutlineArrowNarrowRight,
    HiOutlineSparkles,
    HiOutlineLightBulb,
    HiOutlineScale,
    HiOutlineFingerPrint,
    HiOutlineFire
} from 'react-icons/hi';
import { FaQuoteLeft, FaHandshake, FaBullhorn, FaUsers, FaBalanceScale, FaGraduationCap } from 'react-icons/fa';

const Home = () => {
    // Gallery images for the slider (subset for performance)
    const sliderImages = [1, 5, 10, 15, 20, 25, 30, 35, 36, 37];

    return (
        <AnimatedPage>
            {/* 1. HERO SECTION */}
            <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 pt-10 md:pt-20">
                {/* Background Decorations */}
                <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-saffron/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-5%] left-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-green-flag/10 rounded-full blur-[60px] md:blur-[100px]" />

                {/* Animated Flags in Background */}
                <motion.img
                    src={flag}
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute top-20 md:top-40 left-5 md:left-10 w-20 md:w-48 opacity-10 md:opacity-20 pointer-events-none"
                />
                <motion.img
                    src={flag}
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute bottom-20 md:bottom-40 right-5 md:right-10 w-20 md:w-48 opacity-10 md:opacity-20 pointer-events-none"
                />

                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 md:mb-8">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 80, md: 140 }}
                                className="h-2 bg-saffron rounded-full shadow-lg shadow-saffron/20"
                            />
                            <span className="text-navy-flag font-black uppercase tracking-widest text-[10px] md:text-sm">प्रगतिशील भारत</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-navy-flag leading-[1.1] mb-6 md:mb-8">
                            युवा न्याय दल <br />
                            <span className="text-saffron italic drop-shadow-md">राष्ट्र का संकल्प</span>
                        </h1>
                        <p className="text-lg md:text-2xl lg:text-3xl text-slate-600 leading-relaxed italic mb-8 md:mb-12 border-l-4 md:border-l-8 border-green-flag pl-4 md:pl-8 py-2 font-medium">
                            "देश का भविष्य युवाओं के हाथ में है, और हम उन्हें सही दिशा, अवसर और मंच देने के लिए प्रतिबद्ध हैं।"
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                            <NavLink to="/about" className="bg-navy-flag hover:bg-saffron text-white px-8 md:px-12 py-4 md:py-6 rounded-[24px] md:rounded-[32px] font-black transition-all shadow-xl hover:shadow-saffron/30 text-lg md:text-xl group flex items-center gap-3 md:gap-4">
                                मिशन को जानें <HiOutlineArrowNarrowRight className="group-hover:translate-x-3 transition-transform" />
                            </NavLink>
                            <NavLink to="/connect" className="bg-white border-2 md:border-4 border-navy-flag text-navy-flag hover:bg-navy-flag hover:text-white px-8 md:px-12 py-4 md:py-6 rounded-[24px] md:rounded-[32px] font-black transition-all text-lg md:text-xl shadow-lg">
                                आज ही जुड़ें
                            </NavLink>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-saffron/30 to-navy-flag/20 rounded-[80px] blur-3xl animate-pulse" />
                        <div className="relative z-10 p-4 bg-white/50 backdrop-blur-md rounded-[80px] border-4 border-white shadow-2xl overflow-hidden group">
                            <img
                                src={logo}
                                alt="Yuva Nyay Dal"
                                className="w-full h-auto rounded-[70px] transform group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        {/* Interactive Badges */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 z-20"
                        >
                            <span className="p-3 bg-saffron/10 text-saffron rounded-2xl"><HiOutlineSparkles size={32} /></span>
                            <span className="font-black text-navy-flag uppercase tracking-wider text-sm">पवित्र उद्देश्य</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5 }}
                            className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 z-20"
                        >
                            <span className="p-3 bg-green-flag/10 text-green-flag rounded-2xl"><HiOutlineUserGroup size={32} /></span>
                            <span className="font-black text-navy-flag uppercase tracking-wider text-sm">शक्तिशाली एकता</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* 2. GALLERY SLIDER SECTION (Government Portal Style) */}
            <div className="py-16 md:py-24 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
                <div className="container mx-auto px-6 mb-10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-navy-flag text-3xl md:text-4xl font-black mb-3 border-l-0 md:border-l-8 border-saffron md:pl-6 uppercase tracking-tight">
                            संगठन की <span className="text-saffron">झलकियाँ</span>
                        </h2>
                        <p className="text-slate-500 font-bold text-xs md:text-sm tracking-widest md:pl-14">LATEST WORK & UPDATES</p>
                    </div>
                    <NavLink to="/gallery" className="bg-navy-flag hover:bg-saffron text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center gap-3">
                        गैलरी देखें <HiOutlineArrowNarrowRight />
                    </NavLink>
                </div>

                <div className="marquee-container relative">
                    <div className="flex gap-6 md:gap-10 px-6 animate-step-slide h-[300px] md:h-[380px] items-center">
                        {/* Loops of images */}
                        {[...sliderImages, ...sliderImages].map((num, index) => (
                            <div key={`gov-s-${num}-${index}`} className="h-[280px] md:h-[340px] w-[280px] md:w-[calc(25vw-2rem)] shrink-0 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl bg-white p-3 md:p-4 hover:border-saffron transition-all group flex items-center justify-center">
                                <div className="w-full h-full relative overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center">
                                    <img
                                        src={galleryImages[num]}
                                        alt="Work Highlights"
                                        className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110 shadow-sm"
                                    />
                                    <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-navy-flag/90 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-lg text-[8px] md:text-[10px] font-black tracking-widest uppercase border border-white/20 shadow-md">
                                        युवा न्याय दल
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. CORE COMMITMENTS */}
            <div className="py-24 md:py-40 bg-white">
                <div className="container mx-auto px-6 text-center mb-16 md:mb-24">
                    <span className="text-saffron font-black uppercase tracking-[.2em] md:tracking-[0.3em] text-[10px] md:text-sm block mb-4">Our Values</span>
                    <h2 className="text-4xl md:text-7xl font-black text-navy-flag mb-6 md:mb-8">हमारी <span className="text-orange-500">पंच</span> प्रतिबद्धताएं</h2>
                    <div className="h-1.5 md:h-2 w-24 md:w-32 bg-green-flag mx-auto rounded-full" />
                </div>

                <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    <CommitmentCard
                        icon={<FaBalanceScale size={40} />}
                        title="सामाजिक न्याय"
                        desc="समाज के हर वंचित वर्ग की आवाज़ को बुलंद करना और उन्हें न्याय दिलाना हमारी पहली प्राथमिकता है।"
                        num="01"
                    />
                    <CommitmentCard
                        icon={<FaGraduationCap size={40} />}
                        title="गुणवत्तापूर्ण शिक्षा"
                        desc="हर छात्र को बेहतर शिक्षा और कौशल विकास के अवसर दिलाना ताकि राष्ट्र निर्माण में वे योगदान दें।"
                        num="02"
                    />
                    <CommitmentCard
                        icon={<HiOutlineChartBar size={40} />}
                        title="रोजगार के अवसर"
                        desc="बेरोजगारी को समाप्त करने हेतु स्थानीय और राष्ट्रीय स्तर पर प्रभावी नीतियों को प्रोत्साहित करना।"
                        num="03"
                    />
                    <CommitmentCard
                        icon={<HiOutlineGlobe size={40} />}
                        title="भ्रष्टाचार मुक्ति"
                        desc="एक पारदर्शी और जवाबदेह प्रशासनिक प्रणाली का निर्माण जहाँ आम आदमी की सुनाई हो।"
                        num="04"
                    />
                    <CommitmentCard
                        icon={<HiOutlineShieldCheck size={40} />}
                        title="महिला सशक्तिकरण"
                        desc="महिलाओं को सुरक्षित समाज और निर्णय प्रक्रिया में सक्रिय भागीदारी दिलाना हमारा संकल्प है।"
                        num="05"
                    />
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-navy-flag p-8 md:p-12 rounded-[40px] md:rounded-[60px] flex flex-col justify-between text-white relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity"><HiOutlineFire size={120} md:size={150} /></div>
                        <div>
                            <h4 className="text-2xl md:text-3xl font-black mb-4 md:mb-6">क्या आप तैयार हैं?</h4>
                            <p className="text-slate-300 font-medium mb-8 md:mb-10 leading-relaxed italic text-sm md:text-base">"परिवर्तन की शुरुआत स्वयं से करें, युवा न्याय दल का हिस्सा बनें।"</p>
                        </div>
                        <NavLink to="/connect" className="bg-saffron text-navy-flag px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-center shadow-xl shadow-saffron/20 transition-all hover:scale-105">
                            अभी सदस्य बनें
                        </NavLink>
                    </motion.div>
                </div>
            </div>

            {/* 4. STATISTICS & ABOUT PREVIEW */}
            <div className="py-24 md:py-40 bg-slate-50 relative overflow-hidden px-4 md:px-0">
                <img src={flag} className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[500px] opacity-10 pointer-events-none" />
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="flex justify-center lg:justify-start">
                            <span className="p-3 md:p-4 bg-white shadow-xl rounded-full inline-flex gap-3 md:gap-4 items-center mb-10 border border-slate-100">
                                <img src={flag} className="w-8 md:w-10 h-5 md:h-6 rounded shadow-sm" />
                                <span className="font-black text-navy-flag text-[10px] md:text-sm pr-4">अराजनैतिक संगठन</span>
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-navy-flag mb-8 md:mb-10 leading-tight text-center lg:text-left">
                            युवा नेतृत्व, <br />
                            <span className="text-saffron">सशक्त राष्ट्र</span> का आधार
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 mb-10 md:mb-12 leading-loose text-justify font-medium italic">
                            "हमारा विश्वास है कि देश का भविष्य युवाओं के हाथ में है। यदि उन्हें सही दिशा, अवसर और मंच मिले तो वे राष्ट्र निर्माण में महत्वपूर्ण भूमिका निभा सकते हैं।"
                        </p>
                        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-12 text-center">
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg border border-slate-100 transition-transform hover:scale-105">
                                <h5 className="text-3xl md:text-4xl font-black text-navy-flag mb-2">10K+</h5>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">सक्रिय सदस्य</p>
                            </div>
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg border border-slate-100 transition-transform hover:scale-105">
                                <h5 className="text-3xl md:text-4xl font-black text-saffron mb-2">50+</h5>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">सफल अभियान</p>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="absolute inset-0 bg-navy-flag/5 rounded-[40px] md:rounded-[80px] -rotate-3 scale-105" />
                        <div className="bg-white p-3 md:p-4 rounded-[40px] md:rounded-[80px] shadow-3xl relative z-10">
                            <img src={image36} className="rounded-[30px] md:rounded-[70px] w-full shadow-inner" />
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 md:-bottom-10 -right-2 md:-right-4 bg-saffron p-5 md:p-8 rounded-full text-white shadow-2xl z-20 hidden md:block">
                            <HiOutlineFingerPrint size={40} md:size={50} />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Leadership Message Section */}
            <LeadershipSection />

            {/* 5. SENIOR LEADERSHIP SECTION */}
            <div className="py-24 md:py-40 bg-white">
                <div className="container mx-auto px-6 text-center mb-16 md:mb-24">
                    <span className="text-green-flag font-black uppercase tracking-[0.4em] text-sm block mb-4">Our Pillars</span>
                    <h2 className="text-4xl md:text-7xl font-black text-navy-flag mb-6 md:mb-8">प्रमुख <span className="text-saffron">नेतृत्व</span></h2>
                    <div className="h-2 w-32 bg-saffron mx-auto rounded-full" />
                </div>

                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 max-w-6xl">
                    <LeaderCard
                        img={image36}
                        name="ओम प्रकाश यादव"
                        title="राष्ट्रीय उपाध्यक्ष"
                        desc="पूर्व राज्य मंत्री उत्तर प्रदेश सरकार"
                    />
                    <LeaderCard
                        img={image37}
                        name="गगन बाजपेई"
                        title="राष्ट्रीय उपाध्यक्ष"
                        desc="संगठन के प्रेरणा स्रोत एवं पथ-प्रदर्शक"
                    />
                </div>
            </div>

            {/* 6. CALL TO ACTION - CONNECT */}
            <div className="py-24 md:py-40 bg-navy-flag text-white text-center relative overflow-hidden px-4">
                <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-saffron/10 rounded-full blur-[80px] md:blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-green-flag/10 rounded-full blur-[60px] md:blur-[100px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-8xl font-black mb-8 md:mb-12 tracking-tighter">बदलाव का <span className="text-saffron italic">हिस्सा</span> बनें</h2>
                    <p className="text-lg md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 md:mb-20 italic leading-relaxed font-medium">
                        "हमसे सोशल मीडिया के माध्यम से जुड़ें और युवा न्याय दल की प्रत्येक गतिविधि और सभा की जानकारी प्राप्त करें।"
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <NavLink to="/contact" className="bg-saffron text-navy-flag px-8 md:px-16 py-4 md:py-7 rounded-[20px] md:rounded-[40px] font-black text-xl md:text-2xl shadow-2xl hover:bg-white transition-all hover:scale-105">
                            अभी संपर्क करें
                        </NavLink>
                        <NavLink to="/connect" className="bg-white/10 backdrop-blur-md border border-white/20 px-8 md:px-16 py-4 md:py-7 rounded-[20px] md:rounded-[40px] font-black text-xl md:text-2xl hover:bg-white/20 transition-all">
                            सोशल मीडिया
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Custom Animations CSS */}
            <style dangerouslySetInnerHTML={{
                __html: `
                :root {
                    --slide-dist: -280px;
                }
                @media (min-width: 768px) {
                    :root {
                        --slide-dist: -25vw;
                    }
                }
                @keyframes step-slide {
                    0% { transform: translateX(0); }
                    15% { transform: translateX(0); } 
                    20% { transform: translateX(var(--slide-dist)); }
                    35% { transform: translateX(var(--slide-dist)); }
                    40% { transform: translateX(calc(var(--slide-dist) * 2)); }
                    55% { transform: translateX(calc(var(--slide-dist) * 2)); }
                    60% { transform: translateX(calc(var(--slide-dist) * 3)); }
                    75% { transform: translateX(calc(var(--slide-dist) * 3)); }
                    80% { transform: translateX(calc(var(--slide-dist) * 4)); }
                    95% { transform: translateX(calc(var(--slide-dist) * 4)); }
                    100% { transform: translateX(calc(var(--slide-dist) * 5)); }
                }
                .animate-step-slide {
                    animation: step-slide 20s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                    display: flex;
                    width: max-content;
                }
                .animate-step-slide:hover {
                    animation-play-state: paused;
                }
            `}} />
        </AnimatedPage>
    );
};

const CommitmentCard = ({ icon, title, desc, num }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-slate-50 p-8 md:p-12 rounded-[30px] md:rounded-[60px] border border-slate-100 shadow-sm hover:shadow-xl transition-all relative group overflow-hidden"
    >
        <span className="absolute top-6 md:top-10 right-6 md:right-10 text-4xl md:text-6xl font-black text-saffron/80 group-hover:text-saffron/90 transition-colors uppercase italic">{num}</span>
        <div className="text-saffron mb-8 md:mb-10 bg-white w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-6">
            {icon}
        </div>
        <h4 className="text-xl md:text-2xl font-black text-navy-flag mb-4 md:mb-6 border-b-4 border-saffron/20 pb-2 w-fit">{title}</h4>
        <p className="text-sm md:text-base text-slate-500 font-medium leading-loose text-justify italic">{desc}</p>
    </motion.div>
);

const LeaderCard = ({ img, name, title, desc }) => (
    <motion.div
        whileHover={{ y: -15 }}
        className="relative group bg-slate-50 rounded-[40px] md:rounded-[60px] overflow-hidden border border-slate-100 shadow-xl transition-all duration-500"
    >
        <div className="aspect-[4/5] relative overflow-hidden">
            <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-flag via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            <div className="absolute bottom-10 left-10 right-10 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h4 className="text-2xl md:text-4xl font-black mb-2">{name}</h4>
                <p className="text-saffron font-bold text-sm md:text-base uppercase tracking-widest mb-4">{title}</p>
                <div className="h-1 w-12 bg-white/30 rounded-full group-hover:w-full transition-all duration-700" />
                <p className="mt-4 text-slate-300 font-medium italic text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-300">{desc}</p>
            </div>
        </div>
    </motion.div>
);

export default Home;
