import { motion } from 'framer-motion';
import { image39, image36, image37, image38, logo, image8 } from '../utils/images';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';
import LeaderCard from '../components/LeaderCard';
import ActivitiesSection from '../components/ActivitiesSection';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
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
                                <span className="text-saffron font-bold text-sm uppercase tracking-wider">अराजनैतिक संगठन</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-6xl font-black text-white leading-[1.1] font-heading"
                            >
                                युवा न्याय दल
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-saffron via-white to-green-flag mt-2">
                                    राष्ट्र का संकल्प
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg text-slate-300 leading-relaxed"
                            >
                                युवा न्याय दल एक प्रगतिशील और युवा-नेतृत्व वाला संगठन है, जो समाज में न्याय, समानता और पारदर्शिता को बढ़ावा देने के लिए प्रतिबद्ध है।
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-wrap gap-4 pt-4"
                            >
                                <NavLink
                                    to="/connect"
                                    className="group bg-gradient-to-r from-saffron to-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-saffron/50 transition-all flex items-center gap-2"
                                >
                                    हमसे जुड़ें
                                    <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
                                >
                                    संपर्क करें
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
                                {/* Rotating Rings - Inside Logo */}
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
                                    10000+ सदस्य
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                    className="absolute -bottom-4 -left-4 bg-green-flag text-white px-6 py-3 rounded-full font-bold shadow-xl text-sm"
                                >
                                    5+ राज्य
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>


            </section>
            {/* About Us Section */}
            <section className="py-8 px-6 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-flag mb-4">
                            हमारे बारे में
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-1 w-40 bg-gradient-to-r from-saffron via-white to-green-flag mx-auto"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="space-y-6 text-slate-700 leading-relaxed text-lg"
                    >
                        <p>
                            युवा न्याय दल एक प्रगतिशील और युवा-नेतृत्व वाला संगठन है, जिसका उद्देश्य समाज में न्याय, समानता और पारदर्शिता को बढ़ावा देना है। हमारा विश्वास है कि देश का भविष्य युवाओं के हाथ में है, और यदि उन्हें सही दिशा, अवसर और मंच मिले तो वे राष्ट्र निर्माण में महत्वपूर्ण भूमिका निभा सकते हैं।
                        </p>
                        <p>
                            हम शिक्षा, रोजगार, सामाजिक न्याय, महिला सशक्तिकरण और भ्रष्टाचार मुक्त व्यवस्था के लिए प्रतिबद्ध हैं। हमारा प्रयास है कि समाज के हर वर्ग — विशेषकर युवाओं, छात्रों, किसानों और मजदूरों — की आवाज़ को मजबूत किया जाए और उनकी समस्याओं का समाधान लोकतांत्रिक तरीके से किया जाए।
                        </p>
                        <div className="mt-8 p-6 bg-gradient-to-r from-saffron/10 to-green-flag/10 rounded-2xl border-l-4 border-saffron">
                            <h3 className="text-2xl font-bold text-navy-flag mb-4">हमसे जुड़ें और बदलाव का हिस्सा बनें!</h3>
                            <p className="text-slate-700 mb-4">
                                युवा न्याय दल के साथ जुड़कर आप न केवल एक संगठन का हिस्सा बनते हैं, बल्कि एक बड़े सामाजिक आंदोलन का हिस्सा बनते हैं। हमारे सोशल मीडिया प्लेटफॉर्म्स पर हमें फॉलो करें:
                            </p>
                            <ul className="space-y-2 text-slate-700">
                                <li className="flex items-center gap-2">
                                    <span className="text-saffron font-bold">✓</span>
                                    <span>हर दिन नई गतिविधियों और कार्यक्रमों की जानकारी</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-saffron font-bold">✓</span>
                                    <span>लाइव इवेंट्स और सामाजिक कार्यों की अपडेट</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-saffron font-bold">✓</span>
                                    <span>युवाओं के लिए रोजगार और शिक्षा से जुड़ी जानकारी</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-saffron font-bold">✓</span>
                                    <span>सीधे नेतृत्व से जुड़ने का मौका</span>
                                </li>
                            </ul>
                            <p className="mt-4 font-bold text-navy-flag">
                                Facebook, Instagram, Twitter, YouTube, WhatsApp और Telegram पर हमें फॉलो करें और युवा न्याय दल परिवार का हिस्सा बनें!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-15 px-4 md:px-6 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-t-4 border-saffron hover:shadow-2xl transition-all"
                        >
                            <motion.h3
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl font-bold text-navy-flag mb-6"
                            >
                                Mission (मिशन)
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-lg font-bold text-navy-flag mb-8 border-l-4 border-saffron pl-4 italic leading-relaxed"
                            >
                                युवाओं के एकजुटता, सम्मान, स्वाभिमान, शिक्षा, रोजगार, व्यवस्थाओं के लिए प्रतिबद्ध दल।
                            </motion.p>
                            <motion.ul
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="space-y-4 text-slate-700"
                            >
                                <li className="flex items-start gap-3">
                                    <span className="text-saffron text-xl mt-1">•</span>
                                    <span>युवाओं को नेतृत्व और निर्णय प्रक्रिया में सक्रिय भागीदारी दिलाना।</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-saffron text-xl mt-1">•</span>
                                    <span>गुणवत्तापूर्ण शिक्षा और कौशल विकास कार्यक्रमों को बढ़ावा देना।</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-saffron text-xl mt-1">•</span>
                                    <span>बेरोजगारी कम करने हेतु स्थानीय और राष्ट्रीय स्तर पर पहल करना।</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-saffron text-xl mt-1">•</span>
                                    <span>महिला, किसान और श्रमिक वर्ग के अधिकारों की रक्षा करना।</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-saffron text-xl mt-1">•</span>
                                    <span>डिजिटल और पारदर्शी प्रशासनिक प्रणाली को प्रोत्साहित करना।</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-saffron text-xl mt-1">•</span>
                                    <span>युवाओं को सोशल मीडिया के माध्यम से जागरूक और सशक्त बनाना।</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-saffron text-xl mt-1">•</span>
                                    <span>समाज में भाईचारा, एकता और सद्भावना को बढ़ावा देना।</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-saffron text-xl mt-1">•</span>
                                    <span>युवाओं के लिए स्वास्थ्य सेवाओं और खेल सुविधाओं का विकास करना।</span>
                                </li>
                            </motion.ul>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border-t-4 border-green-flag hover:shadow-2xl transition-all"
                        >
                            <motion.h3
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl font-bold text-navy-flag mb-6"
                            >
                                Vision (दृष्टि)
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-slate-700 mb-6 font-medium leading-relaxed italic"
                            >
                                युवा न्याय दल अराजनैतिक किसी भी राजनैतिक दल का सपोर्ट नहीं करता बल्कि किसी भी राजनैतिक दल का व्यक्ति या पदाधिकारी युवा न्याय दल अराजनैतिक का सदस्य या पदाधिकारी भी रह सकता है। हमारी नीति युवाओं की उपलब्धियां देना है वह चाहे राजनैतिक दिशा की ओर हो या व्यावसायिक, संगीत हो या खेलकूद, शिक्षा हो या समाजसेवा। युवाओं को रोजगार और व्यवस्थाओं से मजबूत करना हमारा उद्देश्य है।
                            </motion.p>
                            <motion.ul
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="space-y-4 text-slate-700"
                            >
                                <li className="flex items-start gap-3">
                                    <span className="text-green-flag text-xl mt-1">•</span>
                                    <span>एक ऐसा भारत जहाँ हर युवा को समान अवसर और न्याय मिले।</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-flag text-xl mt-1">•</span>
                                    <span>पारदर्शी, जवाबदेह और भ्रष्टाचार-मुक्त शासन व्यवस्था।</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-flag text-xl mt-1">•</span>
                                    <span>शिक्षा और रोजगार के क्षेत्र में समानता और गुणवत्ता।</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-flag text-xl mt-1">•</span>
                                    <span>सामाजिक सद्भाव, समान अधिकार और सुरक्षित समाज का निर्माण।</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-flag text-xl mt-1">•</span>
                                    <span>युवाओं को राष्ट्र निर्माण में सक्रिय भागीदार बनाना।</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-flag text-xl mt-1">•</span>
                                    <span>ग्रामीण और शहरी क्षेत्रों में समान विकास सुनिश्चित करना।</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-flag text-xl mt-1">•</span>
                                    <span>पर्यावरण संरक्षण और स्वच्छता अभियान को प्रोत्साहित करना।</span>
                                </li>
                            </motion.ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* National President - Vijay Shanker Shukla */}
            <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-flag/5 rounded-full blur-3xl" />

                <div className="container mx-auto max-w-7xl relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block bg-saffron/10 text-saffron px-6 py-2 rounded-full font-bold text-sm mb-4"
                        >
                            हमारा नेतृत्व
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-flag mb-4">राष्ट्रीय अध्यक्ष का संदेश</h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-1 w-32 md:w-40 bg-gradient-to-r from-saffron via-white to-green-flag mx-auto"
                        />
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-1"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative group"
                            >
                                <img
                                    src={image8}
                                    alt="Vijay Shanker Shukla"
                                    className="relative w-full max-w-md h-auto max-h-[500px] object-contain bg-white rounded-2xl shadow-2xl border-4 border-white mx-auto"
                                />

                                {/* Badge */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-saffron to-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-xl text-sm md:text-base whitespace-nowrap"
                                >
                                    राष्ट्रीय अध्यक्ष
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-2 space-y-6"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-flag mb-3 font-heading">
                                    माननीय विजय शंकर शुक्ला
                                </h3>
                                <p className="text-lg md:text-xl text-slate-600 font-semibold">(अधिवक्ता)</p>
                            </motion.div>

                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="h-1 w-24 bg-gradient-to-r from-saffron to-green-flag"
                            />

                            {/* Message Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 md:p-8 border-l-4 border-saffron shadow-lg"
                            >
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="text-4xl">💬</div>
                                    <div>
                                        <h4 className="text-xl md:text-2xl font-bold text-navy-flag mb-2">संदेश</h4>
                                        <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                                            युवाओं के प्रेरणास्रोत और अनुभवी नेतृत्व, विजय शंकर शुक्ला जी युवा न्याय दल के राष्ट्रीय अध्यक्ष के रूप में संगठन का कुशल नेतृत्व कर रहे हैं। उनका लक्ष्य युवाओं को न्याय और सशक्तिकरण के मार्ग पर अग्रसर करना है।
                                        </p>
                                    </div>
                                </div>

                                {/* Quote */}
                                <div className="mt-6 pt-6 border-t border-slate-200">
                                    <p className="text-navy-flag font-bold italic text-lg md:text-xl">
                                        "युवा शक्ति ही राष्ट्र की असली शक्ति है। हमारा संकल्प है कि हर युवा को न्याय, शिक्षा और रोजगार का समान अवसर मिले।"
                                    </p>
                                </div>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="grid grid-cols-3 gap-4"
                            >
                                <div className="bg-white rounded-xl p-4 text-center shadow-md border border-slate-100">
                                    <div className="text-2xl md:text-3xl font-bold text-saffron">10000+</div>
                                    <div className="text-xs md:text-sm text-slate-600 mt-1">सदस्य</div>
                                </div>
                                <div className="bg-white rounded-xl p-4 text-center shadow-md border border-slate-100">
                                    <div className="text-2xl md:text-3xl font-bold text-navy-flag">50+</div>
                                    <div className="text-xs md:text-sm text-slate-600 mt-1">अभियान</div>
                                </div>
                                <div className="bg-white rounded-xl p-4 text-center shadow-md border border-slate-100">
                                    <div className="text-2xl md:text-3xl font-bold text-green-flag">5+</div>
                                    <div className="text-xs md:text-sm text-slate-600 mt-1">राज्य</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leader 2 - Om Prakash Yadav */}
            <LeaderCard
                image={image36}
                name="माननीय ओम प्रकाश यादव"
                title="राष्ट्रीय उपाध्यक्ष"
                subtitle="पूर्व राज्य मंत्री, उत्तर प्रदेश सरकार"
                message="अनुभवी नेतृत्व और समाज सेवा के प्रति समर्पित, ओम प्रकाश यादव जी युवा न्याय दल के राष्ट्रीय उपाध्यक्ष के रूप में संगठन को नई दिशा प्रदान कर रहे हैं। उनका मानना है कि युवाओं को सही मार्गदर्शन और अवसर मिलने पर वे समाज और राष्ट्र के विकास में महत्वपूर्ण योगदान दे सकते हैं।"
                quote="युवाओं की ऊर्जा और समर्पण से ही समाज में सकारात्मक बदलाव संभव है।"
                badgeColor="from-green-flag to-emerald-600"
                borderColor="border-green-flag"
                imageOrder="right"
            />

            {/* Leader 3 - Gagan Bajpai */}
            <LeaderCard
                image={image37}
                name="गगन बाजपेई"
                title="राष्ट्रीय उपाध्यक्ष"
                subtitle=""
                message="युवा ऊर्जा और नवीन सोच के साथ, गगन बाजपेई जी युवा न्याय दल के राष्ट्रीय उपाध्यक्ष के रूप में युवाओं को सशक्त बनाने और समाज में सकारात्मक बदलाव लाने के लिए कार्यरत हैं। उनका उद्देश्य है कि हर युवा अपने सपनों को साकार कर सके।"
                quote="युवाओं का सशक्तिकरण ही राष्ट्र के उज्ज्वल भविष्य की नींव है।"
                badgeColor="from-saffron to-orange-600"
                borderColor="border-saffron"
                imageOrder="left"
            />

            {/* Leader 4 - Shubham Gupta */}
            <LeaderCard
                image={image38}
                name="शुभम गुप्ता"
                title="राष्ट्रीय महासचिव"
                subtitle=""
                message="संगठन की मजबूती और प्रशासनिक कुशलता के साथ, शुभम गुप्ता जी राष्ट्रीय महासचिव के रूप में युवा न्याय दल के मिशन को धरातल पर उतारने के लिए समर्पित हैं। उनका मानना है कि सुव्यवस्थित प्रशासन से ही संगठन के लक्ष्यों को प्राप्त किया जा सकता है।"
                quote="संगठन की मजबूती और पारदर्शिता ही सफलता की कुंजी है।"
                badgeColor="from-navy-flag to-blue-700"
                borderColor="border-navy-flag"
                imageOrder="right"
            />

            {/* Leader 5 - Raju Prasad Tiwari */}
            <LeaderCard
                image={image39}
                name="राजू प्रसाद तिवारी"
                title="राष्ट्रीय महासचिव"
                subtitle=""
                message="अनुभवी नेतृत्व और संगठन के प्रति अटूट निष्ठा के साथ, राजू प्रसाद तिवारी जी राष्ट्रीय महासचिव के रूप में युवा न्याय दल के मिशन को सफल बनाने के लिए संकल्पित हैं। उनका विश्वास है कि समर्पण और ईमानदारी से हर लक्ष्य हासिल किया जा सकता है।"
                quote="समर्पण और निष्ठा से ही संगठन के उद्देश्यों को पूरा किया जा सकता है।"
                badgeColor="from-saffron to-orange-600"
                borderColor="border-saffron"
                imageOrder="left"
            />


            {/* Image Slider Section */}
            <ActivitiesSection />

            {/* Connect Section - Social Media */}
            <section className="py-12 px-6 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-saffron/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy-flag/10 rounded-full blur-3xl" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block bg-saffron/10 text-saffron px-6 py-2 rounded-full font-bold text-sm mb-4"
                        >
                            सोशल मीडिया
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-flag mb-4">हमसे जुड़ें</h2>
                        <p className="text-slate-600 max-w-xl mx-auto">हर अपडेट और गतिविधि से जुड़े रहें</p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
                        <SocialLink icon={<FaFacebookF />} name="Facebook" link="https://www.facebook.com/yuvanyaydal" color="bg-[#1877F2]" delay={0.1} />
                        <SocialLink icon={<FaInstagram />} name="Instagram" link="https://www.instagram.com/yuva_nyay_dal" color="bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4]" delay={0.2} />
                        <SocialLink icon={<FaTwitter />} name="Twitter" link="https://twitter.com/yuvanyaydal_int" color="bg-[#1DA1F2]" delay={0.3} />
                        <SocialLink icon={<FaYoutube />} name="YouTube" link="https://www.youtube.com/@yuvanyaydal" color="bg-[#FF0000]" delay={0.4} />
                        <SocialLink icon={<FaWhatsapp />} name="WhatsApp" link="https://wa.me/917800250000" color="bg-[#25D366]" delay={0.5} />
                        <SocialLink icon={<FaTelegramPlane />} name="Telegram" link="https://t.me/yuvanyaydal" color="bg-[#0088CC]" delay={0.6} />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-6 bg-gradient-to-r from-navy-flag to-saffron">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            बदलाव का हिस्सा बनें
                        </h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            युवा न्याय दल के साथ मिलकर समाज में सकारात्मक परिवर्तन लाएं
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <NavLink
                                to="/contact"
                                className="bg-white text-navy-flag px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                संपर्क करें
                            </NavLink>
                            <NavLink
                                to="/connect"
                                className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                            >
                                सोशल मीडिया
                            </NavLink>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const SocialLink = ({ icon, name, link, color, delay }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -10, scale: 1.08 }}
        className="relative group"
    >
        <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 border border-slate-100 group-hover:border-transparent transition-all">
            <div className={`${color} text-white w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 text-xl sm:text-2xl`}>
                {icon}
            </div>
            <p className="text-navy-flag font-bold text-[10px] sm:text-xs text-center leading-tight">{name}</p>
        </div>
    </motion.a>
);

export default AboutUs;
