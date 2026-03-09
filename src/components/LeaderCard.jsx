import { motion } from 'framer-motion';

const LeaderCard = ({ 
    image, 
    name, 
    title, 
    subtitle, 
    message, 
    quote, 
    badgeColor = "from-saffron to-orange-600",
    borderColor = "border-saffron",
    imageOrder = "left" 
}) => {
    return (
        <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-flag/5 rounded-full blur-3xl" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: imageOrder === "left" ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`${imageOrder === "left" ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}
                    >
                        <motion.div whileHover={{ scale: 1.02 }} className="relative group">
                            <img
                                src={image}
                                alt={name}
                                className="relative w-full max-w-md h-auto max-h-[500px] object-contain bg-white rounded-2xl shadow-2xl border-4 border-white mx-auto"
                            />
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${badgeColor} text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold shadow-xl text-xs md:text-sm whitespace-nowrap`}
                            >
                                {title}
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: imageOrder === "left" ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`${imageOrder === "left" ? "order-2 lg:order-2" : "order-2 lg:order-1"} space-y-4 md:space-y-6`}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-flag mb-2 font-heading">
                                {name}
                            </h3>
                            {subtitle && <p className="text-base md:text-lg text-slate-600 font-semibold">{subtitle}</p>}
                        </motion.div>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="h-1 w-20 bg-gradient-to-r from-saffron to-green-flag"
                        />

                        {/* Message Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className={`bg-gradient-to-br from-slate-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 ${borderColor} border-l-4 shadow-lg`}
                        >
                            <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                                <div className="text-2xl md:text-3xl">💬</div>
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold text-navy-flag mb-2">संदेश</h4>
                                    <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                                        {message}
                                    </p>
                                </div>
                            </div>
                            
                            {quote && (
                                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-200">
                                    <p className="text-navy-flag font-bold italic text-base md:text-lg">
                                        "{quote}"
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LeaderCard;
