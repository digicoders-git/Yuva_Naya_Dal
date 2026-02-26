import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { galleryImages } from '../utils/images';
import LeadershipSection from '../components/LeadershipSection';

const Gallery = () => {
    // Array from 1 to 37
    const images = Array.from({ length: 37 }, (_, i) => i + 1);

    return (
        <AnimatedPage>
            {/* Header Section */}
            <div className="relative pt-16 pb-20 text-center bg-slate-50">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-300  opacity-50" />
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black text-navy-flag mb-4 mt-8"
                >
                    Our <span className="text-saffron">Gallery</span>
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    className="h-1.5 bg-green-flag mx-auto rounded-full mb-6"
                />
                <p className="text-slate-500 max-w-2xl mx-auto px-6 italic">
                    "युवा न्याय दल की गतिविधियों, सभाओं और सामाजिक कार्यों की कुछ झलकियां।"
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="container mx-auto px-4 pb-24">
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {images.map((num) => (
                        <motion.div
                            key={num}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                            className="relative group rounded-3xl overflow-hidden shadow-lg border-2 border-white hover:border-saffron transition-all cursor-pointer bg-white break-inside-avoid"
                        >
                            {/* We use the public URL path for Vite development */}
                            <img
                                src={galleryImages[num]}
                                alt={`Yuva Nyay Dal Activity ${num}`}
                                loading="lazy"
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.style.display = 'none'; // Hide if image fails
                                }}
                            />

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-flag/90 via-navy-flag/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-black text-sm md:text-base tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 leading-tight">
                                    {num === 36 ? (
                                        <>राष्ट्रीय उपाध्यक्ष,<br />ओम प्रकाश यादव पूर्व राज्य मंत्री उत्तर प्रदेश सरकार</>
                                    ) : num === 37 ? (
                                        <>गगन बाजपेई,<br />राष्ट्रीय उपाध्यक्ष</>
                                    ) : (
                                        `युवा न्याय दल - झलकी ${num}`
                                    )}
                                </p>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs font-bold">{num}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Leadership Message Section */}
            <LeadershipSection />

            {/* Motivation Banner */}
            <div className="bg-navy-flag py-16 px-6 text-center text-white relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-saffron/20 rounded-full blur-[80px]" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">समाज परिवर्तन की मशाल, युवा न्याय दल के साथ</h3>
                <p className="text-slate-300 relative z-10 italic">"न्याय, समानता और युवाओं का सशक्तिकरण हमारा प्रमुख संकल्प है।"</p>
            </div>
        </AnimatedPage>
    );
};

export default Gallery;
