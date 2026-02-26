import { motion } from 'framer-motion';
import { HiOutlineLockClosed, HiOutlineEye, HiOutlineServer, HiOutlineShieldCheck } from 'react-icons/hi';
import AnimatedPage from '../components/AnimatedPage';
import LeadershipSection from '../components/LeadershipSection';

const Privacy = () => {
    return (
        <AnimatedPage>
            {/* Header */}
            <div className="relative pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden bg-navy-flag text-center rounded-b-[40px] md:rounded-b-[60px] shadow-2xl mx-2 md:mx-4 mb-10 md:mb-20 px-4 md:px-6">
                <div className="absolute inset-x-0 bottom-0 top-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 drop-shadow-xl"
                >
                    Privacy <span className="text-saffron">Policy</span>
                </motion.h2>
                <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                    (गोपनीयता नीति)
                </p>
            </div>

            <div className="container mx-auto px-6 max-w-5xl pb-20 md:pb-32">
                <div className="bg-white p-8 md:p-16 rounded-[40px] md:rounded-[60px] shadow-2xl border border-slate-100 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-green-flag" />

                    <div className="flex flex-col gap-12 text-slate-600">
                        <PrivacySection
                            icon={<HiOutlineEye size={24} />}
                            title="Information Collection / सूचना संग्रह"
                            content="We collect only necessary information like name and contact details during membership registration to keep you updated. / हम सदस्यता पंजीकरण के दौरान आपको अपडेट रखने के लिए नाम और संपर्क विवरण जैसी केवल आवश्यक जानकारी एकत्र करते हैं।"
                        />

                        <PrivacySection
                            icon={<HiOutlineLockClosed size={24} />}
                            title="Data Security / डेटा सुरक्षा"
                            content="Your personal data is encrypted and stored securely. We never share your sensitive information with third parties. / आपका व्यक्तिगत डेटा एन्क्रिप्टेड और सुरक्षित रूप से संग्रहीत है। हम आपकी संवेदनशील जानकारी तीसरे पक्ष के साथ कभी साझा नहीं करते हैं।"
                        />

                        <PrivacySection
                            icon={<HiOutlineServer size={24} />}
                            title="Use of Information / सूचना का उपयोग"
                            content="The data is used solely for organizational communication and coordination of activities. / डेटा का उपयोग केवल संगठनात्मक संचार और गतिविधियों के समन्वय के लिए किया जाता है।"
                        />

                        <PrivacySection
                            icon={<HiOutlineShieldCheck size={24} />}
                            title="Your Rights / आपके अधिकार"
                            content="You have the right to request access to or deletion of your data at any time. / आपको किसी भी समय अपने डेटा तक पहुंच या उसे हटाने का अनुरोध करने का अधिकार है।"
                        />
                    </div>

                    <div className="mt-20 p-8 bg-slate-50 rounded-3xl border border-dashed border-slate-200 text-center">
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                            Your trust is our priority. / आपका विश्वास हमारी प्राथमिकता है।
                        </p>
                    </div>
                </div>
            </div>

            <LeadershipSection />
        </AnimatedPage>
    );
};

const PrivacySection = ({ icon, title, content }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group"
    >
        <div className="flex items-center gap-6 mb-4">
            <span className="w-12 h-12 rounded-2xl bg-slate-50 text-green-flag flex items-center justify-center shadow-inner group-hover:bg-green-flag group-hover:text-white transition-all duration-500">
                {icon}
            </span>
            <h4 className="text-xl md:text-2xl font-black text-navy-flag group-hover:text-green-flag transition-colors">
                {title}
            </h4>
        </div>
        <p className="text-base md:text-lg leading-relaxed pl-4 border-l-4 border-slate-50 group-hover:border-green-flag/20 transition-all">
            {content}
        </p>
    </motion.div>
);

export default Privacy;
