import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { image1, image2, image3, image4, image5, image7, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20 } from '../utils/images';
import 'swiper/css';
import 'swiper/css/navigation';

const ActivitiesSection = () => {
    return (
        <section className="pt-10 md:pt-12 pb-8 md:pb-12 bg-gradient-to-br from-white to-slate-50">
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-12 px-4 md:px-6"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-flag mb-4">
                        हमारी गतिविधियाँ
                    </h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="h-1 w-24 md:w-40 bg-saffron mx-auto rounded-full mb-6"
                    />
                    <p className="text-slate-600 text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
                        युवा न्याय दल द्वारा आयोजित विभिन्न सामाजिक कार्यक्रम, जागरूकता अभियान और समाज सेवा गतिविधियों की झलकियां। हम निरंतर युवाओं के सशक्तिकरण और समाज के उत्थान के लिए कार्यरत हैं।
                    </p>
                </motion.div>

                <div className="px-4 md:px-6">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={16}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        navigation
                        loop={false}
                        breakpoints={{
                            480: { slidesPerView: 1, spaceBetween: 16 },
                            640: { slidesPerView: 2, spaceBetween: 16 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                            1280: { slidesPerView: 4, spaceBetween: 24 }
                        }}
                        className="pb-12"
                    >
                        {[image1, image2, image3, image4, image5, image7, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20].map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <NavLink to="/gallery">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        className="relative group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={img}
                                                alt={`Activity ${idx + 1}`}
                                                className="w-full h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="text-center bg-white/90 px-6 py-4 rounded-xl shadow-xl">
                                                    <p className="text-navy-flag text-xl font-bold mb-2">पूरी गैलरी देखें</p>
                                                    <HiOutlineArrowRight className="text-saffron text-2xl mx-auto" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-1 w-0 bg-saffron group-hover:w-full transition-all duration-500" />
                                    </motion.div>
                                </NavLink>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ActivitiesSection;
