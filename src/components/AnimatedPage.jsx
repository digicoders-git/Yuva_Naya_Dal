import { motion } from 'framer-motion';

const animations = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
};

const AnimatedPage = ({ children }) => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="min-h-screen pt-24"
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
