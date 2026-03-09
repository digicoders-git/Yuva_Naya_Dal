import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { HiOutlineAcademicCap, HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineLightBulb, HiOutlineHeart, HiOutlineArrowRight } from 'react-icons/hi';
import { FaBalanceScale } from 'react-icons/fa';
import AnimatedPage from '../components/AnimatedPage';
import { image36 } from '../utils/images';

const Mission = () => {
    return (
        <AnimatedPage>
            {/* Hero Section */}
            <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden bg-gradient-to-br from-navy-flag via-navy-flag to-saffron">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-40 h-40 md:w-80 md:h-80 bg-green-flag rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 rounded-full mb-6 md:mb-8"
                    >
                        <span className="text-white font-bold text-xs md:text-sm uppercase tracking-widest">हमारा मिशन</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight"
                    >
                        समाज में <span className="text-green-flag">न्याय</span> और<br className="hidden md:block" /> युवाओं का <span className="text-saffron">सशक्तिकरण</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10 px-4"
                    >
                        युवाओं के एकजुटता, सम्मान, स्वाभिमान, शिक्षा, रोजगार, व्यवस्थाओं के लिए प्रतिबद्ध। हमारा मिशन समाज के अंतिम व्यक्ति तक न्याय पहुँचाना और युवाओं को सही दिशा, अवसर और मंच प्रदान करना है।
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <NavLink
                            to="/connect"
                            className="bg-white text-navy-flag px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-green-flag hover:text-white transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 group w-full sm:w-auto justify-center"
                        >
                            हमसे जुड़ें
                            <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-white hover:text-navy-flag transition-all w-full sm:w-auto justify-center flex items-center"
                        >
                            और जानें
                        </NavLink>
                    </motion.div>
                </div>
            </section>

            {/* Mission Cards Grid */}
            <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10 md:mb-16"
                    >
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-navy-flag mb-3 md:mb-4">हमारे मुख्य उद्देश्य</h2>
                        <div className="h-1 w-20 md:w-32 bg-saffron mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <MissionCard
                            icon={<HiOutlineUserGroup />}
                            title="नेतृत्व विकास"
                            desc="युवाओं को नेतृत्व और निर्णय प्रक्रिया में सक्रिय भागीदारी दिलाना"
                            color="bg-saffron"
                            delay={0.1}
                        />
                        <MissionCard
                            icon={<HiOutlineAcademicCap />}
                            title="शिक्षा और कौशल"
                            desc="गुणवत्तापूर्ण शिक्षा और कौशल विकास कार्यक्रमों को बढ़ावा देना"
                            color="bg-navy-flag"
                            delay={0.2}
                        />
                        <MissionCard
                            icon={<HiOutlineLightBulb />}
                            title="रोजगार सृजन"
                            desc="बेरोजगारी कम करने हेतु स्थानीय और राष्ट्रीय स्तर पर पहल करना"
                            color="bg-green-flag"
                            delay={0.3}
                        />
                        <MissionCard
                            icon={<FaBalanceScale />}
                            title="सामाजिक न्याय"
                            desc="महिला, किसान और श्रमिक वर्ग के अधिकारों की रक्षा करना"
                            color="bg-saffron"
                            delay={0.4}
                        />
                        <MissionCard
                            icon={<HiOutlineShieldCheck />}
                            title="पारदर्शिता"
                            desc="डिजिटल और पारदर्शी प्रशासनिक प्रणाली को प्रोत्साहित करना"
                            color="bg-navy-flag"
                            delay={0.5}
                        />
                        <MissionCard
                            icon={<HiOutlineHeart />}
                            title="समाज सेवा"
                            desc="समाज के हर वर्ग की आवाज़ को बुलंद करना और सेवा करना"
                            color="bg-green-flag"
                            delay={0.6}
                        />
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10 md:mb-16"
                    >
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-navy-flag mb-3 md:mb-4">हमारा मार्गदर्शन</h2>
                        <div className="h-1 w-20 md:w-32 bg-green-flag mx-auto rounded-full" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-slate-50 to-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="relative h-64 md:h-auto">
                                <img
                                    src={image36}
                                    alt="ओम प्रकाश यादव"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-flag/80 to-transparent" />
                            </div>
                            <div className="p-6 md:p-10 flex flex-col justify-center">
                                <div className="inline-block bg-green-flag/10 text-green-flag px-4 py-1 rounded-full text-xs font-bold mb-4 w-fit">
                                    राष्ट्रीय उपाध्यक्ष
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-navy-flag mb-2">ओम प्रकाश यादव</h3>
                                <p className="text-saffron font-semibold text-sm md:text-base mb-4">पूर्व राज्य मंत्री, उत्तर प्रदेश सरकार</p>
                                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
                                    पूर्व राज्य मंत्री उत्तर प्रदेश सरकार के रूप में उनका अनुभव और नेतृत्व युवा न्याय दल के लिए प्रेरणा का स्रोत है। युवाओं के सशक्तिकरण और समाज में न्याय स्थापित करने के लिए प्रतिबद्ध। उनका मार्गदर्शन संगठन की रीढ़ है।
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                                        <p className="text-xs text-slate-500">अनुभव</p>
                                        <p className="text-navy-flag font-bold text-sm md:text-base">5+ वर्ष</p>
                                    </div>
                                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                                        <p className="text-xs text-slate-500">योगदान</p>
                                        <p className="text-navy-flag font-bold text-sm md:text-base">समाज सेवा</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-r from-navy-flag to-saffron">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">मिशन में शामिल हों</h2>
                        <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 px-4">युवा न्याय दल अराजनैतिक संगठन के साथ मिलकर समाज में सकारात्मक बदलाव लाएं। युवाओं को रोजगार और व्यवस्थाओं से मजबूत करना हमारा उद्देश्य है।</p>
                        <NavLink
                            to="/connect"
                            className="inline-flex items-center gap-2 bg-white text-navy-flag px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg hover:scale-105 transition-all shadow-2xl group"
                        >
                            अभी जुड़ें
                            <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </NavLink>
                    </motion.div>
                </div>
            </section>
        </AnimatedPage>
    );
};

const MissionCard = ({ icon, title, desc, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-saffron/10 to-transparent rounded-bl-full" />

        <div className="relative z-10">
            <div className={`${color} text-white w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform text-xl md:text-2xl`}>
                {icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-navy-flag mb-2 md:mb-3">{title}</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">{desc}</p>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-0 bg-saffron group-hover:w-full transition-all duration-500" />
    </motion.div>
);

export default Mission;
