import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiOutlineX, HiOutlineIdentification } from 'react-icons/hi';
import { logo } from '../utils/images';
import IdCardModal from './IdCardModal';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isIdCardOpen, setIsIdCardOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Our Gallery', path: '/gallery' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
            {/* Top decorative line */}
            <div className="gov-gradient w-full" />

            <nav className="w-full bg-white">
                <div className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between min-h-[72px]">
                {/* Logo & Brand Name */}
                <NavLink to="/" className="flex items-center gap-3 group">
                    <motion.img
                        src={logo}
                        alt="Yuva Nyay Dal"
                        className="h-13 w-13 rounded-full object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                    />
                    <div className="flex flex-col gap-0">
                        <span className="text-navy-flag font-bold text-xl md:text-2xl leading-none font-hindi">युवा न्याय दल</span>
                        <span className="text-saffron text-[10px] font-bold tracking-[0.2em] font-body uppercase">(अराजनैतिक)</span>
                    </div>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden xl:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `nav-link transition-all relative py-1 font-bold text-md ${isActive ? 'text-saffron active-nav' : 'text-navy-flag'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    {/* ID Card Download Header Button */}
                    <button
                        type="button"
                        onClick={() => setIsIdCardOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm text-navy-flag bg-amber-50 hover:bg-saffron hover:text-white border-2 border-amber-200 hover:border-saffron transition-all shadow-sm group cursor-pointer"
                    >
                        <HiOutlineIdentification size={19} className="text-saffron group-hover:text-white transition-colors" />
                        <span>पहचान पत्र (ID Card)</span>
                    </button>

                    <NavLink
                        to="/connect"
                        className={({ isActive }) =>
                            `px-5 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-saffron/20 group border-2 text-sm ${isActive
                                ? 'bg-saffron text-white border-saffron'
                                : 'bg-navy-flag text-white border-navy-flag hover:bg-saffron hover:border-saffron'
                            }`
                        }
                    >
                        Connect Now
                    </NavLink>
                </div>

                {/* Mobile Menu Button (Switch at XL) */}
                <button
                    className="xl:hidden text-3xl text-navy-flag outline-none focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer (Switch at XL) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl relative z-10"
                    >
                        <ul className="container mx-auto px-6 py-8 flex flex-col gap-6 font-medium">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `block text-xl transition-all ${isActive ? 'text-saffron pl-4 border-l-4 border-saffron' : 'text-navy-flag hover:text-saffron hover:pl-2'}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}

                            {/* Mobile ID Card Button */}
                            <li className="mt-2">
                                <button
                                    type="button"
                                    onClick={() => { setIsMenuOpen(false); setIsIdCardOpen(true); }}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-navy-flag bg-amber-50 hover:bg-saffron hover:text-white border-2 border-amber-200 transition-all shadow-md"
                                >
                                    <HiOutlineIdentification size={22} className="text-saffron" />
                                    <span>पहचान पत्र डाउनलोड (ID Card)</span>
                                </button>
                            </li>

                            <li className="mt-1">
                                <NavLink
                                    to="/connect"
                                    className={({ isActive }) =>
                                        `block text-center px-6 py-3 rounded-full font-bold transition-all shadow-lg ${isActive
                                            ? 'bg-saffron text-white'
                                            : 'bg-navy-flag text-white hover:bg-saffron'
                                        }`
                                    }
                                >
                                    Connect Now
                                </NavLink>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ID Card Download Modal */}
            <IdCardModal isOpen={isIdCardOpen} onClose={() => setIsIdCardOpen(false)} />
        </header>
    );
};

export default Header;
