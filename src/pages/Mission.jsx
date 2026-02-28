import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineCheckCircle } from 'react-icons/hi';
import AnimatedPage from '../components/AnimatedPage';
import LeadershipSection from '../components/LeadershipSection';
import { image36 } from '../utils/images';

const Mission = () => {
    return (
        <AnimatedPage>
            {/* Hero Section */}
            <div className="relative pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden bg-navy-flag text-center rounded-b-[40px] md:rounded-b-[60px] shadow-2xl mx-2 md:mx-4 mb-10 md:mb-20 px-4 md:px-6">
                <div className="absolute inset-x-0 bottom-0 top-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-16 md:w-24 h-1.5 md:h-2 bg-green-flag mx-auto rounded-full mb-8 md:mb-10 shadow-lg shadow-green-flag/20"
                />
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6 drop-shadow-xl"
                >
                    Our <span className="text-green-flag">Mission</span>
                </motion.h2>
                <p className="text-base md:text-2xl text-slate-100 max-w-4xl mx-auto italic font-medium leading-relaxed px-2">
                    "हमारा मिशन समाज के अंतिम व्यक्ति तक न्याय पहुँचाना और युवाओं को सशक्त बनाना है।"
                </p>
            </div>

            <div className="container mx-auto px-6 max-w-7xl pb-20 md:pb-32">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, order: 2 }}
                        whileInView={{ opacity: 1, order: 1 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="absolute inset-0 bg-green-flag/10 rounded-[40px] md:rounded-[60px] -rotate-3 scale-105" />
                        <div className="bg-white p-4 rounded-[40px] md:rounded-[60px] shadow-3xl relative z-10 border border-slate-100">
                            <img src={image36} className="rounded-[30px] md:rounded-[50px] w-full" />
                            <div className="absolute bottom-10 left-10 right-10 bg-navy-flag/90 backdrop-blur-md p-6 rounded-3xl text-white border border-white/10">
                                <h4 className="text-xl font-black">ओम प्रकाश यादव</h4>
                                <p className="text-green-flag text-xs font-bold uppercase tracking-widest">राष्ट्रीय उपाध्यक्ष</p>
                                <p className="text-slate-300 text-[10px] uppercase mt-1">पूर्व राज्य मंत्री उत्तर प्रदेश सरकार</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <span className="text-green-flag font-black uppercase tracking-[0.3em] text-sm block mb-4">What We Do</span>
                        <h3 className="text-3xl md:text-5xl font-black text-navy-flag mb-8 leading-tight">
                            सशक्ति और <span className="text-green-flag">परिवर्तन</span> का संकल्प
                        </h3>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed text-left font-medium italic border-l-4 border-green-flag pl-4">
                            युवाओं के एकजुटता, सम्मान, स्वाभिमान, शिक्षा, रोजगार, व्यवस्थाओं के लिए प्रतिबद्ध दल।
                        </p>
                        <div className="grid sm:grid-cols-1 gap-6">
                            <MissionCard
                                icon={<HiOutlineUserGroup size={32} />}
                                title="नेतृत्व और भागीदारी"
                                desc="युवाओं को नेतृत्व और निर्णय प्रक्रिया में सक्रिय भागीदारी दिलाना।"
                            />
                            <MissionCard
                                icon={<HiOutlineAcademicCap size={32} />}
                                title="शिक्षा और कौशल"
                                desc="गुणवत्तापूर्ण शिक्षा और कौशल विकास कार्यक्रमों को बढ़ावा देना।"
                            />
                            <MissionCard
                                icon={<HiOutlineShieldCheck size={32} />}
                                title="रोजगार पहल"
                                desc="बेरोजगारी कम करने हेतु स्थानीय और राष्ट्रीय स्तर पर पहल करना।"
                            />
                            <MissionCard
                                icon={<HiOutlineUserGroup size={32} />}
                                title="अधिकारों की रक्षा"
                                desc="महिला, किसान और श्रमिक वर्ग के अधिकारों की रक्षा करना।"
                            />
                            <MissionCard
                                icon={<HiOutlineShieldCheck size={32} />}
                                title="पारदर्शी प्रणाली"
                                desc="डिजिटल और पारदर्शी प्रशासनिक प्रणाली को प्रोत्साहित करना।"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <LeadershipSection />
        </AnimatedPage>
    );
};

const MissionCard = ({ icon, title, desc }) => (
    <div className="flex gap-6 items-start bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <span className="p-4 bg-slate-50 text-green-flag rounded-2xl shadow-inner">{icon}</span>
        <div>
            <h4 className="text-xl font-black text-navy-flag mb-2">{title}</h4>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default Mission;
