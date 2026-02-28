import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { logo, image36, image37, image38, image1, image2, image3, image4, image5, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20 } from '../utils/images';
import { HiOutlineShieldCheck, HiOutlineGlobe, HiOutlineChartBar, HiOutlineArrowRight } from 'react-icons/hi';
import { FaBalanceScale, FaGraduationCap } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-flag/10 rounded-full blur-3xl" />

                <div className="container mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 100 }}
                                transition={{ delay: 0.3 }}
                                className="h-1 w-24 bg-saffron rounded-full mb-6"
                            />
                            <h1 className="text-5xl md:text-6xl font-bold text-navy-flag mb-6 leading-tight">
                                युवा न्याय दल<br />
                                <span className="text-saffron">राष्ट्र का संकल्प</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                देश का भविष्य युवाओं के हाथ में है। हम उन्हें सही दिशा, अवसर और मंच देने के लिए प्रतिबद्ध हैं।
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <NavLink
                                    to="/about"
                                    className="bg-navy-flag hover:bg-saffron text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl flex items-center gap-2"
                                >
                                    हमारे बारे में <HiOutlineArrowRight />
                                </NavLink>
                                <NavLink
                                    to="/connect"
                                    className="bg-white border-2 border-navy-flag text-navy-flag hover:bg-navy-flag hover:text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg"
                                >
                                    जुड़ें
                                </NavLink>
                            </div>
                        </motion.div>

                        {/* Right Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex justify-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-saffron/20 to-green-flag/20 rounded-full blur-3xl" />
                                <img
                                    src={logo}
                                    alt="Yuva Nyay Dal"
                                    className="relative w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-white"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <StatCard number="10K+" label="सक्रिय सदस्य" delay={0.1} />
                        <StatCard number="50+" label="सफल अभियान" delay={0.2} />
                        <StatCard number="100+" label="जिला इकाइयाँ" delay={0.3} />
                        <StatCard number="25+" label="राज्य स्तर" delay={0.4} />
                    </div>
                </div>
            </section>

            {/* Commitments Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-flag mb-4">
                            हमारी प्रतिबद्धताएं
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-1 w-40 bg-gradient-to-r from-saffron via-white to-green-flag mx-auto"
                        />
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <CommitmentCard
                            icon={<FaBalanceScale size={36} />}
                            title="सामाजिक न्याय"
                            desc="समाज के हर वर्ग की आवाज़ को बुलंद करना"
                            color="text-saffron"
                            delay={0.1}
                        />
                        <CommitmentCard
                            icon={<FaGraduationCap size={36} />}
                            title="गुणवत्तापूर्ण शिक्षा"
                            desc="हर छात्र को बेहतर शिक्षा के अवसर"
                            color="text-navy-flag"
                            delay={0.2}
                        />
                        <CommitmentCard
                            icon={<HiOutlineChartBar size={36} />}
                            title="रोजगार के अवसर"
                            desc="बेरोजगारी को समाप्त करने की पहल"
                            color="text-green-flag"
                            delay={0.3}
                        />
                        <CommitmentCard
                            icon={<HiOutlineGlobe size={36} />}
                            title="भ्रष्टाचार मुक्ति"
                            desc="पारदर्शी प्रशासनिक प्रणाली का निर्माण"
                            color="text-saffron"
                            delay={0.4}
                        />
                        <CommitmentCard
                            icon={<HiOutlineShieldCheck size={36} />}
                            title="महिला सशक्तिकरण"
                            desc="महिलाओं को सुरक्षित समाज प्रदान करना"
                            color="text-navy-flag"
                            delay={0.5}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="bg-gradient-to-br from-navy-flag to-saffron rounded-2xl p-8 text-white flex flex-col justify-between"
                        >
                            <div>
                                <h4 className="text-2xl font-bold mb-4">क्या आप तैयार हैं?</h4>
                                <p className="text-white/90 mb-6">परिवर्तन की शुरुआत स्वयं से करें</p>
                            </div>
                            <NavLink
                                to="/connect"
                                className="bg-white text-navy-flag px-6 py-3 rounded-xl font-bold text-center hover:scale-105 transition-all"
                            >
                                अभी सदस्य बनें
                            </NavLink>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leaders Section */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-flag mb-4">
                            हमारा नेतृत्व
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-1 w-40 bg-gradient-to-r from-saffron via-white to-green-flag mx-auto"
                        />
                    </motion.div>

                    {/* Top Leaders Row */}
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
                        <LeaderCard
                            image={image8}
                            name="विजय शंकर शुक्ला"
                            title="राष्ट्रीय अध्यक्ष"
                            subtitle="संगठन का कुशल नेतृत्व"
                            delay={0.1}
                            position="object-contain bg-white"
                        />
                        <LeaderCard
                            image={image38}
                            name="शुभम गुप्ता"
                            title="राष्ट्रीय महासचिव"
                            subtitle="संगठन की प्रशासनिक रीढ़"
                            delay={0.2}
                            position="object-top object-contain "
                        />
                    </div>

                    {/* Vice Presidents Row */}
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-16 border-t pt-16 border-slate-100">
                        <LeaderCard
                            image={image37}
                            name="गगन बाजपेई"
                            title="राष्ट्रीय उपाध्यक्ष"
                            subtitle="संगठन के प्रेरणा स्रोत"
                            delay={0.3}
                        />
                        <LeaderCard
                            image={image36}
                            name="ओम प्रकाश यादव"
                            title="राष्ट्रीय उपाध्यक्ष"
                            subtitle="पूर्व राज्य मंत्री, उत्तर प्रदेश सरकार"
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* Gallery Slider */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
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

                    <div className="text-center mt-8">
                        <NavLink
                            to="/gallery"
                            className="inline-flex items-center gap-2 bg-navy-flag text-white px-8 py-3 rounded-full font-bold hover:bg-saffron transition-all shadow-xl"
                        >
                            पूरी गैलरी देखें <HiOutlineArrowRight />
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-navy-flag to-saffron">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
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

const StatCard = ({ number, label, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all"
    >
        <h3 className="text-4xl font-bold text-saffron mb-2">{number}</h3>
        <p className="text-slate-600 font-semibold">{label}</p>
    </motion.div>
);

const CommitmentCard = ({ icon, title, desc, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100"
    >
        <div className={`${color} mb-6`}>{icon}</div>
        <h4 className="text-xl font-bold text-navy-flag mb-3">{title}</h4>
        <p className="text-slate-600">{desc}</p>
    </motion.div>
);

const LeaderCard = ({ image, name, title, subtitle, delay, position = "object-cover" }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        whileHover={{ y: -10 }}
        className="group"
    >
        <div className="relative">
            <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-3xl "
            >
                <img
                    src={image}
                    alt={name}
                    className={`w-full h-[500px] ${position}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-20 transition-all duration-500" />
            </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: delay + 0.3 }}
                className="mt-6 text-center"
            >
                <h4 className="text-2xl font-bold text-navy-flag mb-2">{name}</h4>
                <p className="text-saffron font-semibold text-lg mb-1">{title}</p>
                <p className="text-slate-600">{subtitle}</p>
            </motion.div>
        </div>
    </motion.div>
);

export default Home;
