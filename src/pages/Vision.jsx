import { motion } from 'framer-motion';
import { HiOutlineSparkles, HiOutlineCheckCircle, HiOutlineFlag } from 'react-icons/hi';
import AnimatedPage from '../components/AnimatedPage';
import LeadershipSection from '../components/LeadershipSection';
import { image37 } from '../utils/images';

const Vision = () => {
    return (
        <AnimatedPage>
            {/* Hero Section */}
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
                    Our <span className="text-saffron">Vision</span>
                </motion.h2>
                <p className="text-base md:text-2xl text-slate-100 max-w-4xl mx-auto italic font-medium leading-relaxed px-2">
                    "हमारा विजन एक ऐसे सशक्त और न्यायपूर्ण समाज का निर्माण करना है जहाँ प्रत्येक युवा को समान अवसर प्राप्त हों।"
                </p>
            </div>

            <div className="container mx-auto px-6 max-w-7xl pb-20 md:pb-32">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-saffron font-black uppercase tracking-[0.3em] text-sm block mb-4">The Future We See</span>
                        <h3 className="text-3xl md:text-5xl font-black text-navy-flag mb-8 leading-tight">
                            समानता और <span className="text-saffron">न्याय</span> पर आधारित राष्ट्र
                        </h3>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed text-justify">
                            युवा न्याय दल (अराजनैतिक) का विजन भारत को एक ऐसी वैश्विक शक्ति के रूप में देखना है जहाँ सामाजिक न्याय केवल एक शब्द नहीं, बल्कि जीवंत हकीकत हो। हम एक ऐसे भविष्य की कल्पना करते हैं जहाँ राजनीति से परे, युवा शक्ति संगठित होकर राष्ट्र निर्माण में अपना सर्वोच्च योगदान दे सके।
                        </p>
                        <div className="space-y-6">
                            <VisionPoint text="एक ऐसा भारत जहाँ हर युवा को समान अवसर और न्याय मिले।" />
                            <VisionPoint text="पारदर्शी, जवाबदेह और भ्रष्टाचार-मुक्त शासन व्यवस्था।" />
                            <VisionPoint text="शिक्षा और रोजगार के क्षेत्र में समानता और गुणवत्ता।" />
                            <VisionPoint text="सामाजिक सद्भाव, समान अधिकार और सुरक्षित समाज का निर्माण।" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-saffron/10 rounded-[40px] md:rounded-[60px] rotate-3 scale-105" />
                        <div className="bg-white p-4 rounded-[40px] md:rounded-[60px] shadow-3xl relative z-10 border border-slate-100">
                            <img src={image37} className="rounded-[30px] md:rounded-[50px] w-full" />
                            <div className="absolute bottom-10 left-10 right-10 bg-navy-flag/90 backdrop-blur-md p-6 rounded-3xl text-white border border-white/10">
                                <h4 className="text-xl font-black">गगन बाजपेई</h4>
                                <p className="text-saffron text-xs font-bold uppercase tracking-widest">राष्ट्रीय उपाध्यक्ष</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <LeadershipSection />
        </AnimatedPage>
    );
};

const VisionPoint = ({ text }) => (
    <div className="flex gap-4 items-center bg-white p-5 rounded-2xl shadow-sm border border-slate-50 hover:border-saffron/30 transition-colors group">
        <span className="text-saffron group-hover:scale-110 transition-transform"><HiOutlineCheckCircle size={28} /></span>
        <span className="text-navy-flag font-bold text-lg">{text}</span>
    </div>
);

export default Vision;
