import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../utils/images';
import { HiX } from 'react-icons/hi';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const images = Array.from({ length: 37 }, (_, i) => i + 1);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Page Header */}
            <section className="pt-32 pb-16 px-6">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-navy-flag mb-4">
                            हमारी गैलरी
                        </h1>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="h-1 w-40 bg-gradient-to-r from-saffron via-white to-green-flag mx-auto mb-6"
                        />
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            युवा न्याय दल की गतिविधियों और सामाजिक कार्यों की झलकियां
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="pb-20 px-6">
                <div className="container mx-auto max-w-7xl">
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
                                        {num === 36 && (
                                            <p className="font-bold text-sm">
                                                गगन बाजपेई<br />राष्ट्रीय उपाध्यक्ष
                                            </p>
                                        )}
                                        {num === 37 && (
                                            <p className="font-bold text-sm">
                                                ओम प्रकाश यादव<br />राष्ट्रीय उपाध्यक्ष, पूर्व राज्य मंत्री
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
