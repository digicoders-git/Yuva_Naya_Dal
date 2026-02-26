import { motion } from 'framer-motion';
import { HiOutlineDocumentText, HiOutlineClock, HiOutlineShieldCheck, HiOutlineInformationCircle } from 'react-icons/hi';
import AnimatedPage from '../components/AnimatedPage';
import LeadershipSection from '../components/LeadershipSection';

const Terms = () => {
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
                    Terms & <span className="text-saffron">Conditions</span>
                </motion.h2>
                <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                    (नियम और शर्तें)
                </p>
            </div>

            <div className="container mx-auto px-6 max-w-5xl pb-20 md:pb-32">
                <div className="bg-white p-8 md:p-16 rounded-[40px] md:rounded-[60px] shadow-2xl border border-slate-100 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-saffron" />

                    <div className="flex flex-col gap-12 text-slate-600">
                        <TermSection
                            title="1. Introduction / परिचय"
                            content="Welcome to Yuva Nyay Dal (Arpolitical). By accessing and using this website, you agree to comply with the following terms and conditions. / युवा न्याय दल (अराजनैतिक) में आपका स्वागत है। इस वेबसाइट का उपयोग करके, आप निम्नलिखित नियमों और शर्तों का पालन करने के लिए सहमत हैं।"
                        />

                        <TermSection
                            title="2. Membership / सदस्यता"
                            content="Membership is voluntary and dedicated to social justice and youth empowerment. No political party affiliation is required. / सदस्यता स्वैच्छिक है और सामाजिक न्याय और युवा सशक्तिकरण के लिए समर्पित है। किसी भी राजनीतिक दल की संबद्धता की आवश्यकता नहीं है।"
                        />

                        <TermSection
                            title="3. User Conduct / उपयोगकर्ता आचरण"
                            content="Users must respect the dignity of the organization and avoid any activities that create social disharmony. / उपयोगकर्ताओं को संगठन की गरिमा का सम्मान करना चाहिए और ऐसी किसी भी गतिविधि से बचना चाहिए जो सामाजिक वैमनस्य पैदा करती हो।"
                        />

                        <TermSection
                            title="4. Intellectual Property / बौद्धिक संपदा"
                            content="All content, logos, and images are protected property of Yuva Nyay Dal. / सभी सामग्री, लोगो और चित्र युवा न्याय दल की सुरक्षित संपत्ति हैं।"
                        />

                        <TermSection
                            title="5. Policy Updates / नीति अपडेट"
                            content="The organization reserves the right to modify these terms at any time. / संगठन किसी भी समय इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखता है।"
                        />
                    </div>

                    {/* <div className="mt-20 p-8 bg-slate-50 rounded-3xl border border-dashed border-slate-200 text-center">
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-3">
                            <HiOutlineInformationCircle size={20} /> Last Updated: February 2026
                        </p>
                    </div> */}
                </div>
            </div>

            <LeadershipSection />
        </AnimatedPage>
    );
};

const TermSection = ({ title, content }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="group"
    >
        <h4 className="text-xl md:text-2xl font-black text-navy-flag mb- flex items-center gap-4 group-hover:text-saffron transition-colors">
            <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-saffron group-hover:text-white transition-all"><HiOutlineDocumentText size={18} /></span>
            {title}
        </h4>
        <p className="text-base md:text-lg leading-relaxed pl-12 border-l-2 border-slate-100 group-hover:border-saffron/30 transition-colors">
            {content}
        </p>
    </motion.div>
);

export default Terms;
