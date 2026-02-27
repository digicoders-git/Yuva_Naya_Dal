import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingContact = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp */}
            <motion.a
                href="https://wa.me/919236968527"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                <div className="relative bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-2xl transition-all">
                    <FaWhatsapp size={28} />
                </div>
            </motion.a>

            {/* Call */}
            <motion.a
                href="tel:+917800250000"
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75" />
                <div className="relative bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-2xl transition-all">
                    <FaPhone size={24} />
                </div>
            </motion.a>
        </div>
    );
};

export default FloatingContact;
