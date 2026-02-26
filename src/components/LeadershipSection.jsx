import React from 'react';
import { motion } from 'framer-motion';
import { image36, image37 } from '../utils/images';

const LeadershipSection = () => {
    return (
        <div className="py-24 md:py-40 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-green-flag font-black uppercase tracking-[0.4em] text-sm block mb-4">Leadership Update</span>
                    <h3 className="text-3xl md:text-6xl font-black text-navy-flag leading-tight">नेतृत्व का <span className="text-saffron">संदेश</span></h3>
                </div>

                <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
                    <LeaderBox
                        img={image36}
                        name="ओम प्रकाश यादव"
                        title="राष्ट्रीय उपाध्यक्ष"
                        subtitle="पूर्व राज्य मंत्री उत्तर प्रदेश सरकार"
                        msg="युवाओं की शक्ति ही देश की असली शक्ति है। हमसे जुड़ें और बदलाव लाएं।"
                    />
                    <LeaderBox
                        img={image37}
                        name="गगन बाजपेई"
                        title="राष्ट्रीय उपाध्यक्ष"
                        msg="न्याय और समानता की इस लड़ाई को हर घर तक पहुंचाना हमारा संकल्प है।"
                    />
                </div>
            </div>
        </div>
    );
};

const LeaderBox = ({ img, name, title, subtitle, msg }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="bg-white p-8 md:p-10 rounded-[40px] md:rounded-[50px] border border-slate-200 flex flex-col md:flex-row items-center gap-8 group shadow-xl hover:shadow-2xl transition-all duration-500"
    >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden shrink-0 border-4 border-white shadow-lg grayscale group-hover:grayscale-0 transition-all">
            <img src={img} className="w-full h-full object-cover" />
        </div>
        <div className="text-center md:text-left flex-1">
            <h4 className="text-xl md:text-2xl font-black text-navy-flag mb-1">{name}</h4>
            <div className="mb-4">
                <p className="text-saffron font-bold text-[10px] md:text-xs uppercase tracking-widest">{title}</p>
                {subtitle && <p className="text-slate-400 font-bold text-[8px] md:text-[10px] uppercase tracking-tighter">{subtitle}</p>}
            </div>
            <p className="text-slate-500 font-medium italic text-sm md:text-base leading-relaxed">"{msg}"</p>
        </div>
    </motion.div>
);

export default LeadershipSection;
