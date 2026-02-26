import { motion } from 'framer-motion';
import logo from '../assets/logo.jpeg';

const PageLoader = () => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="relative flex flex-col items-center">
                {/* Logo with Spin Animation */}
                <div className="relative mb-8">
                    <motion.div
                        className="w-28 h-28 border-4 border-saffron border-t-navy-flag rounded-full absolute -inset-2"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                    <motion.img
                        src={logo}
                        alt="Logo"
                        className="w-24 h-24 rounded-full shadow-2xl relative z-10 border-2 border-white"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                <motion.h2
                    className="text-3xl font-black text-navy-flag tracking-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    युवा न्याय दल
                </motion.h2>
                <div className="mt-4 flex gap-1">
                    <motion.div className="w-2 h-2 rounded-full bg-saffron" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                    <motion.div className="w-2 h-2 rounded-full bg-white border border-slate-200 shadow-sm" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                    <motion.div className="w-2 h-2 rounded-full bg-green-flag" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                </div>
            </div>
        </motion.div>
    );
};

export default PageLoader;
