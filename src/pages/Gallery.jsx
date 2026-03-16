import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, logo } from '../utils/images';
import { HiX, HiOutlineArrowRight } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const images = Object.keys(galleryImages).map(Number);

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
                                <span className="text-saffron font-bold text-sm uppercase tracking-wider">फोटो गैलरी</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-6xl font-black text-white leading-[1.1]"
                            >
                                हमारी गैलरी
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-saffron via-white to-green-flag mt-2">
                                    यादों का संग्रह
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg text-slate-300 leading-relaxed"
                            >
                                युवा न्याय दल की गतिविधियों, सामाजिक कार्यों और महत्वपूर्ण आयोजनों की झलकियां
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
                                    to="/about"
                                    className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
                                >
                                    हमारे बारे में
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
                                {/* Rotating Rings */}
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
                                    100+ फोटो
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                    className="absolute -bottom-4 -left-4 bg-green-flag text-white px-6 py-3 rounded-full font-bold shadow-xl text-sm"
                                >
                                    50+ इवेंट्स
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>


            </section>

            {/* Gallery Grid */}
            <section className="pt-20 pb-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    {/* Gallery Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-flag mb-4">
                            हमारी गतिविधियों की झलकियां
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-1 w-24 md:w-40 bg-saffron mx-auto rounded-full mb-6"
                        />
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            युवा न्याय दल द्वारा आयोजित विभिन्न सामाजिक कार्यक्रमों, जागरूकता अभियानों, और सामुदायिक गतिविधियों की तस्वीरें। हर तस्वीर समाज में सकारात्मक बदलाव लाने की हमारी प्रतिबद्धता को दर्शाती है।
                        </p>
                    </motion.div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {images.map((num, idx) => (
                            <motion.div
                                key={num}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 0.5 }}
                                whileHover={{ scale: 1.03 }}
                                onClick={() => setSelectedImage(num)}
                                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer bg-white break-inside-avoid"
                            >
                                <img
                                    src={galleryImages[num]}
                                    alt={`Activity ${num}`}
                                    loading="lazy"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-flag/80 via-navy-flag/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        {num === 16 && (
                                            <p className="font-bold text-[10px] md:text-sm leading-tight">
                                                मा. अध्यक्ष (युवा न्याय दल (अराजनैतिक)) जनपद फ़तेहपुर के एक कार्यक्रम में डीएम, एसपी, एडीएम, सीडीओ, एसडीएम सहित जिला प्रशासन के साथ बातचीत करते हुए।
                                            </p>
                                        )}
                                        {num === 28 && (
                                            <p className="font-bold text-[10px] md:text-sm leading-tight">
                                                भारतीय जनता पार्टी के कार्यक्रम के मंच में राष्ट्रीय नेत्रित्व टीम और केन्द्रीय और कैबिनेट और राज्य मंत्री और श्रेडी जनपदीय नेताओ के साथ युवा सम्मान शामिल
                                            </p>
                                        )}
                                        {num === 30 && (
                                            <p className="font-bold text-[10px] md:text-sm leading-tight">
                                              किसान सम्मान समारोह में मा. अध्यक्ष (जिला पंचायत) और मा. विधायकगढ़ और मा. ब्लॉक प्रमुख सहित नेताओ के साथ युवा किसानो के सम्मान में शामिल
                                            </p>
                                        )}
                                        {num === 36 && (
                                            <p className="font-bold text-sm">
                                               ओम प्रकाश यादव<br />राष्ट्रीय उपाध्यक्ष
                                            </p>
                                        )}
                                        {num === 37 && (
                                            <p className="font-bold text-sm">
                                                  गगन बाजपेई<br />राष्ट्रीय उपाध्यक्ष, पूर्व राज्य मंत्री
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-white text-navy-flag p-3 rounded-full shadow-xl hover:bg-saffron hover:text-white transition-all"
                        >
                            <HiX size={24} />
                        </motion.button>
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={galleryImages[selectedImage]}
                            alt={`Activity ${selectedImage}`}
                            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
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
                            समाज परिवर्तन की मशाल
                        </h2>
                        <p className="text-white/90 text-lg max-w-2xl mx-auto">
                            न्याय, समानता और युवाओं का सशक्तिकरण हमारा प्रमुख संकल्प है
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
