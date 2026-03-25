import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { logo, image36, image37, image38, image8 , image40 , image41 ,image42 , image43, image44 } from '../utils/images';
import { HiOutlineShieldCheck, HiOutlineGlobe, HiOutlineChartBar, HiOutlineArrowRight } from 'react-icons/hi';
import { FaBalanceScale, FaGraduationCap, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import ActivitiesSection from '../components/ActivitiesSection';

const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle', 'success', 'error'
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        fatherName: '',
        email: '',
        address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/membership`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    fatherName: '',
                    email: '',
                    address: ''
                });
            } else {
                setSubmitStatus('error');
                setErrorMessage(data.error || 'कुछ गलत हुआ। कृपया पुनः प्रयास करें।');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setErrorMessage('सर्वर से संपर्क करने में असमर्थ। कृपया बाद में प्रयास करें।');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!isFormOpen) {
            setSubmitStatus('idle');
            setErrorMessage('');
        }
    }, [isFormOpen]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Hero Section */}
            <section className="pt-40 pb-32 px-6 relative overflow-hidden bg-gradient-to-br from-navy-flag via-slate-900 to-navy-flag min-h-[85vh] flex items-center">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-saffron rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-flag rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
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
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-[1.1] font-heading uppercase tracking-tight">
                            <div className="flex flex-col gap-2">
                               
                                युवा न्याय दल<br />
                                 {/* <span className="text-saffron text-[15px] font-bold tracking-[0.2em] font-body uppercase">(अराजनैतिक)</span> */}
                            </div>
                                
                                <span className="text-saffron">राष्ट्र का संकल्प</span>
                           
                            </h1>
                            <p className="text-xl text-slate-300 mb-4 leading-relaxed">
                                युवा न्याय दल - एक अराजनैतिक संगठन जो युवाओं के सशक्तिकरण, सामाजिक न्याय और राष्ट्र निर्माण के लिए प्रतिबद्ध है।
                            </p>
                            <div className="bg-white/10 backdrop-blur-md border-l-4 border-saffron p-4 rounded-lg mb-8">
                                <p className="text-white text-sm font-semibold">
                                    "युवा शक्ति ही राष्ट्र की असली शक्ति है - हम शिक्षा, रोजगार और समान अवसरों के लिए संघर्षरत हैं"
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 items-center">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <NavLink
                                        to="/about"
                                        className="group bg-gradient-to-r from-saffron to-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-saffron/50 transition-all flex items-center gap-2"
                                    >
                                        हमारे बारे में
                                        <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </NavLink>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <NavLink
                                        to="/connect"
                                        className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center"
                                    >
                                        जुड़ें
                                    </NavLink>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right - Logo with Modern Design */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
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
                                    14000+ सदस्य
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

            {/* Stats Section */}
            <section className="py-16 px-4 md:px-6 bg-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-saffron/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-navy-flag/5 rounded-full blur-3xl" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <StatCard number="10000+" label="सक्रिय सदस्य" delay={0.1} />
                        <StatCard number="50+" label="सफल अभियान" delay={0.2} />
                        <StatCard number="100+" label="जिला इकाइयाँ" delay={0.3} />
                        <StatCard number="5+" label="राज्य स्तर" delay={0.4} />
                    </div>
                </div>
            </section>

            {/* About Party - Detailed Content */}
            <section className="pt-12 pb-20 px-4 md:px-6 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-flag mb-6">युवा न्याय दल क्या है?</h2>
                        <div className="h-1 w-32 bg-saffron mx-auto rounded-full mb-8" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="bg-gradient-to-br from-saffron/10 to-orange-50 p-8 rounded-2xl border-l-4 border-saffron">
                                <h3 className="text-2xl font-bold text-navy-flag mb-4">🎯 हमारा परिचय</h3>
                                <p className="text-slate-700 leading-relaxed text-lg">
                                    युवा न्याय दल एक <strong>अराजनैतिक सामाजिक संगठन</strong> है जो भारत के युवाओं को एकजुट करने और उन्हें सशक्त बनाने के लिए समर्पित है। हम किसी राजनीतिक दल से जुड़े नहीं हैं, बल्कि समाज सेवा और राष्ट्र निर्माण में विश्वास रखते हैं।
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-green-flag/10 to-emerald-50 p-8 rounded-2xl border-l-4 border-green-flag">
                                <h3 className="text-2xl font-bold text-navy-flag mb-4">🌟 हमारी स्थापना</h3>
                                <p className="text-slate-700 leading-relaxed text-lg">
                                    युवा न्याय दल की स्थापना उन युवाओं के लिए की गई जो समाज में सकारात्मक बदलाव लाना चाहते हैं। हमारा मानना है कि युवा शक्ति ही देश की असली ताकत है और उन्हें सही दिशा मिलने पर वे राष्ट्र को नई ऊंचाइयों तक ले जा सकते हैं।
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="bg-gradient-to-br from-navy-flag/10 to-blue-50 p-8 rounded-2xl border-l-4 border-navy-flag">
                                <h3 className="text-2xl font-bold text-navy-flag mb-4">💡 हम क्या करते हैं?</h3>
                                <ul className="space-y-3 text-slate-700 text-lg">
                                    <li className="flex items-start gap-3">
                                        <span className="text-saffron font-bold">✓</span>
                                        <span>युवाओं को शिक्षा और रोजगार के अवसर प्रदान करना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-saffron font-bold">✓</span>
                                        <span>सामाजिक न्याय और समानता के लिए आवाज उठाना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-saffron font-bold">✓</span>
                                        <span>भ्रष्टाचार और अन्याय के खिलाफ जागरूकता अभियान</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-saffron font-bold">✓</span>
                                        <span>महिला सशक्तिकरण और सुरक्षा के लिए कार्य</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-saffron font-bold">✓</span>
                                        <span>गरीब और वंचित वर्गों की सहायता</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-purple-100 to-pink-50 p-8 rounded-2xl border-l-4 border-purple-600">
                                <h3 className="text-2xl font-bold text-navy-flag mb-4">🚀 हमारा विज़न</h3>
                                <p className="text-slate-700 leading-relaxed text-lg">
                                    एक ऐसा भारत जहां हर युवा को समान अवसर मिले, जहां न्याय, पारदर्शिता और ईमानदारी हो, और जहां युवा शक्ति राष्ट्र निर्माण में अग्रणी भूमिका निभाए।
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Why We Are Different */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-navy-flag to-slate-800 text-white p-12 rounded-3xl shadow-2xl"
                    >
                        <h3 className="text-3xl font-bold mb-8 text-center">🎭 हम राजनीतिक पार्टियों से कैसे अलग हैं?</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-5xl mb-4">🚫</div>
                                <h4 className="text-xl font-bold mb-3 text-saffron">अराजनैतिक</h4>
                                <p className="text-white/90">हम किसी राजनीतिक दल से जुड़े नहीं हैं। हमारा उद्देश्य सत्ता नहीं, बल्कि समाज सेवा है।</p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl mb-4">🤝</div>
                                <h4 className="text-xl font-bold mb-3 text-green-flag">पारदर्शिता</h4>
                                <p className="text-white/90">हमारे सभी कार्य और फंड पूरी तरह पारदर्शी हैं। कोई छुपा एजेंडा नहीं।</p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl mb-4">💪</div>
                                <h4 className="text-xl font-bold mb-3 text-saffron">युवा केंद्रित</h4>
                                <p className="text-white/90">हमारा फोकस सिर्फ युवाओं का विकास और उनका सशक्तिकरण है।</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Goals & Mission */}
            <section className="py-12 px-4 md:px-6 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-flag mb-6">हमारे लक्ष्य और उद्देश्य</h2>
                        <div className="h-1 w-32 bg-saffron mx-auto rounded-full mb-6" />
                        <p className="text-slate-600 text-xl max-w-3xl mx-auto">मुख्‍य उद्देश्‍य युवाओ को उज्‍जवल भविष्‍य के लिए रुचि क्षेत्र। जैसे व्यवस्था, शिक्षा, संगीत, खेलकुद, राजनीति, जैसे क्षेत्र में उनको अग्रशर करने के लिए संघर्ष समर्पण करना।</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-saffron"
                        >
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="text-2xl font-bold text-navy-flag mb-4">शिक्षा का अधिकार</h3>
                            <p className="text-slate-600 leading-relaxed">
                                हर युवा को गुणवत्तापूर्ण शिक्षा मिले, यह सुनिश्चित करना। गरीब छात्रों के लिए छात्रवृत्ति और मुफ्त शिक्षा की व्यवस्था करना।
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-green-flag"
                        >
                            <div className="text-4xl mb-4">💼</div>
                            <h3 className="text-2xl font-bold text-navy-flag mb-4">रोजगार सृजन</h3>
                            <p className="text-slate-600 leading-relaxed">
                                बेरोजगारी को खत्म करने के लिए कौशल विकास कार्यक्रम चलाना। युवाओं को स्वरोजगार के लिए प्रेरित और सहायता करना।
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-navy-flag"
                        >
                            <div className="text-4xl mb-4">⚖️</div>
                            <h3 className="text-2xl font-bold text-navy-flag mb-4">सामाजिक न्याय</h3>
                            <p className="text-slate-600 leading-relaxed">
                                समाज के हर वर्ग को समान अधिकार और न्याय दिलाना। जाति, धर्म, लिंग के आधार पर भेदभाव को खत्म करना।
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-purple-600"
                        >
                            <div className="text-4xl mb-4">🚫</div>
                            <h3 className="text-2xl font-bold text-navy-flag mb-4">भ्रष्टाचार मुक्त समाज</h3>
                            <p className="text-slate-600 leading-relaxed">
                                भ्रष्टाचार के खिलाफ जागरूकता फैलाना और पारदर्शी प्रशासन की मांग करना। ईमानदारी और नैतिकता को बढ़ावा देना।
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-pink-600"
                        >
                            <div className="text-4xl mb-4">👩</div>
                            <h3 className="text-2xl font-bold text-navy-flag mb-4">महिला सशक्तिकरण</h3>
                            <p className="text-slate-600 leading-relaxed">
                                महिलाओं की सुरक्षा और उनके अधिकारों के लिए लड़ना। महिलाओं को आत्मनिर्भर बनाने के लिए कार्यक्रम चलाना।
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-orange-600"
                        >
                            <div className="text-4xl mb-4">🌍</div>
                            <h3 className="text-2xl font-bold text-navy-flag mb-4">राष्ट्र निर्माण</h3>
                            <p className="text-slate-600 leading-relaxed">
                                युवाओं को राष्ट्र निर्माण में सक्रिय भागीदारी के लिए प्रेरित करना। देशभक्ति और राष्ट्रीय एकता को मजबूत करना।
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-12 px-4 md:px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-flag mb-6">आप हमसे क्यों जुड़ें?</h2>
                        <div className="h-1 w-32 bg-saffron mx-auto rounded-full mb-6" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-saffron to-orange-600 text-white p-10 rounded-3xl shadow-2xl"
                        >
                            <h3 className="text-3xl font-bold mb-6">🎯 युवाओं के लिए</h3>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <span>अपनी आवाज को मजबूत बनाएं और समाज में बदलाव लाएं</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <span>नेतृत्व कौशल विकसित करें और अनुभव प्राप्त करें</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <span>देशभर के युवाओं से जुड़ें और नेटवर्क बनाएं</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <span>सामाजिक कार्यों में भाग लेकर समाज सेवा करें</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-green-flag to-emerald-600 text-white p-10 rounded-3xl shadow-2xl"
                        >
                            <h3 className="text-3xl font-bold mb-6">🌟 हमारे साथ मिलेगा</h3>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <span>मुफ्त प्रशिक्षण और कौशल विकास कार्यक्रम</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <span>रोजगार और स्वरोजगार में सहायता</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <span>कानूनी सहायता और मार्गदर्शन</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <span>राष्ट्रीय स्तर पर पहचान और सम्मान</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <NavLink
                            to="/connect"
                            className="inline-block bg-gradient-to-r from-navy-flag to-saffron text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl"
                        >
                            अभी जुड़ें और बदलाव का हिस्सा बनें 🚀
                        </NavLink>
                    </motion.div>
                </div>
            </section>

            {/* Our Work & Achievements */}
            <section className="py-12 px-4 md:px-6 bg-gradient-to-br from-white to-slate-50">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-flag mb-6">हमारे कार्य और उपलब्धियां</h2>
                        <div className="h-1 w-32 bg-saffron mx-auto rounded-full mb-6" />
                        <p className="text-slate-600 text-xl max-w-3xl mx-auto">युवा न्याय दल ने समाज में सकारात्मक बदलाव लाने के लिए कई महत्वपूर्ण कार्य किए हैं</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-saffron/10 to-orange-50 p-10 rounded-3xl border-2 border-saffron/20 shadow-xl"
                        >
                            <h3 className="text-3xl font-bold text-navy-flag mb-6 flex items-center gap-3">
                                <span className="text-4xl">📢</span> सामाजिक जागरूकता अभियान
                            </h3>
                            <ul className="space-y-4 text-slate-700 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-saffron font-bold text-xl">•</span>
                                    <span>भ्रष्टाचार के खिलाफ जन जागरूकता रैलियां और सेमिनार</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-saffron font-bold text-xl">•</span>
                                    <span>महिला सुरक्षा और अधिकारों के लिए जागरूकता कार्यक्रम</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-saffron font-bold text-xl">•</span>
                                    <span>स्वच्छता अभियान और पर्यावरण संरक्षण कार्यक्रम</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-saffron font-bold text-xl">•</span>
                                    <span>नशा मुक्ति और युवा सशक्तिकरण अभियान</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-green-flag/10 to-emerald-50 p-10 rounded-3xl border-2 border-green-flag/20 shadow-xl"
                        >
                            <h3 className="text-3xl font-bold text-navy-flag mb-6 flex items-center gap-3">
                                <span className="text-4xl">🎓</span> शिक्षा और कौशल विकास
                            </h3>
                            <ul className="space-y-4 text-slate-700 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-flag font-bold text-xl">•</span>
                                    <span>गरीब छात्रों के लिए मुफ्त शिक्षा और ट्यूशन कक्षाएं</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-flag font-bold text-xl">•</span>
                                    <span>कौशल विकास कार्यशालाएं और प्रशिक्षण कार्यक्रम</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-flag font-bold text-xl">•</span>
                                    <span>करियर मार्गदर्शन और रोजगार मेले का आयोजन</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-flag font-bold text-xl">•</span>
                                    <span>छात्रवृत्ति और शैक्षिक सहायता कार्यक्रम</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-navy-flag/10 to-blue-50 p-10 rounded-3xl border-2 border-navy-flag/20 shadow-xl"
                        >
                            <h3 className="text-3xl font-bold text-navy-flag mb-6 flex items-center gap-3">
                                <span className="text-4xl">🤝</span> सामाजिक सेवा कार्य
                            </h3>
                            <ul className="space-y-4 text-slate-700 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-navy-flag font-bold text-xl">•</span>
                                    <span>गरीबों और जरूरतमंदों के लिए भोजन वितरण</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-navy-flag font-bold text-xl">•</span>
                                    <span>मुफ्त चिकित्सा शिविर और स्वास्थ्य जांच कार्यक्रम</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-navy-flag font-bold text-xl">•</span>
                                    <span>प्राकृतिक आपदाओं में राहत और बचाव कार्य</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-navy-flag font-bold text-xl">•</span>
                                    <span>वृद्धाश्रम और अनाथालयों में सेवा कार्य</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-purple-100 to-pink-50 p-10 rounded-3xl border-2 border-purple-200 shadow-xl"
                        >
                            <h3 className="text-3xl font-bold text-navy-flag mb-6 flex items-center gap-3">
                                <span className="text-4xl">⚖️</span> न्याय और अधिकार
                            </h3>
                            <ul className="space-y-4 text-slate-700 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 font-bold text-xl">•</span>
                                    <span>मुफ्त कानूनी सलाह और सहायता केंद्र</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 font-bold text-xl">•</span>
                                    <span>अन्याय के खिलाफ आवाज उठाना और विरोध प्रदर्शन</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 font-bold text-xl">•</span>
                                    <span>पीड़ितों के लिए न्याय दिलाने में सहायता</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 font-bold text-xl">•</span>
                                    <span>मानवाधिकार संरक्षण और जागरूकता</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How to Join - Modern Design */}
            <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-navy-flag via-slate-900 to-navy-flag relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-saffron rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 left-10 w-64 h-64 bg-green-flag rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="container mx-auto max-w-6xl relative z-10">
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
                            className="inline-block bg-saffron/20 backdrop-blur-sm border border-saffron/30 px-6 py-2 rounded-full mb-4"
                        >
                            <span className="text-saffron font-bold text-sm uppercase tracking-wider">सदस्यता प्रक्रिया</span>
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">कैसे जुड़ें युवा न्याय दल से?</h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-1 w-24 md:w-32 bg-saffron mx-auto rounded-full mb-4"
                        />
                        <p className="text-white/90 text-base md:text-xl max-w-3xl mx-auto">युवा न्याय दल का सदस्य बनना बहुत आसान है। बस कुछ सरल चरणों का पालन करें</p>
                    </motion.div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
                        <motion.a
                            href="https://wa.me/917800392026"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 text-center group hover:bg-white/20 transition-all block"
                        >
                            <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform">1️⃣</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-saffron">संपर्क करें</h3>
                            <p className="text-white/90 text-sm md:text-base">हमें फोन, WhatsApp या ईमेल के माध्यम से संपर्क करें</p>
                        </motion.a>

                        <div
                            onClick={() => setIsFormOpen(true)}
                            className="block cursor-pointer"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 text-center group hover:bg-white/20 transition-all h-full"
                            >
                                <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform">2️⃣</div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-green-flag">फॉर्म भरें</h3>
                                <p className="text-white/90 text-sm md:text-base">सदस्यता फॉर्म भरें और अपनी जानकारी दें</p>
                            </motion.div>
                        </div>

                        <motion.a
                            href="https://wa.me/917800392026"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 text-center group hover:bg-white/20 transition-all block"
                        >
                            <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform">3️⃣</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-saffron">सत्यापन</h3>
                            <p className="text-white/90 text-sm md:text-base">हमारी टीम आपकी जानकारी का सत्यापन करेगी</p>
                        </motion.a>

                        <motion.a
                            href="https://wa.me/917800392026"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 text-center group hover:bg-white/20 transition-all block"
                        >
                            <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform">4️⃣</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-green-flag">स्वागत है!</h3>
                            <p className="text-white/90 text-sm md:text-base">बधाई हो! अब आप युवा न्याय दल के सदस्य हैं</p>
                        </motion.a>
                    </div>

                    {/* Contact Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/20"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-white">📞 तुरंत संपर्क करें</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-all group"
                            >
                                <p className="text-white/70 mb-2 text-sm">फोन नंबर</p>
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+917800250000" className="text-xl font-bold text-saffron hover:text-white transition-colors">+91 78002 50000</a>
                                    <a href="tel:+919236968527" className="text-xl font-bold text-saffron hover:text-white transition-colors">+91 92369 68527</a>
                                </div>
                            </motion.div>
                            <motion.a
                                href="mailto:yuvanyaydal2026@gmail.com"
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-all group"
                            >
                                <p className="text-white/70 mb-2 text-sm">ईमेल</p>
                                <p className="text-lg md:text-xl font-bold text-green-flag group-hover:text-white transition-colors break-all">yuvanyaydal2026@gmail.com</p>
                            </motion.a>
                            <motion.a
                                href="https://wa.me/917800392026"
                                target="_blank"
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-all group"
                            >
                                <p className="text-white/70 mb-2 text-sm">WhatsApp</p>
                                <p className="text-xl md:text-2xl font-bold text-saffron group-hover:text-white transition-colors">+91 7800 39 2026</p>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Commitments Section */}
            <section className="pt-12 pb-8 md:pb-16 px-4 md:px-6 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-flag mb-4">
                            हमारी प्रतिबद्धताएं
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-1 w-24 md:w-40 bg-saffron mx-auto rounded-full mb-6"
                        />
                        <p className="text-slate-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                            युवा न्याय दल समाज के हर वर्ग के विकास और उत्थान के लिए प्रतिबद्ध है। हम युवाओं को सशक्त बनाने, शिक्षा और रोजगार के अवसर प्रदान करने, तथा समाज में न्याय, समानता और पारदर्शिता स्थापित करने के लिए निरंतर प्रयासरत हैं। हमारा लक्ष्य एक ऐसे भारत का निर्माण करना है जहां हर युवा को अपने सपनों को साकार करने का समान अवसर मिले।
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
                            desc="हर युवा को गुणवत्तापूर्ण शिक्षा और समान अवसर प्रदान करना"
                            color="text-navy-flag"
                            delay={0.2}
                        />
                        <CommitmentCard
                            icon={<HiOutlineShieldCheck size={36} />}
                            title="युवा सशक्तिकरण"
                            desc="युवाओं को आत्मनिर्भर और सशक्त बनाने के लिए निरंतर प्रयास"
                            color="text-green-flag"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Leaders Section */}
            <section className="py-12 px-4 md:px-6 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10 md:mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-flag mb-4">
                            हमारे नेतृत्व
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-1 w-24 md:w-40 bg-saffron mx-auto rounded-full mb-6"
                        />
                        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            युवा न्याय दल के वो समर्पित, कर्मठ और अनुभवी नेतृत्व, जो युवाओं के सशक्तिकरण के लिए दिन रात काम करते हैं और समाज में सकारात्मक बदलाव लाने के लिए प्रतिबद्ध हैं।
                        </p>
                    </motion.div>


                    {/* === ORG-CHART CHAIN LAYOUT === */}
                    <div className="flex flex-col items-center gap-0">

                        {/* Level 1 — राष्ट्रीय अध्यक्ष */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="w-full flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 bg-saffron/10 border border-saffron/30 text-saffron text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                                स्तर - १
                            </div>
                            <div className="max-w-xs w-full">
                                <LeaderCard
                                    image={image8}
                                    name="मा. विजय शंकर शुक्ला"
                                    title="राष्ट्रीय अध्यक्ष"
                                    subtitle="संगठन का कुशल नेतृत्व"
                                    delay={0.1}
                                    position="object-contain bg-white"
                                    onClick={() => setSelectedImage({ img: image8, name: "मा. विजय शंकर शुक्ला (अधिवक्ता)" })}
                                />
                            </div>
                        </motion.div>

                        {/* Connector */}
                        <div className="flex flex-col items-center my-1">
                            <div className="w-0.5 h-8 bg-gradient-to-b from-saffron to-navy-flag opacity-40"/>
                            <div className="w-3 h-3 rounded-full bg-saffron/60"/>
                        </div>

                        {/* Level 2 — राष्ट्रीय उपाध्यक्ष */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="w-full flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 bg-navy-flag/10 border border-navy-flag/30 text-navy-flag text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                                स्तर - २ &nbsp;|&nbsp; राष्ट्रीय उपाध्यक्ष
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
                                <LeaderCard
                                    image={image36}
                                    name="मा. ओम प्रकाश यादव"
                                    title="राष्ट्रीय उपाध्यक्ष"
                                    subtitle="पूर्व राज्य मंत्री, उ.प्र. सरकार"
                                    delay={0.2}
                                    onClick={() => setSelectedImage({ img: image36, name: "मा. ओम प्रकाश यादव" })}
                                />
                                <LeaderCard
                                    image={image37}
                                    name="गगन बाजपेई"
                                    title="राष्ट्रीय उपाध्यक्ष"
                                    subtitle="लखनऊ, उत्तर प्रदेश"
                                    delay={0.3}
                                    onClick={() => setSelectedImage({ img: image37, name: "गगन बाजपेई" })}
                                />
                                <LeaderCard
                                    image={image43}
                                    name="निहार कुमार"
                                    title="राष्ट्रीय उपाध्यक्ष"
                                    subtitle="प्रयागराज, उत्तर प्रदेश"
                                    delay={0.5}
                                    position="object-top object-contain"
                                    onClick={() => setSelectedImage({ img: image43, name: "निहार कुमार" })}
                                />
                                <LeaderCard
                                    image={image44}
                                    name="राम सिंह यादव"
                                    title="राष्ट्रीय उपाध्यक्ष"
                                    subtitle="आजमगढ़, उत्तर प्रदेश"
                                    delay={0.6}
                                    position="object-top object-contain"
                                    onClick={() => setSelectedImage({ img: image44, name: "राम सिंह यादव" })}
                                />
                            </div>
                        </motion.div>

                        {/* Connector */}
                        <div className="flex flex-col items-center my-1">
                            <div className="w-0.5 h-8 bg-gradient-to-b from-navy-flag to-saffron opacity-40"/>
                            <div className="w-3 h-3 rounded-full bg-navy-flag/60"/>
                        </div>

                        {/* Level 3 — राष्ट्रीय महासचिव */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="w-full flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 bg-green-flag/10 border border-green-flag/30 text-green-flag text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                                स्तर - ३ &nbsp;|&nbsp; राष्ट्रीय महासचिव
                            </div>
                            <div className="max-w-xs w-full">
                                <LeaderCard
                                    image={image38}
                                    name="शुभम गुप्ता"
                                    title="राष्ट्रीय महासचिव"
                                    subtitle="लखनऊ, उत्तर प्रदेश"
                                    delay={0.4}
                                    position="object-top object-contain"
                                    onClick={() => setSelectedImage({ img: image38, name: "शुभम गुप्ता" })}
                                />
                            </div>
                        </motion.div>

                        {/* Connector */}
                        <div className="flex flex-col items-center my-1">
                            <div className="w-0.5 h-8 bg-gradient-to-b from-green-flag to-saffron opacity-40"/>
                            <div className="w-3 h-3 rounded-full bg-green-flag/60"/>
                        </div>

                        {/* Level 4 — राष्ट्रीय सचिव */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="w-full flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 bg-saffron/10 border border-saffron/30 text-saffron text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                                स्तर - ४ &nbsp;|&nbsp; राष्ट्रीय सचिव
                            </div>
                            <div className="max-w-xs w-full">
                                <LeaderCard
                                    image={image41}
                                    name="राजेंद्र सिंह"
                                    title="राष्ट्रीय सचिव"
                                    subtitle="रायबरेली, उत्तर प्रदेश"
                                    delay={0.4}
                                    position="object-top object-contain"
                                    onClick={() => setSelectedImage({ img: image41, name: "राजेंद्र सिंह" })}
                                />
                            </div>
                        </motion.div>

                        {/* Connector */}
                        <div className="flex flex-col items-center my-1">
                            <div className="w-0.5 h-8 bg-gradient-to-b from-saffron to-slate-500 opacity-40"/>
                            <div className="w-3 h-3 rounded-full bg-slate-400"/>
                        </div>

                        {/* Level 5 — राष्ट्रीय प्रवक्ता */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="w-full flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-300 text-slate-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                                स्तर - ५ &nbsp;|&nbsp; राष्ट्रीय प्रवक्ता
                            </div>
                            <div className="max-w-xs w-full">
                                <LeaderCard
                                    image={image40}
                                    name="शिव कुमार सिंह"
                                    title="राष्ट्रीय प्रवक्ता"
                                    subtitle="अमेठी, उत्तर प्रदेश"
                                    delay={0.5}
                                    position="object-top object-contain"
                                    onClick={() => setSelectedImage({ img: image40, name: "शिव कुमार सिंह" })}
                                />
                            </div>
                        </motion.div>

                        {/* Connector */}
                        <div className="flex flex-col items-center my-1">
                            <div className="w-0.5 h-8 bg-gradient-to-b from-slate-500 to-navy-flag opacity-40"/>
                            <div className="w-3 h-3 rounded-full bg-navy-flag/60"/>
                        </div>

                        {/* Level 6 — राष्ट्रीय कोषाध्यक्ष */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="w-full flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 bg-navy-flag/10 border border-navy-flag/30 text-navy-flag text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                                स्तर - ६ &nbsp;|&nbsp; राष्ट्रीय कोषाध्यक्ष
                            </div>
                            <div className="max-w-xs w-full">
                                <LeaderCard
                                    image={image42}
                                    name="नागेन्द्र द्विवेदी"
                                    title="राष्ट्रीय कोषाध्यक्ष"
                                    subtitle="फतेहपुर, उत्तर प्रदेश"
                                    delay={0.5}
                                    position="object-top object-contain"
                                    onClick={() => setSelectedImage({ img: image42, name: "नागेन्द्र द्विवेदी" })}
                                />
                            </div>
                        </motion.div>

                    </div>
                    {/* === END ORG-CHART === */}

                </div>
            </section>

            {/* Organization Info Section */}
            <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-navy-flag via-slate-900 to-navy-flag relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-saffron rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-64 h-64 bg-green-flag rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">युवा न्याय दल - संगठनात्मक ढांचा</h2>
                        <div className="h-1 w-32 bg-saffron mx-auto rounded-full mb-6" />
                        <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                            एक मजबूत और पारदर्शी संगठन, सामाजिक न्याय के लिए समर्पित।
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                        >
                            <h3 className="text-xl font-bold text-saffron mb-3">हमारा उद्देश्य</h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                                युवाओं को शिक्षा, रोजगार और समान अवसर प्रदान करना तथा समाज में न्याय और पारदर्शिता स्थापित करना।
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                        >
                            <h3 className="text-xl font-bold text-green-flag mb-3">हमारी पहुंच</h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                                5+ राज्यों में 100+ जिला इकाइयां और 10,000+ सक्रिय सदस्यों के साथ हम पूरे भारत में कार्यरत हैं।
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                        >
                            <h3 className="text-xl font-bold text-white mb-3">हमारा संकल्प</h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                                युवा शक्ति को सशक्त बनाकर एक मजबूत, स्वावलंबी और समृद्ध भारत का निर्माण करना।
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gallery Slider */}
            <ActivitiesSection />


            {/* Image Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-white text-navy-flag p-3 rounded-full shadow-xl hover:bg-saffron hover:text-white transition-all z-10"
                        >
                            <HiX size={24} />
                        </motion.button>
                        <motion.div
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={selectedImage.img}
                                alt={selectedImage.name}
                                className="w-full h-auto max-h-[70vh] object-contain bg-white"
                            />
                            <div className="p-6 text-center bg-gradient-to-r from-navy-flag to-saffron">
                                <h3 className="text-2xl font-bold text-white">{selectedImage.name}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isFormOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto py-10"
                        onClick={() => setIsFormOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative my-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsFormOpen(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-navy-flag transition-colors z-10"
                            >
                                <HiX size={32} />
                            </button>

                            <div className="flex flex-col md:flex-row">
                                {/* Left Side - Info */}
                                <div className="md:w-1/3 bg-gradient-to-br from-navy-flag to-slate-800 p-8 text-white flex flex-col justify-between relative overflow-hidden">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/10 rounded-full blur-3xl" />
                                     <div className="relative z-10">
                                        <img src={logo} alt="Logo" className="w-16 h-16 rounded-full mb-6 border-2 border-white/20" />
                                        <h3 className="text-2xl font-bold mb-4 font-hindi">जुड़ें हमारे साथ</h3>
                                        <p className="text-sm text-slate-300">युवा न्याय दल का हिस्सा बनकर समाज में सकारात्मक बदलाव लाएं।</p>
                                     </div>
                                     <div className="mt-8 space-y-4 relative z-10">
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="w-6 h-6 bg-saffron/20 rounded-full flex items-center justify-center text-saffron">✓</div>
                                            <span>24/7 सहायता</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="w-6 h-6 bg-green-flag/20 rounded-full flex items-center justify-center text-green-flag">✓</div>
                                            <span>तुरंत जवाब</span>
                                        </div>
                                     </div>
                                </div>

                                {/* Right Side - Form or Status */}
                                <div className="md:w-2/3 p-8 lg:p-10">
                                    {submitStatus === 'success' ? (
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="h-full flex flex-col items-center justify-center text-center space-y-6 py-10"
                                        >
                                            <div className="w-20 h-20 bg-green-flag/10 rounded-full flex items-center justify-center text-green-flag relative">
                                                <motion.div 
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.2, type: 'spring' }}
                                                >
                                                    <HiOutlineShieldCheck size={48} />
                                                </motion.div>
                                                <motion.div 
                                                    className="absolute inset-0 rounded-full border-4 border-green-flag/30"
                                                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="text-3xl font-bold text-navy-flag font-hindi">बधाई हो!</h4>
                                                <p className="text-slate-600 font-medium">आपका सदस्यता आवेदन सफलतापूर्वक जमा कर लिया गया है।</p>
                                            </div>
                                            <p className="text-sm text-slate-500 max-w-xs mx-auto">
                                                हमारी टीम जल्द ही आपसे संपर्क करेगी। युवा न्याय दल के साथ जुड़ने के लिए धन्यवाद।
                                            </p>
                                            <button
                                                onClick={() => setIsFormOpen(false)}
                                                className="bg-navy-flag text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                                            >
                                                ठीक है
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <>
                                            <div className="mb-6">
                                                <h4 className="text-2xl font-bold text-navy-flag mb-1">सदस्यता फॉर्म</h4>
                                                <p className="text-sm text-slate-500 font-medium">अपनी जानकारी साझा करें</p>
                                            </div>

                                            {submitStatus === 'error' && (
                                                <motion.div 
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium rounded-r-xl flex items-center gap-3"
                                                >
                                                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-500 shrink-0">!</div>
                                                    <p>{errorMessage}</p>
                                                </motion.div>
                                            )}

                                            <form className="space-y-4" onSubmit={handleSubmit}>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider px-1">पूरा नाम</label>
                                                        <input
                                                            required
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            type="text"
                                                            placeholder="आपका नाम"
                                                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5 flex flex-col items-start w-full">
                                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider px-1">मोबाइल नंबर</label>
                                                        <input
                                                            required
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            type="tel"
                                                            placeholder="91XXXXXXXX"
                                                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-1.5 flex flex-col items-start w-full">
                                                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider px-1">पिता का नाम</label>
                                                    <input
                                                        required
                                                        name="fatherName"
                                                        value={formData.fatherName}
                                                        onChange={handleInputChange}
                                                        type="text"
                                                        placeholder="पिता का नाम लिखें"
                                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm"
                                                    />
                                                </div>

                                                <div className="space-y-1.5">
                                                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider px-1">ईमेल (वैकल्पिक)</label>
                                                    <input
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        type="email"
                                                        placeholder="email@example.com"
                                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm"
                                                    />
                                                </div>

                                                <div className="space-y-1.5">
                                                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider px-1">पता / जिला</label>
                                                    <input
                                                        required
                                                        name="address"
                                                        value={formData.address}
                                                        onChange={handleInputChange}
                                                        type="text"
                                                        placeholder="अपना पता लिखें"
                                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm"
                                                    />
                                                </div>

                                                <motion.button
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    type="submit"
                                                    disabled={isLoading}
                                                    className={`w-full bg-gradient-to-r from-navy-flag to-saffron text-white py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-saffron/20 transition-all mt-4 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                                >
                                                    {isLoading ? (
                                                        <div className="flex items-center justify-center gap-2">
                                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                            <span>जमा हो रहा है...</span>
                                                        </div>
                                                    ) : 'अभी आवेदन करें'}
                                                </motion.button>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const StatCard = ({ number, label, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-gradient-to-br from-white to-slate-50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center border-2 border-slate-100 hover:border-saffron/30 hover:shadow-xl transition-all group relative overflow-hidden"
    >
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-saffron/10 to-transparent rounded-bl-full" />

        <motion.h3
            className="text-3xl md:text-4xl font-black text-navy-flag mb-1 group-hover:text-saffron transition-colors relative z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: delay + 0.2, type: "spring" }}
        >
            {number}
        </motion.h3>
        <p className="text-slate-600 font-semibold text-xs md:text-sm relative z-10">{label}</p>

        {/* Bottom accent line */}
        <div className="mt-3 h-1 w-8 bg-saffron/30 mx-auto rounded-full group-hover:w-full group-hover:bg-saffron transition-all duration-500" />
    </motion.div>
);

const CommitmentCard = ({ icon, title, desc, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all border border-slate-100 group relative overflow-hidden"
    >
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 to-navy-flag/5 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10">
            <motion.div
                className={`${color} mb-4 md:mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring" }}
            >
                {icon}
            </motion.div>
            <h4 className="text-lg md:text-xl font-bold text-navy-flag mb-2 md:mb-3">{title}</h4>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">{desc}</p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-saffron group-hover:w-full transition-all duration-500" />
    </motion.div>
);

const LeaderCard = ({ image, name, title, subtitle, delay, position = "object-cover", onClick }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        whileHover={{ y: -8 }}
        onClick={onClick}
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
    >
        <div className="relative overflow-hidden">
            <motion.img
                src={image}
                alt={name}
                className={`w-full h-[350px] md:h-[450px] ${position} group-hover:scale-105 transition-transform duration-500`}
            />
        </div>

        <div className="p-5 md:p-6 text-center">
            <h4 className="text-lg md:text-xl font-bold text-navy-flag mb-2 leading-tight">{name}</h4>
            <p className="text-saffron font-bold text-base md:text-lg mb-1">{title}</p>
            <p className="text-slate-600 text-sm md:text-base">{subtitle}</p>
        </div>

        {/* Bottom accent */}
        <div className="h-1 w-0 bg-saffron group-hover:w-full transition-all duration-500" />
    </motion.div>
);

const SocialLink = ({ icon, name, link, color, delay }) => {
    const icons = {
        facebook: <FaFacebookF className="text-xl sm:text-2xl md:text-3xl" />,
        instagram: <FaInstagram className="text-xl sm:text-2xl md:text-3xl" />,
        twitter: <FaTwitter className="text-xl sm:text-2xl md:text-3xl" />,
        youtube: <FaYoutube className="text-xl sm:text-2xl md:text-3xl" />,
        whatsapp: <FaWhatsapp className="text-xl sm:text-2xl md:text-3xl" />,
        telegram: <FaTelegramPlane className="text-xl sm:text-2xl md:text-3xl" />
    };

    return (
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
            <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl" />
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col items-center gap-2 sm:gap-3 border border-slate-100 group-hover:border-transparent transition-all">
                <div className={`${color} text-white w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                    {icons[icon]}
                </div>
                <p className="text-navy-flag font-bold text-[10px] sm:text-xs md:text-sm text-center leading-tight">{name}</p>
            </div>
        </motion.a>
    );
};

export default Home;
