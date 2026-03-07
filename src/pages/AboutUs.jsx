import { motion } from 'framer-motion';
import { image39, image36, image37, image38, logo, image1, image2, image3, image4, image5, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20 } from '../utils/images';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Hero Section */}
            <section className="pt-40 pb-24 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Description */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-7xl font-extrabold text-navy-flag leading-tight font-heading uppercase tracking-tight"
                            >
                                युवा न्याय दल
                            </motion.h1>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="h-1 w-32 bg-gradient-to-r from-saffron via-white to-green-flag"
                            />
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-lg text-slate-700 leading-relaxed"
                            >
                                युवा न्याय दल एक प्रगतिशील और युवा-नेतृत्व वाला संगठन है, जो समाज में न्याय, समानता और पारदर्शिता को बढ़ावा देने के लिए प्रतिबद्ध है। हम युवाओं को सशक्त बनाने और उन्हें राष्ट्र निर्माण में सक्रिय भागीदार बनाने का प्रयास करते हैं।
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="text-slate-600 leading-relaxed"
                            >
                                हमारा विश्वास है कि देश का भविष्य युवाओं के हाथ में है। सही दिशा, अवसर और मंच मिलने पर युवा राष्ट्र के विकास में महत्वपूर्ण योगदान दे सकते हैं।
                            </motion.p>
                        </motion.div>

                        {/* Right - Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex justify-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                className="relative"
                            >
                                <img
                                    src={logo}
                                    alt="Yuva Nyay Dal Logo"
                                    className="relative w-80 h-80 object-contain rounded-[100px] shadow-2xl border-8 border-white"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* About Us Section */}
            <section className="py-24 px-6 bg-white border-y border-slate-100">
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
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-saffron hover:shadow-2xl transition-all"
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
                            </motion.ul>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-flag hover:shadow-2xl transition-all"
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
                            </motion.ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* National President - Vijay Shanker Shukla */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="relative group"
                            >
                                <img
                                    src={image8}
                                    alt="Vijay Shanker Shukla"
                                    className="relative w-full max-w-[600px] h-auto max-h-[600px] object-contain bg-white rounded-2xl shadow-2xl border-4 border-white mx-auto"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 order-2"
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-bold text-navy-flag font-heading uppercase tracking-tight"
                            >
                                माननीय विजय शंकर शुक्ला (अभिवक्ता)
                            </motion.h2>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="h-1.5 w-32 bg-gradient-to-r from-saffron to-green-flag"
                            />
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="text-2xl text-saffron font-bold"
                            >
                                राष्ट्रीय अध्यक्ष
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="text-slate-700 leading-relaxed text-lg"
                            >
                                युवाओं के प्रेरणास्रोत और अनुभवी नेतृत्व, विजय शंकर शुक्ला जी युवा न्याय दल के राष्ट्रीय अध्यक्ष के रूप में संगठन का कुशल नेतृत्व कर रहे हैं। उनका लक्ष्य युवाओं को न्याय और सशक्तिकरण के मार्ग पर अग्रसर करना है।
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leader 2 - Om Prakash Yadav */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 order-2 lg:order-1"
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-bold text-navy-flag font-heading uppercase tracking-tight"
                            >
                                माननीय ओम प्रकाश यादव
                            </motion.h2>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="h-1 w-24 bg-green-flag"
                            />
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="text-xl text-green-flag font-semibold"
                            >
                                राष्ट्रीय उपाध्यक्ष
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="text-lg text-slate-600"
                            >
                                पूर्व राज्य मंत्री, उत्तर प्रदेश सरकार
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1 }}
                                className="text-slate-700 leading-relaxed"
                            >
                                अनुभवी नेतृत्व और समाज सेवा के प्रति समर्पित, ओम प्रकाश यादव जी युवा न्याय दल के राष्ट्रीय उपाध्यक्ष के रूप में संगठन को नई दिशा प्रदान कर रहे हैं।
                            </motion.p>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="relative group"
                            >
                                <img
                                    src={image36}
                                    alt="Om Prakash Yadav"
                                    className="relative w-full max-w-[600px] h-auto max-h-[600px] object-contain rounded-2xl shadow-2xl border-4 border-white mx-auto"
                                />
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Leader 1 - Gagan Bajpai */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="relative group"
                            >
                                <img
                                    src={image37}
                                    alt="Gagan Bajpai"
                                    className="relative w-full max-w-[600px] h-auto max-h-[600px] object-contain rounded-2xl shadow-2xl border-4 border-white mx-auto"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 order-2"
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-bold text-navy-flag font-heading uppercase tracking-tight"
                            >
                                गगन बाजपेई
                            </motion.h2>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="h-1 w-24 bg-saffron"
                            />
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="text-xl text-saffron font-semibold"
                            >
                                राष्ट्रीय उपाध्यक्ष
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="text-slate-700 leading-relaxed text-lg"
                            >
                                युवा ऊर्जा और नवीन सोच के साथ, गगन बाजपेई जी युवा न्याय दल के राष्ट्रीय उपाध्यक्ष के रूप में युवाओं को सशक्त बनाने और समाज में सकारात्मक बदलाव लाने के लिए कार्यरत हैं।
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* National General Secretary - Shubham Gupta */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 order-2 lg:order-1"
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-bold text-navy-flag font-heading uppercase tracking-tight"
                            >
                                शुभम गुप्ता
                            </motion.h2>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="h-1 w-24 bg-navy-flag"
                            />
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="text-xl text-navy-flag font-semibold"
                            >
                                राष्ट्रीय महासचिव
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="text-slate-700 leading-relaxed text-lg"
                            >
                                संगठन की मजबूती और प्रशासनिक कुशलता के साथ, शुभम गुप्ता जी राष्ट्रीय महासचिव के रूप में युवा न्याय दल के मिशन को धरातल पर उतारने के लिए समर्पित हैं।
                            </motion.p>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="relative group"
                            >
                                <img
                                    src={image38}
                                    alt="Shubham Gupta"
                                    className="relative w-full max-w-[600px] h-auto max-h-[600px] object-contain  mx-auto"
                                />
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* National General Secretary - Raju Prasad Tiwari */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="relative group"
                            >
                                <img
                                    src={image39}
                                    alt="राजू प्रसाद तिवारी"
                                    className="relative w-full max-w-[600px] h-auto max-h-[600px] object-contain md:w-[460px] md:h-[460px] mx-auto"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 order-2"
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-bold text-navy-flag font-heading uppercase tracking-tight"
                            >
                                राजू प्रसाद तिवारी
                            </motion.h2>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="h-1 w-24 bg-saffron"
                            />
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="text-xl text-saffron font-semibold"
                            >
                                राष्ट्रीय महासचिव
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="text-slate-700 leading-relaxed text-lg"
                            >
                                अनुभवी नेतृत्व और संगठन के प्रति अटूट निष्ठा के साथ, राजू प्रसाद तिवारी जी राष्ट्रीय महासचिव के रूप में युवा न्याय दल के मिशन को सफल बनाने के लिए संकल्पित हैं।
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Image Slider Section */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-flag mb-4">
                            हमारी गतिविधियाँ
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-1 w-40 bg-gradient-to-r from-saffron via-white to-green-flag mx-auto"
                        />
                    </motion.div>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        navigation
                        loop={false}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 }
                        }}
                        className="pb-12"
                    >
                        {[image1, image2, image3, image4, image5, image7, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20].map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative group cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-saffron/20 to-navy-flag/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all" />
                                    <img
                                        src={img}
                                        alt={`Activity ${idx + 1}`}
                                        className="w-full h-80 object-contain bg-white rounded-xl shadow-lg"
                                    />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6 bg-gradient-to-r from-navy-flag to-saffron">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            हमारे साथ जुड़ें और बदलाव का हिस्सा बनें
                        </h2>
                        <p className="text-white/90 text-lg max-w-2xl mx-auto">
                            युवा न्याय दल के साथ मिलकर समाज में सकारात्मक परिवर्तन लाएं
                        </p>
                        <motion.a
                            href="/connect"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-white text-navy-flag px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                        >
                            अभी जुड़ें
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
