import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineLocationMarker
} from 'react-icons/hi';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube
} from 'react-icons/fa';
import { logo } from '../utils/images';
import FloatingContact from './FloatingContact';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-white pt-24 pb-12 overflow-hidden border-t border-slate-100">
            {/* Floating Contact Icons */}
            <FloatingContact />
            
            {/* Top decorative line */}
            <div className="gov-gradient w-full absolute top-0 left-0" />

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {/* Brand Section */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <img src={logo} alt="Yuva Nyay Dal" className="h-16 w-16 rounded-full shadow-lg" />
                        <div>
                            <h3 className="text-2xl font-bold text-navy-flag">युवा न्याय दल</h3>
                            <p className="text-xs text-saffron uppercase tracking-widest font-semibold italic">समाज में न्याय, समानता और पारदर्शिता</p>
                        </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm italic">
                        देश का भविष्य युवाओं के हाथ में है, और यदि उन्हें सही दिशा, अवसर और मंच मिले तो वे राष्ट्र निर्माण में महत्वपूर्ण भूमिका निभा सकते हैं।
                    </p>
                    <div className="flex gap-4">
                        <SocialIcon icon={<FaFacebookF />} color="bg-blue-600" />
                        <SocialIcon icon={<FaTwitter />} color="bg-sky-500" />
                        <SocialIcon icon={<FaInstagram />} color="bg-pink-600" />
                        <SocialIcon icon={<FaYoutube />} color="bg-red-600" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold text-navy-flag mb-8 border-l-4 border-saffron pl-4">Quick Links</h4>
                    <ul className="flex flex-col gap-4 text-slate-600 font-medium">
                        <FooterLink name="Home" path="/" />
                        <FooterLink name="About Us" path="/about" />
                        <FooterLink name="Our Gallery" path="/gallery" />
                        <FooterLink name="Contact Us" path="/contact" />
                        <FooterLink name="Connect With Us" path="/connect" />
                    </ul>
                </div>

                {/* Information */}
                <div>
                    <h4 className="text-lg font-bold text-navy-flag mb-8 border-l-4 border-green-flag pl-4">Important Info</h4>
                    <ul className="flex flex-col gap-4 text-slate-600 font-medium">
                        {/* <li><Link to="/vision" className="hover:text-saffron transition-colors">Our Vision</Link></li>
                        <li><Link to="/mission" className="hover:text-saffron transition-colors">Our Mission</Link></li> */}
                        <li><Link to="/contact" className="hover:text-saffron transition-colors">Join as Volunteer</Link></li>
                        <li><Link to="/terms" className="hover:text-saffron transition-colors">Terms & Conditions</Link></li>
                        <li><Link to="/privacy" className="hover:text-saffron transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h4 className="text-lg font-bold text-navy-flag mb-8 border-l-4 border-navy-flag pl-4">Contact Details</h4>
                    <ul className="flex flex-col gap-6 text-slate-600 text-sm">
                        <li className="flex items-start gap-4">
                            <span className="p-2 bg-saffron/10 text-saffron rounded-lg mt-1"><HiOutlineLocationMarker size={20} /></span>
                            <span>69/2 Deen Dayal Nagar, Khadra, <br /> Nirala Nagar, Lucknow</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-2 bg-navy-flag/10 text-navy-flag rounded-lg"><HiOutlinePhone size={20} /></span>
                            <a href="tel:+917800250000" className="hover:text-saffron transition-colors">+91 78002 50000</a>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-2 bg-green-flag/10 text-green-flag rounded-lg"><HiOutlineMail size={20} /></span>
                            <a href="mailto:yuvanyaydal2026@gmail.com" className="hover:text-saffron transition-colors">yuvanyaydal2026@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="container mx-auto px-6 mt-20 pt-8 border-t border-slate-100 text-center">
                <p className="text-slate-500 text-sm">
                    © {currentYear} <span className="text-navy-flag font-bold">Yuva Nyay Dal</span>. All rights reserved.
                    <br /> <a href="https://digicoders.in/" className="text-saffron hover:underline">Team DigiCoders</a></p>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon, color }) => (
    <motion.a
        whileHover={{ y: -5, scale: 1.1 }}
        href="#"
        className={`${color} text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all`}
    >
        {icon}
    </motion.a>
);

const FooterLink = ({ name, path }) => (
    <li>
        <Link to={path} className="hover:text-saffron transition-colors flex items-center gap-2 group">
            <span className="w-1.5 h-1.5 bg-slate-300 group-hover:bg-saffron rounded-full transition-colors" />
            {name}
        </Link>
    </li>
);

export default Footer;
